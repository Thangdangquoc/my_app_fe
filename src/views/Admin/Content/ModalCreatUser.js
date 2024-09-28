import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
const ModalCreatUser = (props) => {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");

  const [lastname, setLastname] = useState("");
  const [iamge, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handlePreviewImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }

    console.log("tesst anh", event.target.files[0]);
  };

  const handleSubmit = () => {
    let data = {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
    };
    alert("test");
    console.log(data);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail()}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword()}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">FirtName</label>
              <input
                type="firstname"
                className="form-control"
                value={firstname}
                onChange={(event) => setFirstname()}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">LastName</label>
              <input
                type="lastname"
                className="form-control"
                value={lastname}
                onChange={(event) => setLastname()}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Address 2</label>
              <input
                type="text"
                className="form-control"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">ROLE</label>
              <select className="form-select" defaultValue="USER">
                <option value="USER"> USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-2">
              <label className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-md-12">
              <label className="form-label lable-upload" htmlFor="labelUpload">
                {" "}
                <FcPlus />
                Upload File Image
              </label>
              <input
                type="file"
                id="labelUpload"
                hidden
                onChange={(event) => handlePreviewImage(event)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCreatUser;
