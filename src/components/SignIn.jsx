import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate()
    const [input, setInput] = useState(
        {
            "email": "",
            "password": ""
        }
    )

    const inputHandler = (event) => {
        setInput({...input, [event.target.name]: event.target.value})

    }
    const readValue = () => {
       console.log(input)

       axios.post("http://localhost:3030/signIn",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Incorect password") {
                alert("Incorrect password")
                
            } else if(response.data.status=="invalid email id "){
                alert("Incorrect Email Id")
                
            }
            else{
                let token =response.data.token
                let userId=response.data.userId
                console.log(userId)
                console.log(token)
                sessionStorage.setItem("userId",userId)
                sessionStorage.setItem("token",token)
                navigate("/post")



            }
        }
       ).catch(
        (error)=>{
           console.log(error)

        }
       )
        
       }
    return (
        <div>
            <div class="card">
                <div>
                    <div className="container">
                        <h2 align="center"><u>SignUp</u></h2>
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">


                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <button onClick={readValue} className="btn btn-success">Login</button>
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <a href="/reg" className="btn btn-primary">new users clik here</a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn