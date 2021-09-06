const articles = document.querySelectorAll(".expanded-window");
const hideBtn = document.getElementById("hide");
const showBtn = document.getElementById("expand");
articles.forEach(function (article) {
  const title = article.querySelector(".expanded-section-title");
  title.addEventListener("click", function () {
    articles.forEach(function (item) {
      if (item !== article) {
        item.classList.remove("show-text");
      }
    });
    article.classList.toggle("show-text");
  });
});

articles.forEach(function (article) {
  showBtn.addEventListener("click", function () {
    articles.forEach(function (item) {
      if (item === article) {
        item.classList.add("show-text");
      }
    });
  });
  hideBtn.addEventListener("click", function () {
    articles.forEach(function (item) {
      if (item !== article) {
        item.classList.remove("show-text");
      }
    });
  });
});
