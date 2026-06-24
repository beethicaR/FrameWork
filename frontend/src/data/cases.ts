import type { CaseData } from '../types';

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

const allCases: CaseData[] = [
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
  // ============ OPERATIONS ============
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
  // ============ M&A ============
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
      'Premiums: $10B annually',
      'Policies in force: 5M',
      'IT spend: $300M (3% of premium vs 5% industry avg)',
      'Mainframe systems: 40+ years old, COBOL-based',
      'Number of applications: 500+ with significant redundancy',
      'IT debt: estimated $400M in deferred modernization',
      'Digital sales: 5% of new policies (insurtechs: 40%+)',
      'Policy issuance time: 2 weeks (insurtechs: 5 minutes)',
      'Customer satisfaction: 65/100 (industry avg: 72)',
      'Agency force: 10,000 independent agents',
      'Legacy vendor maintenance cost: $50M annually and rising'
    ],
    frameworkHints: [
      'Current state assessment and pain point identification',
      'Build vs buy vs partner for core systems',
      'Phased transformation roadmap',
      'Change management and agency adoption',
      'Business case and ROI modeling'
    ],
    expectedCalculations: [
      'Cost of doing nothing (lost revenue, increasing tech debt)',
      'Transformation investment and payback period',
      'Efficiency gains from automation',
      'Customer acquisition cost reduction',
      'Revenue uplift from digital channels'
    ],
    successCriteria: [
      'Current state assessment with key pain points',
      'Transformation vision and target architecture',
      'Phased implementation roadmap (3-5 year)',
      'Business case with clear ROI',
      'Change management and risk mitigation plan',
      'Key milestones and success metrics'
    ]
  },
  // ============ ADDITIONAL CASES ============
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
  // ============ TURNAROUND ============
  {
    id: 'turnaround-1',
    title: 'Retail Chain Store Closure Program',
    category: 'Turnaround / Restructuring',
    industry: 'Retail',
    difficulty: 'Medium',
    prompt: 'A national retail chain with 800 stores is burning cash and needs to restructure. 30% of stores are unprofitable. The CEO wants to close 200 stores but the CFO warns of lease termination costs. Design the turnaround plan.',
    context: 'Revenue has declined 15% for 3 consecutive years. The company has $2B in debt coming due in 18 months. E-commerce is 10% of sales but growing 25% annually.',
    keyFacts: [
      'Total stores: 800 across US',
      'Revenue: $4B (declining 15% annually)',
      'EBITDA: -$200M (negative)',
      'Unprofitable stores: 240 (30% of total)',
      'Lease termination cost: avg $2M per store',
      'Profitable stores: 560 (avg $6M revenue, 8% margin)',
      'E-commerce: $400M (10% of sales, growing 25%)',
      'Debt: $2B at 8% interest (due in 18 months)',
      'Cash: $100M (burning $50M per quarter)',
      'Employee count: 25,000',
      'Private equity ownership: majority stake',
      'Vendor payment terms: net 30 (currently paying at net 60)'
    ],
    frameworkHints: [
      'Financial emergency assessment (liquidity runway)',
      'Store portfolio optimization',
      'Vendor and debt restructuring',
      'E-commerce acceleration strategy',
      'Organizational restructuring'
    ],
    expectedCalculations: [
      'Cash flow forecast (13-week rolling)',
      'Store closure economics (cost vs benefit)',
      'Debt restructuring options analysis',
      'E-commerce investment ROI',
      'Recovery value under different scenarios'
    ],
    successCriteria: [
      'Cash conservation and liquidity plan',
      'Store closure recommendation with financials',
      'Debt restructuring strategy',
      'E-commerce growth acceleration plan',
      '5-year turnaround financial projections',
      'Key milestones and risk factors'
    ]
  },
  // ============ NEW BUSINESS ============
  {
    id: 'innovation-1',
    title: 'Neobank Launch for Gen Z',
    category: 'New Business / Innovation',
    industry: 'Banking / Fintech',
    difficulty: 'Hard',
    prompt: 'A major bank wants to launch a standalone neobank targeting Gen Z. They have $500M allocated. Should they build from scratch, acquire an existing neobank, or launch a sub-brand?',
    context: 'Gen Z (ages 18-26) represents 25% of the population but only 5% of the bank\'s customer base. 60% of Gen Z prefers neobanks for daily banking. The bank has 10M existing customers but only 200K Gen Z.',
    keyFacts: [
      'Gen Z population: 80M in US, 60% use neobanks',
      'Current Gen Z customers: 200K out of 10M total',
      'Allocated budget: $500M',
      'Build cost: estimated $200-300M over 3 years',
      'Acquisition targets: 3 neobanks valued at $200-800M',
      'Sub-brand costs: $50-100M (leverage existing tech)',
      'Gen Z banking preferences: mobile-first, financial wellness tools, social features',
      'Revenue model: interchange fees, subscription, lending, BNPL',
      'Target: 2M Gen Z customers in 3 years',
      'Key features expected: early paycheck, no-fee overdraft, budgeting tools',
      'Competition: existing neobanks, Apple Card, Venmo, Cash App'
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
  // ============ ADDITIONAL PROFITABILITY ============
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
      'Shareholder value impact',
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
  // Market Entry addition
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
  }
];

export default allCases;

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
  const cats = new Set(allCases.map(c => c.category));
  return Array.from(cats);
}