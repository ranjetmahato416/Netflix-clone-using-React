import React from "react";
import "./Tab11.scss";
import Netflix2 from "../../images/tab2_img.jpg";
import Register from "../Register/Register";

function Tab12() {
  return (
    <div className="tab-content">
      <div id="tab-2-content">
        <div className="tab-2-content-top">
          <p className="text-xl">
            Watch Tv shows and Movies anytime, anywhere - personalized for you.
          </p>
          <a href={<Register/>} className="btn btn-xl">
            Watch free for 30 days.
          </a>
        </div>
        <div className="tab-2-content-bottom">
          <div>
            <img src={Netflix2} alt="" />
            <p className="text-md">Watch on your TV.</p>
            <p className="text-dark">
              Smart TVs, Playstation, Xbox, Chromecase, Apple-TV, Blu-ray player
              and many more.
            </p>
          </div>

          <div>
            <img src={Netflix2} alt="" />
            <p className="text-md">Watch instantly or download for later.</p>
            <p className="text-dark">
              Available on phone and tablet, whereever you go.
            </p>
          </div>

          <div>
            <img src={Netflix2} alt="" />
            <p className="text-md">Use any Computer.</p>
            <p className="text-dark">Watch right on Netflix.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab12;
