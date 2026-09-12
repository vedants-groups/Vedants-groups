import { Compass, Cloud, Bot, Cog, Users, type LucideIcon } from "lucide-react";

export type ServiceDef = {
  slug: string;
  name: string;
  categorySlug: string;
  tagline: string;
  description: string;
  capabilities: string[];
  benefits: string[];
};

export type CategoryDef = {
  slug: string;
  name: string;
  icon: LucideIcon;
};

export const CATEGORIES: CategoryDef[] = [
  { slug: "consulting-transformation", name: "Consulting & Transformation", icon: Compass },
  { slug: "cloud-data-security", name: "Cloud, Data & Security", icon: Cloud },
  { slug: "ai-automation", name: "AI, Automation & Emerging Tech", icon: Bot },
  { slug: "industrial-enterprise", name: "Industrial & Enterprise Systems", icon: Cog },
  { slug: "talent-solutions", name: "Global Talent Solutions", icon: Users },
];

export const SERVICES: ServiceDef[] = [
  {
    slug: "it-consulting",
    name: "IT Consulting",
    categorySlug: "consulting-transformation",
    tagline: "Strategic technology advisory that turns ambition into an executable roadmap.",
    description:
      "Our IT consulting practice partners with your leadership team to assess current-state technology, identify the highest-leverage opportunities, and build a roadmap that ties every initiative back to measurable business outcomes.",
    capabilities: [
      "Technology & architecture assessments",
      "IT strategy & roadmap development",
      "Vendor & platform selection",
      "Cost optimization and TCO modeling",
    ],
    benefits: [
      "Faster, better-informed technology decisions",
      "Reduced risk on major platform investments",
      "Clear alignment between IT and business strategy",
    ],
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    categorySlug: "consulting-transformation",
    tagline: "End-to-end modernization of operations, platforms and customer experience.",
    description:
      "We lead digital transformation programs that span strategy, process redesign, technology modernization and change management — replacing legacy constraints with platforms built for speed, scale and customer expectations.",
    capabilities: [
      "Digital maturity assessment",
      "Process re-engineering",
      "Legacy modernization",
      "Change management & adoption",
    ],
    benefits: [
      "Accelerated time-to-market",
      "Lower operating cost through automation",
      "Improved customer and employee experience",
    ],
  },
  {
    slug: "enterprise-software-development",
    name: "Enterprise Software Development",
    categorySlug: "consulting-transformation",
    tagline: "Custom, mission-critical software engineered to enterprise standards.",
    description:
      "From core banking systems to global supply chain platforms, our engineering teams design and build enterprise-grade software with the architecture, security and scalability large organizations demand.",
    capabilities: [
      "Solution architecture & design",
      "Full-stack engineering",
      "API & microservices development",
      "Enterprise systems integration",
    ],
    benefits: [
      "Software that scales with the business",
      "Reduced technical debt from day one",
      "Faster delivery without sacrificing quality",
    ],
  },
  {
    slug: "application-development",
    name: "Application Development",
    categorySlug: "consulting-transformation",
    tagline: "Web, mobile and enterprise applications built for real-world scale.",
    description:
      "We design and build applications — web, mobile and cross-platform — that are fast, secure and built to evolve, using modern frameworks and rigorous engineering practices.",
    capabilities: [
      "Web & mobile application development",
      "UX/UI design",
      "API development",
      "Performance & scalability engineering",
    ],
    benefits: [
      "Shorter development cycles",
      "Consistent quality across releases",
      "Applications ready for global scale",
    ],
  },
  {
    slug: "application-maintenance",
    name: "Application Maintenance",
    categorySlug: "consulting-transformation",
    tagline: "Keep mission-critical applications reliable, secure and current.",
    description:
      "Our application maintenance teams manage bug fixes, enhancements, patching and performance tuning for existing systems, so your applications stay reliable while your team focuses on new initiatives.",
    capabilities: [
      "L1/L2/L3 application support",
      "Patch & version management",
      "Performance monitoring & tuning",
      "Enhancement & minor development",
    ],
    benefits: [
      "Higher application uptime",
      "Lower total cost of ownership",
      "Freed internal capacity for innovation",
    ],
  },
  {
    slug: "managed-it-services",
    name: "Managed IT Services",
    categorySlug: "consulting-transformation",
    tagline: "24/7 operations for infrastructure, applications and end-user support.",
    description:
      "We run the day-to-day operation of your IT estate — infrastructure, applications, service desk and security monitoring — under defined SLAs, so your team can focus on strategic priorities.",
    capabilities: [
      "24/7 infrastructure & application monitoring",
      "Service desk & end-user support",
      "Patch, backup & DR management",
      "SLA-driven operations",
    ],
    benefits: [
      "Predictable operating costs",
      "Reduced downtime and incident volume",
      "Access to specialist skills on demand",
    ],
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    categorySlug: "consulting-transformation",
    tagline: "Rigorous QA that protects releases and user trust.",
    description:
      "Our QA teams embed testing throughout the delivery lifecycle — functional, performance, security and usability — to catch issues before they reach production.",
    capabilities: [
      "Test strategy & planning",
      "Functional & regression testing",
      "Performance & load testing",
      "Usability & accessibility testing",
    ],
    benefits: [
      "Fewer production defects",
      "Faster, safer release cycles",
      "Higher user satisfaction",
    ],
  },
  {
    slug: "automation-testing",
    name: "Automation Testing",
    categorySlug: "consulting-transformation",
    tagline: "Automated test frameworks that scale with your release velocity.",
    description:
      "We build automated testing frameworks — UI, API and integration — that plug into CI/CD pipelines, giving teams fast, reliable feedback on every change.",
    capabilities: [
      "Test automation framework design",
      "CI/CD-integrated test pipelines",
      "API & UI test automation",
      "Cross-browser & cross-device testing",
    ],
    benefits: [
      "Dramatically faster regression cycles",
      "Consistent quality at release velocity",
      "Lower long-term testing cost",
    ],
  },
  {
    slug: "cloud-services",
    name: "Cloud Services",
    categorySlug: "cloud-data-security",
    tagline: "Cloud-native architecture and operations on AWS, Azure, GCP and Oracle.",
    description:
      "We design, build and operate cloud environments engineered for resilience, security and cost efficiency — across AWS, Azure, Google Cloud and Oracle Cloud.",
    capabilities: [
      "Cloud architecture & landing zones",
      "Multi-cloud & hybrid strategy",
      "Cloud-native application design",
      "FinOps & cost optimization",
    ],
    benefits: [
      "Lower infrastructure cost",
      "Improved scalability and resilience",
      "Faster provisioning and deployment",
    ],
  },
  {
    slug: "cloud-migration",
    name: "Cloud Migration",
    categorySlug: "cloud-data-security",
    tagline: "Zero-drama migration from legacy infrastructure to the cloud.",
    description:
      "Our migration teams move workloads, data and applications to the cloud with minimal disruption — using proven assessment, sequencing and cutover methodologies.",
    capabilities: [
      "Migration readiness assessment",
      "Application & data migration",
      "Re-platforming & re-architecture",
      "Cutover & rollback planning",
    ],
    benefits: [
      "Minimal business disruption",
      "Reduced migration risk",
      "Faster realization of cloud economics",
    ],
  },
  {
    slug: "devops",
    name: "DevOps",
    categorySlug: "cloud-data-security",
    tagline: "Automated delivery pipelines that ship faster, safer, more often.",
    description:
      "We build DevOps practices and CI/CD pipelines that automate build, test and deployment — turning release cycles from weeks into hours.",
    capabilities: [
      "CI/CD pipeline engineering",
      "Infrastructure as Code",
      "Containerization & orchestration",
      "Observability & monitoring",
    ],
    benefits: [
      "Faster, more frequent releases",
      "Reduced deployment failures",
      "Improved developer productivity",
    ],
  },
  {
    slug: "cyber-security",
    name: "Cyber Security",
    categorySlug: "cloud-data-security",
    tagline: "Zero-trust architecture and enterprise resilience.",
    description:
      "We help enterprises build zero-trust security architectures, run SOC operations and embed security into the SDLC — protecting the business from evolving threats.",
    capabilities: [
      "Security architecture & zero-trust design",
      "SOC & threat monitoring",
      "Vulnerability & penetration testing",
      "Secure SDLC & compliance",
    ],
    benefits: [
      "Reduced breach risk and exposure",
      "Stronger regulatory compliance posture",
      "Faster detection and response times",
    ],
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    categorySlug: "cloud-data-security",
    tagline: "Turning raw data into decisions leadership can act on.",
    description:
      "We build analytics capabilities — from data pipelines to executive dashboards — that convert operational and market data into clear, actionable insight.",
    capabilities: [
      "Data pipeline engineering",
      "Predictive & descriptive analytics",
      "Dashboard & reporting design",
      "Data governance & quality",
    ],
    benefits: [
      "Faster, evidence-based decisions",
      "Higher data quality and trust",
      "Measurable ROI on data investment",
    ],
  },
  {
    slug: "big-data",
    name: "Big Data",
    categorySlug: "cloud-data-security",
    tagline: "Platforms engineered for volume, velocity and variety.",
    description:
      "We design and operate big-data platforms capable of ingesting, processing and analyzing massive, high-velocity datasets across the enterprise.",
    capabilities: [
      "Big data architecture & platform design",
      "Batch & streaming data pipelines",
      "Data lake & lakehouse implementation",
      "Distributed processing (Spark, Kafka)",
    ],
    benefits: [
      "Ability to process enterprise-scale data",
      "Real-time insight from streaming sources",
      "Lower cost per terabyte processed",
    ],
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    categorySlug: "cloud-data-security",
    tagline: "Executive dashboards that make data everyone's second language.",
    description:
      "Our BI practice builds self-service dashboards and reporting layers that put trusted, real-time metrics directly in front of decision-makers.",
    capabilities: [
      "BI platform implementation",
      "Self-service dashboard design",
      "Data modeling & semantic layers",
      "KPI & metrics framework design",
    ],
    benefits: [
      "Faster access to trusted metrics",
      "Reduced reliance on manual reporting",
      "Wider data-driven decision-making",
    ],
  },
  {
    slug: "infrastructure-services",
    name: "Infrastructure Services",
    categorySlug: "cloud-data-security",
    tagline: "Resilient, secure infrastructure — on-prem, cloud or hybrid.",
    description:
      "We design, deploy and manage infrastructure across data center, cloud and hybrid environments, engineered for uptime, security and scale.",
    capabilities: [
      "Infrastructure architecture & design",
      "Data center & hybrid cloud management",
      "Network & storage engineering",
      "Disaster recovery & business continuity",
    ],
    benefits: [
      "Higher infrastructure reliability",
      "Improved disaster recovery posture",
      "Optimized infrastructure spend",
    ],
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    categorySlug: "ai-automation",
    tagline: "Production-grade AI, governed and evaluated at enterprise scale.",
    description:
      "We design and deploy AI systems — from predictive models to enterprise GenAI — with the governance, evaluation and MLOps discipline required for production use.",
    capabilities: [
      "AI strategy & use-case discovery",
      "Generative AI & LLM solutions",
      "Computer vision & NLP",
      "AI governance & responsible AI",
    ],
    benefits: [
      "Faster path from AI pilot to production",
      "Governed, auditable AI outcomes",
      "Measurable business impact from AI",
    ],
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    categorySlug: "ai-automation",
    tagline: "ML models engineered for accuracy, scale and maintainability.",
    description:
      "Our ML engineers build, train and operationalize machine learning models — with MLOps pipelines that keep models accurate and reliable in production.",
    capabilities: [
      "Model design & development",
      "Feature engineering & data pipelines",
      "MLOps & model deployment",
      "Model monitoring & retraining",
    ],
    benefits: [
      "Higher model accuracy in production",
      "Faster model deployment cycles",
      "Reduced model drift and downtime",
    ],
  },
  {
    slug: "robotic-process-automation",
    name: "Robotic Process Automation",
    categorySlug: "ai-automation",
    tagline: "Automate repetitive processes, free your people for higher-value work.",
    description:
      "We design and deploy RPA bots that automate high-volume, rules-based processes across finance, operations and customer service functions.",
    capabilities: [
      "Process discovery & assessment",
      "Bot design & development",
      "RPA + AI (intelligent automation)",
      "Bot governance & monitoring",
    ],
    benefits: [
      "Significant reduction in manual effort",
      "Fewer process errors",
      "Faster process turnaround times",
    ],
  },
  {
    slug: "iot",
    name: "IoT",
    categorySlug: "ai-automation",
    tagline: "Connected devices and data pipelines for smarter operations.",
    description:
      "We build IoT solutions that connect devices, sensors and equipment to data platforms — enabling real-time visibility and predictive operations.",
    capabilities: [
      "IoT architecture & platform design",
      "Device connectivity & edge computing",
      "Sensor data pipelines",
      "Predictive maintenance solutions",
    ],
    benefits: [
      "Real-time operational visibility",
      "Reduced unplanned downtime",
      "Data-driven maintenance decisions",
    ],
  },
  {
    slug: "blockchain",
    name: "Blockchain",
    categorySlug: "ai-automation",
    tagline: "Distributed ledger solutions for trust and transparency.",
    description:
      "We design and implement blockchain solutions — from smart contracts to supply-chain traceability — that bring verifiable trust to multi-party transactions.",
    capabilities: [
      "Blockchain architecture & design",
      "Smart contract development",
      "Supply chain traceability solutions",
      "Private & consortium blockchain networks",
    ],
    benefits: [
      "Verifiable, tamper-proof transaction records",
      "Reduced reconciliation overhead",
      "Greater trust across multi-party networks",
    ],
  },
  {
    slug: "industrial-automation",
    name: "Industrial Automation",
    categorySlug: "industrial-enterprise",
    tagline: "Smart factories engineered for measurable production gains.",
    description:
      "We engineer industrial automation solutions — from control systems to full production-line integration — that deliver real gains in throughput, quality and uptime.",
    capabilities: [
      "Automation architecture & control system design",
      "Production line integration",
      "OT/IT convergence",
      "Industry 4.0 implementation",
    ],
    benefits: [
      "Higher production throughput",
      "Reduced unplanned downtime",
      "Improved product quality and consistency",
    ],
  },
  {
    slug: "manufacturing-automation",
    name: "Manufacturing Automation",
    categorySlug: "industrial-enterprise",
    tagline: "Automated production systems built for real production environments.",
    description:
      "Our engineers design and implement manufacturing automation systems — robotics, conveyors and control logic — tuned to your specific production environment.",
    capabilities: [
      "Robotic & motion control integration",
      "Automated line design",
      "Control system programming",
      "Production data integration",
    ],
    benefits: [
      "Increased manufacturing efficiency",
      "Lower labor and rework cost",
      "Consistent, repeatable production quality",
    ],
  },
  {
    slug: "plc",
    name: "PLC",
    categorySlug: "industrial-enterprise",
    tagline: "Programmable logic control engineering for industrial systems.",
    description:
      "We design, program and commission PLC-based control systems for manufacturing, process and utility environments — built for reliability in demanding conditions.",
    capabilities: [
      "PLC programming & commissioning",
      "Control panel design",
      "HMI development",
      "System troubleshooting & optimization",
    ],
    benefits: [
      "Reliable, deterministic process control",
      "Reduced commissioning timelines",
      "Lower long-term maintenance cost",
    ],
  },
  {
    slug: "scada",
    name: "SCADA",
    categorySlug: "industrial-enterprise",
    tagline: "Supervisory control and data acquisition for critical operations.",
    description:
      "We build SCADA systems that give operators real-time visibility and control over distributed industrial assets — from utilities to remote facilities.",
    capabilities: [
      "SCADA architecture & design",
      "Real-time monitoring dashboards",
      "Alarm management systems",
      "Remote asset connectivity",
    ],
    benefits: [
      "Real-time operational visibility",
      "Faster incident response",
      "Centralized control of distributed assets",
    ],
  },
  {
    slug: "dcs",
    name: "DCS",
    categorySlug: "industrial-enterprise",
    tagline: "Distributed control systems for continuous process industries.",
    description:
      "We design and implement DCS solutions for continuous process environments — refining, chemicals and power — where precision and uptime are non-negotiable.",
    capabilities: [
      "DCS architecture & configuration",
      "Process control loop tuning",
      "System migration & upgrades",
      "Redundancy & failover design",
    ],
    benefits: [
      "Improved process stability",
      "Higher plant availability",
      "Safer, more precise process control",
    ],
  },
  {
    slug: "mes",
    name: "MES",
    categorySlug: "industrial-enterprise",
    tagline: "Manufacturing execution systems connecting plant floor to enterprise.",
    description:
      "We implement MES platforms that bridge the plant floor and the enterprise — tracking production, quality and performance in real time.",
    capabilities: [
      "MES implementation & integration",
      "Production tracking & scheduling",
      "Quality & compliance management",
      "ERP-MES integration",
    ],
    benefits: [
      "Real-time production visibility",
      "Improved quality traceability",
      "Tighter plant-to-enterprise alignment",
    ],
  },
  {
    slug: "sap",
    name: "SAP",
    categorySlug: "industrial-enterprise",
    tagline: "Consulting, implementation and integration across SAP landscapes.",
    description:
      "Our SAP practice delivers consulting, implementation, upgrades and integration across ECC, S/4HANA and the broader SAP ecosystem.",
    capabilities: [
      "SAP S/4HANA implementation & migration",
      "SAP module consulting (FI/CO, MM, SD, PP)",
      "SAP integration & custom development",
      "SAP managed services",
    ],
    benefits: [
      "Streamlined core business processes",
      "Reduced SAP total cost of ownership",
      "Faster, lower-risk SAP upgrades",
    ],
  },
  {
    slug: "salesforce-consulting",
    name: "Salesforce Consulting",
    categorySlug: "industrial-enterprise",
    tagline: "Strategic Salesforce advisory backed by 1700+ certifications.",
    description:
      "We advise enterprises on Salesforce strategy, architecture and roadmap — helping teams get maximum value from Sales, Service and Platform Cloud.",
    capabilities: [
      "Salesforce roadmap & strategy",
      "Org architecture assessment",
      "Multi-cloud Salesforce design",
      "Adoption & governance planning",
    ],
    benefits: [
      "Clearer Salesforce investment roadmap",
      "Reduced technical debt in the org",
      "Higher user adoption rates",
    ],
  },
  {
    slug: "salesforce-implementation",
    name: "Salesforce Implementation",
    categorySlug: "industrial-enterprise",
    tagline: "End-to-end Salesforce builds, delivered by certified experts.",
    description:
      "Our certified Salesforce teams implement Sales Cloud, Service Cloud, Experience Cloud and custom Salesforce applications end-to-end.",
    capabilities: [
      "Sales & Service Cloud implementation",
      "Custom Salesforce app development",
      "Data migration & configuration",
      "User training & enablement",
    ],
    benefits: [
      "Faster time-to-value on Salesforce",
      "Fewer post-launch defects",
      "Higher confidence at go-live",
    ],
  },
  {
    slug: "salesforce-integration",
    name: "Salesforce Integration",
    categorySlug: "industrial-enterprise",
    tagline: "Connecting Salesforce to the rest of your enterprise stack.",
    description:
      "We integrate Salesforce with ERP, marketing, data and legacy systems — building a single source of truth across the customer lifecycle.",
    capabilities: [
      "API & middleware integration",
      "Salesforce-ERP integration",
      "Real-time data synchronization",
      "Integration monitoring & support",
    ],
    benefits: [
      "Unified, accurate customer data",
      "Reduced manual data entry",
      "Faster cross-system processes",
    ],
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    categorySlug: "industrial-enterprise",
    tagline: "CRM platforms built around how your teams actually sell and serve.",
    description:
      "We design and implement CRM solutions — Salesforce, Dynamics and beyond — configured around your sales, service and marketing processes.",
    capabilities: [
      "CRM strategy & platform selection",
      "Custom CRM configuration",
      "Sales & service process design",
      "CRM data migration & cleanup",
    ],
    benefits: [
      "Higher CRM adoption and data quality",
      "Improved sales and service productivity",
      "Better customer visibility across teams",
    ],
  },
  {
    slug: "hr-recruitment",
    name: "HR Recruitment",
    categorySlug: "talent-solutions",
    tagline: "Specialist recruitment across technology and enterprise functions.",
    description:
      "Our recruitment teams source and screen specialist talent across technology, engineering and enterprise functions — matched to your exact requirements.",
    capabilities: [
      "Technical talent sourcing",
      "Screening & competency assessment",
      "Executive & specialist search",
      "Recruitment process outsourcing (RPO)",
    ],
    benefits: [
      "Faster time-to-hire",
      "Higher quality of candidate match",
      "Reduced recruitment overhead",
    ],
  },
  {
    slug: "permanent-hiring",
    name: "Permanent Hiring",
    categorySlug: "talent-solutions",
    tagline: "Full-time talent placement across 25+ countries.",
    description:
      "We manage end-to-end permanent hiring — from role definition to offer management — placing full-time talent across technology and enterprise roles globally.",
    capabilities: [
      "Role scoping & market benchmarking",
      "Candidate sourcing & shortlisting",
      "Interview coordination & assessment",
      "Offer management & onboarding support",
    ],
    benefits: [
      "Access to a global specialist talent pool",
      "Reduced hiring cycle time",
      "Lower cost-per-hire",
    ],
  },
  {
    slug: "contract-staffing",
    name: "Contract Staffing",
    categorySlug: "talent-solutions",
    tagline: "Certified specialists embedded into your team within days.",
    description:
      "We provide contract and temporary staffing — certified technology and engineering specialists mobilized into your team within days, not months.",
    capabilities: [
      "Rapid specialist mobilization",
      "Flexible contract durations",
      "Skills-matched staffing",
      "Compliance & payroll management",
    ],
    benefits: [
      "Fast access to specialist skills",
      "Flexible scaling up or down",
      "Reduced administrative burden",
    ],
  },
  {
    slug: "global-talent-solutions",
    name: "Global Talent Solutions",
    categorySlug: "talent-solutions",
    tagline: "Managed teams and workforce solutions across 25+ countries.",
    description:
      "We design and manage global workforce solutions — combining permanent hiring, contract staffing and managed teams — mobilized across 25+ countries.",
    capabilities: [
      "Global workforce strategy",
      "Managed team delivery",
      "Multi-country compliance & payroll",
      "Talent pipeline development",
    ],
    benefits: [
      "Single partner for global workforce needs",
      "Consistent quality across geographies",
      "Reduced complexity of multi-country hiring",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCategory(categorySlug: string) {
  return CATEGORIES.find((c) => c.slug === categorySlug)!;
}

export function getServicesByCategory(categorySlug: string) {
  return SERVICES.filter((s) => s.categorySlug === categorySlug);
}
