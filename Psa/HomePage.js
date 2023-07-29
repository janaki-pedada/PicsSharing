import React from 'react';

const HomePage = ({ photos }) => {
  return (
    <div>
      <h1>Photo Sharing App</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.imageUrl} alt={`Uploaded by ${photo.username}`} style={{ width: '100%', height: 'auto' }} />
            <p>Uploaded by: {photo.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
