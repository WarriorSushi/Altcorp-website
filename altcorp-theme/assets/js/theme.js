document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".site-nav-toggle");
  const nav = document.querySelector(".site-nav");
  const backdrop = document.querySelector(".site-nav-backdrop");
  const navLinks = nav ? nav.querySelectorAll("a") : [];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setNavState = (isOpen) => {
    if (!toggle || !nav) {
      return;
    }

    toggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
    backdrop?.classList.toggle("is-visible", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setNavState(!isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 980) {
          setNavState(false);
        }
      });
    });

    backdrop?.addEventListener("click", () => setNavState(false));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setNavState(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) {
        setNavState(false);
      }
    });
  }

  const syncHeaderState = () => {
    if (!header) {
      return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });

  const revealElements = [...document.querySelectorAll("[data-reveal]")];

  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${(index % 6) * 80}ms`);
  });

  if (revealElements.length) {
    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      const preloadLimit = window.innerHeight * 1.35;

      revealElements.forEach((element) => {
        if (element.getBoundingClientRect().top < preloadLimit) {
          element.classList.add("is-visible");
          return;
        }

        observer.observe(element);
      });
    }
  }

  const parallaxFrames = [...document.querySelectorAll("[data-parallax]")];

  if (!parallaxFrames.length || prefersReducedMotion || window.innerWidth < 760) {
    return;
  }

  let isTicking = false;

  const updateParallax = () => {
    const viewportHeight = window.innerHeight || 1;

    parallaxFrames.forEach((frame) => {
      const media = frame.querySelector("img");

      if (!media) {
        return;
      }

      const rect = frame.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > viewportHeight) {
        return;
      }

      const depth = Number.parseFloat(frame.dataset.parallax || "16");
      const midpointOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const progress = midpointOffset / viewportHeight;
      media.style.transform = `translate3d(0, ${progress * depth}px, 0) scale(1.04)`;
    });

    isTicking = false;
  };

  const requestParallax = () => {
    if (isTicking) {
      return;
    }

    isTicking = true;
    window.requestAnimationFrame(updateParallax);
  };

  updateParallax();
  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax);
});
