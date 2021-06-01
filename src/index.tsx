import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

import DataContainer from './components/App/DataContainer'

import { API_ENDPOINT } from './constants'

import "./index.scss";

const restLink = new RestLink({
  uri: API_ENDPOINT,
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <DataContainer />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
