import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { ThemeProvider, Button, Input } from 'react-native-elements';
import {FormIcon} from '../components/FormIcon';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: ''
  }

  render () {
    return (
      <ThemeProvider theme={loginFormTheme}>
        <Input
          containerStyle={styles.email}
          inputStyle={styles.input}
          placeholder='e-mail'
          value={this.state.email}
          onChangeText={value => this.setState({email: value})}
          leftIcon={FormIcon('email')}
        />
        <Input
          containerStyle={styles.password}
          inputStyle={styles.input}
          placeholder='password'
          type='password'
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={value => this.setState({password: value})}
          leftIcon={FormIcon('lock')}
        />
         <Button
          containerStyle={styles.signInButton}
          title="Sign in"
          onPress={this.signIn}
        />
      </ThemeProvider>
    );
  }

  signIn = async () => {
    await this.props.screenProps.authService.signIn();
    this.props.navigation.navigate('App');
  };
}

LoginScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#216583',
  },
  headerTintColor: '#fff',
}

const loginFormTheme = {
  colors: {
    primary: '#65c0ba',
  },
}

const styles = StyleSheet.create({
  signInButton: {
    paddingTop: 50,
    paddingHorizontal: 30
  },
  input: {
    color: 'white',
  },
  email: {
    paddingTop: 150
  },
  password: {
    paddingTop: 10
  }
});