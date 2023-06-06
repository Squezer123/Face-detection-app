import './ImageLinkForm.css'
import React, { useState } from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    const [imageUrl, setImageUrl] = useState('');
  
    const handleInputChange = (event) => {
      setImageUrl(event.target.value);
      onInputChange(event);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      onSubmit();
    };
  
    return (
      <div>
        <p className='f3'>{'Put an URL here and I`ll detect all faces'}</p>
        <div className='center'>
          <form className='form center pa4 br3 shadow-5' onSubmit={handleFormSubmit}>
            <input className='f4 pa2 w-70 center' type='text' onChange={handleInputChange} />
            <button className='w-30 grow f4 link ph2 pv2 dib white bg-light-purple' type='submit'>
              Detect
            </button>
          </form>
        </div>
      </div>
    );
  };

export default ImageLinkForm;