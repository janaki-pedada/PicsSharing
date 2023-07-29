import React, { useState } from 'react';

const UploadPhoto = ({ onUpload }) => {
  const [imageFile, setImageFile] = useState(null);
  const [username, setUsername] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create an object with the photo data and send it back to the App component
    const photoData = {
      id: new Date().getTime(), // Just a simple timestamp as an ID (you can use a better approach)
      imageUrl: URL.createObjectURL(imageFile), // Get the temporary image URL from the uploaded file
      username: username,
    };
    onUpload(photoData);

    setImageFile(null);
    setUsername('');
  };

  return (
    <div>
      <h2>Upload Photo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <div>
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPhoto;
