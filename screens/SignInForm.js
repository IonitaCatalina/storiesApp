import React from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider, Button, Input, Text } from "react-native-elements";
import { FormIcon } from "../components/FormIcon";

export default class LoginScreen extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  };

  render() {
    return (
      <ThemeProvider theme={loginFormTheme}>
        <Input
          containerStyle={styles.email}
          inputStyle={styles.input}
          placeholder="e-mail"
          value={this.state.email}
          onChangeText={value => this.onChange("email", value)}
          leftIcon={FormIcon("email")}
        />
        <Input
          containerStyle={styles.password}
          inputStyle={styles.input}
          placeholder="password"
          type="password"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={value => this.onChange("password", value)}
          leftIcon={FormIcon("lock")}
        />
        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        <Button
          containerStyle={styles.signInButton}
          title="Sign in"
          onPress={this.signIn}
          disabled={!!this.state.errorMessage.length}
        />
      </ThemeProvider>
    );
  }

  onChange = (name, value) => {
    if (this.state.errorMessage !== "") {
      this.setState({ errorMessage: "" });
    }

    this.setState({ [name]: value });
  };

  signIn = async () => {
    if (this.state.email === "" || this.state.password === "") {
      return this.setState({
        errorMessage: `Email/Password field is missing.`
      });
    }

    const response = await this.props.screenProps.authService.signIn(
      this.state
    );

    if (response.error) {
      return this.setState({ errorMessage: response.error });
    }

    this.props.navigation.navigate("App");
  };
}

LoginScreen.navigationOptions = {
  header: null
};

const loginFormTheme = {
  colors: {
    primary: "#65c0ba"
  }
};

const styles = StyleSheet.create({
  signInButton: {
    top: "33%",
    paddingHorizontal: "10%"
  },
  input: {
    color: "white"
  },
  email: {
    top: "25%"
  },
  password: {
    top: "28%"
  },
  errorMessage: {
    color: "red",
    paddingLeft: "6%",
    top: "31%"
  }
});
