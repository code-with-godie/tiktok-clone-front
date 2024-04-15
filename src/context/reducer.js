import { ACTIONS } from './actions';
import {
    follow,
    get_user,
    login,
    logout,
    register,
    handleLoginModel,
    fetch_error,
    fetch_stop,
    fetch_start,
    updateUser,
    closeToast,
    openToast,
    handleCommentModel,
    toggleBlockedUser,
    updateSocket,
    updateOnlineUsers,
    updateNotifications,
    updatedDarkmode,
    updatePost,
} from './appControllers';

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.toggle_Login_Modal:
            return handleLoginModel(state);
        case ACTIONS.LOGIN:
            return login(state, action.payload);
        case ACTIONS.register:
            return register(state, action.payload);
        case ACTIONS.get_user:
            return get_user(state);
        case ACTIONS.follow:
            return follow(state, action.payload);
        case ACTIONS.FETCH_START:
            return fetch_start(state);
        case ACTIONS.FETCH_STOP:
            return fetch_stop(state);
        case ACTIONS.FETCH_ERROR:
            return fetch_error(state, action.payload);
        case ACTIONS.UPDATE_USER:
            return updateUser(state, action.payload);
        case ACTIONS.CLOSE_TOAST:
            return closeToast(state);
        case ACTIONS.OPEN_TOAST:
            return openToast(state, action.payload);
        case ACTIONS.HANDLE_COMMENT_MODEL:
            return handleCommentModel(state);
        case ACTIONS.BLOCK_USER:
            return toggleBlockedUser(state, action.payload);
        case ACTIONS.UPDATE_ONLINE_USERS:
            return updateOnlineUsers(state, action.payload);
        case ACTIONS.UPDATE_SOCKET:
            return updateSocket(state, action.payload);
        case ACTIONS.UPDATE_NOTIFICATIONS:
            return updateNotifications(state, action.payload);
        case ACTIONS.UPDATE_POST:
            return updatePost(state, action.payload);
        case ACTIONS.UPDATE_DARKMODE:
            return updatedDarkmode(state);
        case ACTIONS.LOGOUT:
            return logout(state);
        default:
            throw new Error('Unhandled action type: ' + action.type);
    }
};
