import React, { createContext, useContext, useEffect } from 'react';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { ACTIONS } from './actions';
import { updateData } from '../api/apiCalls';

const AppContext = createContext({ user: null, token: null });
export const AppContextProvider = ({ children }) => {
    const initialProps = {
        user: null,
        onlineUsers: [],
        notifications: [],
        posts: [],
        locked: true,
        initialAppLoading: true,
        loading: false,
        darkMode: true,
        error: null,
        token: null,
        show_Login_Model: true,
        show_comment_model: false,
        socket: null,
    };
    const [state, dispatch] = useReducer(reducer, initialProps);

    //controllers
    const updateOnlineUsers = payload => {
        const users = payload?.filter(user => user.id !== state.user?._id);
        dispatch({ type: ACTIONS.UPDATE_ONLINE_USERS, payload: users });
    };
    const updateNotifications = payload => {
        dispatch({ type: ACTIONS.UPDATE_NOTIFICATIONS, payload });
    };
    const closeToast = () => {
        dispatch({ type: ACTIONS.CLOSE_TOAST });
    };
    const updatePost = payload => {
        dispatch({ type: ACTIONS.UPDATE_POST, payload });
    };
    const updateDarkmode = () => {
        dispatch({ type: ACTIONS.UPDATE_DARKMODE });
    };
    const setSocket = payload => {
        dispatch({ type: ACTIONS.UPDATE_SOCKET, payload });
    };
    const openToast = payload => {
        dispatch({ type: ACTIONS.OPEN_TOAST, payload });
    };
    const handleCommentModel = () => {
        dispatch({ type: ACTIONS.HANDLE_COMMENT_MODEL });
    };
    const login = payload => {
        dispatch({ type: ACTIONS.LOGIN, payload });
    };
    const logout = () => {
        dispatch({ type: ACTIONS.LOGOUT });
    };
    const register = () => {
        console.log('loggin out');
    };

    const follow = async payload => {
        try {
            if (!state.user) {
                dispatch({ type: ACTIONS.toggle_Login_Modal });

                return;
            }
            const res = await updateData(
                `/users/follow/${payload}`,
                {},
                state.token
            );
            if (res.success) {
                dispatch({
                    type: ACTIONS.follow,
                    payload: res.user.followings,
                });
            }
        } catch (error) {
            const message =
                error.response.data.message ||
                'Somwthing went wrong.Try again later!!!';
            dispatch({ type: ACTIONS.FETCH_ERROR, payload: message });
        }
    };
    const blockUser = async payload => {
        try {
            if (!state.user) {
                dispatch({ type: ACTIONS.toggle_Login_Modal });
                return;
            }
            const res = await updateData(
                `/users/block-user/${payload}`,
                {},
                state.token
            );
            if (res.success) {
                dispatch({
                    type: ACTIONS.BLOCK_USER,
                    payload: res.blockedUsers,
                });
            }
        } catch (error) {
            const message =
                error.response.data.message ||
                'Somwthing went wrong.Try again later!!!';
            dispatch({ type: ACTIONS.FETCH_ERROR, payload: message });
        }
    };
    const openLoginModel = () => {
        dispatch({ type: ACTIONS.show_Login_Model });
    };
    const closeLoginModel = () => {
        dispatch({ type: ACTIONS.show_Login_Model });
    };
    const handleLoginModel = () => {
        dispatch({ type: ACTIONS.toggle_Login_Modal });
    };
    const updateUser = payload => {
        dispatch({ type: ACTIONS.UPDATE_USER, payload });
    };

    const share = {
        ...state,
        login,
        blockUser,
        updateDarkmode,
        logout,
        follow,
        updatePost,
        register,
        updateNotifications,
        closeToast,
        closeLoginModel,
        openLoginModel,
        handleLoginModel,
        openToast,
        handleCommentModel,
        updateUser,
        setSocket,
        updateOnlineUsers,
    };

    useEffect(() => dispatch({ type: ACTIONS.get_user }), []);

    return (
        <AppContext.Provider value={{ ...share }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
