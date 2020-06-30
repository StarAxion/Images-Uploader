let uploader = document.getElementById("uploader"),
  imagesList = document.querySelector(".images"),
  deleteAllButton = document.getElementById("delete-all"),
  confirmModal = document.getElementById("confirm-modal"),
  modalSubmitButton = document.getElementById("submit-button"),
  modalCancelButton = document.getElementById("cancel-button"),
  images = [];


function uploadImages() {
  let files = this.files, i, filesLength = files.length, image;

  if (FileReader) {
    for (i = 0; i < filesLength; i += 1) {
      let fileReader = new FileReader(), file = files[i];

      fileReader.addEventListener('load', function (event) {
        image = {};
        image['name'] = file.name.endsWith('jpeg') ? file.name.slice(0, file.name.length - 5) : file.name.slice(0, file.name.length - 4);
        image['format'] = file.name.endsWith('jpeg') ? file.name.slice(-4) : file.name.slice(-3)
        image['size'] = file.size;
        image['url'] = event.target.result;
        images.push(image);
        displayImages(images, imagesList);
        localStorage.setItem("images", JSON.stringify(images));
        deleteAllButton.style.display = "block";
      })

      fileReader.readAsDataURL(file);
    }
  }
}

uploader.addEventListener('change', uploadImages, false);


function loadImagesFromStorage() {
  let storedImages = JSON.parse(localStorage.getItem("images"))

  if (storedImages && storedImages.length > 0) {
    images = storedImages;
    displayImages(images, imagesList);
    deleteAllButton.style.display = "block";
  }
}

loadImagesFromStorage();