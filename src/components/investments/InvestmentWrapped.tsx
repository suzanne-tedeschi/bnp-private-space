import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Target, Zap, Crown, Star } from "lucide-react";

const wrappedStats = {
  totalValue: 295600,
  totalInvested: 275000,
  totalGain: 20600,
  totalGainPercent: 7.49,
  bestPerformer: {
    name: "Fonds Technologie",
    performance: 22.4,
    gain: 5300,
  },
  mostInvested: {
    name: "CAC 40 ETF",
    amount: 75000,
  },
  diversificationScore: 85,
  riskScore: "Équilibré",
  yearlyHighlight: "Croissance constante sur 9 mois",
  achievements: [
    { icon: Star, label: "Diversification Exemplaire", description: "8 classes d'actifs différentes" },
    { icon: Crown, label: "Performance Supérieure", description: "+7.49% vs marché +5.2%" },
    { icon: Zap, label: "Investisseur Régulier", description: "9 mois consécutifs d'investissement" },
  ],
};

export const InvestmentWrapped = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Votre Année 2024 en Investissements
        </h2>
        <p className="text-muted-foreground">
          Récapitulatif de votre parcours d'investisseur
        </p>
      </div>

      {/* Stats principales */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="shadow-card bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Valeur Totale</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{wrappedStats.totalValue.toLocaleString('fr-FR')} €</p>
            <div className="flex items-center text-primary mt-2">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+{wrappedStats.totalGainPercent}% cette année</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-accent/10 to-accent/5">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Plus-Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">+{wrappedStats.totalGain.toLocaleString('fr-FR')} €</p>
            <p className="text-sm text-muted-foreground mt-2">Sur {wrappedStats.totalInvested.toLocaleString('fr-FR')} € investis</p>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-secondary/10 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Score de Diversification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{wrappedStats.diversificationScore}/100</p>
            <Badge className="mt-2">{wrappedStats.riskScore}</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Meilleur performer */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <CardTitle>Meilleur Investissement 2024</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold">{wrappedStats.bestPerformer.name}</p>
              <p className="text-sm text-muted-foreground">Performance annuelle</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">+{wrappedStats.bestPerformer.performance}%</p>
              <p className="text-sm text-muted-foreground">+{wrappedStats.bestPerformer.gain.toLocaleString('fr-FR')} €</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Vos Accomplissements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {wrappedStats.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{achievement.label}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Highlight */}
      <Card className="shadow-card bg-gradient-primary text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8" />
            <div>
              <p className="font-semibold">Moment Fort de l'Année</p>
              <p className="text-sm opacity-90">{wrappedStats.yearlyHighlight}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
