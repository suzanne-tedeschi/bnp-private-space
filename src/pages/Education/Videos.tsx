import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Clock } from "lucide-react";
import { useState } from "react";

const videoCategories = {
  introduction: [
    {
      id: 1,
      title: "Les intérêts d'un PEA",
      duration: "3:24",
      views: "12.5k",
      videoUrl: "/videos/pea-interets.mp4",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      id: 2,
      title: "Comprendre le risque et le rendement",
      duration: "2:45",
      views: "9.8k",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    },
    {
      id: 3,
      title: "Actions vs Obligations : quelle différence ?",
      duration: "3:10",
      views: "15.2k",
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    },
    {
      id: 4,
      title: "Le pouvoir des intérêts composés",
      duration: "2:55",
      views: "11.3k",
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    },
  ],
  tech: [
    {
      id: 5,
      title: "IA et Machine Learning : les leaders du secteur",
      duration: "4:12",
      views: "18.7k",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
    {
      id: 6,
      title: "Semiconducteurs : la guerre des puces",
      duration: "3:45",
      views: "14.2k",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
    {
      id: 7,
      title: "Cloud Computing : investir dans l'infrastructure",
      duration: "3:30",
      views: "10.9k",
      thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    },
  ],
  crypto: [
    {
      id: 8,
      title: "Bitcoin et Ethereum : comprendre les fondamentaux",
      duration: "4:20",
      views: "22.1k",
      thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    },
    {
      id: 9,
      title: "DeFi : la finance décentralisée expliquée",
      duration: "3:55",
      views: "16.4k",
      thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    },
    {
      id: 10,
      title: "NFTs et tokenisation d'actifs",
      duration: "3:15",
      views: "13.8k",
      thumbnail: "https://images.unsplash.com/photo-1645731947731-67e1536fe127?w=800&q=80",
    },
  ],
  art: [
    {
      id: 11,
      title: "Art contemporain : identifier les talents émergents",
      duration: "4:30",
      views: "8.9k",
      thumbnail: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
    },
    {
      id: 12,
      title: "Maîtres anciens : investissement de patrimoine",
      duration: "3:50",
      views: "7.2k",
      thumbnail: "https://images.unsplash.com/photo-1577083552431-6e5fd01c3898?w=800&q=80",
    },
    {
      id: 13,
      title: "Art digital et galeries virtuelles",
      duration: "3:25",
      views: "11.5k",
      thumbnail: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    },
  ],
  sport: [
    {
      id: 14,
      title: "Investir dans les franchises sportives",
      duration: "4:05",
      views: "9.6k",
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    },
    {
      id: 15,
      title: "E-sport : le nouveau terrain de jeu des investisseurs",
      duration: "3:35",
      views: "12.3k",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    },
    {
      id: 16,
      title: "Équipementiers sportifs : analyse sectorielle",
      duration: "3:20",
      views: "8.1k",
      thumbnail: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80",
    },
  ],
  luxury: [
    {
      id: 17,
      title: "LVMH, Hermès, Kering : les géants du luxe",
      duration: "4:15",
      views: "15.7k",
      thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    },
    {
      id: 18,
      title: "Montres de collection : horlogerie et investissement",
      duration: "3:40",
      views: "10.2k",
      thumbnail: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    },
    {
      id: 19,
      title: "Vins et spiritueux : patrimoine liquide",
      duration: "3:55",
      views: "7.8k",
      thumbnail: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    },
  ],
  immobilier: [
    {
      id: 20,
      title: "SCPI et REIT : l'immobilier sans contrainte",
      duration: "3:50",
      views: "13.4k",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      id: 21,
      title: "Immobilier commercial : bureaux et retail",
      duration: "4:00",
      views: "9.7k",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      id: 22,
      title: "Logistique et datacenters : les nouveaux eldorados",
      duration: "3:30",
      views: "11.8k",
      thumbnail: "https://images.unsplash.com/photo-1565514158740-64d8c6de9870?w=800&q=80",
    },
  ],
  green: [
    {
      id: 23,
      title: "Énergies renouvelables : solaire, éolien, hydrogène",
      duration: "4:25",
      views: "16.9k",
      thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    },
    {
      id: 24,
      title: "Véhicules électriques : au-delà de Tesla",
      duration: "3:45",
      views: "14.6k",
      thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    },
    {
      id: 25,
      title: "Économie circulaire et gestion des déchets",
      duration: "3:20",
      views: "8.5k",
      thumbnail: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    },
  ],
};

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; videoUrl?: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Vidéos Format Court</h1>
          <p className="text-muted-foreground text-lg">
            Apprenez rapidement avec nos vidéos courtes et impactantes
          </p>
        </div>

        {/* Pour Vous Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pour vous</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoCategories.introduction.slice(0, 3).map((video) => (
              <Card 
                key={video.id} 
                className="shadow-card hover:shadow-lg transition-all cursor-pointer group overflow-hidden border-primary/50"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="bg-primary rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary-foreground fill-current" />
                    </div>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-black/70">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </Badge>
                  <Badge className="absolute top-2 left-2 bg-primary">Recommandé</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm group-hover:text-primary transition-colors">
                    {video.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="introduction" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="tech">Tech</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="art">Art</TabsTrigger>
            <TabsTrigger value="sport">Sport</TabsTrigger>
            <TabsTrigger value="luxury">Luxe</TabsTrigger>
            <TabsTrigger value="immobilier">Immobilier</TabsTrigger>
            <TabsTrigger value="green">Vert</TabsTrigger>
          </TabsList>

          <TabsContent value="introduction">
            <VideoGrid videos={videoCategories.introduction} categoryName="Introduction Générale" onVideoClick={setSelectedVideo} />
          </TabsContent>

          <TabsContent value="tech">
            <VideoGrid videos={videoCategories.tech} categoryName="Technologie" onVideoClick={setSelectedVideo} />
          </TabsContent>

          <TabsContent value="crypto">
            <VideoGrid videos={videoCategories.crypto} categoryName="Cryptomonnaies & Blockchain" onVideoClick={setSelectedVideo} />
          </TabsContent>

          <TabsContent value="art">
            <VideoGrid videos={videoCategories.art} categoryName="Art & Collection" onVideoClick={setSelectedVideo} />
          </TabsContent>

          <TabsContent value="sport">
            <VideoGrid videos={videoCategories.sport} categoryName="Sport & E-sport" onVideoClick={setSelectedVideo} />
          </TabsContent>

          <TabsContent value="luxury">
            <VideoGrid videos={videoCategories.luxury} categoryName="Luxe & Passion" onVideoClick={setSelectedVideo} />
          </TabsContent>

          <TabsContent value="immobilier">
            <VideoGrid videos={videoCategories.immobilier} categoryName="Immobilier" onVideoClick={setSelectedVideo} />
          </TabsContent>

          <TabsContent value="green">
            <VideoGrid videos={videoCategories.green} categoryName="Transition Écologique" onVideoClick={setSelectedVideo} />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-md">
          {selectedVideo?.videoUrl ? (
            <video 
              controls 
              autoPlay 
              className="w-full aspect-[9/16] bg-black rounded-lg"
              src={selectedVideo.videoUrl}
            >
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          ) : (
            <div className="aspect-[9/16] bg-muted flex items-center justify-center rounded-lg">
              <p className="text-muted-foreground">Vidéo non disponible</p>
            </div>
          )}
          <h3 className="text-lg font-semibold mt-4">{selectedVideo?.title}</h3>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const VideoGrid = ({ videos, categoryName, onVideoClick }: { videos: any[]; categoryName: string; onVideoClick: (video: any) => void }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{categoryName}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card 
            key={video.id} 
            className="shadow-card hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
            onClick={() => onVideoClick(video)}
          >
            <div className="relative aspect-[9/16] overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-primary-foreground fill-current" />
                </div>
              </div>
              <Badge className="absolute top-2 right-2 bg-black/70">
                <Clock className="h-3 w-3 mr-1" />
                {video.duration}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-base group-hover:text-primary transition-colors">
                {video.title}
              </CardTitle>
              <CardDescription>{video.views} vues</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Videos;
