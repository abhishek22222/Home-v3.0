import React from 'react';
import { Avatar, Input } from '@material-ui/core';
 import { ExpandMore} from '@material-ui/icons';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Button, Modal} from 'react-bootstrap';
import './AddQuestion.css';
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className = "Modal__info">
            <Avatar className = "avatar"/>
                     <h5>userName/userEmail id</h5>
                     <div className = "scope">
                         <PeopleAltIcon/>
                         <p>Public</p>
                         <ExpandMore/>
                     </div>
                     </div>
                     <div className = "inputField">
                     <Input type = "text" placeholder = "Type Your Question here..."/>
                     </div>
        </Modal.Body>
        <Modal.Footer className ="buttons">
          <Button className = "cancel" onClick={props.onHide}>Cancel</Button>
          <button type="submit" className="addQuestion">Add Question</button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;
