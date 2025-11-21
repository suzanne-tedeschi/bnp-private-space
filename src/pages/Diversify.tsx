import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertCircle, Target, Sparkles } from "lucide-react";

const recommendations = [
  {
    id: 1,
    category: "Actions Internationales",
    name: "S&P 500 ETF",
    description: "Exposition aux grandes capitalisations américaines",
    risk: "Moyen",
    expectedReturn: "8-12%",
    minimumInvestment: 5000,
    recommendation: "Forte",
  },
  {
    id: 2,
    category: "Cryptoactifs",
    name: "Bitcoin & Ethereum",
    description: "Diversification dans les actifs numériques",
    risk: "Élevé",
    expectedReturn: "Variable",
    minimumInvestment: 2000,
    recommendation: "Exploratoire",
  },
  {
    id: 3,
    category: "Private Equity",
    name: "Fonds Innovation",
    description: "Investissement dans des startups prometteuses",
    risk: "Élevé",
    expectedReturn: "15-25%",
    minimumInvestment: 50000,
    recommendation: "Opportunité",
  },
  {
    id: 4,
    category: "Obligations Vertes",
    name: "Green Bonds Europe",
    description: "Investissement durable et responsable",
    risk: "Faible",
    expectedReturn: "3-5%",
    minimumInvestment: 10000,
    recommendation: "Stable",
  },
];

const riskAnalysis = [
  { level: "Faible", percentage: 35, description: "Obligations et liquidités" },
  { level: "Moyen", percentage: 45, description: "Actions et immobilier" },
  { level: "Élevé", percentage: 20, description: "Innovation et émergents" },
];

export default function Diversify() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Diversifier mon Portefeuille</h1>
          <p className="text-muted-foreground">Opportunités d'investissement personnalisées</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Analyse de Risque</CardTitle>
                  <CardDescription>Répartition actuelle de votre exposition</CardDescription>
                </div>
                <Target className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskAnalysis.map((risk) => (
                  <div key={risk.level}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{risk.level}</span>
                      <span className="text-muted-foreground">{risk.percentage}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          risk.level === "Faible" ? "bg-primary" :
                          risk.level === "Moyen" ? "bg-accent" :
                          "bg-destructive"
                        }`}
                        style={{ width: `${risk.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{risk.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-primary text-primary-foreground">
            <CardHeader>
              <AlertCircle className="h-8 w-8 mb-2" />
              <CardTitle>Recommandation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm opacity-90">
                Votre portefeuille est bien diversifié mais pourrait bénéficier d'une exposition accrue aux marchés internationaux.
              </p>
              <Button variant="secondary" className="w-full">
                Prendre rendez-vous
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Opportunités Sélectionnées</CardTitle>
                <CardDescription>Basées sur votre profil et vos objectifs</CardDescription>
              </div>
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className="p-6 rounded-lg border border-border hover:shadow-card transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold">{rec.name}</h3>
                        <Badge 
                          variant={rec.recommendation === "Forte" ? "default" : "secondary"}
                          className={rec.recommendation === "Forte" ? "bg-primary" : ""}
                        >
                          {rec.recommendation}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{rec.category}</p>
                      <p className="text-foreground">{rec.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Risque</p>
                      <Badge variant="outline">{rec.risk}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Rendement attendu</p>
                      <p className="font-semibold flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1 text-primary" />
                        {rec.expectedReturn}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Investissement min.</p>
                      <p className="font-semibold">{rec.minimumInvestment.toLocaleString('fr-FR')} €</p>
                    </div>
                  </div>

                  <Button className="w-full sm:w-auto">
                    En savoir plus
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
