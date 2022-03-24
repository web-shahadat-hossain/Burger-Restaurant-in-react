import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderBG from './components/SliderBG/SliderBG';
import Shop from './components/Main/Shop/Shop';


function App() {
  return (
    <div>
      <Header></Header>
      <SliderBG></SliderBG>
      <Shop></Shop>
    </div>
  );
}

export default App;
