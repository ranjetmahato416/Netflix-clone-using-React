import React from "react";
import "./Featured.scss";
import Strangerthings from "../../images/strangerthings.jpg";
import Netf1 from "../../images/netf1.jpg";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="action">Action</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="horror">Horror</option>
                    <option value="thriller">Thriller</option>
                    <option value="drama">Drama</option>
                    <option value="animation">Animation</option>
                </select>
            </div>
        )}
      <img src={Strangerthings} alt="background" />
      <div className="info">
        <img src={Netf1} alt="firstpic" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo
          animi distinctio obcaecati nam aut amet, atque molestias debitis!
          Culpa sed excepturi est similique consectetur atque quaerat in animi
          labore!
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
