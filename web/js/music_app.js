const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = $("body");
const audio = $("#audio");
const repeat = $(".main__player .repeat");
const prev = $(".main__player .prev");
const play = $(".main__player .play");
const pause = $(".main__player .pause");
const next = $(".main__player .next");
const random = $(".main__player .random");
const like = $(".main__player .option__content .like");
const songNamePlayer = $(".main__player .song-name");
const songAuthorPlayer = $(".main__player .song-author");
const songImgPlayer = $(".main__player .song-img");
const songDurationPlayer = $(".main__player .durationTime");
const currentTime = $(".currenTime");
const sidebarTime = $(".sidebarTime--current");
const sidebarBg = $(".sidebarTime--bg");
const volumeMute = $(".mute");
const volumeLow = $(".volume--low");
const volumeHight = $(".volume--hight");
const volumSideBg = $(".volume__silebar--bg");
const volumSide = $(".volume__silebar--current");
const loginMain = $("#login");
const loginContainer = $(".login__container");
const songItem = Array.from($$(".play-list .song-item"));
const mobileToggle = Array.from($$(".mobile-toggle"));

const settingBg_icon = $(".settingBg__icon");
const playlist_Icon = Array.from($$(".playlist__icon > *"));
const playlist_BtnOpen = $(".main__playlist .open");
const playlist_BtnClose = $(".main__playlist .close");
const playlist_Content = $(".main__playlist .playlist__content");
const playlist_TabName = Array.from($$(".playlist_grouptab span"));
const playlist_TabContent = Array.from($$(".tab__container-list"));
const settingBg_item = Array.from($$(".main__settingBg .bg-item"));
const playImg = Array.from($$(".play-list .song-img--hover"));
const songName = Array.from($$(".play-list .song-name"));
const login = Array.from($$(".login"));

const user = $("#user");
const userIconOption = Array.from($$(".user .fas.fa-caret-down.icon"));
const userOption = Array.from($$(".user .user__option"));

const userAvatar = Array.from($$(".user .user__avatar"));
const userViewInfo = Array.from($$(".user .view-info"));

const userValueInfo = Array.from($$("#user .value span"));
const userIconSetting = Array.from($$("#user .icon-setting"));
const userIconSetting_Close = Array.from($$("#user .icon-setting-close"));
const userEditInput = Array.from($$("#user .edit_value"));
const userEditPassword = $("#user .edit_password");
const usernameIconSetting = $("#user .user_username .icon-setting");
const t_createIconSetting = $("#user .user_time-create .icon-setting");
const userIconSummit = $("#user .user__icon-summit");

