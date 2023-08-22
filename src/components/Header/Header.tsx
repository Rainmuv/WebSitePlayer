import React from 'react';
import './Header.scss';
import { Input } from '../Input/Input';

export const Header = () => {
  return (
    <div className='container'>
      <div className='header_wrapper'>
        <div className='header_wrapper__text'>
          <h1 className='header_wrapper__text_title' >Play any audio sources directly in the browser!</h1>
          <p className='header_wrapper__text_subtitle'>Without any restrictions for free</p>
          <p className='header_wrapper__text_descr'>By uploading the audio file, you agree to our <span className='wrapper_descr-span'>Terms of Service.</span></p>
        </div>
        <Input/>
      </div>
    </div>
  )
}
