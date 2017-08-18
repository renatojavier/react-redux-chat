/**
 * Action Types
 */
export const Actions = {
    POST_MSG: 'POST_MSG'
};

/**
 * Action Creators
 */
export const ActionPostMessage = (id, username, message) => {
    return {
        type: Actions.POST_MSG,
        id: id,
        username: username,
        message: message
    }
}