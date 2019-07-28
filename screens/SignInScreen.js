import React from 'react';
import {
  Button,
  View,
} from 'react-native';

export class SignInScreen extends React.Component {
  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this.signIn} />
      </View>
    );
  }

  signIn = async () => {
    await this.props.screenProps.authService.signIn();
    this.props.navigation.navigate('App');
  };
}