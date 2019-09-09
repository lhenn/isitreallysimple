import React, {Component} from 'react'

class SimpleCategoryButton extends Component {
  state = {
    active:false
  }
  handleClick = (e) => {
    this.setState((prevState) => ({
      active: !prevState.active
    }));
    console.log("i was clicked!", this.state.active)
  }
  render() {
    const catClass = this.state.active ? `simpleCategory ${this.props.category} active` : `simpleCategory ${this.props.category}`;
    // let catClass = 'simpleCategory' + ' ' + this.props.category;
    // if(this.state.active) catClass = catClass + ' ' + 'active';
    return (
      <button className={catClass} onClick={this.handleClick}>{this.props.category}</button>
    )
  }
}
export default SimpleCategoryButton
