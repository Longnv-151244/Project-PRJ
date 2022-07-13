const toast = $("#toast");
const options_Request = Array.from($$(".option"));

const stringCookies = document.cookie;
const arrayCookies = stringCookies.split(";");
const cookies = arrayCookies.map((cooky) => {
  return {
    name: cooky.split("=")[0],
    value: cooky.split("=")[1],
  };
});

const toastIcons = {
  success: "fas fa-check-circle",
  info: "fas fa-info-circle",
  warning: "fas fa-exclamation-circle",
  error: "fas fa-exclamation-circle",
};

if (!user) {
  options_Request.forEach((option) => {
    option.onclick = function () {
      const toastData = {
        type: "error",
        icon: toastIcons.error,
        heading: "Thất bại!",
        text: "Bạn cần đăng nhập để sử dụng chức năng này!!",
        duration: 5000,
      };
      createToast(toastData);
    };
  });
}

const createToast = function (toastData) {
  const toastChild = document.createElement("div");
  toastChild.classList.add("toast", `toast--${toastData.type}`);
  toastChild.innerHTML = `
               <div class="toast__container">
                 <div class="toast__icon"> <i class="${toastData.icon}"></i></div>
                 <div class="toast__content">
                   <div class="toast__heading">${toastData.heading}</div>
                   <div class="toast__text">${toastData.text}</div>
                 </div>
                 <div class="toast__close"> <i class="fas fa-times-square"></i></div>
               </div>
           `;
  toast.appendChild(toastChild);

  // Auto remove toast
  const autoRemoveId = setTimeout(function () {
    toast.removeChild(toastChild);
  }, toastData.duration);

  // Remove toast when clicked
  toastChild.onclick = function (e) {
    if (e.target.closest(".toast__close")) {
      toast.removeChild(toastChild);
      clearTimeout(autoRemoveId);
    }
  };
};

const handleCooky = function () {
  console.log(cookies);
  cookies.forEach((cooky) => {
    if (cooky.name === "mess_login-user") {
      let toastDataMess_Login = {};
      switch (cooky.value) {
        case "login_2":
          toastDataMess_Login = {
            type: "warning",
            icon: toastIcons.warning,
            heading: "Login fail!",
            text: "Tên tài khoản hoặc mật khẩu không đúng!!",
            duration: 3000,
          };
          createToast(toastDataMess_Login);
          console.log(100);
          break;
        default:
          break;
      }
    }
    if (cooky.name === "mess_update-user") {
      let toastDataMess_Update = {};
      switch (cooky.value) {
        case "update_user_1":
          toastDataMess_Update = {
            type: "success",
            icon: toastIcons.success,
            heading: "Update successfull!",
            text: "Cập nhập thông tin tài khoản thành công!!",
            duration: 3000,
          };
          createToast(toastDataMess_Update);
          console.log(200);
          break;
        case "update_user_2":
          toastDataMess_Update = {
            type: "error",
            icon: toastIcons.error,
            heading: "Update fail!",
            text: "Mật khẩu không đúng!!",
            duration: 3000,
          };
          createToast(toastDataMess_Update);
          break;
        case "update_user_3":
          toastDataMess_Update = {
            type: "warning",
            icon: toastIcons.warning,
            heading: "Update fail!",
            text: "Mật khẩu mới và mật khẩu xác nhận không giống nhau!!",
            duration: 3000,
          };
          createToast(toastDataMess_Update);
          break;
      }
    }
  });
};

handleCooky();
