function resize() {
  $(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false
  });

  $(".panel-container").resizable({
    handleSelector: ".splitter-horizontal",
    resizeWidth: false
  });
}
setInterval(resize, 1000)