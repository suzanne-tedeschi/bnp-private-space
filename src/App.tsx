import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Investments from "./pages/Investments";
import Diversify from "./pages/Diversify";
import Assistant from "./pages/Assistant";
import NotFound from "./pages/NotFound";
import Education from "./pages/Education";
import Articles from "./pages/Education/Articles";
import Videos from "./pages/Education/Videos";
import Podcasts from "./pages/Education/Podcasts";
import Experts from "./pages/Education/Experts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/investments" element={<Layout><Investments /></Layout>} />
          <Route path="/diversify" element={<Layout><Diversify /></Layout>} />
          <Route path="/assistant" element={<Layout><Assistant /></Layout>} />
          <Route path="/education" element={<Layout><Education /></Layout>} />
          <Route path="/education/articles" element={<Layout><Articles /></Layout>} />
          <Route path="/education/videos" element={<Layout><Videos /></Layout>} />
          <Route path="/education/podcasts" element={<Layout><Podcasts /></Layout>} />
          <Route path="/education/experts" element={<Layout><Experts /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
