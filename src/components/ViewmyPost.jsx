import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavBar from './NavBar'

const ViewmyPost = () => {
    const [data,setData]=useState([])

    const [token,setToken]=useState(sessionStorage.getItem("token"))
    const [userId,setuseId]=useState({"userId":sessionStorage.getItem("userId")})

    const fetchData=()=>{
        console.log(token)
        axios.post("http://localhost:3030/viewmy",userId,{
            headers:{"token":token,"Content-Type":"application/json"}
        }).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect(()=>
        {fetchData()},[])
    return (
        <div>
            <NavBar/>
            <br></br>
            <br></br><h3><center><u>ViewMy Post</u></center></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value,index)=>{
                              return <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                              <div class="card mb-3" >
                                  <div class="row g-0">
                                      <div class="col-md-4">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeLtv9vQgCKn8WVEDMVUedWJuxQ29v36AeA&s" class="img-fluid rounded-start" alt="..."></img>
                                      </div>
                                      <div class="col-md-8">
                                          <div class="card-body">
                                              <h5 class="card-title">{value.Message}</h5>
                                              
                                              <p class="card-text"><small class="text-body-secondary">Posted on {value.postedDate}</small></p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>  
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewmyPost