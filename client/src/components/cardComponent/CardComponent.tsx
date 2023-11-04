import { Avatar, Card } from 'antd'
import React from 'react'
import Meta from 'antd/es/card/Meta'
import { FirstCabins } from '../../media'

const CardComponent = () => (
  <Card
    cover={<img alt="example" src={FirstCabins} />}
    actions={[<div>hello</div>]}
  >
    <Meta
      avatar={
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
)

export default CardComponent
