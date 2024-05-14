import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { Screen1, Screen2, Screen3, Screen4, Screen5,
     Screen6, Screen7, Screen8, Screen9, Screen10, Screen11, Screen12, Screen13, Screen14, Screen15, Screen16, Screen17 } from '../Screens';


export function Home() {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
            })}>
            <Stack.Screen name="sc1" component={Screen1} />
            <Stack.Screen name="sc2" component={Screen2} />
            <Stack.Screen name="sc3" component={Screen3} />
            <Stack.Screen name="sc4" component={Screen4} />
            <Stack.Screen name="sc5" component={Screen5} />
            <Stack.Screen name="sc6" component={Screen6} />
            <Stack.Screen name="sc7" component={Screen7} />
            <Stack.Screen name="sc8" component={Screen8} />
            <Stack.Screen name="scxuathang" component={Screen16} />
            <Stack.Screen name="sctonkho" component={Screen10} />
            <Stack.Screen name="scxinhang" component={Screen11} />
            <Stack.Screen name="sc11" component={Screen12} />
            <Stack.Screen name="sc12" component={Screen13} />
            <Stack.Screen name="tamung" component={Screen14} />
            <Stack.Screen name="sc14" component={Screen15} />
        </Stack.Navigator>
    );
}