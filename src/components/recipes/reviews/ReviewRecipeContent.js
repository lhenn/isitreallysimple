import React, { Component } from 'react'
import Prompt from '../Prompt'
import SearchRecipe from '../SearchRecipe'
import SearchRecipeInput from '../SearchRecipeInput';
import RecipeList from '../RecipeList'
import CreateRecipeWithReview from './CreateRecipeWithReview'
import { createRecipeWithReview } from "../../../store/actions/recipeActions"
import { connect } from "react-redux"
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { compose } from "redux";
import { Button} from 'react-bootstrap'
import { Redirect} from 'react-router-dom';



class ReviewRecipeContent extends Component {
    state = {
        stage:'',
        title:''
    }
    componentDidMount() {
        this.setState({
            stage:'initial'
        });
    }
    handleTitleSearch = e => {
        this.setState({
            title: e.target.value
        })
    }
    filterByTitle = recipes => {
        if(this.state.title !== '') {
            let titleInput = new RegExp(this.state.title, "i");
            return recipes.filter(recipe => titleInput.test(recipe.title));
        }
      }
    handleNoResults = () => {
        this.setState({
            stage:'create-recipe-review'
        })
    }
    handleReviewSubmit = (recipe) => {
        this.props.createRecipeWithReview(recipe)
        this.setState({
            stage: 'final'
        });
    }
    render() {
        const { auth } = this.props.auth;

        if( !this.props.auth.uid) return <Redirect to='/login' />
        const recipeList = !isLoaded(this.props.recipes) ? (
            "Loading"
          ) :  (
            <>
            <RecipeList recipes={this.filterByTitle(this.props.recipes)} />
            <div>Not finding what you're looking for?
            <Button onClick={this.handleNoResults}> Continue ></Button>
            </div>
            </>
          );
        switch(this.state.stage) {
            case 'initial' :
                return (
                    <>
                    <Prompt message="Thank you for contributing to the mission! Let's start by checking if the recipe you want to review already exists here." />
                    <SearchRecipeInput onChange={this.handleTitleSearch}/>
                    {recipeList}
                    </>

                );
            case 'create-recipe-review':
                return  (
                    <>
                    <Prompt message="No one has reviewed this recipe yet! Do us a favor and add the recipe information in, exactly as it is in the book." />
                    <CreateRecipeWithReview onReviewSubmit={this.handleReviewSubmit} title={this.state.title}/>
                    </>
                )
            case 'final':
                return  (
                    <Prompt message="Thanks for your review!" />
                    // some link to recipe here
                )
            default :
                return ( <Prompt message="Sorry, something went wrong. Please try again later" /> )
        }
        
    }
}
const mapStateToProps = state => {
    return {
      recipes: state.firestore.ordered.recipes,
      auth: state.firebase.auth
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      createRecipeWithReview: recipe => dispatch(createRecipeWithReview(recipe))
    };
  };
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    firestoreConnect([{ collection: "recipes" }])
    )(ReviewRecipeContent);
