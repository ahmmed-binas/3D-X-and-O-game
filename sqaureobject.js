let selectedColorPalette;
let color; 
let squares = [];

let squareMaterial = new THREE.MeshBasicMaterial({  side: THREE.DoubleSide });

  function hexToRgb(hex) {
    return {
        r: ((hex >> 16) & 255) / 255, 
        g: ((hex >> 8) & 255) / 255, 
        b: (hex & 255) / 255         
    };
}

 const colorMap = {
    "Celestial Crimson": [0x811453, 0xdd2f59, 0xffb98a],
    "Starlight Silver": [0x414e6d, 0xaebdc7, 0xe9ecef],
    "Galactic Teal": [0x034752, 0x0092a6, 0x23c5e0],
    "Nebula Purple": [0x490092, 0x8700e8, 0xba80e8],
    "Cosmic Blue": [0x00171f, 0x0a4f62, 0x00a4c4],
    "original": [0xff0000, 0x00ff00, 0x0000ff]
};



function setColorFromPalette() {
    const selectedPalette = document.getElementById('colorSelect');
    if (!selectedPalette) {
        console.error("No color palette selected.");
        return;
    }
    const paletteName = selectedPalette.value;
    if (!(paletteName in colorMap)) {
        console.error("Invalid color palette name:", paletteName);
        return;
    }
    if (paletteName !== selectedColorPalette) {
        selectedColorPalette = paletteName;
        const colorHex = colorMap[paletteName][0];
        const rgb = hexToRgb(colorHex);
        color = new THREE.Color(rgb.r, rgb.g, rgb.b);
        squareMaterial.color.set(color);
       
    }
}

function applySettings() {
    setColorFromPalette();
    console.log("Settings applied.");
}

document.getElementById("applySettings").addEventListener("click", applySettings);


document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM content to be fully loaded
    document.getElementById("applySettings").click(); // Programmatically trigger a click event on the button
    console.log("Theme  Activated..................")
});



function create_squares() {
    const squareSize = 0.7; 
    const squareGeometry = new THREE.PlaneGeometry(squareSize, squareSize);
 
   


    
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

    const squarenumb = squarePositions.length; // Get the total number of squares
    for (let i = 1; i <= squarenumb; i++) {
        const square = new THREE.Mesh(squareGeometry, squareMaterial); 
        square.position.copy(squarePositions[i - 1]); // Set the position of the square
        square.name = "square" + i; // Assign a name to the square
        scene.add(square); 
        squares.push(square);
    }
return squares; 
}


 let squaresArray=create_squares();

rotate();


function rotate(){
    for (var s = 18; s <= 35; s++) {
        squares[s].rotation.set(0, -Math.PI / 2, 0);
    }

    for (var s = 36; s <= 54; s++) {
        squares[s].rotation.set(-Math.PI / 2, 0, 0);
}}




