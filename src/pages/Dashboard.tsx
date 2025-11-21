import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Wallet, PieChart, ArrowUpRight } from "lucide-react";
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell
} from "recharts";

const portfolioData = [
  { month: "Jan", value: 320000 },
  { month: "Fév", value: 335000 },
  { month: "Mar", value: 342000 },
  { month: "Avr", value: 355000 },
  { month: "Mai", value: 348000 },
  { month: "Jun", value: 365000 },
  { month: "Jul", value: 378000 },
  { month: "Aoû", value: 385000 },
  { month: "Sep", value: 392000 },
  { month: "Oct", value: 405000 },
  { month: "Nov", value: 418000 },
  { month: "Déc", value: 432000 },
];

const allocationData = [
  { name: "Actions", value: 45, color: "hsl(156 100% 29%)" },
  { name: "Obligations", value: 25, color: "hsl(75 100% 60%)" },
  { name: "Immobilier", value: 20, color: "hsl(156 80% 45%)" },
  { name: "Liquidités", value: 10, color: "hsl(156 50% 60%)" },
];

const accounts = [
  { name: "Compte Courant", balance: 45230, change: 2.3, type: "checking" },
  { name: "Compte Épargne", balance: 128450, change: 5.8, type: "savings" },
  { name: "PEA", balance: 165800, change: 8.2, type: "investment" },
  { name: "Assurance Vie", balance: 92520, change: 4.1, type: "insurance" },
];

export default function Dashboard() {
  const totalWealth = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const averageChange = accounts.reduce((sum, acc) => sum + acc.change, 0) / accounts.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Bonjour Marc</h1>
          <p className="text-muted-foreground">Voici votre situation patrimoniale</p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
            <CardHeader className="pb-3">
              <CardDescription className="text-primary-foreground/80">Patrimoine Total</CardDescription>
              <CardTitle className="text-3xl">{totalWealth.toLocaleString('fr-FR')} €</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm">
                <TrendingUp className="mr-1 h-4 w-4" />
                +{averageChange.toFixed(1)}% ce mois
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardDescription>Performance Annuelle</CardDescription>
              <CardTitle className="text-3xl text-primary">+12.4%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +48 320 € cette année
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardDescription>Rendement Mensuel</CardDescription>
              <CardTitle className="text-3xl">+3.2%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <TrendingUp className="mr-1 h-4 w-4" />
                +13 824 € ce mois
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardDescription>Comptes Actifs</CardDescription>
              <CardTitle className="text-3xl">{accounts.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Wallet className="mr-1 h-4 w-4" />
                Tous positifs
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Portfolio Evolution */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Évolution du Patrimoine</CardTitle>
              <CardDescription>12 derniers mois</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={portfolioData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(156 100% 29%)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(156 100% 29%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(156 100% 29%)" 
                    strokeWidth={2}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Asset Allocation */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Répartition des Actifs</CardTitle>
              <CardDescription>Allocation actuelle du portefeuille</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RePieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                </RePieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {allocationData.map((item) => (
                  <div key={item.name} className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Accounts List */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Mes Comptes</CardTitle>
            <CardDescription>Vue détaillée de vos différents comptes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {accounts.map((account) => (
                <div 
                  key={account.name}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Wallet className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{account.name}</p>
                      <p className="text-sm text-muted-foreground capitalize">{account.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">
                      {account.balance.toLocaleString('fr-FR')} €
                    </p>
                    <div className="flex items-center justify-end text-sm text-primary">
                      {account.change > 0 ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      +{account.change}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
