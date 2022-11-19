import {GET_CATS_BY_CATEGORY} from "../../types";

export const getCats = (params) => {
    return {
        type: GET_CATS_BY_CATEGORY,
        payload: {
            url: `/images/search?limit=10&page=${params.page || 1}&category_ids=${params.id || 1}`
        }
    }
}