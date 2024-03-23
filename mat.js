
const { Engine, Render, World, Bodies, Runner } = Matter;

const engine = Engine.create();
const render = Render.create({
    element: document.body,
    engine: engine
});


const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });


World.add(engine.world, [boxA, boxB, ground]);

Runner.run(engine);

Render.run(render);
