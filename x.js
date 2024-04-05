let intersectedIndex=-1;
let game=true;
let all_clicked_pos=[];
let TextXO=[]
let addedtext=[]
let contextMenuOccurred = false;
let xMatchCount = 0;
let oMatchCount = 0;
let currentPlayer = 'X';
let currentPosition=[];
let clickedPositions = new Set();
let winningCombinationsCopy=[];
let prevXMatchCount = 0;
let prevOMatchCount = 0;

/*
const audioContext = new AudioContext();
const soundURL = './mixkit-negative.wav'; 
let soundBuffer;

fetch(soundURL)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(decodedBuffer => {
    soundBuffer = decodedBuffer;
  })
  .catch(error => console.error('Error loading sound file:', error));

// Function to play the sound
function playSound(count) {
    if (!soundBuffer) {
      console.error('Sound buffer not loaded');
      return;
    }
  
    for (let i = 0; i < count; i++) {
      const source = audioContext.createBufferSource();
      source.buffer = soundBuffer;
      source.connect(audioContext.destination);
      source.start();
    }
  }
*/

const textpositions= [
    new THREE.Vector3(-0.94, -0.94, -1.2), // 1
    new THREE.Vector3(-0.21, -0.94, -1.2), // 2
    new THREE.Vector3(0.56, -0.94, -1.2),  // 3
    new THREE.Vector3(-0.94, -0.21, -1.2), // 4
    new THREE.Vector3(-0.21, -0.21, -1.2), // 5
    new THREE.Vector3(0.56, -0.21, -1.2),  // 6
    new THREE.Vector3(-0.94, 0.56, -1.2),  // 8        
    new THREE.Vector3(-0.21, 0.56, -1.2) ,  // 9
    new THREE.Vector3(0.56, 0.56, -1.2),   // 7
    new THREE.Vector3(-0.94, -0.94, 1.14), // 10
    new THREE.Vector3(-0.21, -0.94, 1.14), // 11
    new THREE.Vector3(0.56, -0.94, 1.14),  // 12
    new THREE.Vector3(-0.94, -0.21, 1.14), // 13
    new THREE.Vector3(-0.21, -0.21, 1.14), // 14
    new THREE.Vector3(0.56, -0.21, 1.14),  // 15
    new THREE.Vector3(-0.94, 0.56, 1.14),  // 16
    new THREE.Vector3(-0.21, 0.56, 1.14),  // 17
    new THREE.Vector3(0.56, 0.56, 1.14),   // 18
    new THREE.Vector3(-1.15, -0.96, -0.90), // 19
    new THREE.Vector3(-1.15, -0.23, -0.90 ),  // 20
    new THREE.Vector3(-1.15, 0.53, -0.9 ), // 21
    new THREE.Vector3(-1.15, -0.96, -0.2 ), // 22 
    new THREE.Vector3(-1.15, -0.21, -0.2 ),  // 23
    new THREE.Vector3(-1.15, 0.56, -0.17 ),  // 24
    new THREE.Vector3(-1.15, -0.94,0.6),  // 25
    new THREE.Vector3(-1.15, -0.21, 0.59 ),   // 26
    new THREE.Vector3(-1.15, 0.57, 0.6) ,// 27
    new THREE.Vector3(1.2, -0.92, -0.92), // 28
    new THREE.Vector3(1.2, -0.21, -0.92 ),  // 29
    new THREE.Vector3(1.2, 0.57, -0.92), // 30
    new THREE.Vector3(1.2, -0.92, -0.21 ), // 31
    new THREE.Vector3(1.2, -0.21, -0.21 ),  // 32
    new THREE.Vector3(1.2, 0.57, -0.21 ),  // 33
    new THREE.Vector3(1.2, -0.92,0.57),  // 34
    new THREE.Vector3(1.2, -0.21, 0.57 ),   // 35
    new THREE.Vector3(1.2, 0.57, 0.57 ) ,  // 36
    new THREE.Vector3(-0.9, 1.2, -0.9), // 37
    new THREE.Vector3(-0.19, 1.2, -0.9 ),  // 38
    new THREE.Vector3(0.57, 1.2,-0.9 ), // 39
    new THREE.Vector3(-0.9, 1.2, -0.21), // 40
    new THREE.Vector3(-0.19, 1.2, -0.21),  // 41
    new THREE.Vector3(0.62, 1.2, -0.19 ),  // 42
    new THREE.Vector3(-0.97, 1.2, 0.59),  // 43
    new THREE.Vector3(-0.11, 1.2, 0.59 ),   // 44
    new THREE.Vector3(0.65, 1.2, 0.59) ,  // 45
    new THREE.Vector3(-0.92 ,-1.15,- 0.9), // 46
    new THREE.Vector3(-0.20, -1.15, -0.92 ),  // 47
    new THREE.Vector3(0.62, -1.15, -0.92 ), // 48
    new THREE.Vector3(-0.92, -1.15, -0.21 ), // 49
    new THREE.Vector3(-0.21, -1.15, -0.21),  // 50
    new THREE.Vector3(0.63, -1.15, -0.21 ),  // 51
    new THREE.Vector3(-0.92, -1.15,0.62),  // 52
    new THREE.Vector3(-0.21, -1.15, 0.62 ),   // 53
    new THREE.Vector3(0.62, -1.15, 0.62 )   // 54
  ];



  let setsz = [
    [15,16,17],
    [12,13,14],
    [9,10,11],
    [15,12,9],
    [16,13,10],
    [17,14,11],
    [15,13,11],
    [17,13,9],
    //camera facing -z dir
    [8,5,2],
    [7,4,1],
    [6,3,0],
    [8,7,6],
    [5,4,3],
    [2,1,0],
    [8,4,0],
    [6,4,2]
    //
  ];
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
window.addEventListener('click', mouseclick, false);



