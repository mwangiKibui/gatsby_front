import {newsPending,newsSuccess} from './actions';
import axios from 'axios';

const url = 'https://karuapi.herokuapp.com/api/trends/fetchTrends';

export function fetchNews(){
    return async dispatch => {
        dispatch(newsPending());
        let res = await axios.get(`${url}`).catch(console.log);
        return dispatch(newsSuccess(res.data.message));
    }
}