import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const getDiversificationData = (selectedRecommendation?: string) => {
  const baseData = [
    { category: "Europe", geographie: 65, industrie: 45 },
    { category: "Amérique du Nord", geographie: 25, industrie: 70 },
    { category: "Asie-Pacifique", geographie: 15, industrie: 30 },
    { category: "Émergents", geographie: 10, industrie: 20 },
    { category: "Technologie", geographie: 40, industrie: 75 },
    { category: "Finance", geographie: 55, industrie: 60 },
    { category: "Santé", geographie: 30, industrie: 35 },
    { category: "Énergie", geographie: 20, industrie: 25 },
  ];

  // Ajustements selon la recommandation sélectionnée
  if (selectedRecommendation === "Art") {
    return baseData.map(d => ({
      ...d,
      geographie: d.category === "Europe" ? d.geographie + 10 : d.geographie,
      industrie: d.industrie + 5,
    }));
  }

  if (selectedRecommendation === "Immobilier") {
    return baseData.map(d => ({
      ...d,
      geographie: d.category === "Europe" ? d.geographie + 15 : d.geographie,
    }));
  }

  if (selectedRecommendation === "Private Equity") {
    return baseData.map(d => ({
      ...d,
      industrie: d.category === "Technologie" ? d.industrie + 15 : d.industrie,
    }));
  }

  return baseData;
};

interface DiversificationRadarProps {
  selectedRecommendation?: string;
}

export const DiversificationRadar = ({ selectedRecommendation }: DiversificationRadarProps) => {
  const data = getDiversificationData(selectedRecommendation);

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Diversification du Portefeuille</CardTitle>
        <CardDescription>
          Répartition géographique et sectorielle
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={data}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis 
              dataKey="category" 
              tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]}
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <Radar
              name="Géographie"
              dataKey="geographie"
              stroke="hsl(156 100% 29%)"
              fill="hsl(156 100% 29%)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar
              name="Industrie"
              dataKey="industrie"
              stroke="hsl(75 100% 60%)"
              fill="hsl(75 100% 60%)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
