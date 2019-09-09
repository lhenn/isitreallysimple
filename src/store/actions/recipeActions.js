export const createReview = (review) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
  
      firestore.collection('recipes').add({
        ...review, // equivalent to {title: project.title, content: project.content}
        authorUsername: profile.username,
        authorID: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({type: 'CREATE_REVIEW', review: review});
      }).catch((err) => {
        dispatch({type: 'CREATE_REVIEW_ERROR', err});
      })
  
    }
  };
  