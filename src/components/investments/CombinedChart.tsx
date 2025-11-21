import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Données historiques + projections
const generateChartData = (selectedScenario?: string) => {
  const baseData = [
    { month: "Jan 2024", valeur: 250000 },
    { month: "Fév 2024", valeur: 258000 },
    { month: "Mar 2024", valeur: 263000 },
    { month: "Avr 2024", valeur: 269000 },
    { month: "Mai 2024", valeur: 275000 },
    { month: "Juin 2024", valeur: 282000 },
    { month: "Juil 2024", valeur: 288000 },
    { month: "Août 2024", valeur: 291000 },
    { month: "Sep 2024", valeur: 295600 },
  ];

  const scenarios = {
    optimiste: [
      { month: "Oct 2024", valeur: 305000, optimiste: 305000, probable: 300000, pessimiste: 297000 },
      { month: "Nov 2024", valeur: undefined, optimiste: 318000, probable: 306000, pessimiste: 298000 },
      { month: "Déc 2024", valeur: undefined, optimiste: 332000, probable: 312000, pessimiste: 299000 },
      { month: "Jan 2025", valeur: undefined, optimiste: 348000, probable: 319000, pessimiste: 300000 },
      { month: "Fév 2025", valeur: undefined, optimiste: 365000, probable: 326000, pessimiste: 301000 },
    ],
  };

  return [...baseData, ...scenarios.optimiste];
};

interface CombinedChartProps {
  selectedScenario?: string;
}

export const CombinedChart = ({ selectedScenario }: CombinedChartProps) => {
  const data = generateChartData(selectedScenario);

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Global Portfolio Evolution</CardTitle>
        <CardDescription>
          Historical data and projections based on current trends
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k€`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value: any) => [`${value?.toLocaleString('fr-FR')} €`, ""]}
            />
            <Legend />
            
            {/* Ligne historique */}
            <Line
              type="monotone"
              dataKey="valeur"
              stroke="hsl(156 100% 29%)"
              strokeWidth={3}
              name="Historical"
              dot={{ fill: "hsl(156 100% 29%)", r: 4 }}
            />
            
            {/* Scénarios futurs */}
            <Line
              type="monotone"
              dataKey="optimiste"
              stroke="hsl(142 76% 36%)"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Best scenario"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="probable"
              stroke="hsl(75 100% 60%)"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Likely scenario"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="pessimiste"
              stroke="hsl(0 84% 60%)"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Critical scenario"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
