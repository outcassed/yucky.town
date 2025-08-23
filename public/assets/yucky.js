class YuckyTown {
  constructor() {
    this.dripVariations = 3;

    this.init();
  }

  init() {
    this.initAnimatedLogo();
    this.printVersion();
  }

  initAnimatedLogo() {
    const logo = document.querySelector('.y-logo svg');
    if (logo) {
      logo.classList.add('y-logo--animating');

      document.querySelectorAll("path[fill='none']").forEach((path, index) => {
        const delay = (index % this.dripVariations) * 0.075; // stagger delays
        path.style.animationDelay = `${delay}s`;
      });

    }
  }
   
  printVersion() {
    console.log("YuckyTown loaded...");
  }
}

class YuckyUtils {
  constructor() {
    this.printVersion();
  }

  usesProperty(varName) {
    return getComputedStyle(document.body).getPropertyValue(`--use-${varName}`).trim() == '1';
  }

  getProperty(varName) {
    return getComputedStyle(document.body).getPropertyValue(`--${varName}`).trim();
  }

  printVersion() {
    console.log("YuckyUtils loaded...");
  }
}

class YuckyTownApi {
  constructor(internal) {
    this.internal = internal;
    this.printVersion();
  }

  printVersion() {
    console.log("YuckyTownApi loaded...");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  window.utils = new YuckyUtils();
  window.__yucky_private = new YuckyTown();

  window.YUCKY = new YuckyTownApi(window.__yucky_private);
  window['🤢'] = window.YUCKY;

  console.log("IT'S YUCKY! 🤢")
});
