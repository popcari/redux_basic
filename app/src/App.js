import "./App.css";
import Profile from "./component/Profile";
import Login from "./component/Login";
import ChangColor from "./component/ChangColor";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Profile></Profile>
      <ChangColor></ChangColor>
    </div>
  );
}

export default App;
