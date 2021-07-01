import Cards from "./Cards"
import React, {useEffect, useState} from "react"
import celebridades from '../../helpers/usuarios'

const ListCards = () => {
    //console.log(celebridades)
    return (
        <div className="container">
        <div className="row">
        { celebridades.map(user => (
             <div className="col-md-4" key={user.login.uuid}>
                <Cards user={user}/>
             </div>
        ))}
            </div>
                 </div>

    )
}

export default ListCards
