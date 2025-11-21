import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Calendar, MessageSquare, Award, Languages, Sparkles } from "lucide-react";

const myAdvisors = [
  {
    id: 1,
    name: "Sophie Beaumont",
    title: "Conseillère Principale",
    specialty: "Allocation d'Actifs",
    experience: "15 ans",
    rating: 4.9,
    languages: ["Français", "Anglais"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    description: "Experte en optimisation de portefeuille et gestion de patrimoine pour clients privés.",
    certifications: ["CFA", "CFP"],
    isMainAdvisor: true,
  },
  {
    id: 2,
    name: "Marc Durand",
    title: "Conseiller Associé",
    specialty: "Marchés Internationaux",
    experience: "10 ans",
    rating: 4.8,
    languages: ["Français", "Anglais", "Allemand"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc",
    description: "Spécialiste des marchés émergents et de la diversification géographique.",
    certifications: ["CFA"],
    isMainAdvisor: false,
  },
];

const specialistExperts = [
  {
    id: 3,
    name: "Pierre Leblanc",
    title: "Expert Private Equity",
    specialty: "Alternatif",
    experience: "18 ans",
    rating: 5.0,
    languages: ["Français", "Anglais"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    description: "Spécialiste du capital-investissement et des actifs alternatifs pour clients fortunés.",
    certifications: ["CAIA", "CFA"],
    domains: ["Private Equity", "Venture Capital", "Infrastructure"],
  },
  {
    id: 4,
    name: "Claire Martin",
    title: "Experte ESG & Impact",
    specialty: "ESG",
    experience: "12 ans",
    rating: 4.9,
    languages: ["Français", "Anglais", "Espagnol"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Claire",
    description: "Conseillère en investissement durable et finance à impact social.",
    certifications: ["CFA ESG", "FSA"],
    domains: ["ESG", "Impact Investing", "Green Bonds"],
  },
  {
    id: 5,
    name: "Thomas Rousseau",
    title: "Expert Immobilier",
    specialty: "Immobilier",
    experience: "20 ans",
    rating: 4.8,
    languages: ["Français"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
    description: "Spécialiste de l'immobilier d'investissement et des SCPI premium.",
    certifications: ["MRICS", "Expert Immobilier"],
    domains: ["Immobilier", "SCPI", "OPCI"],
  },
  {
    id: 6,
    name: "Émilie Dubois",
    title: "Experte Cryptoactifs",
    specialty: "Alternatif",
    experience: "8 ans",
    rating: 4.7,
    languages: ["Français", "Anglais"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emilie",
    description: "Conseillère spécialisée en actifs numériques et blockchain pour patrimoine.",
    certifications: ["CBFA", "Blockchain Expert"],
    domains: ["Cryptomonnaies", "DeFi", "NFTs"],
  },
  {
    id: 7,
    name: "Laurent Mercier",
    title: "Expert Art & Collection",
    specialty: "Alternatif",
    experience: "25 ans",
    rating: 5.0,
    languages: ["Français", "Anglais", "Italien"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laurent",
    description: "Spécialiste des investissements dans l'art, le vin et les objets de collection.",
    certifications: ["Expert Christie's", "CAA"],
    domains: ["Art Contemporain", "Vins & Spiritueux", "Montres"],
  },
  {
    id: 8,
    name: "Nathalie Bernard",
    title: "Experte Fiscalité",
    specialty: "Allocation",
    experience: "16 ans",
    rating: 4.9,
    languages: ["Français", "Anglais"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nathalie",
    description: "Conseillère en optimisation fiscale et structuration patrimoniale.",
    certifications: ["Expert-Comptable", "Avocat Fiscaliste"],
    domains: ["Fiscalité", "Transmission", "Holding"],
  },
];

export default function PremiumExpertise() {
  const allExperts = [...specialistExperts];
  const filteredBySpecialty = (specialty: string) => 
    allExperts.filter(expert => expert.specialty === specialty);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-bold">Premium Expertise</h1>
            <Sparkles className="h-8 w-8 text-accent" />
          </div>
          <p className="text-muted-foreground">Accédez à nos meilleurs conseillers et experts spécialisés</p>
        </div>

        {/* Mes Conseillers Référents */}
        <Card className="shadow-card mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-primary" />
              <CardTitle>Vos Conseillers Référents</CardTitle>
            </div>
            <CardDescription>Votre équipe dédiée de conseillers bancaires privés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {myAdvisors.map((advisor) => (
                <Card key={advisor.id} className="shadow-card border-primary/30 relative overflow-hidden">
                  {advisor.isMainAdvisor && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                      Conseiller Principal
                    </div>
                  )}
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-20 w-20 border-2 border-primary">
                        <AvatarImage src={advisor.avatar} alt={advisor.name} />
                        <AvatarFallback>{advisor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{advisor.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{advisor.title}</p>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                            <span className="font-semibold">{advisor.rating}</span>
                          </div>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{advisor.experience} d'expérience</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {advisor.certifications.map((cert) => (
                            <Badge key={cert} variant="secondary" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>

                        <Badge variant="outline" className="mb-3">
                          {advisor.specialty}
                        </Badge>

                        <p className="text-sm text-muted-foreground mb-4">
                          {advisor.description}
                        </p>

                        <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                          <Languages className="h-4 w-4" />
                          <span>{advisor.languages.join(', ')}</span>
                        </div>

                        <div className="flex space-x-2">
                          <Button className="flex-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            Prendre RDV
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experts Spécialisés */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Experts Spécialisés par Domaine</CardTitle>
            <CardDescription>Consultez nos experts selon votre besoin d'investissement</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full max-w-3xl grid-cols-5">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="allocation">Allocation</TabsTrigger>
                <TabsTrigger value="alternatif">Alternatif</TabsTrigger>
                <TabsTrigger value="esg">ESG</TabsTrigger>
                <TabsTrigger value="immobilier">Immobilier</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {allExperts.map((expert) => (
                  <Card key={expert.id} className="shadow-card hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                        <Avatar className="h-16 w-16 border-2 border-border">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-semibold">{expert.name}</h3>
                              <p className="text-sm text-muted-foreground">{expert.title}</p>
                            </div>
                            <div className="flex items-center space-x-2 mt-2 md:mt-0">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                                <span className="font-semibold">{expert.rating}</span>
                              </div>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-sm text-muted-foreground">{expert.experience}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {expert.certifications.map((cert) => (
                              <Badge key={cert} variant="secondary" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>

                          <Badge variant="outline" className="mb-3">
                            {expert.specialty}
                          </Badge>

                          <p className="text-sm text-muted-foreground mb-3">
                            {expert.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {expert.domains.map((domain) => (
                              <Badge key={domain} variant="outline" className="text-xs bg-accent/10">
                                {domain}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                            <Languages className="h-4 w-4" />
                            <span>{expert.languages.join(', ')}</span>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button>
                              <Calendar className="h-4 w-4 mr-2" />
                              Réserver une consultation
                            </Button>
                            <Button variant="outline">
                              Voir le profil complet
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="allocation" className="space-y-4">
                {filteredBySpecialty("Allocation").map((expert) => (
                  <Card key={expert.id} className="shadow-card hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{expert.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{expert.title}</p>
                          <p className="text-sm text-muted-foreground mb-3">{expert.description}</p>
                          <Button>Consulter</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="alternatif" className="space-y-4">
                {filteredBySpecialty("Alternatif").map((expert) => (
                  <Card key={expert.id} className="shadow-card hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{expert.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{expert.title}</p>
                          <p className="text-sm text-muted-foreground mb-3">{expert.description}</p>
                          <Button>Consulter</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="esg" className="space-y-4">
                {filteredBySpecialty("ESG").map((expert) => (
                  <Card key={expert.id} className="shadow-card hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{expert.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{expert.title}</p>
                          <p className="text-sm text-muted-foreground mb-3">{expert.description}</p>
                          <Button>Consulter</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="immobilier" className="space-y-4">
                {filteredBySpecialty("Immobilier").map((expert) => (
                  <Card key={expert.id} className="shadow-card hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{expert.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{expert.title}</p>
                          <p className="text-sm text-muted-foreground mb-3">{expert.description}</p>
                          <Button>Consulter</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
