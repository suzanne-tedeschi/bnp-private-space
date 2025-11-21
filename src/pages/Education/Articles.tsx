import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, TrendingUp, Bookmark } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Les fondamentaux de la diversification de portefeuille",
    category: "Stratégie",
    readTime: "8 min",
    date: "12 Nov 2025",
    excerpt: "Découvrez comment construire un portefeuille équilibré et résilient face aux fluctuations du marché.",
    tags: ["Diversification", "Stratégie", "Débutant"],
  },
  {
    id: 2,
    title: "L'investissement responsable : ESG et impact",
    category: "Finance Durable",
    readTime: "12 min",
    date: "10 Nov 2025",
    excerpt: "Comprendre les critères ESG et leur importance croissante dans les décisions d'investissement.",
    tags: ["ESG", "Impact", "Tendances"],
  },
  {
    id: 3,
    title: "Marchés émergents : opportunités et risques",
    category: "Géographie",
    readTime: "10 min",
    date: "8 Nov 2025",
    excerpt: "Analyse des marchés émergents et stratégies pour capitaliser sur leur potentiel de croissance.",
    tags: ["Émergents", "Géographie", "Avancé"],
  },
  {
    id: 4,
    title: "Private Equity : accéder aux opportunités non cotées",
    category: "Classe d'actifs",
    readTime: "15 min",
    date: "5 Nov 2025",
    excerpt: "Guide complet sur le Private Equity pour les investisseurs qualifiés.",
    tags: ["Private Equity", "Alternatif", "Expert"],
  },
  {
    id: 5,
    title: "Obligations : comprendre les taux et la duration",
    category: "Revenus Fixes",
    readTime: "9 min",
    date: "3 Nov 2025",
    excerpt: "Les concepts clés pour investir intelligemment dans les obligations.",
    tags: ["Obligations", "Taux", "Intermédiaire"],
  },
  {
    id: 6,
    title: "L'art comme classe d'actif : guide du collectionneur-investisseur",
    category: "Alternatifs",
    readTime: "11 min",
    date: "1 Nov 2025",
    excerpt: "Comment intégrer l'art dans une stratégie d'investissement patrimoniale.",
    tags: ["Art", "Alternatif", "Passion"],
  },
  {
    id: 7,
    title: "Immobilier : diversification géographique et sectorielle",
    category: "Immobilier",
    readTime: "13 min",
    date: "29 Oct 2025",
    excerpt: "Stratégies d'investissement immobilier pour optimiser rendement et risque.",
    tags: ["Immobilier", "Diversification", "Tangible"],
  },
  {
    id: 8,
    title: "Technologies émergentes : IA, biotech et semiconducteurs",
    category: "Technologie",
    readTime: "10 min",
    date: "27 Oct 2025",
    excerpt: "Analyse des secteurs technologiques porteurs pour la décennie à venir.",
    tags: ["Tech", "Innovation", "Croissance"],
  },
];

const categories = ["Tous", "Stratégie", "Finance Durable", "Géographie", "Classe d'actifs", "Revenus Fixes", "Alternatifs", "Immobilier", "Technologie"];

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Articles & Guides</h1>
          <p className="text-muted-foreground text-lg">
            Développez votre expertise en investissement avec nos analyses approfondies
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Pour Vous Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pour vous</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.slice(0, 3).map((article) => (
              <Card key={article.id} className="shadow-card hover:shadow-lg transition-all cursor-pointer group border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <Badge className="bg-primary/10 text-primary">Recommandé</Badge>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-4 text-xs">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="shadow-card hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <Bookmark className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="flex items-center space-x-4 text-xs">
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun article trouvé pour votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
