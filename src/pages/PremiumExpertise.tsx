import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Calendar, MessageSquare, Award, Languages, Sparkles } from "lucide-react";
import advisorSophie from "@/assets/advisor-sophie.jpg";
import advisorMarc from "@/assets/advisor-marc.jpg";
import expertPierre from "@/assets/expert-pierre.jpg";
import expertClaire from "@/assets/expert-claire.jpg";
import expertThomas from "@/assets/expert-thomas.jpg";
import expertEmilie from "@/assets/expert-emilie.jpg";
import expertLaurent from "@/assets/expert-laurent.jpg";
import expertNathalie from "@/assets/expert-nathalie.jpg";
import expertAllocation1 from "@/assets/expert-allocation-1.jpg";
import expertAllocation2 from "@/assets/expert-allocation-2.jpg";
import expertAllocation3 from "@/assets/expert-allocation-3.jpg";
import expertAllocation4 from "@/assets/expert-allocation-4.jpg";
import expertAlternatif1 from "@/assets/expert-alternatif-1.jpg";
import expertAlternatif2 from "@/assets/expert-alternatif-2.jpg";
import expertAlternatif3 from "@/assets/expert-alternatif-3.jpg";
import expertAlternatif4 from "@/assets/expert-alternatif-4.jpg";
import expertEsg1 from "@/assets/expert-esg-1.jpg";
import expertEsg2 from "@/assets/expert-esg-2.jpg";
import expertEsg3 from "@/assets/expert-esg-3.jpg";
import expertEsg4 from "@/assets/expert-esg-4.jpg";
import expertImmobilier1 from "@/assets/expert-immobilier-1.jpg";
import expertImmobilier2 from "@/assets/expert-immobilier-2.jpg";
import expertImmobilier3 from "@/assets/expert-immobilier-3.jpg";
import expertImmobilier4 from "@/assets/expert-immobilier-4.jpg";
import expertCrypto1 from "@/assets/expert-crypto-1.jpg";
import expertCrypto2 from "@/assets/expert-crypto-2.jpg";
import expertCrypto3 from "@/assets/expert-crypto-3.jpg";
import expertCrypto4 from "@/assets/expert-crypto-4.jpg";
import expertArt1 from "@/assets/expert-art-1.jpg";
import expertArt2 from "@/assets/expert-art-2.jpg";
import expertArt3 from "@/assets/expert-art-3.jpg";
import expertArt4 from "@/assets/expert-art-4.jpg";

const myAdvisors = [
  {
    id: 1,
    name: "Sophie Beaumont",
    title: "Senior Advisor",
    specialty: "Asset Allocation",
    experience: "15 years",
    rating: 4.9,
    languages: ["French", "English"],
    avatar: advisorSophie,
    description: "Expert in portfolio optimization and wealth management for private clients.",
    certifications: ["CFA", "CFP"],
    isMainAdvisor: true,
  },
  {
    id: 2,
    name: "Marc Durand",
    title: "Associate Advisor",
    specialty: "International Markets",
    experience: "10 years",
    rating: 4.8,
    languages: ["French", "English", "German"],
    avatar: advisorMarc,
    description: "Spécialiste des marchés émergents et de la diversification géographique.",
    certifications: ["CFA"],
    isMainAdvisor: false,
  },
];

