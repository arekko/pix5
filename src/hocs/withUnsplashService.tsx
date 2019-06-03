import React, { useContext } from "react";
import { UnsplashServiceProvider } from "..";

export const withUnsplashService = () => (Wrapper: any) => (props: any) => {
  const unsplashApiService = useContext(UnsplashServiceProvider);
  return <Wrapper {...props} unsplashApiService={unsplashApiService} />;
};
