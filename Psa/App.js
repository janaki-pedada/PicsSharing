import React, { useState } from 'react';
import ErrorBoundary from './Psa/ErrorBoundary';
import HomePage from './Psa/HomePage';
import UploadPhoto from './Psa/UploadPhoto';
import ViewFullPhoto from './psa/ViewFullPhoto';
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
    <ErrorBoundary>
      <div>
        <UploadPhoto onUpload={handleUpload} />
        {uploadedPhotos.length > 0 && <HomePage photos={uploadedPhotos} onLike={handleLike} />}
      </div>
    </ErrorBoundary>
  );
}
export default App;

