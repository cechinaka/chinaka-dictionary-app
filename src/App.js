import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className='App-Header'>
      Dictionary
      <h4>Using the <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/169/485/original/SheCodes_Logo.png?1751481705" alt="SheCodes Logo" width="35" />
      <a href="https://shecodes.io" target="_blank" rel="noreferrer">SheCodes</a> Dictionary API</h4>
      </header>
      <main className='App-Main'>
        <Dictionary defaultSearchWord="pool" />
      </main>

      <footer className='App-Footer'>This dictionary app was coded by {" "}
        <a href="https://github.com/cechinaka" target="_blank " rel="noreferrer">Christie Chinaka</a> 
        {" "}on {" "}<a href="https://github.com/cechinaka/chinaka-dictionary-app" target="_blank" rel="noreferrer">GitHub</a> 
        {" "}and hosted on {" "}
        <a href="https://animated-custard-47288e.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
      </footer>.
    </div>
  );
}

export default App;
