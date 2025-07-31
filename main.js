document.addEventListener("DOMContentLoaded", function () {
  const thumbnail = document.getElementById("thumbnail");
  const thumbnails = thumbnail.getElementsByTagName("img");

  const mainVisual = document.getElementById("mainvisual"); // ← 修正
  const mainImg = mainVisual.getElementsByTagName("img")[0];

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", function () {
      const imgSrc = this.getAttribute("src");

      if (mainImg.getAttribute("src") !== imgSrc) {
        mainImg.style.transition = "opacity 0.5s";
        mainImg.style.opacity = 0;

        setTimeout(function () {
          mainImg.setAttribute("src", imgSrc);
          mainImg.style.opacity = 1;
        }, 500);
      }
    });
  }
});
