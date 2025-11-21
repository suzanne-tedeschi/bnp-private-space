import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Users, TrendingUp, Lock, Sparkles } from "lucide-react";

const myClubs = [
  {
    id: 1,
    name: "Prestige Art Collection",
    type: "Art",
    members: 12,
    invested: 150000,
    performance: "+18.5%",
    tier: "Platinum",
  },
  {
    id: 2,
    name: "European Real Estate Elite",
    type: "Immobilier",
    members: 8,
    invested: 500000,
    performance: "+12.3%",
    tier: "Diamond",
  },
  {
    id: 3,
    name: "Tech Ventures Circle",
    type: "Private Equity",
    members: 15,
    invested: 250000,
    performance: "+24.7%",
    tier: "Gold",
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
    tier: "Platinum",
    description: "Collection exclusive de montres de prestige",
  },
  {
    id: 5,
    name: "Prime Paris Properties",
    type: "Immobilier",
    members: 6,
    seeking: 1,
    entryTicket: 300000,
    tier: "Diamond",
    description: "Immobilier premium dans les arrondissements d'élite",
  },
  {
    id: 6,
    name: "Deep Tech Innovation Fund",
    type: "Private Equity",
    members: 12,
    seeking: 3,
    entryTicket: 100000,
    tier: "Gold",
    description: "Startups deep tech avec fort potentiel",
  },
  {
    id: 7,
    name: "Vintage Spirits Collective",
    type: "Art",
    members: 8,
    seeking: 2,
    entryTicket: 50000,
    tier: "Platinum",
    description: "Investissement dans les spiritueux rares et millésimés",
  },
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case "Diamond":
      return "from-blue-400/20 to-cyan-400/20 border-cyan-400/30";
    case "Platinum":
      return "from-slate-400/20 to-zinc-400/20 border-slate-400/30";
    case "Gold":
      return "from-amber-400/20 to-yellow-400/20 border-amber-400/30";
    default:
      return "from-primary/20 to-accent/20 border-primary/30";
  }
};

const getTierBadgeColor = (tier: string) => {
  switch (tier) {
    case "Diamond":
      return "bg-gradient-to-r from-blue-400 to-cyan-400";
    case "Platinum":
      return "bg-gradient-to-r from-slate-300 to-zinc-300";
    case "Gold":
      return "bg-gradient-to-r from-amber-400 to-yellow-400";
    default:
      return "bg-primary";
  }
};

export default function ClubDeal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Crown className="h-10 w-10 text-amber-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              Club Deal
            </h1>
            <Crown className="h-10 w-10 text-amber-400" />
          </div>
          <p className="text-slate-300 text-lg" style={{ fontFamily: 'serif' }}>
            Investissements exclusifs réservés à une élite sélectionnée
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Vos Clubs - Left Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-transparent" />
              <h2 className="text-2xl font-bold text-amber-200" style={{ fontFamily: 'serif' }}>
                Vos Clubs
              </h2>
            </div>

            <div className="space-y-4">
              {myClubs.map((club) => (
                <Card 
                  key={club.id}
                  className={`bg-gradient-to-br ${getTierColor(club.tier)} border-2 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl text-slate-100" style={{ fontFamily: 'serif' }}>
                            {club.name}
                          </CardTitle>
                          <Badge className={`${getTierBadgeColor(club.tier)} text-slate-900 border-0`}>
                            {club.tier}
                          </Badge>
                        </div>
                        <CardDescription className="text-slate-300">
                          {club.type}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-slate-400 mb-1">Membres</p>
                        <div className="flex items-center gap-1 text-slate-100">
                          <Users className="h-4 w-4" />
                          <span className="font-semibold">{club.members}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-400 mb-1">Investi</p>
                        <p className="font-semibold text-slate-100">
                          {club.invested.toLocaleString('fr-FR')} €
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 mb-1">Performance</p>
                        <div className="flex items-center gap-1 text-emerald-400">
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
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-transparent" />
              <h2 className="text-2xl font-bold text-amber-200" style={{ fontFamily: 'serif' }}>
                Rejoindre un Club
              </h2>
            </div>

            <div className="space-y-4">
              {availableClubs.map((club) => (
                <Card 
                  key={club.id}
                  className={`bg-gradient-to-br ${getTierColor(club.tier)} border-2 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg text-slate-100" style={{ fontFamily: 'serif' }}>
                            {club.name}
                          </CardTitle>
                          <Badge className={`${getTierBadgeColor(club.tier)} text-slate-900 border-0`}>
                            {club.tier}
                          </Badge>
                        </div>
                        <CardDescription className="text-slate-300 text-sm mb-2">
                          {club.description}
                        </CardDescription>
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                          {club.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <p className="text-slate-400 mb-1 text-xs">Membres</p>
                        <div className="flex items-center gap-1 text-slate-100">
                          <Users className="h-3 w-3" />
                          <span className="font-semibold">{club.members}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-400 mb-1 text-xs">Recherche</p>
                        <p className="font-semibold text-amber-400">{club.seeking} places</p>
                      </div>
                      <div>
                        <p className="text-slate-400 mb-1 text-xs">Ticket</p>
                        <p className="font-semibold text-slate-100 text-xs">
                          {club.entryTicket.toLocaleString('fr-FR')} €
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full bg-slate-800/50 border-amber-400/30 hover:bg-amber-400/10 hover:border-amber-400 text-amber-200 transition-all"
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      Demander l'accès
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Club Maker Button */}
        <div className="flex justify-center pt-8">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 text-slate-900 font-bold text-lg px-12 py-7 rounded-xl shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 border-2 border-amber-300"
            style={{ fontFamily: 'serif' }}
          >
            <Crown className="h-6 w-6 mr-3" />
            Become a Club Maker
            <Sparkles className="h-6 w-6 ml-3" />
          </Button>
        </div>
      </main>
    </div>
  );
}
