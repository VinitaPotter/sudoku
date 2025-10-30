import "./App.css";
import Profile from "./views/profile";
import AI from "./views/ai";
import Grid from "./views/grid";

function App() {
  return (
    <div className="flex w-screen justify-between">
      <Profile></Profile>
      <Grid></Grid>
      <AI></AI>
    </div>
  );
}

export default App;
