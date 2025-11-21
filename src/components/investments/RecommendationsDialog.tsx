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
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{recommendation.title}</DialogTitle>
          <DialogDescription>
            En savoir plus sur cet investissement
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-auto py-4 flex flex-col items-start gap-2"
            onClick={() => {
              navigate(`/education/videos?category=${recommendation.videoCategory}`);
              onOpenChange(false);
            }}
          >
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" />
              <span className="font-semibold">Vidéos Éducatives</span>
            </div>
            <span className="text-sm text-muted-foreground">
              Découvrez des contenus pour comprendre ce secteur
            </span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-auto py-4 flex flex-col items-start gap-2"
            onClick={() => {
              navigate('/premium-expertise');
              onOpenChange(false);
            }}
          >
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">Consulter les Experts Premium</span>
            </div>
            <span className="text-sm text-muted-foreground">
              Obtenez des conseils personnalisés d'experts du domaine
            </span>
          </Button>
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
