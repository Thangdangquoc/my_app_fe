// import { Button } from "bootstrap";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                FirtName
              </label>
              <input
                type="firstname"
                class="form-control"
                id="inputFirtName4"
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                FirtName
              </label>
              <input type="lastname" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                ROLE
              </label>
              <select id="inputState" class="form-select">
                <option selected value="USER">
                  {" "}
                  USER
                </option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">ManageUser User</div>
      <div className="user-content">
        <div>
          <button>Add User</button>
        </div>
        <div>
          Table
          <Example />
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