const specialistExperts = [
  // Allocation Experts
  {
    id: 8,
    name: "Nathalie Bernard",
    title: "Experte Fiscalité",
    specialty: "Allocation",
    experience: "16 ans",
    rating: 4.9,
    languages: ["Français", "Anglais"],
    avatar: expertNathalie,
    description: "Conseillère en optimisation fiscale et structuration patrimoniale.",
    certifications: ["Expert-Comptable", "Avocat Fiscaliste"],
    domains: ["Fiscalité", "Transmission", "Holding"],
  },
  {
    id: 9,
    name: "Philippe Girard",
    title: "Expert Allocation d'Actifs",
    specialty: "Allocation",
    experience: "22 ans",
    rating: 4.9,
    languages: ["Français", "Anglais"],
    avatar: expertAllocation1,
    description: "Spécialiste de l'allocation stratégique et tactique pour portefeuilles diversifiés.",
    certifications: ["CFA", "CIPM"],
    domains: ["Allocation Stratégique", "Multi-Actifs", "Risk Management"],
  },
  {
    id: 10,
    name: "Isabelle Moreau",
    title: "Experte Gestion de Patrimoine",
    specialty: "Allocation",
    experience: "14 ans",
    rating: 4.8,
    languages: ["Français", "Anglais", "Italien"],
    avatar: expertAllocation2,
    description: "Conseillère patrimoniale spécialisée dans l'optimisation globale de patrimoine.",
    certifications: ["CFP", "CGPC"],
    domains: ["Patrimoine Global", "Optimisation Fiscale", "Transmission"],
  },
  {
    id: 11,
    name: "Alexandre Petit",
    title: "Stratégiste d'Investissement",
    specialty: "Allocation",
    experience: "11 ans",
    rating: 4.7,
    languages: ["Français", "Anglais"],
    avatar: expertAllocation3,
    description: "Expert en stratégies d'investissement et allocation dynamique de portefeuille.",
    certifications: ["CFA", "FRM"],
    domains: ["Stratégie Macro", "Asset Allocation", "Gestion Active"],
  },
  {
    id: 12,
    name: "Catherine Leroy",
    title: "Experte Gestion de Portefeuille",
    specialty: "Allocation",
    experience: "19 ans",
    rating: 4.9,
    languages: ["Français", "Anglais"],
    avatar: expertAllocation4,
    description: "Gestionnaire de portefeuille senior spécialisée en allocation équilibrée.",
    certifications: ["CFA", "CAIA"],
    domains: ["Gestion Discrétionnaire", "Diversification", "Performance"],
  },

  // Alternatif Experts
  {
    id: 3,
    name: "Pierre Leblanc",
    title: "Expert Private Equity",
    specialty: "Alternatif",
    experience: "18 ans",
    rating: 5.0,
    languages: ["Français", "Anglais"],
    avatar: expertPierre,
    description: "Spécialiste du capital-investissement et des actifs alternatifs pour clients fortunés.",
    certifications: ["CAIA", "CFA"],
    domains: ["Private Equity", "Venture Capital", "Infrastructure"],
  },
  {
    id: 13,
    name: "Julien Fontaine",
    title: "Expert Hedge Funds",
    specialty: "Alternatif",
    experience: "15 ans",
    rating: 4.8,
    languages: ["Français", "Anglais"],
    avatar: expertAlternatif1,
    description: "Spécialiste des hedge funds et stratégies alternatives sophistiquées.",
    certifications: ["CAIA", "CFA"],
    domains: ["Hedge Funds", "Long/Short Equity", "Global Macro"],
  },
  {
    id: 14,
    name: "Sophie Dumas",
    title: "Experte Venture Capital",
    specialty: "Alternatif",
    experience: "9 ans",
    rating: 4.7,
    languages: ["Français", "Anglais"],
    avatar: expertAlternatif2,
    description: "Spécialiste du capital-risque et investissements dans les startups innovantes.",
    certifications: ["CAIA", "MBA"],
    domains: ["Venture Capital", "Tech Startups", "Growth Equity"],
  },
  {
    id: 15,
    name: "Michel Blanchard",
    title: "Expert Matières Premières",
    specialty: "Alternatif",
    experience: "21 ans",
    rating: 4.8,
    languages: ["Français"],
    avatar: expertAlternatif3,
    description: "Conseiller spécialisé dans les investissements en commodités et métaux précieux.",
    certifications: ["CAIA", "Expert Commodities"],
    domains: ["Or & Argent", "Pétrole & Gaz", "Agriculture"],
  },
  {
    id: 16,
    name: "Valérie Chevalier",
    title: "Experte Infrastructures",
    specialty: "Alternatif",
    experience: "13 ans",
    rating: 4.9,
    languages: ["Français", "Anglais"],
    avatar: expertAlternatif4,
    description: "Spécialiste des investissements en infrastructures et actifs réels.",
    certifications: ["CAIA", "Infrastructure Specialist"],
    domains: ["Infrastructure", "Énergie", "Transport"],
  },

  // ESG Experts
  {
    id: 4,
    name: "Claire Martin",
    title: "Experte ESG & Impact",
    specialty: "ESG",
    experience: "12 ans",
    rating: 4.9,
    languages: ["Français", "Anglais", "Espagnol"],
    avatar: expertClaire,
    description: "Conseillère en investissement durable et finance à impact social.",
    certifications: ["CFA ESG", "FSA"],
    domains: ["ESG", "Impact Investing", "Green Bonds"],
  },
  {
    id: 17,
    name: "Olivier Renaud",
    title: "Expert Finance Durable",
    specialty: "ESG",
    experience: "14 ans",
    rating: 4.8,
    languages: ["Français", "Anglais"],
    avatar: expertEsg1,
    description: "Spécialiste de la finance durable et des critères environnementaux.",
    certifications: ["CFA ESG", "Sustainability Expert"],
    domains: ["Finance Verte", "Climat", "Biodiversité"],
  },
  {
    id: 18,
    name: "Marie Lacroix",
    title: "Experte Impact Social",
    specialty: "ESG",
    experience: "10 ans",
    rating: 4.9,
    languages: ["Français", "Anglais"],
    avatar: expertEsg2,
    description: "Conseillère en investissement à impact social et microfinance.",
    certifications: ["Impact Investing Certified", "FSA"],
    domains: ["Impact Social", "Microfinance", "Économie Sociale"],
  },
  {
    id: 19,
    name: "François Bertrand",
    title: "Expert Obligations Vertes",
    specialty: "ESG",
    experience: "17 ans",
    rating: 4.7,
    languages: ["Français", "Anglais"],
    avatar: expertEsg3,
    description: "Spécialiste des green bonds et financements durables.",
    certifications: ["CFA", "Green Bond Expert"],
    domains: ["Green Bonds", "Social Bonds", "Sustainability Bonds"],
  },
  {
    id: 20,
    name: "Léa Bonnet",
    title: "Experte Transition Énergétique",
    specialty: "ESG",
    experience: "8 ans",
    rating: 4.8,
    languages: ["Français", "Anglais"],
    avatar: expertEsg4,
    description: "Conseillère en investissements liés à la transition énergétique.",
    certifications: ["ESG Analyst", "Energy Transition Specialist"],
    domains: ["Énergies Renouvelables", "Efficacité Énergétique", "Décarbonation"],
  },

  // Immobilier Experts
  {
    id: 5,
    name: "Thomas Rousseau",
    title: "Expert Immobilier",
    specialty: "Immobilier",
    experience: "20 ans",
    rating: 4.8,
    languages: ["Français"],
    avatar: expertThomas,
    description: "Spécialiste de l'immobilier d'investissement et des SCPI premium.",
    certifications: ["MRICS", "Expert Immobilier"],
    domains: ["Immobilier", "SCPI", "OPCI"],
  },
  {
    id: 21,
    name: "David Carpentier",
    title: "Expert Immobilier Commercial",
    specialty: "Immobilier",
    experience: "16 ans",
    rating: 4.9,
    languages: ["Français", "Anglais"],
    avatar: expertImmobilier1,
    description: "Spécialiste de l'immobilier commercial et bureaux premium.",
    certifications: ["MRICS", "CCIM"],
    domains: ["Bureaux", "Commerce", "Logistique"],
  },
  {
    id: 22,
    name: "Pauline Gauthier",
    title: "Experte Immobilier Résidentiel",
    specialty: "Immobilier",
    experience: "11 ans",
    rating: 4.7,
    languages: ["Français", "Anglais"],
    avatar: expertImmobilier2,
    description: "Conseillère en immobilier résidentiel haut de gamme et défiscalisation.",
    certifications: ["Expert Immobilier", "CIF"],
    domains: ["Résidentiel Haut de Gamme", "Loi Pinel", "Défiscalisation"],
  },
  {
    id: 23,
    name: "Henri Marchand",
    title: "Expert SCPI",
    specialty: "Immobilier",
    experience: "24 ans",
    rating: 4.9,
    languages: ["Français"],
    avatar: expertImmobilier3,
    description: "Spécialiste des SCPI et pierre-papier avec 24 ans d'expérience.",
    certifications: ["MRICS", "Expert SCPI"],
    domains: ["SCPI", "OPCI", "SCI"],
  },
  {
    id: 24,
    name: "Caroline Dupuis",
    title: "Experte Immobilier International",
    specialty: "Immobilier",
    experience: "13 ans",
    rating: 4.8,
    languages: ["Français", "Anglais", "Espagnol"],
    avatar: expertImmobilier4,
    description: "Conseillère en immobilier international et diversification géographique.",
    certifications: ["MRICS International", "CRE"],
    domains: ["Immobilier Europe", "USA", "Asie-Pacifique"],
  },

  // Crypto Experts
  {
    id: 6,
    name: "Émilie Dubois",
    title: "Experte Cryptoactifs",
    specialty: "Crypto",
    experience: "8 ans",
    rating: 4.7,
    languages: ["Français", "Anglais"],
    avatar: expertEmilie,
    description: "Conseillère spécialisée en actifs numériques et blockchain pour patrimoine.",
    certifications: ["CBFA", "Blockchain Expert"],
    domains: ["Cryptomonnaies", "DeFi", "NFTs"],
  },
  {
    id: 25,
    name: "Lucas Tessier",
    title: "Expert Blockchain",
    specialty: "Crypto",
    experience: "7 ans",
    rating: 4.8,
    languages: ["Français", "Anglais"],
    avatar: expertCrypto1,
    description: "Développeur et conseiller blockchain spécialisé en tokenisation.",
    certifications: ["Blockchain Developer", "Certified Bitcoin Professional"],
    domains: ["Blockchain", "Smart Contracts", "Tokenisation"],
  },
  {
    id: 26,
    name: "Sarah Lemoine",
    title: "Experte DeFi",
    specialty: "Crypto",
    experience: "6 ans",
    rating: 4.7,
    languages: ["Français", "Anglais"],
    avatar: expertCrypto2,
    description: "Spécialiste de la finance décentralisée et protocoles DeFi.",
    certifications: ["DeFi Specialist", "Ethereum Expert"],
    domains: ["DeFi", "Yield Farming", "Staking"],
  },
  {
    id: 27,
    name: "Maxime Collin",
    title: "Expert Trading Crypto",
    specialty: "Crypto",
    experience: "9 ans",
    rating: 4.6,
    languages: ["Français", "Anglais"],
    avatar: expertCrypto3,
    description: "Trader professionnel spécialisé dans les cryptomonnaies.",
    certifications: ["Certified Crypto Trader", "Technical Analyst"],
    domains: ["Trading", "Analyse Technique", "Market Making"],
  },
  {
    id: 28,
    name: "Camille Navarro",
    title: "Experte NFT & Métavers",
    specialty: "Crypto",
    experience: "5 ans",
    rating: 4.8,
    languages: ["Français", "Anglais"],
    avatar: expertCrypto4,
    description: "Spécialiste des NFTs, actifs numériques et investissements dans le métavers.",
    certifications: ["NFT Specialist", "Digital Assets Expert"],
    domains: ["NFTs", "Métavers", "Art Numérique"],
  },

  // Art Experts
  {
    id: 7,
    name: "Laurent Mercier",
    title: "Expert Art & Collection",
    specialty: "Art",
    experience: "25 ans",
    rating: 5.0,
    languages: ["Français", "Anglais", "Italien"],
    avatar: expertLaurent,
    description: "Spécialiste des investissements dans l'art, le vin et les objets de collection.",
    certifications: ["Expert Christie's", "CAA"],
    domains: ["Art Contemporain", "Vins & Spiritueux", "Montres"],
  },
  {
    id: 29,
    name: "Hélène Maréchal",
    title: "Experte Art Contemporain",
    specialty: "Art",
    experience: "18 ans",
    rating: 4.9,
    languages: ["Français", "Anglais"],
    avatar: expertArt1,
    description: "Curatrice et conseillère en art contemporain et investissement artistique.",
    certifications: ["Expert Sotheby's", "Art Advisor"],
    domains: ["Art Contemporain", "Sculptures", "Photographie"],
  },
  {
    id: 30,
    name: "Antoine Giraud",
    title: "Expert Vins & Spiritueux",
    specialty: "Art",
    experience: "22 ans",
    rating: 4.8,
    languages: ["Français", "Anglais", "Italien"],
    avatar: expertArt2,
    description: "Sommelier expert et conseiller en investissement vins et spiritueux rares.",
    certifications: ["Master Sommelier", "Wine Investment Specialist"],
    domains: ["Grands Crus", "Champagnes", "Whiskies Rares"],
  },
  {
    id: 31,
    name: "Élise Vigneron",
    title: "Experte Montres de Luxe",
    specialty: "Art",
    experience: "12 ans",
    rating: 4.9,
    languages: ["Français", "Anglais", "Suisse Allemand"],
    avatar: expertArt3,
    description: "Spécialiste horlogerie de luxe et montres de collection.",
    certifications: ["Horloger Expert", "Watch Appraiser"],
    domains: ["Patek Philippe", "Rolex", "Montres Vintage"],
  },
  {
    id: 32,
    name: "Robert Aubert",
    title: "Expert Voitures de Collection",
    specialty: "Art",
    experience: "28 ans",
    rating: 5.0,
    languages: ["Français", "Anglais", "Italien"],
    avatar: expertArt4,
    description: "Expert en automobiles de collection et voitures d'exception.",
    certifications: ["Classic Car Expert", "RM Sotheby's Specialist"],
    domains: ["Ferrari", "Porsche", "Voitures Classiques"],
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
          <p className="text-muted-foreground">Access our best advisors and specialized experts</p>
        </div>

        {/* Mes Conseillers Référents */}
        <Card className="shadow-card mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-primary" />
              <CardTitle>Your Dedicated Advisors</CardTitle>
            </div>
            <CardDescription>Your dedicated team of private banking advisors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {myAdvisors.map((advisor) => (
                <Card key={advisor.id} className="shadow-card border-primary/30 relative overflow-hidden">
                  {advisor.isMainAdvisor && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                      Main Advisor
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
            <CardTitle>Specialized Experts by Domain</CardTitle>
            <CardDescription>Consult our experts according to your investment needs</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="allocation">Allocation</TabsTrigger>
                <TabsTrigger value="alternatif">Alternative</TabsTrigger>
                <TabsTrigger value="esg">ESG</TabsTrigger>
                <TabsTrigger value="immobilier">Immobilier</TabsTrigger>
                <TabsTrigger value="crypto">Crypto</TabsTrigger>
                <TabsTrigger value="art">Art</TabsTrigger>
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

              <TabsContent value="crypto" className="space-y-4">
                {filteredBySpecialty("Crypto").map((expert) => (
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

              <TabsContent value="art" className="space-y-4">
                {filteredBySpecialty("Art").map((expert) => (
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
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
