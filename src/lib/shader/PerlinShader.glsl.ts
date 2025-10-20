/* eslint-disable import/no-anonymous-default-export */
const fragmentShader = /* glsl */ `
precision mediump float;
uniform vec2 noiseOffset;
uniform float uThreshold; // 0...1
uniform float uTime;
varying vec2 vTexCoord;

float random1(in float x) {
  return fract(sin(x) * 10000.0);
}

float random2(in vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random2(in float x, in float y) {
  return fract(sin(dot(vec2(x, y), vec2(12.9898, 78.233))) * 43758.5453123);
}

// Perlin noise ported from p5
float scaled_cosine(in float f) {
  return 0.5 * (1.0 - cos(f * 3.14159265359));
}

float p5PerlinNoise(float x, float y, int noct, float falloff) {
  float xif = floor(x);
  float yif = floor(y);
  float xf = fract(x);
  float yf = fract(y);
  float rxf, ryf;
  float ampl = 0.5;
  float n1, n2;
  float r = 0.0;

  for (int o = 0; o < 10; o++) {
    if (o >= noct) {
      break;
    }

    rxf = scaled_cosine(xf);
    ryf = scaled_cosine(yf);

    n1 = random2(xif, yif);
    n1 += rxf * (random2(xif + 1.0, yif) - n1);
    n2 = random2(xif, yif + 1.0);
    n2 += rxf * (random2(xif + 1.0, yif + 1.0) - n2);
    n1 += ryf * (n2 - n1);

    r += n1 * ampl;
    ampl *= falloff;

    xif *= 2.0;
    xf *= 2.0;
    yif *= 2.0;
    yf *= 2.0;

    if (xf >= 1.0) {
      xif++;
      xf--;
    }
    if (yf >= 1.0) {
      yif++;
      yf--;
    }
  }
  return r;
}

// =====================================================
// ORGANIC MOVEMENT LAYER
// =====================================================
void main() {
  vec2 coord = vTexCoord;

  // 1. slow background drift
  vec2 drift = vec2(sin(uTime * 0.015), cos(uTime * 0.01)) * 0.15;

  // 2. local cursor influence
  float dist = distance(coord, noiseOffset * 0.5 + 0.5);
  float influence = smoothstep(0.15, 0.0, dist);

  vec2 warp = vec2(
    sin(coord.y * 10.0 + uTime * 0.8),
    cos(coord.x * 10.0 + uTime * 0.8)
  ) * 0.08 * influence;

  // add subtle “memory” — soft pulsing motion
  warp *= 0.9 + 0.1 * sin(uTime * 0.5);

  // final coordinate
  vec2 ripple = vec2(
    sin(coord.y * 40.0 + uTime * 2.0),
    cos(coord.x * 40.0 + uTime * 2.0)
  ) * 0.015;

  vec2 nCoord = coord + drift + warp + ripple;
 
  // 3. the perlin blob field
  float sc = 3.5;
  float gray = p5PerlinNoise(sc * nCoord.x, sc * nCoord.y, 5, 0.5);

  // 4. breathing tone
  gray += 0.05 * sin(uTime * 0.25);

  // 5. thresholded blobs
  gray = smoothstep(uThreshold - 0.1, uThreshold + 0.1, gray);

  vec3 color = mix(vec3(1.1, 0.98, 1.12), vec3(0.35, 0.65, 0.85), gray); // green → red
  gl_FragColor = vec4(color, 1.0);

}
`;

export default fragmentShader;
