import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";

import { SignInScreen } from "../screens/AuthScreens/SignInScreen";
import { AuthLoadingScreen } from "../screens/AuthScreens/AuthLoadingScreen";
import SignInForm from "../screens/AuthScreens/SignInForm";
import RegisterForm from "../screens/AuthScreens/RegisterForm";

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignInForm,
    RegisterForm
  },
  {
    cardStyle: {
      backgroundColor: "#216583"
    }
  }
);
const AuthLoadingStack = createStackNavigator({
  AuthLoading: AuthLoadingScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      AuthLoading: AuthLoadingStack,
      Auth: AuthStack,
      App: MainTabNavigator
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
