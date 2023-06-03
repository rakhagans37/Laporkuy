localStorage.setItem("Jumlah User", 0);
console.log(localStorage.getItem("Jumlah User"));

if (document.title == "Login Laporkuy!") {
   document
      .getElementById("login")
      .addEventListener("submit", function (event) {
         event.preventDefault;
         let username = document.getElementById("username").value;
         let password = document.getElementById("password").value;

         if (
            password == localStorage.getItem("Username:" + username) ||
            password == localStorage.getItem("Email:" + username)
         ) {
            alert("Login Berhasil");
         } else {
            alert("Login Gagal");
         }
      });
} else {
   document
      .getElementById("register")
      .addEventListener("submit", function (event) {
         event.preventDefault;
         let newUsername = document.getElementById("username").value;
         let newEmail = document.getElementById("email").value;
         let newPassword = document.getElementById("password").value;
         let confirmPassword = document.getElementById("confirmPassword").value;

         if (
            "Username:" + newUsername in localStorage == false &&
            "Email:" + newEmail in localStorage == false &&
            newPassword == confirmPassword
         ) {
            localStorage.setItem(
               "Jumlah User",
               localStorage.getItem("Jumlah User") + 1
            );
            localStorage.setItem("Username:" + newUsername, newPassword);
            localStorage.setItem("Email:" + newEmail, newPassword);
            alert("Registrasi Berhasil");
            window.location.href = "loginMobile.html";
         } else {
            alert("Registrasi Gagal");
         }
      });
}
