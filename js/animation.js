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
      (scrollY + viewportHeight * 0.4 - galleryTop * 1.2) /
        (viewportHeight * 1.0),
      0
    ),
    1
  );

  // Zoom gallery
  const galleryScale = 1 + 2 * galleryProgress;
  gallery.style.transform = `scale(${galleryScale})`;

  // Move .galhelp down by up to 100px based on galleryProgress
  const moveDownPx = 888 * galleryProgress;
  galhelp.style.transform = `translateY(${moveDownPx}px)`;
});
