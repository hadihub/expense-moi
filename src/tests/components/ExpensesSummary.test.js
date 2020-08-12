import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpenseSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={500} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={15} expensesTotal={16500} />
  );
  expect(wrapper).toMatchSnapshot();
});
