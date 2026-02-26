import { createContext, useReducer } from "react";
import DUMMYEXPENSES from "../DummyData/DummyData";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, data) => { },
});

//state = dummy array(initial state)
function expensesReducer(state, action) {
    switch (action.type) {
        case "ADD":
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];

        case "DELETE":
            return state.filter((expense) => expense.id !== action.payload);

        case "UPDATE":
            const index = state.findIndex(
                (expense) => expense.id === action.payload.id
            );

            const updatedExpense = {
                ...state[index],
                ...action.payload.data,
            };

            const updatedExpenses = [...state];
            updatedExpenses[index] = updatedExpense;

            return updatedExpenses;

        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    //udpated state returned
    const [expensesState, dispatch] = useReducer(
        expensesReducer, // updated state
        [] //initial state
    );

    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({
            type: "UPDATE",
            payload: { id: id, data: expenseData },
        });
    }

    const value = {
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;