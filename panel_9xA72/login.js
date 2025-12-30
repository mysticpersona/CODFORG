document.getElementById("loginBtn").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "1234") {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
});
