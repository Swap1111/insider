import React from 'react'
import Card from 'antd/es/card/Card'
export default function ComCardsmall2() {
  return (
    <Card
    
      title="Event Guide"
      bordered={true}
      style={{
        width: 300, marginTop: '20px', marginBottom: '30px',
      }}
    >
      <p>For Age(s) <br /> Family Friendly</p>
      <p>Language Hindi</p>
    </Card>

  )
}
