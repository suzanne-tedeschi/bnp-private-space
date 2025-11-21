import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { CombinedChart } from "@/components/investments/CombinedChart";
import { InvestmentMiniChart } from "@/components/investments/InvestmentMiniChart";
import { DiversificationRadar } from "@/components/investments/DiversificationRadar";
import { RecommendationsDialog } from "@/components/investments/RecommendationsDialog";
import { InvestmentWrapped } from "@/components/investments/InvestmentWrapped";

// Données des investissements
const investments = [
  {
    id: 1,
    name: "PEA",
    value: 85400,
    performance: 13.87,
    data: [
      { value: 75000 }, { value: 76500 }, { value: 78000 }, 
      { value: 80000 }, { value: 82000 }, { value: 83500 }, { value: 85400 }
    ],
  },
  {
    id: 2,
    name: "PE (Private Equity)",
    value: 45300,
    performance: 13.25,
    data: [
      { value: 40000 }, { value: 41000 }, { value: 42000 }, 
      { value: 43000 }, { value: 44000 }, { value: 44500 }, { value: 45300 }
    ],
  },
  {
    id: 3,
    name: "Immobilier",
    value: 68200,
    performance: 4.92,
    data: [
      { value: 65000 }, { value: 65500 }, { value: 66000 }, 
      { value: 66800 }, { value: 67200 }, { value: 67700 }, { value: 68200 }
    ],
  },
  {
    id: 4,
    name: "Obligations",
    value: 52800,
    performance: 5.6,
    data: [
      { value: 50000 }, { value: 50500 }, { value: 51000 }, 
      { value: 51500 }, { value: 52000 }, { value: 52400 }, { value: 52800 }
    ],
  },
];

export default function Investments() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | undefined>();

  const handleSelectRecommendation = (sectorId: string) => {
    setSelectedRecommendation(sectorId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Investir</h1>
          <p className="text-muted-foreground">Pilotez et optimisez votre portefeuille</p>
        </div>

        {/* Section 1: Graphique combiné en pleine largeur */}
        <CombinedChart selectedScenario={selectedRecommendation} />

        {/* Section 2: Mini graphiques des investissements en grille 4 colonnes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {investments.map((inv) => (
            <InvestmentMiniChart
              key={inv.id}
              name={inv.name}
              value={inv.value}
              performance={inv.performance}
              data={inv.data}
            />
          ))}
        </div>

        {/* Section 3: Radar + Bouton recommandations côte à côte */}
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <DiversificationRadar selectedRecommendation={selectedRecommendation} />
          </div>
          
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="w-full space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">Prêt à diversifier ?</h3>
                <p className="text-sm text-muted-foreground">
                  Découvrez des opportunités personnalisées adaptées à votre profil
                </p>
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-primary text-lg py-6 hover:scale-105 transition-transform"
                onClick={() => setDialogOpen(true)}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Nouvelles Opportunités
              </Button>
            </div>
          </div>
        </div>

        {/* Section 4: Wrapped Spotify style */}
        <div className="pt-4">
          <InvestmentWrapped />
        </div>
      </main>

      {/* Dialog de recommandations */}
      <RecommendationsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSelectRecommendation={handleSelectRecommendation}
      />
    </div>
  );
}
