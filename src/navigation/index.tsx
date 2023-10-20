import { NavigationContainer } from '@react-navigation/native';
import {MenuScreen} from '../screens/menu/menuGeral';
import { LoginScreen } from '../screens/login/loginCliente';
import { LoginScreenNutri } from '../screens/login/loginNutri';
import {CadastroScreen} from '../screens/cadastro'; 
import {CalculoIMC} from '../screens/calculos/imcCalculo'; 
import { OpcoesCalculo } from '../screens/calculos/OpcoesCalculo';
import {MenuNutri} from '../screens/menuNutri/menuNutri';
import {AgendarConsultaScreen} from '../screens/agendamento/agendamento';
import {MaterialIcons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

export type NavegacaoPrincipalParams = {
  menu: undefined,
  cadastro: undefined,
  login: undefined,
  imc: undefined,
  calculosOpcoes: undefined,
  menuNutri: undefined,
  loginNutri: undefined,
  agendamento: undefined,
}
const Stack = createStackNavigator<NavegacaoPrincipalParams>();


export const TelaConfiguracao = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="menu" component={MenuScreen}/>
            <Stack.Screen name="cadastro" component={CadastroScreen}/>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="loginNutri" component={LoginScreenNutri}/>
            <Stack.Screen name="imc" component={CalculoIMC}/>
            <Stack.Screen name="calculosOpcoes" component={OpcoesCalculo}/>
            <Stack.Screen name="menuNutri" component={MenuNutri}/>
            <Stack.Screen name="agendamento" component={AgendarConsultaScreen}/>
            
        </Stack.Navigator>
    </NavigationContainer>
)
