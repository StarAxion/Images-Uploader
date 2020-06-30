function deleteAllImages() {
  confirmModal.style.display = "flex";

  modalSubmitButton.onclick = function () {
    images.splice(0);
    localStorage.clear();
    imagesList.innerHTML = '';
    deleteAllButton.style.display = "none";
    confirmModal.style.display = "none";
  }

  modalCancelButton.onclick = function () {
    confirmModal.style.display = "none";
  }
}

deleteAllButton.addEventListener('click', deleteAllImages);


function deleteCurrentImage(i) {
  confirmModal.style.display = "flex";

  modalSubmitButton.onclick = function () {
    images.splice(i, 1);
    localStorage.setItem("images", JSON.stringify(images));
    displayImages(images, imagesList);
    confirmModal.style.display = "none";

    if (images.length === 0) {
      localStorage.clear();
      deleteAllButton.style.display = "none";
    }
  }

  modalCancelButton.onclick = function () {
    confirmModal.style.display = "none";
  }
}