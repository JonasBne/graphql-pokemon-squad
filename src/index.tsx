import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
