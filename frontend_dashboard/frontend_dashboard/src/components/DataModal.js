import "../App.css";
import React from "react";
import Modal from "@mui/material/Modal";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "94vw",
  height: "90vh",
  bgcolor: "white",
  border: "2px solid black",
  padding: "0.4em",
  boxShadow: 24,
  margin: "0 auto",
  overflow: "auto",
};

// isFromAModal -> Is it for a modal or not ?

const DataModal = ({ isModalOpen, setIsModalOpen, data }) => {
  return (
    <>
      <Modal hideBackdrop={true} open={isModalOpen} sx={style}>
        <div>
          <div className="closeButtonContainer">
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
          <div className="dataContainer">
            {data && (
              <div className="eventLogModalDetailsContainer ">
                <div className="eventLogModalDetails">
                  {Object.keys(data).map((key) => {
                    return (
                      <div className="containerCard ">
                        <span className="eventLogModalDetailsTitle">
                          {key}:
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="eventLogModalDetails ">
                  {Object.keys(data).map((key) => {
                    return (
                      <div className="containerCard dataDetails">
                        {data[key]}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DataModal;
