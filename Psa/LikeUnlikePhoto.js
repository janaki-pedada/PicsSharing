import React from 'react';

const LikeUnlikePhoto = ({ photo, onLike }) => {
  const handleLike = (event) => {
    event.stopPropagation(); // Prevent click event from propagating to the parent element (photo grid)
    onLike(photo.id, !photo.liked); // Inform the parent component that a photo is liked/unliked
  };

  return (
    <div>
      <button onClick={handleLike}>{photo.liked ? 'Unlike' : 'Like'}</button>
      <p>Likes: {photo.likes}</p>
    </div>
  );
};

export default LikeUnlikePhoto;
