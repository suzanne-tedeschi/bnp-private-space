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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Club Deal</h1>
          <p className="text-muted-foreground">
            Investissements collectifs exclusifs avec d'autres investisseurs premium
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Vos Clubs - Left Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Vos Clubs</h2>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {myClubs.length} clubs actifs
              </Badge>
            </div>

            <div className="space-y-4">
              {myClubs.map((club) => (
                <Card 
                  key={club.id}
                  className="shadow-card hover:shadow-lg transition-all cursor-pointer group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                          {club.name}
                        </CardTitle>
                        <Badge className={getTypeColor(club.type)}>
                          {club.type}
                        </Badge>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Membres</p>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="font-semibold">{club.members}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Investi</p>
                        <p className="font-semibold">
                          {club.invested.toLocaleString('fr-FR')} €
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Performance</p>
                        <div className="flex items-center gap-1 text-primary">
                          <TrendingUp className="h-4 w-4" />
                          <span className="font-semibold">{club.performance}</span>
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
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Rejoindre un Club</h2>
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                {availableClubs.length} opportunités
              </Badge>
            </div>

            <div className="space-y-4">
              {availableClubs.map((club) => (
                <Card 
                  key={club.id}
                  className="shadow-card hover:shadow-lg transition-all group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-base mb-2">
                          {club.name}
                        </CardTitle>
                        <CardDescription className="mb-2">
                          {club.description}
                        </CardDescription>
                        <Badge className={getTypeColor(club.type)}>
                          {club.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Membres</p>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span className="font-semibold text-sm">{club.members}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Places</p>
                        <p className="font-semibold text-sm text-primary">{club.seeking} disponibles</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Ticket</p>
                        <p className="font-semibold text-sm">
                          {club.entryTicket.toLocaleString('fr-FR')} €
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    >
                      <Target className="h-4 w-4 mr-2" />
                      Demander l'accès
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Club Maker Button */}
        <div className="flex justify-center pt-4">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 hover:scale-105 transition-all shadow-lg"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Become a Club Maker
          </Button>
        </div>
      </main>
    </div>
  );
}
