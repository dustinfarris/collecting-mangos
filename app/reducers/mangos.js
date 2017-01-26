/**
 * mangos reducer
 */
const initialState = {
  numCollectedMangos: 0,
  mangoPositionX: 100
};


export default (state=initialState, action={}) => {
  switch (action.type) {
    case "COLLECT_MANGO":
      return {
        ...state,
        numCollectedMangos: state.numCollectedMangos + 1
      };
    case "MOVE_MANGO":
      return {
        ...state,
        mangoPositionX: Math.floor(Math.random() * 600)
      };
    default:
      return state;
  }
}
