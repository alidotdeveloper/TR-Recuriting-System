// eslint-disable-next-line

import React, { useEffect, useState } from 'react';
import "../style/dashboard.css";
import axios from "axios";



function App() {

  const [Users, setUser] = useState([])
  const [err, seterr] = useState(null)

  const handledelete = (userid) => {

    
    
    alert("did you want to delete that record?");

      axios.delete('http://localhost:8080/api/showuser/' + userid)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setUser(res.data)
            
          } else {
            seterr("Response data is not in array")
          }
        }).catch((err) => {
          seterr("Got Error In catch: " + err.message)
        }, [])

    
  }

  useEffect(() => {
    axios.get('http://localhost:8080/api/showuser')
      .then((res) => {
        if (res.data) {
          setUser(res.data)
        } else {
          seterr("Response data is not in array")
        }
      })
      .catch((err) => {
        seterr("Got Error In catch: " + err.message)
      }, [])

  })

  const handlesignout = () => {
    try {
      console.log("we are in backend");
      axios.get("http://localhost:8080/api/signout")
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            console.log("cookie delete succfully");
           
          } else {
            console.log("Soory, cookie is deleted")
            
          }
        
        })
      
    }catch (err) {
      
     console.log("Got Error In catch: " + err.message)
    }
  }

 

  return (
    <div>

      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <a href="/" className="nav_logo">
            <i className='bx bx-home'></i>
              <span className="nav_logo-name">BBBootstrap</span>
            </a>
            <div className="nav_list">
              <a href="/" className="nav_link active">
                <i className="bx bxs-group home_alt"></i>
                <span className="nav_name">Dashboard</span>
              </a>

            </div>
            
          </div>
          <a onClick={handlesignout} href="#" className="nav_link">
            <i className="bx bx-log-out nav_icon" ></i>
            <span className="nav_name" href="test">SignOut</span>
          </a>
        </nav>
      </div>
      <div className="height-100 bg-black">
        <h4 className="h4-heading">User lists</h4>
        <a href="/signup" className='global-btn'>Add New User</a>
        <table className="table-auto">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>


            </tr>
          </thead>
          <tbody>
            {err ? (
              <tr>
                <td colSpan="5">{err}</td>
              </tr>
            ) : Users.length > 0 ? (
              Users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <a href={`/dashboard/Edit-user/${user.id}/${user.username}/${user.email}/${user.password}/${user.role}`}  className='global-btn'>edit</a>
                    <a  onClick={e => handledelete(user.id)} href='#' className='global-btn'>delete</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users available</td>
              </tr>
            )}
          </tbody>
        </table>


      </div>
    </div>
  );
}

export default App;

