import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ChevronRight, Sparkles, TrendingUp, PieChart, BookOpen, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
  suggestions?: string[];
}

const quickActions = [
  { icon: TrendingUp, label: "Analyze my portfolio", prompt: "Can you analyze my portfolio performance?" },
  { icon: PieChart, label: "Diversification suggestions", prompt: "What opportunities to diversify my portfolio?" },
  { icon: BookOpen, label: "Learn", prompt: "Recommend me resources to improve my knowledge" },
  { icon: Sparkles, label: "Optimize my taxes", prompt: "How can I optimize my tax situation?" },
];

interface ChatSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const ChatSidebar = ({ isOpen, setIsOpen }: ChatSidebarProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! 👋 How can I assist you today?",
      sender: "assistant",
      timestamp: new Date(),
      suggestions: [
        "Analyze my portfolio",
        "Investment opportunities",
        "Optimize my taxes",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (customPrompt?: string) => {
    const messageContent = customPrompt || inputValue;
    if (!messageContent.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: messageContent,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
    setShowQuickActions(false);
    setIsTyping(true);

    // Simulate assistant response with typing delay
    setTimeout(() => {
      setIsTyping(false);
      const assistantMessage: Message = {
        id: messages.length + 2,
        content: "PEA stands for Plan d'Épargne en Actions (Equity Savings Plan). It's a scheme that allows you to invest in European stocks with favorable tax treatment after five years. Would you like me to explain further?",
        sender: "assistant",
        timestamp: new Date(),
        suggestions: ["Yes, explain more", "See available PEAs", "Compare with life insurance"],
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button - Visible when closed */}
      {!isOpen && (
        <div className="fixed right-4 bottom-4 z-50">
          <div className="relative">
            {/* Pulsing glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />
            
            {/* Main button */}
            <Button
              onClick={() => setIsOpen(true)}
              className="relative h-16 w-16 rounded-full bg-gradient-primary hover:scale-110 hover:rotate-12 shadow-2xl transition-all duration-300 group"
              size="icon"
            >
              <MessageSquare className="h-7 w-7 group-hover:scale-110 transition-transform" />
              
              {/* Notification badge */}
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-accent rounded-full border-2 border-background animate-pulse flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-accent-foreground" />
              </div>
            </Button>
          </div>
        </div>
      )}

      {/* Chat Sidebar - Fixed to right side */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full bg-gradient-to-br from-primary/5 via-background to-primary/10 border-l border-border shadow-2xl transition-transform duration-300 ease-in-out z-40 flex flex-col",
          isOpen ? "translate-x-0 w-96" : "translate-x-full w-96"
        )}
      >
        {/* Close Handle - Visible when open */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -left-10 top-1/2 -translate-y-1/2 h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 hover:rotate-180 transition-all duration-300 shadow-lg group"
            aria-label="Fermer le chat"
          >
            <X className="h-5 w-5 text-primary-foreground group-hover:scale-110 transition-transform" />
          </button>
        )}

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50 backdrop-blur-sm bg-background/50">
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full border-2 border-background" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground flex items-center gap-2">
                Assistant Exploration
                <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-0">
                  IA
                </Badge>
              </h2>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Online • Instant response
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-6">
            {/* Quick Actions - Show at start */}
            {showQuickActions && messages.length === 1 && (
              <div className="space-y-3 animate-fade-in">
                <p className="text-xs text-muted-foreground text-center mb-3">Quick actions</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="h-auto p-3 flex flex-col items-start space-y-2 hover:bg-primary/5 hover:border-primary transition-all group"
                      onClick={() => handleSend(action.prompt)}
                    >
                      <action.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-left">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, idx) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3 animate-fade-in",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Assistant Avatar */}
                {message.sender === "assistant" && (
                  <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}

                <div className="flex flex-col gap-2 max-w-[80%]">
                  <div
                    className={cn(
                      "rounded-2xl p-4 text-sm shadow-sm",
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    )}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>

                  <p className="text-xs text-muted-foreground px-1">
                    {message.timestamp.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 animate-fade-in">
                <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-4 w-4 text-primary-foreground animate-pulse" />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-sm p-4 flex items-center gap-1">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                    <div className="h-2 w-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="h-2 w-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t border-border/50 backdrop-blur-sm bg-background/50">
          <div className="relative">
            <Input
              ref={inputRef}
              placeholder="Ask me a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
              className="pr-12 h-12 rounded-xl border-border/50 focus:border-primary transition-all"
            />
            <Button
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-1 top-1 h-10 w-10 bg-gradient-primary hover:opacity-90 rounded-lg transition-all disabled:opacity-50"
              size="icon"
            >
              {isTyping ? (
                <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="flex items-center justify-between mt-2 px-1">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Zap className="h-3 w-3" />
              Powered by AI
            </p>
            <p className="text-xs text-muted-foreground">
              Enter to send
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
