
  document.addEventListener("DOMContentLoaded", () => {
    const SITE_VERSION = "SRI04(Web)-v0.1.0";
    const PUBLISHED_ON = "07 Feb 2026, 20:12:48 IST";

    document.querySelectorAll(".site-version").forEach(el => {
      el.textContent = `Version: ${SITE_VERSION} | Published on: ${PUBLISHED_ON}`;
    });
  });