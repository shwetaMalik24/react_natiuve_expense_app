import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';
import { useNavigation } from '@react-navigation/native';

function ExpensesList({ expenses }) {

    const navigation = useNavigation();

    function renderExpenseItem(itemData) {
        function expensePressHandler() {
            navigation.navigate('manageexpensescreen', {
                expense: itemData.item,
            });
        }
        return (
            <ExpenseItem onPress={expensePressHandler}
                {...itemData.item}
            />
        );
    }

    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default ExpensesList;