#iChannel0 "./image.png"

uniform float time;
varying vec2 vUv;

void main() {
	vec2 p = vUv.xy;

	p.x += 0.1 * cos(time);
	p.y += 0.1 * sin(time);

	gl_FragColor = texture2D(iChannel0, p);
}
