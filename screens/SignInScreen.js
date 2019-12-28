import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

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
      </ImageBackground>
    );
  }

  redirectToSignIn = () => this.props.navigation.navigate("SignInForm");
  register = async () => this.props.navigation.navigate("RegisterForm");
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
  input: {
    color: "white"
  }
});
