const likeItems = Array.from($$(".song-option .like"));
likeItems.forEach((element) => {
  const user_ID = element.dataset.user_id;
  const album_ID = element.dataset.album_id;
  if (user) {
    element.onclick = () => {
      console.log(element);
      if (element.classList.contains("active")) {
        jQuery.ajax({
          type: "POST",
          url: "/music-player/remove-liked",
          data: {
            user_ID: user_ID,
            album_ID: album_ID,
          },
          success: function () {
            element.classList.remove("active");
          },
        });
      } else {
        jQuery.ajax({
          type: "POST",
          url: "/music-player/create-liked",
          data: {
            user_ID: user_ID,
            album_ID: album_ID,
          },
          success: function () {
            element.classList.add("active");
          },
        });
      }
    };
  }
});
