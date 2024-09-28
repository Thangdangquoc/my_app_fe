import { Table, Button } from "react-bootstrap";
import { deleteCate } from "../../../service/CateService";
import { toast } from "react-toastify";

const ListCategory = (props) => {
  const { listCategory, fetchData } = props;
  const handlDeleteCate = async (item) => {
    try {
      console.log("id: ", item);

      let response = await deleteCate(item.id);
      if (response.status === 200) {
        toast.success("Delete success!");
        // handleClose();
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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col"> Vocabulary</th>
          <th scope="col">Category</th>
          <th scope="col">Translate</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {listCategory && listCategory.length > 0 ? (
          listCategory.map((item, index) => {
            return (
              <tr className="child" key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{item.translate}</td>
                <td>
                  <Button variant="info">Update</Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handlDeleteCate(item)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="5">No data available</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ListCategory;
