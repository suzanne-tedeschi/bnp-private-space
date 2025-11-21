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
  { icon: TrendingUp, label: "Analyser mon portefeuille", prompt: "Peux-tu analyser la performance de mon portefeuille ?" },
  { icon: PieChart, label: "Suggestions de diversification", prompt: "Quelles opportunités pour diversifier mon portefeuille ?" },
  { icon: BookOpen, label: "M'éduquer", prompt: "Recommande-moi des ressources pour améliorer mes connaissances" },
  { icon: Sparkles, label: "Optimiser mes impôts", prompt: "Comment puis-je optimiser ma situation fiscale ?" },
];

interface ChatSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const ChatSidebar = ({ isOpen, setIsOpen }: ChatSidebarProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Bonjour ! 👋 Je suis votre assistant d'exploration financière personnalisé. Je peux vous aider à analyser votre portefeuille, découvrir de nouvelles opportunités d'investissement, ou répondre à vos questions. Comment puis-je vous accompagner aujourd'hui ?",
      sender: "assistant",
      timestamp: new Date(),
      suggestions: [
        "Analyser mon portefeuille",
        "Opportunités d'investissement",
        "Optimiser mes impôts",
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
      const responses = [
        {
          content: "Excellente question ! 🎯 D'après l'analyse de votre portefeuille, je remarque que vous avez une bonne diversification géographique, mais il pourrait être intéressant d'explorer davantage les marchés émergents et les secteurs technologiques.",
          suggestions: ["Voir les opportunités tech", "Marchés émergents", "Analyse détaillée"],
        },
        {
          content: "Je peux vous aider avec ça ! 💡 Voici quelques pistes d'optimisation fiscale adaptées à votre profil d'investisseur : PEA pour les actions européennes, assurance-vie pour la transmission patrimoniale, et défiscalisation immobilière.",
          suggestions: ["En savoir plus sur le PEA", "Simulation fiscale", "Prendre RDV conseiller"],
        },
        {
          content: "Parfait ! 📚 Je vous recommande de commencer par notre section éducation où vous trouverez des articles, vidéos et podcasts adaptés à votre niveau. Vous pouvez aussi échanger avec nos experts.",
          suggestions: ["Accéder à l'éducation", "Réserver un expert", "Voir les articles"],
        },
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const assistantMessage: Message = {
        id: messages.length + 2,
        content: randomResponse.content,
        sender: "assistant",
        timestamp: new Date(),
        suggestions: randomResponse.suggestions,
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
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed right-4 bottom-4 h-14 w-14 rounded-full bg-gradient-primary hover:opacity-90 shadow-lg z-50"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Sidebar - Fixed to right side */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-in-out z-40 flex flex-col",
          isOpen ? "translate-x-0 w-96" : "translate-x-full w-96"
        )}
      >
        {/* Slide Handle - Visible when open */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -left-8 top-1/2 -translate-y-1/2 h-16 w-8 bg-card border border-r-0 border-border rounded-l-lg flex items-center justify-center hover:bg-muted transition-colors group"
            aria-label="Fermer le chat"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
          </button>
        )}

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-primary">
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary-foreground animate-pulse" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full border-2 border-card" />
            </div>
            <div>
              <h2 className="font-semibold text-primary-foreground flex items-center gap-2">
                Assistant Exploration
                <Badge variant="secondary" className="text-xs bg-background/20 text-primary-foreground border-0">
                  IA
                </Badge>
              </h2>
              <p className="text-xs text-primary-foreground/80 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                En ligne • Réponse instantanée
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
                <p className="text-xs text-muted-foreground text-center mb-3">Actions rapides</p>
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

                  {/* Suggestion Chips */}
                  {message.suggestions && message.sender === "assistant" && (
                    <div className="flex flex-wrap gap-2 mt-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                      {message.suggestions.map((suggestion, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          size="sm"
                          className="rounded-full text-xs h-7 hover:bg-primary hover:text-primary-foreground transition-all"
                          onClick={() => handleSend(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}

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
        <div className="p-4 border-t border-border bg-gradient-to-t from-muted/50 to-transparent">
          <div className="relative">
            <Input
              ref={inputRef}
              placeholder="Posez-moi une question..."
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
              Propulsé par IA
            </p>
            <p className="text-xs text-muted-foreground">
              Entrée pour envoyer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
