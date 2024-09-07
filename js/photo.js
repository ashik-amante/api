function loadPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displayPhoto(data))
}

loadPhoto()

function displayPhoto(photos){
    const photoContainer = document.getElementById('photo-container')
    for(const photo of photos){
        console.log(photo);
        const PhotoDiv = document.createElement('div')
        PhotoDiv.innerHTML = `
            <h3>Photo Albumn - ${photo.id}</h3>
            <h3>Photo title - ${photo.title}</h3>
            <img src="${photo.url}" alt="">
            <img src="${photo.thumbnailUrl}" alt="">
        `;
        photoContainer.appendChild(PhotoDiv)
    }
}