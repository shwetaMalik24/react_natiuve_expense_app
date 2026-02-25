import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import DUMMYEXPENSES from '../DummyData/DummyData';
import { useContext } from 'react';
import { ExpensesContext } from '../Context/ManageExpenseContext';

function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    const fiveDaysAgo = new Date();
    const today = new Date();
    fiveDaysAgo.setDate(today.getDate() - 5);

    const recentExpenses = expensesCtx.expenses.filter(expense =>
        expense.date >= fiveDaysAgo
    );
    return (
        <ExpensesOutput expensesPeriod="Last 5 days" expenses={recentExpenses} />
    );
}

export default RecentExpenses;