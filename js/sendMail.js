export const sendMail = () => {
  const formPage = document.querySelector(".js-form");

  formPage.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(formPage);
    //   formData.append("name", name);
    //   formData.append("phone", phone);
    //   formData.append("message", message);

    fetch("/inc/submit-form.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // onShowMenu(popup);
          console.log("ok", data.message);
          document.getElementById("response-message").innerHTML =
            `<p style="color: green;">${data.message}</p>`;
          document.querySelector(".js-form").reset();
        } else {
          console.log("Else", data.message);
          document.getElementById("response-message").innerHTML =
            `<p style="color: red;">${data.message}</p>`;
        }
        document.getElementById("response-message").style.display = "block";
      })
      .catch((error) => {
        console.log("error", error);
        document.getElementById("response-message").innerHTML =
          `<p style="color: red;">Произошла ошибка. Пожалуйста, попробуйте позже.</p>`;
        document.getElementById("response-message").style.display = "block";
      });
  });
};
