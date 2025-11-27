import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./Authcontext";
import io from 'socket.io-client';


// Create the Context
export const SocketContext = createContext({ socket: null, onlineUsers: [] });

// Custom Hook with fallback
export const useSocketContext = () => {
  return useContext(SocketContext) || { socket: null, onlineUsers: [] };
};

// Provider Implementation
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext() || {};

  useEffect(() => {
    // Connect socket only if authUser exists
    if (authUser && authUser._id) {
      const socketInstance = io("http://localhost:8000", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socketInstance);

      socketInstance.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socketInstance.close(); // Cleanup
    } else {
      // If not logged in, cleanup previous socket
      if (socket) {
        socket.close();
        setSocket(null);
        setOnlineUsers([]);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
