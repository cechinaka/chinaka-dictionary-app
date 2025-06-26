
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className='App-Header'>
      Dictionary
      </header>
      <main className='App-Main'>
        <Dictionary />
      </main>

      <footer className='App-Footer'>This dictionary app was coded by {" "}
        <a href="https://github.com/cechinaka" target="_blank " rel="noreferrer">Christie Chinaka</a> 
        {" "}on {" "}<a href="https://github.com/cechinaka/chinaka-dictionary-app" target="_blank" rel="noreferrer">GitHub</a> 
        {" "}and hosted on {" "}
        <a href="https://animated-custard-47288e.netlify.app/" target="_blank" rel="noreferrer">Netlify</a></footer>.
    </div>
  );
}

export default App;
