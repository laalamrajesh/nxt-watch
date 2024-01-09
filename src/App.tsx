import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/HomePage';
import Login from './components/Login/LoginPage';
import Trending from './components/Trending/TrendingPage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/trending" component={Trending}/>
    </Switch>
    
    </BrowserRouter>
      
  );
};

export default App;
