import React, { useState } from 'react';
import './AdminPanel.css'; // Import your CSS file

const AdminPanel = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('description', description);
    formData.append('image', imageFile);

    await saveImage(imageFile); 
    await saveDataToJSON(formData);

    setHeading('');
    setDescription('');
    setImageFile(null);
  };

  const saveImage = async (imageFile) => {
    if (!imageFile) return; 

    const imagePath = `src/images/${imageFile.name}`;
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      document.body.appendChild(image); 
    };

    reader.readAsDataURL(imageFile);
  };

  const saveDataToJSON = async (formData) => {
    const data = Object.fromEntries(formData); 

    const jsonString = JSON.stringify(data, null, 2);
    console.log('JSON Data:', jsonString); 
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="heading">Heading:</label>
          <input type="text" id="heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPanel;
