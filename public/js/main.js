document.addEventListener("DOMContentLoaded", function () {

  /* ===== HERO TEXT ===== */
  const heroText = document.getElementById("heroText");
  if (heroText) {
    const text = "Professional Software Development Solutions";
    let i = 0;
    (function type() {
      if (i < text.length) {
        heroText.innerHTML += text.charAt(i++);
        setTimeout(type, 70);
      }
    })();
  }

  /* ===== PORTFOLIO ===== */
  const portfolio = JSON.parse(localStorage.getItem("portfolio")) || [];
  const pDiv = document.getElementById("portfolioList");

  if (pDiv) {
    pDiv.innerHTML = "";
    portfolio.forEach(p => {
      pDiv.innerHTML += `
        <div class="col-md-4">
          <div class="card-box text-center">
            <img src="${p.image}" class="img-fluid mb-3">
            <h5>${p.name}</h5>
            <p>${p.tech}</p>
            <a href="${p.link}" target="_blank" rel="noopener noreferrer"
               class="btn btn-outline-light btn-sm">
              Click Here
            </a>
          </div>
        </div>
      `;
    });
  }

  /* ===== TESTIMONIALS (AUTO-FILLED) ===== */
  const savedTestimonials = JSON.parse(localStorage.getItem("testimonials"));

  const testimonials = (savedTestimonials && savedTestimonials.length > 0)
    ? savedTestimonials
    : [
        {
          name: "Startup Founder",
          role: "FinTech Startup",
          message: "Codforg delivered a clean, scalable product exactly as promised."
        },
        {
          name: "Business Owner",
          role: "E-commerce Company",
          message: "Professional communication, quality code, and timely delivery."
        },
        {
          name: "Product Manager",
          role: "SaaS Platform",
          message: "Their structured development process made collaboration smooth."
        }
      ];

  const track = document.getElementById("testimonialTrack");

  if (track) {
    track.innerHTML = "";

    testimonials.concat(testimonials).forEach(t => {
      const initials = t.name
        .split(" ")
        .map(w => w[0])
        .join("")
        .slice(0, 2);

      track.innerHTML += `
        <div class="testimonial">
          <div class="testimonial-text">
            “${t.message}”
          </div>
          <div class="testimonial-footer">
            <div class="testimonial-avatar">${initials}</div>
            <div>
              <div class="testimonial-name">${t.name}</div>
              <div class="testimonial-role">${t.role}</div>
            </div>
          </div>
        </div>
      `;
    });
  }

});
