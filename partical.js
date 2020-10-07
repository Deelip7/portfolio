// ThreeJs custom waves
// Original script by ThreeJS : https://threejs.org/examples/canvas_particles_waves.html

var SEPARATION = 50,
  AMOUNTX = 130,
  AMOUNTY = 30;

var container;
var camera, scene, renderer;
var particles,
  particle,
  count = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);
  if (container) {
    container.className += container.className ? " waves" : "waves";
  }

  camera = new THREE.PerspectiveCamera(135, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.y = 180; //changes how far back you can see i.e the particles towards horizon
  camera.position.z = 20; //This is how close or far the particles are seen

  camera.rotation.x = 0.13;

  scene = new THREE.Scene();

  particles = new Array();

  var PI2 = Math.PI * 2;
  var material = new THREE.SpriteCanvasMaterial({
    color: "rgb(25, 200, 200)", //changes color of particles
    program: function (context) {
      context.beginPath();
      context.arc(0, 0, 0.5, 0, PI2, true);
      context.fill();
    },
  });

  var i = 0;

  for (var ix = 0; ix < AMOUNTX; ix++) {
    for (var iy = 0; iy < AMOUNTY; iy++) {
      particle = particles[i++] = new THREE.Sprite(material);
      particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
      particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION - 10);
      scene.add(particle);
    }
  }

  renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xebebeb, 1);
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  render();
}

function render() {
  var i = 0;

  for (var ix = 0; ix < AMOUNTX; ix++) {
    for (var iy = 0; iy < AMOUNTY; iy++) {
      particle = particles[i++];
      particle.position.y = Math.sin((ix + count) * 0.5) * 15 + Math.sin((iy + count) * 0.5) * 15;
      particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.5) + 2) * 3;
      // + (Math.sin((iy + count) * 0.5) + 1) * 4;
    }
  }

  renderer.render(scene, camera);

  // This increases or decreases speed
  count += 0.008;
}
