import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../Constants/Styles';
import { getFormattedDate } from '../../Utils/date';

function ExpenseItem({ description, amount, date, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,
            ]}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>
                        {description}
                    </Text>
                    <Text style={styles.textBase}>
                        {getFormattedDate(new Date(date))}
                    </Text>
                </View>

                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>
                        ${amount.toFixed(2)}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem;

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
    },
    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,

        // Android shadow
        elevation: 3,

        // iOS shadow
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary500,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
});