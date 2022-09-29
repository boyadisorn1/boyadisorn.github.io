import './App.css';
import Header from './component/Header';
import Profile from './component/Profile';
import Additional from './component/Additional'
import Portfolio from './component/Portfolio';
import Footer from './component/Footer';


function App() {
  return (
    <div className= "App" style={{ 
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url(/Background.svg)" }}>
    <Header/>
    <Profile/>
    <Additional/>
    <Portfolio/>
    <Footer/>
    </div>
  );
} 

export default App;
