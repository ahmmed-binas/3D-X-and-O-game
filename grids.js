let selectedColorPalette;
let color;

function hexToRgb(hex) {
    return {
        r: ((hex >> 16) & 255) / 255,
        g: ((hex >> 8) & 255) / 255,
        b: (hex & 255) / 255
    };
}

const colorMap = {
    "Celestial Crimson": [0x811453, 0xbcd4e6, 0xfff5ee, 0x333333],
    "Starlight Silver": [0x414e6d, 0x788995, 0xf5f5f5, 0x2c3e50],
    "Galactic Teal": [0x034752, 0x3a5f6e, 0xe0f2f1, 0x1abc9c],
    "Nebula Purple": [0x490092, 0x835a9b, 0xe6e6fa, 0x8e44ad],
    "Cosmic Blue": [0x00171f, 0x16343a, 0xc6e2ff, 0x3498db],
    "original": [0xB22222, 0xd3d3d3, 0xfff5ee, 0x333333]
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
        const colorHex = colorMap[paletteName][1];
        const rgb = hexToRgb(colorHex);
        color = new THREE.Color(rgb.r, rgb.g, rgb.b);
        lineMaterial.color.set(color);
    }
}

function applySettings() {
    setColorFromPalette();
    console.log("Settings applied.");
}

document.getElementById("applySettings").addEventListener("click", applySettings);

document.getElementById("saveSettings").addEventListener('click', function() {
    // Save the selected theme
    saveThemeSelection(selectedColorPalette);
    window.location.reload(); // Reload the page
});

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM content to be fully loaded
    document.getElementById("applySettings").click(); // Programmatically trigger a click event on the button
    console.log("Theme Activated...");
    const selectedTheme = loadThemeSelection();
    if (selectedTheme) {
        document.getElementById('colorSelect').value = selectedTheme;
        applySettings();
    }
    console.log("Theme activated.");
});

function saveThemeSelection(theme) {
    localStorage.setItem('selectedTheme', theme);
}

function loadThemeSelection() {
    return localStorage.getItem('selectedTheme');
}














let lineMaterial = new THREE.LineBasicMaterial({
    linewidth: 30,
});

const lineGeometry1 =new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, 0.38, -1.15),
        new THREE.Vector3(-1.15, 0.38, -1.15)
    ])
    const line1 = new THREE.Line(lineGeometry1, lineMaterial);
   scene.add(line1);//1st side (1,0)and horizndal line1(1,1).
    
    const lineGeometry2 =new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, 0.38, 1.15),
        new THREE.Vector3(-1.15, 0.38, 1.15)
    ])
    const line2 = new THREE.Line(lineGeometry2, lineMaterial);
scene.add(line2);//(1,)

    
    const lineGeometry3 =new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, 0.38, 1.15),
        new THREE.Vector3(1.15, 0.38, -1.15)
    ])
    const line3 = new THREE.Line(lineGeometry3, lineMaterial);
    scene.add(line3);
    
    const lineGeometry4 =new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1.15, 0.38, 1.15),
        new THREE.Vector3(-1.15, 0.38, -1.15)
    ])
    const line4 = new THREE.Line(lineGeometry4, lineMaterial);
    scene.add(line4);
    
    const lineGeometry5 =new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, -0.38, 1.15),
        new THREE.Vector3(-1.15, -0.38, 1.15)
    ])

    const line5 = new THREE.Line(lineGeometry5, lineMaterial);
scene.add(line5);

    
    const lineGeometry6 =new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, -0.38, -1.15),
        new THREE.Vector3(1.15, -0.38, 1.15)
    ])
    const line6 = new THREE.Line(lineGeometry6, lineMaterial);
scene.add(line6);

    // Line 7
    const lineGeometry7 =new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, -0.38, -1.15),
        new THREE.Vector3(-1.15, -0.38, -1.15)
    ])
    const line7 = new THREE.Line(lineGeometry7, lineMaterial);
scene.add(line7);

    // Line 8
    const lineGeometry8 =new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1.15, -0.38, 1.15),
        new THREE.Vector3(-1.15, -0.38, -1.15)
    ])
    const line8 = new THREE.Line(lineGeometry8, lineMaterial);
    scene.add(line8);


const lineGeometry9 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15, -0.38),
    new THREE.Vector3(-1.15, -1.15, -0.38)
]);
const line9 = new THREE.Line(lineGeometry9, lineMaterial);
scene.add(line9);


const lineGeometry10 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15, 0.38),
    new THREE.Vector3(-1.15, -1.15, 0.38)
]);
const line10 = new THREE.Line(lineGeometry10, lineMaterial);
scene.add(line10);


const lineGeometry11 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15, 0.38),
    new THREE.Vector3(1.15, 1.15, 0.38)
]);
const line11 = new THREE.Line(lineGeometry11, lineMaterial);
scene.add(line11);


const lineGeometry12 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15, 0.38),
    new THREE.Vector3(1.15, -1.15, 0.38)
]);
const line12 = new THREE.Line(lineGeometry12, lineMaterial);
scene.add(line12);


const lineGeometry13 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15, -0.36),
    new THREE.Vector3(1.15, -1.15, -0.36)
]);
const line13 = new THREE.Line(lineGeometry13, lineMaterial);
scene.add(line13);