const app = {
  currentIndex: 0,
  lastIndex_Play: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isLogin: false,
  listSong: songItem.map((song) => {
    const isLiked = song.querySelector(".like").classList.contains("active");
    return {
      name: song.querySelector(".song-name").innerText,
      author: song.querySelector(".song-author").innerText,
      duration: song.querySelector(".song-duration").innerText,
      image: song.querySelector(".song-img").style.backgroundImage,
      path: song.dataset.path,
      isLiked: isLiked,
    };
  }),
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.listSong.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.listSong.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.listSong.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  render: function () {},

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.listSong[this.currentIndex];
      },
    });
  },

  handleEvent: function () {
    // Event for login
    function showLogin() {
      loginMain.classList.add("active");
    }

    function hideLogin() {
      loginMain.classList.remove("active");
    }

    login.forEach((element) => {
      element.addEventListener("click", showLogin);
    });

    loginMain.addEventListener("click", hideLogin);

    loginContainer.onclick = function (event) {
      event.stopPropagation();
    };

    $(".singin__name").onclick = function () {
      $(".singin__name").classList.add("active");
      $(".singin").classList.add("active");
      $(".singup").classList.remove("active");
      $(".singup__name").classList.remove("active");
    };

    $(".singup__name").onclick = function () {
      $(".singin").classList.remove("active");
      $(".singin__name").classList.remove("active");
      $(".singup__name").classList.add("active");
      $(".singup").classList.add("active");
    };

    if (this.isLogin) {
      // event show userOption
      function showUserOption() {
        for (let i = 0; i < userOption.length; i++) {
          userOption[i].classList.add("active");
        }
      }

      function hideUserOption() {
        for (let i = 0; i < userOption.length; i++) {
          userOption[i].classList.remove("active");
        }
      }

      userIconOption.forEach((element) => {
        element.addEventListener("click", showUserOption);
      });

      body.addEventListener("click", hideUserOption);

      userOption.forEach((element) => {
        element.onclick = function (event) {
          event.stopPropagation();
        };
      });

      userIconOption.forEach((element) => {
        element.onclick = function (event) {
          event.stopPropagation();
        };
      });

      // Event show #User
      function showUser() {
        user.classList.add("active");
      }

      function hideUser() {
        user.classList.remove("active");
      }

      userAvatar.forEach((element) => {
        element.addEventListener("click", showUser);
      });

      userViewInfo.forEach((element) => {
        element.addEventListener("click", showUser);
      });

      user.addEventListener("click", hideUser);

      $(".user-content").onclick = function (event) {
        event.stopPropagation();
      };

      // Event xu ly UserForm
      function showEditInput(index) {
        userValueInfo[index].classList.remove("active");
        userEditInput[index].classList.add("active");
        userIconSetting[index].classList.remove("active");
        userIconSetting_Close[index].classList.add("active");
        if (!userIconSummit.classList.contains("active")) {
          userIconSummit.classList.add("active");
        }
      }

      function hideEditInput(index) {
        userValueInfo[index].classList.add("active");
        userEditInput[index].classList.remove("active");
        userIconSetting[index].classList.add("active");
        userIconSetting_Close[index].classList.remove("active");
        if (userValueInfo[index] !== userEditPassword) {
          userEditInput[index].value = userValueInfo[index].innerText;
        }
        let count = 0;
        for (let i = 0; i < userIconSetting.length; i++) {
          if (userIconSetting[i].classList.contains("active")) {
            count++;
          }
        }
        if (count === userIconSetting.length) {
          if (userIconSummit.classList.contains("active")) {
            userIconSummit.classList.remove("active");
          }
        }
      }

      userIconSetting.forEach((element, index) => {
        if (
          element !== usernameIconSetting &&
          element !== t_createIconSetting
        ) {
          element.addEventListener("click", function () {
            showEditInput(index);
          });
        }
      });

      userIconSetting_Close.forEach((element, index) => {
        element.addEventListener("click", function () {
          hideEditInput(index);
        });
      });
    }

    const _this = this;
    songItem[this.currentIndex].classList.add("active");

    // Xu ly event nav mobile devices
    for (let i = 0; i < mobileToggle.length; i++) {
      mobileToggle[i].onclick = function () {
        mobileToggle.forEach((e) => {
          e.classList.toggle("menu-on");
        });
        $(".header-mobile").classList.toggle("menu-on");
      };
    }

    // Setting onclick
    settingBg_icon.onclick = function () {
      $(".settingBg__container").classList.toggle("active");
    };

    // Open - Close Playlist
    for (let i = 0; i < playlist_Icon.length; i++) {
      playlist_Icon[i].onclick = function () {
        playlist_BtnOpen.classList.toggle("active");
        playlist_BtnClose.classList.toggle("active");
        playlist_Content.classList.toggle("active");
      };
    }

    // Click tab Playlist
    for (let i = 0; i < playlist_TabName.length; i++) {
      playlist_TabName[i].onclick = function () {
        for (let j = 0; j < playlist_TabName.length; j++) {
          playlist_TabName[j].classList.remove("active");
          playlist_TabContent[j].classList.remove("active");
        }
        playlist_TabName[i].classList.add("active");
        playlist_TabContent[i].classList.add("active");
      };
    }

    for (let i = 0; i < settingBg_item.length; i++) {
      settingBg_item[i].onclick = function () {
        $(".main__bg").style.backgroundImage = this.style.backgroundImage;
      };
    }

    // Xu kien khi nhan bai hat(start song)
    for (let i = 0; i < songItem.length; i++) {
      playImg[i].onclick = function () {
        pause.classList.remove("active");
        play.classList.add("active");
        playImg[i].style.visibility = "hidden";
        if (i === _this.currentIndex) {
          audio.play();
          cdThumbAnimate.play();
        } else {
          songItem[_this.currentIndex].classList.remove("active");
          songItem[i].classList.add("active");
          playImg[_this.currentIndex].style.visibility = "visible";
          sidebarTime.style.width = "0%";
          currentTime.innerHTML = "00:00";
          _this.currentIndex = i;
          _this.loadCurrentSong();
          audio.play();
          cdThumbAnimate.play();
          console.log(i);
        }
      };

      songName[i].onclick = function () {
        playImg[i].click();
      };
    }

    function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
    }

    // Xy ly khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        let progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        sidebarTime.style.width = `${progressPercent}%`;
        currentTime.innerHTML = `${formatTime(audio.currentTime)}`;
      }
    };

    // Xử lý khi tua song
    sidebarBg.onclick = function (e) {
      const seekProcess = e.pageX - this.offsetLeft;
      let progressPercent = (seekProcess / this.offsetWidth) * 100;
      progressPercent = Math.ceil(progressPercent);
      // sidebarTime[i].style.width = `${progressPercent}%`;
      const seekTime = (progressPercent * audio.duration) / 100;
      audio.currentTime = seekTime;
      console.log(sidebarBg);
    };

    function resetVolume() {
      volumeMute.classList.remove("active");
      volumeLow.classList.remove("active");
      volumeHight.classList.remove("active");
    }

    function mute() {
      audio.volume = 0;
      volumSide.style.width = "0%";
      resetVolume();
      volumeMute.classList.add("active");
    }
    // Xy ly xu kien volumeSide onclick
    volumSideBg.onclick = function (e) {
      const seekProcess = e.pageX - this.offsetLeft;
      let progressPercent = (seekProcess / this.offsetWidth) * 100;
      progressPercent = Math.ceil(progressPercent);
      audio.volume = progressPercent / 100;
      volumSide.style.width = `${progressPercent}%`;
      resetVolume();
      if (progressPercent === 0) {
        volumeMute.classList.add("active");
      } else if (progressPercent >= 0 && progressPercent <= 50) {
        volumeLow.classList.add("active");
      } else {
        volumeHight.classList.add("active");
      }
    };

    // Xu ly khi an Icon Volume
    volumeLow.onclick = function () {
      mute();
    };
    volumeHight.onclick = function () {
      mute();
    };

    const cdThumbAnimate = songImgPlayer.animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 10000, // 10 seconds
        iterations: Infinity,
      }
    );
    cdThumbAnimate.pause();

    play.onclick = function () {
      pause.classList.remove("active");
      play.classList.add("active");
      playImg[_this.currentIndex].style.visibility = "hidden";
      audio.play();
      cdThumbAnimate.play();
      console.log(audio);
    };

    pause.onclick = function () {
      pause.classList.add("active");
      play.classList.remove("active");
      playImg[_this.currentIndex].style.visibility = "visible";
      audio.pause();
      cdThumbAnimate.pause();
    };

    random.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      // _this.setConfig("isRandom", _this.isRandom);
      random.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeat.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      // _this.setConfig("isRepeat", _this.isRepeat);
      repeat.classList.toggle("active", _this.isRepeat);
    };

    next.onclick = function () {
      songItem[_this.currentIndex].classList.remove("active");
      playImg[_this.currentIndex].style.visibility = "visible";
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      songItem[_this.currentIndex].classList.add("active");
      playImg[_this.currentIndex].style.visibility = "hidden";
      audio.play();
    };

    prev.onclick = function () {
      songItem[_this.currentIndex].classList.remove("active");
      playImg[_this.currentIndex].style.visibility = "visible";
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      songItem[_this.currentIndex].classList.add("active");
      playImg[_this.currentIndex].style.visibility = "hidden";
      audio.play();
    };

    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        next.click();
      }
    };
  },

  setDefaultApp: function () {
    this.setIsLogin();
    this.setUserdefault();
    this.setVolumeDefault();
    this.loadCurrentSong();
  },

  setVolumeDefault: function () {
    audio.volume = 0.2;
  },

  setIsLogin: function () {
    if (user) {
      this.isLogin = true;
    }
  },

  setUserdefault: function () {
    if (this.isLogin) {
      login.forEach((element) => {
        element.style.display = "none";
        element.classList.remove("active");
      });
      $(".love_list .play-list").classList.add("active");
    }
  },

  loadCurrentSong: function () {
    audio.src = this.currentSong.path;
    songNamePlayer.innerHTML = this.currentSong.name;
    songAuthorPlayer.innerHTML = this.currentSong.author;
    songDurationPlayer.innerHTML = this.currentSong.duration;
    songImgPlayer.style.backgroundImage = this.currentSong.image;
    if (this.currentSong.isLiked && !like.classList.contains("active")) {
      like.classList.add("active");
    } else {
      like.classList.remove("active");
    }
  },

  start: function () {
    this.render();
    this.defineProperties();
    this.setDefaultApp();
    this.handleEvent();
  },
};
app.start();
