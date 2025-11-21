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
    description: "Specialist in emerging markets and geographical diversification.",
    certifications: ["CFA"],
    isMainAdvisor: false,
  },
];

const specialistExperts = [
  // Allocation Experts
  {
    id: 8,
    name: "Nathalie Bernard",
    title: "Tax Expert",
    specialty: "Allocation",
    experience: "16 years",
    rating: 4.9,
    languages: ["French", "English"],
    avatar: expertNathalie,
    description: "Advisor in tax optimization and wealth structuring.",
    certifications: ["Certified Public Accountant", "Tax Lawyer"],
    domains: ["Taxation", "Estate Transfer", "Holding Companies"],
  },
  {
    id: 9,
    name: "Philippe Girard",
    title: "Asset Allocation Expert",
    specialty: "Allocation",
    experience: "22 years",
    rating: 4.9,
    languages: ["French", "English"],
    avatar: expertAllocation1,
    description: "Specialist in strategic and tactical allocation for diversified portfolios.",
    certifications: ["CFA", "CIPM"],
    domains: ["Strategic Allocation", "Multi-Asset", "Risk Management"],
  },
  {
    id: 10,
    name: "Isabelle Moreau",
    title: "Wealth Management Expert",
    specialty: "Allocation",
    experience: "14 years",
    rating: 4.8,
    languages: ["French", "English", "Italian"],
    avatar: expertAllocation2,
    description: "Wealth advisor specialized in global wealth optimization.",
    certifications: ["CFP", "CGPC"],
    domains: ["Global Wealth", "Tax Optimization", "Estate Transfer"],
  },
  {
    id: 11,
    name: "Alexandre Petit",
    title: "Investment Strategist",
    specialty: "Allocation",
    experience: "11 years",
    rating: 4.7,
    languages: ["French", "English"],
    avatar: expertAllocation3,
    description: "Expert in investment strategies and dynamic portfolio allocation.",
    certifications: ["CFA", "FRM"],
    domains: ["Macro Strategy", "Asset Allocation", "Active Management"],
  },
  {
    id: 12,
    name: "Catherine Leroy",
    title: "Portfolio Management Expert",
    specialty: "Allocation",
    experience: "19 years",
    rating: 4.9,
    languages: ["French", "English"],
    avatar: expertAllocation4,
    description: "Senior portfolio manager specialized in balanced allocation.",
    certifications: ["CFA", "CAIA"],
    domains: ["Discretionary Management", "Diversification", "Performance"],
  },

  // Alternatif Experts
  {
    id: 3,
    name: "Pierre Leblanc",
    title: "Private Equity Expert",
    specialty: "Alternative",
    experience: "18 years",
    rating: 5.0,
    languages: ["French", "English"],
    avatar: expertPierre,
    description: "Specialist in private equity and alternative assets for high-net-worth clients.",
    certifications: ["CAIA", "CFA"],
    domains: ["Private Equity", "Venture Capital", "Infrastructure"],
  },
  {
    id: 13,
    name: "Julien Fontaine",
    title: "Hedge Funds Expert",
    specialty: "Alternative",
    experience: "15 years",
    rating: 4.8,
    languages: ["French", "English"],
    avatar: expertAlternatif1,
    description: "Specialist in hedge funds and sophisticated alternative strategies.",
    certifications: ["CAIA", "CFA"],
    domains: ["Hedge Funds", "Long/Short Equity", "Global Macro"],
  },
  {
    id: 14,
    name: "Sophie Dumas",
    title: "Venture Capital Expert",
    specialty: "Alternative",
    experience: "9 years",
    rating: 4.7,
    languages: ["French", "English"],
    avatar: expertAlternatif2,
    description: "Specialist in venture capital and investments in innovative startups.",
    certifications: ["CAIA", "MBA"],
    domains: ["Venture Capital", "Tech Startups", "Growth Equity"],
  },
  {
    id: 15,
    name: "Michel Blanchard",
    title: "Commodities Expert",
    specialty: "Alternative",
    experience: "21 years",
    rating: 4.8,
    languages: ["French"],
    avatar: expertAlternatif3,
    description: "Advisor specialized in commodities and precious metals investments.",
    certifications: ["CAIA", "Expert Commodities"],
    domains: ["Gold & Silver", "Oil & Gas", "Agriculture"],
  },
  {
    id: 16,
    name: "Valérie Chevalier",
    title: "Infrastructure Expert",
    specialty: "Alternative",
    experience: "13 years",
    rating: 4.9,
    languages: ["French", "English"],
    avatar: expertAlternatif4,
    description: "Specialist in infrastructure and real assets investments.",
    certifications: ["CAIA", "Infrastructure Specialist"],
    domains: ["Infrastructure", "Energy", "Transport"],
  },

  // ESG Experts
  {
    id: 4,
    name: "Claire Martin",
    title: "ESG & Impact Expert",
    specialty: "ESG",
    experience: "12 years",
    rating: 4.9,
    languages: ["French", "English", "Spanish"],
    avatar: expertClaire,
    description: "Advisor in sustainable investment and social impact finance.",
    certifications: ["CFA ESG", "FSA"],
    domains: ["ESG", "Impact Investing", "Green Bonds"],
  },
  {
    id: 17,
    name: "Olivier Renaud",
    title: "Sustainable Finance Expert",
    specialty: "ESG",
    experience: "14 years",
    rating: 4.8,
    languages: ["French", "English"],
    avatar: expertEsg1,
    description: "Specialist in sustainable finance and environmental criteria.",
    certifications: ["CFA ESG", "Sustainability Expert"],
    domains: ["Green Finance", "Climate", "Biodiversity"],
  },
  {
    id: 18,
    name: "Marie Lacroix",
    title: "Social Impact Expert",
    specialty: "ESG",
    experience: "10 years",
    rating: 4.9,
    languages: ["French", "English"],
    avatar: expertEsg2,
    description: "Advisor in social impact investing and microfinance.",
    certifications: ["Impact Investing Certified", "FSA"],
    domains: ["Social Impact", "Microfinance", "Social Economy"],
  },
  {
    id: 19,
    name: "François Bertrand",
    title: "Green Bonds Expert",
    specialty: "ESG",
    experience: "17 years",
    rating: 4.7,
    languages: ["French", "English"],
    avatar: expertEsg3,
    description: "Specialist in green bonds and sustainable financing.",
    certifications: ["CFA", "Green Bond Expert"],
    domains: ["Green Bonds", "Social Bonds", "Sustainability Bonds"],
  },
  {
    id: 20,
    name: "Léa Bonnet",
    title: "Energy Transition Expert",
    specialty: "ESG",
    experience: "8 years",
    rating: 4.8,
    languages: ["French", "English"],
    avatar: expertEsg4,
    description: "Advisor in energy transition investments.",
    certifications: ["ESG Analyst", "Energy Transition Specialist"],
    domains: ["Renewable Energy", "Energy Efficiency", "Decarbonization"],
  },

  // Immobilier Experts
  {
    id: 5,
    name: "Thomas Rousseau",
    title: "Real Estate Expert",
    specialty: "Real Estate",
    experience: "20 years",
    rating: 4.8,
    languages: ["French"],
    avatar: expertThomas,
    description: "Specialist in investment real estate and premium REITs.",
    certifications: ["MRICS", "Real Estate Expert"],
    domains: ["Real Estate", "REITs", "Real Estate Funds"],
  },
  {
    id: 21,
    name: "David Carpentier",
    title: "Commercial Real Estate Expert",
    specialty: "Real Estate",
    experience: "16 years",
    rating: 4.9,
    languages: ["French", "English"],
    avatar: expertImmobilier1,
    description: "Specialist in commercial real estate and premium offices.",
    certifications: ["MRICS", "CCIM"],
    domains: ["Offices", "Retail", "Logistics"],
  },
  {
    id: 22,
    name: "Pauline Gauthier",
    title: "Residential Real Estate Expert",
    specialty: "Real Estate",
    experience: "11 years",
    rating: 4.7,
    languages: ["French", "English"],
    avatar: expertImmobilier2,
    description: "Advisor in luxury residential real estate and tax optimization.",
    certifications: ["Real Estate Expert", "CIF"],
    domains: ["Luxury Residential", "Tax Benefits", "Tax Optimization"],
  },
  {
    id: 23,
    name: "Henri Marchand",
    title: "REITs Expert",
    specialty: "Real Estate",
    experience: "24 years",
    rating: 4.9,
    languages: ["French"],
    avatar: expertImmobilier3,
    description: "Specialist in REITs and real estate funds with 24 years of experience.",
    certifications: ["MRICS", "REITs Expert"],
    domains: ["REITs", "Real Estate Funds", "Investment Companies"],
  },
  {
    id: 24,
    name: "Caroline Dupuis",
    title: "International Real Estate Expert",
    specialty: "Real Estate",
    experience: "13 years",
    rating: 4.8,
    languages: ["French", "English", "Spanish"],
    avatar: expertImmobilier4,
    description: "Advisor in international real estate and geographic diversification.",
    certifications: ["MRICS International", "CRE"],
    domains: ["European Real Estate", "USA", "Asia-Pacific"],
  },

  // Crypto Experts
  {
    id: 6,
    name: "Émilie Dubois",
    title: "Crypto Assets Expert",
    specialty: "Crypto",
    experience: "8 years",
    rating: 4.7,
    languages: ["French", "English"],
    avatar: expertEmilie,
    description: "Advisor specialized in digital assets and blockchain for wealth management.",
    certifications: ["CBFA", "Blockchain Expert"],
    domains: ["Cryptocurrencies", "DeFi", "NFTs"],
  },
  {
    id: 25,
    name: "Lucas Tessier",
    title: "Blockchain Expert",
    specialty: "Crypto",
    experience: "7 years",
    rating: 4.8,
    languages: ["French", "English"],
    avatar: expertCrypto1,
    description: "Developer and blockchain advisor specialized in tokenization.",
    certifications: ["Blockchain Developer", "Certified Bitcoin Professional"],
    domains: ["Blockchain", "Smart Contracts", "Tokenization"],
  },
  {
    id: 26,
    name: "Sarah Lemoine",
    title: "DeFi Expert",
    specialty: "Crypto",
    experience: "6 years",
    rating: 4.7,
    languages: ["French", "English"],
    avatar: expertCrypto2,
    description: "Specialist in decentralized finance and DeFi protocols.",
    certifications: ["DeFi Specialist", "Ethereum Expert"],
    domains: ["DeFi", "Yield Farming", "Staking"],
  },
  {
    id: 27,
    name: "Maxime Collin",
    title: "Crypto Trading Expert",
    specialty: "Crypto",
    experience: "9 years",
    rating: 4.6,
    languages: ["French", "English"],
    avatar: expertCrypto3,
    description: "Professional trader specialized in cryptocurrencies.",
    certifications: ["Certified Crypto Trader", "Technical Analyst"],
    domains: ["Trading", "Technical Analysis", "Market Making"],
  },
  {
    id: 28,
    name: "Camille Navarro",
    title: "NFT & Metaverse Expert",
    specialty: "Crypto",
    experience: "5 years",
    rating: 4.8,
    languages: ["French", "English"],
    avatar: expertCrypto4,
    description: "Specialist in NFTs, digital assets and metaverse investments.",
    certifications: ["NFT Specialist", "Digital Assets Expert"],
    domains: ["NFTs", "Metaverse", "Digital Art"],
  },

  // Art Experts
  {
    id: 7,
    name: "Laurent Mercier",
    title: "Art & Collectibles Expert",
    specialty: "Art",
    experience: "25 years",
    rating: 5.0,
    languages: ["French", "English", "Italian"],
    avatar: expertLaurent,
    description: "Specialist in art, wine and collectibles investments.",
    certifications: ["Christie's Expert", "CAA"],
    domains: ["Contemporary Art", "Wine & Spirits", "Watches"],
  },
  {
    id: 29,
    name: "Hélène Maréchal",
    title: "Contemporary Art Expert",
    specialty: "Art",
    experience: "18 years",
    rating: 4.9,
    languages: ["French", "English"],
    avatar: expertArt1,
    description: "Curator and advisor in contemporary art and artistic investment.",
    certifications: ["Sotheby's Expert", "Art Advisor"],
    domains: ["Contemporary Art", "Sculptures", "Photography"],
  },
  {
    id: 30,
    name: "Antoine Giraud",
    title: "Wine & Spirits Expert",
    specialty: "Art",
    experience: "22 years",
    rating: 4.8,
    languages: ["French", "English", "Italian"],
    avatar: expertArt2,
    description: "Master sommelier and advisor in rare wine and spirits investment.",
    certifications: ["Master Sommelier", "Wine Investment Specialist"],
    domains: ["Grand Crus", "Champagnes", "Rare Whiskies"],
  },
  {
    id: 31,
    name: "Élise Vigneron",
    title: "Luxury Watches Expert",
    specialty: "Art",
    experience: "12 years",
    rating: 4.9,
    languages: ["French", "English", "Swiss German"],
    avatar: expertArt3,
    description: "Specialist in luxury watches and collectible timepieces.",
    certifications: ["Expert Watchmaker", "Watch Appraiser"],
    domains: ["Patek Philippe", "Rolex", "Vintage Watches"],
  },
  {
    id: 32,
    name: "Robert Aubert",
    title: "Classic Cars Expert",
    specialty: "Art",
    experience: "28 years",
    rating: 5.0,
    languages: ["French", "English", "Italian"],
    avatar: expertArt4,
    description: "Expert in collectible automobiles and exceptional cars.",
    certifications: ["Classic Car Expert", "RM Sotheby's Specialist"],
    domains: ["Ferrari", "Porsche", "Classic Cars"],
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
                          <span className="text-sm text-muted-foreground">{advisor.experience} of experience</span>
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
                            Book Appointment
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
                <TabsTrigger value="immobilier">Real Estate</TabsTrigger>
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
                              Book a consultation
                            </Button>
                            <Button variant="outline">
                              View full profile
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
                          <Button>Consult</Button>
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
                          <Button>Consult</Button>
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
                          <Button>Consult</Button>
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
                          <Button>Consult</Button>
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
                              Book a consultation
                            </Button>
                            <Button variant="outline">
                              View full profile
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
                              Book a consultation
                            </Button>
                            <Button variant="outline">
                              View full profile
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
