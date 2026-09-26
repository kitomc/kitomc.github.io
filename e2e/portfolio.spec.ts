import { expect, test, type Page } from "@playwright/test";

async function open(page: Page) {
  await page.goto("/");
  await expect(page.locator(".loader")).toHaveAttribute("data-done", "true", { timeout: 10_000 });
}

test.describe("Portfolio", () => {
  test("preloader shows progress and hands off to the hero", async ({ page }) => {
    await page.goto("/");
    const loader = page.locator(".loader");
    await expect(loader).toHaveAttribute("role", "status");
    await expect(loader).toHaveAttribute("data-done", "true", { timeout: 10_000 });
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Francis Gonzalez");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("renders every section a recruiter needs", async ({ page }) => {
    await open(page);
    for (const id of ["sobre-mi", "servicios", "proyectos", "integraciones", "metodologia", "experiencia", "stack", "contacto"]) {
      await expect(page.locator(`#${id}`), id).toHaveCount(1);
    }
    await expect(page.getByRole("heading", { name: /SDD, DDD y POO/ })).toBeVisible();
  });

  test("lists the seven projects with the correct ownership labels", async ({ page }) => {
    await open(page);
    const cards = page.locator("#proyectos article");
    await expect(cards).toHaveCount(7);
    await expect(page.locator("#proyectos").getByText("Desarrollado por mí")).toHaveCount(6);
    await expect(page.locator("#proyectos").getByText("Desarrollo y mantenimiento en equipo")).toHaveCount(1);
    const planix = cards.filter({ hasText: "Planix" });
    await expect(planix.getByText("Desarrollo y mantenimiento en equipo")).toBeVisible();
  });

  test("project screenshots load and external links open in a new tab", async ({ page }) => {
    await open(page);
    await page.locator("#proyectos").scrollIntoViewIfNeeded();
    const imgs = page.locator("#proyectos img");
    const n = await imgs.count();
    for (let i = 0; i < n; i++) {
      await imgs.nth(i).scrollIntoViewIfNeeded();
      await expect.poll(() => imgs.nth(i).evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
    }
    const external = page.locator('a[href^="http"]');
    const count = await external.count();
    expect(count).toBeGreaterThan(5);
    for (let i = 0; i < count; i++) {
      await expect(external.nth(i)).toHaveAttribute("target", "_blank");
      await expect(external.nth(i)).toHaveAttribute("rel", /noreferrer/);
    }
  });

  test("integrations section shows Bubble apps, plugins and DGII", async ({ page }) => {
    await open(page);
    const section = page.locator("#integraciones");
    await section.scrollIntoViewIfNeeded();
    await expect(section.locator("figure")).toHaveCount(12);
    await expect(section.getByText("DGII · Facturación electrónica (e-CF)").first()).toBeVisible();
    await expect(section.getByRole("img", { name: "Logo de la DGII" })).toBeVisible();
    await expect(section.getByText("WhatsApp Meta WABAs")).toBeVisible();
  });

  test("scroll reveal makes content visible once it enters the viewport", async ({ page }) => {
    await open(page);
    const about = page.locator("#sobre-mi [data-reveal]").first();
    await about.scrollIntoViewIfNeeded();
    await expect(about).toHaveClass(/is-in/);
    await expect.poll(() => about.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
  });

  test("contact actions point to the right places", async ({ page }) => {
    await open(page);
    await expect(page.locator('a[href^="mailto:kitomc.rd@gmail.com"]').first()).toBeAttached();
    await expect(page.locator('a[href="tel:+18294810779"]').first()).toBeAttached();
    const cv = page.locator('a[href="/cv-francis-gonzalez.pdf"]').first();
    await expect(cv).toHaveAttribute("download", "");
    const res = await page.request.get("/cv-francis-gonzalez.pdf");
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("pdf");
  });

  test("emits no console errors or failed requests", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("requestfailed", (r) => errors.push(`request failed: ${r.url()}`));
    await open(page);
    await page.mouse.wheel(0, 20_000);
    await page.waitForTimeout(500);
    expect(errors).toEqual([]);
  });
});

test.describe("Navigation", () => {
  test("desktop nav links jump to their sections", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop-only nav");
    await open(page);
    await page.getByRole("navigation", { name: "Principal" }).getByRole("link", { name: "Proyectos" }).click();
    await expect.poll(() => page.evaluate(() => location.hash)).toBe("#proyectos");
    await expect(page.locator("#proyectos")).toBeInViewport();
  });

  test("mobile menu opens, navigates and closes", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile-only menu");
    await open(page);
    const toggle = page.getByRole("button", { name: "Abrir menú" });
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await page.getByRole("navigation", { name: "Principal móvil" }).getByRole("link", { name: "Contacto" }).click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator("#contacto")).toBeInViewport();
  });

  test("layout has no horizontal overflow", async ({ page }) => {
    await open(page);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});

test.describe("Reduced motion", () => {
  test.use({ reducedMotion: "reduce" });
  test("keeps content visible without entrance animations", async ({ page }) => {
    await open(page);
    const h1 = page.getByRole("heading", { level: 1 });
    await expect.poll(() => h1.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
    const stack = page.locator("#stack [data-reveal]").first();
    await expect.poll(() => stack.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
  });
});

test.describe("Recruiter signals", () => {
  test("hero states the stack without scrolling and project cards carry no metric badges", async ({ page }) => {
    await open(page);
    const stack = page.getByRole("list", { name: "Stack principal" });
    await expect(stack).toBeInViewport();
    for (const t of ["React", "TypeScript", "Node.js", "Convex", "Supabase"]) await expect(stack.getByText(t, { exact: true })).toBeVisible();
    const cards = page.locator("#proyectos article");
    await expect(cards).toHaveCount(7);
    await expect(cards.locator(".count")).toHaveCount(0);
  });
});
