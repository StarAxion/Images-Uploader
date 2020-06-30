function displayImages(images = [], list) {
    let tabIndex = 0;
    list.innerHTML = '';

    images.forEach((image, i) => {
        list.innerHTML += `<li>
              <figure>
                <button class="delete-image" title="delete image" onclick="deleteCurrentImage(${i})" tabindex = "${tabIndex += 1}">
                    <i class="fas fa-trash-alt button-icon"></i>
                </button>
                <img src=${image.url} alt="image">
                <figcaption>
                    <form onsubmit="editImageName(event, ${i})">
                        <input type="text" class="image-name" value="${image.name}" onfocus="this.select()" onkeyup="cancelImageNameChange(event, ${i})" tabindex = "${tabIndex += 1}">
                    </form>
                    <p>Format: ${image.format}</p> 
                    <p>Size: ${image.size} bytes</p>
                </figcaption>
            </figure>
        </li>`
    })
}