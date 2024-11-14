


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

let objettos = [
  // {name:"Modelos_Maquinas/Screen.fbx", position:{x:0,y:0,z:0}},
  {name:"http://gdjnt280.americas.ad.flextronics.com:90/Get_Media.aspx?type=3D_Image&Name=Screen Printer-ASM.fbx",  position:{x:0,y:0,z:0}},
// {name:"Modelos_Maquinas/Fuji.fbx", position:{x:1,y:0,z:0.5}},
  {name:"http://gdjnt280.americas.ad.flextronics.com:90/Get_Media.aspx?type=3D_Image&Name=Conveyor.fbx",  position:{x:1,y:0,z:1}},

  {name:"http://gdjnt280.americas.ad.flextronics.com:90/Get_Media.aspx?type=3D_Image&Name=Pick and Place-NXT.fbx",  position:{x:2,y:0,z:0.5}},
  {name:"http://gdjnt280.americas.ad.flextronics.com:90/Get_Media.aspx?type=3D_Image&Name=Conveyor.fbx",  position:{x:3.4,y:0,z:1}},
  // {name:"Modelos_Maquinas/ReflowOvenBTUHQ.fbx", position:{x:5,y:0,z:0}}
  {name:"http://gdjnt280.americas.ad.flextronics.com:90/Get_Media.aspx?type=3D_Image&Name=Reflow Oven-Heller.fbx", position:{x:7,y:0,z:0}},
]


let eaeaeaeae = document.getElementById("eaea") 
//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
// const camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
// scene.add( camera );
// var OFFSET = 20;

// const camera = new THREE.OrthographicCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
// // camera.position.set(camera.geometry.boundingSphere.radius + OFFSET, 0, 0 );
// // Spherical
// var sphericalCoord = new THREE.Spherical();
// sphericalCoord.setFromVector3( camera.position );
// sphericalCoord.phi =45
// sphericalCoord.theta = 45

// var vec = new THREE.Vector3().setFromSpherical(sphericalCoord);

// camera.position.set( vec.x, vec.y, vec.z );


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
// const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1, 1000);
// camera.position.set(-3, 4, 5)

camera.position.set( -20, 20, 20 ); // all components equal
camera.lookAt( scene.position ); // or the origin


scene.add( camera );


//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
// let objToRender = 'free_bee_club.glb';
let objToRender = 'Modelos_Maquinas/6_11_2024.glb'
// objToRender = 'free_bee_club.glb'
// let objToRender_Screen= 'Modelos_Maquinas/Screen.fbx'
let objToRender_Screen = 'Modelos_Maquinas/ReflowOvenBTUHQ.fbx'
// let objToRender  = 'casita.glb'

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();
// camera.position.set( 20, 20, 10 );
// camera.lookAt( 10, 10, 10 );

// const aspect = window.innerWidth / window.innerHeight;
// const d = 20;
// const camera = new THREE.OrthographicCamera(
//     - d * aspect, d * aspect, d, - d, 1, 1000
// );
// camera.position.set( 20, 20, 20 ); // all components equal
// camera.lookAt( scene.position ); // or the origi

// const map = new THREE.TextureLoader().load( 'Modelos_Maquinas/square-outline-textured.png' );
// map.colorSpace = THREE.SRGBColorSpace;
// cubeGeo = new THREE.BoxGeometry( 50, 50, 50 );
				// let cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c, map: map } );

				// grid
				
// const interaccion = new THREE.EventDispatcher()
// interaccion.addEventListener("click", function(e){
//     console.log(e)
// })

// Load the file
// loader.load(
//   `${objToRender}`,
//   function (gltf) {
//     //If the file is loaded, add it to the scene
//     // gltf.scene.children[0].name = 'Flex-pm0067'
//     object = gltf.scene;
//     scene.add(object);
//   },
//   function (xhr) {
//     //While it is loading, log the progress
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//   },
//   function (error) {
//     //If there is an error, log it
//     console.error(error);
//   }
// );
let escena_padre = new THREE.Group()
scene.add(escena_padre)
// const fbxLoader2 = new FBXLoader()
// fbxLoader2.load(`Modelos_Maquinas/Screen.fbx`, 
//   function(object){ 
//     // escena_padre.add(object)
//     // object.position.set(0,0,0)
//     posiciones(object,escena_padre, 0,0,0)    
    
