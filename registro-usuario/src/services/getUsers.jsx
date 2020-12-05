import { useState, useEffect } from "react";
import axios from "axios";
const useUsers = () => {
    const url = "http://localhost:3700/api/get-users";
    const [allUser, setallUser] = useState([]);
    const [elementos, setElementos] = useState([])
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


      return {allUser, elementos}

}

export default useUsers