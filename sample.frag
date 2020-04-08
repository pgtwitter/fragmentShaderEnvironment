#iChannel0 "./image.png"
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D(iChannel0, vUv);
}
