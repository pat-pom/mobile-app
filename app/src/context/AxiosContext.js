import React, {createContext, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import * as Keychain from 'react-native-keychain';

const AxiosContext = createContext();
const {Provider} = AxiosContext;

const AxiosProvider = ({children}) => {
  const {auth, setAuthState} = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: 'https://antiqueapi.azurewebsites.net/api',
  });

  const publicAxios = axios.create({
    baseURL: 'https://antiqueapi.azurewebsites.net/api',
  });

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  const refreshTokenLogic = request => {
    const data = {
      token: auth.token,
      refreshToken: auth.refreshToken,
    };

    const options = {
      method: 'POST',
      data,
      url: 'https://antiqueapi.azurewebsites.net/api/Auth/RefreshToken',
    };

    return axios(options)
      .then(async tokenRefreshResponse => {
        request.response.config.headers.Authorization = `Bearer ${tokenRefreshResponse.data.token}`;

        setAuthState({
          ...auth,
          token: tokenRefreshResponse.data.token,
          refreshToken: tokenRefreshResponse.data.refreshToken,
        });

        await Keychain.setGenericPassword(
          'token',
          JSON.stringify({
            token: tokenRefreshResponse.data.token,
            refreshToken: tokenRefreshResponse.data.refreshToken,
          }),
        );
        return Promise.resolve();
      })
      .catch(error => {
        setAuthState({
          token: null,
          refreshToken: null,
        });
      });
  };

  createAuthRefreshInterceptor(authAxios, refreshTokenLogic, {});

  return (
    <Provider
      value={{
        authAxios,
        publicAxios,
      }}>
      {children}
    </Provider>
  );
};

export {AxiosContext, AxiosProvider};
