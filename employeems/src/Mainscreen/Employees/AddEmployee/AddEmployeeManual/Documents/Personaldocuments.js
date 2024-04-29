import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { FcDocument } from "react-icons/fc";
import { FiUpload } from 'react-icons/fi';
import './payroldoc.css';

const Personaldocuments = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      const uploadedFiles = Array.from(e.target.files);
      setFiles([...files, ...uploadedFiles]);
    }
  };

  return (
    <div>
      <span className='fileaccept'>We accept Driving Licence, PAN Card upto 25MB</span>
      <div className="upload-section">
        <label htmlFor="file-upload" className='uploadlabel'>
          <FiUpload className="upload-icon" />
          Upload Document
        </label>
        <input id="file-upload" type="file" onChange={handleFileChange} multiple style={{ display: 'none' }} />
      </div>
      <div className="row">
        <div className="col">
          <h5>Personal documents</h5>
          <ListGroup>
            {files.map((file, index) => (
              <ListGroupItem key={index} className="document-item">
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

export default Personaldocuments;
