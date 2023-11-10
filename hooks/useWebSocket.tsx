import { useEffect, useState } from "react";
import useUser from "./useUser";
import { Article } from "@/components/articles/ArticleList";

export type StreamEvent = Omit<Article, 'imageUrl'>;

export default function useWebSocket() {
  const [events, setEvents] = useState<StreamEvent[]>([]);
  const { user } = useUser();
  const socketUrl = `${process.env.NEXT_PUBLIC_BREACH_SOCKET_SERVER_URL}${user?.token}`;

  useEffect(() => {
    let newSocket: WebSocket;
    if (user) {
      console.log("Connecting to the WebSocket server...");
      newSocket = new WebSocket(socketUrl);

      try {
        newSocket.onopen = () => {
          console.log("Connected to WebSocket server");
          newSocket.onmessage = (newEvent) => {
            // Show only most recent 5 streams
            const newEventData = JSON.parse(newEvent.data);
            setEvents(prevEvents => {
              if (prevEvents.length >= 5) {
                return [newEventData, ...prevEvents.slice(0, prevEvents.length-1)];
              }
              return [newEventData, ...prevEvents]
            });
          }
        };
      } catch (error) {
        console.log(error)
      }
    }
  
    // Clean up the socket connection on unmount
    return () => {
      if (newSocket) {
        console.log("Disconnecting from WebSocket server...");
        newSocket && newSocket.close();
      }
    }
  }, [user]);
  
  return (
    {
      events,
    }
  )
}
