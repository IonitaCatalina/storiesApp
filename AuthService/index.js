import { f, auth, database } from "../config/config.js";

import * as Facebook from "expo-facebook";

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

  async loginWithFacebook() {
    const appId = "";

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      appId,
      {
        permissions: ["public_profile"]
      }
    );

    if (type === "success") {
      try {
        const credentials = await f.auth.FacebookAuthProvider.crendential(
          token
        );
        const response = await f.auth().signInWithCredential(credentials);

        return response;
      } catch (err) {
        console.log(err);
        return { error: err.message };
      }
    }
  }

  async signOut() {
    console.log("logged out");
    auth.signOut();
  }
}
