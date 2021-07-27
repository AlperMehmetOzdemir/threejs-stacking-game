// const THREE = ("three");
// const CANNON = require("cannon");

// Scene
const scene = new THREE.Scene();

// Add a cube to the scene
const geometry = new THREE.BoxGeometry(3,1,3)
const material = new THREE.MeshLambertMaterial({color: 0xfb8e00});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,0,0);
scene.add(mesh);

// setup lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10,20,0);
scene.add(directionalLight);

// Camera
const aspectRatio = window.innerHeight / window.innerWidth;
const width = 10;
const height =  width * aspectRatio;
const camera = new THREE.OrthographicCamera(
  width / -2,
  width / 2,
  height / 2,
  height / -2,
  1,
  100
);

camera.position.set(4,4,4);
camera.lookAt(0,0,0);

// Renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Add it to HTML
document.body.appendChild(renderer.domElement);