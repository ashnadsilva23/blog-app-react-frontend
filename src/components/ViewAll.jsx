import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {


    const[token,setToken]=useState(
        sessionStorage.getItem("token")
       )
        
        const [data, setData] = useState([])
    
        const fetchData=()=>{
            console.log(token)
            axios.post("http://localhost:3030/view",{},{
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
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                   {data.map(
                    (value,index)=>{
                        return <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAC5ubnZ2dnV1dXOzs7KysrGxsbDw8P7+/vh4eFsbGzAwMClpaXPz8/k5OQ5OTnw8PAZGRnr6+swMDCKioqsrKxmZmYgICApKSm0tLQTExNvb2/29vZfX19GRkaUlJRSUlJ3d3eXl5c/Pz+mpqaGhoZPT08tLS1ZWVkLCwuBkpBNAAAKJUlEQVR4nO1d6WKiOhRuUXZQXLBKRVFn7NT3f8Bb285tyclyspBYJ99fJeQDcvacPDx4eHh4eHh4eHh4eHh4eHh4eNwf0nYxzUaj8TgMoyiOkyIpioCPInn7VxxHUTgZj0ejbLpoU9c0SEzDoKy3r/tquVnPL4+6uMzXm2W1f93WZRBOHXNrozLfaFPiY5OXYeuGXVxXA5P7QlXHllnOgtwau7/Ig5k1fpPj3Dq/K+bHiQ16abN3Qu8D+2ZwQbsaWrKIsFkNyq9wze+KdTEYv+mTa3Kf2A2kJleuiX3DEJ9qa18/8JAb14/Z0jUnAn8yswQj14QoiEwSbFyzoaIxR7B0zYWB8t4JPj7+NkMQ94nOq5ddvj2e6678vWqCq1cbhuH4HSMWPn6ehOHVWw6aVVl29fl4zHcvFc70NfKhioTMOu+a8ZtjbtZgTNN2MW66fC24uwFxk/HG39TJ0H5bm9RcU1FbabRsPVidDKskJrIT29n+o+s1blkjPxlVR0JETJt4qzcwyxbNR2YmLoERy2zUslGn9DGXdt/fX0SMFaPjaeyoI55dBTTTM3U+O/URE+qAgbkpSyOgzihRHo8mpp+tRIOYmDxT5rRRHY0mZtb2RUwfI5oNoChsUsorfHZN8I0i5S1u1CQDzR4dG56uCsaUeanZp5S4qEsh8wWKuNmrjDOB45xNz1URRzg1FfkHh6ms68E0a+pzvcqIG6fQTD3KDz6DDpp1S+b/BMJ+1ecIPbq5vAEOP/bc1MSRmB6+L7S+HwNtVHkRAcewrChIrdAT4yP959+CIZ7MTR6DBZhA7y1CZ0rWFY/BCJZX4QuYwP77Wgy151eTA1Qmpy8GzcTu2WZAnNaSdwADnAxOHwFaGrb3Ek/kr7/kbgCXoa2YzAfo8a+M+w+5hQgUjrKDoga6H9j7TIFfILcQQZhb9ivXBD3M3psEkBRyMX6gDdXdaCV0VIY9uxhIezmNCD4BywU7iHcIRIXcQiKvXmvPeTZKVt0xf9o95cdulYz4dmRBZdj3AoGzLzMdEEXUs0mz1bYiPfPnatuw5TM9jCmwTWWiisBi0NCG4ZmdRpqfQ8ZVVH3Y/wtYq6yxaADCWtW5n9aicsxLR3300GoEoQoQZZGZJFjoavEZdrKhh6eI4lq/gr8diH+AeI2MugC6ZqHC74Di9z55qK1npCB5Jt818D5kdDbIOMkrixE9I8DCDkidjKAI3FOgLmSyUOQnMpeN0KTgKxACvIHZ91ns4VeUkhLsVWKCpCSTjUGNVSr8NmCxJ//HaajFeqT/IxNSJK99kSMIPBskoE6aFuWpLBiKjnSSZVxYMlEn8/4fZnIr8Dt2UhEz8j5LiWvJj0zGpMl0CtwrGTeUNGokDNOUlNQS8daQlv7C4yJhmJASf42XFi0ppfAM9Uv88I4sGZWf43XagjS10AkLmrE1GEUy533B2yXAssdaCzDGpwJslgXoXLxzAaI8HfI64RpcL6ulqJDr8RkpboBzgRdTIGaOs2lnPCl62XVJtpi1bTtbZEn3xPM5KpzSAP4BPu+gyJCjB89gd1Yb0ktH3oGrH9FgCPwSVCUA05KpWDnohvnSUR43qKTA+3iAISZNTkuvX/GLtwGk+MW4CjNZ4ALjE8FAJCK8Z2AlfEL0gTMKkDHaG0Qi8NYCYIjYh0N3lw5iAd5LhH4BoaBAQA7PEBgmYoYwZfk+TYwdxfAlxWIDFKXhzSHAMBZeQpWj2FIlao2nWJ4CAwrPEFwqZEi11vCZAGqJoHC+8tNkXyr8wA9aBOkUydgaABAXeIbgfiKGNI9CrpqOVmImeomAIf6ZSgspyiqUTcdRxI1oJYKqLfzWS8BQoH8pWYaDdP3UAQ4iUDXAxhiOISXbJ197TXlMHf8Kiwyhn6CyIQlaNxf+BRoMgTnEZwj9Xsm6iE9AG5W//gFDfGpGkiF0g9R2W8O0KD96Yo8hyA+qVhcBZ2rO/btJhlwbEVa2qO6ZgzUm3LgEsIWHYgitSvSNSMg9K2sMQSpOvVgarGhuwswaQ7B6ZPLpfQCpzF3RthjOyBDiRb32piU16zMv6maLIbiPTqktSPxL3XkghsAR6dD3gQD2H88hssUQiFKdEjjwuHg+mC2GGrF1CKl8gi2GYOeJSmXKX4AKEl5ezxZDMhO71tlcDapoeNlnWwxJ8bfUKdQEm+N5gtkWQzKCUWkxJM0HXiTDv0MO/Drs4f5l6f3rw/u3aYa1S3mPy/sWHHj/sA+DPj7IRNyEj/8PxGlgYgx9IxJgJG6KzhpDc/FS+KysxUvvP+b9r+ctfmDuST9/qNKz0Wb+0E0OGD6njn+FRYa0PD76Zp9ID9KPySRDkZVC2aNmoBZDZOBq1GI4qKehFX4NWE/zQ2qiwDvUqPpyUtcmf1M8Q1O1iVjrzX5tImAofhs69aX09gKD1pfef40wWMIYc4i+qfIiqo4q6RsvMC0ONOq8lWr1Kf3d3qFWq48pu9eo1b///RYD7JmZ3NaeGQv7nnZu9z3d/941x/sPsSJRY/+h+h5SE+dgoG0vjT2kTvcB441LsA8Yn7nU2ctNbWWMx7NEwJxkKLGX+/7344OeClI9wX9ET4Wb6YvBhU5fDN3eJhOl3iaSvYBBr12Z3iY30Z9GeA+d/jQGegxluj2GhNDqMWS9TxReCX5Bq0+UoV5fIbbXl9LoWr2+gPesmhHMOsV+bQho9WsDFnSnOIsHUc89jbMkgE6SqR8w3zdxSembuNLra6vVN3GQ3pfxqkb3vsRAq/el8/6lCGj2L3XdgxYBzR60QF10g8xSB5p9hF33gkZAsxe0637eYuj283bek10IoA1li3hc99UXQruvvvOzEQSAcUtZ4935+RYC6J9v4f6MEi4MnFFyA+fM8GDinJlbOCuICSNnBd3EeU8MmDnviZbTVRlmCFAyj0p+5t2fu0Y9J8Tt8Y4fMHd23v2ff3j/Z1hS4gTXt+j2kMex0XNI/4GzZG/uPGDK0Y6Pehbz/Z/pfP/ncv+Es9V1HYL2D2vkx+pkK3aTndi1AVqb4z9GZ479hk0dDx0qbuOam1A28JRFFTLr/NSMF21qVsCmbbsYN10uKhEzslZojTch5tXLLt8ez3VXlqsmKJI4CieT8TtGLHz8HIaTOE6KoFmVZVefj8d891KxE1bfoZr1I8Bo13wDUNle9aMoqvSfZAD3odqGoU/0AyZqDk3DsEKesvWiGyyNK+OWZTS5QT6EHmbZqC6gaYuyMFUvOjSLnZY3wUUirEK3gI3aTnEsVipVh0b5DfSBfiFtaAdo2sK+sRJfmBxxRqNpzI/2wrWLwL7uyAP9IiMpvPltOiXrcqiG90MZLKMyH1rybPIycl2QNQ2Dst6+7qvlZj0XFVuKcZmvN8tq/7qtyyAaTvEpIm0X0+zq2IZhFMVRUiRFEfBRJG+I4ygKw6urnE0X7a2kKT08PDw8PDw8PDw8PDw8PDw8TOI/DZKjBk/wnRgAAAAASUVORK5CYII=" class="img-fluid rounded-start" alt="..."></img>
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

export default ViewAll