function mouseclick(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(squaresArray);

      if (intersects.length > 0) {
        const intersectedSquare = intersects[0].object;
        for (let i = 0; i <= 53; i++) {
            if (squaresArray[i] === intersectedSquare) {
                intersectedIndex = i;
    
                if (game && !clickedPositions.has(i)) {
                    addXManually(textpositions[i]);
                   console.log(clickedPositions)
                    clickedPositions.add(i);
                    all_clicked_pos.push(i);
                    keyval(TextXO, all_clicked_pos,setsz);
                    setTimeout(() => {
                        animateWinningText(winningCombinationsCopy);
                    }, 10);    
               
                 
          
                  
                   
                                   
                }
                break;
               
            }
            
        }
    }}
  
 
    



function addXManually({ x, y, z }) {
    const currentPositionn= new THREE.Vector3(x, y, z);
    currentPosition.push(currentPositionn);
    if(contextMenuOccurred){
        currentPlayer=TextXO[TextXO.length-3]
    }
    addText(new THREE.Vector3(x, y, z), currentPlayer);
  
    TextXO.push(currentPlayer);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
   console.log(TextXO)
}







document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    contextMenuOccurred = true;
    handleContextMenu();
});


function handleContextMenu() {
    if (contextMenuOccurred) {
        currentPlayer=TextXO[TextXO.length-1]
        const lastClickedPosition = [...clickedPositions].pop();
        if (lastClickedPosition !== undefined) {
            clickedPositions.delete(lastClickedPosition);
            const lastObject = addedtext.pop();
            scene.remove(lastObject);
            TextXO.pop()
            currentPosition.pop()
            all_clicked_pos.pop()
          
        } else {
            console.log("No elements to remove.");
        }
        contextMenuOccurred = false;
    } else {
        console.log("No context menu occurred.");
    }

}



function addText(position, textValue) {
    const loader = new THREE.FontLoader();
    loader.load('./helvetiker_bold.typeface.json', function (loadedFont) {
        const color = 0x006699;
        const matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: false,
            opacity: 1,
            side: THREE.DoubleSide
        });
     
        const geometry = new THREE.TextGeometry(textValue, {
            font: loadedFont,
            size: 0.38,
            height: 0.1
        });
       
       

        if (intersectedIndex >= 18 && intersectedIndex <=35) {
            const textw = new THREE.Mesh(geometry, matLite);
            textw.rotation.set(0, -Math.PI / 2, 0);
            textw.position.copy(textpositions[intersectedIndex]);
            textw.name=textValue+intersectedIndex;
            scene.add(textw);
            addedtext.push(textw)
          
          
      
        } else if (intersectedIndex >=36 && intersectedIndex <=53) {
            const textu = new THREE.Mesh(geometry, matLite);
            textu.rotation.set(Math.PI / 2, 0, 0);
            textu.name=textValue+intersectedIndex;
            textu.position.copy(textpositions[intersectedIndex]);
            scene.add(textu);
            addedtext.push(textu);
          
          
           
            
        } else {
           
            const text = new THREE.Mesh(geometry, matLite);
            text.name=textValue+intersectedIndex;
            text.position.copy(textpositions[intersectedIndex]);
            scene.add(text);
            addedtext.push(text);

           
        }
    
    });       
}



