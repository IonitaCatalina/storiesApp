import { f, auth, database } from "../config/config.js";

export default class AuthService {
  isSignedIn() {
    let isSignedIn = false;

    f.auth().onAuthStateChanged(function(user) {
      isSignedIn = !!user;
    });

    return isSignedIn;
  }

  async signIn({ email, password }) {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);

      return response;
    } catch (error) {
      return { error: error.message };
    }
  }

  async register({ email, password }) {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      return response;
    } catch (error) {
      return { error: error.message };
    }
  }

  async signOut() {
    console.log("logged out");
    auth.signOut();
  }
}
