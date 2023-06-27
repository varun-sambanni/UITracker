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
  boxShadow: 24,
  margin: "0 auto",
  overflow: "auto",
};

// isFromAModal -> Is it for a modal or not ?

const DataModal = ({ isModalOpen, setIsModalOpen, data, name, type }) => {
  return (
    <>
      <Modal hideBackdrop={true} open={isModalOpen} sx={style}>
        <div>
          <div className="closeButtonContainer">
            <span className="fileName">
              {name + " -->"} {type}
            </span>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
          <div className="dataContainer">
            {!data && "No data to display..."}
            {data && (
              <div
                className="eventLogModalDetailsContainer "
                style={{ margin: "auto" }}
              >
                <div className="eventLogModalDetails">
                  {Object.keys(data).map((key) => {
                    return (
                      <div className="containerCard ">
                        <span className="eventLogModalDetailsTitle">
                          {key}:
                        </span>
                        <div className="containerCard dataDetails">
                          {data[key] && data[key].toString()}
                        </div>
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
