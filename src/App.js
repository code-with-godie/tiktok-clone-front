import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import Model from './components/models/Model';
import Login from './components/login/Login';
import { useAppContext } from './context/AppContext';
import Toast from './components/models/Toast';
import PostComments from './components/home/PostComments';
import { io } from 'socket.io-client';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const {
    user,
    error,
    darkMode,
    closeToast,
    setSocket,
    socket,
    show_Login_Model,
    show_comment_model,
    updateOnlineUsers,
    updateNotifications,
  } = useAppContext();

  const sendDetails = () => {
    socket?.emit('ADD_USER', user?._id);
  };
  const sendID = () => {
    socket?.emit('NOTIFICATIONS_USER_ID', user?._id);
  };
  useEffect(() => {
    if (user) {
      const socket = io(process.env.REACT_APP_SOCKET_URL);
      setSocket(socket);
    }
  }, [user]);
  useEffect(() => {
    socket?.on('SEND_DETAILS', sendDetails);
    // socket?.on('GET_NOTIFICATIONS_USER_ID', sendID);
    socket?.on('GET_ONLINE_USERS', updateOnlineUsers);
    socket?.on('GET_NOTIFICATIONS', updateNotifications);
    return () => {
      socket?.off('SEND_DETAILS', sendDetails);
      //     socket?.off('GET_NOTIFICATIONS_USER_ID', sendID);
      socket?.off('GET_ONLINE_USERS', updateOnlineUsers);
      socket?.off('GET_NOTIFICATIONS', updateNotifications);
    };
  }, [socket]);

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        {!user && show_Login_Model && (
          <Model
            bg=' rgba(0,0,0,.3)'
            center
          >
            <Login />
          </Model>
        )}
        {error && (
          <Toast
            messege={error}
            handleToast={closeToast}
          />
        )}
        {show_comment_model && (
          <Model
            bg=' rgba(0,0,0,.3)'
            center
          >
            <PostComments />
          </Model>
        )}
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default App;
