const previewImgElement = document.getElementById("preview");

document.getElementById("image").addEventListener("change", function (e) {
  const [file] = e.target.files;
  const imageSrc = URL.createObjectURL(file);
  preview.src = imageSrc;
});
