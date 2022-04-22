import "./App.scss";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import data from "./data";

function App() {
	return (
		<div className='App'>
			<Header />
			<img className='ellipse' src='./assets/ellipse.svg' />

			<div className='filters'>
				<div className='filter'>
					<p>CHECK-IN</p>
					<h3>21 Dec 2021</h3>
				</div>
				<div className='filter'>
					<p>CHECK-IN</p>
					<h3>21 Dec 2021</h3>
				</div>
				<div className='filter'>
					<p>CHECK-IN</p>
					<h3>21 Dec 2021</h3>
				</div>
				<div className='btn'>Search</div>
			</div>
			<div className='cards'>
				{data.map((item, idx) => (
					<Card key={idx} item={item} />
				))}
			</div>
		</div>
	);
}

export default App;
