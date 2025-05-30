document.addEventListener("scroll", () => {
  const gallery = document.querySelector(".gallery");
  const mainvid = document.querySelector(".mainvid");
  const galhelp = document.querySelector(".galhelp");

  if (!gallery || !mainvid || !galhelp) {
    console.error(
      "One or more elements (.gallery, .mainvid, .galhelp) are missing in the DOM."
    );
    return;
  }

  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;

  const galleryRect = gallery.getBoundingClientRect();
  const galleryTop = galleryRect.top + scrollY;

  const mainvidRect = mainvid.getBoundingClientRect();
  const mainvidCenter = mainvidRect.top + mainvidRect.height / 2;

  const isMainvidInMiddle =
    mainvidCenter >= viewportHeight / 2 - 50 &&
    mainvidCenter <= viewportHeight / 2 + 50;

    const galleryProgress = Math.min(
    Math.max(
      (scrollY + viewportHeight * 0.5 - galleryTop * 1.2) /
        (viewportHeight * 1.0),
      0
    ),
    1
  );

  // Set different multipliers based on screen width
    let scaleMultiplier;
  let translateMultiplier;
  
  if (window.innerWidth <= 1120) {
    // Small desktops
     scaleMultiplier = 0;
    translateMultiplier = 0;
    console.log("992 multiplier:", scaleMultiplier);

  } else if (window.innerWidth <= 1307) {
    // Medium desktops
    scaleMultiplier = 2.6;
    translateMultiplier = 1120;
    console.log("1200 multiplier:", scaleMultiplier);

  } else if (window.innerWidth <= 1540) {  // Changed from < 1401 to <= 1400 for clarity
    // Large desktops
    scaleMultiplier = 1.4;
    translateMultiplier = 1480;   // Reduced from 8280 to a more reasonable value
  } else if (window.innerWidth <= 1920) {
    // HD screens
    scaleMultiplier = 2.0;
    translateMultiplier = 1280; 

  } else {
    // 4K and larger screens
    scaleMultiplier = 2.0;
    translateMultiplier = 1280;
  }
  
  // Zoom gallery
  const galleryScale = 1 + scaleMultiplier * galleryProgress;
  gallery.style.transform = `scale(${galleryScale})`;

  // Move .galhelp down based on screen size and galleryProgress
  const moveDownPx = translateMultiplier * galleryProgress;
  galhelp.style.transform = `translateY(${moveDownPx}px)`;


});