document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');

    const weddingImages = [
        'images/wedding_decor1.jpg',  // First image
        'images/wedding_stage1.jpg',  // Fourth Image
        'images/wedding_setup.jpg',   // Fifth Image
        'images/wedding_arch.jpg',    // Sixth Image
        'images/wedding_stage2.jpg',   // Eighth Image
        'images/wedding_altar.jpg'    // Ninth Image
    ];


    // Combine the arrays
    const allImages = weddingImages.concat(birthdayImages);

    // Create image elements and add them to the gallery
    allImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Gallery Image';

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
});