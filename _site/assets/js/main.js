// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Handle navigation clicks
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Handle newsletter form
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const emailInput = this.querySelector('input[type="email"]')
      const email = emailInput.value

      // Here you would typically send the email to your backend
      console.log("Newsletter signup:", email)

      // Show success message (you can customize this)
      alert("Thank you for subscribing! You'll receive updates within 24 hours.")

      // Clear the form
      emailInput.value = ""
    })
  }

  // Add active state to navigation based on scroll position
  const sections = document.querySelectorAll("section[id]")
  const navItems = document.querySelectorAll(".nav-link")

  function updateActiveNav() {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href") === "#" + current) {
        item.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", updateActiveNav)
})
