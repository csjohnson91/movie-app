import React from 'react'

type DetailBackdrop = {
  height: number
  src: string,
  alt: string
}

const DetailBackdrop = ({ height, src, alt }: DetailBackdrop) => {
  return (
    <div style={{ height: height, overflow: 'hidden' }}>
      <img src={src} alt={alt}/>
    </div>
  )
};

export default DetailBackdrop