import React from 'react'
import { Card } from 'antd'
import Link from 'antd/es/typography/Link';
export default function ComCard1(props) {
  return (
    <><Link>
      <Card className="card1"
        hoverable
        style={{
          width: 400,
        }}
        cover={<img alt="example" src={props.data.imageurl}
        />}
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
    </Link>
    </>
  );
}
