import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expensesTotal";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpenseTotal = numeral(expensesTotal / 100).format("$0,00.00");
  return (
    <div>
      <p>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
