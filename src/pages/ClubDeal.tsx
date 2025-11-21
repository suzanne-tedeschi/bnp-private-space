import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Sparkles, ArrowRight, Target } from "lucide-react";

const myClubs = [
  {
    id: 1,
    name: "Prestige Art Collection",
    type: "Art",
    members: 12,
    invested: 150000,
    performance: "+18.5%",
  },
  {
    id: 2,
    name: "European Real Estate Elite",
    type: "Immobilier",
    members: 8,
    invested: 500000,
    performance: "+12.3%",
  },
  {
    id: 3,
    name: "Tech Ventures Circle",
    type: "Private Equity",
    members: 15,
    invested: 250000,
    performance: "+24.7%",
  },
];

const availableClubs = [
  {
    id: 4,
    name: "Luxury Watch Syndicate",
    type: "Art",
    members: 10,
    seeking: 2,
    entryTicket: 75000,
    description: "Collection exclusive de montres de prestige",
  },
  {
    id: 5,
    name: "Prime Paris Properties",
    type: "Immobilier",
    members: 6,
    seeking: 1,
    entryTicket: 300000,
    description: "Immobilier premium dans les arrondissements d'élite",
  },
  {
    id: 6,
    name: "Deep Tech Innovation Fund",
    type: "Private Equity",
    members: 12,
    seeking: 3,
    entryTicket: 100000,
    description: "Startups deep tech avec fort potentiel",
  },
  {
    id: 7,
    name: "Vintage Spirits Collective",
    type: "Art",
    members: 8,
    seeking: 2,
    entryTicket: 50000,
    description: "Investissement dans les spiritueux rares et millésimés",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Art":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Immobilier":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Private Equity":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function ClubDeal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Premium Header Section */}
        <div className="mb-12 text-center space-y-6 relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-3xl" />
          </div>
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 mb-4">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-900">Investissements Exclusifs</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Club Deal
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rejoignez des investisseurs d'élite pour des opportunités uniques à fort potentiel
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Vos Clubs - Left Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Your Clubs
                </h2>
                <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg">
                  {myClubs.length} active clubs
                </Badge>
            </div>

            <div className="space-y-4">
              {myClubs.map((club) => (
                <Card 
                  key={club.id}
                  className="shadow-card hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden border-2 border-transparent hover:border-primary/20 bg-white/80 backdrop-blur-sm"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                          {club.name}
                        </CardTitle>
                        <Badge className={`${getTypeColor(club.type)} shadow-sm`}>
                          {club.type}
                        </Badge>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Members</p>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-bold text-lg">{club.members}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Invested</p>
                        <p className="font-bold text-lg">
                          {(club.invested / 1000).toFixed(0)}k€
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Performance</p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="font-bold text-lg text-primary">{club.performance}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Rejoindre un Club - Right Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Join a Club
                </h2>
                <Badge className="bg-gradient-to-r from-accent to-amber-400 text-white border-0 shadow-lg">
                  {availableClubs.length} opportunities
                </Badge>
            </div>

            <div className="space-y-4">
              {availableClubs.map((club) => (
                <Card 
                  key={club.id}
                  className="shadow-card hover:shadow-2xl transition-all duration-500 group relative overflow-hidden border-2 border-transparent hover:border-accent/20 bg-white/80 backdrop-blur-sm"
                >
                  {/* Premium glow effect */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-400/20 via-yellow-400/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">
                          {club.name}
                        </CardTitle>
                        <CardDescription className="mb-3 text-sm">
                          {club.description}
                        </CardDescription>
                        <Badge className={`${getTypeColor(club.type)} shadow-sm`}>
                          {club.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Members</p>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3 text-muted-foreground" />
                          <span className="font-semibold text-sm">{club.members}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Spots</p>
                        <p className="font-semibold text-sm">
                          <span className="text-primary">{club.seeking}</span> available
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Ticket</p>
                        <p className="font-semibold text-sm">
                          {(club.entryTicket / 1000).toFixed(0)}k€
                        </p>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg group-hover:shadow-xl transition-all"
                    >
                      <Target className="h-4 w-4 mr-2" />
                      Request access
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Become a Club Maker Section */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-full h-full bg-gradient-to-r from-amber-400/20 via-yellow-400/30 to-amber-400/20 rounded-3xl blur-3xl" />
          </div>
          
          <Card className="relative shadow-2xl border-2 border-amber-300/30 bg-gradient-to-br from-white via-amber-50/50 to-yellow-50/30 backdrop-blur-sm overflow-hidden">
            {/* Decorative golden elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-2xl" />
            
            <CardContent className="relative py-16 px-8">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Left side - Main message */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300/50 shadow-lg">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                    <span className="text-sm font-medium bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                      Opportunité Exclusive
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                      Become a Club Maker
                    </h3>
                    <p className="text-lg text-slate-700">
                      Create and manage your own premium investment club
                    </p>
                  </div>

                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-600 text-white font-bold text-lg px-8 py-6 hover:scale-105 transition-all shadow-xl hover:shadow-amber-500/50 w-full sm:w-auto border-2 border-amber-400"
                  >
                    Become a Club Maker
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                {/* Right side - Benefits grid */}
                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-amber-50 via-white to-yellow-50/50 border-2 border-amber-200/50 hover:border-amber-300 transition-all hover:shadow-lg">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                      Réseau d'Élite
                    </h4>
                    <p className="text-sm text-slate-600">
                      Connectez-vous avec des investisseurs triés sur le volet
                    </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-amber-50 via-white to-yellow-50/50 border-2 border-amber-200/50 hover:border-amber-300 transition-all hover:shadow-lg">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                      Opportunités Uniques
                    </h4>
                    <p className="text-sm text-slate-600">
                      Accès prioritaire à des deals exclusifs premium
                    </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-amber-50 via-white to-yellow-50/50 border-2 border-amber-200/50 hover:border-amber-300 transition-all hover:shadow-lg">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                      Performance
                    </h4>
                    <p className="text-sm text-slate-600">
                      Suivez et optimisez vos investissements collectifs
                    </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-amber-50 via-white to-yellow-50/50 border-2 border-amber-200/50 hover:border-amber-300 transition-all hover:shadow-lg">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                      Support Dédié
                    </h4>
                    <p className="text-sm text-slate-600">
                      Accompagnement personnalisé de nos experts
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
