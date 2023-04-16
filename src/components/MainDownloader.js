import React from "react";
import "../style/style.css";
// import "../components/Scripts";
import { useRef } from "react";

function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      console.log("file");
    });
}
function MainDownloader() {
  const fileInputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    fetchFile(fileInputRef.current.value);
  };

  return (
    <>
      <div className="container">
        <div className="FormContainer">
          <h2 className="title">Download Images Here</h2>
          <input
            placeholder="Paste image Link Here.."
            ref={fileInputRef}
          ></input>
          <button className="button" onClick={handleClick}>
            Download
          </button>
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
