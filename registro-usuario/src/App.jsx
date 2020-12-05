import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Usuarios from "./components/Usuarios";
import UsuarioDia from "./components/UsuarioDia";
import UsuarioFecha from "./components/UsuarioFecha";

function App() {
  return (
    /*<RegistroUsuario></RegistroUsuario>*/
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Link
              color="inherit"
              aria-label="menu"
              component={RouterLink}
              to="/user-dia">
              <span className="urls">Usuarios dia</span>
            </Link>
            <Usuarios></Usuarios>
            <UsuarioDia></UsuarioDia>
          </Route>
          <Route path="/user-dia">
            <Link
              color="inherit"
              aria-label="menu"
              component={RouterLink}
              to="/">
              <span className="urls">Registro</span>
            </Link>
            <UsuarioFecha></UsuarioFecha>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
/*
 <Router>
        <Switch>
        <Route exact path="/">
          <Usuarios></Usuarios>
          <Link color="inherit"
              aria-label="menu"
              component={RouterLink}
              to="/user-dia">
                Usuarios dia
              </Link>
        </Route>
        <Route path="/user-dia">
        <Link color="inherit"
              aria-label="menu"
              component={RouterLink}
              to="/">
                Registro
              </Link>
          <UsuarioDia></UsuarioDia>
          
        </Route>
          </Switch>
          </Router>
*/
export default App;
