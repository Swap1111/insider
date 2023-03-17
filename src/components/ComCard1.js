import React from 'react'
import { Card } from 'antd'
import {useEffect, useState} from "react";

export default function ComCard1() {
  


  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8000/")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])



  return (
    <>
    
  
  {user && user.length > 0 && user.map((userData, index) => (
      <Card className="card1" 
        hoverable
        style={{
          width: '400',
        }}
        cover={<img alt="example" src={userData.imageurl}
        />}
      >
        <h1 key={userData.id}></h1>
        <h2> {userData.title} </h2>
        <p>{userData.disp1}</p>
        <p>{userData.disp2}</p>
        <p>{userData.price}</p>
        <div style={{ backgroundColor: "#F5FCFE", padding: "10px" }}>
          <strong style={{ color: "#31C0F0", margin: 0 }}>
            {userData.subpart}
          </strong>
        </div>
      </Card>
      
  ))}
    </>
  );
}
