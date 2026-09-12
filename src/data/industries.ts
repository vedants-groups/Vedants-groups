import {
  Factory,
  Fuel,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Zap,
  Radio,
  Building2,
  Truck,
  Car,
  type LucideIcon,
} from "lucide-react";

import manufacturingOuter from "@/assets/manufacturing-ind-outer.webp";
import manufacturingInner from "@/assets/manufacturing-ind-inner.webp";
import oilGasOuter from "@/assets/oil-and-gas-ind-outer.webp";
import oilGasInner from "@/assets/oil-and-gas-ind-inner.webp";
import healthcareOuter from "@/assets/healthcare-life-sciences-ind-outer.webp";
import healthcareInner from "@/assets/healthcare-life-sciences-ind-inner.webp";
import bfsiOuter from "@/assets/bfsi-ind-outer.webp";
import bfsiInner from "@/assets/bfsi-ind-inner.webp";
import retailOuter from "@/assets/retail-and-ecommerce-ind-outer.webp";
import retailInner from "@/assets/retail-and-ecommerce-ind-inner.webp";
import energyOuter from "@/assets/energy-and-utilities-ind-outer.webp";
import energyInner from "@/assets/energy-and-utilities-ind-inner.webp";
import telecomOuter from "@/assets/telecommunications-ind-outer.webp";
import telecomInner from "@/assets/telecommunications-ind-inner.webp";
import govOuter from "@/assets/government-and-public-sector-ind-outer.webp";
import govInner from "@/assets/government-and-public-sector-ind-inner.webp";
import logisticsOuter from "@/assets/logistics-and-supplychain-ind-outer.webp";
import logisticsInner from "@/assets/logistics-and-supplychain-ind-inner.webp";
import automotiveOuter from "@/assets/automotive-ind-outer.webp";
import automotiveInner from "@/assets/automotive-ind-inner.webp";

export type IndustryDef = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  challenge: string;
  solutions: string[];
  relatedServiceSlugs: string[];
  stat: { value: string; label: string };
  outerImage: string;
  innerImage: string;
  approach: string[];
  outcomes: { value: string; label: string }[];
};

