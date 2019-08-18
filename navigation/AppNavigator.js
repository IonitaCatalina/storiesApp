import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import {SignInScreen} from '../screens/SignInScreen';
import {AuthLoadingScreen} from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/SignInForm';

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    SignInForm: LoginScreen
  }, {
    cardStyle: {
      backgroundColor: '#216583',
    }
  }
);
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
