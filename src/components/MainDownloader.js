import React from "react";
import "../style/style.css";

function MainDownloader() {
  return (
    <>
      <div className="container">
        <div className="FormContainer">
          <h2 className="title">Download Images Here</h2>
          <input placeholder="Paste image Link Here.."></input>
          <button className="button">Download</button>
          <div className="para">
            <p>contact for query : himanshu2003prajapati@gmail.com</p>
            <p>or</p>
            <p>
              visite:{" "}
              <a
                href="https://connectit000.000webhostapp.com/himanshu/"
                target="_blank"
                rel="noreferrer"
              >
                My Portfolio
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainDownloader;