export const INDUSTRIES: IndustryDef[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    tagline: "Smart factories engineered for measurable production gains.",
    challenge:
      "Manufacturers are under pressure to raise throughput and quality while integrating legacy plant-floor systems with modern enterprise and data platforms.",
    solutions: [
      "Production-line automation & robotics integration",
      "MES / ERP convergence for real-time visibility",
      "Predictive maintenance powered by IoT and ML",
      "OT/IT cyber security hardening",
    ],
    relatedServiceSlugs: ["industrial-automation", "manufacturing-automation", "mes"],
    stat: { value: "40%", label: "avg. reduction in unplanned downtime" },
    outerImage: manufacturingOuter,
    innerImage: manufacturingInner,
    approach: [
      "Audit plant-floor systems and map integration points across PLC, SCADA and MES layers.",
      "Deploy IoT sensors and predictive-maintenance models on critical production assets.",
      "Converge MES and ERP data into a single real-time operations view.",
      "Harden OT/IT boundaries with zero-trust segmentation and continuous monitoring.",
    ],
    outcomes: [
      { value: "40%", label: "less unplanned downtime" },
      { value: "22%", label: "higher first-pass yield" },
      { value: "3.5x", label: "faster root-cause diagnosis" },
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    icon: Fuel,
    tagline: "Resilient control systems for the world's most demanding environments.",
    challenge:
      "Upstream, midstream and downstream operators need continuous, fail-safe control over distributed, remote and hazardous assets.",
    solutions: [
      "SCADA & DCS design for critical process control",
      "Remote asset monitoring across distributed sites",
      "Regulatory & safety compliance engineering",
      "Digital twin and predictive analytics for assets",
    ],
    relatedServiceSlugs: ["scada", "dcs", "industrial-automation"],
    stat: { value: "24/7", label: "remote operations visibility" },
    outerImage: oilGasOuter,
    innerImage: oilGasInner,
    approach: [
      "Assess control-system architecture across upstream, midstream and downstream assets.",
      "Engineer fail-safe SCADA/DCS topologies for remote and hazardous sites.",
      "Build digital twins to simulate asset performance and predict failures.",
      "Embed regulatory and process-safety compliance into every control layer.",
    ],
    outcomes: [
      { value: "24/7", label: "remote asset visibility" },
      { value: "35%", label: "fewer unplanned shutdowns" },
      { value: "99.9%", label: "control-system availability" },
    ],
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    tagline: "Secure, compliant technology for patient-critical operations.",
    challenge:
      "Providers and life sciences organizations must modernize care and research technology while meeting strict HIPAA, GxP and data-residency requirements.",
    solutions: [
      "HIPAA & GxP-aligned application development",
      "Clinical & research data platforms",
      "Interoperability across EHR/EMR systems",
      "Zero-trust security for patient data",
    ],
    relatedServiceSlugs: ["cyber-security", "data-analytics", "cloud-services"],
    stat: { value: "100%", label: "HIPAA-aligned delivery practices" },
    outerImage: healthcareOuter,
    innerImage: healthcareInner,
    approach: [
      "Map clinical and research workflows against HIPAA, GxP and data-residency requirements.",
      "Build interoperable data platforms across EHR/EMR and lab systems.",
      "Apply zero-trust security models to every layer touching patient data.",
      "Validate systems continuously against evolving compliance frameworks.",
    ],
    outcomes: [
      { value: "100%", label: "HIPAA-aligned delivery" },
      { value: "60%", label: "faster clinical data access" },
      { value: "0", label: "compliance incidents to date" },
    ],
  },
  {
    slug: "bfsi",
    name: "BFSI",
    icon: Landmark,
    tagline: "Trusted technology for banking, financial services and insurance.",
    challenge:
      "Financial institutions must innovate on digital experience and fraud analytics without compromising regulatory compliance or system uptime.",
    solutions: [
      "Core banking & payments modernization",
      "Fraud detection with AI/ML models",
      "Regulatory reporting & compliance automation",
      "Zero-trust security architecture",
    ],
    relatedServiceSlugs: ["cyber-security", "data-analytics", "artificial-intelligence"],
    stat: { value: "99.99%", label: "uptime engineered for core systems" },
    outerImage: bfsiOuter,
    innerImage: bfsiInner,
    approach: [
      "Modernize core banking and payments rails without disrupting live transactions.",
      "Train AI/ML fraud-detection models on institution-specific transaction patterns.",
      "Automate regulatory reporting across jurisdictions and compliance regimes.",
      "Architect zero-trust security across customer, core and partner systems.",
    ],
    outcomes: [
      { value: "99.99%", label: "core-system uptime" },
      { value: "45%", label: "fewer fraud false-positives" },
      { value: "50%", label: "faster regulatory reporting" },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    tagline: "Unified commerce experiences that turn data into revenue.",
    challenge:
      "Retailers need a single view of the customer across channels, with personalization and inventory intelligence that scales through demand spikes.",
    solutions: [
      "Unified commerce & CRM platforms",
      "Personalization & demand-forecasting AI",
      "Peak-season scalable cloud architecture",
      "Omnichannel inventory and order orchestration",
    ],
    relatedServiceSlugs: ["crm-solutions", "business-intelligence", "artificial-intelligence"],
    stat: { value: "3x", label: "faster peak-load scaling" },
    outerImage: retailOuter,
    innerImage: retailInner,
    approach: [
      "Unify customer data across storefront, mobile, marketplace and in-store channels.",
      "Deploy personalization and demand-forecasting models on live commerce data.",
      "Architect cloud infrastructure that scales elastically through demand spikes.",
      "Orchestrate inventory and fulfillment across an omnichannel network.",
    ],
    outcomes: [
      { value: "3x", label: "faster peak-load scaling" },
      { value: "28%", label: "uplift from personalization" },
      { value: "99.95%", label: "checkout availability" },
    ],
  },
  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    icon: Zap,
    tagline: "Grid-scale intelligence for a changing energy landscape.",
    challenge:
      "Utilities are managing aging infrastructure, renewable integration and rising cyber-risk on critical national infrastructure simultaneously.",
    solutions: [
      "SCADA modernization for grid operations",
      "Smart metering & IoT telemetry platforms",
      "Renewable integration & load forecasting",
      "Critical infrastructure cyber security",
    ],
    relatedServiceSlugs: ["scada", "iot", "industrial-automation"],
    stat: { value: "25+", label: "countries with utility deployments" },
    outerImage: energyOuter,
    innerImage: energyInner,
    approach: [
      "Modernize SCADA systems controlling generation, transmission and distribution.",
      "Deploy smart metering and IoT telemetry across grid infrastructure.",
      "Build load-forecasting models to integrate renewable and variable generation.",
      "Secure critical national infrastructure against evolving cyber threats.",
    ],
    outcomes: [
      { value: "25+", label: "countries with deployments" },
      { value: "30%", label: "better load-forecast accuracy" },
      { value: "40%", label: "faster fault response" },
    ],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    icon: Radio,
    tagline: "Network-scale platforms built for reliability and speed.",
    challenge:
      "Telcos need to modernize legacy OSS/BSS stacks and ship customer-facing digital products at a pace that matches hyperscale competitors.",
    solutions: [
      "OSS/BSS modernization",
      "Cloud-native network & service platforms",
      "Big-data pipelines for network analytics",
      "DevOps for rapid, reliable release cycles",
    ],
    relatedServiceSlugs: ["cloud-services", "big-data", "devops"],
    stat: { value: "10x", label: "faster release cadence achieved" },
    outerImage: telecomOuter,
    innerImage: telecomInner,
    approach: [
      "Decompose legacy OSS/BSS monoliths into cloud-native, API-first services.",
      "Stand up big-data pipelines for real-time network and customer analytics.",
      "Automate release pipelines with CI/CD and infrastructure-as-code.",
      "Launch customer-facing digital products at hyperscale-competitive speed.",
    ],
    outcomes: [
      { value: "10x", label: "faster release cadence" },
      { value: "99.99%", label: "network service uptime" },
      { value: "35%", label: "lower operating cost per subscriber" },
    ],
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    icon: Building2,
    tagline: "Secure, citizen-first digital services at public-sector scale.",
    challenge:
      "Public sector bodies must modernize citizen services and legacy infrastructure under strict security, accessibility and procurement constraints.",
    solutions: [
      "Citizen-facing digital service platforms",
      "Legacy infrastructure modernization",
      "Government-grade cyber security & compliance",
      "24/7 managed operations for public systems",
    ],
    relatedServiceSlugs: ["cyber-security", "infrastructure-services", "managed-it-services"],
    stat: { value: "ISO 27001", label: "aligned security practices" },
    outerImage: govOuter,
    innerImage: govInner,
    approach: [
      "Design citizen-facing digital services around accessibility and usability standards.",
      "Modernize legacy infrastructure while preserving continuity of public services.",
      "Implement government-grade security and compliance controls end to end.",
      "Run 24/7 managed operations tuned to public-sector SLAs and procurement rules.",
    ],
    outcomes: [
      { value: "ISO 27001", label: "aligned practices" },
      { value: "50%", label: "faster citizen service delivery" },
      { value: "24/7", label: "managed operations coverage" },
    ],
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    icon: Truck,
    tagline: "End-to-end visibility from origin to last mile.",
    challenge:
      "Global supply chains need real-time visibility, resilient routing and verifiable multi-party data as volumes and disruption both keep rising.",
    solutions: [
      "IoT-based fleet & shipment tracking",
      "Blockchain-based traceability & documentation",
      "Demand and route optimization analytics",
      "Warehouse & distribution automation",
    ],
    relatedServiceSlugs: ["iot", "blockchain", "business-intelligence"],
    stat: { value: "18%", label: "avg. logistics cost reduction" },
    outerImage: logisticsOuter,
    innerImage: logisticsInner,
    approach: [
      "Instrument fleets and shipments with IoT tracking for real-time visibility.",
      "Establish blockchain-based traceability across multi-party supply networks.",
      "Build route and demand-optimization models tuned to disruption scenarios.",
      "Automate warehouse and distribution operations end to end.",
    ],
    outcomes: [
      { value: "18%", label: "lower logistics cost" },
      { value: "32%", label: "improved on-time delivery" },
      { value: "2x", label: "faster exception resolution" },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    tagline: "Engineering the software-defined vehicle and smart plant.",
    challenge:
      "Automakers and suppliers are racing to modernize production automation while building the connected, software-defined vehicles of the next decade.",
    solutions: [
      "Production-line robotics & automation",
      "Connected-vehicle IoT platforms",
      "Predictive quality with machine learning",
      "Global supplier data integration",
    ],
    relatedServiceSlugs: ["manufacturing-automation", "iot", "machine-learning"],
    stat: { value: "30%", label: "faster line-changeover times" },
    outerImage: automotiveOuter,
    innerImage: automotiveInner,
    approach: [
      "Deploy robotics and automation across production and assembly lines.",
      "Build connected-vehicle IoT platforms for telemetry and over-the-air updates.",
      "Apply machine learning to predictive quality and defect detection.",
      "Integrate global supplier data into a single production-planning view.",
    ],
    outcomes: [
      { value: "30%", label: "faster line changeovers" },
      { value: "25%", label: "fewer quality defects" },
      { value: "20%", label: "higher OEE" },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
