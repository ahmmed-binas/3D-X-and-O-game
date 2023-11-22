import { FontLoader } from './FontLoader.js';
import { TextGeometry } from './TextGeometry.js';



animate();

   

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}



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
        console.log(intersectionPoint);
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
   
        const text = new THREE.Mesh(geometry, matLite);
        console.log()
        text.position.copy(position);
        scene.add(text);
       
    });

  
}



//}
addtext();