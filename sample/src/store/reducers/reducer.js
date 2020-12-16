const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_DATA':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
