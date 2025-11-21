import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface InvestmentMiniChartProps {
  name: string;
  value: number;
  performance: number;
  data: Array<{ value: number }>;
}

export const InvestmentMiniChart = ({ name, value, performance, data }: InvestmentMiniChartProps) => {
  const isPositive = performance >= 0;

  return (
    <Card className="shadow-card hover:shadow-lg transition-all">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold">{value.toLocaleString('fr-FR')} €</span>
          <div className={`flex items-center text-sm ${isPositive ? 'text-primary' : 'text-destructive'}`}>
            {isPositive ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 mr-1" />
            )}
            {isPositive ? '+' : ''}{performance}%
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={60}>
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={isPositive ? "hsl(156 100% 29%)" : "hsl(0 84% 60%)"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
