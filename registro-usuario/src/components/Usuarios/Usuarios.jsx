import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import axios from "axios";
import PropTypes from "prop-types";

//import { Test } from './Usuarios.styles';

const Usuarios = (props) => {
  const url = "http://localhost:3700/api/get-users";
  const url2 = "http://localhost:3700/api/registry-user";
  const [allUser, setallUser] = useState([]);
  const [elementos, setElementos] = useState([])
  const [currentValue, setCurrentValue] = useState(1)
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
          setElementos(elementos => [...elementos, usuarios])
          
          arrayUsuarios.push(usuarios);
        });
        
    
      } catch (error) {}
    };
    
    getUserAllUsers()
  }, [])

  const filterText = (text,elementos) => {
    const textFilter = text.target.value.toUpperCase()

    const filteredNames = elementos.filter(usuario => {
      return usuario.usuario.includes(textFilter)
    })
    setallUser(filteredNames)

  }

  const handleChange = (event) => {
    setCurrentValue(event.target.value)
  }

  const submit = async (e) => {
    e.preventDefault()

    try{

      const data = currentValue ;
      const params = {
        dni: data

      }
      axios.post(url2,{params: params})
    }catch(err){}


  };
  
  if (allUser.length < 1 && allUser === undefined) {
    return <></>;
  } else {
    
    return (
      <form className="formRegistry" onSubmit={submit} >
        <input type="text" id="filtro" onChange={(text) => filterText(text,elementos)}/>
        <select name="usuario" id="usuario" onChange={handleChange}>
          <option>--Seleccione una opción</option>
          {allUser.map((element) => {
            return <option value={element.dni}>{element.usuario}</option>;
          })}
        </select>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
};

Usuarios.propTypes = {
  // bla: PropTypes.string,
};

Usuarios.defaultProps = {
  // bla: 'test',
};

export default Usuarios;
