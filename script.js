const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu");
const links = document.querySelectorAll(".nav-links a");
const sections = [...document.querySelectorAll("section[id]")];
const coplaButton = document.querySelector("#coplaButton");
const copla = document.querySelector("#copla");
const musicButton = document.querySelector("#musicButton");
const youtubePlayer = document.querySelector("#youtubePlayer");

const coplas = [
  "La jota guarda en la voz<br>lo que la sangre recuerda;<br>si canta el pueblo contigo,<br>la memoria nunca cierra.",
  "De Andorra sale una copla<br>con temple de amanecer;<br>la canta quien no se rinde<br>y vuelve a empezar de pie.",
  "Cuando suena la rondalla<br>se levanta el corazón;<br>El Panollo lleva al aire<br>raíz, palabra y canción.",
  "No se pierden los caminos<br>si alguien los vuelve a cantar;<br>la jota enciende la casa<br>y la vuelve a recordar."
];

toggle?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

coplaButton?.addEventListener("click", () => {
  const current = coplas.indexOf(copla.innerHTML);
  const next = (current + 1) % coplas.length;
  copla.innerHTML = coplas[next];
});

musicButton?.addEventListener("click", () => {
  youtubePlayer?.contentWindow?.postMessage(JSON.stringify({
    event: "command",
    func: "playVideo",
    args: []
  }), "*");
  musicButton.textContent = "Sonando";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-45% 0px -45% 0px" });

sections.forEach((section) => observer.observe(section));
