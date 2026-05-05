function loadImage(event) {
  document.getElementById("avatarPreview").src =
    URL.createObjectURL(event.target.files[0]);
}
function buyBook(btn) {
  btn.innerText = "Purchased";
  btn.disabled = true;
}