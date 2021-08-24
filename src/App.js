import Navbar from './Navbar'
import './App.css';

function App() {
  const title="Welcome the new blog";
   const likes=50;
  return (
    <div className="App">
      <Navbar/>
    <div className="content">
      <h1>{title}</h1>
      <p>{likes} times</p>
    </div>
    </div>
  );
}

export default App;
