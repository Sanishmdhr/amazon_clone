export const initialState = {
  basket: [{
    id: "123",
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    price: 11.96,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"
  },
  {
    id: "123",
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    price: 11.96,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"
  }],
  user: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":

      return {
        ...state,
        basket: [...state.basket, action.item]
      }


    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product with id:${action.id} as it is not in the basket.`
        )
      }
      return { ...state, basket: newBasket }


    default:
      return state;
  }
}


export default reducer;