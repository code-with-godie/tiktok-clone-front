export const handleLoginModel = state => {
    return { ...state, show_Login_Model: !state.show_Login_Model };
};
export const handleCommentModel = state => {
    return { ...state, show_comment_model: !state.show_comment_model };
};
export const closeToast = state => {
    return { ...state, error: null };
};
export const updatePost = (state, payload) => {
    return { ...state, posts: payload };
};
export const openToast = (state, payload) => {
    return { ...state, error: payload };
};
export const login = (state, payload) => {
    const { user, token } = payload;
    localStorage.setItem('tiktok-clone-user', JSON.stringify(user));
    localStorage.setItem('tiktok-clone-access-token', JSON.stringify(token));
    return { ...state, user, token };
};
export const fetch_start = state => {
    return { ...state, loading: true };
};
export const fetch_error = (state, payload) => {
    return { ...state, error: payload };
};
export const fetch_stop = state => {
    return { ...state, loading: false };
};
export const logout = state => {
    localStorage.setItem('tiktok-clone-user', JSON.stringify(null));
    localStorage.setItem('tiktok-clone-access-token', JSON.stringify(null));
    return { ...state, user: null, token: null };
};
export const register = (state, user) => {
    console.log('loggin out');
    return state;
};
export const toggleBlockedUser = (state, payload) => {
    const user = { ...state.user, blockUser: payload };
    localStorage.setItem('tiktok-clone-user', JSON.stringify(user));
    return { ...state, user };
};
export const follow = (state, payload) => {
    const user = { ...state.user, followings: payload };
    localStorage.setItem('tiktok-clone-user', JSON.stringify(user));
    return { ...state, user };
};
export const get_user = state => {
    const user = JSON.parse(localStorage.getItem('tiktok-clone-user'));
    const token = JSON.parse(localStorage.getItem('tiktok-clone-access-token'));
    const darkMode = JSON.parse(localStorage.getItem('tiktok-clone-dark-mode'));
    return { ...state, user, token, darkMode };
};
export const updatedDarkmode = state => {
    localStorage.setItem(
        'tiktok-clone-dark-mode',
        JSON.stringify(!state.darkMode)
    );
    return { ...state, darkMode: !state.darkMode };
};
export const updateOnlineUsers = (state, payload) => {
    return { ...state, onlineUsers: payload };
};
export const updateNotifications = (state, payload) => {
    return { ...state, notifications: payload };
};
export const updateSocket = (state, payload) => {
    return { ...state, socket: payload };
};
export const updateUser = (state, payload) => {
    const user = { ...payload };
    console.log(user);
    localStorage.setItem('tiktok-clone-user', JSON.stringify(user));
    return { ...state, user };
};
