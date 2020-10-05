import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";
import Header from "./Header";

const Router = () => {
  const HOME_ID = "home";
  const PROJECTS_ID = "projects";
  const EXPERIENCE_ID = "experience";
  const routesArray = [
    {
      path: "/",
      name: "Home",
      id: HOME_ID,
    },
    {
      path: "/projects",
      name: "My Projects",
      id: PROJECTS_ID,
    },
    {
      path: "/experience",
      name: "Experience",
      id: EXPERIENCE_ID,
    },
  ];
  const routesToComponentMap = {
    [HOME_ID]: <Jumbotron>Home</Jumbotron>,
    [PROJECTS_ID]: <Jumbotron>Projects</Jumbotron>,
    [EXPERIENCE_ID]: <Jumbotron>Experience</Jumbotron>,
  };
  const drawRouteComponent = (routeObj) => {
    const { id, path } = routeObj || {};
    return (
      <Route key={id} path={path} exact>
        {routesToComponentMap?.[id]}
      </Route>
    );
  };
  return (
    <HashRouter basename='/'>
      <Header>
        <Jumbotron>Portfolio</Jumbotron>
        <Navigation linksList={routesArray} />
      </Header>
      <Switch>{routesArray?.map(drawRouteComponent)}</Switch>
    </HashRouter>
  );
};

export default Router;
