import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation'
import Home from './components/home/Home'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import About from './components/About'
import Recipes from './components/recipes/Recipes'
import RecipeDetails from './components/recipes/RecipeDetails'
import ReviewRecipe from './components/recipes/reviews/ReviewRecipe'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route exact path='/' component={Recipes} />
            <Route path='/about' component={About} />
            <Route path='/recipe/:id' component={RecipeDetails} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/reviewRecipe' component={ReviewRecipe}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
