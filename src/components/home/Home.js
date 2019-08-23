import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import RecipeList from '../recipes/RecipeList';

class Home extends Component {

  render() {
    console.log(this.props.recipes);
    return(
      <div>this is the home component
        <RecipeList recipes={this.props.recipes}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Home);
