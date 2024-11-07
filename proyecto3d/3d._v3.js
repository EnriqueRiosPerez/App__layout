  //Import the THREE.js library
  import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
  // To allow for the camera to move around the scene
  import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
  // To allow for importing the .gltf file
  import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
  
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//OrbitControls allow the camera to move around the scene
let controls;

// Crear Raycaster y vector para las coordenadas del ratón
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let objToRender
// Cargar el modelo GLTF
const loader = new GLTFLoader();
loader.load('6_11_2024.glb', function(gltf) {
  // loader.load('free_bee_club.glb', function(gltf) {
  const model = gltf.scene;
  scene.add(model);

  // Opcional: Escalar o posicionar el modelo
  model.position.set(0, 0, 0);
  model.scale.set(1, 1, 1);
}, undefined, function(error) {
  console.error(error);
});

// Configurar la posición de la cámara
camera.position.z = 5;
const ambientLight = new THREE.AmbientLight(0xFFFFFF, objToRender === "6_11_2024.glb" ? 1 : 1);
scene.add(ambientLight);
controls = new OrbitControls(camera, renderer.domElement);
// Función para manejar clics
function onClick(event) {
  // Convertir coordenadas de la posición del ratón en coordenadas normalizadas del dispositivo (-1 a +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Configurar el raycaster con la posición de la cámara y el vector del ratón
  raycaster.setFromCamera(mouse, camera);

  // Detectar intersección con objetos en la escena
  const intersects = raycaster.intersectObjects(scene.children, true);

  // Revisar si hubo intersección
  if (intersects.length > 0) {
    const intersectedObject = intersects[0].object;
    console.log("Objeto clickeado:", intersectedObject);

    // Cambiar color como ejemplo
    if (intersectedObject.material) {
      intersectedObject.material.color.set(0xff0000);
    }
  }
}

// Agregar listener de evento de clic
document.addEventListener('click', onClick);

// Animación y renderizado
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();