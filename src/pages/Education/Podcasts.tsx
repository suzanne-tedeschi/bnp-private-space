import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";

const podcasts = [
  {
    id: 1,
    title: "Stratégies d'investissement pour 2025",
    host: "Sophie Durand",
    duration: "32:15",
    date: "15 Nov 2025",
    category: "Stratégie",
    description: "Analyse des tendances macro-économiques et opportunités pour l'année à venir.",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&q=80",
  },
  {
    id: 2,
    title: "La révolution de l'IA dans la finance",
    host: "Marc Leblanc",
    duration: "28:45",
    date: "12 Nov 2025",
    category: "Technologie",
    description: "Comment l'intelligence artificielle transforme les marchés financiers.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
  },
  {
    id: 3,
    title: "Private Equity : accès et opportunités",
    host: "Claire Martin",
    duration: "35:20",
    date: "10 Nov 2025",
    category: "Alternative",
    description: "Décryptage du private equity pour investisseurs avertis.",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  },
  {
    id: 4,
    title: "Investissement ESG : impact et performance",
    host: "Thomas Bernard",
    duration: "30:10",
    date: "8 Nov 2025",
    category: "Durable",
    description: "Concilier rentabilité et impact positif avec les critères ESG.",
    thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80",
  },
  {
    id: 5,
    title: "Marchés émergents : Asie et Afrique",
    host: "Amélie Rousseau",
    duration: "33:50",
    date: "5 Nov 2025",
    category: "Géographie",
    description: "Opportunités et risques dans les économies en forte croissance.",
    thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
  },
  {
    id: 6,
    title: "Immobilier : diversification internationale",
    host: "Pierre Dubois",
    duration: "29:30",
    date: "3 Nov 2025",
    category: "Immobilier",
    description: "Stratégies pour diversifier son patrimoine immobilier à l'international.",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
  {
    id: 7,
    title: "Cryptomonnaies : au-delà du Bitcoin",
    host: "Laura Petit",
    duration: "31:45",
    date: "1 Nov 2025",
    category: "Crypto",
    description: "Explorer l'écosystème crypto : altcoins, DeFi et tokenisation.",
    thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&q=80",
  },
  {
    id: 8,
    title: "Art & Collection : investir dans la passion",
    host: "Julien Moreau",
    duration: "27:20",
    date: "29 Oct 2025",
    category: "Art",
    description: "L'art comme classe d'actif : rendement et plaisir.",
    thumbnail: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&q=80",
  },
];

const Podcasts = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Podcasts</h1>
          <p className="text-muted-foreground text-lg">
            Restez informé en mobilité avec nos experts
          </p>
        </div>

        {/* Featured Podcast */}
        <Card className="mb-8 shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto">
              <img
                src={podcasts[0].thumbnail}
                alt={podcasts[0].title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <Badge className="absolute top-4 left-4">À la une</Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-3">
                {podcasts[0].category}
              </Badge>
              <h2 className="text-3xl font-bold mb-3">{podcasts[0].title}</h2>
              <p className="text-muted-foreground mb-4">{podcasts[0].description}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                <span>{podcasts[0].host}</span>
                <span>•</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {podcasts[0].duration}
                </span>
                <span>•</span>
                <span>{podcasts[0].date}</span>
              </div>
              <Button size="lg" onClick={() => togglePlay(podcasts[0].id)}>
                {playingId === podcasts[0].id ? (
                  <>
                    <Pause className="mr-2 h-5 w-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Écouter maintenant
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>

        {/* All Episodes */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Tous les épisodes</h2>
        </div>

        <div className="space-y-4">
          {podcasts.slice(1).map((podcast) => (
            <Card key={podcast.id} className="shadow-card hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                  {/* Thumbnail */}
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={podcast.thumbnail}
                      alt={podcast.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">{podcast.category}</Badge>
                      <span className="text-sm text-muted-foreground">{podcast.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{podcast.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{podcast.description}</p>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <span>{podcast.host}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {podcast.duration}
                      </span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <Button
                    size="icon"
                    variant={playingId === podcast.id ? "default" : "outline"}
                    onClick={() => togglePlay(podcast.id)}
                    className="flex-shrink-0"
                  >
                    {playingId === podcast.id ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
