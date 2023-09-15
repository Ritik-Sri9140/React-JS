// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
<Navbar title="TextUtils" aboutText="AboutUs"/>
<div className='container'>
  <TextForm heading='Enter the text analyze below'/>
</div>
<About/>

    </>
  );
}

export default App;
