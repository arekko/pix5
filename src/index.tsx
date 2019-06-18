import React, { createContext } from "react";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import store from "./redux-store/store";
import UnsplashApiService from "./services/unsplashApiService";

export const UnsplashServiceProvider = createContext({});

const unsplashService = new UnsplashApiService();

const App: React.FC<{}> = props => {

  return (
    <Provider store={store}>
      <UnsplashServiceProvider.Provider value={unsplashService}>
        <Navigation />
      </UnsplashServiceProvider.Provider>
    </Provider>
  );
};

export default App;
