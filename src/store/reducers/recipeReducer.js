const initState = {
  recipes: []
}

const recipeReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_REVIEW':
      return state;
    case 'CREATE_REVIEW_ERROR':
      return state;
    default:
      return state;
  }
}

export default recipeReducer;
