import {GET_CATS_BY_CATEGORY} from "../../types";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CATS_BY_CATEGORY:
            return {
                ...state,
                cats: action.payload
            };
        default:
            return state;
    }
}