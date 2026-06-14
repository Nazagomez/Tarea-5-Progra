import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const baseUrl = 'http://127.0.0.1:5173';
const outputDir = join(process.cwd(), 'capturas');

async function openAccordionSection(page, sectionName) {
  const header = page.getByRole('button', { name: sectionName });
  const panel = page.locator(`text=${sectionName}`).locator('xpath=ancestor::*[contains(@class, "p-accordionpanel")]').first();
  const isExpanded = await panel.getAttribute('data-p-active');
  if (isExpanded !== 'true') {
    await header.click();
    await page.waitForTimeout(300);
  }
}

async function captureScreenshots() {
  mkdirSync(outputDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(baseUrl, { waitUntil: 'networkidle' });

  await openAccordionSection(page, 'Libros');
  await page.getByRole('tab', { name: 'Libro' }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(outputDir, '01-detalle-libro.png'), fullPage: true });

  await openAccordionSection(page, 'Autores');
  await page.locator('.sidebar-list-item', { hasText: 'Mark Twain' }).click();
  await page.getByRole('tab', { name: 'Autor' }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(outputDir, '02-detalle-autor.png'), fullPage: true });

  await openAccordionSection(page, 'Editoriales');
  await page.locator('.sidebar-list-item', { hasText: 'Ediciones Alfaguara' }).click();
  await page.getByRole('tab', { name: 'Editorial' }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(outputDir, '03-detalle-editorial.png'), fullPage: true });

  await openAccordionSection(page, 'Clasificación');
  await page.locator('.sidebar-list-item', { hasText: 'Clásicos' }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(outputDir, '04-clasificacion.png'), fullPage: true });

  await browser.close();
  console.log('Capturas guardadas en', outputDir);
}

captureScreenshots().catch((error) => {
  console.error(error);
  process.exit(1);
});
