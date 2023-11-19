import { FontLoader } from './FontLoader.js';
import { TextGeometry } from './TextGeometry.js';


animate();

   const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


let mouseX, mouseY;
const raycaster=new THREE.Raycaster();
const mouse=new THREE.Vector2();
window.addEventListener('click',mouseclick,false)
function mouseclick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse,camera);
    const intersects=raycaster.intersectObject(cube);
    if (intersects.length > 0) {
        const intersectionPoint = intersects[0].point;
        addtext(intersectionPoint);
    }}

    function addtext(position){
    const loader = new THREE.FontLoader();
    let font;

    loader.load('./helvetiker_bold.typeface.json', function (loadedFont) {
        font = loadedFont;

        const color = 0x006699;
        const matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: false,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        const geometry = new THREE.TextGeometry('X', {
            font: font,
            size: 0.38,
            height: 10
        });
        console.log(mouseX,mouseY);
        const text = new THREE.Mesh(geometry, matLite);
        text.position.z = 1;
        text.position.copy(position);
        scene.add(text);
        render();
    });

  
}
// Move the camera to focus on the cube
camera.position.x = cube.position.x;
camera.position.y = cube.position.y;
camera.lookAt(cube.position);
addtext();