import React, { Component } from 'react'
import Prompt from '../Prompt'
import SearchRecipe from '../SearchRecipe'
import CreateRecipe from './CreateRecipe'
import CreateReview from './CreateReview'



class ReviewRecipe extends Component {
    state = {
        stage:'',
        title:''
    }
    componentDidMount() {
        this.setState({
            stage:'initial'
        });
    }
    handleChange = (stage, title) => {
        this.setState({
            stage: stage,
            title: title
        });
    }
    render() {
        switch(this.state.stage) {
            case 'initial' :
                return (
                    <>
                    <Prompt message="Check if the recipe you want to review already exists." />
                    <SearchRecipe onStageChange={this.handleChange} />
                    </>

                );
            case 'create-recipe':
                return  (
                    <>
                    <Prompt message="No one has reviewed this recipe yet! Do us a favor and add the recipe information in, exactly as it is in the book." />
                    <CreateRecipe onStageChange={this.handleChange} title={this.state.title}/>
                    </>
                )
            case 'create-review':
                return  (
                    <>
                    <Prompt message="Recipe added. Now give us your take on it." />
                    <CreateReview onStageChange={this.handleChange}/>
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

export default ReviewRecipe