//   }
// )
// const fbxLoader3 = new FBXLoader()
// fbxLoader3.load("Modelos_Maquinas/Fuji.fbx", 
//   function(object){
//     posiciones(object,escena_padre, 1,0,0.5)    
//     // escena_padre.add(object)
//     // object.position.set(1,0,0.5)
    
    
//   }
// )

// const fbxLoader = new FBXLoader()
// fbxLoader.load(`${objToRender_Screen}`, 
//   function(object){
//     // escena_padre.add(modelo_afura)
//     // modelo_afura.position.set(5,0,0) 
//    posiciones(object, escena_padre, 5,0,0)
    
//   }
// )
// let comando = `const fbxLoader = new FBXLoader()
// fbxLoader.load("${objToRender_Screen}", 
//   function(object){
//     // escena_padre.add(modelo_afura)
//     // modelo_afura.position.set(5,0,0) 
//    posiciones(object, escena_padre, 5,0,0)
    
//   }
// )`

let cuadritos = 0
objettos.forEach((objeto, index)=>{
  console.log(index)
  console.log(objeto.name)
  let keyposition = Object.keys(objeto.position)
  // keyposition.forEach(position =>{
  //   console.log(objeto.position[position])
  // })

  let comando = `const fbxLoader${index} = new FBXLoader()
  fbxLoader${index}.load("${objeto.name}", 
                  function(object){
                  posiciones(object, escena_padre, ${objeto.position.x},${objeto.position.y},${objeto.position.z})

  })`

  eval(comando)
  cuadritos += objeto.position.x
  
  console.log(comando)


})
//se agrega la cantida de cuadros en la grilla
const gridHelper = new THREE.GridHelper(20, 10 );
scene.add( gridHelper );


// console.log(comando)
// eval(comando)
function posiciones(modelito , lugar, x, y, z) {
  
  lugar.add(modelito)
  modelito.position.set(x,y,z) 
  
  // let comando = `${modelito}.position.set(${x},${y},${z})`
  // eval(comando)

  // return eval(comando)
}




// loader.load(
//     `free_bee_club.glb`,
//     function (gltf) {
//       //If the file is loaded, add it to the scene
//       object = gltf.scene;
//       scene.add(object);
//     },
//     function (xhr) {
//       //While it is loading, log the progress
//       console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//     },
//     function (error) {
//       //If there is an error, log it
//       console.error(error);
//     }
//   );




//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("eaea").appendChild(renderer.domElement);

// camera.position.z = objToRender === "free_bee_club.glb" ? 15 : 1;
//Set how far the camera will be from the 3D model

//Add lights to the scene, so we can actually see the 3D model
// const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
// topLight.position.set(500, 500, 500) //top-left-ish
// topLight.castShadow = true;
// scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0xFFFFFF, objToRender === "6_11_2024.glb" ? 1 : 1);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
// if (objToRender === "dino") {
  controls = new OrbitControls(camera, renderer.domElement);
// }  



//Render the scene
function animate() {
  requestAnimationFrame(animate);
  //Here we could add some code to update the scene, adding some automatic movement

  //Make the eye move
  if (object && objToRender === "eye") {
    //I've played with the constants here until it looked good 
    object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
  }
  renderer.render(scene, camera);
}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//add mouse position listener, so we can make the eye move
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

//Start the 3D rendering
animate();



const raycaster = new THREE.Raycaster()
document.addEventListener('click', onMouseDown);

function onMouseDown(event) {
    const coords = new THREE.Vector2(
      (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
      -((event.clientY / renderer.domElement.clientHeight) * 2 - 1),
    );
  
    raycaster.setFromCamera(coords, camera);
  
    const intersections = raycaster.intersectObjects(scene.children, true);
    if (intersections.length > 0) {
      const selectedObject = intersections[0].object;
      // const color = new THREE.Color(Math.random(), Math.random(), Math.random());
      // selectedObject.material.color = color;
      console.log(`${selectedObject.name} was clicked!`);
      // console.log(intersections)
    }
  }