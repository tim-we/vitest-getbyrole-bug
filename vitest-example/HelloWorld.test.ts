import { expect, test } from 'vitest';
import { getAllByRole } from '@testing-library/dom';
import TestTable from './HelloWorld.js';
import { page } from '@vitest/browser/context';

test("getByRole columnheader", () => {
  const parent = TestTable();
  document.body.appendChild(parent);

  // Works
  const table = page.getByRole("table");
  expect(table).toBeVisible();

  // The column header exists
  const column1Element = document.querySelector("th");
  expect(column1Element).not.toBeNull();
  expect(column1Element).toBeVisible();

  // Using @testing-library/dom it also works...
  const th = getAllByRole(parent, "columnheader")[0];
  expect(th).toBeDefined();
  expect(th).toBeVisible();

  // But somehow this does not work
  const column1Locator = page.getByRole("columnheader").first();
  expect(column1Locator).toBeVisible();
  // VitestBrowserElementError: Cannot find element with locator: getByRole('columnheader').first()
});
