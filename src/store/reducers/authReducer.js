const initState = {
  authError:null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          authError: null
        }
      case 'LOGOUT_SUCCESS':
        return {
          ...state
        }
      default:
        return state;
  }
}

export default authReducer;
