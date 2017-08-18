import { Actions } from '../actions/IndexAction';

export const MessageReducer = (state = [], action) => {
    switch (action.type) {
        case Actions.POST_MSG:
            return [
                ...state,
                {
                    id: action.id,
                    username: action.username,
                    message: action.message,
                    type: action.type
                }
            ];
        default:
            return state;
    }
};

