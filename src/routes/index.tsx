import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  HeroSlider, TrustedBy, About, Services, WhyChoose, Industries,
  GlobalPresenceMap, Process, Testimonials, CTA,
} from "@/components/site/home-sections";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Vedant Group — Engineering Global Digital Excellence" },
      { name: "description", content: "Global enterprise consulting, cloud, AI, automation, Salesforce, SAP and talent solutions across 25+ countries." },
      { property: "og:title", content: "Vedant Group — Engineering Global Digital Excellence" },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
});

function Home() {
  return (
    <SiteLayout>
      {/* Clip horizontal overflow from entrance animations (x: ±40) and decorative orbs */}
      <div className="overflow-x-hidden">
        <HeroSlider />
        <TrustedBy />
        <About />
        <Services />
        <WhyChoose />
        <Industries />
        <GlobalPresenceMap />
        <Process />
        <Testimonials />
        <CTA />
      </div>
    </SiteLayout>
  );
}
