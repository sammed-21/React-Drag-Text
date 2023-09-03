import React, { useState } from 'react';
import axios from 'axios';
 import '../App.css'
const ImageUploader = () => {
    const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1692858180214-c76c1b5d3cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTY5MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM2NzQ3MDV8&ixlib=rb-4.0.3&q=80&w=1080');
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchRandomImage = async () => {
      setIsLoading(true);
  
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/random',
          {
            params: {
              client_id: '51qeFzb6ytJeZAGHDkM2amvDHv7q-sgUo-0Z8u633dk',
            },
          }
        );
  
        setImageUrl(response.data.urls.regular);
//    console.log(response.data.urls.);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
  
      setIsLoading(false);
    };

  return (
    <div className="imgs">
      <button onClick={fetchRandomImage} className='btn1' disabled={isLoading}>
        {isLoading ? 'loading' : 'Fetch image'}
          </button>
          <div>
              
      {imageUrl && <img src={imageUrl} alt="Fetched" style={{width:"80vw", height:"80vh"}}/>}
          </div>
    </div>
  );
};

export default ImageUploader;
