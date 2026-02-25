import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import DUMMYEXPENSES from '../DummyData/DummyData';
import { useContext } from 'react';
import { ExpensesContext } from '../Context/ManageExpenseContext';
function AllExpenses() {
    //should be in fucntion
    const expensesCtx = useContext(ExpensesContext);

    return (
        <ExpensesOutput expensesPeriod="total" expenses={expensesCtx.expenses} />
    );
}

export default AllExpenses;