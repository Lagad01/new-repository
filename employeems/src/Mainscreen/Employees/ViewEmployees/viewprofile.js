import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './viewprofile.css';
// import '@styles/ViewProfile.css'


const ViewProfile = ({profile, editMode, handleChange}) => {
  return (
    <Container>
      <Form>
        <Row>
          {profile.map((field,index) => (
            <Col key={index} md={4}>
              <Form.Group className="vrow">
                <Form.Label className="label1">{field.label}</Form.Label>
               
                <div className="input-container">
                  {editMode ? (
                    <Form.Control
                      type="text"
                      value={field.value}
                      className="inputfild"
                      onChange={(e) => handleChange(index, e.target.value)}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      readOnly
                      value={field.value}
                      className="inputfild"
                    />
                  )}
                </div>
              </Form.Group>
            </Col>
          ))}
        </Row>
        
      </Form>
    </Container>
  );
};

export default ViewProfile;
