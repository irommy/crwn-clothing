import reactDom from 'react-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/shop/shop';




function App() {
  return (
    <div>
    <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/shop" component={Shop}/>
    </Switch>
   
    
    
    </div>
  );
}

export default App;
