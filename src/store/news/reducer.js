import {NEWS_PENDING,NEWS_SUCCESS} from "./types";
const initialState = {
    pending:false,
    news:[]
};
export function newsReducer(state=initialState,action){
    switch(action.type){
        case NEWS_PENDING:
            return {
                ...state,
                pending:true
            }
        case NEWS_SUCCESS:
            return {
                ...state,
                pending:false,
                news:action.payload
            }
        default:
            return {
                ...state
            }
    }

};
export const getNewsData = state => state.news;