import React from 'react'
export default function CardTitle(props) {
  return (
    <div style={{ display: 'flex', marginTop: '30px' }}>
      <div><img style={{
        width: '50px',
        height: '50px',
        backgroundColor: '#ededed',
        borderRadius: '25px',
        marginTop: '10px',
        marginRight: '12px',
      }} src="foots.png" alt='.' />
      </div>
      <div style={{}}>
        <p> <span style={{
          fontSize: '15px',
          fontWeight: 'bold'
        }}>{props.title}</span><br />{props.subtitle}</p>
      </div>
    </div>
  )
}
