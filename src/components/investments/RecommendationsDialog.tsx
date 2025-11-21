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
  {
    id: "private-equity",
    sector: "Private Equity",
    title: "Fonds Innovation Deep Tech",
    description: "Participation dans des startups technologiques prometteuses",
    risk: "Élevé",
    expectedReturn: "15-25%",
    minimumInvestment: 50000,
    videoCategory: "tech",
    experts: ["Pierre", "Nathalie"],
  },
  {
    id: "crypto",
    sector: "Cryptomonnaies",
    title: "Portefeuille Crypto Diversifié",
    description: "Bitcoin, Ethereum et altcoins sélectionnés",
    risk: "Élevé",
    expectedReturn: "Variable",
    minimumInvestment: 5000,
    videoCategory: "crypto",
    experts: ["Laurent", "Émilie"],
  },
];

interface RecommendationsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectRecommendation: (sectorId: string) => void;
}

export const RecommendationsDialog = ({ open, onOpenChange, onSelectRecommendation }: RecommendationsDialogProps) => {
  const navigate = useNavigate();
  const [selectedRec, setSelectedRec] = useState<string | null>(null);

  const handleSelect = (recId: string) => {
    setSelectedRec(recId);
    onSelectRecommendation(recId);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nouvelles Opportunités d'Investissement</DialogTitle>
          <DialogDescription>
            Recommandations personnalisées basées sur votre profil et vos investissements actuels
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {recommendations.map((rec) => (
            <Card 
              key={rec.id} 
              className={`shadow-card transition-all cursor-pointer ${
                selectedRec === rec.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => handleSelect(rec.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{rec.title}</CardTitle>
                    <CardDescription className="mt-1">{rec.description}</CardDescription>
                  </div>
                  <Badge className="bg-primary">{rec.sector}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
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

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/education/videos?category=${rec.videoCategory}`);
                    }}
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Vidéos explicatives
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/education/experts');
                    }}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Consulter les experts
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
