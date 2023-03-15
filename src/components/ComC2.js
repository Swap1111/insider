import React from 'react'
import { Card } from 'antd'
export default function ComC2(props) {
  return (
    <>
      <div style={{ marginLeft: '20px' }}>
        <Card className="card1" style={{ width: '110px', height: '110px', marginTop: '10px' }}
          hoverable
          cover={<img style={{
            width: '110px',
            border: '1px solid red',
            height: '110px'
          }} src={props.data.imageurl}
          />}
        >
          <span><b>{props.data.title}</b></span><br></br>
          <span>{props.data.desc}</span>

        </Card>
      </div>
    </>
  )
}
