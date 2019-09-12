const initState = {
  recipes: []
}

const recipeReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_RECIPEWITHREVIEW':
      return state;
    case 'CREATE_RECIPEWITHREVIEW_ERROR':
      return state;
    case 'CREATE_REVIEW':
      return state;
    case 'CREATE_REVIEW_ERROR':
      return state;
    default:
      return state;
  }
}

export default recipeReducer;
