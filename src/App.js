import logo from './logo.svg';
import './App.css';

function Header(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  return <Header name='Main Heading' />;
}

export default App;