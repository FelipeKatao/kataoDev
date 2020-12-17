import './CSS/App.css';
import MenuFixed from './components/MenuFixed.js'
import { Switch, Route} from 'react-router-dom';
import  About from './pages/About.js'
import MainPage from './pages/Mainpage.js'

function App() {
  return (
    <>
    <MenuFixed></MenuFixed>
    <Switch>
      <Route path='/' component={MainPage}></Route>
      <Route path='/about' component={About}></Route>
    </Switch>
    </>   
  );
}
  
export default App;
 