import React from 'react'
import { Card } from 'antd';
export default function ColorCard(props) {
  return (
    <>
      <div style={{ display: 'flex', marginLeft: '20px' }}>
        <div className='color-card-container' style={{ display: 'flex', marginTop: '5px' }}>
          <Card className="card1"
            hoverable
            style={{
              display: 'flex',
              background: props.data.c,
              marginLeft: '27px',
              width: '163px',
              padding: '20px',
              height: '109px',
            }}
          >
            <h2 style={{ textAlign: 'center' }}> {props.data.c} </h2>
          </Card>
        </div>
      </div>
    </>
  )
}
