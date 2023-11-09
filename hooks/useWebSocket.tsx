import { Article } from "@/components/articles/ArticleList"
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import useUser from "./useUser";

type SocketEvent = Omit<Article, 'imageUrl'>;

export default function useWebSocket() {
  const [events, setEvents] = useState<SocketEvent[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const { user } = useUser();
  const socketUrl = `wss://frontend-test-api.mvm-tech.xyz/ws?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDYsImVtYWlsIjoiYWFAZy5jb20iLCJpYXQiOjE2OTk0NTEyMTIsImV4cCI6MTY5OTUzNzYxMn0.Iqx6KsUfcmjtggcvXz4EcALfCbuAKhW0I-0OFaXlYWY`

  useEffect(() => {
    let newSocket: Socket;
    if (user) {
      console.log("Connecting to the WebSocket server...");
      newSocket = io(socketUrl, {
        transports: ["websocket"]
      });

      newSocket.on("connect", () => console.log("Connected to WebSocket server"));
      newSocket.on("message", (newEvent) => {
        console.log("Received event: ", newEvent);
        setEvents([...events, newEvent]);
      });
      setSocket(newSocket);
    }
  
    // Clean up the socket connection on unmount
    // return () => {
    //   console.log("Disconnecting from WebSocket server...");
    //   newSocket.disconnect();
    // }
  }, [user]);
  
  return (
    {
      events
    }
  )
}
