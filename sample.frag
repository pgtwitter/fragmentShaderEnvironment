#iChannel0 "./image.png"

uniform float time;
// uniform vec2 iResolution;
varying vec2 vUv;

void main() {
	vec2 p = vUv.xy;
	// vec2 p = gl_FragCoord.xy / iResolution.xy;

	p.x += 0.1 * cos(time);
	p.y += 0.1 * sin(time);

	gl_FragColor = texture2D(iChannel0, p);
}
