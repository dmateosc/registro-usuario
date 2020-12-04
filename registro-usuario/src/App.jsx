import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Usuarios from "./components/Usuarios"
import UsuarioDia from "./components/UsuarioDia"


function App() {
  return (
         /*<RegistroUsuario></RegistroUsuario>*/
   <div>
     
          <Usuarios></Usuarios>

           {`Usuarios Día: ${new Date().getDate()} del ${new Date().getMonth()} de ${new Date().getFullYear()}`}
          <UsuarioDia></UsuarioDia>
          
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
