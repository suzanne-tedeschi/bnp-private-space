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
          <h1 className="text-4xl font-bold mb-3">Learn</h1>
          <p className="text-muted-foreground text-lg">
            Choose your preferred learning format
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
                  <CardDescription>Detailed guides and analysis</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access a library of in-depth articles on investment strategies, 
                market trends and sectoral analysis.
              </p>
              <div className="flex items-center text-sm text-primary">
                <span>Explore articles</span>
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
                  <CardTitle>Videos</CardTitle>
                  <CardDescription>Short and dynamic content</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Discover short-form videos on investing, from introduction to 
                specific opportunities by sector (art, crypto, sports, etc.).
              </p>
              <div className="flex items-center text-sm text-accent">
                <span>Watch videos</span>
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
                  <CardDescription>Listen on the go</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Stay informed on your commute with our expert podcasts covering 
                financial news and investment strategies.
              </p>
              <div className="flex items-center text-sm text-primary">
                <span>Listen to podcasts</span>
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
                  <CardTitle>Discussion with an Expert</CardTitle>
                  <CardDescription>Personalized support</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Connect directly with our expert advisors for personalized recommendations 
                and answers to your specific questions.
              </p>
              <div className="flex items-center text-sm text-accent">
                <span>Contact an expert</span>
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
