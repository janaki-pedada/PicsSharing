import React, { useState } from 'react';
import LikeUnlikePhoto from './LikeUnlikePhoto';
import ViewFullPhoto from './ViewFullPhoto';
import './HomePage.css';
const HomePage = ({ photos, onLike }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };
  const handleCloseFullPhoto = () => {
    setSelectedPhoto(null);
  };
  return (
    <div className="homepage-container">
      <div className="homepage-grid">
        {photos.map((photo) => (
          <div key={photo.id} onClick={() => handlePhotoClick(photo)} className="photo-container">
            <img src={photo.imageUrl} alt={`Uploaded by ${photo.username}`} />
            <p>Uploaded by: {photo.username}</p>
            <LikeUnlikePhoto photo={photo} onLike={onLike} />
          </div>
        ))}
      </div>
      {selectedPhoto && <ViewFullPhoto photo={selectedPhoto} onClose={handleCloseFullPhoto} />}
    </div>
  );
};
export default HomePage;
