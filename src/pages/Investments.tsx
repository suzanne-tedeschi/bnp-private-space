import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, ArrowRight, Target, AlertCircle, Sparkles, Search, Filter, BookOpen, Radar as RadarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { 
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

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

const diversificationData = [
  { 
    category: "Europe",
    geographie: 65,
    industrie: 45,
  },
  { 
    category: "Amérique du Nord",
    geographie: 25,
    industrie: 70,
  },
  { 
    category: "Asie-Pacifique",
    geographie: 15,
    industrie: 30,
  },
  { 
    category: "Émergents",
    geographie: 10,
    industrie: 20,
  },
  { 
    category: "Technologie",
    geographie: 40,
    industrie: 75,
  },
  { 
    category: "Finance",
    geographie: 55,
    industrie: 60,
  },
  { 
    category: "Santé",
    geographie: 30,
    industrie: 35,
  },
  { 
    category: "Énergie",
    geographie: 20,
    industrie: 25,
  },
];

const allInvestments = [
  {
    id: 1,
    category: "Actions Internationales",
    name: "S&P 500 ETF",
    region: "Amérique du Nord",
    type: "ETF",
    risk: "Moyen",
    expectedReturn: "8-12%",
    minimumInvestment: 5000,
    liquidity: "Haute",
  },
  {
    id: 2,
    category: "Cryptoactifs",
    name: "Bitcoin & Ethereum",
    region: "Global",
    type: "Crypto",
    risk: "Élevé",
    expectedReturn: "Variable",
    minimumInvestment: 2000,
    liquidity: "Haute",
  },
  {
    id: 3,
    category: "Private Equity",
    name: "Fonds Innovation",
    region: "Europe",
    type: "Private Equity",
    risk: "Élevé",
    expectedReturn: "15-25%",
    minimumInvestment: 50000,
    liquidity: "Faible",
  },
  {
    id: 4,
    category: "Obligations Vertes",
    name: "Green Bonds Europe",
    region: "Europe",
    type: "Obligations",
    risk: "Faible",
    expectedReturn: "3-5%",
    minimumInvestment: 10000,
    liquidity: "Moyenne",
  },
  {
    id: 5,
    category: "Immobilier",
    name: "SCPI Résidentiel France",
    region: "France",
    type: "Immobilier",
    risk: "Faible",
    expectedReturn: "4-6%",
    minimumInvestment: 15000,
    liquidity: "Faible",
  },
  {
    id: 6,
    category: "Actions Émergentes",
    name: "Fonds Asie-Pacifique",
    region: "Asie",
    type: "Actions",
    risk: "Élevé",
    expectedReturn: "10-18%",
    minimumInvestment: 8000,
    liquidity: "Haute",
  },
  {
    id: 7,
    category: "Matières Premières",
    name: "Or & Métaux Précieux",
    region: "Global",
    type: "Commodités",
    risk: "Moyen",
    expectedReturn: "5-8%",
    minimumInvestment: 3000,
    liquidity: "Haute",
  },
  {
    id: 8,
    category: "Tech Innovation",
    name: "Nasdaq 100 ETF",
    region: "Amérique du Nord",
    type: "ETF",
    risk: "Moyen",
    expectedReturn: "12-20%",
    minimumInvestment: 5000,
    liquidity: "Haute",
  },
];

export default function Investments() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRisk, setSelectedRisk] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);
  const totalInvested = investments.reduce((sum, inv) => sum + inv.invested, 0);
  const totalGain = totalValue - totalInvested;
  const totalPerformance = ((totalValue - totalInvested) / totalInvested) * 100;

  const filteredInvestments = allInvestments.filter((inv) => {
    const matchesSearch = inv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inv.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = selectedRisk === "all" || inv.risk === selectedRisk;
    const matchesRegion = selectedRegion === "all" || inv.region === selectedRegion;
    return matchesSearch && matchesRisk && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Investissements</h1>
          <p className="text-muted-foreground">Suivez et diversifiez votre portefeuille</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-4xl grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4" />
              <span>Recommandations</span>
            </TabsTrigger>
            <TabsTrigger value="diversification" className="flex items-center space-x-2">
              <RadarIcon className="h-4 w-4" />
              <span>Divertissement</span>
            </TabsTrigger>
            <TabsTrigger value="explore" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Explorer</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>M'éduquer</span>
            </TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
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
          </TabsContent>

          {/* Recommandations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
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
          </TabsContent>

          {/* Divertissement Tab */}
          <TabsContent value="diversification" className="space-y-6">
            <Card className="shadow-card bg-gradient-to-br from-primary/5 via-accent/5 to-background border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">🎯 Votre Araignée de Diversification</CardTitle>
                    <CardDescription>
                      Visualisez la répartition géographique et sectorielle de votre portefeuille de manière interactive
                    </CardDescription>
                  </div>
                  <RadarIcon className="h-12 w-12 text-primary animate-pulse" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ResponsiveContainer width="100%" height={500}>
                  <RadarChart data={diversificationData}>
                    <PolarGrid stroke="hsl(var(--primary))" strokeOpacity={0.3} />
                    <PolarAngleAxis 
                      dataKey="category" 
                      tick={{ fill: "hsl(var(--foreground))", fontSize: 14, fontWeight: 600 }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    />
                    <Radar
                      name="Géographie"
                      dataKey="geographie"
                      stroke="hsl(156 100% 29%)"
                      fill="hsl(156 100% 29%)"
                      fillOpacity={0.4}
                      strokeWidth={3}
                    />
                    <Radar
                      name="Industrie"
                      dataKey="industrie"
                      stroke="hsl(75 100% 60%)"
                      fill="hsl(75 100% 60%)"
                      fillOpacity={0.4}
                      strokeWidth={3}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "2px solid hsl(var(--primary))",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Legend 
                      wrapperStyle={{
                        paddingTop: "30px",
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="h-4 w-4 rounded-full bg-primary" />
                      <h3 className="font-semibold text-lg">Géographie</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Votre exposition par région vous permet de bénéficier de la croissance mondiale tout en limitant les risques géopolitiques.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="h-4 w-4 rounded-full bg-accent" />
                      <h3 className="font-semibold text-lg">Industrie</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Votre diversification sectorielle optimise votre rendement en capturant les opportunités de différents domaines.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-gradient-primary text-primary-foreground">
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">💡 Le saviez-vous ?</h4>
                      <p className="text-sm opacity-90">
                        Une diversification équilibrée entre géographie et secteurs peut réduire votre risque de portefeuille jusqu'à 40% tout en maintenant des rendements attractifs. Plus votre araignée est équilibrée, plus votre portefeuille est résilient !
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Explorer Tab */}
          <TabsContent value="explore" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Explorer tous les investissements</CardTitle>
                <CardDescription>Recherchez et filtrez parmi toutes les opportunités disponibles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher un investissement..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedRisk} onValueChange={setSelectedRisk}>
                    <SelectTrigger className="w-full sm:w-40">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Risque" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les risques</SelectItem>
                      <SelectItem value="Faible">Faible</SelectItem>
                      <SelectItem value="Moyen">Moyen</SelectItem>
                      <SelectItem value="Élevé">Élevé</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="w-full sm:w-40">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Région" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes régions</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="Europe">Europe</SelectItem>
                      <SelectItem value="Amérique du Nord">Amérique du Nord</SelectItem>
                      <SelectItem value="Asie">Asie</SelectItem>
                      <SelectItem value="Global">Global</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {filteredInvestments.length} opportunité{filteredInvestments.length > 1 ? 's' : ''} disponible{filteredInvestments.length > 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {filteredInvestments.map((inv) => (
                    <div
                      key={inv.id}
                      className="p-5 rounded-lg border border-border hover:shadow-card transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{inv.name}</h3>
                          <p className="text-sm text-muted-foreground">{inv.category}</p>
                        </div>
                        <Badge variant="outline">{inv.type}</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                        <div>
                          <p className="text-muted-foreground mb-1">Risque</p>
                          <Badge variant="secondary">{inv.risk}</Badge>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Région</p>
                          <p className="font-medium">{inv.region}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Rendement</p>
                          <p className="font-medium text-primary">{inv.expectedReturn}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Liquidité</p>
                          <p className="font-medium">{inv.liquidity}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          Min. {inv.minimumInvestment.toLocaleString('fr-FR')} €
                        </span>
                        <Button size="sm">Détails</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* M'éduquer Tab */}
          <TabsContent value="education" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate('/education/articles')}>
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Articles</CardTitle>
                  <CardDescription>
                    Approfondissez vos connaissances avec des articles détaillés sur l'investissement et la diversification.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Découvrir les articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate('/education/videos')}>
                <CardHeader>
                  <span className="text-4xl mb-4">📹</span>
                  <CardTitle>Vidéos</CardTitle>
                  <CardDescription>
                    Apprenez visuellement avec des vidéos explicatives sur les stratégies d'investissement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Voir les vidéos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate('/education/podcasts')}>
                <CardHeader>
                  <span className="text-4xl mb-4">🎧</span>
                  <CardTitle>Podcasts</CardTitle>
                  <CardDescription>
                    Écoutez des experts partager leurs insights sur les marchés et les opportunités.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Écouter les podcasts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-lg transition-all cursor-pointer bg-gradient-primary text-primary-foreground" onClick={() => navigate('/education/experts')}>
                <CardHeader>
                  <span className="text-4xl mb-4">👥</span>
                  <CardTitle>Expert Discussion</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Échangez directement avec nos conseillers spécialisés en diversification.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-full">
                    Contacter un expert
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
