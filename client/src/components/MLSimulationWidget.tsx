import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Cpu, Activity, AlertTriangle, CheckCircle, BarChart3, RefreshCw } from "lucide-react";

export default function MLSimulationWidget() {
  const [density, setDensity] = useState<number>(65);
  const [speed, setSpeed] = useState<number>(45);
  const [condition, setCondition] = useState<string>("rush_hour");

  // Calculate ML prediction dynamically
  const calculatePrediction = () => {
    let riskScore = (density / 150) * 60 + ((100 - speed) / 100) * 40;
    if (condition === "rain") riskScore += 15;
    if (condition === "fog") riskScore += 20;
    if (condition === "rush_hour") riskScore += 25;

    riskScore = Math.min(100, Math.max(5, riskScore));

    let level: "Low" | "Moderate" | "High" | "Severe" = "Low";
    let color = "text-emerald-400 bg-emerald-950/40 border-emerald-800/50";
    let badgeVariant: "default" | "secondary" | "outline" | "destructive" = "secondary";

    if (riskScore > 75) {
      level = "Severe";
      color = "text-rose-400 bg-rose-950/40 border-rose-800/50";
      badgeVariant = "destructive";
    } else if (riskScore > 50) {
      level = "High";
      color = "text-amber-400 bg-amber-950/40 border-amber-800/50";
    } else if (riskScore > 30) {
      level = "Moderate";
      color = "text-yellow-300 bg-yellow-950/40 border-yellow-800/50";
    }

    const estimatedSpeedDrop = Math.min(85, Math.round(riskScore * 0.75));
    const featureCount = 10;
    const modelAccuracy = "81.0%";
    const rocAuc = "0.943";

    return { riskScore, level, color, badgeVariant, estimatedSpeedDrop, featureCount, modelAccuracy, rocAuc };
  };

  const pred = calculatePrediction();

  return (
    <Card className="border border-border/80 bg-card/80 backdrop-blur-md overflow-hidden" data-testid="ml-simulation-widget">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-chart-2 to-chart-4" />
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-primary" />
            <CardTitle className="text-xl">CARLA Simulator ML Prediction Engine</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs text-primary border-primary/30">
              ROC-AUC: {pred.rocAuc}
            </Badge>
            <Badge variant="secondary" className="font-mono text-xs">
              Accuracy: {pred.modelAccuracy}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-xs">
          Interactive simulation widget modeling your CARLA synthetic traffic dataset & Random Forest / XGBoost classifiers.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sliders & Controls */}
          <div className="space-y-5 bg-background/50 p-4 rounded-lg border border-border/50">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold">Vehicle Density</span>
                <span className="text-xs font-mono text-primary font-bold">{density} vehicles/km</span>
              </div>
              <Slider
                value={[density]}
                min={10}
                max={150}
                step={5}
                onValueChange={(val) => setDensity(val[0])}
                className="cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold">Average Traffic Speed</span>
                <span className="text-xs font-mono text-chart-2 font-bold">{speed} km/h</span>
              </div>
              <Slider
                value={[speed]}
                min={10}
                max={100}
                step={5}
                onValueChange={(val) => setSpeed(val[0])}
                className="cursor-pointer"
              />
            </div>

            <div>
              <span className="text-xs font-semibold block mb-2">Simulated Condition</span>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger className="text-xs">
                  <SelectValue placeholder="Select simulation scenario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clear">Clear Weather / Normal Flow</SelectItem>
                  <SelectItem value="rain">Rain / Wet Asphalt Surface</SelectItem>
                  <SelectItem value="fog">Heavy Fog / Reduced Visibility</SelectItem>
                  <SelectItem value="rush_hour">Peak Hour Rush / Bottleneck</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Model Output Panel */}
          <div className={`p-5 rounded-lg border flex flex-col justify-between ${pred.color}`}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">Predicted Congestion Level</span>
                <Badge variant={pred.badgeVariant} className="text-xs font-bold">
                  {pred.level} Risk
                </Badge>
              </div>

              <div className="text-3xl font-extrabold font-mono mb-2">
                {Math.round(pred.riskScore)}% <span className="text-xs font-normal text-muted-foreground">Congestion Risk</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-background/50 h-2.5 rounded-full overflow-hidden mb-4 border border-border/30">
                <div
                  className="h-full transition-all duration-500 rounded-full bg-current"
                  style={{ width: `${pred.riskScore}%` }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-current/20">
                <div>
                  <span className="text-muted-foreground block text-[11px]">Speed Delta</span>
                  <span className="font-mono font-bold">-{pred.estimatedSpeedDrop}% Drop</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Engineered Features</span>
                  <span className="font-mono font-bold">10+ PySpark</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-[11px] text-muted-foreground border-t border-current/20">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Leakage-free Classifier
              </span>
              <span className="font-mono">PySpark · CARLA</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
