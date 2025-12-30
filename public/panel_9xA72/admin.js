/* ===== AUTH ===== */
if (localStorage.getItem("isAdmin") !== "true") {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "login.html";
}

/* ===== HELPERS ===== */
function get(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
function set(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  render();
}

/* ===== PORTFOLIO ===== */
let imageData = "";

portfolioImage.onchange = function () {
  const reader = new FileReader();
  reader.onload = () => (imageData = reader.result);
  reader.readAsDataURL(this.files[0]);
};

function addPortfolio() {
  if (!portfolioName.value || !portfolioTech.value || !portfolioLink.value || !imageData) {
    alert("Fill all portfolio fields");
    return;
  }

  const portfolio = get("portfolio");
  portfolio.push({
    name: portfolioName.value,
    tech: portfolioTech.value,
    link: portfolioLink.value,
    image: imageData
  });

  set("portfolio", portfolio);

  portfolioName.value = "";
  portfolioTech.value = "";
  portfolioLink.value = "";
  imageData = "";
}

function deletePortfolio(i) {
  const portfolio = get("portfolio");
  portfolio.splice(i, 1);
  set("portfolio", portfolio);
}

/* ===== TESTIMONIALS (FIXED FORMAT) ===== */
function addTestimonial() {
  if (!clientName.value || !clientMsg.value) {
    alert("Fill testimonial fields");
    return;
  }

  const testimonials = get("testimonials");
  testimonials.push({
    name: clientName.value,
    role: clientRole.value || "Client",
    message: clientMsg.value
  });

  set("testimonials", testimonials);

  clientName.value = "";
  clientRole.value = "";
  clientMsg.value = "";
}

function deleteTestimonial(i) {
  const testimonials = get("testimonials");
  testimonials.splice(i, 1);
  set("testimonials", testimonials);
}

/* ===== RENDER ADMIN ===== */
function render() {
  portfolioAdminList.innerHTML = get("portfolio")
    .map((p, i) =>
      `<p>${p.name}
        <button onclick="deletePortfolio(${i})">❌</button>
      </p>`
    ).join("");

  testimonialAdminList.innerHTML = get("testimonials")
    .map((t, i) =>
      `<p>${t.name}
        <button onclick="deleteTestimonial(${i})">❌</button>
      </p>`
    ).join("");
}

render();
