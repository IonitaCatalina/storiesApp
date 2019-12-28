import React from "react";
import { ImageBackground, StyleSheet, Image } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";

export class SignInScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/nori.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ThemeProvider theme={signInTheme}>
          <Button
            containerStyle={styles.signInContainer}
            title="Sign in"
            onPress={this.redirectToSignIn}
          />
        </ThemeProvider>
        <ThemeProvider theme={registerTheme}>
          <Button
            containerStyle={styles.registerContainer}
            title="Register"
            onPress={this.register}
          />
        </ThemeProvider>

        {/* <Ionicons
          name={"logo-facebook"}
          size={26}
          style={{ paddingHorizontal: "46%", top: "58%" }}
          color={"#3b5998"}
          onPress={this.continueWithFacebook}
        /> */}
      </ImageBackground>
    );
  }

  redirectToSignIn = () => this.props.navigation.navigate("SignInForm");
  register = () => this.props.navigation.navigate("RegisterForm");

  continueWithFacebook = async () => {
    const response = await this.props.screenProps.authService.loginWithFacebook();
    if (response.error) {
      return this.setState({ errorMessage: response.error });
    }

    this.props.navigation.navigate("App");
  };
}

SignInScreen.navigationOptions = {
  header: null
};

const signInTheme = {
  colors: {
    primary: "#216583"
  }
};

const registerTheme = {
  colors: {
    primary: "#f76262"
  }
};

const styles = StyleSheet.create({
  signInContainer: {
    top: "50%",
    paddingHorizontal: "10%"
  },
  registerContainer: {
    top: "53%",
    paddingHorizontal: "10%"
  },
  facebookContainer: {
    paddingHorizontal: "40%"
  },
  input: {
    color: "white"
  }
});
