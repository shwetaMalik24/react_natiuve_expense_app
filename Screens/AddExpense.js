import { View, StyleSheet, Button, Platform, Pressable, Text } from 'react-native';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import ExpenseTextEdit from '../Components/UI/ExpenseTextEdit';
import ExpenseButton from '../Components/UI/ExpenseButton';
import { ExpensesContext } from '../Context/ManageExpenseContext';
import ExpenseAlert from '../Components/UI/ExpenseAlert';
import DateTimePicker from '@react-native-community/datetimepicker';
function AddExpense() {
    const navigation = useNavigation();
    const expensesCtx = useContext(ExpensesContext);
    const [enteredDescription, setEnteredDescription] = useState('');

    const [enteredAmount, setEnteredAmount] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
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

    function AddExpenseHandler() {
        if (!enteredDescription || !enteredAmount) {
            ExpenseAlert({
                title: "Invalid Input",
                message: "Please enter both description and amount.",
                buttonTxt: "OK",
            });
            return;
        }
        expensesCtx.addExpense({
            description: enteredDescription,
            amount: +enteredAmount,
            date: selectedDate,
        });
        navigation.pop();
    }
    return (
        <View style={styles.container}>
            <ExpenseTextEdit enteredAmount={enteredAmount} setEnteredAmount={setEnteredAmount} enteredDescription={enteredDescription} setEnteredDescription={setEnteredDescription}></ExpenseTextEdit>
            <Pressable onPress={() => setShowPicker(true)}>
                <Text style={styles.dateContainer}>{formatDate(selectedDate)}</Text>
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
            <ExpenseButton buttontitle='Add Expense' onPress={AddExpenseHandler} />
        </View>
    );
}

export default AddExpense;
const styles = StyleSheet.create({
    container: {
        padding: 10,
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