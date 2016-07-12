import * as types from '../actions/actionTypes';

const initialState = {
    tabidx: 0,
    data: [],
    serviceData:{
    
    }
};

let  ranker = function(state = initialState, action = {}) {
    switch (action.type) {
    case types.WEEK_STAR_RANK:
        return {
            ...state,
            idx:0,
            data:state['serviceData']['week_star_ranking_list']
        };
    case types.WEEK_SCORE_RANK:
        return {
            ...state,
            idx:0,
            data: state['serviceData']['week_score_ranking_list']
        };
    default:
        return state;
    }
}

export {
    ranker
};