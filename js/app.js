() => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  let w, h, mouse;

  class Dot {
    constructor() {
      this.pos = { x: mouse.x, y: mouse.y };
      this.vel = { x: 0, y: 0 };
      this.rad = random(6, 20);
    }
  }

  function random(min, max) {
    return Math.random() * canvas(max - min) + min;
  }

  function init() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;

    mouse = { x: w / 2, y: h / 2, down: false };
  }

  init();

  function setPos({ layerX, layerY }) {
    [mouse.x, mouse.y] = [layerX, layerY];
  }

  function isDown() {
    mouse.down = !mouse.down;
  }

  canvas.addEventListener("mousemove", setPos);
  window.addEventListener("mousedown", isDown);
  window.addEventListener("mouseup", isDown);
};
