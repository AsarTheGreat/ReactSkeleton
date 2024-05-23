import Todo from "./components/Todo";
import Header from './components/Header';
import './css/App.css';


export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todo></Todo>
    </div>
  );
}
