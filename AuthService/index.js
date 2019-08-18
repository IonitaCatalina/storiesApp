import {AsyncStorage} from 'react-native';

export default class AuthService {
   constructor () {
    this._token = null;
    this.init();
  }

  async init () {
    this._token = await AsyncStorage.getItem('userToken');
  };

  get isSignedIn() {
    return !!(this._token);
  }

  async signIn() {
    const token = 'abc';
    await AsyncStorage.setItem('userToken', token);
    this._token = token;
  }

  async register() {
    const token = 'abc';
    await AsyncStorage.setItem('userToken', token);
    this._token = token;
  }

  async signOut() {
    await AsyncStorage.clear();
    this._token = null;
  }
}