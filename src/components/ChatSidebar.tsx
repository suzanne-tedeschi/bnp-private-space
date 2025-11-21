import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export const ChatSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Bonjour ! Je suis votre assistant d'exploration financière. Comment puis-je vous aider aujourd'hui ?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        content: "Je traite votre demande. Cette fonctionnalité sera bientôt pleinement opérationnelle avec l'IA.",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button - Always visible */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed right-4 bottom-4 h-14 w-14 rounded-full bg-gradient-primary hover:opacity-90 shadow-lg z-50"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Sidebar */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full bg-card border-l border-border shadow-2xl transition-all duration-300 z-40 flex flex-col",
          isOpen ? "w-96" : "w-0"
        )}
      >
        {isOpen && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-primary">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-semibold text-primary-foreground">Assistant Exploration</h2>
                  <p className="text-xs text-primary-foreground/80">En ligne</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-background/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3 text-sm",
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      )}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p
                        className={cn(
                          "text-xs mt-1",
                          message.sender === "user"
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        )}
                      >
                        {message.timestamp.toLocaleTimeString("fr-FR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-muted/30">
              <div className="flex space-x-2">
                <Input
                  placeholder="Posez votre question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  className="bg-gradient-primary hover:opacity-90"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Appuyez sur Entrée pour envoyer
              </p>
            </div>
          </>
        )}
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
