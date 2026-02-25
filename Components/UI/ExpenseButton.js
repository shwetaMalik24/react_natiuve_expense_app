import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../Constants/Styles";

function ExpenseButton({ buttontitle, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed, //pressed true then both styles are applied
                //pressed false only styles.button is applied
            ]}
        >
            <Text style={styles.text}>{buttontitle}</Text>
        </Pressable>
    );
}

export default ExpenseButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: GlobalStyles.colors.primary100,
        marginHorizontal: 8,
        alignItems: "center",
    },
    text: {
        backgroundColor: GlobalStyles.colors.primary100,
        fontWeight: "600",
        color: GlobalStyles.colors.primary500,
    },
    pressed: {
        opacity: 0.7,
    },
});