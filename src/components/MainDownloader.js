import React from "react";
import "../style/style.css";
// import "../components/Scripts";
import { useRef } from "react";

// const downloadBtn = document.querySelector("button");
function MainDownloader() {
  const fileInputRef = useRef(null);
  const downloadBtnRef = useRef(null);

  //Handle click
  const handleClick = (e) => {
    e.preventDefault();
    downloadBtnRef.current.innerText = "Downloading file...";
    fetchFile(fileInputRef.current.value);
  };

  const fetchFile = (url) => {
    fetch(url, { mode: "no-cors" })
      .then((res) => res.blob())
      .then((file) => {
        // console.log("file");
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\/]/, "");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtnRef.current.innerText = "Download file";
        // console.log(tempUrl);
      })
      .catch(() => {
        downloadBtnRef.current.innerText = "Retry Download";
        alert("Failed to Download File!");
      });
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
          <button className="button" onClick={handleClick} ref={downloadBtnRef}>
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
