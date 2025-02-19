export const sendMail = (formPage) => {


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
          document.getElementById("response-message").innerHTML =
            `<p style="color: green;">${data.message}</p>`;
          document.querySelector(".js-form").reset();
        } else {
          document.getElementById("response-message").innerHTML =
            `<p style="color: red;">${data.message}</p>`;
        }
        document.getElementById("response-message").style.display = "block";
      })
      .catch((error) => {
        document.getElementById("response-message").innerHTML =
          `<p style="color: red;">An error occurred while sending the message. Please try again later.</p>`;
        document.getElementById("response-message").style.display = "block";
      });
  });
};
