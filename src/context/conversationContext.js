import { createContext } from "react";
import Conversation from "./hooks/conversation";

const ContextConversation = createContext();

function ConversationProvider({ children }) {
  const {
    users,
    getUser,
    messages,
    getMessagesByIdUser,
    conversation,
    getConversation,
    text,
    setText,
    submitMessage,
  } = Conversation();
  return (
    <ContextConversation.Provider
      value={{
        users,
        getUser,
        messages,
        getMessagesByIdUser,
        conversation,
        getConversation,
        text,
        setText,
        submitMessage,
      }}
    >
      {children}
    </ContextConversation.Provider>
  );
}
export { ContextConversation, ConversationProvider };
