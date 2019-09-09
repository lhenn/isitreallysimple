import React, { Component }  from 'react'
import {Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { createReview } from '../../store/actions/recipeActions'
import { Redirect} from 'react-router-dom'

class CreateReview extends Component {
    state = {
        title:'',
        simpleCategories:[],
        mealType:'',
        simpleRating:true,
        tasteRating:null,
        comments:''
    }
    handleChange = (e) => {
        console.log(this.state);
        this.setState({
            [e.target.name]:e.target.value
          })
    }
    handleCheckChange = (e) => {
        let arr = [...this.state.simpleCategories];

        if(arr.includes(e.target.value)) arr.splice(arr.indexOf(e.target.value), 1);
        else arr.push(e.target.value);

        this.setState({
            simpleCategories:arr
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createReview(this.state);
    }
    render() {
        
        const { auth } = this.props;
        if( !auth.uid) return <Redirect to='/login' />

        const mealTypes = require('./RecipeData').mealTypes;
        const simpleCategories = require('./RecipeData').simpleCategories;
        const simpleRatings = require('./RecipeData').simpleRatings;
        const tasteRatings = require('./RecipeData').tasteRatings;
        console.log('auth',auth);

        return(
            <div>
                <h5>Review a Recipe</h5>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Recipe Title</Form.Label>
                        <Form.Control type='text' name='title' onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Meal Type</Form.Label>
                        <Form.Control as='select' name="mealType" onChange={this.handleChange}>
                        {mealTypes.map(m => {
                            return( <option key={m} value={m}>{m}</option>)
                        })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        {simpleCategories.map(c => {
                            return (<Form.Check key={c} inline label={c} type='checkbox' name="simpleCategory" value={c} onClick={this.handleCheckChange}/>)
                        })}
                    </Form.Group>
                    <Form.Group/>
                        {simpleRatings.map(s => {
                            return (<Form.Check key={s} inline label={s} type='radio' name="simpleRating" value={s} onClick={this.handleChange}/>)
                        })}
                    <Form.Group/>
                    <Form.Group/>
                        <Form.Label>Taste Rating</Form.Label>
                        <Form.Control as='select' name='tasteRating' onChange={this.handleChange}>
                            {tasteRatings.map(r => {
                                return(<option key={r} value={r}>{r}</option>)
                            })}
                        </Form.Control>
                    <Form.Group/>
                    <Form.Group>
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as="textarea" rows="3" name="comments" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Post Review
                    </Button>
                </Form>
            </div> 
        )
    }
}


const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      createReview: (review) => dispatch(createReview(review))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
