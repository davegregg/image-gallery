window.onload = main

function main () {
    // loadImages()
    populateAlbumDropdown()
}

function populateAlbumDropdown() {
    const selectElement = document.querySelector("#album-choice")
    selectElement.onchange = loadImages

    for (const album of albums) {
        // Example: <option value="album.folder">album.name</option>

        // 1. Create a new empty element by tag name:
        const option = document.createElement("option")

        // 2. Customize the new baby element:
        option.value = album.folder
        option.innerText = album.name

        // 3. Add it to a branch which is already on the page:
        selectElement.append(option)
    }
}

function loadImages (album) {
    const parentElement = document.querySelector("main")

    for (const path of album.paths) {
        // VISUALIZE THE GOAL: <img class="card" src="insert-image-path-here">

        // 1. Create the empty element by tag name:
        const imageElement = document.createElement("img")

        // 2. Customize it in some way:
        imageElement.setAttribute("src", path)
        imageElement.classList.add("img-thumbnail", "gallery-image")

        // 3. Add it to an existing branch on the DOM tree:
        parentElement.append(imageElement)
    }

    console.log(parentElement)
}


