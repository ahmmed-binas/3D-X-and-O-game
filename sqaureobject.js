let squares = [];


function create_squares() {
    const squareSize = 0.7;
    const squareGeometry = new THREE.PlaneGeometry(squareSize, squareSize);
    const squareMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
   
    const squarePositions = [
        new THREE.Vector3(-0.76, -0.76, -1.16), // square1
        new THREE.Vector3(0, -0.76, -1.16),      // square2
        new THREE.Vector3(0.76, -0.76, -1.16),    // square3
        new THREE.Vector3(-0.76, 0, -1.16),       // square4
        new THREE.Vector3(0, 0, -1.16),           // square5
        new THREE.Vector3(0.76, 0, -1.16),        // square6
        new THREE.Vector3(-0.76, 0.76, -1.16),    // square7
        new THREE.Vector3(0, 0.76, -1.16),        // square8
        new THREE.Vector3(0.76, 0.76, -1.16),     // square9
        new THREE.Vector3(-0.76, -0.76, 1.16),    // square10
        new THREE.Vector3(0, -0.76, 1.16),        // square11
        new THREE.Vector3(0.76, -0.76, 1.16),     // square12
        new THREE.Vector3(-0.76, 0, 1.16),        // square13
        new THREE.Vector3(0, 0, 1.16),            // square14
        new THREE.Vector3(0.76, 0, 1.16),         // square15
        new THREE.Vector3(-0.76, 0.76, 1.16),     // square16
        new THREE.Vector3(0, 0.76, 1.16),         // square17
        new THREE.Vector3(0.76, 0.76, 1.16),      // square18
        new THREE.Vector3(-1.16, -0.76, -0.76),   // square19
        new THREE.Vector3(-1.16, 0, -0.76),       // square20
        new THREE.Vector3(-1.16, 0.76, -0.76),    // square21
        new THREE.Vector3(-1.16, -0.76, 0),       // square22
        new THREE.Vector3(-1.16, 0, 0),           // square23
        new THREE.Vector3(-1.16, 0.76, 0),        // square24
        new THREE.Vector3(-1.16, -0.76, 0.76),    // square25
        new THREE.Vector3(-1.16, 0, 0.76),        // square26
        new THREE.Vector3(-1.16, 0.76, 0.76),     // square27
        new THREE.Vector3(1.16, -0.76, -0.76),    // square28
        new THREE.Vector3(1.16, 0, -0.76),        // square29
        new THREE.Vector3(1.16, 0.76, -0.76),     // square30
        new THREE.Vector3(1.16, -0.76, 0),        // square31
        new THREE.Vector3(1.16, 0, 0),            // square32
        new THREE.Vector3(1.16, 0.76, 0),         // square33
        new THREE.Vector3(1.16, -0.76, 0.76),     // square34
        new THREE.Vector3(1.16, 0, 0.76),         // square35
        new THREE.Vector3(1.16, 0.76, 0.76),      // square36
        new THREE.Vector3(-0.76, 1.16, -0.76),    // square37
        new THREE.Vector3(0, 1.16, -0.76),        // square38
        new THREE.Vector3(0.76, 1.16, -0.76),     // square39
        new THREE.Vector3(-0.76, 1.16, 0),        // square40
        new THREE.Vector3(0, 1.16, 0),            // square41
        new THREE.Vector3(0.76, 1.16, 0),         // square42
        new THREE.Vector3(-0.76, 1.16, 0.76),     // square43
        new THREE.Vector3(0, 1.16, 0.76),         // square44
        new THREE.Vector3(0.76, 1.16, 0.76),      // square45
        new THREE.Vector3(-0.76, -1.16, -0.76),   // square46
        new THREE.Vector3(0, -1.16, -0.76),       // square47
        new THREE.Vector3(0.76, -1.16, -0.76),    // square48
        new THREE.Vector3(-0.76, -1.16, 0),       // square49
        new THREE.Vector3(0, -1.16, 0),           // square50
        new THREE.Vector3(0.76, -1.16, 0),        // square51
        new THREE.Vector3(-0.76, -1.16, 0.76),    // square52
        new THREE.Vector3(0, -1.16, 0.76),        // square53
        new THREE.Vector3(0.76, -1.16, 0.76)      // square54
    ];
    
    const squarenumb = squarePositions.length;

    for (let i = 1; i <= squarenumb; i++) {
        const square = new THREE.Mesh(squareGeometry, squareMaterial);
        square.position.copy(squarePositions[i - 1]);
        square.name = "square" + i;
        cube.add(square);
        squares.push(square);
    }

    return squares;
    
}


const squaresArray = create_squares();
function rotate(){
for (var s = 18; s <= 35; s++) {
    squaresArray[s].rotation.set(0, -Math.PI / 2, 0);
}
// Rotate squares from index 36 to 54
for (var s = 36; s <= 54; s++) {
    squaresArray[s].rotation.set(-Math.PI / 2, 0, 0);
}
}

rotate();
create_sqaure();



// Change color of a specific square
function changeSquareColor(squareIndex, newColor) {
    squaresArray[squareIndex].material.color.set(newColor);
}

// Example: Change the color of square at index 10 to green (hex: 0x00ff00)
changeSquareColor(9, 0x00ff00); // Remember, array indices start from 0, so square 10 has index 9.
