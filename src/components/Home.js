import React, { useState } from "react";
import "./Home.scss";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="app-container">
      <button className="open-modal-btn" onClick={toggleModal}>
        Click
      </button>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <div className="gstt">
              <p
                className="no-worries"
                style={{ marginTop: "5px", marginLeft: "10px" }}
              >
                GST?No Worries!
              </p>

              <button
                className="close-modal-btn"
                style={{ color: "white" }}
                onClick={toggleModal}
              >
                X
              </button>
            </div>
            <div className="start-container">
              <div className="st" style={{ fontSize: "12px" }}>
                <p
                  className="start"
                  style={{ fontSize: "12px", marginLeft: "50px" }}
                >
                  Starting 1st OCtober 2023,28% GST is being charged by
                  <br />
                  Government on your deposits.
                </p>
              </div>
              <div className="ruu">
                <div className="ru" style={{ marginTop: "10px" }}>
                  <p className="rummy">100% Govt. GST paid by RummyCircle</p>
                </div>
              </div>{" "}
            </div>
            <div className="gst-container">
              <div className="benifits">
                <p
                  className="earned"
                  style={{ marginTop: "8px", marginLeft: "13px" }}
                >
                  GST benefits earned so far
                </p>
                <p
                  className="amount"
                  style={{
                    color: " #77AA00",
                    fontWeight: "800",
                    marginTop: "8px",
                  }}
                >
                  ₹1,10,000
                </p>
              </div>

              <div className="deposits">
                <p style={{ fontSize: "16px", fontWeight: "800" }}>
                  How GST on deposit works?
                </p>
                <div className="list">
                  <span>You Pay</span>
                  <span style={{ fontSize: "16px", fontWeight: "800" }}>
                    ₹1000
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    Inclusive of Govt. GST
                  </span>
                </div>
              </div>
              <div className="gst-amount">
                <div className="wallet">
                  <span style={{ color: " #77AA00", fontWeight: "800" }}>
                    ₹780
                  </span>
                  <span>Goes to your wallet</span>
                </div>
                <div className="gst-deposit">
                  <span style={{ color: "red", fontWeight: "800" }}>₹220</span>
                  <span>Govt. GST on your deposit</span>
                </div>
              </div>

              <div className="rummy-circle">
                <div className="paid">
                  <span
                    style={{
                      marginLeft: "-150px",
                      marginTop: "10px",
                      color: " #77AA00",
                      fontWeight: "800",
                    }}
                  >
                    ₹220
                  </span>
                  <div className="img-gst">
                    <span
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginLeft: "20px",
                      }}
                    >
                      GST paid by{" "}
                      <p style={{ fontWeight: "800", marginTop: "1px" }}>
                        RummyCircle
                      </p>
                    </span>
                    <p style={{ marginTop: "-10px" }}>on your behalf</p>
                  </div>
                </div>
                <p
                  className="line"
                  style={{ marginTop: "30px", width: "50px" }}
                >
                  --->
                </p>
                <div className="get">
                  <span>You Get</span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: " #77AA00",
                      fontWeight: "800",
                    }}
                  >
                    ₹1000
                  </span>
                  <span style={{ width: "95px" }}>in your wallet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;