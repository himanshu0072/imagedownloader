const fileInput = document.querySelector("input"),
  downloadBtn = document.querySelector("button");
downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log("button is clicked");
  fetchFile(fileInput.vslue);
});

function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      console.log("file");
    });
}
