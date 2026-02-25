
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ManageExpense from './Screens/ManageExpense';
import RecentExpenses from './Screens/RecentExpenses';
import AllExpenses from './Screens/AllExpenses';
import { GlobalStyles } from './Constants/Styles';
import IconButton from './Components/UI/IconButton';
import ExpensesContextProvider from './Context/ManageExpenseContext';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function CreateBottomNavigator() {
  return (
    <BottomTabs.Navigator
      // screenOptions={{

      // }}
      screenOptions={({ navigation }) => ({
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('manageexpensescreen');
            }}
          />
        ),
        headerStyle: { backgroundColor: GlobalStyles.colors.primary100 },
        headerTintColor: GlobalStyles.colors.black,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary100 },
        tabBarActiveTintColor: GlobalStyles.colors.black,
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}


export default function App() {

  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="bottontabs"
            component={CreateBottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='manageexpensescreen' component={ManageExpense} options={{
            title: "Manage Expense Screen"
          }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}