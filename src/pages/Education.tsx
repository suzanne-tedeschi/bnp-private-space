import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, Headphones, Users, ArrowUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">M'éduquer</h1>
          <p className="text-muted-foreground text-lg">
            Choisissez votre format d'apprentissage préféré
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Articles */}
          <Card 
            className="shadow-card cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
            onClick={() => navigate('/education/articles')}
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle>Articles</CardTitle>
                  <CardDescription>Guides détaillés et analyses</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Accédez à une bibliothèque d'articles approfondis sur les stratégies d'investissement, 
                les tendances du marché et les analyses sectorielles.
              </p>
              <div className="flex items-center text-sm text-primary">
                <span>Explorer les articles</span>
                <ArrowUpDown className="ml-2 h-4 w-4 rotate-90" />
              </div>
            </CardContent>
          </Card>

          {/* Vidéos */}
          <Card 
            className="shadow-card cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
            onClick={() => navigate('/education/videos')}
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <Video className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <CardTitle>Vidéos</CardTitle>
                  <CardDescription>Contenus courts et dynamiques</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Découvrez des vidéos format court sur l'investissement, de l'introduction aux 
                opportunités spécifiques par secteur (art, crypto, sport, etc.).
              </p>
              <div className="flex items-center text-sm text-accent">
                <span>Regarder les vidéos</span>
                <ArrowUpDown className="ml-2 h-4 w-4 rotate-90" />
              </div>
            </CardContent>
          </Card>

          {/* Podcasts */}
          <Card 
            className="shadow-card cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
            onClick={() => navigate('/education/podcasts')}
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle>Podcasts</CardTitle>
                  <CardDescription>Écoute en mobilité</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Restez informé lors de vos déplacements avec nos podcasts d'experts couvrant 
                les actualités financières et les stratégies d'investissement.
              </p>
              <div className="flex items-center text-sm text-primary">
                <span>Écouter les podcasts</span>
                <ArrowUpDown className="ml-2 h-4 w-4 rotate-90" />
              </div>
            </CardContent>
          </Card>

          {/* Discussion Expert */}
          <Card 
            className="shadow-card cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
            onClick={() => navigate('/education/experts')}
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <CardTitle>Discussion avec un Expert</CardTitle>
                  <CardDescription>Accompagnement personnalisé</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Échangez directement avec nos conseillers experts pour des recommandations 
                personnalisées et des réponses à vos questions spécifiques.
              </p>
              <div className="flex items-center text-sm text-accent">
                <span>Contacter un expert</span>
                <ArrowUpDown className="ml-2 h-4 w-4 rotate-90" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
