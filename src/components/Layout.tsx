import { ReactNode, useState } from "react";
import { ChatSidebar } from "@/components/ChatSidebar";
import { cn } from "@/lib/utils";
import { ChatContext } from "@/contexts/ChatContext";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ChatContext.Provider value={{ isChatOpen }}>
      <div className="flex min-h-screen w-full">
        {/* Main Content */}
        <div
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out",
            isChatOpen ? "mr-96" : "mr-0"
          )}
        >
          {children}
        </div>

        {/* Chat Sidebar */}
        <ChatSidebar isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      </div>
    </ChatContext.Provider>
  );
};
