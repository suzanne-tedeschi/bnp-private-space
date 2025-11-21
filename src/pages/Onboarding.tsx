import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, Phone, Users, Sparkles, ArrowRight } from "lucide-react";

export default function Onboarding() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      id: "advisor",
      title: "With my advisor",
      description: "Personalized support to get started",
      icon: Users,
      formats: [
        { name: "In person", icon: Users },
        { name: "By phone", icon: Phone },
        { name: "By video conference", icon: Video },
      ],
    },
    {
      id: "autonomous",
      title: "Independently",
      description: "Guided questionnaire and personalized simulation",
      icon: Sparkles,
    },
    {
      id: "existing",
      title: "Existing client",
      description: "Access my space directly",
      icon: ArrowRight,
    },
  ];

  const handleContinue = () => {
    if (selectedOption === "existing" || selectedOption === "autonomous") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary" />
            <div className="text-left">
              <h1 className="text-2xl font-bold">BNP Paribas</h1>
              <p className="text-sm text-muted-foreground">Private Banking</p>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Welcome to your private space</h2>
          <p className="text-xl text-muted-foreground">
            How would you like to start your experience?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {options.map((option) => (
            <Card
              key={option.id}
              className={`p-6 cursor-pointer transition-all hover:shadow-elegant ${
                selectedOption === option.id
                  ? "ring-2 ring-primary shadow-elegant"
                  : "hover:border-primary/50"
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <option.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>

                {option.formats && selectedOption === option.id && (
                  <div className="w-full pt-4 border-t space-y-2">
                    {option.formats.map((format) => (
                      <Button
                        key={format.name}
                        variant="outline"
                        className="w-full justify-start"
                        size="sm"
                      >
                        <format.icon className="h-4 w-4 mr-2" />
                        {format.name}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {selectedOption && (
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleContinue}
              className="bg-gradient-primary hover:opacity-90 transition-opacity px-8"
            >
              Continue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
