const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = $("body");
const btn_create = Array.from($$(".option .btn-create"));
const btn_view = Array.from($$("td.view"));
const btn_edit = Array.from($$("td.action .update"));
const admin_action = $("#admin_action");
const container_action = $(".admin_action-container");
const container_action_content = Array.from($$(".admin_action-content"));
const container_create = $(".admin_create-container");
const container_view = $(".admin_view-container");
const container_edit = $(".admin_edit-container");

const tabNameContainer = Array.from($$("#admin_main .sidebar__tab"));
const tabName = Array.from($$("#admin_main .sidebar__tab-name"));
const tabContainer = Array.from($$("#admin_main .admin__tab"));

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

const btnCreateHistory = $("#admin__history .option .btn-create");
const btnCreateUser = $("#admin__user .option .btn-create");

const audio = $("#audio");

const play = Array.from($$(".control .play"));
const pause = Array.from($$(".control .pause"));

const optionEditCategory = Array.from(
  $$(".admin_edit-container select option")
);
const optionCreateCategory = Array.from(
  $$(".admin_create-container select option")
);
// const stringCookies = document.cookie;
// const arrayCookies = stringCookies.split(";");

const app = {
  isAudio: false,
  category: ["Vpop", "US-UK", "Lofi"],
  // cookies: arrayCookies.map((cooky) => {
  //   return {
  //     name: cooky.split("=")[0],
  //     value: cooky.split("=")[1],
  //   };
  // }),

  handleEvent: function () {
    const _this = this;
    // Event for admin action
    function showAdminContainer() {
      admin_action.classList.add("active");
    }

    function hideAdminContainer() {
      admin_action.classList.remove("active");
      const child_action = Array.from(container_action.children);
      child_action.forEach((element) => {
        element.classList.remove("active");
      });
      audio.src = "";
      _this.isAudio = false;
      pauseAudio();
    }

    function showView(_this) {
      const song_item = _this.parentElement;
      const promiseAudio = new Promise(function (resolve) {
        audio.src = song_item.dataset.path;
        resolve();
      });
      promiseAudio
        .then(() => {
          setTimeout(() => {
            $(".view_item-info .item-duration .value").innerText = formatTime(
              audio.duration
            );
          }, 100);
          $(".view_item-info .item-name .value").innerText =
            song_item.querySelector(".name").innerText;
          $(".view_item-info .item-author .value").innerText =
            song_item.dataset.author;
          $(
            ".view_item-img"
          ).style.backgroundImage = `url("${song_item.dataset.image}")`;
          $(".view_item-info .item-path .value").innerText =
            song_item.dataset.path;
          const t_create = song_item.dataset.t_create;
          const dateT_create = new Date(t_create);
          $(".view_item-info .item-t-create .value").value =
            dateT_create.format("isoDate");
          const t_lastUpdate = song_item.querySelector(".timeUpdate").innerText;
          const dateT_lastUpdate = new Date(t_lastUpdate);
          $(".view_item-info .item-t-lastUpdate .value").value =
            dateT_lastUpdate.format("isoDateTime", true);
        })
        .then(() => {
          container_view.classList.add("active");
        });
    }
    function showEdit(_this) {
      const song_item = _this.parentElement.parentElement;
      const promiseAudio = new Promise(function (resolve) {
        audio.src = song_item.dataset.path;
        resolve();
      });
      promiseAudio
        .then(() => {
          setTimeout(() => {
            $(".edit_item-info .item-duration .value").value = formatTime(
              audio.duration
            );
          }, 100);
          $(".edit_item-info .item-id").value =
            song_item.querySelector(".id").innerText;
          $(".edit_item-info .item-name .value").value =
            song_item.querySelector(".name").innerText;
          $(".edit_item-info .item-author .value").value =
            song_item.dataset.author;
          $(
            ".edit_item-img"
          ).style.backgroundImage = `url("${song_item.dataset.image}")`;
          $("#edit_image-value").innerText = song_item.dataset.image;
          $("#edit_audio-value").innerText = song_item.dataset.path;
          const t_create = song_item.dataset.t_create;
          const dateT_create = new Date(t_create);
          $(".edit_item-info .item-t-create .value").value =
            dateT_create.format("isoDate");
          const t_lastUpdate = song_item.querySelector(".timeUpdate").innerText;
          const dateT_lastUpdate = new Date(t_lastUpdate);
          $(".edit_item-info .item-t-lastUpdate .value").value =
            dateT_lastUpdate.format("isoDateTime", true);
        })
        .then(() => {
          container_edit.classList.add("active");
        });
    }
    function showCreate() {
      container_create.classList.add("active");
    }

    btn_view.forEach((element) => {
      element.onclick = function () {
        showAdminContainer();
        showView(this);
      };
    });
    btn_create.forEach((element) => {
      if (element !== btnCreateUser && element !== btnCreateHistory) {
        element.onclick = function () {
          showAdminContainer();
          showCreate();
        };
      }
    });
    btn_edit.forEach((element) => {
      element.onclick = function () {
        showAdminContainer();
        showEdit(this);
      };
    });

    admin_action.addEventListener("click", hideAdminContainer);
    container_action_content.forEach((element) => {
      element.onclick = function (event) {
        event.stopPropagation();
      };
    });

    // Event xu ly tab
    function showTab(index) {
      tabContainer.forEach((element) => {
        element.classList.remove("active");
      });
      tabNameContainer.forEach((element) => {
        element.classList.remove("active");
      });
      tabContainer[index].classList.add("active");
      tabNameContainer[index].classList.add("active");
      if (index <= 2) {
        $(".view_item-info .item-category .value").innerText =
          _this.category[index];
        resertOption();
        optionEditCategory[index].setAttribute("selected", "");
        optionCreateCategory[index].setAttribute("selected", "");
      }
    }

    function resertOption() {
      optionCreateCategory.forEach((element) => {
        element.removeAttribute("selected");
      });
      optionEditCategory.forEach((element) => {
        element.removeAttribute("selected");
      });
    }

    tabName.forEach((element, index) => {
      element.addEventListener("click", function () {
        showTab(index);
      });
    });

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

    function handleImageUpload(event, nodeValue, nodeDisplay) {
      const reader = new FileReader();
      const files = event.target.files;
      nodeValue.innerText = files[0].name;
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", (event) => {
        // Lấy chuỗi Binary
        const url = event.target.result;
        nodeDisplay.style.backgroundImage = `url('${url}')`;
      });
    }

    function handleAudioUpload(event, nodeValue, audio) {
      const reader = new FileReader();
      const files = event.target.files;
      nodeValue.innerText = files[0].name;
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", (event) => {
        // Lấy chuỗi Binary
        const url = event.target.result;
        audio.src = url;
      });
    }

    function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
    }

    // Xu ly su kien create
    $("#create_image").onchange = function (event) {
      const nodeValue = $("#create_image-value");
      const nodeDisplay = $(".create_item-img");
      handleImageUpload(event, nodeValue, nodeDisplay);
    };

    $("#create_audio").onchange = function (event) {
      const nodeValue = $("#create_audio-value");
      pauseAudio();
      handleAudioUpload(event, nodeValue, audio);
      _this.isAudio = true;
    };

    $("#create_duration").onclick = function () {
      if (_this.isAudio) {
        this.value = formatTime(audio.duration);
      }
    };

    // Xu ly su kien edit
    $("#edit_image").onchange = function (event) {
      const nodeValue = $("#edit_image-value");
      const nodeDisplay = $(".edit_item-img");
      handleImageUpload(event, nodeValue, nodeDisplay);
    };

    $("#edit_audio").onchange = function (event) {
      const nodeValue = $("#edit_audio-value");
      pauseAudio();
      handleAudioUpload(event, nodeValue, audio);
      _this.isAudio = true;
    };

    $("#edit_duration").onclick = function () {
      if (_this.isAudio) {
        this.value = formatTime(audio.duration);
      }
    };

    function playAudio() {
      play.forEach((element) => {
        element.classList.remove("active");
      });
      pause.forEach((element) => {
        if (!element.classList.contains("active")) {
          element.classList.add("active");
        }
      });
    }
    function pauseAudio() {
      pause.forEach((element) => {
        element.classList.remove("active");
      });
      play.forEach((element) => {
        if (!element.classList.contains("active")) {
          element.classList.add("active");
        }
      });
    }
    pause.forEach((element, index) => {
      element.addEventListener("click", function () {
        pauseAudio();
        audio.pause();
      });
    });
    play.forEach((element, index) => {
      element.onclick = function () {
        if (_this.isAudio || index !== 2) {
          playAudio();
          audio.play();
        }
      };
    });

    userIconSetting.forEach((element, index) => {
      if (element !== usernameIconSetting && element !== t_createIconSetting) {
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
  },

  setDefaultApp: function () {
    this.setVolumeDefault();
  },

  setVolumeDefault: function () {
    audio.volume = 0.2;
  },

  start: function () {
    this.setDefaultApp();
    this.handleEvent();
  },
};

app.start();
