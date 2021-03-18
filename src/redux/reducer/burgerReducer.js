const INGREDIENT_PRICE = { salad: 1, cheese: 1.5, meat: 3, bacon: 1 };

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },
  totalPrice: 9,
};
const reducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "ADD_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredient],
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] - 1,
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredient],
    };
  }
  return state;
};

export default reducer;
