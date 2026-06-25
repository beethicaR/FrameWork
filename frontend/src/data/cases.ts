export interface CaseData {
  id: string;
  title: string;
  category: string;
  industry: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  prompt: string;
  context: string;
  keyFacts: string[];
  exhibits?: Exhibit[];
  frameworkHints: string[];
  expectedCalculations?: string[];
  successCriteria: string[];
}

import { getAllExpandedCases } from './expanded-cases';
const expandedCases = getAllExpandedCases();

interface Exhibit {
  title: string;
  data: Record<string, string | number>[];
  description: string;
}

const baseCases: CaseData[] = [
  // ============ MARKET ENTRY ============
  {
    id: 'market-entry-1',
    title: 'GreenField Pharma in Southeast Asia',
    category: 'Market Entry',
    industry: 'Pharmaceuticals',
    difficulty: 'Medium',
    prompt: 'Our client is a mid-sized European pharmaceutical company looking to enter the Southeast Asian market. They have developed a novel diabetes drug. How should they approach market entry?',
    context: 'The company has $500M in annual revenue, the drug has 2 years of patent protection remaining, and they have no existing presence in Asia. Southeast Asia has 650M population with 8% diabetes prevalence.',
    keyFacts: [
      'Revenue: $500M, primarily EU markets',
      'Patent protection: 2 years remaining',
      'Target market: SE Asia (Indonesia, Thailand, Vietnam, Philippines, Malaysia)',
      'Diabetes prevalence in SE Asia: 8% (52M patients)',
      'Current treatment: 60% on generic metformin, 25% on other oral drugs, 15% insulin',
      'Their drug: Novel GLP-1 analog, superior efficacy, premium pricing expected',
      'Regulatory approval timeline: 12-18 months per country',
      'No existing sales force or distribution in region'
    ],
    frameworkHints: [
      'Consider market attractiveness (size, growth, competition)',
      'Evaluate entry timing vs patent clock',
      'Build vs partner vs license analysis',
      'Pricing & market access strategy',
      'Regulatory pathway optimization'
    ],
    expectedCalculations: [
      'Market sizing: TAM, SAM, SOM',
      'Revenue projection under different entry models',
      'Break-even analysis for local sales force'
    ],
    successCriteria: [
      'Clear recommendation on entry mode',
      'Market size estimate with clear assumptions',
      'Risk mitigation strategy',
      'Implementation roadmap'
    ]
  },
  {
    id: 'market-entry-2',
    title: 'TechGiant Retail Expansion',
    category: 'Market Entry',
    industry: 'Technology / Retail',
    difficulty: 'Hard',
    prompt: 'A US-based consumer electronics company wants to enter physical retail in India. They currently sell online only. Should they open their own stores, partner with existing retailers, or pursue a franchise model?',
    context: 'The company has $2B global revenue. India is their fastest growing online market (40% YoY). They have strong brand recognition among Indian millennials.',
    keyFacts: [
      'Current India revenue: $150M (all online)',
      'India electronics market: $75B, growing 12% annually',
      'Organized retail: 35% of market, growing',
      'Major players: Croma, Reliance Digital, Vijay Sales',
      'Their margin on online sales: 8%',
      'Own store EBITDA margins industry avg: 12-15%',
      'Real estate costs in top 10 cities: $5-15/sqft/month',
      'Average store size needed: 1500-2000 sqft'
    ],
    frameworkHints: [
      'Evaluate market potential & consumer behavior',
      'Financial comparison of models',
      'Operational complexity assessment',
      'Brand control vs speed to market trade-off',
      'Regulatory considerations (FDI in retail)'
    ],
    expectedCalculations: [
      'Store-level P&L for own stores',
      'Revenue share analysis for partnerships',
      'ROI comparison across models',
      'Payback period analysis'
    ],
    successCriteria: [
      'Data-driven recommendation with financial backing',
      'Address FDI regulations impact',
      'Phased rollout plan',
      'Risk assessment for each model'
    ]
  },
  {
    id: 'market-entry-3',
    title: 'Nordic Coffee Chain in Japan',
    category: 'Market Entry',
    industry: 'F&B / Retail',
    difficulty: 'Easy',
    prompt: 'A premium Scandinavian coffee chain wants to enter the Japanese market. They are known for minimalist design and sustainable sourcing. How should they approach market entry?',
    context: 'The chain has 200 stores in Europe. Japan has a sophisticated coffee culture but is dominated by convenience store coffee at ¥100 and specialty shops like % Arabica.',
    keyFacts: [
      'Japanese coffee market: $40B, 60% at-home, 40% out-of-home',
      'Specialty coffee segment growing 15% annually',
      'Key competitors: Starbucks (1,700 stores), Tully\'s (700), Doutor (1,000)',
      'Convenience store coffee: ¥100-150, 4B cups annually',
      'Average specialty coffee price: ¥400-600',
      'Target demographic: 25-40 year old urban professionals',
      'Store setup cost in Tokyo: ¥30-50M per location',
      'Their USP: Sustainability, design, filter coffee focus'
    ],
    frameworkHints: [
      'Analyze competitive landscape',
      'Identify white space and positioning',
      'Pricing strategy consideration',
      'Real estate & location strategy',
      'Supply chain for Scandinavian beans'
    ],
    successCriteria: [
      'Clear positioning vs competitors',
      'Pilot location strategy',
      'Supply chain solution',
      'Marketing & brand adaptation plan'
    ]
  },
  {
    id: 'market-entry-4',
    title: 'EV Charger Network in Middle East',
    category: 'Market Entry',
    industry: 'Energy / Automotive',
    difficulty: 'Expert',
    prompt: 'A European EV charging infrastructure company wants to enter the UAE and Saudi Arabia markets. The region is aggressively pushing EV adoption as part of Vision 2030. Develop a comprehensive market entry strategy.',
    context: 'The company has installed 50,000 charging points across Europe. UAE targets 42,000 EVs by 2030, Saudi targets 30% EV sales by 2030. Both offer significant subsidies.',
    keyFacts: [
      'Current UAE EV penetration: 3% of new car sales',
      'Saudi EV target: 30% of new car sales by 2030 (from <1% today)',
      'UAE charging points currently: ~600 for 15,000 EVs',
      'Saudi planned charging points: 50,000 by 2030',
      'Government subsidies: UAE 50% of installation cost, Saudi 100% for land lease',
      'Competition: local players (ADNOC, Al-Futtaim), intl (Tesla, ChargePoint)',
      'Installation cost per charger: $30-50K (DC fast charger)',
      'Revenue model: per kWh + subscription + advertising',
      'Electricity cost: $0.08/kWh (subsidized)',
      'Target utilization: 15-20% for profitability'
    ],
    frameworkHints: [
      'Market sizing under different EV adoption scenarios',
      'Make vs buy vs partner for local presence',
      'Regulatory & policy analysis',
      'Capital requirements & financing strategy',
      'Location strategy (highways vs malls vs residential)'
    ],
    expectedCalculations: [
      'Total addressable market by year',
      'Charger network economics (per unit)',
      'Capital requirement for 5-year rollout',
      'NPV/IRR analysis',
      'Sensitivity to EV adoption rates'
    ],
    successCriteria: [
      'Detailed 5-year market entry plan',
      'Financial model with clear assumptions',
      'Risk mitigation for policy changes',
      'Recommendation on partnership strategy',
      'Operational readiness assessment'
    ]
  },
  {
    id: 'market-entry-5',
    title: 'Indian EdTech in Africa',
    category: 'Market Entry',
    industry: 'Education / Technology',
    difficulty: 'Medium',
    prompt: 'A successful Indian edtech company with 10M users wants to expand into Sub-Saharan Africa, starting with Nigeria and Kenya. They offer affordable test prep and skill development. Design the market entry strategy.',
    context: 'The company has proven unit economics in India ($5/user lifetime value, 30% margins). Africa has 400M youth but massive education gaps and infrastructure challenges.',
    keyFacts: [
      'Nigeria: 200M population, 60% under 25, 45% smartphone penetration',
      'Kenya: 55M population, 75% mobile money penetration (MPESA)',
      'Education spending: 10% of household income in urban areas',
      'Internet cost: Nigeria $1.5/GB, Kenya $1/GB',
      'Competition: local players (uLesson, Eneza), global (BYJU\'S, Khan Academy)',
      'Payment challenge: 60% unbanked, mobile money dominant',
      'University enrollment: 12% in Nigeria, 4% in Kenya',
      'English proficiency: relatively high in both countries',
      'Their content: video-based, requires 500MB-1GB per course'
    ],
    frameworkHints: [
      'Product adaptation for local needs',
      'Pricing strategy (PPP adjusted)',
      'Distribution & partnership model',
      'Payment and collection infrastructure',
      'Content delivery optimization (offline-first?)'
    ],
    expectedCalculations: [
      'Market sizing (addressable students)',
      'Unit economics adaptation',
      'Go-to-market budget requirement',
      '5-year user acquisition projections'
    ],
    successCriteria: [
      'Product localization strategy',
      'Realistic pricing model',
      'Partnership roadmap',
      'Infrastructure and delivery plan',
      'Regulatory compliance approach'
    ]
  },
  {
    id: 'market-entry-6',
    title: 'French Luxury Brand in Metaverse',
    category: 'Market Entry',
    industry: 'Luxury / Technology',
    difficulty: 'Hard',
    prompt: 'A 150-year-old French luxury fashion house wants to enter the metaverse. They are concerned about brand dilution but see younger generations spending on digital goods. Should they enter, and if so, how?',
    context: 'The brand has $3B annual revenue, strong heritage positioning. 60% of their customers are over 40. The global digital fashion market is projected at $50B by 2030.',
    keyFacts: [
      'Digital fashion market: $6B in 2023, forecast $50B by 2030',
      'Gen Z spends 15% of income on digital goods',
      'Key platforms: Roblox (200M MAU), Decentraland, Sandbox, Zepeto',
      'Competitors: Gucci (Roblox partnership), Nike (Nikeland), Balenciaga (Fortnite)',
      'Gucci Roblox bag sold for $4,100 (above real-world price)',
      'Their digital maturity: low, no e-commerce in-house',
      'Brand risk: loss of control in open metaverse platforms',
      'Technical requirement: 3D modeling, real-time rendering expertise',
      'Revenue models: NFT drops, virtual stores, digital-physical bundles'
    ],
    frameworkHints: [
      'Brand equity preservation vs innovation',
      'Platform selection criteria',
      'Revenue model and pricing strategy',
      'Organizational capability building',
      'Digital-physical integration strategy'
    ],
    expectedCalculations: [
      'Total addressable market in luxury digital goods',
      'Revenue projection under different models',
      'Investment requirement and ROI timeline',
      'Brand equity impact quantification'
    ],
    successCriteria: [
      'Clear recommendation on entry and timing',
      'Platform and partnership strategy',
      'Brand safety framework',
      'Monetization model with projections',
      'Organizational roadmap'
    ]
  },

  // ============ PROFITABILITY ============
  {
    id: 'profitability-1',
    title: 'Airlines Ancillary Revenue Turnaround',
    category: 'Profitability',
    industry: 'Aviation',
    difficulty: 'Hard',
    prompt: 'A legacy European airline is struggling with profitability despite 85% load factors. Their ancillary revenue is 15% of total vs industry benchmark of 30%. Help them improve profitability.',
    context: 'The airline operates 300 aircraft, primarily short-haul in Europe. Fuel costs are 30% of revenue. They face intense competition from low-cost carriers and high labor costs.',
    keyFacts: [
      'Current operating margin: 3%',
      'Industry avg operating margin: 8%',
      'Revenue breakdown: 85% ticket, 15% ancillary',
      'Low-cost competitors ancillary: 35-45% of revenue',
      'Baggage revenue: currently free 1 checked bag (costs $15M/year)',
      'Seat selection: 5% opt-in vs 40% industry average',
      'Loyalty program: 8M members, $50M annual liability',
      'On-board retail: $2/passenger vs $8 industry benchmark',
      'Cargo: $200M revenue, potential untapped',
      'Flight change fees: $50 vs $100-150 industry',
      'Customer satisfaction: 78/100 (industry avg 75)'
    ],
    frameworkHints: [
      'Benchmark ancillary revenue streams',
      'Customer willingness to pay analysis',
      'Implementation feasibility and timeline',
      'Revenue vs customer satisfaction trade-off',
      'Digital upselling capabilities'
    ],
    expectedCalculations: [
      'Revenue uplift from optimizing each ancillary stream',
      'Customer churn risk from fee changes',
      'EBIT improvement potential',
      'Investment required for systems upgrade'
    ],
    successCriteria: [
      'Quantified revenue opportunity by stream',
      'Pricing strategy for each ancillary product',
      'Customer impact analysis',
      'Implementation roadmap with timeline',
      'Risk mitigation strategy'
    ]
  },
  {
    id: 'profitability-2',
    title: 'Auto Parts Manufacturer Cost Crisis',
    category: 'Profitability',
    industry: 'Manufacturing / Automotive',
    difficulty: 'Medium',
    prompt: 'A Tier-1 automotive parts supplier has seen margins shrink from 12% to 4% over 3 years. Raw material costs are up 25% and they are losing contracts to Chinese competitors. Diagnose and fix profitability.',
    context: 'The company supplies transmission components to major OEMs. They have 5 factories in Germany and 2 in Eastern Europe. Revenue is €800M.',
    keyFacts: [
      'Revenue: €800M (flat over 3 years)',
      'EBIT margin: 4% (down from 12%)',
      'Raw materials: 45% of COGS (steel, aluminum up 25%)',
      'Labor cost: 30% of COGS (Germany €45/hr vs China €8/hr)',
      'Energy: 10% of COGS (up 40% due to energy crisis)',
      'Factory utilization: 70% (down from 85%)',
      'Customer concentration: Top 3 customers = 70% revenue',
      'R&D spend: 5% of revenue (industry avg 4%)',
      'Operating working capital: 45 days (industry avg 35)',
      'OEM contract renewal success rate: 50% (down from 80%)'
    ],
    frameworkHints: [
      'Cost structure analysis (fixed vs variable)',
      'Value chain optimization (make vs buy)',
      'Revenue management and contract renegotiation',
      'Operational efficiency (lean manufacturing)',
      'Strategic repositioning options'
    ],
    expectedCalculations: [
      'Cost reduction target by category',
      'Break-even analysis for factory closure/consolidation',
      'Make vs buy financial comparison',
      'Price increase impact on volume'
    ],
    successCriteria: [
      'Root cause diagnosis with evidence',
      'Quantified cost reduction levers',
      'Contract renegotiation strategy',
      '3-year profitability roadmap',
      'Risk assessment for each initiative'
    ]
  },
  {
    id: 'profitability-3',
    title: 'Pizza Chain Delivery vs Dine-in',
    category: 'Profitability',
    industry: 'F&B / Restaurant',
    difficulty: 'Easy',
    prompt: 'A mid-size pizza chain with 200 stores is seeing declining dine-in profits but booming delivery sales. Should they shift to delivery-only (ghost kitchens) or maintain their full-service model?',
    context: 'The chain has been operating for 25 years. Pre-COVID, 70% of revenue was dine-in. Now 60% is delivery. Dine-in margins are shrinking due to labor costs.',
    keyFacts: [
      'Total revenue: $400M (growing 5% YoY)',
      'Dine-in: 40% of revenue, 8% margin',
      'Delivery: 60% of revenue, 2% margin (due to aggregator commissions)',
      'Aggregator commission: 25-30% per order',
      'Average check: dine-in $28, delivery $22',
      'Labor: 35% of dine-in revenue, 25% of delivery',
      'Real estate: $15M annual lease cost for 200 locations',
      'Ghost kitchen rent: 40% less than prime locations',
      'Own delivery fleet setup cost: $100K per location',
      'Competition: 4 major chains, 200 independent pizzerias'
    ],
    frameworkHints: [
      'Understand true profitability per channel',
      'Customer acquisition cost comparison',
      'Real estate optimization strategy',
      'Brand positioning implications',
      'Operational complexity of dual model'
    ],
    expectedCalculations: [
      'Per-store P&L for each model',
      'Break-even delivery commission rate',
      'Investment required for transformation',
      'Revenue at risk analysis'
    ],
    successCriteria: [
      'Channel profitability analysis',
      'Clear recommendation on store footprint',
      'Financial projections for recommended model',
      'Implementation timeline',
      'Brand impact assessment'
    ]
  },
  {
    id: 'profitability-4',
    title: 'Telco 5G Investment Dilemma',
    category: 'Profitability',
    industry: 'Telecommunications',
    difficulty: 'Expert',
    prompt: 'A European telecom operator is considering a €5B investment in 5G infrastructure. Their current EBITDA margin is 35%, and they have €12B in debt. Should they invest, and how should they fund it?',
    context: 'The company operates in 4 European countries. Data traffic is growing 30% annually. 4G networks are approaching capacity limits in major cities. Regulators are mandating 5G rollout targets.',
    keyFacts: [
      'Current revenue: €8B (declining 2% annually)',
      'EBITDA: €2.8B (35% margin)',
      'Net debt: €12B (4.3x EBITDA)',
      'Capex (current): €1.5B annually (replacement + maintenance)',
      '5G investment required: €5B over 3 years',
      'Expected 5G revenue uplift: €500M-1B annually by year 5',
      'Spectrum costs already incurred: €2B (sunk cost)',
      'Competition: 3 main rivals, all investing in 5G',
      'Enterprise segment: 30% of revenue, 40% margin (highest growth)',
      'Consumer ARPU: declining 3% annually',
      'Cost of debt: 4.5%, equity cost: 9%'
    ],
    frameworkHints: [
      'Strategic necessity vs financial constraint',
      'Financing options (debt, equity, asset sales, JV)',
      'Phased rollout vs full investment analysis',
      'Enterprise vs consumer value proposition',
      'Regulatory and competitive dynamics'
    ],
    expectedCalculations: [
      '5G investment NPV/IRR under different scenarios',
      'Debt capacity and covenant analysis',
      'Shareholder value impact (accretive/dilutive)',
      'Phased vs full rollout financial comparison',
      'Sensitivity analysis on adoption rates'
    ],
    successCriteria: [
      'Clear investment recommendation with reasoning',
      'Financing plan maintaining investment grade rating',
      'Value creation quantification',
      'Phased implementation roadmap',
      'Regulatory strategy recommendation'
    ]
  },
  {
    id: 'profitability-5',
    title: 'Software Company SaaS Metrics Rescue',
    category: 'Profitability',
    industry: 'Software / SaaS',
    difficulty: 'Medium',
    prompt: 'A B2B SaaS company growing at 40% YoY is burning cash faster than expected. Their gross retention is 85% and they spend 60% of revenue on sales & marketing. Diagnose and fix their profitability path.',
    context: 'The company has $50M ARR, 500 enterprise customers. They raised $100M in VC funding and have 18 months of runway left. Investors are pushing for a path to profitability.',
    keyFacts: [
      'ARR: $50M (40% YoY growth)',
      'Gross margin: 75%',
      'Net revenue retention: 110% (85% gross retention + 25% expansion)',
      'S&M spend: 60% of revenue ($30M)',
      'R&D: 25% of revenue ($12.5M)',
      'G&A: 10% of revenue ($5M)',
      'CAC: $80K per customer',
      'LTV: $240K (3:1 LTV/CAC ratio, below 5:1 benchmark)',
      'Average sales cycle: 6 months',
      'Customer churn root cause: 40% due to poor onboarding',
      'Cash burn: $15M annually on $50M revenue',
      'Runway: 18 months'
    ],
    frameworkHints: [
      'Unit economics deep dive',
      'Customer acquisition funnel analysis',
      'Pricing and packaging optimization',
      'Customer success and retention improvement',
      'Organizational efficiency'
    ],
    expectedCalculations: [
      'Cash flow forecast under current trajectory',
      'Target economics improvement (LTV/CAC, payback period)',
      'Cost reduction impact on growth rate',
      'Time to profitability under different scenarios'
    ],
    successCriteria: [
      'Identified root causes of cash burn',
      'Concrete cost optimization plan without killing growth',
      'Customer retention improvement strategy',
      'Path to profitability with timeline',
      'Key metrics targets (LTV/CAC, payback period)'
    ]
  },
  {
    id: 'profitability-6',
    title: 'Hospitals Private Payor Mix Shift',
    category: 'Profitability',
    industry: 'Healthcare',
    difficulty: 'Hard',
    prompt: 'A 500-bed private hospital chain in the US sees commercial insurance patients declining from 60% to 40% of mix, replaced by Medicare/Medicaid with lower reimbursement. How should they respond?',
    context: 'The chain operates 8 hospitals in the Northeast US. They have strong clinical outcomes but face pressure from employers moving employees to high-deductible plans and narrow networks.',
    keyFacts: [
      'Current revenue: $1.2B',
      'EBITDA margin: 12% (down from 18% in 5 years)',
      'Payor mix change: Commercial 60%→40%, Gov\'t 40%→60%',
      'Commercial reimbursement: 180% of Medicare',
      'Medicare reimbursement: At cost + 2%',
      'Medicaid reimbursement: 85% of cost',
      'Bad debt & charity care: 5% of revenue',
      'Operating cost escalation: 6% annually (above inflation)',
      'Outpatient revenue: 35% of total (growing 10% annually)',
      'Average length of stay: 4.5 days',
      'Occupancy rate: 72% (down from 85% pre-COVID)',
      'Physician alignment: 40% employed, 60% independent'
    ],
    frameworkHints: [
      'Revenue cycle management optimization',
      'Service line profitability analysis',
      'Cost structure transformation',
      'Outpatient and ambulatory strategy',
      'Employer direct contracting opportunity'
    ],
    expectedCalculations: [
      'Revenue impact of payor mix shift',
      'Cost reduction target and levers',
      'New service line investment ROI',
      'Outpatient expansion financial model',
      'Negotiation leverage analysis with payors'
    ],
    successCriteria: [
      'Payor mix shift impact quantification',
      'Cost reduction plan with specific levers',
      'Revenue diversification strategy',
      'Payor negotiation strategy',
      '5-year financial sustainability plan'
    ]
  },

  // ============ PRICING STRATEGY ============
  {
    id: 'pricing-1',
    title: 'Streaming Service Pricing Tiers',
    category: 'Pricing Strategy',
    industry: 'Media / Technology',
    difficulty: 'Medium',
    prompt: 'A new streaming service launching in the US needs to set its pricing structure. They have a library of 5,000 movies and 2,000 TV series. Design the optimal pricing strategy.',
    context: 'The market has major competitors (Netflix, Disney+, HBO Max, Amazon Prime, Apple TV+). The streaming market is maturing with slowing subscriber growth. They have a unique catalog of classic films but limited original content.',
    keyFacts: [
      'US streaming market: 250M subscribers, 85% household penetration',
      'Average US household spends: $47/month on 3 streaming services',
      'Key competitors: Netflix $15.49, Disney+ $7.99, HBO Max $15.99, Hulu $7.99',
      'Their USP: Deep catalog of classic films (5,000 titles)',
      'Original content: 20 shows planned over 2 years',
      'Target subscribers: 10M in year 1',
      'Content acquisition cost: $2B upfront, $500M annually',
      'Technology & platform cost: $200M annually',
      'Marketing budget: $300M year 1',
      'Ad-supported tier possible: ARPU $4-6/month',
      'Churn industry average: 4-5% monthly'
    ],
    frameworkHints: [
      'Value-based vs competitor-based pricing',
      'Tier structure optimization',
      'Freemium vs free trial strategy',
      'Bundle and partnership opportunities',
      'International pricing consistency'
    ],
    expectedCalculations: [
      'Revenue model for different tier structures',
      'Breakeven subscriber count',
      'LTV calculation per tier',
      'Price elasticity estimation'
    ],
    successCriteria: [
      'Recommended pricing tiers with rationale',
      'Financial projections for each tier',
      'Launch and promotional strategy',
      'Impact on subscriber acquisition and churn',
      'Long-term pricing roadmap'
    ]
  },
  {
    id: 'pricing-2',
    title: 'Pharma Drug Pricing in Emerging Markets',
    category: 'Pricing Strategy',
    industry: 'Pharmaceuticals',
    difficulty: 'Expert',
    prompt: 'A pharmaceutical company has developed a breakthrough gene therapy for a rare disease. Treatment cost is $200K in the US. How should they price in India, where per capita healthcare spending is $75 annually?',
    context: 'The disease affects 5,000 patients in India. There is no alternative treatment. The company faces massive reputational risk if priced too high, but needs to recoup $2B in R&D costs.',
    keyFacts: [
      'US price: $200K per treatment (one-time curative therapy)',
      'India affected patients: 5,000 (diagnosed)',
      'Estimated undiagnosed: 10,000-15,000 more',
      'India per capita healthcare spend: $75/year',
      'India health insurance coverage: 30% of population',
      'Government health budget: 1.5% of GDP',
      'Tiered pricing precedents: Gilead\'s Harvoni ($1K in India vs $90K US)',
      'Patent protection: 12 years remaining',
      'Manufacturing cost: $15K per treatment',
      'Patient assistance programs: common 50-90% discounts',
      'Compulsory licensing risk if priced "excessively"'
    ],
    frameworkHints: [
      'Value-based pricing adjusted for purchasing power',
      'Tiered pricing framework and volume commitments',
      'Government negotiation and market access',
      'Patient assistance and access programs',
      'Cross-border arbitrage prevention'
    ],
    expectedCalculations: [
      'Revenue projection under different price points',
      'Number of patients treatable at each price point',
      'Government budget impact analysis',
      'Global revenue cannibalization risk',
      'Cost recovery timeline'
    ],
    successCriteria: [
      'Ethical pricing framework',
      'Market access and reimbursement strategy',
      'Volume and net price projections',
      'Partnership and distribution model',
      'Risk mitigation for reputational and IP challenges'
    ]
  },
  {
    id: 'pricing-3',
    title: 'Gym Chain Membership Redesign',
    category: 'Pricing Strategy',
    industry: 'Fitness / Services',
    difficulty: 'Easy',
    prompt: 'A regional gym chain with 50 locations is losing members to low-cost competitors like Planet Fitness ($10/month). Their current pricing is $49/month for full access. Should they match the low-cost model or differentiate?',
    context: 'The chain has premium equipment, pools, saunas, and group classes. 40% of members never use classes or pool. Utilization is 60% during peak, 20% off-peak.',
    keyFacts: [
      'Current members: 100,000 (average $49/month)',
      'Revenue: $58.8M annually',
      'Operating margin: 15%',
      'Low-cost competition: Planet Fitness ($10), Anytime Fitness ($35)',
      'Premium competition: Equinox ($150+), Life Time ($120+)',
      'Member demographics: 55% female, average age 38',
      'Cancellation reason: 30% cost, 25% relocation, 20% non-usage',
      'Off-peak (9AM-4PM) capacity: 80% empty',
      'Group class attendance: 35% of members (pay extra $20/month)',
      'PT revenue: $5M annually (10% margin)',
      'Student segment: 15% of potential market'
    ],
    frameworkHints: [
      'Understand customer willingness to pay by segment',
      'Competitive positioning analysis',
      'Pricing tier design for different usage patterns',
      'Ancillary revenue optimization',
      'Value communication strategy'
    ],
    expectedCalculations: [
      'Revenue impact of price reduction',
      'Member volume needed at each price point',
      'Per-member profitability analysis',
      'Off-peak pricing revenue potential'
    ],
    successCriteria: [
      'Segmented pricing recommendation',
      'Financial impact projections',
      'Member retention and acquisition strategy',
      'Competitive positioning recommendation',
      'Implementation approach'
    ]
  },
  {
    id: 'pricing-4',
    title: 'B2B Software Per-Seat vs Usage Pricing',
    category: 'Pricing Strategy',
    industry: 'Software / B2B SaaS',
    difficulty: 'Hard',
    prompt: 'A B2B data analytics software company is considering switching from per-seat licensing to usage-based pricing. Their customers range from 50-person startups to 10,000-person enterprises. Design the optimal pricing model transition.',
    context: 'The company has $200M ARR with 70% gross margins. Per-seat pricing is creating friction — SMBs want lower entry price, enterprises want unlimited access. Competitors are moving to consumption models.',
    keyFacts: [
      'Current ARR: $200M (per-seat licensing $100/seat/month)',
      'Customer count: 2,000 (80% SMB, 15% mid-market, 5% enterprise)',
      'Churn by segment: SMB 5%/month, mid-market 2%, enterprise 0.5%',
      'Current revenue: 60% SMB, 25% mid-market, 15% enterprise',
      'Implementation cost: $50K avg per customer',
      'Usage data: 70% of seats use <30% of available features',
      'Competitors: Snowflake (usage), Datadog (hybrid), Tableau (per-seat)',
      'Margin impact: usage-based COGS 40% vs per-seat 30%',
      'Customer NPS: 45 (industry avg 40)',
      'Contract length: 70% annual, 30% monthly',
      'Sales cycle: 90 days average',
      'Development cost for metering: $5M'
    ],
    frameworkHints: [
      'Revenue impact modeling across segments',
      'Customer willingness to pay analysis',
      'Competitive positioning in pricing model',
      'Implementation and migration strategy',
      'Sales compensation redesign'
    ],
    expectedCalculations: [
      'Revenue impact under different pricing models by segment',
      'Customer migration scenarios and churn risk',
      'Gross margin evolution over transition period',
      'LTV impact for each segment'
    ],
    successCriteria: [
      'Recommended pricing model with segment-level analysis',
      'Transition plan with timeline and milestones',
      'Financial projections for 3-year transition',
      'Customer communication and migration strategy',
      'Risk mitigation for revenue disruption'
    ]
  },
  {
    id: 'pricing-5',
    title: 'Airline Dynamic Pricing Overhaul',
    category: 'Pricing Strategy',
    industry: 'Airlines / Travel',
    difficulty: 'Expert',
    prompt: 'A Middle Eastern airline with a hub-and-spoke model wants to completely overhaul its pricing and revenue management system. They currently use manual, rule-based pricing while competitors use AI-driven dynamic pricing. Design the transformation.',
    context: 'The airline operates 200 aircraft to 120 destinations. Premium cabins (Business/First) contribute 40% of revenue but only 15% of seats. They have 15 years of historical booking data that is largely unused.',
    keyFacts: [
      'Annual revenue: $8B',
      'Passengers: 45M annually',
      'Load factor: 82%',
      'Revenue by cabin: Economy 60%, Business 30%, First 10%',
      'Current RMS: 15-year-old legacy system, rule-based',
      'Pricing updates: twice daily (competitors: real-time)',
      'Ancillary revenue: $35/passenger (industry leader: $65)',
      'Booking curve: 40% book within 14 days, 25% > 60 days out',
      'Customer segments: Leisure 45%, Business 30%, VFR 25%',
      'Hub: Middle East (60% connecting traffic)',
      'Seasonality: Peak 3x off-peak demand',
      'Competitive intensity: 4 full-service + 3 LCC competitors on top 10 routes',
      'IT budget for RMS: $50M',
      'Expected revenue uplift from AI dynamic pricing: 3-7%'
    ],
    frameworkHints: [
      'Revenue management system requirements and architecture',
      'Segmentation and personalization strategy',
      'Dynamic pricing algorithm design considerations',
      'Organizational change management',
      'Integration with existing reservation and booking systems'
    ],
    expectedCalculations: [
      'Revenue uplift potential by route and cabin',
      'IT investment and ROI analysis',
      'Implementation timeline and cost',
      'Risk-adjusted revenue projections',
      'Competitive response modeling'
    ],
    successCriteria: [
      'Revenue management transformation strategy with technology stack',
      'Phased implementation roadmap with quick wins',
      'Revenue uplift quantification ($150M+ target)',
      'Organizational capability building plan',
      'Risk mitigation strategy for implementation'
    ]
  },

  // ============ GROWTH STRATEGY ============
  {
    id: 'growth-1',
    title: 'Coffee Chain Hyperlocal Growth',
    category: 'Growth Strategy',
    industry: 'F&B / Retail',
    difficulty: 'Medium',
    prompt: 'A regional coffee chain in the US with 150 stores is growing at 5% annually but wants to accelerate to 20% growth. They are considering drive-through only stores, airport locations, and college campuses. Which growth vector should they prioritize?',
    context: 'The chain has strong brand loyalty in their home region (Pacific Northwest). They roast their own beans and have a strong sustainability story. They are fully debt-free with $50M cash for expansion.',
    keyFacts: [
      'Current stores: 150 in Pacific Northwest',
      'Average store revenue: $800K (industry avg $1M for specialty coffee)',
      'Store EBITDA: 18% (industry avg 15%)',
      'Cash available: $50M (no debt)',
      'Drive-through store cost: $400K buildout, avg revenue $1.2M',
      'Airport location cost: $200K buildout + 15% of revenue royalty',
      'Airport avg revenue: $1.5M per location',
      'College campus: $250K buildout, $600K revenue (8-month academic year)',
      'Brand awareness outside PNW: 10% vs 85% in home region',
      'Specialty coffee market growth: 10% annually',
      'Starbucks dominance: 40% market share nationally'
    ],
    frameworkHints: [
      'Evaluate each channel on ROI, strategic fit, and risk',
      'Consider brand adjacency and brand dilution',
      'Analyze customer acquisition cost by channel',
      'Operational complexity assessment',
      'Real estate and partnership strategy'
    ],
    expectedCalculations: [
      'ROI comparison across the three options',
      'Capital allocation optimization',
      'Brand reach and revenue projections',
      'Payback period for each format',
      'Risk-adjusted return comparison'
    ],
    successCriteria: [
      'Recommended growth vector with rationale',
      'Capital allocation plan',
      '3-year store expansion roadmap',
      'Operational readiness assessment',
      'Brand risk mitigation strategy'
    ]
  },
  {
    id: 'growth-2',
    title: 'Bank Digital Transformation Acceleration',
    category: 'Growth Strategy',
    industry: 'Banking / Financial Services',
    difficulty: 'Hard',
    prompt: 'A traditional regional bank in the Midwest with $50B in assets is losing millennial customers to neobanks (Chime, SoFi, etc.). Their digital adoption is low but they have an extensive branch network. How should they grow?',
    context: 'The bank has 200 branches across 5 states. They are profitable with 15% ROE but seeing 5% annual customer erosion in under-35 segment. They have $200M annual IT budget.',
    keyFacts: [
      'Total assets: $50B',
      'Branches: 200 (avg 5 employees per branch)',
      'ROE: 15% (industry avg 12%)',
      'Efficiency ratio: 58% (industry avg 60%)',
      'Digital adoption: 25% of transactions (industry avg 45%)',
      'Under-35 customer share: 20% (down from 30% in 5 years)',
      'Neobank competitive advantage: lower fees, better UX, faster onboarding',
      'Branch cost: $500K/year per branch (staff + rent + ops)',
      'Digital acquisition cost: $50 per customer (vs $300 branch)',
      'Cross-sell: 2.5 products per customer (industry avg 3.2)',
      'IT budget: $200M (60% maintenance, 15% regulatory, 25% innovation)',
      'Deposit mix: 40% low-cost checking/savings, 60% CDs/money market'
    ],
    frameworkHints: [
      'Analyze customer segments and their needs',
      'Digital vs branch strategy optimization',
      'Build vs buy vs partner for digital capabilities',
      'Data and personalization strategy',
      'Cost-income ratio for digital vs traditional'
    ],
    expectedCalculations: [
      'Customer acquisition cost comparison',
      'Digital investment ROI',
      'Branch optimization financial impact',
      'Revenue per customer by segment',
      'Transformation budget and timeline'
    ],
    successCriteria: [
      'Integrated digital-physical strategy',
      'Branch network optimization plan',
      'Digital product and partnership roadmap',
      'Customer migration strategy',
      '5-year financial projections'
    ]
  },
  {
    id: 'growth-3',
    title: 'Fashion Brand Metaverse Expansion',
    category: 'Growth Strategy',
    industry: 'Fashion / Retail',
    difficulty: 'Easy',
    prompt: 'A contemporary fashion brand with $500M revenue wants to grow through metaverse and digital fashion. They sell through retail stores and e-commerce. What growth opportunities exist in the virtual space?',
    context: 'The brand targets 18-35 year old women. 70% of their customers are Gen Z. They are known for bold, Instagram-worthy designs. Digital fashion is projected to be a $50B market.',
    keyFacts: [
      'Revenue: $500M (80% physical retail, 20% e-commerce)',
      'Target customer: 18-35 women, 70% Gen Z',
      'Instagram following: 2M, TikTok: 500K',
      'Digital fashion market: $50B projected by 2030',
      'Potential revenue models: virtual clothing NFTs, AR filters, digital twins',
      'Competition: Gucci, Nike, Adidas already in metaverse',
      'Technical readiness: basic e-commerce, no digital product experience',
      'Budget for initiative: $10M',
      'ROI expectations: 3x within 2 years'
    ],
    frameworkHints: [
      'Evaluate digital product categories',
      'Platform selection strategy',
      'Brand positioning in virtual spaces',
      'Integration with physical products',
      'Monetization and pricing models'
    ],
    expectedCalculations: [
      'Market sizing in target segment',
      'Revenue projections for each initiative',
      'Investment and resource requirements',
      'Marketing ROI comparison'
    ],
    successCriteria: [
      'Identifying highest-ROI digital opportunity',
      'Platform strategy',
      'Revenue model recommendation',
      'Implementation roadmap',
      'Brand risk assessment'
    ]
  },

  // ============ OPERATIONS / SUPPLY CHAIN ============
  {
    id: 'operations-1',
    title: 'E-commerce Fulfillment Network Redesign',
    category: 'Operations / Supply Chain',
    industry: 'E-commerce / Logistics',
    difficulty: 'Medium',
    prompt: 'An e-commerce company doing $2B in annual sales is spending 22% of revenue on fulfillment (vs 15% industry benchmark). They have 3 warehouses covering the US. Redesign their fulfillment network.',
    context: 'The company sells primarily bulky items (furniture, home goods). They offer free 2-day shipping on orders over $50. 70% of orders are in the $50-200 range. Peak season (Nov-Dec) is 40% of annual sales.',
    keyFacts: [
      'Annual revenue: $2B',
      'Fulfillment cost: $440M (22% of revenue)',
      'Industry benchmark: 15% of revenue',
      'Current warehouses: 3 (NJ, IL, NV)',
      'Number of SKUs: 50,000',
      'Average order value: $120',
      'Orders per year: 16.7M',
      'Average package weight: 25 lbs',
      'Customer delivery promise: 2-day free shipping over $50',
      'Current service level: 92% on-time',
      'Inventory turns: 4x annually (industry avg 6x)',
      'Return rate: 15% (furniture avg 20%)',
      'Peak season surge: 3x normal volume',
      'Last-mile cost: 40% of total fulfillment cost',
      'Carrier mix: 60% FedEx/UPS, 40% USPS'
    ],
    frameworkHints: [
      'Network optimization (number and location of warehouses)',
      'Zone skipping and transportation optimization',
      'Inventory management improvement',
      'Automation and technology investment',
      'Last-mile alternatives (regional carriers, in-house delivery)'
    ],
    expectedCalculations: [
      'Transportation cost by zone analysis',
      'Warehouse optimization ROI',
      'Inventory reduction potential',
      'Network redesign financial impact',
      'Peak season capacity cost-benefit'
    ],
    successCriteria: [
      'Network design recommendation',
      'Cost savings quantification ($40M+ target)',
      'Service level improvement plan',
      'Implementation timeline',
      'Technology and automation strategy'
    ]
  },
  {
    id: 'operations-2',
    title: 'Hotel Chain Revenue Management Overhaul',
    category: 'Operations / Supply Chain',
    industry: 'Hospitality',
    difficulty: 'Hard',
    prompt: 'A hotel chain with 500 properties in 20 countries has seen RevPAR decline 8% year-over-year despite 70% average occupancy. Their revenue management system is outdated. Design a transformation.',
    context: 'The chain operates luxury, business, and resort hotels. They face competition from OTAs (Booking.com, Expedia taking 15-20% commission) and alternative accommodations (Airbnb).',
    keyFacts: [
      'Properties: 500 across 20 countries',
      'Rooms: 125,000 total',
      'Revenue: $5B annually',
      'Occupancy: 70% (flat YoY)',
      'ADR: $190 (down 5% YoY)',
      'RevPAR: $133 (down 8% YoY)',
      'OTA commission: 18% of online revenue',
      'Direct channel share: 35% (industry avg 40%)',
      'Group business: 25% of revenue (down from 35% pre-COVID)',
      'Revenue management system: 15 years old, rule-based',
      'Competition: Marriott, Hilton, Accor investing heavily in RMS AI',
      'Seasonal variation: resorts 80% peak/40% off-peak occupancy',
      'Corporate negotiated rates: 20% of bookings, 2-year contracts'
    ],
    frameworkHints: [
      'Revenue management system modernization',
      'Distribution channel optimization',
      'Pricing strategy by segment and season',
      'Direct booking and loyalty program enhancement',
      'Group and corporate business strategy'
    ],
    expectedCalculations: [
      'Revenue uplift from RMS optimization (3-5% typical)',
      'OTA commission savings from direct channel shift',
      'Dynamic pricing revenue impact',
      'Technology investment and ROI',
      'RevPAR recovery trajectory'
    ],
    successCriteria: [
      'Revenue management transformation strategy',
      'Technology platform recommendation',
      'Channel mix optimization plan',
      'Revenue uplift projection ($150M+ target)',
      'Organizational and capability building plan'
    ]
  },
  {
    id: 'operations-3',
    title: 'Manufacturing Plant Productivity',
    category: 'Operations / Supply Chain',
    industry: 'Manufacturing',
    difficulty: 'Easy',
    prompt: 'A manufacturing plant producing automotive components is operating at 70% overall equipment effectiveness (OEE), below the 85% world-class benchmark. Identify improvement opportunities.',
    context: 'The plant employs 500 workers in 3 shifts, producing 10,000 units/day. They have 50 CNC machines, 5 assembly lines, and 2 painting lines. They supply to 3 major OEMs under JIT contracts.',
    keyFacts: [
      'Current OEE: 70% (Availability: 80%, Performance: 90%, Quality: 97%)',
      'World-class OEE target: 85%',
      'Planned downtime: 12% (maintenance, shift changes, breaks)',
      'Unplanned downtime: 8% (machine breakdowns)',
      'Setup/changeover time: 4 hours per batch (6x/month)',
      'Defect rate: 3% (industry avg 2%)',
      'Inventory turns: 8x (industry avg 12x)',
      'Lead time: 3 weeks from order to delivery',
      'Labor efficiency: 85% (industry avg 90%)',
      'Energy cost: 15% of manufacturing cost'
    ],
    frameworkHints: [
      'Identify largest OEE loss areas (availability, performance, quality)',
      'TPM (Total Productive Maintenance) implementation',
      'SMED (Single Minute Exchange of Die) for changeover reduction',
      'Lean manufacturing and waste elimination',
      'Workforce engagement and continuous improvement culture'
    ],
    expectedCalculations: [
      'Production capacity increase from OEE improvement',
      'Cost savings from reduced downtime',
      'Changeover time reduction impact',
      'Revenue impact of increased capacity'
    ],
    successCriteria: [
      'OEE improvement target and plan',
      'Focus areas with highest impact',
      'Lean implementation roadmap',
      'Investment requirements and ROI',
      'Expected productivity increase quantification'
    ]
  },

  // ============ M&A / CORPORATE STRATEGY ============
  {
    id: 'ma-1',
    title: 'Food Conglomerate Acquisition Strategy',
    category: 'M&A / Corporate Strategy',
    industry: 'Consumer Packaged Goods',
    difficulty: 'Hard',
    prompt: 'A global food conglomerate with $15B revenue wants to acquire growth in the plant-based protein market. They have $2B to deploy. Should they acquire a leader or multiple smaller brands?',
    context: 'The company has strong positions in dairy, meat, and snacks. Plant-based is growing 15% annually but they have no presence. They have acquired 3 small brands in the past 5 years with mixed success.',
    keyFacts: [
      'Revenue: $15B (dairy 40%, meat 35%, snacks 25%)',
      'Growth rate: 2% annually (flat volumes)',
      'Plant-based market: $8B in US, growing 15% annually',
      'Segment leaders: Beyond Meat ($400M rev), Impossible ($500M)',
      'Valuations: Beyond Meat at 3x rev (down from peak 30x), private cos 4-6x',
      'Acquisition budget: $2B (debt + cash)',
      'Historical M&A: 3 small brands acquired ($50-100M each), 2 underperforming',
      'Synergy potential: distribution (50K retail doors), manufacturing, R&D',
      'Consumer overlap: 40% of their customers also buy plant-based',
      'Internal R&D capability: limited, 2-year to develop proprietary tech',
      'Cultural integration challenge: high with entrepreneurial brands'
    ],
    frameworkHints: [
      'Evaluate platform acquisition vs tuck-in approach',
      'Synergy quantification and integration strategy',
      'Valuation and return analysis',
      'Portfolio strategy (which sub-segments to target)',
      'Risk assessment (market evolution, competitive response)'
    ],
    expectedCalculations: [
      'Market sizing by sub-segment (burgers, chicken, dairy alt, etc.)',
      'ROI analysis for different acquisition targets',
      'Synergy realization timeline and value',
      'Dilution/accretion analysis',
      'Integration cost and complexity assessment'
    ],
    successCriteria: [
      'Clear acquisition target recommendation',
      'Valuation and deal structure proposal',
      'Integration plan and timeline',
      'Synergy quantification',
      'Risk mitigation strategy'
    ]
  },
  {
    id: 'ma-2',
    title: 'Media Company Divestiture Decision',
    category: 'M&A / Corporate Strategy',
    industry: 'Media / Entertainment',
    difficulty: 'Medium',
    prompt: 'A traditional media company with print, TV, and digital assets is considering divesting their newspaper division. Newspapers contribute 20% of revenue but 0% of profit growth. Should they sell?',
    context: 'The company has $5B revenue with 30% EBITDA margins. TV and digital are growing 8% annually. Print is declining 10% annually. They have received several offers for the newspaper division.',
    keyFacts: [
      'Total revenue: $5B (TV 50%, Digital 30%, Print 20%)',
      'Total EBITDA: $1.5B (30% margin)',
      'Print segment: $1B revenue, $50M EBITDA (5% margin, declining 10% YoY)',
      'TV: $2.5B revenue, $875M EBITDA (35% margin, growing 5%)',
      'Digital: $1.5B revenue, $575M EBITDA (38% margin, growing 10%)',
      'Print decline: revenue -10%, EBITDA -20% annually',
      'Offer received: $800M (approx 8x EBITDA)',
      'Divestiture cost: $50M (legal, advisory, separation)',
      'Tax implications: 21% capital gains on $500M gain (assume $300M basis)',
      'Proceeds use options: debt reduction (4% interest), reinvest in digital',
      'Digital acquisition target: marketing tech company, $1B, 10% revenue growth',
      'Employee impact: 1,500 print employees, severance $30M'
    ],
    frameworkHints: [
      'Financial analysis (valuation, use of proceeds, accretion/dilution)',
      'Strategic fit and portfolio optimization',
      'Synergies lost vs costs freed up',
      'Timing considerations (cycle, buyer demand)',
      'Alternative strategies (turnaround, spin-off, partial sale)'
    ],
    expectedCalculations: [
      'Net proceeds after tax and costs',
      'EPS impact (accretion/dilution)',
      'ROI comparison: debt reduction vs reinvestment',
      'Value creation from alternative use of proceeds',
      'Multi-year financial projection with and without divestiture'
    ],
    successCriteria: [
      'Recommendation with financial rationale',
      'Use of proceeds strategy',
      'Future portfolio vision',
      'Stakeholder management plan',
      'Timing and execution roadmap'
    ]
  },

  // ============ DIGITAL TRANSFORMATION ============
  {
    id: 'digital-1',
    title: 'Insurance Company Legacy Modernization',
    category: 'Digital Transformation',
    industry: 'Insurance',
    difficulty: 'Expert',
    prompt: 'A 100-year-old insurance company with $10B in premiums is running on mainframe systems from the 1980s. They need to modernize to compete with insurtechs. Design the digital transformation strategy.',
    context: 'The company has 5M policyholders, selling through independent agents. Insurtechs are gaining share with 5-minute policy issuance vs their 2-week process. IT spend is 3% of premium vs 5% industry avg.',
    keyFacts: [
      'Premiums written: $10B',
      'Policyholders: 5M',
      'Distribution: 100% through 10,000 independent agents',
      'Core systems: Mainframe (COBOL), 30+ years old',
      'IT budget: $300M (3% of premiums vs 5% industry avg)',
      'New policy issuance time: 2 weeks (insurtech: 5 minutes)',
      'Claims processing: 15 days average (insurtech: 2 days)',
      'IT debt: estimated $200M in deferred maintenance',
      'Data: 40 years of claims data, mostly inaccessible',
      'Regulatory constraints: 50 state regulators, strict data privacy',
      'Agent demographics: average age 55, low digital literacy',
      'Customer demographics: average age 52, 30% under 35',
      'Competitive pressure: insurtechs grew from 2% to 8% market share in 5 years'
    ],
    frameworkHints: [
      'Legacy modernization approach (big bang vs incremental)',
      'Architecture strategy (microservices, APIs, cloud)',
      'Build vs buy vs partner for digital capabilities',
      'Data strategy and AI/ML implementation',
      'Organizational change management and talent'
    ],
    expectedCalculations: [
      'Modernization cost and timeline estimates',
      'ROI analysis for different approaches',
      'Operational efficiency improvements ($/policy)',
      'Revenue impact from improved customer experience',
      'Risk assessment for each modernization approach'
    ],
    successCriteria: [
      'Modernization roadmap (phased approach with clear milestones)',
      'Technology architecture recommendation',
      'Investment and resource plan',
      'Change management and talent strategy',
      'Business case with quantified benefits'
    ]
  },
  {
    id: 'digital-2',
    title: 'Restaurant Chain Digital Ordering',
    category: 'Digital Transformation',
    industry: 'Restaurant / F&B',
    difficulty: 'Easy',
    prompt: 'A fast-casual restaurant chain with 1,000 locations has only 10% of orders coming through digital channels. They want to reach 40% in 2 years. Design the digital ordering transformation.',
    context: 'The chain serves customizable bowls and salads. Average check is $12. Peak lunch hours see 30-minute wait times. They have an outdated website and no mobile app.',
    keyFacts: [
      'Locations: 1,000 (US only)',
      'Annual revenue: $3.5B',
      'Current digital orders: 10% (industry avg 25%)',
      'Target: 40% digital in 2 years',
      'Average wait time (peak): 30 minutes',
      'Items per order: 1.5 (limited customization)',
      'Ticket size: $12 (digital expected $14-15)',
      'Customer visit frequency: 3x per month',
      'Competitors digital share: Chipotle 40%, Sweetgreen 50%',
      'POS system: 5 years old, limited API capabilities',
      'Kitchen operations: each bowl made to order in ~3 minutes',
      'Marketing budget: $50M annually',
      'IT budget: $20M ($15M for digital transformation)'
    ],
    frameworkHints: [
      'Customer experience design (ordering flow, pick-up, loyalty)',
      'Technology stack (mobile app, web, POS integration)',
      'Operational integration (kitchen display, order routing)',
      'Marketing and adoption strategy',
      'Data and personalization capabilities'
    ],
    expectedCalculations: [
      'Digital investment and ROI',
      'Operational impact (throughput, labor)',
      'Revenue uplift from higher ticket size',
      'Customer acquisition cost for app downloads',
      'Breakeven and payback analysis'
    ],
    successCriteria: [
      'Digital product vision and feature roadmap',
      'Technology platform recommendation',
      'Operations integration plan',
      'Customer adoption strategy',
      'Financial projections and business case'
    ]
  },

  // ============ TURNAROUND / RESTRUCTURING ============
  {
    id: 'turnaround-1',
    title: 'Department Store Chain Rescue',
    category: 'Turnaround / Restructuring',
    industry: 'Retail',
    difficulty: 'Medium',
    prompt: 'A 50-year-old department store chain with 200 locations is in decline. Revenue has dropped 30% in 5 years, and they are burning $100M cash annually. They have 12 months of runway. Design a turnaround plan.',
    context: 'The chain competes in the mid-tier segment (Macy\'s, JCPenney territory). They are being squeezed by luxury upstairs and discount downstairs. They own 60% of their real estate.',
    keyFacts: [
      'Revenue: $2B (down from $2.8B in 5 years)',
      'EBITDA: -$50M (burning $100M cash annually)',
      'Cash: $150M remaining (12 months runway)',
      'Debt: $400M (covenants may be breached next quarter)',
      'Stores: 200 (60% owned, 40% leased)',
      'Store size: average 80,000 sq ft (too large for modern retail)',
      'Sales per square foot: $150 ($200 industry avg for mid-tier)',
      'E-commerce: 10% of sales (industry avg 20%)',
      'Private label: 15% of sales (30% margin vs 25% national brands)',
      'Inventory turns: 3x (industry avg 4x)',
      'Employees: 15,000 (full-time and part-time)',
      'Lease obligations: $150M annually, 5-15 year terms',
      'Sublease potential: limited, retail real estate market weak'
    ],
    frameworkHints: [
      'Cash conservation and liquidity management',
      'Store portfolio optimization (closures, renegotiations)',
      'Revenue recovery strategies (assortment, pricing, experience)',
      'Cost restructuring (SG&A, occupancy, labor)',
      'Capital structure and stakeholder management'
    ],
    expectedCalculations: [
      'Cash flow forecast and liquidity runway',
      'Store closure/renegotiation savings',
      'Revenue stabilization and recovery trajectory',
      'Capital structure restructuring scenarios',
      'Turnaround investment requirements'
    ],
    successCriteria: [
      'Cash stabilization plan (immediate 90 days)',
      'Store footprint optimization plan',
      'Revenue recovery strategy',
      'Cost reduction targets and plan',
      'Restructuring of balance sheet',
      'Timeline to profitability'
    ]
  },
  {
    id: 'turnaround-2',
    title: 'Law Firm Partner Productivity Crisis',
    category: 'Turnaround / Restructuring',
    industry: 'Professional Services / Legal',
    difficulty: 'Medium',
    prompt: 'A prestigious law firm with 500 attorneys is seeing partner profits decline 15% annually. Associates are burning out and leaving. Billable hours are dropping. Design a turnaround strategy.',
    context: 'The firm is 80 years old, known for corporate law. They operate on the traditional "up or out" partnership model. They face competition from both larger firms with deeper resources and smaller, nimbler boutiques.',
    keyFacts: [
      'Revenue: $500M (flat for 3 years)',
      'Profits per partner: $500K (down from $700K in 5 years)',
      'Equity partners: 100, Non-equity: 100',
      'Associates: 300 (30% are 1st-3rd year, 40% mid-level, 30% senior)',
      'Billable hours target: 2,000/yr for associates',
      'Utilization rate: 70% (down from 80%)',
      'Associate attrition: 25% annually (industry avg 18%)',
      'Hourly rates: Partners $800-1,200, Associates $400-800',
      'Alternate fee arrangements: 10% of revenue (industry avg 20%)',
      'IT spend: 3% of revenue (industry avg 5%)',
      'Document automation level: 20% (leading firms 60%)',
      'Client concentration: Top 10 clients = 60% of revenue',
      'Practice mix: M&A 30%, Litigation 25%, Corporate 25%, Tax 20%'
    ],
    frameworkHints: [
      'Operating model transformation (alternative staffing, leverage)',
      'Technology and automation adoption',
      'Pricing and billing innovation',
      'Talent management (recruitment, development, retention)',
      'Practice mix optimization and client strategy'
    ],
    expectedCalculations: [
      'Financial impact of leverage model changes',
      'Technology investment and ROI',
      'Associate retention improvement financial benefit',
      'Alternative fee arrangement impact on profitability',
      'Partner compensation model redesign'
    ],
    successCriteria: [
      'Root cause diagnosis of profit decline',
      'Operating model redesign recommendations',
      'Technology and innovation roadmap',
      'Talent strategy (recruit, develop, retain)',
      'Partner compensation and governance changes',
      '3-year profitability recovery plan'
    ]
  },

  // ============ NEW BUSINESS / INNOVATION ============
  {
    id: 'innovation-1',
    title: 'Auto Manufacturer Subscription Model',
    category: 'New Business / Innovation',
    industry: 'Automotive',
    difficulty: 'Expert',
    prompt: 'A traditional automaker wants to launch a vehicle subscription service allowing customers to swap cars monthly (SUV one month, sports car the next). Design the new business model.',
    context: 'The automaker sells 2M vehicles annually but is concerned about declining ownership among millennials/Gen Z. They have a diverse portfolio across all vehicle segments. They have existing financing and insurance arms.',
    keyFacts: [
      'Annual vehicle sales: 2M globally',
      'Revenue: $80B',
      'Profit per vehicle: $2,000',
      'Vehicle segments: Sedans, SUVs, Trucks, Sports cars, EVs',
      'Average new car monthly payment: $600-800 (US)',
      'Leasing: currently 25% of sales',
      'Target demographic: 25-40 urban professionals, 30M potential in US',
      'Subscription pricing: estimated $1,000-1,500/month',
      'Vehicle depreciation: 15-20% annually',
      'Insurance cost: $100-200/month per vehicle',
      'Maintenance & tires: $50-100/month',
      'Registration & taxes: varies by state',
      'Fleet cost: $35K-70K per vehicle (depending on model)',
      'Expected average subscription length: 8-12 months',
      'Swap frequency: allow 2-4 swaps per month',
      'Logistics: need hubs for vehicle storage and swapping'
    ],
    frameworkHints: [
      'Business model design (revenue, cost, unit economics)',
      'Customer segmentation and willingness to pay',
      'Vehicle portfolio strategy and utilization optimization',
      'Operational model (logistics, hubs, maintenance)',
      'Risk management (depreciation, insurance, damage)'
    ],
    expectedCalculations: [
      'Unit economics per subscriber per month',
      'Breakeven subscription price',
      'Fleet utilization and ROI',
      'Cannibalization impact on traditional sales/leases',
      'Scalability and capital requirements',
      'Market sizing and penetration projections'
    ],
    successCriteria: [
      'Detailed business model with unit economics',
      'Customer value proposition and market sizing',
      'Operational model design',
      'Financial projections (3-5 years)',
      'Risk assessment and mitigation',
      'Pilot launch plan and roadmap'
    ]
  },
  {
    id: 'innovation-2',
    title: 'Bank\'s Gen Z Banking App',
    category: 'New Business / Innovation',
    industry: 'Banking / Fintech',
    difficulty: 'Medium',
    prompt: 'A traditional bank wants to launch a standalone digital bank targeting Gen Z. They can build from scratch or acquire an existing neobank. Design the new venture.',
    context: 'The bank has $100B in assets but only 5% of customers are under 25. They see neobanks taking Gen Z customers at an alarming rate. They have $500M allocated for this initiative.',
    keyFacts: [
      'Bank assets: $100B, 10M customers',
      'Under-25 customers: 500K (5% of base)',
      'Gen Z market in US: 70M, 50% have a bank account',
      'Neobank users: 30M Gen Z (Chime: 15M, Current: 4M, Step: 5M)',
      'Average Gen Z monthly banking revenue: $5 (vs $20 for average customer)',
      'Acquisition cost: $50-100 for digital bank (vs $300 for traditional)',
      'Current digital offering: mobile app rating 3.5 stars (poor UX)',
      'Tech stack: legacy core banking system, slow to launch features',
      'Revenue model: interchange fees (2%), overdraft, subscription',
      'Key features expected: early paycheck, no-fee overdraft, budgeting tools',
      'Competition: existing neobanks, Apple Card, Venmo, Cash App',
      'Allocated budget: $500M for build or acquire'
    ],
    frameworkHints: [
      'Build vs buy analysis',
      'Feature prioritization (MVP vs full feature set)',
      'Customer acquisition and growth strategy',
      'Revenue model and monetization',
      'Regulatory and compliance considerations'
    ],
    expectedCalculations: [
      'Build vs acquire cost comparison',
      'Customer acquisition cost and LTV projections',
      'Revenue per user by monetization model',
      'Break-even timeline and investment requirements',
      'Market share targets and growth trajectory'
    ],
    successCriteria: [
      'Build vs acquire recommendation with financials',
      'Product feature roadmap (MVP + v2)',
      'Customer acquisition strategy',
      'Monetization and unit economics plan',
      'Technology and regulatory considerations',
      '5-year financial projections'
    ]
  },

  // ============ GROWTH STRATEGY (additional) ============
  {
    id: 'growth-4',
    title: 'Healthcare Platform Expansion Strategy',
    category: 'Growth Strategy',
    industry: 'Healthcare / Technology',
    difficulty: 'Hard',
    prompt: 'A telemedicine platform with 5M active users wants to expand beyond primary care into specialty care (dermatology, mental health, cardiology). They have $200M in funding. Design the growth strategy.',
    context: 'The platform currently offers $49/month unlimited primary care visits. They have 2,000 primary care providers. Specialists charge $150-250 per visit out-of-pocket. Insurance reimbursement for tele-specialty is growing rapidly.',
    keyFacts: [
      'Current users: 5M active (2M paying, 3M employer-sponsored)',
      'Revenue: $600M annually (70% subscription, 30% per-visit fees)',
      'Gross margin: 55% (primary care), target 65% for specialty',
      'Provider network: 2,000 primary care MDs, 0 specialists',
      'Specialist availability: 60% of US counties have <1 dermatologist',
      'Market size: US telemedicine $30B, specialty telemedicine $12B by 2026',
      'Insurance coverage: 45% of commercial plans now cover tele-specialty',
      'Patient wait times: avg 45 days for dermatology, 35 for cardiology in-person',
      'Key competitors: Teladoc ($1.6B rev), Amwell, Ro, Hims & Hers',
      'Provider acquisition cost: $15-25K per specialist (credentialing + tech)',
      'Platform development: $10-15M to add specialty modules',
      'Marketing cost per new user: $80 (current), expected $120 for specialty',
      'Regulatory: state-by-state licensing for specialists',
      'Funding available: $200M (Series C)'
    ],
    frameworkHints: [
      'Market prioritization (which specialty to add first)',
      'Build vs partner vs acquire for specialist network',
      'Pricing and insurance reimbursement strategy',
      'Provider supply strategy and credentialing',
      'Cross-sell and patient acquisition strategy'
    ],
    expectedCalculations: [
      'TAM/SAM/SOM by specialty vertical',
      'Unit economics for each specialty',
      'Investment required per specialty vertical',
      'Revenue contribution projection 3-year',
      'CAC and LTV by specialty type'
    ],
    successCriteria: [
      'Phased expansion roadmap with specialty prioritization',
      'Provider network strategy (employed vs contracted)',
      'Pricing and insurance strategy',
      '3-year financial projections with funding plan',
      'Regulatory and licensing approach'
    ]
  },
  {
    id: 'growth-5',
    title: 'D2C Brand Offline Retail Expansion',
    category: 'Growth Strategy',
    industry: 'Consumer / Retail',
    difficulty: 'Medium',
    prompt: 'A successful D2C skincare brand with $100M in online revenue wants to expand into physical retail. They are considering their own stores, shop-in-shop partnerships, or wholesale to existing retailers. Recommend a growth strategy.',
    context: 'The brand has 1M direct customers, strong social media following (2M Instagram, 500K TikTok). They are profitable with 70% gross margins. Founders are hesitant about losing brand control.',
    keyFacts: [
      'Online revenue: $100M (100% D2C via website)',
      'Gross margin: 70% (industry avg 60% for D2C)',
      'Customer base: 1M lifetime customers, 300K repeat buyers',
      'AOV: $65 (industry avg $45 for skincare)',
      'Repeat purchase rate: 40% (excellent for beauty)',
      'Marketing efficiency: 3x ROAS on Meta, 4x on TikTok',
      'Retail partnerships approached: Sephora, Ulta, Nordstrom, Target',
      'Wholesale margins: typically 50-60% of retail price to brand',
      'Own store economics: $500-800K buildout, $1.2M avg revenue',
      'Shop-in-shop (Sephora): $50K setup, ~$300K annual revenue per door',
      'Current brand awareness: 45% among 18-35 women online, 15% offline',
      'Cash on hand: $40M (profitable, no debt)',
      'Beauty retail market: $50B US, 85% still offline'
    ],
    frameworkHints: [
      'Evaluate retail channel economics (own store vs partnership vs wholesale)',
      'Brand control and customer experience considerations',
      'Cannibalization risk with online channel',
      'Capital allocation and ROI analysis',
      'Retail partner selection criteria'
    ],
    expectedCalculations: [
      'Per-channel P&L comparison',
      'ROI and payback period by channel',
      'Cannibalization impact modeling',
      '3-year revenue and margin projections',
      'Capital requirement by expansion scenario'
    ],
    successCriteria: [
      'Recommended channel mix with rationale',
      'Financial projections for recommended approach',
      'Brand control framework and guardrails',
      'Retail partner negotiation strategy',
      'Implementation roadmap with milestones'
    ]
  },

  // ============ OPERATIONS (additional) ============
  {
    id: 'operations-4',
    title: 'Cold Chain Logistics Optimization',
    category: 'Operations / Supply Chain',
    industry: 'Logistics / Food',
    difficulty: 'Hard',
    prompt: 'A national cold-chain logistics company handling perishable foods is facing 12% spoilage rates (industry avg 8%) and rising fuel costs. They operate 500 refrigerated trucks across the US. Redesign their operations.',
    context: 'The company serves grocery chains, restaurants, and food manufacturers. They have 12 distribution centers. Revenue is $800M. Spoilage costs them $96M annually. Fuel is 25% of operating costs.',
    keyFacts: [
      'Revenue: $800M',
      'Spoilage rate: 12% ($96M annual loss, industry avg 8%)',
      'Fleet: 500 refrigerated trucks (avg age 7 years)',
      'Distribution centers: 12 (avg age 15 years, outdated cooling)',
      'Fuel cost: 25% of operating costs ($200M)',
      'Driver turnover: 95% annually (industry avg 80%)',
      'On-time delivery: 94% (contract requires 98%)',
      'Avg delivery route: 250 miles, 8 stops',
      'Telematics: basic GPS, no temperature monitoring',
      'Warehouse automation: 10% (industry leaders: 40%)',
      'Clients: Top 5 = 50% of revenue',
      'IoT temperature sensor cost: $200/unit per truck',
      'Route optimization software ROI: 8-12% fuel savings',
      'New reefer unit cost: $25K per truck',
      'Energy cost for DCs: $15M annually'
    ],
    frameworkHints: [
      'Spoilage root cause analysis (temperature, handling, delays)',
      'Fleet modernization and maintenance optimization',
      'Route optimization and load consolidation',
      'Warehouse automation and temperature control upgrade',
      'Driver retention and training programs'
    ],
    expectedCalculations: [
      'Spoilage reduction ROI per initiative',
      'Fleet replacement vs retrofit analysis',
      'Route optimization fuel savings',
      'Warehouse automation investment and payback',
      'Overall cost reduction target ($40M+ goal)'
    ],
    successCriteria: [
      'Root cause analysis with quantified impact',
      'Technology investment roadmap (sensors, automation, routing)',
      'Cost reduction target by initiative',
      'Implementation timeline with quick wins',
      'Driver retention and operational excellence program'
    ]
  },
  {
    id: 'operations-5',
    title: 'Hospital Emergency Department Throughput',
    category: 'Operations / Supply Chain',
    industry: 'Healthcare / Hospital Operations',
    difficulty: 'Easy',
    prompt: 'A 400-bed urban hospital is seeing emergency department (ED) wait times averaging 6 hours, well above the 4-hour national target. Patient satisfaction is at 20th percentile. Design operational improvements.',
    context: 'The ED sees 80,000 visits annually. 30% of patients arrive by ambulance. The hospital is operating at 95% bed occupancy. The ED has 40 treatment bays. Staff shortages are chronic.',
    keyFacts: [
      'Annual ED visits: 80,000 (220/day average)',
      'Current wait time: 6 hours average (target 4 hours)',
      'LWBS (Left Without Being Seen): 8% (industry avg 3%)',
      'Patient satisfaction: 20th percentile',
      'ED beds: 40 treatment bays',
      'Hospital occupancy: 95% (safety target 85%)',
      'Admission rate from ED: 25% of all visits',
      'Average ED physician: 3 per shift (need 5 for volume)',
      'Lab turnaround: 90 minutes (target 60)',
      'Imaging turnaround: 120 minutes (target 90)',
      'Inpatient bed turnaround (discharge to clean): 4 hours',
      'Staff: 35% travel nurses (costs 40% more than permanent)',
      'Annual ED budget: $45M',
      'Revenue per ED visit: $1,200 avg',
      'Ambulance diversion hours: 200/month (lost revenue ~$2M/month)'
    ],
    frameworkHints: [
      'Map patient flow and identify bottlenecks',
      'Triage and streaming optimization',
      'Capacity management (staff, beds, diagnostics)',
      'Discharge process improvement',
      'Technology and lean implementation'
    ],
    expectedCalculations: [
      'Wait time reduction from each intervention',
      'Capacity increase from process improvement',
      'Financial impact of reduced LWBS and diversion',
      'Staffing optimization savings',
      'ROI of technology investments'
    ],
    successCriteria: [
      'Process map with bottleneck identification',
      'Recommended interventions with expected impact',
      'Implementation timeline with quick wins',
      'Staffing and capacity plan',
      'Quality and safety impact assessment'
    ]
  },

  // ============ M&A / CORPORATE STRATEGY (additional) ============
  {
    id: 'ma-3',
    title: 'Tech Roll-Up Strategy in SaaS',
    category: 'M&A / Corporate Strategy',
    industry: 'Software / SaaS',
    difficulty: 'Expert',
    prompt: 'A private equity firm wants to create a $1B+ revenue SaaS platform by rolling up 15-20 niche vertical SaaS companies in the logistics technology space. They have $500M equity and can leverage 3x debt. Design the roll-up strategy.',
    context: 'The logistics tech market is highly fragmented with hundreds of small SaaS companies serving specific niches (warehouse management, route optimization, freight matching, customs, etc.). Most have $5-50M ARR.',
    keyFacts: [
      'Target market: Logistics tech SaaS, fragmented, $50B total',
      'Target companies: 15-20 niche players ($5-50M ARR each)',
      'Equity available: $500M (Fund III)',
      'Leverage: 3x debt (investment-grade, 6% interest)',
      'Target returns: 3x MOIC in 5 years',
      'Target IRR: 25%+',
      'Average target valuation: 4-6x ARR (SaaS comps: 8-12x for integrated platforms)',
      'Synergy potential: Cross-sell (30% uplift), cost savings (20% G&A), tech consolidation',
      'Integration cost: estimated 15-20% of acquired ARR',
      'Current portfolio: 3 companies ($80M combined ARR)',
      'Management team: experienced, completed 5 bolt-on acquisitions before',
      'Competition: Thoma Bravo, Vista Equity also active in space',
      'Market growth: 12% CAGR for logistics tech'
    ],
    frameworkHints: [
      'Target screening and prioritization criteria',
      'Roll-up sequencing (platform first vs tuck-ins)',
      'Integration strategy (centralized vs federated)',
      'Value creation levers (cross-sell, cost save, tech consolidation)',
      'Exit strategy options (IPO, strategic sale, dividend recap)'
    ],
    expectedCalculations: [
      'Pro forma financial model with all acquisitions',
      'Synergy quantification (revenue and cost)',
      'IRR and MOIC under different scenarios',
      'Deployment timeline and capital structure optimization',
      'Exit valuation analysis'
    ],
    successCriteria: [
      'Target identification and prioritization framework',
      'Roll-up playbook with integration blueprint',
      'Pro forma financials and return analysis',
      'Risk mitigation strategy',
      'Org design and management team plan'
    ]
  },
  {
    id: 'ma-4',
    title: 'Cross-Border Merger of Retailers',
    category: 'M&A / Corporate Strategy',
    industry: 'Retail / Consumer Goods',
    difficulty: 'Hard',
    prompt: 'A UK-based grocery chain with $20B revenue is considering a merger of equals with a US grocery chain of similar size. The combined entity would be the 3rd largest globally. Evaluate the strategic rationale and integration plan.',
    context: 'The UK chain has strong private label, efficient supply chain, and urban store formats. The US chain has strength in fresh/organic, loyalty programs, and suburban stores. Both face margin pressure from discounters.',
    keyFacts: [
      'UK chain revenue: $20B (£16B), EBITDA margin 6%',
      'US chain revenue: $22B, EBITDA margin 5.5%',
      'Combined market cap: est. $15B',
      'Store count: UK 2,500, US 1,800 (no geographic overlap)',
      'Private label penetration: UK 50% of sales, US 25%',
      'Fresh/organic share: UK 20%, US 45%',
      'E-commerce share: UK 8%, US 12%',
      'Cost synergies estimated: $500M-800M annually (procurement, tech, G&A)',
      'Revenue synergies: cross-format learning, private label export',
      'Integration cost: est. $1-1.5B over 3 years',
      'Culture differences: UK centralized vs US decentralized ops',
      'Regulatory risk: FTC and CMA likely to scrutinize',
      'Premium/discount vs market: both trade at 10-12x EBITDA',
      'Key shareholders: UK 30% family-owned, US 40% institutional',
      'Timeline: rapid (12-month close to reduce uncertainty)'
    ],
    frameworkHints: [
      'Strategic rationale assessment (cost vs revenue synergies)',
      'Integration approach (speed vs thoroughness trade-off)',
      'Cultural integration and leadership selection',
      'Regulatory strategy (antitrust, foreign investment)',
      'Value capture tracking and governance'
    ],
    expectedCalculations: [
      'Synergy quantification and phasing',
      'Integration cost estimate and NPV of synergy',
      'Accretion/dilution analysis',
      'Combined entity pro forma financials',
      'Regulatory risk probability and cost scenarios'
    ],
    successCriteria: [
      'Merger rationale with quantified value creation',
      'Integration blueprint with Day 1 readiness plan',
      'Organizational design and leadership recommendations',
      'Regulatory and stakeholder strategy',
      'Risk mitigation for execution challenges'
    ]
  },

  // ============ DIGITAL TRANSFORMATION (additional) ============
  {
    id: 'digital-3',
    title: 'Manufacturer Industry 4.0 Journey',
    category: 'Digital Transformation',
    industry: 'Manufacturing / Industrial',
    difficulty: 'Hard',
    prompt: 'A 80-year-old industrial manufacturer with $5B revenue wants to implement Industry 4.0 across 20 factories worldwide. They have legacy equipment, limited digital talent, and a skeptical workforce. Design the transformation.',
    context: 'The company makes heavy machinery for mining and construction. 70% of their equipment is over 15 years old and not connected. They have started a few IoT pilots but nothing at scale.',
    keyFacts: [
      'Revenue: $5B, 20 factories in 12 countries',
      'Current digital maturity: Level 1 (basic automation, no IIoT)',
      'Factory equipment: 70% non-connected, avg age 15 years',
      'Annual IT budget: $150M (3% of revenue, industry avg 4%)',
      'Digital transformation budget requested: $500M over 5 years',
      'Potential benefits: 20% OEE improvement, 15% energy reduction, 10% labor efficiency',
      'Pilot results: 2 factories with IoT sensors, 12% OEE gain',
      'Workforce: 25,000 employees, avg age 48, 60% unionized',
      'IT team: 200 people, mostly ERP support, limited data science',
      'Competitors: 2 major competitors already have smart factories',
      'Key technologies: IoT sensors ($500-2K/machine), edge computing, digital twin, AI/ML',
      'ROI expectation: 3x within 5 years',
      'Implementation risk: 3 major turnaround projects failed in past decade',
      'Sustainability pressure: customers demanding carbon footprint data'
    ],
    frameworkHints: [
      'Technology architecture and standards development',
      'Factory prioritization and lighthouse approach',
      'Make vs buy vs partner for digital capabilities',
      'Change management and workforce upskilling',
      'Data strategy and governance'
    ],
    expectedCalculations: [
      'Factory-level digital maturity assessment',
      'Investment per factory and company-wide budget',
      'Expected benefits (OEE, energy, quality) quantification',
      'ROI analysis by factory and overall program',
      'Talent and resourcing requirements'
    ],
    successCriteria: [
      'Digital transformation roadmap with phased approach',
      'Technology architecture and platform recommendations',
      'Change management and workforce strategy',
      'Investment and resource plan with ROI analysis',
      'Governance and KPI framework for tracking'
    ]
  },
  {
    id: 'digital-4',
    title: 'University Digital Learning Transformation',
    category: 'Digital Transformation',
    industry: 'Education',
    difficulty: 'Medium',
    prompt: 'A traditional 200-year-old university with 30,000 students wants to transform its digital learning capabilities. They are losing market share to online universities and bootcamps. Design the digital transformation strategy.',
    context: 'The university has strong brand recognition, elite faculty, and beautiful campus. Only 15% of courses have any online component. Student satisfaction with digital tools is at 30%. IT infrastructure is outdated.',
    keyFacts: [
      'Students: 30,000 (25K undergrad, 5K grad)',
      'Annual revenue: $1.2B (tuition 60%, research 25%, endowment 15%)',
      'Online course penetration: 15% (peer avg 40%)',
      'Student digital satisfaction: 30% (target 80%)',
      'IT budget: $60M (5% of revenue, peer avg 8%)',
      'Core systems: 25-year-old ERP, no unified LMS, no analytics',
      'Faculty willingness: 30% interested in online teaching',
      'Competition: Southern New Hampshire (135K online), ASU (60K), Coursera/bootcamps',
      'Adult learner market: 40M Americans with some college, no degree',
      'Target: Launch 50 online programs, 10K additional students in 3 years',
      'Investment needed: $100M for technology, content, and faculty training',
      'Current online revenue: $30M (potential: $200M+)',
      'Faculty resistance: tenure system limits teaching format changes',
      'Accreditation: regional, allows up to 50% online for traditional programs'
    ],
    frameworkHints: [
      'Digital learning model selection (fully online vs hybrid)',
      'Technology platform strategy (build vs buy LMS, CRM, analytics)',
      'Program prioritization (which degrees to digitize first)',
      'Faculty engagement and IP rights',
      'Student experience design and support services'
    ],
    expectedCalculations: [
      'Investment by initiative and total program budget',
      'Revenue projections for online programs',
      'Cost savings from digital delivery',
      'Enrollment targets and breakeven analysis',
      'Technology platform cost comparison'
    ],
    successCriteria: [
      'Digital learning vision and target operating model',
      'Program launch roadmap with prioritization',
      'Technology platform recommendation',
      'Faculty engagement and capability building plan',
      'Student experience and support services design'
    ]
  }
];

