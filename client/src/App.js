import React, { useState } from "react";
import Login from "./components/account/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/home/Home";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/header/Header";
import CreatePost from "./components/create/CreatePost";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <DataProvider>
        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route
              path="/login"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Home />} />
            </Route>
            <Route
              path="/create"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/create" element={<CreatePost />} />
            </Route>
          </Routes>
        </div>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
