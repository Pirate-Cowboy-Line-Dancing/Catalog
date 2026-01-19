
// nav.js — DOM-built nav (no HTML strings, no filename leaks)
(function () {

  const LOGO_SRC = "Pirate_Cowboy_Transparent_Circle.png";
  const LOGO_SIZE = 50;

  // Create nav container
  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Primary");
  nav.style.fontSize = "1.2rem";

  const wrap = document.createElement("div");
  wrap.className = "wrap";
  wrap.style.display = "flex";
  wrap.style.alignItems = "center";
  wrap.style.justifyContent = "space-between";
  wrap.style.gap = "1rem";
  wrap.style.paddingTop = ".5rem";
  wrap.style.paddingBottom = ".5rem";

  // ----- LEFT: Logo + Name -----
  const left = document.createElement("div");
  left.style.display = "flex";
  left.style.alignItems = "center";
  left.style.gap = ".75rem";

  const homeLink = document.createElement("a");
  homeLink.href = "index.html";
  homeLink.style.display = "flex";
  homeLink.style.alignItems = "center";
  homeLink.style.gap = ".75rem";

  const logo = document.createElement("img");
  logo.src = LOGO_SRC;
  logo.alt = "Pirate Cowboy Line Dancing";
  logo.width = LOGO_SIZE;
  logo.height = LOGO_SIZE;
  logo.style.borderRadius = "50%";

  homeLink.appendChild(logo);

  const brand = document.createElement("span");
  brand.className = "muted";
  brand.textContent = "Pirate Cowboy Line Dancing";
  brand.style.fontWeight = "1200";
  //brand.style.opacity = "1";

  left.appendChild(homeLink); // link
  left.appendChild(brand);    // text only
//  homeLink.appendChild(brand);
//  left.appendChild(homeLink);

  // ----- RIGHT: Nav links -----
  const right = document.createElement("div");
  right.style.display = "flex";
  right.style.gap = "1rem";
  right.style.alignItems = "center";

  const links = [
    { text: "Home", href: "index.html" },
    { text: "About", href: "about.html" },
    { text: "Locations", href: "locations.html" }
  ];

  const current = location.pathname.split("/").pop() || "index.html";

  links.forEach(({ text, href }) => {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;

    if (href === current) {
      a.style.color = "var(--accent)";
      a.style.fontWeight = "700";
      a.style.textDecoration = "underline";
    }

    right.appendChild(a);
  });

  wrap.appendChild(left);
  wrap.appendChild(right);
  nav.appendChild(wrap);

  // Insert nav above header
  const header = document.querySelector("header");
  if (header) {
    header.before(nav);
  } else {
    document.body.prepend(nav);
  }

})();
