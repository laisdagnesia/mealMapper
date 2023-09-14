import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MenuScreen} from '../screens/menu';
import { LoginScreen } from '../screens/login';
import {CadastroScreen} from '../screens/cadastro'; 
import {MaterialIcons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

export type NavegacaoPrincipalParams = {
  menu: undefined,
  cadastro: undefined,
  login: undefined
}
const Stack = createStackNavigator<NavegacaoPrincipalParams>();


export const TelaConfiguracao = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="menu" component={MenuScreen}/>
            <Stack.Screen name="cadastro" component={CadastroScreen}/>
            <Stack.Screen name="login" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
