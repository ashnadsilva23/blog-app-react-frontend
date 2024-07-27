import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
   const navigate=useNavigate()

    const LogOut=()=>{
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Blog'S</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/post">Create Post</a>
                            <a class="nav-link" href="/view">ViewAll</a>
                            <a class="nav-link" href="/viewmy">ViewMy Post</a>
                            <button onClick={LogOut} className="btn btn-success">Log Out</button>
                          
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar