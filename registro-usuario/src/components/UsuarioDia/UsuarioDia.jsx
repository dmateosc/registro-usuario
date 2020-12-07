import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import axios from "axios";
import PropTypes from "prop-types";
//import { Test } from './UsuarioDia.styles';

const UsuarioDia = (props) =>{ 
  const url = 'http://localhost:3700/api/get-users-dia'
  const [allUser, setallUser] = useState([]);
  useEffect(() => {
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
  },[])
  if (allUser.length < 1 && allUser === undefined) {
    return <></>;
  } else {
    
    return (
      <Grid container justify="center" xs={8} alignItems="center">
        <Grid item xs={8}>
         {`Usuarios Día: ${new Date().getDate()} del ${new Date().getMonth()+1} de ${new Date().getFullYear()}`}
         <hr/>
        </Grid>

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
    );
  }
};

UsuarioDia.propTypes = {
  // bla: PropTypes.string,
};

UsuarioDia.defaultProps = {
  // bla: 'test',
};

export default UsuarioDia;
