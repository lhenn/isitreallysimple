import React, { Component } from 'react'
import Prompt from '../Prompt'
import SearchRecipe from '../SearchRecipe'
import CreateRecipeWithReview from './CreateRecipeWithReview'



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
    handleNoResults = (title) => {
        this.setState({
            title:title,
            stage: 'create-recipe-review'
        })
    }
    handleReviewSubmit = (stage, title) => {
        this.setState({
            stage: 'final'
        });
    }
    render() {
        switch(this.state.stage) {
            case 'initial' :
                return (
                    <>
                    <Prompt message="Check if the recipe you want to review already exists." />
                    <SearchRecipe onNoResults={this.handleNoResults} />
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

export default ReviewRecipeContent