import { Image } from 'antd'
import React, { FC } from 'react'

interface ImageComponentProps {
  src: string
  width: number
  height: number
  preview: boolean
}

const ImageComponent: FC<ImageComponentProps> = (props) => <Image {...props} />

export default ImageComponent
