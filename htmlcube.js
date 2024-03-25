const scene = new THREE.Scene();
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = -6;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.querySelector('#renderer-container').appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = false;

// Matter.js setup
const engine = Matter.Engine.create();
const render = Matter.Render.create({
    element: document.body,
    engine: engine
});
Matter.Render.run(render);
Matter.Runner.run(engine); 

// Cube
const cubeSize = 2.28;
const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Ground
const ground = Matter.Bodies.rectangle(9, -8, 800, 2, { isStatic: true });
Matter.World.add(engine.world, [ground]);
const matterGroundPosition = ground.position;
const threeGround = new THREE.Mesh(
    new THREE.BoxGeometry(800, 2, 800),
    new THREE.MeshBasicMaterial({ color: 0x808080, transparent: true, opacity: 0.8 })
);
scene.add(threeGround);
threeGround.position.set(matterGroundPosition.x, matterGroundPosition.y, matterGroundPosition.z);


window.addEventListener('resize', function () {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    xno();
    updateFragments()
}

animate();
