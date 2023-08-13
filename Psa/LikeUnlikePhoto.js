import React from 'react';

const LikeUnlikePhoto = ({ photo, onLike }) => {
  const handleLike = (event) => {
    event.stopPropagation(); 
    onLike(photo.id, !photo.liked); 
  };

  return (
    <div>
      <button onClick={handleLike}>{photo.liked ? 'Unlike' : 'Like'}</button>
      <p>Likes: {photo.likes}</p>
    </div>
  );
};

export default LikeUnlikePhoto;
