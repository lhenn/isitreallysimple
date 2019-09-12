export const createRecipeWithReview = recipe => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("recipes")
      .add({
        title: recipe.title,
        mealType: recipe.mealType,
        simpleCategories: recipe.simpleCategories,
        reviews: [
          {
            authorUsername: profile.username,
            authorID: authorId,
            createdAt: new Date(),
            simpleRating: recipe.simpleRating,
            tasteRating: recipe.tasteRating,
            comments: recipe.comments
          }
        ]
      })

      .then(() => {
        dispatch({ type: "CREATE_RECIPEWITHREVIEW", recipes: recipe });
      })
      .catch(err => {
        dispatch({ type: "CREATE_RECIPEWITHREVIEW_ERROR", err });
      });
  };
};

export const createReview = review => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const reviewRef = firestore.collection("recipes").doc(review.recipeID);

    reviewRef
      .update({
        reviews: firebase.firestore.FieldValue.arrayUnion({
          authorUsername: profile.username,
          authorID: authorId,
          createdAt: new Date(),
          simpleRating: review.simpleRating,
          tasteRating: review.tasteRating,
          comments: review.comments
        })
      })
      .then(() => {
        dispatch({ type: "CREATE_REVIEW", recipes: review });
        console.log("dispatch success");
      })
      .catch(err => {
        dispatch({ type: "CREATE_REVIEW_ERROR", err });
        console.log("dispatch error");
      });
  };
};
