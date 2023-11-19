const scene = new THREE.Scene();

// Set up the camera
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;

// Create the renderer and append it to the container
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.querySelector('#renderer-container').appendChild(renderer.domElement);

// Add mouse interaction for camera movement (with OrbitControls)
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = false; // Prevent automatic rotation

// Create a 3D cube
const cubeSize = 2.3;
const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Render the scene with the camera
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();





