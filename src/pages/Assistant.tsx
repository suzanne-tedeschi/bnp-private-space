import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";

const suggestedQuestions = [
  "Comment optimiser mes impôts ?",
  "Quelles sont les meilleures opportunités actuelles ?",
  "Comment diversifier mon portefeuille ?",
  "Quelle est la performance de mes investissements ?",
];

export default function Assistant() {
  const [input, setInput] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!input.trim()) return;
    setHasSearched(true);
    // Navigate to results or handle search
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Assistant IA Premium</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
              Explorez votre patrimoine
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Posez vos questions, obtenez des réponses personnalisées et des recommandations d'experts
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity" />
            <div className="relative flex items-center bg-card rounded-2xl shadow-elegant border border-border overflow-hidden">
              <div className="pl-6 pr-2 py-4">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Quelle est votre question ?"
                className="flex-1 border-0 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
              />
              <Button 
                onClick={handleSearch}
                className="m-2 bg-gradient-primary hover:opacity-90 transition-opacity"
                size="lg"
              >
                Explorer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Suggested Questions */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Questions populaires</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-primary/10 hover:border-primary transition-colors"
                  onClick={() => setInput(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-card transition-all">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Analyse Patrimoniale</h3>
              <p className="text-sm text-muted-foreground">
                Insights en temps réel sur vos investissements
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-card transition-all">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Sécurité Premium</h3>
              <p className="text-sm text-muted-foreground">
                Données chiffrées et confidentielles
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-card transition-all">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Réponses Instantanées</h3>
              <p className="text-sm text-muted-foreground">
                IA formée par nos experts banque privée
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
