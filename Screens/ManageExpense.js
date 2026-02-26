import { Text, TextInput, View, StyleSheet } from 'react-native';
import ExpenseButton from '../Components/UI/ExpenseButton';
import { useContext, useState } from 'react';
import { ExpensesContext } from '../Context/ManageExpenseContext';
import ExpenseTextEdit from '../Components/UI/ExpenseTextEdit';
import AddExpense from './AddExpense';

function ManageExpense({ route, navigation }) {
    const expense = route.params?.expense;
    const [enteredDescription, setEnteredDescription] = useState(
        expense ? expense.description : ''
    );

    const [enteredAmount, setEnteredAmount] = useState(
        expense ? expense.amount.toString() : ''
    );

    const expensesCtx = useContext(ExpensesContext);

    function EditExpenseHandler() {
        expensesCtx.updateExpense(
            expense.id,   // first argument (id)
            {
                description: enteredDescription,
                amount: +enteredAmount,
                date: new Date("2026-02-23"),
            }             // second argument (data)
        );
        navigation.pop();
    }
    function DeleteExpenseHandler() {
        expensesCtx.deleteExpense(
            expense.id,   // first argument (id)
        );
        navigation.pop();
    }
    if (expense) {
        return (
            <View style={styles.container}>
                <ExpenseTextEdit enteredAmount={enteredAmount} setEnteredAmount={setEnteredAmount} enteredDescription={enteredDescription} setEnteredDescription={setEnteredDescription}></ExpenseTextEdit>
                <View style={styles.buttonView}>
                    <ExpenseButton buttontitle='Save Expense' onPress={EditExpenseHandler} />
                    <ExpenseButton buttontitle='Delete Expense' onPress={DeleteExpenseHandler} />
                </View>
            </View>
        );
    }
    return (
        <AddExpense />
        // <View style={styles.container}>
        //     <Text>
        //         No expense selected
        //     </Text>
        //     <ExpenseButton buttontitle='Add Expense' onPress={AddExpenseHandler}></ExpenseButton>
        // </View >

    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    }
});