import React, { useState } from "react";
import "./ListItem.scss";
import Poster from "../../images/abbeSale.jpg";
import {
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";
import Video1 from "../../images/video1.MP4";
import { useNavigate } from "react-router-dom";

export default function ListItems({ index }) {
  const [isHovered, setisHovered] = useState(false);
  let navigate = useNavigate();

  const Play = () =>{
    navigate('/watch');
    window.location.reload(true);
  }; 

  return (
    <div
      className="listitems"
      style={{ left: isHovered && index * 225 - 20 + index * 1.5 }}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img src={Poster} alt="poster" />
      {isHovered && (
        <>
          <video src={Video1} autoPlay={true} loop/>
          <div className="itemInfo">
            <div className="icons">
              <button className="icon" onClick={Play}>Play</button>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>17 Minutes and 12 Seconds</span>
              <span className="limit">+14</span>
              <span>2017</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, odit.
            </div>
            <div className="genre">Comedy</div>
          </div>
        </>
      )}
    </div>
  );
}
