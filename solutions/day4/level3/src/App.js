import "./App.css";
import UserProfile from "./Components/UserProfile/UserProfile";
// import ColorGenerator from "./Components/ColorGerenrator/ColorGenerator";
function App() {
  return (
    <div className="App">
      <div className="colorGeneratorPage">
        {/* <ColorGenerator />
      <ColorGenerator />
      <ColorGenerator />
      <ColorGenerator />
      <ColorGenerator /> */}
      </div>
      <div className="userProfilePage">
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
