import React, { useState } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FcDocument } from "react-icons/fc";
import { FiUpload } from 'react-icons/fi';
const ProfessionalDocuments = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleUploadButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <input
        type="file"
        id="fileInput"
        className="d-none"
        onChange={handleFileChange}
        multiple // Allow multiple file selection
      />
       <span className='fileaccept'>We accept either pdf,doc,docx,zip,xls,xlsx,image upto 25MB</span>
      <div className="upload-section">
      <label className='uploadlabel' onClick={handleUploadButtonClick}>
      <FiUpload className="upload-icon" /> Upload Document
      </label>
      </div>
      <div className="row">
        <div className="col">
          <h5>Professional documents</h5>
          <ListGroup>
            {files.map((file, index) => (
              <ListGroupItem key={index} className="document-item">
                {/* <span className="bullet-icon">&#8226;</span> */}
                <span className="document-icon">
                  <FcDocument /> {file.name}
                </span>

              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
      </div>
      );
};

      export default ProfessionalDocuments;
