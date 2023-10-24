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
import {MaterialIcons} from '@expo/vector-icons';
 import { createStackNavigator } from '@react-navigation/stack';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 const Tab = createBottomTabNavigator();

export function NavegacaoPrincipal() {
    return (
        <NavigationContainer>
           <Tab.Navigator>
             <Tab.Screen name="menu" component={MenuScreen} options={{
            tabBarLabel:"Home", 
            tabBarIcon:() => <MaterialIcons name="home" size={20}/> 
        }}/>
                <Tab.Screen name="imc" component={CalculoIMC} />
                <Tab.Screen name="login" component={LoginScreen} />
                <Tab.Screen name="listaPlanoAlimentar" component={ListaPlanoAlimentar} />
                <Tab.Screen name="configuracoes" component={MenuScreen} options={{
            tabBarLabel:"Configurações", 
            tabBarIcon:() => <MaterialIcons name="settings" size={20}/> 
        }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
