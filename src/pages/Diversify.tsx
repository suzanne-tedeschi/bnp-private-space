import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, AlertCircle, Target, Sparkles, Search, Filter, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

export default function Diversify() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRisk, setSelectedRisk] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

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
          <h1 className="text-3xl font-bold mb-2">Diversifier mon Portefeuille</h1>
          <p className="text-muted-foreground">Explorez les opportunités adaptées à votre profil</p>
        </div>

        <Tabs defaultValue="recommendations" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="recommendations" className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4" />
              <span>Recommandations Expert</span>
            </TabsTrigger>
            <TabsTrigger value="diy" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Faire moi-même</span>
            </TabsTrigger>
          </TabsList>

          {/* Recommandations Expert Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            {/* Diversification Radar Chart */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Votre Diversification Actuelle</CardTitle>
                <CardDescription>
                  Répartition géographique et sectorielle de votre portefeuille
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={diversificationData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis 
                      dataKey="category" 
                      tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Radar
                      name="Géographie"
                      dataKey="geographie"
                      stroke="hsl(156 100% 29%)"
                      fill="hsl(156 100% 29%)"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Industrie"
                      dataKey="industrie"
                      stroke="hsl(75 100% 60%)"
                      fill="hsl(75 100% 60%)"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend 
                      wrapperStyle={{
                        paddingTop: "20px"
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Géographie : Exposition par région
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                    <span className="text-muted-foreground">
                      Industrie : Exposition par secteur
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

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

          {/* Faire moi-même Tab */}
          <TabsContent value="diy" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Explorer tous les investissements</CardTitle>
                <CardDescription>Recherchez et filtrez parmi toutes les opportunités disponibles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Filters */}
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

                {/* Results Count */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {filteredInvestments.length} opportunité{filteredInvestments.length > 1 ? 's' : ''} trouvée{filteredInvestments.length > 1 ? 's' : ''}
                  </p>
                </div>

                {/* Investment Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredInvestments.map((investment) => (
                    <div
                      key={investment.id}
                      className="p-5 rounded-lg border border-border hover:shadow-card transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{investment.name}</h3>
                          <p className="text-sm text-muted-foreground">{investment.category}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {investment.type}
                        </Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Région</span>
                          <span className="font-medium">{investment.region}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Risque</span>
                          <Badge 
                            variant="outline" 
                            className={
                              investment.risk === "Faible" ? "border-primary text-primary" :
                              investment.risk === "Moyen" ? "border-accent text-accent" :
                              "border-destructive text-destructive"
                            }
                          >
                            {investment.risk}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Rendement</span>
                          <span className="font-semibold text-primary">{investment.expectedReturn}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Min. investissement</span>
                          <span className="font-medium">{investment.minimumInvestment.toLocaleString('fr-FR')} €</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Liquidité</span>
                          <span className="font-medium">{investment.liquidity}</span>
                        </div>
                      </div>

                      <Button className="w-full" size="sm">
                        Analyser cette opportunité
                      </Button>
                    </div>
                  ))}
                </div>

                {filteredInvestments.length === 0 && (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Aucun résultat</h3>
                    <p className="text-sm text-muted-foreground">
                      Essayez de modifier vos filtres de recherche
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
