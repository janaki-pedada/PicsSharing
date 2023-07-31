import React, { useState } from 'react';
const UploadPhoto = ({ onUpload }) => {
  const [imageFiles, setImageFiles] = useState([]);
  const [username, setUsername] = useState('');
  const handleFileChange = (event) => {
    const files = event.target.files;
    setImageFiles([...imageFiles, ...files]);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const uploadedPhotos = imageFiles.map((file) => ({
      id: new Date().getTime() + Math.random(), 
      imageUrl: URL.createObjectURL(file),
      username: username,
      likes: 0, 
      liked: false, 
    }));
    uploadedPhotos.forEach((photoData) => {
      onUpload(photoData);
    });
    setImageFiles([]);
    setUsername('');
  };
  const headerStyle = {
    textAlign: 'center',
    color: 'blue',
    marginBottom: '20px',
  };
  return (
    <div>
      <h1 style={headerStyle}>PHOTO-SHARING-APP</h1>  
      <h2>Upload Photo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" multiple onChange={handleFileChange} />
        </div>
        <br/>
        <div>
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        </div>
        <br/>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
export default UploadPhoto;
