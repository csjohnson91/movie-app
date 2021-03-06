import React, { CSSProperties } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/DetailBackdrop.css'
import { Link } from 'react-router-dom';
import history from '../history';

type DetailBackdrop = {
  height: number
  src: string,
  alt: string
}

const DetailBackdrop = ({ height, src, alt }: DetailBackdrop) => {

  const imageStyle: CSSProperties = {
    opacity: 0.5,
    height: height,
    overflow: 'hidden'
  };

  return (
    <div className='backdrop-container'>
      <div style={imageStyle}>
        <img src={src} alt={alt}/>
      </div>
      <Link onClick={history.goBack} to='/'>
        <div className='back-button'><FaArrowLeft/></div>
      </Link>
    </div>
  )
};

export default DetailBackdrop