import React, { useState } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FcDocument } from "react-icons/fc";
import { FiUpload } from 'react-icons/fi';

function OnboardDocuments() {
  const [files, setFiles] = useState([]);
  const inputId = Math.random().toString(36).substr(2, 9); // Generate a unique input ID

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setFiles([...files, ...fileList]);
  };

  return (
    <Container>
      <span className='fileaccept'>We accept either pdf,doc,docx,zip,xls,xlsx,image upto 25MB</span>
      <div className="upload-section1">
        <label htmlFor={inputId} className="uploadlabel">
          <FiUpload className="upload-icon" />  Upload Document
        </label>
        <input id={inputId} type="file" onChange={handleFileChange} multiple style={{ display: 'none' }} />
      </div>
      <div className="row">
        <div className="col">
          <h5>OnBoardDocuments</h5>
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
    </Container>
  );
}

export default OnboardDocuments;
