const lineMaterial = new THREE.LineBasicMaterial({
    color: '#00008B',
    linewidth: 10,
});

// Lines for the sides of the cube
const sideLineGeometries = [
    // Line 1
    new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, 0.38, -1.15),
        new THREE.Vector3(-1.15, 0.38, -1.15)
    ]),

    // Line 2
    new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, 0.38, 1.15),
        new THREE.Vector3(-1.15, 0.38, 1.15)
    ]),

    // Line 3
    new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, 0.38, 1.15),
        new THREE.Vector3(1.15, 0.38, -1.15)
    ]),

    // Line 4
    new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1.15, 0.38, 1.15),
        new THREE.Vector3(-1.15, 0.38, -1.15)
    ]),

    // Line 5 (Bottom)
    new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, -0.38, 1.15),
        new THREE.Vector3(-1.15, -0.38, 1.15)
    ]),

    // Line 6
    new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, -0.38, -1.15),
        new THREE.Vector3(1.15, -0.38, 1.15)
    ]),

    // Line 7
    new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.15, -0.38, -1.15),
        new THREE.Vector3(-1.15, -0.38, -1.15)
    ]),

    // Line 8
    new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1.15, -0.38, 1.15),
        new THREE.Vector3(-1.15, -0.38, -1.15)
    ])
];

sideLineGeometries.forEach((geometry) => {
    const sideLine = new THREE.Line(geometry, lineMaterial);
    scene.add(sideLine);
});

// Vertical Lines (Edges)
// Line 9
const lineGeometry9 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15, -0.38),
    new THREE.Vector3(-1.15, -1.15, -0.38)
]);
const line9 = new THREE.Line(lineGeometry9, lineMaterial);
scene.add(line9);

// Line 10
const lineGeometry10 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15, 0.38),
    new THREE.Vector3(-1.15, -1.15, 0.38)
]);
const line10 = new THREE.Line(lineGeometry10, lineMaterial);
scene.add(line10);

// Line 11
const lineGeometry11 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1.15, 1.15, 0.38),
    new THREE.Vector3(1.15, 1.15, 0.38)
]);
const line11 = new THREE.Line(lineGeometry11, lineMaterial);
scene.add(line11);

// Line 12
const lineGeometry12 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15, 0.38),
    new THREE.Vector3(1.15, -1.15, 0.38)
]);
const line12 = new THREE.Line(lineGeometry12, lineMaterial);
scene.add(line12);

// Line 13
const lineGeometry13 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15, -0.36),
    new THREE.Vector3(1.15, -1.15, -0.36)
]);
const line13 = new THREE.Line(lineGeometry13, lineMaterial);
scene.add(line13);

// Line 14
const lineGeometry14 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, 1.15, -0.38),
    new THREE.Vector3(-1.15, 1.15, -0.38)
]);
const line14 = new THREE.Line(lineGeometry14, lineMaterial);
scene.add(line14);

// Horizontal Lines (Edges)
// Line 15
const lineGeometry15 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, -1.15, -0.38),
    new THREE.Vector3(-1.15, -1.15, -0.38)
]);
const line15 = new THREE.Line(lineGeometry15, lineMaterial);
scene.add(line15);

// Line 16
const lineGeometry16 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.15, -1.15, 0.36),
    new THREE.Vector3(-1.15, -1.15, 0.36)
]);
const line16 = new THREE.Line(lineGeometry16, lineMaterial);
scene.add(line16);

// Line 17
const lineGeometry17 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0.36, 1.15, 1.15),
    new THREE.Vector3(0.36, -1.15, 1.15)
]);
const line17 = new THREE.Line(lineGeometry17, lineMaterial);
scene.add(line17);

// Line 18
const lineGeometry18 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.36, 1.15, 1.15),
    new THREE.Vector3(-0.36, -1.15, 1.15)
]);
const line18 = new THREE.Line(lineGeometry18, lineMaterial);
scene.add(line18);

// Line 19
const lineGeometry19 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.36, 1.15, -1.15),
    new THREE.Vector3(-0.36, -1.15, -1.15)
]);
const line19 = new THREE.Line(lineGeometry19, lineMaterial);
scene.add(line19);

// Line 20
const lineGeometry20 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0.36, 1.15, -1.15),
    new THREE.Vector3(0.36, -1.15, -1.15)
]);
const line20 = new THREE.Line(lineGeometry20, lineMaterial);
scene.add(line20);

// Line 21
const lineGeometry21 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0.36, -1.15, 1.15),
    new THREE.Vector3(0.36, -1.15, -1.15)
]);
const line21 = new THREE.Line(lineGeometry21, lineMaterial);
scene.add(line21);

// Line 22
const lineGeometry22 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.36, -1.15, 1.15),
    new THREE.Vector3(-0.36, -1.15, -1.15)
]);
const line22 = new THREE.Line(lineGeometry22, lineMaterial);
scene.add(line22);

// Line 23
const lineGeometry23 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0.36, 1.15, 1.15),
    new THREE.Vector3(0.36, 1.15, -1.15)
]);
const line23 = new THREE.Line(lineGeometry23, lineMaterial);
scene.add(line23);

// Line 24
const lineGeometry24 = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.36, 1.15, 1.15),
    new THREE.Vector3(-0.36, 1.15, -1.15)
]);
const line24 = new THREE.Line(lineGeometry24, lineMaterial);
scene.add(line24);



