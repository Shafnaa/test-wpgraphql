import React from "react";
import { Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import "./styles.css";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog/:slug" component={PostPage} />
      </Switch>
    </ApolloProvider>
  );
}
