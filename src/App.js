import PlaneChase from './planechase.json'

function App() {
	const idx = Math.floor(Math.random() * PlaneChase.length);
	const Plane = PlaneChase[idx];
  	return (
		<div style={{'position': 'relative'}}>
			<p style={{'background': 'white', 'opacity': '0.7', 'borderRadius': '8px', 'whiteSpace': 'preWrap', 'padding': '8px', 'position': 'absolute', 'top': '40%', 'left': '50%', 'transform': 'translate(-50%,-50%)', 'fontSize': '25px', 'width': '80%'}}>{`${Plane.text_jp}`}</p>
			<div style={{ 'textAlign': 'center' }}>
				<img style={{'width': '100%'}} src={`${process.env.PUBLIC_URL}/img/${Plane.name.replace(/\s+/g, '')}.jpg`}/>
			</div>
		</div>	
  	);
}

export default App;
