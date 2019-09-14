import {NEWS_PENDING,NEWS_SUCCESS} from './types';

export function newsPending(){
    return {
        type:NEWS_PENDING
    }
};
export function newsSuccess(data){
    return {
        type:NEWS_SUCCESS,
        payload:data
    }
};