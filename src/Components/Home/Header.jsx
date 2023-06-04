import React from "react";
import { Link } from "react-router-dom";
import {
  boy,
  circle,
  end,
  girl,
  peoples,
  seminar,
  start,
  student,
  user,
} from "../../assets";
import { BsStarFill } from "react-icons/bs";

const Header = () => {
  return (
    <div id="header" className="background">
      <div className="gradient1"></div>
      <div className="gradient2"></div>
      <div className="details">
        <div className="left-col">
          <h2 className="primary-text">শিখবেন আপনি সহজ ভাবে</h2>
          <h1 className="primary-text">
            শেখাবো আমরা <br />
            <span> গল্পবলে</span>
          </h1>
          <img src={circle} alt="" className="circle" />
        </div>
        <div className="right-col">
          <p className="secondary-text">
            অনলাইন শিক্ষার জন্য একটি ওয়েবসাইট যা পাঠকের সাথে সংযোগ স্থাপন করে
            এবং আধুনিক শিক্ষা সুবিধা সরবরাহ করে।
          </p>

          <div className="btn-group">
            {/* <Link to="/batch" className="linkBtn">
              <button>
                <img src={peoples} alt="" className="ico" />
                <p>ব্যাচ 01 </p>
              </button>
            </Link> */}
            <Link to="/batch" className="linkBtn">
              <button>
                <img src={peoples} alt="" className="ico" />
                <p> নতুন ব্যাচ </p>
              </button>
            </Link>

            <Link to="/batch" className="linkBtn">
              <button>
                <img src={seminar} alt="" className="ico" />
                <p>ফ্রি সেমিনার </p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="review-section">
        <div className="star-review">
          <h1>4.7</h1>
          <div>
            <div className="stars">
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
            </div>
            <small>100+ review</small>
          </div>
        </div>
        <div className="text-review">
          <div className="bubble">
            <p className="secondary-text">
              🏆 This is the best online platform
            </p>
          </div>
          <div className="user">
            <img src={user} alt="" />
          </div>
        </div>
      </div>

      <div className="banner">
        <img src={student} alt="" className="student" />
        <div className="content">
          <div className="illustrations">
            <img src={boy} alt="" className="boy" />
            <img src={girl} alt="" className="girl" />
          </div>
          <div className="details">
            <p className="banner-title">Basic Python</p>
            <h1>
              পরবর্তী ব্যাচের <span>সময় সূচি</span>
            </h1>
            <div className="timing">
              <div className="start">
                <img src={start} alt="" />
                <div className="time">
                  <h2>এনরোলমেন্ট শুরু</h2>
                  <p className="secondary-text">01 July, 2023</p>
                </div>
              </div>
              <div className="end">
                <img src={end} alt="" />
                <div className="time">
                  <h2>এনরোলমেন্ট শেষ</h2>
                  <p className="secondary-text">01 July, 2023</p>
                </div>
              </div>
            </div>
            <h2 className="price secondary-text">
              কোর্স ফি <span>6500</span> টাকা মাত্র
            </h2>
            <div className="btn-group">
              <Link to="/batch" className="linkBtn">
                <button>
                  <img src={seminar} alt="" className="ico" />
                  <p>ফ্রি সেমিনার </p>
                </button>
              </Link>
              <Link to="/batch" className="linkBtn">
                <button>
                  <img src={peoples} alt="" className="ico" />
                  <p>এখনি শুরু করো</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
