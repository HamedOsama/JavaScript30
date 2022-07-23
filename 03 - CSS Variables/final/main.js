const inputs = document.querySelectorAll('input');
    const updateValue = function () {
      document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${this.dataset.sizing || ''}`)
    }
    inputs.forEach((el) => {
      el.addEventListener("change", updateValue)
      el.addEventListener("mousemove", updateValue)
    })