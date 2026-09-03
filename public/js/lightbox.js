(function () {
  "use strict";

  var items = document.querySelectorAll(".photo-grid__item");
  if (!items.length) return;

  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("data-open", "false");
  lightbox.innerHTML =
    '<button class="lightbox__close" type="button" aria-label="Close">&times;</button>' +
    '<img class="lightbox__image" src="" alt="">' +
    '<a class="lightbox__link" href="">View photo details</a>';
  document.body.appendChild(lightbox);

  var img = lightbox.querySelector(".lightbox__image");
  var link = lightbox.querySelector(".lightbox__link");
  var closeBtn = lightbox.querySelector(".lightbox__close");
  var lastFocused = null;

  function open(fullSrc, alt, detailHref) {
    img.src = fullSrc;
    img.alt = alt;
    link.href = detailHref;
    lightbox.setAttribute("data-open", "true");
    lastFocused = document.activeElement;
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.setAttribute("data-open", "false");
    img.src = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  items.forEach(function (item) {
    var thumb = item.querySelector("img");
    if (!thumb) return;

    item.addEventListener("click", function (event) {
      var fullSrc = thumb.getAttribute("data-full") || thumb.src;
      event.preventDefault();
      open(fullSrc, thumb.alt, item.getAttribute("href"));
    });
  });

  closeBtn.addEventListener("click", close);

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) close();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.getAttribute("data-open") === "true") {
      close();
    }
  });
})();
