import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const Tables = () => {
  const [Data, setData] = useState([]);
  const [CurrentPage, setCurentPage] = useState(5);
  const [pageItem, setPageItem] = useState(5);

  const gotoPrevPage = () => {
    console.log("prev");
    setPageItem(CurrentPage - 2);
    // setCurentPage(CurrentPage -4)
  };
  const gotoNextPage = () => {
    console.log("next");
    setPageItem(CurrentPage + 2);
    // setCurentPage(CurrentPage +4)
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3006/Data`)
      .then((res) => {
        console.log(res, "dataget==>");
        setData(res);
      })
      .catch((error) => {
        console.log(error, "error in get");
      });
  }, []);

  // let data =res?.data
  console.log(Data?.data, "stasssss");
  const indexofLastPage = CurrentPage * pageItem;
  const indexofFirstPage = indexofLastPage - pageItem;
  const currentPages = Data?.data?.slice(indexofFirstPage - indexofLastPage);
  console.log(currentPages, "curret");
  return (
    <>
      <div>
        <div>
          <div className="AlBtn">
            <Button className="button" onClick={gotoPrevPage}>
              Prev ▼
            </Button>
            <Button className="button" onClick={gotoNextPage}>
              Next ▲
            </Button>
          </div>
          <h1>User List</h1>
        </div>
        <div className="Table">
          <Table striped bordered hover variant="danger">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {currentPages?.map((data) => {
                return (
                  <>
                    <tr>
                      <td>{data.Id}</td>
                      <td>{data.name}</td>
                      <td>{data.Age}</td>
                      <td>{data.city}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Tables;
