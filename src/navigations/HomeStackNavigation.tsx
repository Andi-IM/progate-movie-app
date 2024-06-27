import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="MovieDetail" component={Detail}/>
    </Stack.Navigator>
}

export default StackNavigator;