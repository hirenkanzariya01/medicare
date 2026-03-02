import React from "react";
import "./Reviews.css";
import p1 from "../images/review1.avif"
import p2 from "../images/review2.avif"
import { FaRegStar } from "react-icons/fa";





function Review() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "52px" }}>Voices of Trust</h1>
      <p style={{ textAlign: "center", fontSize: "20px" }}>Real stories from doctors and patients sharing their positive experiences with our healthcare platform</p>
      <main>
        <div
          className="slider"
          style={{ "--height": "150px", "--quantity": "10" }}
        >
          <h1>Medical Proffessionals </h1>
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>

            </div>
            <div className="item" style={{ "--position": 3 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>

            </div>
            <div className="item" style={{ "--position": 4 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="slider"
          reverse="true"
          style={{ "--height": "150px", "--quantity": "10" }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <div className="review">
                <div className="profilePic">
                  <img src={p1} alt="" />
                </div>
                <div className="text">
                  <div className="drinfo">
                    <div className="name">
                      <h5>Dr. Robert Martinez</h5>
                      <h6>Pediatrician</h6>
                    </div>
                    <div className="stars">
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                      <FaRegStar className="text-warning" />
                    </div>
                  </div>
                  <p>"The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Review;