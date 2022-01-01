
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "welcome to the new blog";
  const likes = 50;
  const person = { name: 'yoshi', age: 30 };
  const link = "https://google.com.sg";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
