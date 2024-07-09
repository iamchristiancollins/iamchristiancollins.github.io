particlesJS("particles-js", {
  /* particles.js config, visit https://vincentgarreau.com/particles.js/ for reference */
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 40, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false, speed: 1, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

const iframes = [
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6jFOdwYQRpmbE52hy93Nzt?utm_source=generator&theme=0" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3APkeWIqENIe4ntQod1HFV?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5GVACuxALlYbABVCSrqBlP?utm_source=generator&theme=0" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIZfJjZpshJLx?utm_source=generator&theme=0" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5lKMlahA25C54hXMKLPO7O?utm_source=generator&theme=0" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2m2cMK9IN6rFWxoYqWVQNB?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6FU1mqR92M3Y7gL1yo1e59?utm_source=generator&theme=0" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
];

function getRandomIframe() {
  const randomIndex = Math.floor(Math.random() * iframes.length);
  return iframes[randomIndex];
}

function embedIframe() {
  const playlistContainer = document.getElementById("playlist-container");
  const randomIframe = getRandomIframe();
  playlistContainer.innerHTML = randomIframe;
}

// Call the function to embed a random iframe on page load
window.onload = function () {
  embedIframe();
};