const lineGeometry14 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15, -0.38),
    new THREE.Vector3(-1.15, 1.15, -0.38)
]);
const line14 = new THREE.Line(lineGeometry14, lineMaterial);
scene.add(line14);


const lineGeometry15 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, -1.15, -0.38),
    new THREE.Vector3(-1.15, -1.15, -0.38)
]);
const line15 = new THREE.Line(lineGeometry15, lineMaterial);
scene.add(line15);


const lineGeometry16 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, -1.15, 0.36),
    new THREE.Vector3(-1.15, -1.15, 0.36)
]);
const line16 = new THREE.Line(lineGeometry16, lineMaterial);
scene.add(line16);

const lineGeometry17 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0.36, 1.15, 1.15),
    new THREE.Vector3(0.36, -1.15, 1.15)
]);
const line17 = new THREE.Line(lineGeometry17, lineMaterial);
scene.add(line17);


const lineGeometry18 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.36, 1.15, 1.15),
    new THREE.Vector3(-0.36, -1.15, 1.15)
]);
const line18 = new THREE.Line(lineGeometry18, lineMaterial);
scene.add(line18);


const lineGeometry19 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.36, 1.15, -1.15),
    new THREE.Vector3(-0.36, -1.15, -1.15)
]);
const line19 = new THREE.Line(lineGeometry19, lineMaterial);
scene.add(line19);


const lineGeometry20 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0.36, 1.15, -1.15),
    new THREE.Vector3(0.36, -1.15, -1.15)
]);
const line20 = new THREE.Line(lineGeometry20, lineMaterial);
scene.add(line20);


const lineGeometry21 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0.36, -1.15, 1.15),
    new THREE.Vector3(0.36, -1.15, -1.15)
]);
const line21 = new THREE.Line(lineGeometry21, lineMaterial);
scene.add(line21);


const lineGeometry22 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.36, -1.15, 1.15),
    new THREE.Vector3(-0.36, -1.15, -1.15)
]);
const line22 = new THREE.Line(lineGeometry22, lineMaterial);
scene.add(line22);


const lineGeometry23 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0.36, 1.15, 1.15),
    new THREE.Vector3(0.36, 1.15, -1.15)
]);
const line23 = new THREE.Line(lineGeometry23, lineMaterial);
scene.add(line23);


const lineGeometry24 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.36, 1.15, 1.15),
    new THREE.Vector3(-0.36, 1.15, -1.15)
]);
const line24 = new THREE.Line(lineGeometry24, lineMaterial);
cube.add(line24);






// ... (Your existing code)

// Add lines to the top corners
const lineGeometry25 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15,1.15),
    new THREE.Vector3(1.15, 1.15,-1.15)
]);
const line25 = new THREE.Line(lineGeometry25, lineMaterial);
scene.add(line25);

const lineGeometry26 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15,1.15),
    new THREE.Vector3(-1.15, 1.15, -1.15)
]);
const line26 = new THREE.Line(lineGeometry26, lineMaterial);
scene.add(line26);

// Add lines to the bottom corners
const lineGeometry27 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, -1.15, 1.15),
    new THREE.Vector3(1.15, -1.15, -1.15)
]);
const line27 = new THREE.Line(lineGeometry27, lineMaterial);
scene.add(line27);

const lineGeometry28 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, -1.15, 1.15),
    new THREE.Vector3(-1.15, -1.15, -1.15)
]);
const line28 = new THREE.Line(lineGeometry28, lineMaterial);
scene.add(line28);

// ... (The rest of your code)
// ... (Your existing code)

// Add lines to the sides
const lineGeometry29 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15, -1.15),
    new THREE.Vector3(1.15, -1.15, -1.15)
]);
const line29 = new THREE.Line(lineGeometry29, lineMaterial);
scene.add(line29);

const lineGeometry30 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15, -1.15),
    new THREE.Vector3(-1.15, -1.15, -1.15)
]);
const line30 = new THREE.Line(lineGeometry30, lineMaterial);
scene.add(line30);

const lineGeometry31 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15, 1.15),
    new THREE.Vector3(1.15, -1.15, 1.15)
]);
const line31 = new THREE.Line(lineGeometry31, lineMaterial);
scene.add(line31);

const lineGeometry32 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15, 1.15),
    new THREE.Vector3(-1.15, -1.15, 1.15)
]);
const line32 = new THREE.Line(lineGeometry32, lineMaterial);
scene.add(line32);

// ... (The rest of your code)
const lineGeometry33 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15, 1.15),
    new THREE.Vector3(1.15, 1.15, 1.15)
]);
const line33= new THREE.Line(lineGeometry33, lineMaterial);
scene.add(line33);


const lineGeometry34 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15, -1.15),
    new THREE.Vector3(-1.15, 1.15, -1.15)
]);
const line34= new THREE.Line(lineGeometry34, lineMaterial);
scene.add(line34);



const lineGeometry35 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, -1.15, 1.15),
    new THREE.Vector3(1.15, -1.15, 1.15)
]);
const line35= new THREE.Line(lineGeometry35, lineMaterial);
scene.add(line35);



const lineGeometry36 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, -1.15, -1.15),
    new THREE.Vector3(-1.15, -1.15, -1.15)
]);
const line36= new THREE.Line(lineGeometry36, lineMaterial);
scene.add(line36);