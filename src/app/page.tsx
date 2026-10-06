import { Navigation } from "@/components/navigation";
import { Hero, CapabilityStrip } from "@/components/hero";
import { Work } from "@/components/work";
import { Capabilities } from "@/components/capabilities";
import { Technology } from "@/components/technology";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <div id="top">
      <Navigation />
      <main id="main">
        <Hero />
        <CapabilityStrip />
        <Work />
        <Capabilities />
        <Technology />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