export const categories = [
  'Market Entry', 'Profitability', 'Pricing Strategy', 'Growth Strategy',
  'Operations / Supply Chain', 'M&A / Corporate Strategy', 'Digital Transformation', 'Turnaround / Restructuring', 'New Business / Innovation'
];

export const categoryDescriptions: Record<string, string> = {
  'Market Entry': 'Evaluate new market opportunities and entry strategies',
  'Profitability': 'Diagnose profit issues and design turnaround plans',
  'Pricing Strategy': 'Set optimal prices and design pricing frameworks',
  'Growth Strategy': 'Identify and evaluate growth opportunities',
  'Operations / Supply Chain': 'Optimize operations and supply chain efficiency',
  'M&A / Corporate Strategy': 'Analyze M&A targets and corporate strategy',
  'Digital Transformation': 'Lead digital innovation and transformation',
  'Turnaround / Restructuring': 'Revive struggling businesses',
  'New Business / Innovation': 'Design new business models and ventures',
};

export const categoryIcons: Record<string, string> = {
  'Market Entry': '🌍', 'Profitability': '📈', 'Pricing Strategy': '💰',
  'Growth Strategy': '🚀', 'Operations / Supply Chain': '⚙️', 'M&A / Corporate Strategy': '🤝',
  'Digital Transformation': '💻', 'Turnaround / Restructuring': '🔄', 'New Business / Innovation': '💡',
};

const allCases: CaseData[] = [...baseCases, ...getAllExpandedCases()];

export function getCasesByCategory(category: string): CaseData[] {
  return allCases.filter(c => c.category === category);
}

export function getCaseById(id: string): CaseData | undefined {
  return allCases.find(c => c.id === id);
}

export function getCaseCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const cat of categories) {
    counts[cat] = allCases.filter(c => c.category === cat).length;
  }
  return counts;
}

export function getAllCategories(): string[] {
  return categories;
}

export default allCases;

