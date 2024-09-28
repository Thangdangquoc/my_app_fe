import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";
import { creatCate } from "../../../service/CateService";
const ModalCreatCate = (props) => {
  const { show, setShow, fetchData } = props;

  const handleClose = () => {
    setShow(false);
    setName("");
    setSymbol("");
    setTranslate("");
    setDescription("");
  };

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [translate, setTranslate] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async () => {
    try {
      let res = await creatCate(name, symbol, translate, description);
      if (res.status === 200) {
        toast.success("Create success!");
        handleClose();
        await fetchData();
      }
    } catch (error) {
      toast.error("Creat error!");
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
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
          <Modal.Title>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name Category</label>
              <input
                type="name"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Symbol</label>
              <input
                type="symbol"
                className="form-control"
                value={symbol}
                onChange={(event) => setSymbol(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Translate</label>
              <input
                type="translate"
                className="form-control"
                value={translate}
                onChange={(event) => setTranslate(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="description"
                className="form-control"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
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
export default ModalCreatCate;
