import { createContext, useContext } from "react";

interface ChatContextType {
  isChatOpen: boolean;
}

export const ChatContext = createContext<ChatContextType>({
  isChatOpen: false,
});

export const useChatContext = () => useContext(ChatContext);
