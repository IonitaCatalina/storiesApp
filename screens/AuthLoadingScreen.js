import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';

export class AuthLoadingScreen extends React.Component {

  componentDidMount() {
    this.props.navigation.navigate(this.props.screenProps.authService.isSignedIn ? 'App' : 'Auth');
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}