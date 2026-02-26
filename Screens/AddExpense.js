import { View, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import ExpenseTextEdit from '../Components/UI/ExpenseTextEdit';
import ExpenseButton from '../Components/UI/ExpenseButton';
import { ExpensesContext } from '../Context/ManageExpenseContext';
function AddExpense() {
    const navigation = useNavigation();
    const expensesCtx = useContext(ExpensesContext);
    const [enteredDescription, setEnteredDescription] = useState('');

    const [enteredAmount, setEnteredAmount] = useState('');

    function AddExpenseHandler() {
        expensesCtx.addExpense({
            description: enteredDescription,
            amount: +enteredAmount,
            date: new Date("2026-02-23"),
        });
        navigation.pop();
    }
    return (
        <View style={styles.container}>
            <ExpenseTextEdit enteredAmount={enteredAmount} setEnteredAmount={setEnteredAmount} enteredDescription={enteredDescription} setEnteredDescription={setEnteredDescription}></ExpenseTextEdit>
            <ExpenseButton buttontitle='Add Expense' onPress={AddExpenseHandler} />
        </View>
    );
}

export default AddExpense;
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});