import { NavigationContainer } from '@react-navigation/native';
import {MenuScreen} from '../screens/menu/menuGeral';
import { LoginScreen } from '../screens/loginPaciente/loginPaciente';
import { LoginScreenNutri } from '../screens/loginNutri/loginNutri';
import {CadastroScreen} from '../screens/cadastro'; 
import {CalculoIMC} from '../screens/calculos/imcCalculo'; 
import { OpcoesCalculo } from '../screens/calculos/OpcoesCalculo';
import {MenuNutri} from '../screens/menuNutri/menuNutri';
import{MenuPaciente} from'../screens/menuPaciente/menuPaciente';
import {AgendarConsultaScreen} from '../screens/agendamento/agendamento';
import { CadastroPaciente } from '../screens/cadastroPaciente/cadastroPaciente';
import ListaDePacientes from "../screens/listaPacientes/listaPacientes";
import ListaPlanoAlimentar from "../screens/listaPlanoAlimentar/listaPlanoAlimentar";
import { PlanoAlimentarIndividual } from '../screens/planoAlimentar/planoAlimentar';
import { TirarFoto } from '../screens/cadastroPaciente/tirarFoto';
 import { createStackNavigator } from '@react-navigation/stack';

export type NavegacaoPrincipalParams = {
  menu: undefined,
  cadastro: undefined,
  login: undefined,
  imc: undefined,
  calculosOpcoes: undefined,
  menuNutri: undefined,
  menuPaciente: undefined,
  loginNutri: undefined,
  agendamento: undefined,
  cadastroPaciente: undefined,
  listaPacientes: undefined,
  planoAlimentar: undefined,
  listaPlanoAlimentar:undefined,
  tiraFoto: undefined,
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
            <Stack.Screen name="cadastroPaciente" component={CadastroPaciente}/>
            <Stack.Screen name="listaPacientes" component={ListaDePacientes} />
            <Stack.Screen name="planoAlimentar" component={PlanoAlimentarIndividual} />
            <Stack.Screen name="listaPlanoAlimentar" component={ListaPlanoAlimentar} />
            <Stack.Screen name="menuPaciente" component={MenuPaciente} />
            <Stack.Screen name="tiraFoto" component={TirarFoto} />
        </Stack.Navigator>

    </NavigationContainer>
)
