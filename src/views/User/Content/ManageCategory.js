import "./ManageCategory.scss";
import React, { useState, useEffect } from "react";

import ModalCreatCate from "./ModalCreatCate";
import ListCategory from "./ListCategory";
import { listCate, deleteCate } from "../../../service/CateService";
import ModalUpdatecate from "./ModalUpdatecate";

const ManageCategory = () => {
  const [showModalCreatCategory, setModalCreaCategory] = useState(false);
  const [listCategory, setListCategory] = useState([]); // State để lưu danh sách từ API
  const [loading, setLoading] = useState(true); // State để quản lý trạng thái tải

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await listCate();
      console.log("data: ", response);
      setListCategory(response.data.object); // Cập nhật dữ liệu vào state
      setLoading(false); // Đặt trạng thái là đã tải xong
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Nếu có lỗi, vẫn đặt trạng thái đã tải xong
    }
  };
  // Chỉ gọi API một lần khi component được mount

  if (loading) {
    return <p>Loading...</p>; // Hiển thị thông báo khi đang tải dữ liệu
  }
  return (
    <div className="manage-user-container">
      <div className="title">Managecategory</div>
      <div className="user-content">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setModalCreaCategory(true)}
          >
            Add Category
          </button>
        </div>
        <ModalCreatCate
          show={showModalCreatCategory}
          setShow={setModalCreaCategory}
          fetchData={fetchData}
        />
        <ModalUpdatecate />
        <div>
          <ListCategory listCategory={listCategory} fetchData={fetchData} />
        </div>
      </div>
    </div>
  );
};
export default ManageCategory;
