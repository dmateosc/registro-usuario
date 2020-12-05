import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { List, ListItem } from "@material-ui/core";
//import { Test } from './UsuarioFecha.styles';

const UsuarioFecha = (props) => {
  const url = "http://localhost:3700/api/get-users-fecha";
  const [allUser, setallUser] = useState([]);
  /* useEffect(() => {
    const getUserAllUsers = async () => {
      try {
        const response = await axios.get(url);
        const { users } = response.data;
        const arrayUsuarios = [];
        users.forEach(({ user, telefono, dni, fecha}) => {
          const usuarios = {
            user: user,
            dni: dni,
            telefono: telefono,
            dia: fecha.dia,
            hora: fecha.hora
          };
          setallUser((allUser) => [...allUser, usuarios]);
          
          arrayUsuarios.push(usuarios);
        });
        
    
      } catch (error) {}
    };
    getUserAllUsers()
  },[]) */

  const cogerDia = (e) => {
    e.preventDefault();
    setallUser([])
    const fecha = e.target[0].value;
    const params = {dia : fecha}
    const getUserAllUsers = async () => {
      try {
        const response = await axios.get(url, {params});
        const { users } = response.data;
        const arrayUsuarios = [];
        users.forEach(({ user, telefono, dni, fecha }) => {
          const usuarios = {
            user: user,
            dni: dni,
            telefono: telefono,
            dia: fecha.dia,
            hora: fecha.hora,
          };
          setallUser((allUser) => [...allUser, usuarios]);

          arrayUsuarios.push(usuarios);
        });
      } catch (error) {}
    };
    getUserAllUsers();
  };

  if (allUser.length < 1 && allUser === undefined) {
    return (
      <Grid>
        <form action="" onSubmit={(e) => cogerDia(e)}>
          <input type="date" name="date" />
          <input type="submit" value="Comprobar fecha"/>
        </form>
      </Grid>
    );
  } else {
    return (
      <Grid container justify="center" xs={8} alignItems="center">
        <Grid item xs={4} justify="inherit">
        <form action="" onSubmit={(e) => cogerDia(e)}>
          <input type="date" name="date" />
          <input type="submit" value="Comprobar fecha"/>
        </form>
        </Grid>
        <Grid item xs={12}>
        <List>
        {allUser.map((element) => {
          return (
            <ListItem  key={element.dni}>
              
                {`Nombre: ${element.user}`}
                <br />
                {`Telefono: ${element.telefono}`} <br />
                {`Hora registrada: ${element.hora}`}
                <hr />
              
              </ListItem>
          );
        })}
        </List>
        </Grid>
      </Grid>
    );
  }
};
/**
 * 
 * 
 <Grid container justify="center" xs={8} alignItems="center">
          {allUser.map((element) => {
            return (
            <Grid item xs={8}>
            <div key={element.dni}>
              {`Nombre: ${element.user}`}<br/>
              {`Telefono: ${element.telefono}`} <br/>
              {`Hora registrada: ${element.hora}`}
              
              <hr/>
              </div>
              </Grid>

              );
          })}
      </Grid>
 * 
 */
UsuarioFecha.propTypes = {
  // bla: PropTypes.string,
};

UsuarioFecha.defaultProps = {
  // bla: 'test',
};

export default UsuarioFecha;
