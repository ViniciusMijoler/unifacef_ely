import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import AboutTeamScreen from './screens/AboutTeamScreen';
import AboutUniFacefScreen from './screens/AboutUniFacefScreen';
import AboutInformationSystemScreen from './screens/AboutInformationSystemScreen';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    AboutUniFacef: AboutUniFacefScreen,
    AboutIS: AboutInformationSystemScreen,
    AboutTeam: AboutTeamScreen
}, {
    initialRouteName: 'Home'
})

const RootSwitch = createSwitchNavigator({
    Splash: SplashScreen,
    App: AppStack
}, {
    initialRouteName: 'Splash'
})

export default createAppContainer(RootSwitch)