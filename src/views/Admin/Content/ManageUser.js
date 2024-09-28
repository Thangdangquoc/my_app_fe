import { useState } from "react";
import "./ManageUser.scss";

import ModalCreatUser from "./ModalCreatUser";

const ManageUser = () => {
  const [showModalCreatuser, setModalCreatuser] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="title">ManageUser User</div>
      <div className="user-content">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setModalCreatuser(true)}
          >
            Add User
          </button>
        </div>
        <div>Table</div>
        <ModalCreatUser show={showModalCreatuser} setShow={setModalCreatuser} />
      </div>
    </div>
  );
};
export default ManageUser;
