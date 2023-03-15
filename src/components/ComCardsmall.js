import React from 'react'
import Card from 'antd/es/card/Card';
export default function ComCardsmall(props) {
  return (

    <Card className="card1"
    
      style={{
        width: 300,
      }}
    >

      <h2> {props.data.title} </h2>
      <p>{props.data.disp1}</p>
      <p>{props.data.disp2}</p>
      <p>{props.data.price}</p>
      <div style={{ backgroundColor: "#F5FCFE", padding: "10px" }}>
        <strong style={{ color: "#31C0F0", margin: 0 }}>
          {props.data.subpart}
        </strong>
      </div>
    </Card>


  )
}
