import { useState } from "react";
import { Header } from "@/components/Header";
import { Sparkles, Plus, UserCheck, User } from "lucide-react";
import { CombinedChart } from "@/components/investments/CombinedChart";
import { InvestmentMiniChart } from "@/components/investments/InvestmentMiniChart";
import { DiversificationRadar } from "@/components/investments/DiversificationRadar";
import { RecommendationsList, RecommendationDetailDialog } from "@/components/investments/RecommendationsDialog";
import { InvestmentWrapped } from "@/components/investments/InvestmentWrapped";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    name: "Real Estate",
    value: 68200,
    performance: 4.92,
    data: [
      { value: 65000 }, { value: 65500 }, { value: 66000 }, 
      { value: 66800 }, { value: 67200 }, { value: 67700 }, { value: 68200 }
    ],
  },
  {
    id: 4,
    name: "Bonds",
    value: 52800,
    performance: 5.6,
    data: [
      { value: 50000 }, { value: 50500 }, { value: 51000 }, 
      { value: 51500 }, { value: 52000 }, { value: 52400 }, { value: 52800 }
    ],
  },
];

export default function Investments() {
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [addInvestmentOpen, setAddInvestmentOpen] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | undefined>();
  const [currentRecommendation, setCurrentRecommendation] = useState<any>(null);

  const handleSelectRecommendation = (sectorId: string) => {
    setSelectedRecommendation(sectorId);
  };

  const handleOpenDetail = (rec: any) => {
    setCurrentRecommendation(rec);
    setDetailDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Invest</h1>
            <p className="text-muted-foreground">Manage and optimize your portfolio</p>
          </div>
          <Button onClick={() => setAddInvestmentOpen(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Add an Investment
          </Button>
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

        {/* Section 3: Radar + Recommandations */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DiversificationRadar selectedRecommendation={selectedRecommendation} />
          </div>
          
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">New Opportunities</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Personalized recommendations for your profile
              </p>
              <RecommendationsList 
                onSelectRecommendation={handleSelectRecommendation}
                onOpenDetail={handleOpenDetail}
              />
            </div>
          </div>
        </div>

        {/* Section 4: Wrapped Spotify style */}
        <div className="pt-4">
          <InvestmentWrapped />
        </div>
      </main>

      {/* Dialog de détail */}
      <RecommendationDetailDialog
        open={detailDialogOpen}
        onOpenChange={setDetailDialogOpen}
        recommendation={currentRecommendation}
      />

      {/* Dialog d'ajout d'investissement */}
      <Dialog open={addInvestmentOpen} onOpenChange={setAddInvestmentOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add an Investment</DialogTitle>
            <DialogDescription>
              Choose how you would like to proceed with your new investment
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Card className="cursor-pointer hover:border-primary transition-colors" onClick={() => {
              setAddInvestmentOpen(false);
              // Navigation vers conseiller à implémenter
              console.log("With advisor selected");
            }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>With an Advisor</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get personalized guidance from one of our expert advisors to make the best investment decision
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:border-primary transition-colors" onClick={() => {
              setAddInvestmentOpen(false);
              // Navigation vers formulaire autonome à implémenter
              console.log("Independently selected");
            }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Independently</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore investment opportunities on your own and make decisions at your own pace
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