///textxo contains all x and o so the last element is the current player
//currentpossible contains all positions and the last posiition all postition are accessable...
//allclickedpos contains the number[location] of the clicked sqaure and clicked text,,,
// divided aray consists of allclicked positions divided by 3!!!!







  let xTextMesh = null;
  let oTextMesh = null;
  
  function createText(position, textValue, isX) {
      const loader = new THREE.FontLoader();
      loader.load('./helvetiker_bold.typeface.json', function (loadedFont) {
          const color = 0xffffff; 
          const matLite = new THREE.MeshBasicMaterial({
              color: color,
              transparent: false,
              opacity: 1,
              side: THREE.DoubleSide
          });
  
          const geometry = new THREE.TextGeometry(textValue, {
              font: loadedFont,
              size: 0.7, 
              height: 0.01 
          });
  
          const textMesh = new THREE.Mesh(geometry, matLite);
          textMesh.position.copy(position);
  
          if (isX) {
              if (xTextMesh) {
                  scene.remove(xTextMesh);
                  xTextMesh.geometry.dispose();
                  xTextMesh.material.dispose();
              }
              xTextMesh = textMesh;
          } else {
              if (oTextMesh) {
                  scene.remove(oTextMesh);
                  oTextMesh.geometry.dispose();
                  oTextMesh.material.dispose();
              }
              oTextMesh = textMesh;
          }
  
          scene.add(textMesh);
      });
  }





function keyval(arr1, arr2, arr3) {
    let keyvalue = [];
    const minLength = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < minLength; i++) {
        let obj = {};
        obj[arr1[i]] = arr2[i];
        keyvalue.push(obj);
    }
    if (keyvalue.length < 0) {
        console.log("No keyvalue entries to compare.");
    } else {
        let matchCount = 0;
        for (let set of arr3) {
            let foundMatch = false;
            for (let j = 0; j < keyvalue.length - 2; j++) {
                for (let k = j + 1; k < keyvalue.length - 1; k++) {
                    for (let i = k + 1; i < keyvalue.length; i++) {
                        let values = [Object.values(keyvalue[j])[0], Object.values(keyvalue[k])[0], Object.values(keyvalue[i])[0]];
                        if (values.every(value => set.includes(value))) {
                            let matchedValues = values; 
                            console.log(matchedValues); 
                            foundMatch = true;
                           
                            break;
                        }
                    }
                    if (foundMatch) {
                        break;
                    }
                }
                if (foundMatch) {
                    break;
                }
            }
            
            if (foundMatch) {
                matchCount++; 
            
            }
        }
        
       // console.log("Total matching sets with setsz:", matchCount); 
        divideAndCheck(keyvalue, setsz);
      //  console.log(keyvalue)
    }
}  







function divideAndCheck(keyvalue, arr3) {
    let xValues = [];
    let oValues = [];

    keyvalue.forEach(item => {
        const position = parseInt(Object.values(item)[0]);
        const symbol = Object.keys(item)[0];
        if (symbol === 'X') {
            xValues.push(position);
        } else if (symbol === 'O') {
            oValues.push(position);
        }
    });
   
    xMatchCount = 0;
    oMatchCount = 0;

    let matchOccurred = false;
    let winningCombinations = [];
  
    for (let set of arr3) {
        let xMatch = set.every(pos => xValues.includes(pos));
        if (xMatch) {
            xMatchCount++;
            winningCombinations.push(set.map(pos => 'X' + pos)); 
            matchOccurred = true;
        }
    }

    for (let set of arr3) {
        let oMatch = set.every(pos => oValues.includes(pos));
        if (oMatch) {
            oMatchCount++;
            winningCombinations.push(set.map(pos => 'O' + pos)); 
            matchOccurred = true;
        }
    }

    console.log("Total matching sets with sets for X:", xMatchCount);
    console.log("Total matching sets with sets for O:", oMatchCount);
    updateScore(xMatchCount, oMatchCount);
    winningCombinationsCopy = [...winningCombinations]; 

    if (xMatchCount > prevXMatchCount || oMatchCount > prevOMatchCount) {
       setTimeout(()=>{ playSound(5);},200)
    } else {
        playSound(1);
    }
    prevXMatchCount = xMatchCount;
    prevOMatchCount = oMatchCount;


    return winningCombinations;
}








