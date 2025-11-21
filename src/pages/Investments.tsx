import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const investments = [
  {
    id: 1,
    name: "CAC 40 ETF",
    type: "Actions",
    value: 85400,
    invested: 75000,
    performance: 13.87,
    yearPerformance: 18.2,
  },
  {
    id: 2,
    name: "Obligations d'État",
    type: "Obligations",
    value: 52800,
    invested: 50000,
    performance: 5.6,
    yearPerformance: 6.8,
  },
  {
    id: 3,
    name: "SCPI Européenne",
    type: "Immobilier",
    value: 68200,
    invested: 65000,
    performance: 4.92,
    yearPerformance: 5.5,
  },
  {
    id: 4,
    name: "Fonds Technologie",
    type: "Actions",
    value: 45300,
    invested: 40000,
    performance: 13.25,
    yearPerformance: 22.4,
  },
  {
    id: 5,
    name: "Fonds Émergents",
    type: "Actions",
    value: 28900,
    invested: 30000,
    performance: -3.67,
    yearPerformance: -1.2,
  },
  {
    id: 6,
    name: "Or Physique",
    type: "Matières Premières",
    value: 15200,
    invested: 15000,
    performance: 1.33,
    yearPerformance: 4.7,
  },
];

export default function Investments() {
  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);
  const totalInvested = investments.reduce((sum, inv) => sum + inv.invested, 0);
  const totalGain = totalValue - totalInvested;
  const totalPerformance = ((totalValue - totalInvested) / totalInvested) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Investissements</h1>
          <p className="text-muted-foreground">Suivi détaillé de votre portefeuille</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardDescription>Valeur Totale</CardDescription>
              <CardTitle className="text-3xl">{totalValue.toLocaleString('fr-FR')} €</CardTitle>
            </CardHeader>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardDescription>Montant Investi</CardDescription>
              <CardTitle className="text-3xl">{totalInvested.toLocaleString('fr-FR')} €</CardTitle>
            </CardHeader>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardDescription>Plus-Value</CardDescription>
              <CardTitle className="text-3xl text-primary">
                +{totalGain.toLocaleString('fr-FR')} €
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-primary">
                <TrendingUp className="mr-1 h-4 w-4" />
                +{totalPerformance.toFixed(2)}%
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Portfolio Détaillé</CardTitle>
            <CardDescription>Liste complète de vos positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {investments.map((investment) => {
                const gain = investment.value - investment.invested;
                const isPositive = gain >= 0;

                return (
                  <div
                    key={investment.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{investment.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {investment.type}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Investi: {investment.invested.toLocaleString('fr-FR')} €</span>
                        <span>•</span>
                        <span>Performance annuelle: {investment.yearPerformance > 0 ? '+' : ''}{investment.yearPerformance}%</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-xl mb-1">
                        {investment.value.toLocaleString('fr-FR')} €
                      </p>
                      <div className={`flex items-center justify-end text-sm ${isPositive ? 'text-primary' : 'text-destructive'}`}>
                        {isPositive ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {isPositive ? '+' : ''}{gain.toLocaleString('fr-FR')} € ({investment.performance > 0 ? '+' : ''}{investment.performance}%)
                      </div>
                    </div>

                    <Button variant="ghost" size="icon" className="ml-4">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
