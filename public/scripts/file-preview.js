const previewImgElement = document.getElementById("preview");

document.getElementById("image").addEventListener("change", function (e) {
  const [file] = e.target.files;
  if (file) {
    const imageSrc = URL.createObjectURL(file);
    preview.src = imageSrc;
  } else {
    preview.src = "";
  }
});
