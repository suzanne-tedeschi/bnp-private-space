import { useState } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";

const suggestedQuestions = [
  "Comment optimiser mes impôts ?",
  "Quelles sont les meilleures opportunités actuelles ?",
  "Comment diversifier mon portefeuille ?",
  "Quelle est la performance de mes investissements ?",
];

export default function Assistant() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content: "Bonjour ! Je suis votre assistant privé BNP Paribas. Comment puis-je vous aider aujourd'hui ?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    // Simulate assistant response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Je traite votre demande. En tant que client de la Banque Privée, vous bénéficiez d'un accompagnement personnalisé. Souhaitez-vous que je contacte votre conseiller dédié ?",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <Sparkles className="h-6 w-6 text-accent" />
            <h1 className="text-3xl font-bold">Assistant Exploration</h1>
          </div>
          <p className="text-muted-foreground">Votre conseiller virtuel disponible 24/7</p>
        </div>

        <Card className="flex-1 flex flex-col shadow-card">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-6 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border p-4">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-left justify-start h-auto py-2"
                  onClick={() => setInput(question)}
                >
                  {question}
                </Button>
              ))}
            </div>

            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Posez votre question..."
                className="flex-1"
              />
              <Button onClick={handleSend} className="bg-gradient-primary">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
