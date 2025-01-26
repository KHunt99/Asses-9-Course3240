// JavaScript for Preloading Images and Adding Rollover Functionality to Gallery

// Array to store preloaded images
const preloadedImages = [];

// Array of gallery images with default and hover states
const galleryImages = [
    {
        default: "images/firefighter.jpg",
        hover: "images/gallery1-hover.jpg",
    },
    {
        default: "images/work.jpg",
        hover: "images/gallery2-hover.jpg",
    },
    {
        default: "images/silhouette.jpg",
        hover: "images/gallery3-hover.jpg",
    },
    {
        default: "images/event.jpg",
        hover: "images/gallery4-hover.jpg",
    },
];

/**
 * Preload gallery images.
 * Loops through the `galleryImages` array and preloads both default and hover images into memory.
 */
function preloadGalleryImages() {
    galleryImages.forEach((image) => {
        const defaultImg = new Image();
        const hoverImg = new Image();

        defaultImg.src = image.default; // Set the default image source
        hoverImg.src = image.hover; // Set the hover image source

        // Push preloaded images into the array
        preloadedImages.push(defaultImg, hoverImg);
    });

    console.log("Gallery images preloaded:", preloadedImages);
}

/**
 * Add rollover functionality for gallery images.
 * Assigns hover and mouseout events to the gallery image thumbnails.
 */
function addGalleryRollover() {
    // Select all images in the gallery with the "gallery-thumbnail" class
    const galleryItems = document.querySelectorAll(".gallery-thumbnail");

    galleryItems.forEach((img, index) => {
        // Ensure the index aligns with the galleryImages array
        if (index < galleryImages.length) {
            const { default: defaultImg, hover: hoverImg } = galleryImages[index];

            // Add rollover effect: Change to hover image on mouseover
            img.addEventListener("mouseover", () => {
                img.src = hoverImg;
            });

            // Revert to default image on mouseout
            img.addEventListener("mouseout", () => {
                img.src = defaultImg;
            });
        }
    });
}

/**
 * onPageLoad function to initialize the gallery functionality.
 */
function onPageLoad() {
    preloadGalleryImages(); // Preload all gallery images
    addGalleryRollover(); // Add rollover functionality to the gallery thumbnails
}

// Attach the onPageLoad function to the window's load event
window.onload = onPageLoad;