function animateWinningText(winningCombinations) {
    let unchangedElements = false;
    winningCombinations.forEach(combination => {
        combination.forEach(name => {
            const textMesh = scene.getObjectByName(name);
            if (textMesh) {
                const darkRedColor = 0x8B0000;
                textMesh.material.color.setHex(darkRedColor);
            
            } else {
                unchangedElements = true;
            }
        });
    });
   
}



const xMatchCountPosition = new THREE.Vector3(1, -1, -8);
const oMatchCountPosition = new THREE.Vector3(1, -1, -2);

function updateTextContent() {
    const xMatchCountText = "Points For X: " + xMatchCount;
    const oMatchCountText = "Points For O: " + oMatchCount;

    document.getElementById('x-match-count').textContent = xMatchCountText;
    document.getElementById('o-match-count').textContent = oMatchCountText;

 
    createText(xMatchCountPosition, xMatchCountText, true);
    createText(oMatchCountPosition, oMatchCountText, false);
}

function updateScore(xScore, oScore) {

    document.getElementById('x-match-count').textContent = "Points For X: " + xScore;
    document.getElementById('o-match-count').textContent = "Points For O: " + oScore;
}



function createSkyStars() {
    const starCount = 5000;
    const minDistance = 120;
    const maxDistance = 2500;
    const flickerPercentage = 0.5;

    const starsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const flickeringStars = new Array(starCount).fill(false);

    for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * (maxDistance - minDistance) + minDistance;
        const y = (Math.random() - 0.5) * (maxDistance - minDistance) + minDistance;
        const z = (Math.random() - 0.5) * (maxDistance - minDistance) + minDistance;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        const distance = Math.sqrt(x * x + y * y + z * z);
        const colorIntensity = 1 - Math.min(1, distance / maxDistance); 
        const originalColor = new THREE.Color(colorIntensity, colorIntensity, colorIntensity);

        colors[i * 3] = originalColor.r;
        colors[i * 3 + 1] = originalColor.g;
        colors[i * 3 + 2] = originalColor.b;
        if (Math.random() < flickerPercentage) {
            flickeringStars[i] = true;
        }
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
    });

    const starField = new THREE.Points(starsGeometry, starMaterial);
    scene.add(starField);

    animateColorChange(starField);
    flickeringStars.forEach((isFlickering, index) => {
        if (isFlickering) {
            animateFlicker(starField.geometry, index);
        }
    });
}

function animateColorChange(mesh) {
    const speed = 0.4;
    function updateColor() {
        const time = performance.now() * 0.001;
        const value = Math.sin(time * speed);
        mesh.material.color.set(new THREE.Color().setHSL(value * 0.7, 1, 0.5));
        requestAnimationFrame(updateColor);
    }
    updateColor();
}

function animateFlicker(geometry, index) {
    const flickerSpeed = 0.1;
    const flickerIntensity = 0.2;

    const flickerColor = new THREE.Color().setHSL(0.7, 1, 0.5);
    const originalColor = geometry.attributes.color.array.slice(index * 3, index * 3 + 3);

    function flicker() {
        const time = performance.now() * 0.001;
        const value = Math.sin(time * flickerSpeed);
        flickerColor.copy(new THREE.Color().setHSL(value * flickerIntensity, 1, 0.5));
        geometry.attributes.color.setXYZ(index, flickerColor.r, flickerColor.g, flickerColor.b);
        geometry.attributes.color.needsUpdate = true;
        requestAnimationFrame(flicker);
    }
    flicker();
}

createSkyStars();




