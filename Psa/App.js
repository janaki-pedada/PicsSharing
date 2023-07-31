import React, { useState } from 'react';
import HomePage from './Psa/HomePage';
import UploadPhoto from './Psa/UploadPhoto';

function App() {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handleUpload = (photoData) => {
    setUploadedPhotos((prevPhotos) => [...prevPhotos, photoData]);
  };

  const handleLike = (photoId, liked) => {
    setUploadedPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === photoId ? { ...photo, likes: liked ? photo.likes + 1 : photo.likes - 1, liked: !photo.liked } : photo
      )
    );
  };

  return (
    <div>
      <UploadPhoto onUpload={handleUpload} />
      {uploadedPhotos.length > 0 && <HomePage photos={uploadedPhotos} onLike={handleLike} />}
    </div>
  );
}

export default App;
