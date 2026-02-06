import "./App.css";
import { Person } from "./Person";


const movies = ["Fast 5", "Fast 6", "Fast 7"];
function App() {
  return (
    <ul>
      {movies.map((movie,index) => (
        <li key = {index}>{movie}</li>
      ))}
    </ul>
  );
}
export default App;