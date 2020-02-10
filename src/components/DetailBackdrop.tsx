import React from 'react'

type DetailBackdrop = {
  height: number
  src: string,
  alt: string
}
// TODO: add back button
const DetailBackdrop = ({ height, src, alt }: DetailBackdrop) => {
  return (
    <div style={{ opacity: '50%', height: height, overflow: 'hidden' }}>
      <img src={src} alt={alt}/>
    </div>
  )
};

export default DetailBackdrop