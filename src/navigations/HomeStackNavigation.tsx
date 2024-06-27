import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import MovieDetail from "../screens/MovieDetail";

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return <Stack.Navigator>
        <Stack.Screen name="HOME" component={Home}/>
        <Stack.Screen name="DETAIL" component={MovieDetail}/>
    </Stack.Navigator>
}

export default StackNavigator;