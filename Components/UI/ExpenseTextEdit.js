import { View, TextInput, StyleSheet } from 'react-native';
function ExpenseTextEdit({ enteredAmount, setEnteredAmount, enteredDescription, setEnteredDescription }) {
    return (
        <View>
            <TextInput style={styles.input}
                value={enteredDescription}
                placeholder='Enter Description'
                onChangeText={setEnteredDescription}>
            </TextInput>
            <TextInput
                style={styles.input}
                value={enteredAmount}
                placeholder='Enter Amount'
                onChangeText={setEnteredAmount}
                keyboardType="decimal-pad">
            </TextInput>
        </View>
    );

}
export default ExpenseTextEdit;

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 8,
    },
});