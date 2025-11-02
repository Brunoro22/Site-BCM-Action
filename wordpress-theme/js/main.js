// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.getElementById("navbar-toggle")
  const navbarMenu = document.getElementById("navbar-menu")

  if (navbarToggle) {
    navbarToggle.addEventListener("click", () => {
      navbarMenu.classList.toggle("active")
    })

    // Fechar menu ao clicar em um link
    const navLinks = navbarMenu.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarMenu.classList.remove("active")
      })
    })
  }
})

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Lazy Loading de Imagens
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.add("loaded")
        observer.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}

// Animações ao scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  elements.forEach((el) => observer.observe(el))
}

animateOnScroll()

// WhatsApp Button
const whatsappBtn = document.querySelector(".whatsapp-btn")
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para os serviços da BCM ACTION.")
    window.open(`https://wa.me/5521999999999?text=${message}`, "_blank")
  })
}

// Validação de Formulário
const form = document.querySelector("form")
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector('input[name="name"]').value
    const email = form.querySelector('input[name="email"]').value
    const phone = form.querySelector('input[name="phone"]').value
    const message = form.querySelector('textarea[name="message"]').value

    if (!name || !email || !phone || !message) {
      e.preventDefault()
      alert("Por favor, preencha todos os campos.")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      e.preventDefault()
      alert("Por favor, insira um email válido.")
      return false
    }
  })
}

// Animação de scroll do header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)"
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }
})
