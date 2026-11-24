
/* ==========================================
   DEEPSAGAR RESORT - HERO SLIDER
========================================== */

document.addEventListener('DOMContentLoaded', function () {

    const slides = [

        {
            image: 'assets/images/image4.jpeg',
            alt: 'DeepSagar Resort coastal view',
            eyebrow: 'Welcome to DeepSagar Resort',
            title: 'Find Your',
            highlight: 'Peace by the Sea.',
            description: 'Escape the everyday and embrace the beauty of coastal living. Discover a relaxing getaway and create memories that stay with you.'
        },

        {
            image: 'assets/images/image6.jpeg',
            alt: 'Beautiful ocean scenery',
            eyebrow: 'Discover the Coastal Beauty',
            title: 'Let the Ocean',
            highlight: 'Take You Away.',
            description: 'Slow down, breathe in the fresh coastal atmosphere and enjoy a refreshing break from your everyday routine.'
        }

    ];


    const imageA = document.getElementById('hero-image-a');
    const imageB = document.getElementById('hero-image-b');

    const eyebrow = document.getElementById('hero-eyebrow');
    const title = document.getElementById('hero-title');
    const description = document.getElementById('hero-description');

    const currentCounter = document.getElementById('hero-current');
    const totalCounter = document.getElementById('hero-total');

    const previousButton = document.getElementById('hero-prev');
    const nextButton = document.getElementById('hero-next');

    if (!imageA || !imageB || !title || !description) return;


    let currentIndex = 0;
    let activeImage = 'a';

    let sliderInterval;


    // Update heading animation

    function restartAnimation(element) {

        element.classList.remove('animate-[fadeUp_0.8s_ease-out_both]');

        void element.offsetWidth;

        element.classList.add('animate-[fadeUp_0.8s_ease-out_both]');

    }


    // Change slide

    function showSlide(index) {

        currentIndex = (index + slides.length) % slides.length;

        const slide = slides[currentIndex];

        const nextImage = activeImage === 'a' ? imageB : imageA;
        const currentImage = activeImage === 'a' ? imageA : imageB;

        // Load next image

        nextImage.src = slide.image;
        nextImage.alt = slide.alt;

        // Fade between images

        nextImage.classList.remove('opacity-0');
        nextImage.classList.add('opacity-100');

        currentImage.classList.remove('opacity-100');
        currentImage.classList.add('opacity-0');

        activeImage = activeImage === 'a' ? 'b' : 'a';


        // Update text

        eyebrow.textContent = slide.eyebrow;

        title.innerHTML = `
            ${slide.title}
            <span class="block italic text-sky-200">
                ${slide.highlight}
            </span>
        `;

        description.textContent = slide.description;


        // Update counter

        currentCounter.textContent =
            String(currentIndex + 1).padStart(2, '0');

        totalCounter.textContent =
            String(slides.length).padStart(2, '0');


        // Restart text animations

        restartAnimation(eyebrow);
        restartAnimation(title);
        restartAnimation(description);

    }


    // Automatic slider

    function startSlider() {

        clearInterval(sliderInterval);

        sliderInterval = setInterval(function () {

            showSlide(currentIndex + 1);

        }, 6000);

    }


    // Previous slide

    previousButton.addEventListener('click', function () {

        showSlide(currentIndex - 1);
        startSlider();

    });


    // Next slide

    nextButton.addEventListener('click', function () {

        showSlide(currentIndex + 1);
        startSlider();

    });


    // Start automatic slider

    totalCounter.textContent = String(slides.length).padStart(2, '0');

    startSlider();


    // Mobile navigation

    const menuButton = document.getElementById('mobile-menu-button');
    const mobileNavigation = document.getElementById('mobile-navigation');
    const menuIcon = document.getElementById('mobile-menu-icon');

    if (menuButton && mobileNavigation && menuIcon) {

        menuButton.addEventListener('click', function () {

            const isOpening = mobileNavigation.classList.contains('hidden');

            mobileNavigation.classList.toggle('hidden');

            menuButton.setAttribute('aria-expanded', String(isOpening));

            menuIcon.className = isOpening
                ? 'fa-solid fa-xmark text-xl'
                : 'fa-solid fa-bars text-xl';

        });


        mobileNavigation.querySelectorAll('a').forEach(function (link) {

            link.addEventListener('click', function () {

                mobileNavigation.classList.add('hidden');

                menuButton.setAttribute('aria-expanded', 'false');

                menuIcon.className = 'fa-solid fa-bars text-xl';

            });

        });

    }


    // Respect reduced motion preference

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

        clearInterval(sliderInterval);

    }

});



document.addEventListener("DOMContentLoaded", function () {

    const galleryGrid = document.getElementById("gallery-grid");
    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImage = document.getElementById("gallery-lightbox-image");
    const counter = document.getElementById("gallery-counter");

    if (!galleryGrid || !lightbox || typeof SITE_CONFIG === "undefined") {
        return;
    }

    const images = SITE_CONFIG.images.gallery || [];

    let currentIndex = 0;

    // Generate Gallery Images
    images.forEach((image, index) => {

        const item = document.createElement("button");

        item.type = "button";
        item.className =
            "group relative overflow-hidden rounded-2xl bg-sky-100 text-left " +
            (index % 4 === 0 ? "row-span-2 min-h-[320px] sm:min-h-[440px]" :
                "min-h-[180px] sm:min-h-[210px]");

        item.setAttribute("aria-label", `Open gallery image ${index + 1}`);

        const img = document.createElement("img");

        img.src = image;
        img.alt = `DeepSagar Beach Resort gallery image ${index + 1}`;
        img.loading = "lazy";
        img.className =
            "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110";

        const overlay = document.createElement("div");

        overlay.className =
            "absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20";

        const icon = document.createElement("div");

        icon.className =
            "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ocean-dark opacity-0 transition-all duration-300 group-hover:opacity-100";

        icon.innerHTML = '<i class="fa-solid fa-expand"></i>';

        item.appendChild(img);
        item.appendChild(overlay);
        item.appendChild(icon);

        item.addEventListener("click", function () {
            openGallery(index);
        });

        galleryGrid.appendChild(item);

    });


    // Open Lightbox
    function openGallery(index) {

        if (!images.length) return;

        currentIndex = index;

        lightboxImage.src = images[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${images.length}`;

        lightbox.classList.remove("hidden");
        lightbox.classList.add("flex");

        document.body.style.overflow = "hidden";
    }


    // Close Lightbox
    function closeGallery() {

        lightbox.classList.add("hidden");
        lightbox.classList.remove("flex");

        document.body.style.overflow = "";
    }


    // Previous Image
    function previousImage() {

        currentIndex = (currentIndex - 1 + images.length) % images.length;

        lightboxImage.src = images[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }


    // Next Image
    function nextImage() {

        currentIndex = (currentIndex + 1) % images.length;

        lightboxImage.src = images[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }


    document.getElementById("gallery-close").addEventListener("click", closeGallery);

    document.getElementById("gallery-prev").addEventListener("click", previousImage);

    document.getElementById("gallery-next").addEventListener("click", nextImage);


    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeGallery();
        }
    });


    // Keyboard Navigation
    document.addEventListener("keydown", function (event) {

        if (lightbox.classList.contains("hidden")) return;

        if (event.key === "Escape") closeGallery();
        if (event.key === "ArrowLeft") previousImage();
        if (event.key === "ArrowRight") nextImage();

    });

});

