import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Video, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const recommendations = [
  {
    id: "art",
    sector: "Art",
    title: "Collection d'Art Contemporain",
    description: "Investissement dans l'art émergent et les artistes prometteurs",
    risk: "Moyen",
    expectedReturn: "8-15%",
    minimumInvestment: 25000,
    videoCategory: "art",
    experts: ["Claire", "Thomas"],
  },
  {
    id: "immobilier",
    sector: "Immobilier",
    title: "SCPI Haut Rendement",
    description: "Pierre papier avec diversification européenne",
    risk: "Faible",
    expectedReturn: "4-6%",
    minimumInvestment: 15000,
    videoCategory: "immobilier",
    experts: ["Marc", "Sophie"],
  },
];

interface RecommendationDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recommendation: typeof recommendations[0] | null;
}

export const RecommendationDetailDialog = ({ open, onOpenChange, recommendation }: RecommendationDetailDialogProps) => {
  const navigate = useNavigate();

  if (!recommendation) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge className="bg-primary text-lg px-4 py-1">{recommendation.sector}</Badge>
            <Badge variant="outline" className="text-sm">
              {recommendation.risk === "Faible" && "🟢"}
              {recommendation.risk === "Moyen" && "🟡"}
              {recommendation.risk === "Élevé" && "🔴"}
              {" "}{recommendation.risk}
            </Badge>
          </div>
          <DialogTitle className="text-2xl">{recommendation.title}</DialogTitle>
          <DialogDescription className="text-base">
            {recommendation.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="bg-muted/50 rounded-lg p-4 space-y-1">
            <p className="text-sm text-muted-foreground">Rendement attendu</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <p className="text-xl font-bold">{recommendation.expectedReturn}</p>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 space-y-1">
            <p className="text-sm text-muted-foreground">Investissement minimum</p>
            <p className="text-xl font-bold">{recommendation.minimumInvestment.toLocaleString('fr-FR')} €</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <p className="text-sm font-medium text-muted-foreground">
            Pour en savoir plus sur ce secteur :
          </p>
          
          <button
            className="w-full group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20"
            onClick={() => {
              navigate(`/education/videos?category=${recommendation.videoCategory}`);
              onOpenChange(false);
            }}
          >
            <div className="p-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Video className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-lg mb-1">Vidéos Éducatives</p>
                <p className="text-sm text-muted-foreground">
                  Découvrez des contenus pour comprendre ce secteur
                </p>
              </div>
              <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </button>

          <button
            className="w-full group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300 bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/20"
            onClick={() => {
              navigate('/premium-expertise');
              onOpenChange(false);
            }}
          >
            <div className="p-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-lg mb-1">Experts Premium</p>
                <p className="text-sm text-muted-foreground">
                  Conseils personnalisés d'experts du domaine
                </p>
              </div>
              <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface RecommendationsListProps {
  onSelectRecommendation: (sectorId: string) => void;
  onOpenDetail: (rec: typeof recommendations[0]) => void;
}

export const RecommendationsList = ({ onSelectRecommendation, onOpenDetail }: RecommendationsListProps) => {
  const [selectedRec, setSelectedRec] = useState<string | null>(null);

  const handleSelect = (rec: typeof recommendations[0]) => {
    setSelectedRec(rec.id);
    onSelectRecommendation(rec.id);
    onOpenDetail(rec);
  };

  return (
    <div className="space-y-4">
      {recommendations.map((rec) => (
        <Card 
          key={rec.id} 
          className={`shadow-card transition-all cursor-pointer hover:shadow-lg ${
            selectedRec === rec.id ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => handleSelect(rec)}
        >
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{rec.title}</CardTitle>
                <CardDescription className="mt-1">{rec.description}</CardDescription>
              </div>
              <Badge className="bg-primary">{rec.sector}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Risque</p>
                <Badge variant="outline">{rec.risk}</Badge>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Rendement attendu</p>
                <p className="font-semibold flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1 text-primary" />
                  {rec.expectedReturn}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Investissement min.</p>
                <p className="font-semibold">{rec.minimumInvestment.toLocaleString('fr-FR')} €</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
