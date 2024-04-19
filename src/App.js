import logo from './logo.svg';
import './App.css';
import Header from'./components/Header.js';
import Footer from './components/Footer.js';
import data from './DataBySection.json'

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      {/* <Hero /> */}
      <Footer data={data}/>
    </div>
  );
}

export default App;
