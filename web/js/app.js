jarallax(document.querySelectorAll(".jarallax"), {
  speed: 0.2,
});

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = $("body");
const audio = $("#audio");
const tabName = Array.from($$("#recommend .group-tab__name h3"));
const tabContent = Array.from($$("#recommend .tab__content"));
const login = Array.from($$(".login"));
const loginMain = $("#login");
const loginContainer = $(".login__container");
const play = Array.from($$(".play"));

const pause = Array.from($$(".pause"));
const sidebarBg = Array.from($$(".sidebarTime--bg"));
const sidebarTime = Array.from($$(".sidebarTime--current"));
const currentTime = Array.from($$(".currenTime"));
const volumSideBg = Array.from($$(".volume__silebar--bg"));
const volumSide = Array.from($$(".volume__silebar--current"));
const songName = Array.from($$(".song-name"));
const playImg = Array.from($$(".song-img--hover"));
const songItem = Array.from($$(".song-item"));
const songPlaylist = Array.from($$(".play-list .song-item"));
const volumeMute = Array.from($$(".mute"));
const volumeLow = Array.from($$(".volume--low"));
const volumeHight = Array.from($$(".volume--hight"));
const mobileToggle = Array.from($$(".mobile-toggle"));
const songSlider = Array.from($$(".slider__player"));

