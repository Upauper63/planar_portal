import PlaneChase from './planechase.json'

function App() {
	const idx = Math.floor(Math.random() * PlaneChase.length);
	const Plane = PlaneChase[idx];
	const { innerWidth: width, innerHeight: height } = window;
	console.log(width, height);
  	return (
		<div style={{'position': 'relative'}}>
			<p style={{'background': 'white', 'opacity': '0.8', 'borderRadius': '40px', 'whiteSpace': 'preWrap', 'padding': '80px', 'position': 'absolute', 'top': '40%', 'left': '50%', 'transform': 'translate(-50%,-50%)', 'fontSize': '6em'}}>{`${Plane.text_jp}`}</p> */}
			<div style={{ 'textAlign': 'center' }}>
				<img style={{'width': '100%vh', 'height': '100vh', 'objectFit': 'contain'}} src={`${process.env.PUBLIC_URL}/img/${Plane.name.replace(/\s+/g, '')}.jpg`}/>
			</div>
		</div>	
  	);
}

export default App;
