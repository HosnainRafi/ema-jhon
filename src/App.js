import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';


function App() {
  return (
    <div className = "main-body">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