var user = $("#user");
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
  currentIndex: -1,
  lastIndex_Play: 0,
  isPlaying: false,
  isLogin: false,
  currentSlider: 0,
  currentTab: 0,

  listSongSlider: songSlider.map((song) => {
    return {
      name: song.querySelector(".player__name").innerText,
      author: song
        .querySelector(".player__author")
        .innerText.replace("|", "")
        .trim(),
      duration: song.querySelector(".player_duration").innerText,
      image: song.querySelector(".player__img").style.backgroundImage,
      path: song.dataset.path,
    };
  }),
  listSongPlayList: songPlaylist.map((song) => {
    return {
      name: song.querySelector(".song-name").innerText,
      author: song.querySelector(".song-author").innerText,
      duration: song.querySelector(".song-duration").innerText,
      image: song.querySelector(".song-img").style.backgroundImage,
      path: song.dataset.path,
    };
  }),

  render: function () {},

  defineProperties: function () {
    Object.defineProperty(this, "listSong", {
      get: function () {
        const listSong = [...this.listSongSlider, ...this.listSongPlayList];
        return listSong;
      },
    });

    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.listSong[this.currentIndex];
      },
    });
  },

  // Xu ly events
  handleEvent: function () {
    const _this = this;

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

    // Xu ly su kien khi scroll
    document.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop;
      const headerBg = $(".header__background");
      headerBg.style.opacity = scrollTop > 70 ? "1" : "0";
    };

    // Xu ly cac su kien ve play music
    for (let i = 0; i < play.length; i++) {
      // Xu ly playBtn onClick
      play[i].onclick = function () {
        if (_this.currentIndex != -1) {
          pause[_this.currentIndex].click();
        }
        pause[i].classList.remove("active");
        play[i].classList.add("active");
        playImg[i].style.visibility = "hidden";
        if (i === _this.currentIndex) {
          audio.play();
        } else {
          if (_this.currentIndex != -1) {
            sidebarTime[_this.currentIndex].style.width = "0%";
            currentTime[_this.currentIndex].innerHTML = "00:00";
          }
          _this.currentIndex = i;
          playImg[i].click();
          _this.loadCurrentSong();
          audio.play();
          // const loadSong = new Promise((resolve, reject) => {
          //   _this.loadCurrentSong();
          //   resolve();
          // });
          // loadSong.then(function () {
          //   _this.loadCurrentSong();
          //   console.log(audio);
          //   audio.play();
          // });
        }
      };

      // Xu ly pauseBtn onClick
      pause[i].onclick = function () {
        pause[i].classList.add("active");
        play[i].classList.remove("active");
        playImg[i].style.visibility = "visible";
        audio.pause();
      };

      // Xu ly playImg onClick
      playImg[i].onclick = function () {
        songItem.forEach((element) => {
          element.classList.remove("active");
        });
        songItem[i].classList.add("active");
        play[i].click();
      };

      // Xy ly su kien songName onClick
      songName[i].onclick = function () {
        play[i].click();
      };

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
          sidebarTime[_this.currentIndex].style.width = `${progressPercent}%`;
          currentTime[_this.currentIndex].innerHTML = `${formatTime(
            audio.currentTime
          )}`;
        }
      };

      // Xử lý khi tua song
      sidebarBg[i].onclick = function (e) {
        if (i !== _this.currentIndex) {
          play[i].click();
        } else {
          const seekProcess = e.pageX - this.offsetLeft;
          let progressPercent = (seekProcess / this.offsetWidth) * 100;
          progressPercent = Math.ceil(progressPercent);
          // sidebarTime[i].style.width = `${progressPercent}%`;
          const seekTime = (progressPercent * audio.duration) / 100;
          audio.currentTime = seekTime;
        }
      };
    }

    // Xu ly cac su kien ve volume
    function resetVolume(i) {
      volumeMute[i].classList.remove("active");
      volumeLow[i].classList.remove("active");
      volumeHight[i].classList.remove("active");
    }

    function mute(i) {
      audio.volume = 0;
      volumSide[i].style.width = "0%";
      resetVolume(i);
      volumeMute[i].classList.add("active");
    }
    for (let i = 0; i < volumSideBg.length; i++) {
      // Xy ly xu kien volumeSide onclick
      volumSideBg[i].onclick = function (e) {
        const seekProcess = e.pageX - this.offsetLeft;
        let progressPercent = (seekProcess / this.offsetWidth) * 100;
        progressPercent = Math.ceil(progressPercent);
        audio.volume = progressPercent / 100;
        volumSide[i].style.width = `${progressPercent}%`;
        resetVolume(i);
        if (progressPercent === 0) {
          volumeMute[i].classList.add("active");
        } else if (progressPercent >= 0 && progressPercent <= 50) {
          volumeLow[i].classList.add("active");
        } else {
          volumeHight[i].classList.add("active");
        }
      };

      // Xu ly khi an Icon Volume
      volumeLow[i].onclick = function () {
        mute(i);
      };
      volumeHight[i].onclick = function () {
        mute(i);
      };
    }

    tabName[this.currentTab].classList.add("active");
    // Xu ly event chuyen tab Recommended
    for (let i = 0; i < tabName.length; i++) {
      tabName[i].onclick = function () {
        tabName[_this.currentTab].classList.remove("active");
        tabContent[_this.currentTab].classList.remove("active");
        _this.currentTab = i;
        tabContent[i].classList.add("active");
        tabName[i].classList.add("active");
      };
    }

    // Xu ly event nav mobile devices
    for (let i = 0; i < mobileToggle.length; i++) {
      mobileToggle[i].onclick = function () {
        mobileToggle.forEach((e) => {
          e.classList.toggle("menu-on");
        });
        $(".header-mobile").classList.toggle("menu-on");
      };
    }

    // Xu ly khi end bai hat
    audio.onended = function () {
      play[_this.currentIndex + 1].click();
      if (_this.currentSlider !== _this.currentIndex) {
        _this.handleSlider();
      }
    };
  },

  handleSlider: function () {
    $(`.slider__item-${this.currentSlider}`).classList.remove("active");
    this.currentSlider++;
    if (this.currentSlider >= this.listSongSlider.length) {
      this.currentSlider = 0;
    }
    $(`.slider__item-${this.currentSlider}`).classList.add("active");
  },

  imgSlide_Index: [2, 2, 2],
  handleSlide_Recommend: function (index) {
    let tab = "";
    switch (index) {
      case 0:
        tab = ".vpop-tab";
        break;
      case 1:
        tab = ".usuk-tab";
        break;
      case 2:
        tab = ".lofi-tab";
        break;
    }
    const slideImgs = $$(`${tab} .container__slide-item`);
    const slideImgFirst = $(`${tab} .container__slide-item.first`);
    const slideImgSecond = $(`${tab} .container__slide-item.second`);
    const slideImgThird = slideImgs[this.imgSlide_Index[index]];
    const slideImgFourth =
      slideImgs[
        this.imgSlide_Index[index] === slideImgs.length - 1
          ? 0
          : this.imgSlide_Index[index] + 1
      ];
    slideImgFourth.classList.replace("fourth", "third");
    slideImgThird.classList.replace("third", "second");
    slideImgSecond.classList.replace("second", "first");
    slideImgFirst.classList.replace("first", "fourth");
    // slideImgFourth.addClass("third").removeClass("fourth");
    // slideImgThird.addClass("second").removeClass("third");
    // slideImgSecond.addClass("first").removeClass("second");
    // slideImgFirst.addClass("fourth").removeClass("first");
    this.imgSlide_Index[index]++;
    if (this.imgSlide_Index[index] >= slideImgs.length) {
      this.imgSlide_Index[index] = 0;
    }
    setTimeout(() => {
      this.handleSlide_Recommend(index);
    }, 2000);
  },

  handleSlide: function () {
    tabContent.forEach((tab, index) => {
      this.handleSlide_Recommend(index);
    });
    // this.handleSlider();
    setInterval(() => {
      if (this.currentSlider !== this.currentIndex) {
        this.handleSlider();
      }
    }, 5000);
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

  loadCurrentSong: function () {
    if (this.currentIndex === -1) {
      audio.src = this.listSong[0].path;
    } else {
      audio.src = this.currentSong.path;
    }
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
      });
    }
  },

  start: function () {
    this.defineProperties();
    this.setDefaultApp();
    this.handleEvent();
    this.handleSlide();
  },
};
app.start();
