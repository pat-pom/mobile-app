import React, {createContext, useState, useEffect} from 'react';
import * as Keychain from 'react-native-keychain';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(null);
const {Provider} = AuthContext;
const initialState = {
  token: null,
  refreshToken: null,
  isAuthenticated: null,
  userId: null,
};

const AuthProvider = ({children}) => {
  const [auth, setAuthState] = useState(initialState);

  const getAuthState = async () => {
    try {
      const authDataString = await Keychain.getGenericPassword();
      const authData = JSON.parse(authDataString.password || {});

      setAuthState(authData);
    } catch (err) {
      setAuthState({});
    }
  };

  const setAuth = async authData => {
    const {Id} = jwtDecode(authData.token);

    setAuthState({
      token: authData.token,
      refreshToken: authData.refreshToken,
      isAuthenticated: true,
      userId: Id,
    });

    await Keychain.setGenericPassword(
      'token',
      JSON.stringify({
        token: authData.token,
        refreshToken: authData.refreshToken,
      }),
    );
  };

  const logout = async () => {
    await Keychain.resetGenericPassword();
    setAuthState(initialState);
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <Provider
      value={{
        auth,
        setAuth,
        logout,
      }}>
      {children}
    </Provider>
  );
};

export {AuthContext, AuthProvider};
