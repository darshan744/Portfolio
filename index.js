 // Typing animation
    const name = "Darshan K";
    const typed = document.getElementById("typedName");
    let idx = 0;

    function typeLoop() {
      if (idx < name.length) {
        typed.innerText += name[idx];
        idx++;
        setTimeout(typeLoop, 150);
      }
    }
    window.onload = typeLoop;

    // Navbar toggle
    document.getElementById("menuToggle").onclick = () => {
      const menu = document.getElementById("mobileMenu");
      menu.classList.toggle("hidden");
    };

    // Project data
    const projects = [
      {
        title: "Slot Booking Portal",
        desc: "A web portal for booking and managing slot schedules using Angular and Firebase.",
        stack: ["Angular", "NodeJS", "TailwindCSS"],
        link: "https://github.com/darshan744/SlotBookingPortal"
      },
      {
        title: "Nebula",
        desc: "A lightweight backend framework written in Java, built from scratch to handle HTTP routing, JSON parsing, and RESTful endpoints.",
        stack: ["Java", "Core HTTP", "JSON"],
        link: "https://github.com/darshan744/nebula"
      },
      {
        title: "TailwindCSS Schematic",
        desc: "A custom Angular schematic to bootstrap TailwindCSS with best practices.",
        stack: ["Angular", "Schematics", "TailwindCSS"],
        link: "https://github.com/darshan744/Tailwindcss-setup"
      },
    ];

    const projectGrid = document.getElementById("projectGrid");
    projects.forEach(proj => {
      const card = document.createElement("div");
      card.className = "bg-gray-800 p-6 rounded shadow hover:shadow-lg transition";

      const tags = proj.stack.map(tech => `<span class="bg-gray-700 text-xs px-2 py-1 rounded mr-2">${tech}</span>`).join(" ");

      card.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${proj.title}</h3>
        <p class="text-gray-400 mb-2">${proj.desc}</p>
        <div class="mb-3">${tags}</div>
        <a href="${proj.link}" target="_blank" class="text-indigo-400 hover:underline">View on GitHub →</a>
      `;
      projectGrid.appendChild(card);
    });
