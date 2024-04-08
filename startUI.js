let lay=[];
let layP=[];

const windowGeometry = new THREE.BoxGeometry(5,5,0);
    const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, transparent: true, opacity: 0.8});
    const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial,2);
    windowMesh.position.set(0, 0, 2); 
    windowMesh.name='windowMeshstart';
    lay.push(windowMesh);


//scene.add(windowMesh);
//addTextToScene(scene, 'Play', new THREE.Vector3(-0.422, 0, 2), fontPath, 0xFF0000);
//addTextToScene(scene, 'X', new THREE.Vector3(-0.7, 1.72 , 2 ), fontPath, false);
//addTextToScene(scene, 'O', new THREE.Vector3(0.5  , 1.72, 2 ), fontPath, false);
//addTextToScene(scene, '&', new THREE.Vector3(-0.1 , 1.7 , 2), fontPath, true);




 function addTextToScene(scene, textValue, position, fontPath,col) {
       const loader = new THREE.FontLoader();
       loader.load(fontPath, function (loadedFont) {
           const matLite = new THREE.MeshBasicMaterial({
               transparent: false,
               opacity: 1,
               side: THREE.DoubleSide
           });
   
           const geometry = new THREE.TextGeometry(textValue, {
               font: loadedFont,
               size: 0.38,
               height: 0.1
           });
        
           if (textValue === 'Play'||textValue=='Player1 is X'||textValue=='Player2 is O') {
            const play = new THREE.Mesh(geometry, matLite);
            lay.push(play);
            play.position.copy(position);
            scene.add(play);
            play.name = 'play';
            
        } else if (textValue === 'X') {
            const X = new THREE.Mesh(geometry, matLite);
            X.position.copy(position);
            scene.add(X);
            X.name = 'X';
            lay.push(X);
            if (col === false) {
                const originalColor = new THREE.Color(0x006699);
                animateColorChange(X, originalColor);
            }
          
        } else if (textValue === 'O') {
            const O = new THREE.Mesh(geometry, matLite);
            O.position.copy(position);
            scene.add(O);
            O.name = 'O';
            lay.push(O);
            if (col === false) {
                const originalColor = new THREE.Color(0x006699);
                animateColorChange(O, originalColor);
            }
        } else if (textValue === '&') {
            const mesh = new THREE.Mesh(geometry, matLite);
            mesh.position.copy(position);
            scene.add(mesh);
            mesh.name = '&';
            lay.push(mesh);
        }

      
   
        

        
      
           
       });
}


function animateColorChange(mesh, originalColor) {
    const speed = 0.4; 
    function updateColor() {
        const time = performance.now() * 0.001;
        const value = Math.sin(time * speed);
        mesh.material.color.set(originalColor.clone().lerp(new THREE.Color(0xFF0000), value));
        requestAnimationFrame(updateColor);
    }


    updateColor();
    


}



const fontPath = './helvetiker_bold.typeface.json';



  

function onClick(event) {
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(lay);
    
    if (intersects.length > 0) {
      
       
        const clickedObject = intersects[0].object;
       

        if (clickedObject.name === 'play') {
          
            xno()
            destroymesh();  
            breakMesh(clickedObject);
            setTimeout(() => {
                Next_Action();
            }, 9000);
            
           
            
        }
      
        
}


}

function destroymesh() {
    let i = 0;
    while (i < lay.length) {
        const mesh = lay[i];
       

        // Check if the mesh is not undefined
        if (mesh) {
            // Remove the mesh from the scene
            scene.remove(mesh);
           
            // Dispose of the mesh to free up resources
            mesh.geometry.dispose();
            mesh.material.dispose();

            // Remove the mesh from the array
           
          lay.splice(i, 1);
        } else {
            // Increment i if the mesh is undefined
            i++;
        }
    }

}


function updateFragments() {


    for (let i = fragments.length - 1; i >= 0; i--) {
        const fragment = fragments[i];

     
        fragment.position.add(fragment.userData.velocity.clone().multiplyScalar(9));

        // Remove fragments that go below the ground
        if (fragment.position.y <-10) {
            // Remove the fragment from the scene
            scene.remove(fragment);

            // Dispose of the fragment's geometry and material
            fragment.geometry.dispose();
            fragment.material.dispose();

            // Remove the fragment from the array
            fragments.splice(i, 1);
        }
    }
  
}

let createdObjects = [];

function xnx() {
    let index = 0;
    const interval = setInterval(() => {
        if (index <= 22) {
            const a = index;
            const xPosition = -0.7+ a * Math.random(-10);
            const yPosition = 1.72 + a * Math.random(-10);
            const zPosition = 2 - a / Math.random(1.2);

            const objectX = addTextToScene(scene, 'X', new THREE.Vector3(xPosition, yPosition, zPosition), fontPath, false);
            const objectO = addTextToScene(scene, 'O', new THREE.Vector3(0.5, yPosition, zPosition), fontPath, false);
            const objectAmp = addTextToScene(scene, '&', new THREE.Vector3(-0.1, 1.7 + a * Math.sin(-10), zPosition), fontPath, true);

            // Store the created objects in the array
            createdObjects.push(objectX, objectO, objectAmp);
            index++;
        } else {
            clearInterval(interval); // Stop the interval when all objects are created
            // Set a timeout to delete the objects after a certain duration (in milliseconds)
            setTimeout(() => {
                removeTextGradually(scene);
            }, 10); // Adjust the duration as needed
        }
    }, 1); // Adjust the interval duration as needed
}








function removeTextGradually(scene) {
    const delay = 200;
    lay.forEach((object, index) => {
        setTimeout(() => {
            scene.remove(object);
            lay.splice(index, 1);
        }, index * delay);
    });
}








const fragments = []; 

function breakMesh(mesh) {
    const numFragments = 13; 
    for (let i = 0; i < numFragments; i++) {
        const fragment = new THREE.Mesh(mesh.geometry, mesh.material.clone());
        fragment.position.copy(mesh.position);
        fragment.rotation.set(Math.random()-1 * Math.PI, Math.random() -1* Math.PI, Math.random()-1 * Math.PI);
        fragment.scale.set(Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2);
        scene.add(fragment);
        fragments.push(fragment); 
        const speed = 0.2;
        const direction = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
        direction.normalize();
        fragment.userData = { velocity: direction.multiplyScalar(speed) };
    }
  

    // Remove the original mesh
    scene.remove(mesh);


}





function xno(){
    const xPosition = -10;
    const yPosition = 15;
    const zPosition = -16;
    const initialRotation = new THREE.Euler(Math.PI/9, 0, Math.PI/12); 

    const objectX = addTextToScene(scene, 'X', new THREE.Vector3(xPosition, yPosition, zPosition), fontPath, false, initialRotation);
    const objectO = addTextToScene(scene, 'O', new THREE.Vector3(5.0, yPosition, zPosition), fontPath, false, initialRotation);
    const objectAmp = addTextToScene(scene, '&', new THREE.Vector3(-1.5, yPosition, zPosition), fontPath, true, initialRotation);
}



function Next_Action() {
    const fontPath3 = 'Press Start 2P_Regular.json';
    const player1Text = addTextToScene(scene, 'Player1 is X', new THREE.Vector3(-4, 5, -5), fontPath3, 0xFF0000);
    const player2Text = addTextToScene(scene, 'Player2 is O' , new THREE.Vector3(2.5, 3.7, -5), fontPath3, 0xFF0000);
}


