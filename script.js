/* ==========================================================================
   PIXIMR CREATIVE STUDIO — CORE SCRIPT
   Unified Engine: UI Interactions, Parallax & AI Concierge
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------------------------------------------------------
     1. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navMenu.classList.toggle("open");
      document.body.style.overflow = navMenu.classList.contains("open") ? "hidden" : "";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. NAVBAR SCROLL EFFECT & ACTIVE SPY
     -------------------------------------------------------------------------- */
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Navbar glass effect
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Active link highlighting
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      if (scrollY >= sectionTop) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });

  /* --------------------------------------------------------------------------
     3. SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll(
    ".project-card, .signature-content, .contact-content, .section-heading, .journal-card, .value-card, .about-grid"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  /* --------------------------------------------------------------------------
     4. AMBIENT LIGHT MOUSE PARALLAX
     -------------------------------------------------------------------------- */
  const ambient1 = document.querySelector(".ambient-1");
  const ambient2 = document.querySelector(".ambient-2");
  const ambient3 = document.querySelector(".ambient-3");

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 60;
    const y = (e.clientY / window.innerHeight - 0.5) * 60;

    if (ambient1) ambient1.style.transform = `translate(${x * 1.2}px, ${y * 1.2}px)`;
    if (ambient2) ambient2.style.transform = `translate(${-x}px, ${-y}px)`;
    if (ambient3) ambient3.style.transform = `translate(${x * 0.7}px, ${-y * 0.7}px)`;
  });

  /* --------------------------------------------------------------------------
     5. 3D CARD TILT (DESKTOP ONLY)
     -------------------------------------------------------------------------- */
  if (window.innerWidth > 900) {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / (rect.height / 2)) * 7;
        const rotateY = (x / (rect.width / 2)) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. PIXIMR AI CONCIERGE (SMART ASSISTANT)
     -------------------------------------------------------------------------- */
  const orb = document.querySelector(".piximr-ai-bubble");
  const chat = document.getElementById("piximr-chat");
  const closeBtn = document.getElementById("chat-close");
  const messages = document.getElementById("chat-messages");
  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("chat-send");

  if (orb && chat && messages && input && sendBtn) {
    let userInteracted = false;
    let chatOpened = false;

    // Time-based polite greeting
    function getGreeting() {
      const hour = new Date().getHours();
      let timeGreeting = "Good evening";
      if (hour < 12) timeGreeting = "Good morning";
      else if (hour < 18) timeGreeting = "Good afternoon";

      return `${timeGreeting}. Welcome to <b>Piximr</b>.<br>I am Piximr AI. How can we bring your visual or architectural vision to life today?`;
    }

    // Typewriter message delivery
    function typeMessage(htmlText) {
      const msg = document.createElement("div");
      msg.className = "bot-message";
      messages.appendChild(msg);

      let i = 0;
      const isTag = false;
      // Plain text typing with support for standard innerHTML render
      msg.innerHTML = "";
      const interval = setInterval(() => {
        msg.innerHTML = htmlText.slice(0, i);
        i++;
        messages.scrollTop = messages.scrollHeight;
        if (i > htmlText.length) {
          clearInterval(interval);
          msg.innerHTML = htmlText;
        }
      }, 15);
    }

    // Open chat
    function openChat() {
      chat.classList.add("active");
      chat.style.display = "flex";
      if (!chatOpened) {
        chatOpened = true;
        setTimeout(() => {
          typeMessage(getGreeting());
        }, 400);
      }
    }

    // Close chat
    function closeChat() {
      chat.classList.remove("active");
      chat.style.display = "none";
    }

    // Trigger Orb display after 4 seconds
    setTimeout(() => {
      orb.style.display = "flex";
    }, 4000);

    orb.addEventListener("click", openChat);
    if (closeBtn) closeBtn.addEventListener("click", closeChat);

    // AI Knowledge Base Response
    function getReply(query) {
      const q = query.toLowerCase();

      if (q.includes("price") || q.includes("cost") || q.includes("quote") || q.includes("charge")) {
        return "Every design project is bespoke. We tailor pricing to scale, detail, and timeline. You can schedule a direct consultation via the <b>Book a Meeting</b> link above.";
      }
      if (q.includes("3d") || q.includes("render") || q.includes("arch") || q.includes("visualization")) {
        return "Piximr crafts hyper-realistic architectural renderings and cinematic 3D visualizations. What is the scale of your current development or space?";
      }
      if (q.includes("brand") || q.includes("logo") || q.includes("identity")) {
        return "We build timeless, minimal visual identities and design systems that scale across digital and physical touchpoints.";
      }
      if (q.includes("game") || q.includes("environment") || q.includes("art")) {
        return "From concept design to real-time Unreal/Unity assets and personal fine-art, we create immersive world visuals.";
      }
      if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
        return "Hello! Are you exploring our portfolio or planning an upcoming project with us?";
      }
      return "That sounds compelling. Piximr would love to explore this further. Feel free to connect via WhatsApp or book a consultation directly!";
    }

    // Dispatch message
    function handleSend() {
      const text = input.value.trim();
      if (!text) return;

      userInteracted = true;

      // Add user bubble
      const userMsg = document.createElement("div");
      userMsg.className = "user-message";
      userMsg.textContent = text;
      messages.appendChild(userMsg);
      input.value = "";
      messages.scrollTop = messages.scrollHeight;

      // Response delay
      setTimeout(() => {
        typeMessage(getReply(text));
      }, 500);
    }

    sendBtn.addEventListener("click", handleSend);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSend();
    });
  }

  /* --------------------------------------------------------------------------
     7. NATIVE LAZY LOAD OPTIMIZATION
     -------------------------------------------------------------------------- */
  document.querySelectorAll("img").forEach((img) => {
    img.loading = "lazy";
    img.decoding = "async";
  });
});
