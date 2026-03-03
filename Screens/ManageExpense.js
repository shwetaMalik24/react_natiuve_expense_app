import { Text, TextInput, View, StyleSheet, Pressable, Platform } from 'react-native';
import ExpenseButton from '../Components/UI/ExpenseButton';
import { useContext, useState } from 'react';
import { ExpensesContext } from '../Context/ManageExpenseContext';
import ExpenseTextEdit from '../Components/UI/ExpenseTextEdit';
import AddExpense from './AddExpense';
import ExpenseAlert from '../Components/UI/ExpenseAlert';
import DateTimePicker from '@react-native-community/datetimepicker';


function ManageExpense({ route, navigation }) {
    const expense = route.params?.expense;
    const [enteredDescription, setEnteredDescription] = useState(
        expense ? expense.description : ''
    );

    const [enteredAmount, setEnteredAmount] = useState(
        expense ? expense.amount.toString() : ''
    );


    const [selectedDate, setSelectedDate] = useState(
        expense ? new Date(expense.date) : new Date()
    );
    const [showPicker, setShowPicker] = useState(false);
    const expensesCtx = useContext(ExpensesContext);
    function formatDate(date) {
        return date.toLocaleDateString();
    }
    function onChange(event, date) {
        if (Platform.OS === 'android') {
            setShowPicker(false);
        }

        if (date) {
            setSelectedDate(date);
        }
    }

    function EditExpenseHandler() {
        if (!enteredDescription || !enteredAmount) {
            ExpenseAlert({
                title: "Invalid Input",
                message: "Please enter both description and amount.",
                buttonTxt: "OK",
            });
            return;
        }
        expensesCtx.updateExpense(
            expense.id,
            {
                description: enteredDescription,
                amount: +enteredAmount,
                date: selectedDate
            }
        );
        navigation.pop();
    }
    function DeleteExpenseHandler() {
        expensesCtx.deleteExpense(
            expense.id,
        );
        navigation.pop();
    }
    if (expense) {
        return (
            <View style={styles.container}>
                <ExpenseTextEdit enteredAmount={enteredAmount} setEnteredAmount={setEnteredAmount} enteredDescription={enteredDescription} setEnteredDescription={setEnteredDescription}></ExpenseTextEdit>
                <Pressable onPress={() => setShowPicker(true)}>
                    <Text style={styles.dateContainer}>{selectedDate.toLocaleDateString()}</Text>
                </Pressable>
                {showPicker && (
                    <DateTimePicker
                        value={selectedDate}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        maximumDate={new Date()}
                        onChange={onChange}
                    />
                )}
                <View style={styles.buttonView}>
                    <ExpenseButton buttontitle='Save Expense' onPress={EditExpenseHandler} />
                    <ExpenseButton buttontitle='Delete Expense' onPress={DeleteExpenseHandler} />
                </View>
            </View>
        );
    }
    return (
        <AddExpense />

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
    },
    dateContainer: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 8,
    }
});