/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { App } from "./App";
import { SignUp } from "./routes/SignUp";
import { Route, Router, Routes } from "@solidjs/router";
import { Login } from "./routes/Login";
import { Dashboard } from "./routes/Dashboard";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  ),
  root!,
);
