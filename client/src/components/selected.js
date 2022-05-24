import React from 'react'
import { Modal, Button } from "react-bootstrap";


function Selected(props) {
  return (
      <div><Modal
          {...props}
          size="l"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
<div className='success'></div>
<h3 style={{color:"#51ff00"}}>This task is checked by another user , but you can use it ! </h3>
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
      </Modal>
      </div>

  )
}

export default Selected