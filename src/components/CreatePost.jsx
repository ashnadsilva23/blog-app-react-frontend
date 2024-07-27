import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
  const [token,setToken]=useState(sessionStorage.getItem("token"))
  const [input, setInput] = useState(
    {
        
        "Message": "",
        "userId":sessionStorage.getItem("userId")
    }
)
  const inputHandler = (event) => {
    setInput({...input, [event.target.name]: event.target.value})

}
const readValue = () => {
   console.log(input)
   console.log(token)

   axios.post("http://localhost:3030/create",input,{
    headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}}).then(
    (response)=>{
        console.log(response.data)
        if (response.data.status=="success") 
          {
            alert("suceesfully posted")
          }
            
       
        else{
            alert("something went wrong")



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
                <h2 align="center"><u>Create Post</u></h2>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">post a message</label>
                                <textarea name="Message"  value={input.Message} className="form-control"  onChange={inputHandler}></textarea>
                           </div>
                            
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button onClick={readValue} className="btn btn-success">post</button>
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

export default CreatePost