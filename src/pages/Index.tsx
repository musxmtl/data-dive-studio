import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart2, Database, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className="ml-64 p-8 animate-fadeIn">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Transform Your Data Into Insights
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Upload your data and let our AI-powered analytics platform generate
            meaningful insights and beautiful visualizations.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary">
              Watch Demo
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 glass">
            <Database className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Data Processing</h3>
            <p className="text-muted-foreground">
              Automatic data cleansing and preprocessing for accurate analysis.
            </p>
          </Card>
          <Card className="p-6 glass">
            <BarChart2 className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Visual Analytics</h3>
            <p className="text-muted-foreground">
              Interactive dashboards and customizable visualizations.
            </p>
          </Card>
          <Card className="p-6 glass">
            <Sparkles className="w-12 h-12 mb-4 text-pink-400" />
            <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
            <p className="text-muted-foreground">
              Advanced AI algorithms to uncover hidden patterns in your data.
            </p>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;