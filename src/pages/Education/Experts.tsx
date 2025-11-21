import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Video, Phone, MessageCircle, Star, Award, TrendingUp } from "lucide-react";

const experts = [
  {
    id: 1,
    name: "Sophie Durand",
    title: "Directrice Stratégie Patrimoniale",
    specialty: "Allocation d'actifs & Diversification",
    experience: "15 ans",
    rating: 4.9,
    reviews: 127,
    languages: ["Français", "Anglais"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    description: "Experte en construction de portefeuilles pour clients UHNW, spécialisée dans l'allocation d'actifs internationaux.",
    certifications: ["CFA", "CFP"],
  },
  {
    id: 2,
    name: "Marc Leblanc",
    title: "Conseiller Private Banking Senior",
    specialty: "Marchés Émergents & Alternative",
    experience: "12 ans",
    rating: 4.8,
    reviews: 94,
    languages: ["Français", "Anglais", "Mandarin"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    description: "Spécialiste des marchés émergents asiatiques et investissements alternatifs (Private Equity, Hedge Funds).",
    certifications: ["CFA", "CAIA"],
  },
  {
    id: 3,
    name: "Claire Martin",
    title: "Experte Finance Durable",
    specialty: "Investissement ESG & Impact",
    experience: "10 ans",
    rating: 4.9,
    reviews: 156,
    languages: ["Français", "Anglais", "Allemand"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    description: "Pionnière de l'investissement responsable en France, experte en intégration ESG et mesure d'impact.",
    certifications: ["CFA", "ESG Analyst"],
  },
  {
    id: 4,
    name: "Thomas Bernard",
    title: "Directeur Investissements Immobiliers",
    specialty: "Immobilier & SCPI",
    experience: "18 ans",
    rating: 4.7,
    reviews: 82,
    languages: ["Français", "Anglais"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    description: "Expert en stratégies immobilières et véhicules d'investissement (SCPI, OPCI, foncières cotées).",
    certifications: ["MRICS", "Expert Immobilier"],
  },
];

const availableSlots = [
  { date: "Lundi 18 Nov", time: "10:00" },
  { date: "Lundi 18 Nov", time: "14:30" },
  { date: "Mardi 19 Nov", time: "09:00" },
  { date: "Mardi 19 Nov", time: "16:00" },
  { date: "Mercredi 20 Nov", time: "11:00" },
  { date: "Mercredi 20 Nov", time: "15:30" },
];

const Experts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Discussion avec un Expert</h1>
          <p className="text-muted-foreground text-lg">
            Bénéficiez de conseils personnalisés de nos spécialistes
          </p>
        </div>

        {/* Consultation Formats */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Choisissez votre format de consultation</CardTitle>
            <CardDescription>
              Flexibilité totale pour échanger avec nos experts selon vos préférences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
                <CardHeader className="text-center">
                  <Video className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-lg">Visioconférence</CardTitle>
                  <CardDescription>45 min</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Échange face-à-face avec partage d'écran
                  </p>
                  <Button className="w-full">Réserver</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
                <CardHeader className="text-center">
                  <Phone className="h-12 w-12 mx-auto mb-3 text-accent" />
                  <CardTitle className="text-lg">Appel Téléphonique</CardTitle>
                  <CardDescription>30 min</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Discussion rapide et efficace
                  </p>
                  <Button className="w-full">Réserver</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
                <CardHeader className="text-center">
                  <MessageCircle className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-lg">Chat Sécurisé</CardTitle>
                  <CardDescription>Asynchrone</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Réponses sous 24h à vos questions
                  </p>
                  <Button className="w-full">Commencer</Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Pour Vous Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pour vous</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experts.slice(0, 3).map((expert) => (
              <Card key={expert.id} className="shadow-card hover:shadow-lg transition-all cursor-pointer border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={expert.avatar} alt={expert.name} />
                      <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base mb-1">{expert.name}</CardTitle>
                      <Badge className="bg-primary/10 text-primary text-xs">Recommandé</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground mb-2">{expert.specialty}</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-xs font-medium">{expert.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">• {expert.experience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experts List */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Tous les experts</TabsTrigger>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
            <TabsTrigger value="alternative">Alternatif</TabsTrigger>
            <TabsTrigger value="esg">ESG</TabsTrigger>
            <TabsTrigger value="immobilier">Immobilier</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid lg:grid-cols-2 gap-6">
              {experts.map((expert) => (
                <Card key={expert.id} className="shadow-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={expert.avatar} alt={expert.name} />
                        <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="mb-1">{expert.name}</CardTitle>
                        <CardDescription className="mb-2">{expert.title}</CardDescription>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-sm font-medium">{expert.rating}</span>
                            <span className="text-sm text-muted-foreground ml-1">({expert.reviews})</span>
                          </div>
                          <span className="text-sm text-muted-foreground">• {expert.experience} d'expérience</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {expert.certifications.map((cert) => (
                            <Badge key={cert} variant="secondary" className="text-xs">
                              <Award className="h-3 w-3 mr-1" />
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center text-sm font-medium mb-2">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                        Spécialité
                      </div>
                      <p className="text-sm text-muted-foreground">{expert.specialty}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{expert.description}</p>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-sm text-muted-foreground">Langues:</span>
                      {expert.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        Prendre RDV
                      </Button>
                      <Button variant="outline">
                        Profil complet
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="allocation">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Filtrez par spécialité pour voir les experts correspondants.</p>
            </div>
          </TabsContent>

          <TabsContent value="alternative">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Filtrez par spécialité pour voir les experts correspondants.</p>
            </div>
          </TabsContent>

          <TabsContent value="esg">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Filtrez par spécialité pour voir les experts correspondants.</p>
            </div>
          </TabsContent>

          <TabsContent value="immobilier">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Filtrez par spécialité pour voir les experts correspondants.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Experts;
