import React from "react";
import Register from "../Register/Register";
import "./Tab11.scss";

function Tab13() {
  return (
    <div className="tab-content">
      <div id="tab-3-content">
        <div className="tab-3-content-inner">
          <p className="text-lg">
            Choose one plan and watch everything on Netflix
          </p>
          <a href={<Register/>} className="btn btn-xl">
            Watch free for 30 days.
          </a>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly price after free month ends.</td>
              <td>$7.99</td>
              <td>$11.99</td>
              <td>14.99</td>
            </tr>
            <tr>
              <td>HD Available</td>
              <td>
                <i className="fas fa-times"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Ultra HD Available</td>
              <td>
                <i className="fas fa-times"></i>
              </td>
              <td>
                <i className="fas fa-times"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Screen you can watch on at the same time</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Watch on your Tv, laptop, phone and tablet</td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Unlimited Movies and Tv shows</td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Cance anytime</td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>First month free</td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
              <td>
                <i className="fas fa-check"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tab13;
