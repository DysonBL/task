import React, { useState } from "react";
import { Button } from "bootstrap";

const Pagenation = ({ PostPage, AllPage, Pagenation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const getPrevious  = () => {
    setCurrentPage(currentPage - 1)
}
const getNext  = () => {
    setCurrentPage(currentPage + 1)
}
  const PageNumber = [];
  const init = Math.ceil(AllPage / PostPage);
  if (init === 1) return null;
  for (let i = 1; i <= init; i++) {
    PageNumber.push(i);
  }

  return (
    <div>
      <nav aria-label="page navigation">
        <ul>
          <li>
          <button className="button" onClick={getNext}>
          {"▼"}
      
            {PageNumber.includes(currentPage - 1) && (
              <p
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  Pagenation(currentPage - 1);
                }}
              >
                prev
              </p>
            )}
              </button>
          </li>
          <li>
            {PageNumber.map(() => (
              <li key={Number}>
                <href
                  onClick={() => {
                    setCurrentPage(Number);
                    Pagenation(Number);
                  }}
                 />

                  {Number}
              </li>
            ))}
          </li>
          <li>
          <button className="button" onClick={getPrevious}>
          {"▲"}
       
            {PageNumber.includes(currentPage + 1) && (
              <p
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  Pagenation(currentPage + 1);
                }}
              >
                prev
              </p>
            )}
             </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagenation;
