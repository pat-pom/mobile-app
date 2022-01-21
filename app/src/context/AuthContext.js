import React, {createContext, useState, useEffect} from 'react';
import * as Keychain from 'react-native-keychain';

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

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <Provider
      value={{
        auth,
        setAuthState,
      }}>
      {children}
    </Provider>
  );
};

export {AuthContext, AuthProvider};
