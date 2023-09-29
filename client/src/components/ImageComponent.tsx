import { Image } from 'antd'
import React from 'react'

interface ImageComponentProps {
  src: string
  width: number
  height: number
  preview: boolean
}

function ImageComponent(props: ImageComponentProps) {
  return <Image {...props} />
}

export default ImageComponent
