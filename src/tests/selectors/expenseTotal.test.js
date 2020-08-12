import getTotalofExpenses from "../../selectors/expensesTotal";
import expenses from "../fixtures/expenses";

test("Should give the sum when no expenses", () => {
  const result = getTotalofExpenses([]);
  expect(result).toEqual(0);
});

test("Should give the sum of expenses amounts", () => {
  const result = getTotalofExpenses(expenses);
  expect(result).toEqual(114195);
});
