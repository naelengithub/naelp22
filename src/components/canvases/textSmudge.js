let textTexture;
let shaderCanvas;
let shader;
let textGraphics;
let customFont;
const CANVAS_SIZE = 500;
const HALF_CANVAS = CANVAS_SIZE / 2;
const TEXT_SCALE = 2;

const vertexShader = `
precision highp float;
attribute vec3 aPosition;
attribute vec2 aTexCoord;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
varying vec2 vTexCoord;
void main() {
    vTexCoord = aTexCoord;
    vec4 position = vec4(aPosition, 1.0);
    gl_Position = uProjectionMatrix * uModelViewMatrix * position;
}`;

const fragmentShader = `
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 vTexCoord;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mousePos = u_mouse / u_resolution.xy;
    float dist = distance(uv, mousePos);

    float maxDistortion = 0.05;
    float timeSpeed = 2.0;

    // 🌀 Distance-based effect that fades out (unsmudges) smoothly
    float effect = smoothstep(0.4, 0.0, dist);
    float pulse = 0.5 + 0.5 * sin(u_time * 0.8);
    float distortionStrength = maxDistortion * effect * pulse;

    vec2 distortion = vec2(
        sin(uv.y * 20.0 + u_time * timeSpeed) * distortionStrength,
        cos(uv.x * 20.0 + u_time * timeSpeed) * distortionStrength
    );

    vec2 distortedUV = vTexCoord + distortion;

    // Simple blur for smooth edges
    vec4 texColor = vec4(0.0);
    float total = 0.0;
    float step = 0.0015;

    for(float x = -1.0; x <= 1.0; x += 1.0) {
        for(float y = -1.0; y <= 1.0; y += 1.0) {
            vec2 offset = vec2(x, y) * step;
            float weight = 1.0 - length(offset) * 0.5;
            texColor += texture2D(u_texture, distortedUV + offset) * weight;
            total += weight;
        }
    }
    texColor /= total;

    // Gamma correction + smoothing
    float gamma = 1.8;
    texColor.rgb = pow(texColor.rgb, vec3(1.0/gamma));
    float smoothing = 0.95;
    texColor.a = smoothstep(1.0 - smoothing, 1.0 + smoothing, texColor.a);

    gl_FragColor = texColor;
}`;

function preload() {
  customFont = "Helvetica";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);

  shaderCanvas = createGraphics(CANVAS_SIZE, CANVAS_SIZE, WEBGL);
  shader = shaderCanvas.createShader(vertexShader, fragmentShader);

  textGraphics = createGraphics(
    CANVAS_SIZE * TEXT_SCALE,
    CANVAS_SIZE * TEXT_SCALE
  );
  textGraphics.pixelDensity(2);
  textGraphics.background(255);
  textGraphics.textFont(customFont);
  textGraphics.textSize(90 * TEXT_SCALE);
  textGraphics.textAlign(CENTER, CENTER);
  textGraphics.fill(0);

  // Smooth text rendering
  textGraphics.drawingContext.imageSmoothingEnabled = true;
  textGraphics.drawingContext.imageSmoothingQuality = "high";
  textGraphics.drawingContext.textRendering = "geometricPrecision";
  textGraphics.drawingContext.fontKerning = "normal";

  textGraphics.push();
  textGraphics.text(
    "anaelisa",
    textGraphics.width / 2,
    textGraphics.height / 2
  );
  textGraphics.pop();

  textTexture = textGraphics;
}

function draw() {
  background(255);
  const canvasX = windowWidth / 2 - HALF_CANVAS;
  const canvasY = windowHeight / 2 - HALF_CANVAS;

  updateShader(canvasX, canvasY);
  renderCanvas(canvasX, canvasY);
}

function updateShader(canvasX, canvasY) {
  shaderCanvas.shader(shader);
  shader.setUniform("u_resolution", [CANVAS_SIZE, CANVAS_SIZE]);
  shader.setUniform("u_time", millis() / 1000.0);
  shader.setUniform("u_texture", textGraphics);

  const mousePos = calculateMousePosition(canvasX, canvasY);
  shader.setUniform("u_mouse", [
    mousePos.x * CANVAS_SIZE * TEXT_SCALE,
    mousePos.y * CANVAS_SIZE * TEXT_SCALE,
  ]);

  shaderCanvas.rect(-HALF_CANVAS, -HALF_CANVAS, CANVAS_SIZE, CANVAS_SIZE);
}

function calculateMousePosition(canvasX, canvasY) {
  let relativeX = mouseX - canvasX;
  let relativeY = mouseY - canvasY;
  relativeX = constrain(relativeX, 0, CANVAS_SIZE);
  relativeY = constrain(relativeY, 0, CANVAS_SIZE);
  return {
    x: relativeX / CANVAS_SIZE,
    y: 1.0 - relativeY / CANVAS_SIZE,
  };
}

function renderCanvas(canvasX, canvasY) {
  image(shaderCanvas, canvasX, canvasY);
  noFill();
  stroke(220);
  strokeWeight(2);
  rect(canvasX, canvasY, CANVAS_SIZE, CANVAS_SIZE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
