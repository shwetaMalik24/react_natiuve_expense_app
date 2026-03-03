import { Alert } from "react-native";
function ExpenseAlert({ title, message, buttonTxt }) {
    Alert.alert(
        title,
        message,
        [{ text: buttonTxt }]
    );
}

export default ExpenseAlert;