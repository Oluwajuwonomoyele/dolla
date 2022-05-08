import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
