// JavaScript for Preloading and Cycling the Homepage Banner

// Array of banner images to preload 
const bannerImages = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
];

// Array to hold preloaded images
const preloadedImages = [];

/**
 * Preload all banner images
 * Loops through the `bannerImages` and preloads each image 
 */
function preloadImages() {
    bannerImages.forEach((src) => {
        const img = new Image(); // Create a new Image
        img.src = src; // Set the image
        preloadedImages.push(img); // Store the preloaded image 
    });
    console.log("Banner images preloaded:", preloadedImages);
}

/**
 * Cycle the homepage banner
 * Displays a new banner image every 3 secs
 */
function cycleBanner() {
    let currentIndex = 0; // Start with the first banner image
    const bannerElement = document.getElementById("banner"); // Get the banner element

    // Ensure the banner element exists
    if (!bannerElement) {
        console.error("Banner element not found.");
        return;
    }

    // Set the initial banner 
    bannerElement.src = bannerImages[currentIndex];

    // Cycle images every 3 secs
    setInterval(() => {
        currentIndex = (currentIndex + 1) % bannerImages.length; // Increments, loop back to 0 at end
        bannerElement.src = bannerImages[currentIndex]; // Update the banner image
    }, 3000); // Change every 3 seconds
}

/**
 * onPageLoad
 * Initializes the functionality for preloading images and cycling the banner.
 */
function onPageLoad() {
    preloadImages(); // Preload banner images
    cycleBanner(); // Start cycling banner
}

// Attach onPageLoad to the window's load event
window.onload = onPageLoad;
