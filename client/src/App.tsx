import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Coaches from "./pages/Coaches";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Partners from "./pages/Partners";
import Enroll from "./pages/Enroll";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Sponsor from "./pages/Sponsor";
import Donate from "./pages/Donate";
import Giving from "./pages/Giving";
import Blog from "./pages/Blog";

// Blog sub-pages
import BeyondTheStrip from "./pages/blog/BeyondTheStrip";
import CompetitiveOrCurious from "./pages/blog/CompetitiveOrCurious";
import PerformanceDip from "./pages/blog/PerformanceDip";

// About sub-pages
import OurStory from "./pages/about/OurStory";
import MeetFounder from "./pages/about/MeetFounder";
import Mission from "./pages/about/Mission";
import Achievements from "./pages/about/Achievements";

// New to Fencing sub-pages
import WhatIsFencing from "./pages/fencing/WhatIsFencing";
import WhyFencing from "./pages/fencing/WhyFencing";
import CompetitionPathway from "./pages/fencing/CompetitionPathway";
import FencingColleges from "./pages/fencing/FencingColleges";

// Programs sub-pages
import BeginnerProgram from "./pages/programs/Beginners";
import ElementaryProgram from "./pages/programs/Elementary";
import IntermediateProgram from "./pages/programs/Intermediate";
import CompetitiveProgram from "./pages/programs/Competitive";
import PrivateLessons from "./pages/programs/PrivateLessons";
import StrengthConditioning from "./pages/programs/StrengthConditioning";
import OpenFencing from "./pages/programs/OpenFencing";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* About routes */}
      <Route path="/about" component={About} />
      <Route path="/about/story" component={OurStory} />
      <Route path="/about/founder" component={MeetFounder} />
      <Route path="/about/mission" component={Mission} />
      <Route path="/about/achievements" component={Achievements} />

      {/* New to Fencing routes */}
      <Route path="/fencing/what-is-fencing" component={WhatIsFencing} />
      <Route path="/fencing/why-fencing" component={WhyFencing} />
      <Route path="/fencing/competition-pathway" component={CompetitionPathway} />
      <Route path="/fencing/colleges" component={FencingColleges} />

      {/* Programs routes */}
      <Route path="/programs" component={Programs} />
      <Route path="/programs/beginners" component={BeginnerProgram} />
      <Route path="/programs/elementary" component={ElementaryProgram} />
      <Route path="/programs/intermediate" component={IntermediateProgram} />
      <Route path="/programs/competitive" component={CompetitiveProgram} />
      <Route path="/programs/private-lessons" component={PrivateLessons} />
      <Route path="/programs/strength-conditioning" component={StrengthConditioning} />
      <Route path="/programs/open-fencing" component={OpenFencing} />

      {/* Blog routes */}
      <Route path="/blog" component={Blog} />
      <Route path="/blog/beyond-the-strip" component={BeyondTheStrip} />
      <Route path="/blog/competitive-or-curious" component={CompetitiveOrCurious} />
      <Route path="/blog/performance-dip-no-one-talks-about" component={PerformanceDip} />

      {/* Main pages */}
      <Route path="/coaches" component={Coaches} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/news" component={News} />
      <Route path="/partners" component={Partners} />
      <Route path="/enroll" component={Enroll} />
      <Route path="/contact" component={Contact} />
      <Route path="/events" component={Events} />
      <Route path="/sponsor" component={Sponsor} />
      <Route path="/donate" component={Donate} />
      <Route path="/giving" component={Giving} />
      <Route path="/support-the-mission" component={Giving} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
