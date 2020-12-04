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
        users.forEach(({ usuario, telefono, dni }) => {
          const usuarios = {
            usuario: usuario,
            dni: dni,
            telefono: telefono,
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
      <>
          {allUser.map((element) => {
            return (<div>
              {`Nombre: ${element.usuario}

              Telefono: ${element.telefono}`} 
              <hr/>
              </div>


              );
          })}
      </>
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
