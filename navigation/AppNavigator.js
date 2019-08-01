import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import {SignInScreen} from '../screens/SignInScreen';
import {AuthLoadingScreen} from '../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const AuthLoadingStack = createStackNavigator({AuthLoading: AuthLoadingScreen});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingStack,
    Auth: AuthStack,
    App: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  })
);
