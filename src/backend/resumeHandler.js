const fs = require('fs');
const path = require('path');

const uploadResume = (file) => {
  const uploadPath = path.join(__dirname, 'uploads', file.name);
  file.mv(uploadPath, (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      return { success: false, message: 'File upload failed' };
    }
    console.log('File uploaded successfully:', file.name);
    return { success: true, message: 'File uploaded successfully' };
  });
};

module.exports = { uploadResume };