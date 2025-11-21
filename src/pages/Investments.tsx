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
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Investir</h1>
          <p className="text-muted-foreground">Pilotez et optimisez votre portefeuille</p>
        </div>

        {/* Section 1: Graphique combiné + Mini graphiques + Radar */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Graphique combiné - Prend 2 colonnes */}
          <div className="lg:col-span-2">
            <CombinedChart selectedScenario={selectedRecommendation} />
          </div>

          {/* Colonne droite: Mini graphiques + Radar */}
          <div className="space-y-6">
            {/* Mini graphiques */}
            <div className="grid grid-cols-2 gap-4">
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

            {/* Radar de diversification */}
            <DiversificationRadar selectedRecommendation={selectedRecommendation} />
          </div>
        </div>

        {/* Section 2: Bouton de recommandations */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-gradient-primary text-lg px-8 py-6 hover:scale-105 transition-transform"
            onClick={() => setDialogOpen(true)}
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Découvrir de Nouvelles Opportunités
          </Button>
        </div>

        {/* Section 3: Wrapped Spotify style */}
        <div className="pt-8">
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
