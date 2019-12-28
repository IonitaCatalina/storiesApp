import React from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider, Button, Input, Text } from "react-native-elements";
import { FormIcon } from "../components/FormIcon";

export default class RegisterScreen extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: ""
  };

  render() {
    return (
      <ThemeProvider theme={registerFormTheme}>
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
        <Input
          containerStyle={styles.confirmPassword}
          inputStyle={styles.input}
          placeholder="confirm password"
          type="password"
          value={this.state.confirmPassword}
          secureTextEntry={true}
          onChangeText={value => this.onChange("confirmPassword", value)}
          leftIcon={FormIcon("lock")}
        />
        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        <Button
          containerStyle={styles.signInButton}
          title="Register"
          onPress={this.register}
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

  register = async () => {
    if (this.state.email === "" || this.state.password === "") {
      return this.setState({
        errorMessage: `Email/Password field is missing.`
      });
    }

    if (this.state.password !== this.state.confirmPassword) {
      return this.setState({ errorMessage: "Passwords don't match." });
    }

    const response = await this.props.screenProps.authService.register(
      this.state
    );

    if (response.error) {
      return this.setState({ errorMessage: response.error });
    }

    this.props.navigation.navigate("App");
  };
}

RegisterScreen.navigationOptions = {
  header: null
};

const registerFormTheme = {
  colors: {
    primary: "#65c0ba"
  }
};

const styles = StyleSheet.create({
  signInButton: {
    top: "36%",
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
  confirmPassword: {
    top: "31%"
  },
  errorMessage: {
    color: "red",
    paddingLeft: "6%",
    top: "34%"
  }
});
