function editImageName(event, i) {
  event.preventDefault();

  if (event.target.firstElementChild.value != '') {
    images[i].name = event.target.firstElementChild.value;
    localStorage.setItem("images", JSON.stringify(images));
    displayImages(images, imagesList);
  } else {
    event.target.firstElementChild.focus();
    event.target.firstElementChild.placeholder = "Enter name";
  }
}


function cancelImageNameChange(event, i) {
  if (event.keyCode === 27) {
    event.target.value = images[i].name;
  }
}