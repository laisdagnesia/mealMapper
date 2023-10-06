import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MenuScreen} from '../screens/menu';
import { LoginScreen } from '../screens/login';
import {CadastroScreen} from '../screens/cadastro'; 
import {CalculoIMC} from '../screens/calculos/imcCalculo'; 
import { OpcoesCalculo } from '../screens/calculos/OpcoesCalculo';
import {MaterialIcons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

export type NavegacaoPrincipalParams = {
  menu: undefined,
  cadastro: undefined,
  login: undefined,
  imc: undefined,
  calculosOpcoes: undefined,
}
const Stack = createStackNavigator<NavegacaoPrincipalParams>();


export const TelaConfiguracao = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="menu" component={MenuScreen}/>
            <Stack.Screen name="cadastro" component={CadastroScreen}/>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="imc" component={CalculoIMC}/>
            <Stack.Screen name="calculosOpcoes" component={OpcoesCalculo}/>
        </Stack.Navigator>
    </NavigationContainer>
)
