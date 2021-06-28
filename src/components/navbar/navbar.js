import { useState } from "react";

const Navbar = () =>{

    const [user,setUser] = useState(null)

       
    const login = () =>{
      setUser({id:1,nombre: 'mtomalaz'})}
    
    const logout= () =>{
      setUser(null)
    }
    return(
    <nav className="navbar navbar-light bg-success bg-gradient">
    <div className="container-fluid">
    <span className="navbar-brand mb-0 fs-4  h1">User: {user? user.nombre: "Identifiquese"}</span>
    {user? (<button 
      type="button" 
      className="btn btn-outline-dark text-decoration-dark"
      onClick = {logout}
      >Cerrar Sesion
    </button>)
    :(<button 
      type="button" 
      className="btn btn-outline-dark text-decoration-dark"
      onClick = {login}
      >Iniciar Sesion
    </button>)}
    
  
  </div>
</nav>
    )
}
export default Navbar;
//Exportar para usar el componentes en otros
