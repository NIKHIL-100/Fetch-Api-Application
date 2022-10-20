import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async() =>{
        const response = await fetch ("https://api.github.com/users");
        setUsers( await response.json());
    }

    useEffect(() => {
        getUsers();
    },[] );

  return (
    <>
    <div style={{backgroundColor:"black"}}>
      <h2 className="p-4 text-white">Github Users</h2>
      <div className="container-fluid mt-2">
        <div className="row text-center">

       {
        users.map((curElem) => {
            return (
                <div className="col-10 col-md-4 p-4">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src= {curElem.avatar_url} alt="" className="rounded" width={155} />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 textleft">{curElem.login}</h4>
                  <span className="textleft" >MERN Developer</span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats ">
                  <div className="d-flex flex-column"><span className="articles">Articles</span><span className="number1 " > 45</span></div>
                  <div className="d-flex flex-column"><span className="followers">Followers</span><span className="number2">985</span></div>
                  <div className="d-flex flex-column"><span className="rating ">Rating</span><span className="number3">7.7</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            )
        })
       }

          
        </div>
      </div>

      </div>
    </>
  );
};

export default UseEffectAPI;
