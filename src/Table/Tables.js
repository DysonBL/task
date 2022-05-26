import React, { useEffect, useState } from "react";
import { Table,Button} from "react-bootstrap";
import axios from "axios";
import Pagenation from "./Pagenation";

const Tables = (res) => {
  const [Data, setData] = useState([]);
  const [CurrentPage, setCurentPage] = useState(1);


  const gotofirstPage = () => {
    console.log("firstPage");
    setCurentPage((page) => page + 1);
  };
  const gotoPrevPage = () => {
    console.log("prev");

  };
  const gotoNextPage = () => {
    console.log("next");
  };
  const gotoLastPage = () => {
    console.log("lastPage");
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

  return (
    <>
      <div>
      <div>
      <div className="AlBtn">
       
        <Button className="button" onClick={gotoPrevPage}>
          Prev
        </Button>
        <Button className="button" onClick={gotoNextPage}>
          Next
        </Button>
       
      </div>
        <Pagenation/>
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
            {Data?.data?.map((data) => {
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
