import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "./../Common/Notfound/Notfound";
import routes from "./Routes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

export default function AppRoute() {
  return (
    <Routes>
      <>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.isPrivate ? (
                  <PrivateRoute>{route.element}</PrivateRoute>
                ) : (
                  <PublicRoute>{route.element}</PublicRoute>
                )
              }
            />
          );
        })}
        <Route path="*" element={<Notfound />} />
      </>
    </Routes>
  );
}