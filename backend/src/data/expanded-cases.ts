import type { CaseData } from './cases';

const expandedCases: CaseData[] = [
  // ============================================================
  // MARKET ENTRY — 20 original cases
  // ============================================================
  {
    id: 'me-exp-01', title: 'German Solar in Brazil',
    category: 'Market Entry', industry: 'Energy / Renewables', difficulty: 'Medium',
    prompt: 'A German solar panel manufacturer with €1B revenue wants to enter the Brazilian solar market. Brazil has massive solar potential but complex import tariffs and local content requirements. Design the entry strategy.',
    context: 'The company is a top-5 global panel maker. Brazil installed 8GW of solar in 2023 and is projected to reach 25GW by 2028. They have no presence in Latin America.',
    keyFacts: ['Company revenue: €1B (95% Europe)', 'Brazil solar market: 8GW in 2023, growing at 25% CAGR', 'Import tariff on solar panels: 12% (was 0% until 2024)', 'Local content requirement: 60% for tax incentives', 'Key competitors: Canadian Solar, JA Solar, LONGi (35% market share combined)', 'Brazilian development bank BNDES offers 6% financing for local manufacturing', 'Panel ASP in Brazil: $0.22/W (vs $0.12/W globally)', 'Installation cost: $0.50/W (higher due to labor/taxes)', 'Tax incentive (ICMS reduction): available for locally made panels', 'Entry options: wholly owned subsidiary, JV with local distributor, license technology'],
    frameworkHints: ['Evaluate market attractiveness and regulatory barriers', 'Compare entry modes: export vs JV vs local manufacturing', 'Analyze tariff impact on pricing competitiveness', 'Assess local partner options and capabilities', 'Build financial model under different scenarios'],
    expectedCalculations: ['Market sizing: TAM by segment (residential, commercial, utility)', 'Unit economics: manufacturing cost vs landed cost vs selling price', 'NPV analysis for local manufacturing vs importing', 'Break-even volume for assembly plant ($20M investment)'],
    successCriteria: ['Recommended entry mode with quantitative rationale', 'Market sizing with clear assumptions', 'Regulatory and tariff mitigation strategy', '5-year financial projections', 'Risk assessment with mitigation plan']
  },
  {
    id: 'me-exp-02', title: 'Korean Beauty in India',
    category: 'Market Entry', industry: 'Cosmetics / Consumer', difficulty: 'Easy',
    prompt: 'A top Korean skincare brand with $800M revenue wants to enter the Indian market. K-beauty has a strong trend among Indian millennials, but pricing and distribution are challenges. How should they enter?',
    context: 'India\'s skincare market is $8B growing at 12% annually. The brand is popular through social media but has no physical presence. They sell through cross-border e-commerce at 3x Korean prices.',
    keyFacts: ['India skincare market: $8B, growing 12% annually', 'Premium segment: 25% of market growing at 18%', 'Current India revenue: $5M (cross-border e-commerce only)', 'Target demographic: 25-35 urban women (40M potential)', 'Key competitors: Loreal, Garnier, Olay (65% organized market)', 'Distribution: 9M retail touchpoints, 60% unbranded', 'Import duty on cosmetics: 35% total', 'Local manufacturing: 30% cost savings vs importing', 'Brand awareness: 25% aided recall in top 10 cities', 'Entry options: Sephora partnership, exclusive stores, Nykaa launch, JV manufacturing'],
    frameworkHints: ['Assess market segments and channel dynamics', 'Compare brand control vs speed via different routes', 'Pricing strategy considering import duties', 'Distribution partner evaluation', 'Regulatory compliance (FDA India, BIS standards)'],
    expectedCalculations: ['Market sizing by price tier and channel', 'Unit economics: import vs local manufacturing', 'Marketing spend needed for brand building', '3-year revenue build-up forecast'],
    successCriteria: ['Recommended entry route with rationale', 'Pricing architecture vs competitors', 'Distribution and channel strategy', 'Regulatory and compliance plan', '3-year P&L projection']
  },
  {
    id: 'me-exp-03', title: 'Fintech Super App in Indonesia',
    category: 'Market Entry', industry: 'Financial Services / Fintech', difficulty: 'Hard',
    prompt: 'A Southeast Asian fintech unicorn with 30M users in Thailand/Vietnam wants to enter Indonesia — the region\'s largest economy. They offer payments, lending, and insurance. Design the market entry strategy.',
    context: 'Indonesia has 270M people, 65% unbanked, and digital payments growing at 30% annually. The market is dominated by Gojek, OVO, and Sea Group. Regulatory licensing is complex.',
    keyFacts: ['Indonesia population: 270M, 65% unbanked', 'Digital payments transaction value: $50B, growing 30% YoY', 'Smartphone penetration: 70%, growing', 'Key competitors: GoPay (50M users), OVO (30M), DANA (20M)', 'E-commerce GMV: $60B (Shopee, Tokopedia)', 'Regulatory: need e-money license ($15M minimum capital), lending license (separate)', 'Their platform: payments (30M users), lending ($500M portfolio), insurance (2M policies)', 'Tech integration: need to connect with Indonesia\'s 100+ payment gateways', 'Local partner required: foreign ownership caps at 85% for fintech', 'Customer acquisition cost in Indonesia: $3-5 per user', 'Projected 3-year investment: $100M for break-even'],
    frameworkHints: ['Regulatory pathway and licensing strategy', 'Local partnership and ownership structure', 'Product prioritization (which service to launch first)', 'Distribution strategy (digital + offline agents)', 'Competitive differentiation vs entrenched players'],
    expectedCalculations: ['Indonesia TAM by product line', 'Market share targets and user acquisition model', 'Investment requirement and break-even timeline', 'Unit economics: revenue per user, cost to serve'],
    successCriteria: ['Market entry roadmap with regulatory timeline', 'Partner strategy and ownership structure', 'Product launch sequence with rationale', '5-year financial projections with funding plan', 'Competitive positioning and differentiation strategy']
  },
  {
    id: 'me-exp-04', title: 'Swiss Watchmaker in China Tier-2 Cities',
    category: 'Market Entry', industry: 'Luxury / Watches', difficulty: 'Medium',
    prompt: 'A 130-year-old Swiss watchmaker ($500M revenue) is heavily concentrated in Beijing/Shanghai. They want to expand into China\'s Tier-2 cities (Chengdu, Hangzhou, Wuhan, Nanjing) where luxury spending is growing rapidly. Design the expansion strategy.',
    context: 'China accounts for 35% of their global revenue ($175M). Tier-1 cities are saturated. Tier-2 cities have seen 25% luxury growth annually. They have 15 boutiques in Tier-1, zero in Tier-2.',
    keyFacts: ['China luxury watch market: $15B, growing 10% annually', 'Tier-2 luxury growth: 25% YoY (vs 5% Tier-1)', 'Their China revenue: $175M (35% of global)', 'Current stores: 15 in Tier-1 cities, 0 in Tier-2', 'Target cities: Chengdu (20M pop), Hangzhou (12M), Wuhan (11M), Nanjing (10M)', 'Boutique setup cost: $800K-1.2M (fit-out, inventory, staffing)', 'Boutique break-even: $3M annual revenue', 'Department store concessions: lower cost, 30% revenue share', 'E-commerce: 5% of China sales (Tmall), growing 40%', 'Chinese luxury consumer: 60% under 35, 45% buy for investment', 'Tariff and taxes: 30% import duty + 13% VAT + 5% consumption tax'],
    frameworkHints: ['Evaluate city prioritization based on wealth metrics', 'Compare boutique vs concession vs e-commerce channels', 'Marketing strategy for brand awareness in new cities', 'After-sales service network requirements', 'Talent acquisition for store management'],
    expectedCalculations: ['Market sizing by city (HNWI population, luxury spend)', 'Store-level P&L for each city', 'Capital allocation and ROI by city', 'Channel mix optimization'],
    successCriteria: ['City prioritization framework with scoring', 'Channel strategy (boutique vs concession) by city', 'Store rollout timeline and investment plan', 'Marketing and brand building strategy', 'Talent and service infrastructure plan']
  },
  {
    id: 'me-exp-05', title: 'Israeli Agritech in Sub-Saharan Africa',
    category: 'Market Entry', industry: 'Agriculture / Technology', difficulty: 'Expert',
    prompt: 'An Israeli agritech company with breakthrough drip-irrigation + AI crop monitoring technology wants to enter Sub-Saharan Africa. 60% of the world\'s uncultivated arable land is there, but infrastructure is minimal. Design a market entry strategy.',
    context: 'The company has $200M revenue, installed in 30 countries. Their system increases yields by 40-60% while reducing water usage by 50%. SSA has 600M smallholder farmers with <$2/day income.',
    keyFacts: ['Company revenue: $200M (Middle East 40%, Europe 30%, Americas 30%)', 'SSA arable land: 600M hectares (60% of global unused)', 'Smallholder farmers: 600M, average income <$2/day', 'Yield gap: current 1.5 tons/hectare vs potential 6 tons', 'Water scarcity: 40% of SSA faces water stress', 'Government agricultural budgets: 5-10% of national budgets', 'Mobile penetration in SSA: 50% (mostly feature phones)', 'Their system cost: $1,500/hectare (too expensive for smallholders)', 'NGO/development bank funding: $2B annually for agri-tech in SSA', 'Pay-per-harvest model: $50/hectare/season with 30% yield uplift', 'Key partners needed: microfinance institutions, cooperatives, NGOs'],
    frameworkHints: ['Evaluate business model adaptation for ultra-low-income farmers', 'Design partnership ecosystem (govt, NGOs, banks, cooperatives)', 'Pricing innovation: pay-per-harvest vs upfront sale', 'Country prioritization based on water stress, govt support, infrastructure', 'Last-mile distribution and training model'],
    expectedCalculations: ['TAM by country (arable land, water stress, government support)', 'Unit economics: per-hectare cost vs farmer income uplift', 'Capital requirement for equipment financing', '3-year adoption and revenue forecast', 'Social impact metrics (farmers reached, yield increase, water saved)'],
    successCriteria: ['Country prioritization with rationale', 'Business model innovation for affordability', 'Partnership and distribution ecosystem design', 'Financial projections with funding requirements', 'Risk mitigation for infrastructure and political challenges']
  },
  {
    id: 'me-exp-06', title: 'Australian Wine in Mainland China',
    category: 'Market Entry', industry: 'F&B / Wine', difficulty: 'Medium',
    prompt: 'A premium Australian winery ($300M revenue) saw exports to China collapse after tariffs were imposed in 2020. Tariffs have now been removed. How should they re-enter and rebuild their China business?',
    context: 'Pre-tariff, China was their #1 market ($120M). Tariffs of 200% killed the business. Now tariffs are gone, but French and Chilean wines have gained share. Consumer preferences have shifted.',
    keyFacts: ['Pre-tariff China revenue: $120M (40% of total)', 'Tariff 2020-2024: 200% (effectively blocked imports)', 'Current China revenue: $15M (via gray channels)', 'Market recovery: Chinese wine market $20B, declining 5% annually', 'French wine share: grew from 40% to 55% during tariff period', 'Chilean wine: grew from 10% to 18% (duty-free since 2015)', 'Australian wine reputation still strong (80% brand recall)', 'Distribution: need to rebuild relationships with 50+ importers', 'Marketing budget available: $10M for Year 1 re-entry', 'E-commerce wine sales: 25% of market, growing 15% annually', 'New challenge: Chinese consumers trading down to cheaper wines'],
    frameworkHints: ['Re-entry strategy: speed vs selectivity', 'Distribution partner identification and onboarding', 'Pricing strategy post-tariff (premium or volume?)', 'Brand marketing to rebuild momentum', 'E-commerce vs traditional trade channel strategy'],
    expectedCalculations: ['Market recovery TAM by price tier', 'Revenue build-up forecast for Year 1-3', 'Marketing spend and ROI by channel', 'Distribution partner economics (margins, volume commitments)'],
    successCriteria: ['Re-entry timeline and channel strategy', 'Pricing architecture vs French/Chilean competitors', 'Partner acquisition plan', 'Year 1-3 revenue and investment forecast', 'Brand marketing and consumer engagement strategy']
  },
  {
    id: 'me-exp-07', title: 'Japanese Robotics in US Manufacturing',
    category: 'Market Entry', industry: 'Robotics / Manufacturing', difficulty: 'Expert',
    prompt: 'A Japanese industrial robotics company ($2B revenue, #3 globally) wants to significantly expand in the US market. US manufacturing is reshoring and automating rapidly. They currently have 5% US market share vs 20% at home. Develop a market expansion strategy.',
    context: 'The US robotics market is $8B and growing at 15% annually due to reshoring and labor shortages. Japanese company has superior quality but limited US sales/service presence. German and US competitors dominate.',
    keyFacts: ['Global robotics market: $20B, US $8B growing 15%', 'Company global revenue: $2B (Japan 60%, Asia 25%, US 10%, Europe 5%)', 'US market share: 5% (#5 player)', 'Market leader: Fanuc (25%), ABB (20%), Kuka (15%)', 'Their robots: $50-80K average selling price', 'Service margin: 15% of robot revenue (installation, maintenance)', 'US installed base: 3,000 units (vs Fanuc 30,000)', 'Sales team: 20 people in US (vs 200 in Japan)', 'Service network: 5 hubs (US), need 25 for national coverage', 'Service hub setup: $2M each (parts inventory, engineers)', 'Customer concentration: automotive 60%, general industry 40%', 'US manufacturing investment: $200B in new factories announced 2022-2027'],
    frameworkHints: ['Service network expansion strategy and investment', 'Segment prioritization (auto, logistics, food, pharma)', 'Sales team build-out and channel partner strategy', 'Competitive differentiation vs Fanuc/ABB', 'Marketing and brand building approach'],
    expectedCalculations: ['Service network investment and coverage plan', 'Market share target and revenue build-up', 'Sales force sizing and territory plan', 'Channel partner economics and margins', '5-year P&L and ROI for US expansion'],
    successCriteria: ['US market entry expansion plan with investment requirements', 'Service network rollout timeline', 'Segment prioritization with rationale', 'Revenue targets and market share goals (5-year)', 'Competitive positioning strategy']
  },
  {
    id: 'me-exp-08', title: 'Danish Wind in US Offshore',
    category: 'Market Entry', industry: 'Energy / Wind Power', difficulty: 'Hard',
    prompt: 'A Danish offshore wind turbine manufacturer wants to establish a major presence in the US offshore wind market. The US has 30GW of offshore wind targets by 2030 but no domestic turbine manufacturing. Should they build a US factory?',
    context: 'The company is #2 globally in offshore wind with €5B revenue. Biden\'s IRA offers significant subsidies for domestic manufacturing. The US currently has only 42MW of offshore wind installed vs 30GW target.',
    keyFacts: ['Company revenue: €5B (Europe 80%, Asia 15%, US 5%)', 'US offshore wind target: 30GW by 2030 (currently 42MW)', 'IRA domestic manufacturing credit: $3-6/MWh bonus for US-made turbines', 'Offshore turbine: $12-15M each (12-15MW capacity)', 'Factory investment: $500M for US manufacturing facility', 'Factory jobs: 1,500 direct, 4,000 indirect', 'US content requirement for IRA full benefits: 55%+ domestic content', 'Current US orders: 2GW backlog (all imported from Europe)', 'Transportation cost from Europe: $2M/turbine (specialized vessels)', 'Supply chain challenge: no US-based blade manufacturing, gearbox supply', 'Competition: Vestas (already building in CO), Siemens Gamesa (exploring)'],
    frameworkHints: ['Build vs import analysis given IRA incentives', 'Location selection for factory (port access, labor, logistics)', 'Supply chain development and vertical integration', 'Customer contracting strategy (order book before factory)', 'Risk assessment: policy, execution, competition'],
    expectedCalculations: ['Factory investment and operating costs', 'IRA benefit quantification vs import scenario', 'Unit cost comparison: US-made vs imported', 'Market share capture based on capacity commitment', 'NPV/IRR for factory investment under different scenarios'],
    successCriteria: ['Recommendation: Build US factory vs continue importing', 'Location analysis with rationale', 'Supply chain development plan', 'Customer offtake strategy', 'Financial projections and ROI analysis']
  },
  {
    id: 'me-exp-09', title: 'Spanish Fashion in Latin America',
    category: 'Market Entry', industry: 'Fashion / Retail', difficulty: 'Easy',
    prompt: 'A mid-market Spanish fashion retailer ($1.5B revenue, 800 stores in Europe) wants to enter Latin America starting with Mexico and Colombia. They offer affordable chic styles for women 25-45. Design the entry strategy.',
    context: 'Zara and H&M are already strong in LatAm. The company has strong brand awareness among Latin American tourists visiting Spain. Market research shows 60% of target consumers recognize the brand.',
    keyFacts: ['Company revenue: $1.5B, 800 stores (Spain 500, rest of Europe 300)', 'LatAm fashion market: $60B, growing 8% annually', 'Mexico fashion market: $20B, growing 10%', 'Colombia fashion market: $8B, growing 9%', 'Target customer: women 25-45, middle income, fashion-forward', 'Competition: Zara (200 stores in Mexico), H&M (150), local players', 'Store setup cost Mexico: $500K per location (fit-out, inventory)', 'Store setup cost Colombia: $350K', 'Average revenue per store (EU): $1.8M, target LatAm $1.2M (lower AOV)', 'E-commerce: 10% of EU sales, logistics setup in LatAm: $5M', 'Brand awareness in Mexico: 60% aided recall in target demo', 'Import duties on apparel: Mexico 25%, Colombia 35%', 'Local sourcing option: 20% cost advantage on COGS'],
    frameworkHints: ['Country prioritization (Mexico vs Colombia vs others)', 'Brick-and-mortar vs e-commerce first strategy', 'Pricing strategy considering import duties and local income', 'Supply chain and sourcing optimization', 'Real estate and store format strategy'],
    expectedCalculations: ['Market sizing by country and segment', 'Per-store P&L and break-even analysis', 'Investment requirement for multi-year rollout', 'Sourcing cost comparison: import vs local production'],
    successCriteria: ['Country entry sequence with rationale', 'Channel strategy (stores, e-commerce, or both)', 'Pricing architecture and margin analysis', 'Store rollout plan and investment schedule', 'Supply chain and sourcing strategy']
  },
  {
    id: 'me-exp-10', title: 'Canadian Cannabis in Germany',
    category: 'Market Entry', industry: 'Cannabis / Pharmaceuticals', difficulty: 'Hard',
    prompt: 'A Canadian licensed cannabis producer ($400M revenue) wants to enter the German medical cannabis market. Germany legalized medical cannabis in 2017 and is considering adult-use legalization. The German market is the largest in Europe. Develop the entry strategy.',
    context: 'Germany imported 15 tons of medical cannabis in 2023, projected 50 tons by 2027. The company grows high-quality indoor cannabis in Canada. EU-GMP certification is mandatory. German pharmacies dispense to patients.',
    keyFacts: ['German medical cannabis market: €500M in 2023, projected €1.5B by 2027', 'Import volume: 15 tons (2023), 30 tons (2024), 50 tons (2027E)', 'Their Canadian production capacity: 50 tons annually', 'EU-GMP certification cost: $10M per facility, 12-18 months timeline', 'Their current exports: UK, Australia, Israel (no Europe yet)', 'Key competitors in Germany: Tilray, Aurora, Demecan, Pedanios', 'German tender system: health insurance tenders for supply contracts (70% of market)', 'Pharmacy channel: 1,900 pharmacies dispensing medical cannabis', 'Recreational legalization: expected 2025 (German coalition agreement)', 'German production: Canopy Growth building in Germany, Tilray acquired German distributor', 'Import price: €4-8/gram, pharmacy retail: €12-20/gram', 'Logistics: import via Amsterdam or Frankfurt, distribution partner needed'],
    frameworkHints: ['EU-GMP certification pathway and timeline', 'Market access strategy (tender vs pharmacy-direct vs partnership)', 'Build vs acquire analysis for German presence', 'Product portfolio strategy (flower vs extracts vs finished meds)', 'Preparation for adult-use legalization scenario'],
    expectedCalculations: ['German revenue build-up forecast (medical + potential recreational)', 'Certification and market entry investment', 'Per-gram margin analysis (import vs local)', 'Tender economics and volume commitments', 'Valuation of potential German M&A targets'],
    successCriteria: ['Entry strategy with timeline and milestones', 'EU-GMP certification plan', 'German distribution and partnership strategy', 'Financial projections for Year 1-5', 'Scenario planning for adult-use legalization']
  },
  {
    id: 'me-exp-11', title: 'Brazilian Meat Packer in China',
    category: 'Market Entry', industry: 'Food / Protein', difficulty: 'Medium',
    prompt: 'A Brazilian beef packer ($10B revenue) wants to increase its share of the Chinese beef import market. China is the world\'s largest beef importer and Brazil is the largest supplier, but market share has been volatile due to regulatory issues. How should they grow?',
    context: 'Brazil currently supplies 40% of China\'s beef imports. The company is #2 in Brazil with 20% market share. China imported 3M tons of beef in 2023. African swine fever created permanent protein demand shift to beef.',
    keyFacts: ['China beef imports: 3M tons, $15B, growing 10% annually', 'Brazil share: 40% of imports (Argentina 20%, Australia 10%, US 10%)', 'Company share of Brazil beef exports: 20% (#2 player)', 'Company revenue: $10B (Brazil 50%, export 50%)', 'Regulatory risk: China periodically bans Brazilian beef (foot-and-mouth, atypical BSE)', 'Last ban: 2023 (lasted 3 months, cost $2B in lost exports)', 'Chinese consumer preference: grain-fed vs grass-fed, specific cuts (flank, tendon)', 'Cold chain logistics from Brazil: 45 days shipping, specialized containers', 'Competition: JBS (#1, 30% share), Minerva (#3, 15%), Marfrig', 'China beef demand driver: protein gap from ASF, 40M ton protein deficit', 'Premiumization trend: Chinese consumers trading up to imported beef'],
    frameworkHints: ['Regulatory risk mitigation and compliance strategy', 'Product mix optimization for Chinese market', 'Cold chain and logistics improvement', 'Brand building vs commodity strategy', 'Channel strategy (wholesale, retail, e-commerce, food service)'],
    expectedCalculations: ['China beef import market forecast by cut and grade', 'Company revenue opportunity and market share targets', 'Logistics cost optimization per ton', 'Investment in Chinese processing/distribution', 'Regulatory risk cost-benefit of mitigation investments'],
    successCriteria: ['Market share growth strategy with 5-year targets', 'Product portfolio optimization for Chinese demand', 'Supply chain and cold chain investment plan', 'Brand and channel strategy', 'Regulatory risk management framework']
  },
  {
    id: 'me-exp-12', title: 'US Streaming Service in India',
    category: 'Market Entry', industry: 'Media / Streaming', difficulty: 'Hard',
    prompt: 'A US-based streaming service ($10B revenue, 80M subscribers globally) wants to enter the Indian market. India has 500M smartphone users but intense competition from Disney+ Hotstar, Netflix, and local players. Design the entry strategy.',
    context: 'India is the most price-sensitive streaming market globally. Average revenue per user (ARPU) is $1.50/month vs $15 in the US. Mobile-first consumption dominates. The market is crowded but growing.',
    keyFacts: ['India OTT market: $2B, growing 25% annually', 'Competitors: Disney+ Hotstar (50M subs), Netflix (10M), Amazon Prime (25M), JioCinema (100M MAU)', 'Current India revenue: $100M (via content licensing to local platforms)', 'Global content library: 5,000 movies, 2,000 TV shows', 'Local content requirement: Indian originals needed (30% of viewing)', 'Mobile data cost: $0.17/GB (cheapest globally)', 'ARPU: Hotstar $1.50, Netflix $4.00 (US ARPU $15.50)', 'AVOD (ad-supported) ARPU: $0.50-1.00/month', 'Content cost: Indian original series $500K-1M/episode (vs $10M in US)', 'Marketing CAC: $2-5 per subscriber', 'Payment challenge: 85% of phones have no international credit card, need carrier billing', 'Annual content investment needed: $200M to be competitive'],
    frameworkHints: ['Pricing strategy (SVOD vs AVOD vs hybrid) for Indian market', 'Content strategy (local originals + global library)', 'Distribution and payment partnerships', 'Go-to-market and marketing approach', 'Financial model and break-even timeline'],
    expectedCalculations: ['Market sizing by segment (SVOD, AVOD, mobile-only)', 'Subscriber acquisition forecast and CAC', 'Content investment requirement and ROI', 'Break-even subscriber count and timeline', 'Competitive positioning analysis'],
    successCriteria: ['Market entry strategy with go-to-market timeline', 'Pricing and product strategy for India', 'Content investment plan (local + global)', 'Distribution and payment partnerships', 'Financial projections and funding plan']
  },
  {
    id: 'me-exp-13', title: 'Finnish Education in UAE',
    category: 'Market Entry', industry: 'Education', difficulty: 'Easy',
    prompt: 'A Finnish education company offering the "Finland School" curriculum wants to license its model to private schools in the UAE. Finnish education is globally renowned. The UAE is investing heavily in education. Design the market entry.',
    context: 'Finland\'s PISA rankings attract global interest. The company has licensed its curriculum to 50 schools in 12 countries. UAE has 200+ private schools serving 90% of students, with average fees of $10-20K/year.',
    keyFacts: ['UAE private education market: $5B, growing 8% annually', 'Private school students: 1.1M (90% of all students)', 'Average annual fees: $10K-20K (varies by curriculum and rating)', 'Existing curricula: British (40%), American (30%), IB (15%), Indian (10%)', 'UAE education strategy 2030: focus on innovation, STEM, 21st century skills', 'School licensing cost: $200-500K upfront fee + 8-12% royalty of tuition revenue', 'Their model: curriculum + teacher training + technology platform', 'Pilot required: ADEK (Abu Dhabi) or KHDA (Dubai) approval for new curriculum', 'Teacher recruitment: Finnish teachers in UAE cost $50-70K/year + housing', 'Competition: IB curriculum (growing rapidly), Singapore Math, UK National Curriculum', 'Target schools: premium segment (fees >$15K/year) seeking differentiation'],
    frameworkHints: ['Accreditation and regulatory pathway', 'School partner acquisition strategy', 'Pricing model (licensing fee structure)', 'Teacher recruitment and training model', 'Marketing to UAE parents and schools'],
    expectedCalculations: ['Market sizing by emirate and school segment', 'Licensing revenue model per school', 'Investment required for UAE setup and accreditation', '5-year school partner acquisition and revenue forecast'],
    successCriteria: ['Market entry strategy with regulatory pathway', 'Partner school acquisition plan', 'Pricing and licensing model', 'Teacher training and curriculum localization plan', 'Financial projections']
  },
  {
    id: 'me-exp-14', title: 'Swedish Meatballs in US Grocery',
    category: 'Market Entry', industry: 'Food / CPG', difficulty: 'Easy',
    prompt: 'A Swedish food company ($500M revenue, 80 years old) famous for its meatballs and lingonberry jam wants to enter the US retail market. Their products are sold at IKEA restaurants but not in grocery stores. How should they launch?',
    context: 'The brand has 80% awareness in Europe but only 30% in the US (driven by IKEA). US consumers love the IKEA meatballs. The frozen food aisle is competitive but Swedish cuisine is trending.',
    keyFacts: ['US frozen food market: $60B, growing 4% annually', 'Frozen meat alternative/appetizer segment: $4B, growing 8%', 'Company revenue: $500M (Scandinavia 70%, Europe 25%, other 5%)', 'US brand awareness: 30% (mostly via IKEA restaurant experience)', 'Product line: frozen meatballs, frozen salmon dishes, lingonberry jam, crispbread', 'IKEA serves 200M meatball portions annually in US stores', 'Grocery retail: 40K stores in US, 4 major wholesalers (Kroger, Walmart, Ahold, Albertsons)', 'Slotting fee: $50-100K per SKU per retailer (major barrier)', 'Frozen logistics: need frozen distribution partner, setup cost $5M', 'Premium pricing: 25% above US frozen meatball competitors', 'Key competitor: Aidells (owned by Kraft Heinz), $300M in frozen meat snacks', 'Marketing budget available: $15M for Year 1 launch'],
    frameworkHints: ['Retail channel strategy (which retailers to target first)', 'Pricing vs premium competitors', 'Supply chain and frozen logistics setup', 'Marketing and sampling strategy (leveraging IKEA partnership)', 'Product portfolio and SKU rationalization'],
    expectedCalculations: ['TAM by retail channel and region', 'Per-SKU profitability after slotting and trade spend', 'Distribution build-up timeline', 'Marketing spend and ROI forecast', '3-year revenue and P&L projection'],
    successCriteria: ['Retail launch strategy with channel prioritization', 'Pricing architecture and trade spend plan', 'Supply chain and logistics setup plan', 'Marketing strategy (IKEA partnership, sampling, digital)', '3-year financial projections']
  },

  // ============================================================
  // MARKET ENTRY additional 6 cases
  // ============================================================
  {
    id: 'me-exp-15', title: 'Dutch Greenhouse in Saudi Arabia',
    category: 'Market Entry', industry: 'Agriculture / Technology', difficulty: 'Expert',
    prompt: 'A Dutch company specializing in high-tech greenhouses ($1B revenue) wants to enter Saudi Arabia. Saudi Arabia imports 80% of its food but wants to achieve food security. The desert climate makes traditional farming impossible. Design a market entry strategy.',
    context: 'The company builds climate-controlled greenhouses for year-round crop production. Saudi Vision 2030 allocates $15B for agricultural self-sufficiency. The company has installed projects in 20 countries but none in the Gulf.',
    keyFacts: ['Company revenue: $1B (Europe 70%, Middle East 5%, Asia 15%, Americas 10%)', 'Saudi food import: 80% of consumption ($20B annually)', 'Saudi greenhouse potential: 50,000 hectares by 2030 (currently 500 hectares)', 'Project cost: $200K-500K per hectare (high-tech greenhouse)', 'Government subsidy: 50% of capital cost for agricultural projects', 'Water constraint: Saudi uses 80% of water for agriculture, mostly fossil aquifers', 'Competition: local Saudi agri-companies, Israeli Netafim, Chinese greenhouses', 'Their differentiator: 90% less water, 40% higher yields, solar-powered cooling', 'Labor requirement: 5 workers per hectare (vs 20 for open field)', 'Saudi labor law: 30% Saudi nationals requirement in workforce', 'Financing: Saudi Agricultural Development Fund offers 0% loans for farming', 'Land: government leasing at nominal rates for agricultural use'],
    frameworkHints: ['Market sizing and government priority alignment', 'Business model: project sales vs build-operate-transfer vs JV', 'Local partner strategy (Saudi requirement)', 'Financing and subsidy optimization', 'Water and energy solution integration'],
    expectedCalculations: ['Saudi addressable market for greenhouses by crop type', 'Unit economics per hectare', 'Investment and revenue projections for 5-year plan', 'Subsidy and financing impact on returns'],
    successCriteria: ['Market entry recommendations with business model', 'Saudi partner strategy and localization plan', 'Financing plan leveraging government programs', 'Implementation timeline and milestones', 'Risk assessment for climatic and regulatory factors']
  },
  {
    id: 'me-exp-16', title: 'Turkish Home Goods in Germany',
    category: 'Market Entry', industry: 'Consumer / Home Goods', difficulty: 'Easy',
    prompt: 'A Turkish home textile company ($300M revenue, 60 years in business) wants to enter the German market. Germany has 3M Turkish-origin residents who recognize the brand. They sell high-quality towels, linens, and bathrobes. How should they enter?',
    context: 'The company exports to 30 countries but only 2% of revenue comes from Germany. German home textile market is $8B. Turkish products are perceived as good value. The company has a factory in Denizli, Turkey with 40% overcapacity.',
    keyFacts: ['Germany home textile market: $8B, growing 2% annually', 'Their current Germany revenue: $6M (2% of total)', 'Export markets: 30 countries ($150M in exports)', 'Factory utilization: 60% (40% overcapacity available)', '#3 German residents of Turkish origin: 3M', 'Brand awareness among Turkish-Germans: 70%', 'German wholesale channels: department stores (Karstadt, Galeria), specialty retailers, Amazon', 'Hotel/restaurant contract channel: $2B segment, 10% margin vs 30% retail', 'Online home textile sales: 25% of market, growing 15%', 'Import duty on textiles from Turkey: 0% (EU customs union)', 'Logistics: 2-day truck from factory to Munich via Balkan route', 'Key German competitor: Irisette ($500M revenue, 40% market share in premium)'],
    frameworkHints: ['Channel strategy: wholesale vs retail vs e-commerce vs hospitality', 'Brand positioning: Turkish-German heritage vs generic premium', 'Pricing vs German competitors (value position)', 'B2B hospitality channel as entry wedge', 'Digital marketing to Turkish-German community'],
    expectedCalculations: ['Market sizing by channel and segment', 'Channel economics (margin stack, trade spend)', 'Marketing budget and customer acquisition cost', '3-year revenue forecast by channel'],
    successCriteria: ['Channel strategy with entry sequence', 'Brand positioning and pricing architecture', 'Sales team and distribution partner plan', 'Marketing strategy (targeting Turkish-German + mainstream)', '3-year revenue and investment forecast']
  },
  {
    id: 'me-exp-17', title: 'Singaporean Port Operator in Africa',
    category: 'Market Entry', industry: 'Logistics / Ports', difficulty: 'Hard',
    prompt: 'A Singapore-based port operator ($4B revenue, operates 20 ports globally) wants to enter the African port market. Africa has 7% of global trade but ports are inefficient. They have $1B to invest. Which African ports should they target and under what model?',
    context: 'Global port operators (DP World, PSA, Hutchison) are expanding in Africa. The company operates some of the world\'s most efficient ports. African ports have average dwell times of 20 days vs 3 days in Singapore. Container traffic growing at 8% annually.',
    keyFacts: ['Company revenue: $4B, 20 ports in 12 countries', 'Investment budget: $1B', 'Africa container traffic: 30M TEUs, growing 8% annually', 'Port efficiency: Singapore 3 days dwell, Africa average 20 days', 'Key African ports: Mombasa (Kenya), Dar es Salaam (Tanzania), Lagos (Nigeria), Tema (Ghana), Djibouti, Durban (SA)', 'Concession model: 25-30 year lease, revenue share with government', 'Concession investment: $200-500M per port (equipment, IT, dredging)', 'Political risk: contract renegotiation common, sovereign guarantee needed', 'Competition: DP World (20% African market), China Merchants Port (15%)', 'Trade growth: African Continental Free Trade Area (AfCFTA) expected to boost intra-African trade 50%', 'Financing: DFIs (IFC, AfDB) offer political risk insurance, lower cost capital'],
    frameworkHints: ['Port prioritization based on trade volume, growth, political stability', 'Concession vs management contract vs greenfield models', 'Political risk assessment and mitigation', 'Financing structure with DFI partners', 'Value creation plan (efficiency improvement, trade volume growth)'],
    expectedCalculations: ['Port traffic forecast by target country (base + AfCFTA uplift)', 'Concession investment and revenue model per port', 'Efficiency improvement impact on throughput and revenue', 'Portfolio risk-return analysis', '5-year investment deployment and return forecast'],
    successCriteria: ['Port prioritization with rationale and scoring', 'Entry model recommendation per port', 'Political risk mitigation strategy', 'Capital deployment plan and timeline', 'Projected portfolio returns and value creation plan']
  },
  {
    id: 'me-exp-18', title: 'British Insurance in Vietnam',
    category: 'Market Entry', industry: 'Insurance / Financial Services', difficulty: 'Medium',
    prompt: 'A UK-based insurance company ($15B premiums written) wants to enter Vietnam\'s fast-growing insurance market. Vietnam has 100M people with rising incomes but insurance penetration is only 3% of GDP vs 8% in Thailand. Design the market entry strategy.',
    context: 'Vietnam\'s insurance market is $8B and growing 20% annually. Life insurance is 60% of premiums. The UK company specializes in health and travel insurance. Vietnam has a young population (median age 31) and rapid digital adoption.',
    keyFacts: ['Vietnam insurance market: $8B (life 60%, non-life 40%), growing 20% annually', 'Insurance penetration: 3% of GDP (Thailand 8%, Malaysia 5%)', 'Market structure: 19 life insurers, 31 non-life insurers', 'Key players: Prudential UK (15% market share), Bao Viet (12%), AIA (10%)', 'Foreign ownership limit: 100% allowed for insurance (liberalized)', 'Capital requirement: $50M for life license, $20M for non-life', 'Distribution: agents 70%, bancassurance 20%, digital 10%', 'Their product specialty: health insurance (30% of global premium)', 'Health insurance in Vietnam: $1.2B, growing 25% (low base, rapidly formalizing) ', 'Tourism: 18M international visitors annually (pre-COVID), travel insurance low penetration', 'Digital readiness: 70% smartphone penetration, willing to buy insurance online', 'Local partner needed: bancassurance partnership with major bank for distribution'],
    frameworkHints: ['Market segment prioritization (health, travel, life)', 'Distribution strategy: digital-first vs agent network vs bancassurance', 'Product adaptation for Vietnamese market', 'Regulatory approval pathway', 'Competitive positioning vs established players'],
    expectedCalculations: ['TAM by insurance line and customer segment', 'Customer acquisition cost by channel', 'Investment requirement for license, tech, distribution', 'Break-even timeline and premium growth forecast', 'Capital allocation by product line'],
    successCriteria: ['Market entry strategy with segment focus', 'Distribution channel strategy and partnerships', 'Product adaptation and pricing strategy', 'Regulatory and capital plan', '5-year premium and profitability forecast']
  },
  {
    id: 'me-exp-19', title: 'Russian Software in Middle East',
    category: 'Market Entry', industry: 'Software / Cybersecurity', difficulty: 'Expert',
    prompt: 'A Russian cybersecurity software company ($500M revenue) faces Western sanctions limiting its access to European/US markets. They want to pivot to the Middle East, where cybersecurity spending is growing 15% annually due to digital transformation. Design the expansion strategy.',
    context: 'The company is a top-5 global cybersecurity firm. Sanctions have cut 40% of their revenue. Middle East cybersecurity market is $5B and growing. UAE and Saudi Arabia are investing heavily. Russian tech faces reputational concerns in some segments.',
    keyFacts: ['Company revenue: $500M (pre-sanctions), $300M current (Europe 50%, Russia 30%, other 20%)', 'Middle East cybersecurity market: $5B, growing 15% annually', 'Key segments: UAE ($2B), Saudi ($1.8B), Qatar ($500M)', 'Saudi cybersecurity spending: $2B by 2030 from current $1B (NEOM, Vision 2030)', 'Their products: endpoint protection, network security, threat intelligence, SOC platform', 'Competitors: Palo Alto Networks (35% market share in ME), CrowdStrike (20%), Fortinet (15%)', 'Their differentiator: AI-powered threat detection, superior in advanced persistent threat (APT) defense', 'Russian tech concern: some governments hesitant to buy Russian cybersecurity given geopolitical tensions', 'Localization required: Arabic language support, local data hosting, local certifications', 'Partner model: Middle East sales through distributors and system integrators (90% of market)', 'UAE cybersecurity regulation: NESA (National Electronic Security Authority) standards must be met', 'Pricing: 20% below Palo Alto Networks, 10% below CrowdStrike for comparable products'],
    frameworkHints: ['Market prioritization (UAE vs Saudi vs other GCC)', 'Channel partner strategy (distributors, resellers, system integrators)', 'Brand and trust building to overcome Russian tech concerns', 'Localization (Arabic, data residency, certifications)', 'Pricing and competitive positioning'],
    expectedCalculations: ['TAM/SAM by GCC country and segment', 'Channel partner economics (margin, territory, support)', 'Investment in localization and certifications', 'Revenue build-up forecast by year and country', 'Risk-adjusted return on Middle East investment'],
    successCriteria: ['Market entry plan with country prioritization', 'Channel development strategy and target partners', 'Brand building and trust strategy to mitigate geopolitical risk', 'Localization and certification roadmap', '3-year revenue and investment forecast']
  },
  {
    id: 'me-exp-20', title: 'Peruvian Superfoods in Europe',
    category: 'Market Entry', industry: 'Food / Superfoods', difficulty: 'Medium',
    prompt: 'A Peruvian company ($200M revenue) that grows and exports quinoa, chia, maca, and other Andean superfoods wants to build a premium branded presence in European grocery stores. Currently they sell as bulk commodity ingredients to European importers. How should they build a consumer brand?',
    context: 'Superfood market in Europe is $8B growing at 12% annually. The company has excellent farming cooperatives, organic certification, and a compelling origin story. They have 30% of the global quinoa market as a commodity supplier but zero consumer brand presence.',
    keyFacts: ['European superfood market: $8B, growing 12% annually', 'Their current business: $200M revenue (95% bulk commodity, 5% branded)', 'Premium segment (branded, organic, fair trade): $2B, growing 18%', 'Their quinoa market share: 30% of global supply as commodity', 'Key European markets: UK ($2B), Germany ($1.8B), France ($1.5B), Nordics ($800M)', 'Retail channels: health food stores (40%), supermarkets (35%), online (20%), specialty (5%)', 'Consumer trend: plant-based protein, functional foods, ethical sourcing', 'Their competitive advantages: vertically integrated, organic certified, fair trade, 3,000 farmer cooperative', 'Private label threat: retailers launching own-brand superfoods at 30% lower price', 'Packaging and branding investment: $2-3M for SKU launch in one market', 'Retail listing cost: $20-50K per SKU per retailer (promotional support)', 'Competition: Ancient Harvest (US, $100M), TerraSoul (US), supermarket private labels'],
    frameworkHints: ['Market prioritization (UK vs Germany vs France vs Nordics)', 'Brand story development (Incan heritage, sustainability, farmer cooperative)', 'Channel strategy: health food stores vs conventional retail vs online', 'Product portfolio design (SKUs, pack sizes, price points)', 'Pricing vs private label and branded competitors'],
    expectedCalculations: ['Country market sizing and consumer segment analysis', 'Brand launch investment by market', 'Per-SKU economics (margin, volume, break-even)', '3-year revenue build-up by market and channel', 'ROI of brand building vs commodity business trade-off'],
    successCriteria: ['Country launch sequence with rationale', 'Brand positioning and story development', 'Channel strategy and retail partner acquisition plan', 'Product portfolio and pricing architecture', '3-year P&L forecast for branded business']
  },
   {
    id: 'me-exp-21', title: 'Italian Fashion in South Korea',
    category: 'Market Entry', industry: 'Fashion / Luxury', difficulty: 'Hard',
    prompt: 'An Italian mid-luxury fashion brand ($600M revenue, 200 stores in Europe) wants to enter South Korea. K-fashion is globally influential and Korean consumers spend heavily on luxury. But the market is dominated by local conglomerates and French luxury houses. Design the entry strategy.',
    context: 'South Korea has the highest per-capita luxury spending globally ($325/year vs $280 in US). The brand targets women 25-40 with work-appropriate luxury at $500-1500 price points. 70% of luxury sales in Korea happen in department stores.',
    keyFacts: ['Korea luxury market: $15B, growing 8% annually', 'Per-capita luxury spending: $325 (highest globally)', 'Department stores: 70% of luxury sales (Hyundai, Shinsegae, Lotte)', 'Key competitors: Gucci, Prada, Saint Laurent (30% combined share)', 'Their ideal positioning: contemporary luxury at accessible price points', 'K-culture influence: K-drama product placement drives 20% of fashion discovery', 'Social commerce: Instagram and Naver (local platform) critical for brand building', 'Import duty on Italian fashion: 13% + 10% VAT', 'Store setup in Apgujeong/Gangnam: $1M+ fit-out cost', 'Korean consumer behavior: high repeat purchase but demanding after-sales service', 'Local competitor: Handsome (Samsung group, $1B revenue), Kolon FnC ($800M)', 'E-commerce penetration: 40% of fashion sales (highest globally), growing', 'Influencer marketing cost: $10-50K per post for top K-fashion influencers'],
    frameworkHints: ['Channel strategy: department store concession vs flagship store vs e-commerce', 'Digital marketing and influencer strategy for K-fashion community', 'Product adaptation for Korean tastes (sizing, color preferences, seasonality)', 'Brand building timeline (awareness → desire → purchase)', 'Local team and operational setup'],
    expectedCalculations: ['Korea market sizing by price tier and channel', 'Store-level economics (concession vs flagship vs online)', 'Marketing and influencer budget and expected ROI', '3-year revenue build-up with break-even analysis', 'Capital investment requirement'],
    successCriteria: ['Channel strategy with partner identification', 'Brand launch and marketing plan (digital first, K-drama/influencer)', 'Product localization requirements', 'Retail rollout timeline and investment', '3-year P&L with expected returns']
  },

  // ============================================================
  // PROFITABILITY — 21 original hand-crafted cases
  // ============================================================
  {
    id: 'prof-exp-01', title: 'Hospital Chain Margin Recovery',
    category: 'Profitability', industry: 'Healthcare', difficulty: 'Hard',
    prompt: 'A 6-hospital regional chain in the US Midwest has seen EBITDA margins decline from 15% to 5% over 4 years. Two hospitals are cash-negative. Commercial payor mix is shrinking. Diagnose and fix profitability.',
    context: 'The chain operates 3,000 beds across 6 states. Revenue is $2.5B. Labor costs increased 30% post-COVID. They have $400M in debt covenants that require minimum 8% EBITDA margin.',
    keyFacts: ['Revenue: $2.5B (flat YoY)', 'EBITDA margin: 5% (was 15% 4 years ago)', 'Labor cost: 55% of revenue (was 42% pre-COVID)', 'Payor mix: Commercial 35%, Medicare 45%, Medicaid 20%', 'Bad debt: 6% of revenue (was 3%)', 'Two hospitals cash-negative: -$30M combined', 'Covenant requirement: 8% EBITDA margin ($125M)', 'Outpatient revenue: 30% of total, growing 8% annually', 'Average length of stay: 5.2 days (benchmark 4.5)', 'Supply chain: $500M spend, no centralized procurement'],
    frameworkHints: ['Revenue cycle and payor mix improvement', 'Labor productivity and staffing model optimization', 'Service line profitability analysis and rationalization', 'Outpatient and ambulatory strategy expansion', 'Supply chain consolidation and cost reduction'],
    expectedCalculations: ['Margin bridge from 5% to 8% target = $75M gap', 'Labor cost reduction potential by initiative', 'Payor mix shift financial impact', 'Service line contribution margin by hospital'],
    successCriteria: ['Root cause diagnosis with quantified margin bridge', 'Cost reduction and revenue enhancement plan', 'Hospital portfolio optimization recommendations', 'Implementation roadmap with quick wins', 'Capital structure and covenant compliance plan']
  },
  {
    id: 'prof-exp-02', title: 'Chemical Plant Cost Restoration',
    category: 'Profitability', industry: 'Chemicals / Manufacturing', difficulty: 'Medium',
    prompt: 'A specialty chemical manufacturer ($1.5B revenue) has seen gross margins drop from 45% to 28% due to raw material inflation and pricing pressure from low-cost Asian competitors. Restore margins to 40% within 24 months.',
    context: 'The company produces industrial adhesives for automotive and construction. 8 plants in Europe and 3 in the US. Raw materials (petrochemical derivatives) are 60% of COGS. Asian competitors have 20-25% cost advantage.',
    keyFacts: ['Revenue: $1.5B (declining 3% annually)', 'Gross margin: 28% (was 45% pre-crisis)', 'Raw materials: 60% of COGS (petrochemicals, up 40%)', 'Manufacturing cost: 25% of COGS (energy 40%)', 'SG&A: 15% of revenue (benchmark 12%)', 'Plant utilization: 65% (down from 80%)', 'SKU count: 5,000 (80% contribute <5% of revenue)', 'Customer concentration: Top 5 = 50% of revenue', 'Price increase pass-through: only 50% achieved', 'R&D: 5% of revenue'],
    frameworkHints: ['Cost structure decomposition and benchmarking', 'SKU rationalization and portfolio pruning', 'Manufacturing footprint optimization and plant consolidation', 'Procurement and raw material hedging strategy', 'Customer profitability segmentation and pricing'],
    expectedCalculations: ['Margin bridge from 28% to 40% target', 'SKU rationalization revenue at risk vs cost savings', 'Plant consolidation capex and payback', 'Procurement savings potential from consolidation'],
    successCriteria: ['Root cause diagnosis with quantified margin bridge', 'Cost reduction program by initiative with targets', 'Pricing and revenue management strategy', 'Manufacturing optimization plan', 'Implementation timeline and governance']
  },
  {
    id: 'prof-exp-03', title: 'Grocery Chain vs Discounter Margin',
    category: 'Profitability', industry: 'Retail / Grocery', difficulty: 'Easy',
    prompt: 'A mid-sized German grocery chain ($3B revenue, 400 stores) is losing margin to discounters Aldi and Lidl. EBIT margin is 2% vs 5% for discounters. How can they improve profitability without losing customers?',
    context: 'The chain targets mid-market families. They have been losing 2% market share annually to discounters. Fresh produce and bakery differentiate but have lower margins. Labor costs rose 15% in 2023.',
    keyFacts: ['Revenue: $3B (flat, market growing 2%)', 'EBIT margin: 2% (discounters: 5%)', 'Store count: 400, average 25K sq ft', 'Sales/sq ft: $300 (industry avg $350)', 'Private label: 25% of sales (discounters: 80%)', 'Fresh/perishable: 45% of sales, 15% margin', 'Labor: 18% of revenue (discounters: 12%)', 'Shrink: 3.5% of sales (benchmark 2.5%)', 'Energy: 3% of revenue (up 40%)', 'E-commerce: 2% of sales, unprofitable'],
    frameworkHints: ['Cost structure benchmark vs discounters', 'Private label penetration increase strategy', 'Store labor productivity and scheduling optimization', 'Shrink reduction programs', 'Fresh vs dry grocery space allocation optimization'],
    expectedCalculations: ['Cost reduction potential by category', 'Private label margin uplift', 'Space productivity optimization per department', 'Margin bridge from 2% to 3.5% target'],
    successCriteria: ['Profit improvement plan with quantified levers', 'Private label expansion strategy', 'Store operations improvement program', 'Competitive positioning vs discounters', 'Implementation roadmap with 18-month targets']
  },
  {
    id: 'prof-exp-04', title: 'IT Services Utilization Crisis',
    category: 'Profitability', industry: 'Professional Services / IT', difficulty: 'Medium',
    prompt: 'A global IT services firm ($5B revenue, 50K employees) has seen billable utilization drop from 78% to 65%. Operating margin fell from 18% to 9%. Restore profitability without mass layoffs.',
    context: 'The company provides software development, cloud migration, and consulting. Utilization drop driven by project delays and shift to fixed-price contracts. Pyramid staffing model needs optimization.',
    keyFacts: ['Revenue: $5B (flat YoY)', 'Operating margin: 9% (was 18%)', 'Utilization: 65% (benchmark 75-80%)', 'Headcount: 50K (India 60%, US/EU 30%, other 10%)', 'Bill rate: $80-200/hr depending on geography', 'Blended cost/hr: $60 (India $25, US $120)', 'Fixed-price contracts: 40% of revenue (was 20%)', 'Project delays: 30% of projects delayed avg 3 months', 'Attrition: 20% annually (benchmark 15%)', 'Subcontractor cost: $200M annually'],
    frameworkHints: ['Utilization improvement through demand generation', 'Fixed-price contract profitability analysis', 'Resource pyramid optimization (senior/junior mix, onshore/offshore)', 'Sales effectiveness and pipeline acceleration', 'Subcontractor-to-employee conversion strategy'],
    expectedCalculations: ['Utilization improvement from 65% to 75% margin impact', 'Fixed-price contract margin analysis', 'Resource mix optimization savings', 'Subcontractor insourcing business case'],
    successCriteria: ['Utilization improvement plan with demand generation', 'Project margin improvement for fixed-price contracts', 'Resource optimization (mix, location, pyramid)', 'Sales effectiveness improvement', '6-12-18 month profitability restoration roadmap']
  },
  {
    id: 'prof-exp-05', title: 'Airline Long-Haul Profit Turnaround',
    category: 'Profitability', industry: 'Airlines', difficulty: 'Expert',
    prompt: 'An Asian full-service airline ($12B revenue) is losing money on long-haul routes (40% of capacity) despite 82% load factors. Short-haul and premium cabins profitable. Diagnose long-haul economics and recommend a profitability turnaround.',
    context: 'The airline operates 200 aircraft to 80 destinations. Long-haul contributes -$200M EBIT. Competition from Gulf carriers intense. Fuel is 35% of long-haul costs.',
    keyFacts: ['Revenue: $12B', 'Long-haul EBIT: -$200M', 'Long-haul load factor: 82%', 'Long-haul RASK: $0.08 (short-haul $0.12)', 'Long-haul CASK: $0.085', 'Fuel: 35% of long-haul cost', 'Aircraft ownership: 20%', 'Labor: 15% (pilot costs 2x short-haul)', 'Airport/overflight fees: 10%', 'Competition: Emirates, Qatar, Singapore on 60% of long-haul routes', 'Premium cabin: 30% of revenue at 60% load factor'],
    frameworkHints: ['Route profitability analysis by market', 'Cost structure benchmark vs Gulf carriers', 'Premium cabin yield improvement', 'Network optimization (hub connectivity, gauge)', 'Ancillary and cargo revenue optimization'],
    expectedCalculations: ['Long-haul route profitability decomposition', 'Premium cabin upselling revenue opportunity', 'Aircraft gauge optimization impact on CASK', 'Cargo revenue optimization', 'Cost reduction to reach breakeven'],
    successCriteria: ['Route profitability diagnosis with root causes', 'Revenue enhancement strategy (premium, cargo, ancillary)', 'Cost reduction and network optimization plan', 'Fleet and gauge strategy recommendations', 'Long-haul profitability restoration roadmap ($200M improvement)']
  },
  {
    id: 'prof-exp-06', title: 'Newspaper Digital Transition',
    category: 'Profitability', industry: 'Media / Publishing', difficulty: 'Easy',
    prompt: 'A regional newspaper chain ($400M revenue, 20 daily papers) sees print revenue decline 15% annually. Digital grows at 8%. Print is 70% of revenue but margins collapsing. Right-size for profitability.',
    context: 'Family-owned 100+ years, debt-free but cash declining. Print circulation dropped from 500K to 200K daily over 5 years. $20M invested in digital with disappointing ROI.',
    keyFacts: ['Revenue: $400M (declining 12% annually)', 'Print revenue: $280M (70%, declining 15%)', 'Digital revenue: $120M (30%, growing 8%)', 'Print EBITDA margin: 8% (was 25%)', 'Digital EBITDA margin: 15% (target 25%)', 'Print circ: 200K daily (from 500K)', 'Digital subscribers: 150K (growing 10%)', 'Staff: 1,500 (800 journalists)', 'Printing plants: 5 owned, 3 underutilized', 'Distribution: 300 routes, declining density'],
    frameworkHints: ['Print cost right-sizing for declining circulation', 'Digital revenue acceleration (paywall, events, data licensing)', 'Printing and distribution network consolidation', 'Newsroom digital-first workflow transformation', 'Portfolio optimization (keep, merge, close)'],
    expectedCalculations: ['Print cost reduction to match revenue trajectory', 'Digital acceleration business cases', 'Printing plant consolidation savings', 'Newsroom productivity improvement', 'Revenue and margin forecast under different scenarios'],
    successCriteria: ['Revenue stabilization and digital growth strategy', 'Print cost structure transformation plan', 'Printing and distribution optimization', 'Newsroom restructuring for digital-first', '3-year financial projections to sustainable profitability']
  },
  {
    id: 'prof-exp-07', title: 'Gold Mine Cost Overhaul',
    category: 'Profitability', industry: 'Mining / Resources', difficulty: 'Hard',
    prompt: 'A mid-tier gold miner ($2B revenue, 5 mines) has all-in sustaining costs rising from $900/oz to $1,400/oz. Gold at $1,800/oz. One mine is uneconomic. Design cost transformation.',
    context: 'Company produces 800K oz annually. Cost inflation from labor, energy, declining ore grades. $500M debt with covenants requiring AISC <$1,200/oz.',
    keyFacts: ['Revenue: $2B', 'AISC: $1,400/oz (was $900/oz)', 'Gold price: $1,800/oz', 'Production: 800K oz from 5 mines', 'Mine A: 200K oz, AISC $1,100/oz (profitable)', 'Mine C: 150K oz, AISC $1,600/oz (cash-negative)', 'Labor: 35% of mine costs', 'Energy: 25% of mine costs', 'Declining grades: 1.2 g/t (was 1.8 g/t)', 'Debt covenant: AISC <$1,200/oz'],
    frameworkHints: ['AISC decomposition by mine and cost category', 'Mine closure or care-and-maintenance analysis', 'Productivity improvement (haulage, processing)', 'Energy cost reduction (renewables, hedging)', 'Grade control and mining sequence optimization'],
    expectedCalculations: ['AISC reduction from $1,400 to $1,100/oz = $240M savings', 'Mine-by-mine P&L and closure impact', 'Productivity savings by category', 'Energy cost reduction business case'],
    successCriteria: ['AISC reduction plan with mine-level targets', 'Portfolio optimization (closures, expansions, divestments)', 'Operational improvement initiatives with quantified savings', 'Energy and consumable cost reduction strategy', 'Gold price scenario planning']
  },
  {
    id: 'prof-exp-08', title: 'Grocery Delivery Path to Profit',
    category: 'Profitability', industry: 'E-commerce / Grocery', difficulty: 'Hard',
    prompt: 'An online grocery delivery company ($2B GMV) is losing $200M annually. Basket size is $60 but cost-to-serve is $70. Need a path to profitability. Investors impatient.',
    context: '20 US cities, dark stores and hubs. 1-hour delivery. Grocery e-commerce penetration is 10%. Intense competition from Instacart, Amazon Fresh, Walmart.',
    keyFacts: ['GMV: $2B (growing 30%)', 'Revenue: $500M', 'Gross loss: -$200M', 'Average basket: $60 (target $75)', 'Cost to serve: $70 per order', 'Revenue per order: $25', 'Per-order economics: -$45', 'Dark stores: 40', 'Delivery cost: $20/order', 'CAC: $50', 'Retention: 30% monthly ordering', 'Orders per picker per hour: 12 (target 18)'],
    frameworkHints: ['Unit economics decomposition and breakeven roadmap', 'Basket size growth strategy', 'Fulfillment productivity improvement', 'Delivery cost optimization', 'Revenue per order improvement'],
    expectedCalculations: ['Per-order economics path from -$45 to +$5', 'Basket size increase impact', 'Fulfillment productivity targets', 'Delivery density optimization savings', 'Break-even timeline'],
    successCriteria: ['Path to profitability with timeline', 'Unit economics improvement plan by lever', 'Basket size and revenue per order strategy', 'Fulfillment and delivery optimization roadmap', 'Funding requirements to break-even']
  },
  {
    id: 'prof-exp-09', title: 'Record Label Streaming Profit',
    category: 'Profitability', industry: 'Music / Entertainment', difficulty: 'Easy',
    prompt: 'A mid-sized record label ($200M revenue) sees physical music decline 20% annually while streaming grows. But streaming margins are 15% vs 40% for physical. Overall margin dropped from 25% to 12%. Adapt for digital profitability.',
    context: 'The label has 500 artists, 10,000 album catalog. Streaming is 70% of revenue but 40% of profit. Physical (vinyl resurgence) is 15% at 40% margin.',
    keyFacts: ['Revenue: $200M (streaming 70%, physical 15%, sync 10%, merch 5%)', 'Overall margin: 12% (was 25%)', 'Streaming margin: 15%', 'Physical margin: 40%', 'Sync margin: 70%', 'Artist advances: $50M annually (40% never recouped)', 'Marketing cost: 20% of revenue', 'A&R cost: 15% of revenue', 'Staff: 300 people', 'Catalog: 10,000 albums (80% generate <$100K/year)'],
    frameworkHints: ['Cost structure right-sizing for streaming economics', 'Catalog monetization optimization', 'Artist deal restructuring for streaming era', 'Physical and high-margin revenue maximization', 'A&R and marketing ROI improvement'],
    expectedCalculations: ['Streaming margin improvement from 15% to 20%', 'Artist advance recoupment rate improvement', 'Catalog management revenue uplift', 'Marketing ROI by channel', 'Margin bridge from 12% to 18%'],
    successCriteria: ['Business model adaptation for streaming profitability', 'Artist deal and A&R restructuring plan', 'Catalog monetization strategy', 'High-margin revenue stream growth plan', '3-year margin and profitability forecast']
  },
  {
    id: 'prof-exp-10', title: 'Hotel Chain Profit Per Room',
    category: 'Profitability', industry: 'Hospitality', difficulty: 'Medium',
    prompt: 'A 50-hotel UK chain has seen profit per available room (GOPPAR) decline 20% over 3 years despite stable RevPAR. Labor costs up 25%, energy doubled, F&B margins compressed. Restore profitability.',
    context: 'Mid-scale and upscale hotels, urban centers. Average 150 rooms. Revenue mix: rooms 60%, F&B 30%, other 10%. Occupancy 75% (stable), ADR £120 (flat). GOPPAR dropped from £55 to £44.',
    keyFacts: ['Hotels: 50, rooms: 7,500', 'Revenue: £400M', 'GOPPAR: £44 (was £55)', 'Occupancy: 75%, ADR: £120', 'Labor cost: 42% of revenue (was 35%)', 'Energy cost: 8% of revenue (was 4%)', 'F&B margin: 35% (was 50%)', 'OTA commissions: 15% of room revenue', 'Hotel EBITDA margin: 18% (was 25%)', 'Staff turnover: 80% (benchmark 60%)'],
    frameworkHints: ['Revenue management and channel mix optimization', 'Labor productivity and scheduling optimization', 'Energy efficiency investment business case', 'F&B operating model transformation', 'Hotel-level cost structure benchmark'],
    expectedCalculations: ['GOPPAR improvement from £44 to £55', 'Direct booking shift OTA commission savings', 'Labor productivity improvement per hotel', 'Energy ROI by hotel type', 'F&B model financial comparison'],
    successCriteria: ['GOPPAR improvement plan with hotel-level targets', 'Revenue and channel management strategy', 'Labor optimization and productivity program', 'Energy efficiency and sustainability plan', 'F&B operating model redesign']
  },
  {
    id: 'prof-exp-11', title: 'PE PortCo Working Capital Release',
    category: 'Profitability', industry: 'Industrial / Distribution', difficulty: 'Hard',
    prompt: 'A PE-backed industrial distributor ($1.2B revenue) has $280M in working capital (25% of revenue vs 18% benchmark). PE sponsor wants $80M released for debt paydown. Design working capital reduction program.',
    context: 'The company distributes electrical components through 40 branches. 100K SKUs, 30 days inventory on hand (industry avg 20). Payment terms net-60 customers, net-30 suppliers. Debt at 9% interest.',
    keyFacts: ['Revenue: $1.2B', 'Working capital: $280M (23% of revenue, benchmark 18%)', 'Inventory: $180M (30 days, benchmark 20 = $120M)', 'Receivables: $130M (40 DSO, benchmark 35)', 'Payables: $30M (10 DPO, benchmark 25 = $75M)', 'Debt: $400M at 9%', 'PE target: release $80M', 'Service level: 95% fill rate', 'SKUs: 100K (60% are C/D items)', 'Branches: 40, independent inventory management'],
    frameworkHints: ['Inventory optimization by SKU category (ABC analysis)', 'Receivables improvement through discounting and collections', 'Payables extension strategy and supplier management', 'Branch-level working capital performance management', 'Service level vs working capital trade-off analysis'],
    expectedCalculations: ['Inventory reduction by SKU category', 'DSO improvement from 40 to 35 days = $15M', 'DPO improvement from 10 to 25 days = $50M', 'Service level impact modeling', 'Total cash release: conservative $50M vs aggressive $90M'],
    successCriteria: ['Working capital reduction plan with targets by component', 'Inventory optimization and SKU rationalization strategy', 'Receivables improvement program', 'Payables extension approach', 'Service level guardrails and monitoring framework']
  },
  {
    id: 'prof-exp-12', title: 'Pain Clinic Chain Profit Fix',
    category: 'Profitability', industry: 'Healthcare / Clinics', difficulty: 'Medium',
    prompt: 'A chain of 50 pain management clinics ($300M revenue) faces margin compression as insurance shifts from fee-for-service to value-based care. Reimbursement per patient down 15%, costs up 20%. Restore profitability.',
    context: 'Clinics provide interventional pain procedures and medication management. 80% revenue from Medicare/Medicaid with declining rates. $50M in PE-backed debt.',
    keyFacts: ['Revenue: $300M (flat YoY)', 'EBITDA margin: 12% (was 22%)', 'Clinics: 50 across 8 states', 'Patients: 200K active', 'Payer mix: Medicare 50%, Medicaid 30%, Commercial 20%', 'Medicare reimbursement: down 15%', 'Cost per patient: $1,200 (up 20%)', 'Physician cost: 35% of revenue', 'Staff cost: 25% of revenue', 'Facility cost: 15% of revenue', 'Bad debt: 5% of revenue'],
    frameworkHints: ['Value-based care transition strategy', 'Revenue cycle management and coding optimization', 'Clinical staff productivity and care team redesign', 'Facility footprint optimization', 'Service mix optimization (high vs low margin procedures)'],
    expectedCalculations: ['Reimbursement optimization by payer', 'Revenue cycle improvement potential', 'Clinical staff productivity targets', 'Facility optimization savings', 'EBITDA margin bridge from 12% to 18%'],
    successCriteria: ['Profit improvement plan with margin targets', 'Value-based care readiness assessment', 'Revenue cycle and coding improvement program', 'Clinical operations and staffing optimization', 'Implementation roadmap with quick wins']
  },
  {
    id: 'prof-exp-13', title: 'Industrial Aftermarket Profit Defense',
    category: 'Profitability', industry: 'Industrial / Manufacturing', difficulty: 'Medium',
    prompt: 'A European industrial equipment manufacturer ($3B revenue) generates 25% of revenue from aftermarket but 60% of profit. Aftermarket margins 30% vs 8% for new equipment. Losing share to third-party competitors. Protect and grow aftermarket profitability.',
    context: 'The company makes compressors and turbines for oil/gas, power, chemical. Installed base: 50,000 units. Third-party service providers have 30% of aftermarket, growing 15%. Customers complain about OEM pricing.',
    keyFacts: ['Revenue: $3B (new equip 75%, aftermarket 25%)', 'Profit: aftermarket 60% of total', 'Aftermarket margin: 30% (new equip: 8%)', 'Installed base: 50K units, avg age 12 years', 'Third-party share: 30% growing 15% annually', 'Parts margin: 40% (third-party 25%)', 'Service response: 48 hours (competitor 24)', 'Service centers: 100 (need 200)', 'Customer retention: 70% service, 50% parts'],
    frameworkHints: ['Aftermarket protection strategy vs third-party', 'Service network expansion and response time', 'Parts pricing optimization and loyalty programs', 'Digital aftermarket platform (IoT, predictive)', 'Service contract penetration improvement'],
    expectedCalculations: ['Third-party share recapture opportunity', 'Service network investment and ROI', 'Parts pricing elasticity and margin optimization', 'Digital aftermarket investment and return', 'Aftermarket revenue and profit protection forecast'],
    successCriteria: ['Aftermarket growth strategy with competitive positioning', 'Service network optimization and investment plan', 'Parts and service pricing strategy', 'Digital aftermarket capabilities roadmap', '3-year aftermarket revenue and margin targets']
  },
  {
    id: 'prof-exp-14', title: 'Movie Theater Post-Pandemic Recovery',
    category: 'Profitability', industry: 'Entertainment / Cinema', difficulty: 'Medium',
    prompt: 'A national movie theater chain ($1.5B pre-pandemic revenue) is at 60% of pre-COVID revenue with fewer releases and shorter theatrical windows. Concession revenue down. Streaming changed habits. Design profitability recovery.',
    context: '5,000 screens at 400 locations. Pre-pandemic EBITDA $300M (20% margin). Current $50M (5%). Attendance 50% of 2019. Hollywood released 20% fewer films. Theatrical windows shrank from 90 to 45 days.',
    keyFacts: ['Pre-pandemic revenue: $1.5B, EBITDA $300M (20%)', 'Current revenue: $900M, EBITDA $50M (5%)', 'Attendance: 50% of 2019', 'Revenue mix: box office 55%, concessions 35%, other 10%', 'Box office margin: 50% (after studio split)', 'Concession margin: 80%', 'Average ticket: $12, concession $6/patron', 'Film releases: 80 (vs 100 pre-COVID)', 'Streaming impact: 40% wait for streaming', 'Labor: 30% of revenue, wages up 25%', 'Real estate: 400 leases, 30% need renegotiation'],
    frameworkHints: ['Attendance recovery strategy (subscription, events, alternative content)', 'Concession revenue optimization (premium, alcohol, mobile ordering)', 'Real estate footprint rationalization and lease renegotiation', 'Cost structure reset for lower attendance', 'Diversification (esports, events, corporate)'],
    expectedCalculations: ['Attendance recovery drivers and sensitivity to film slate', 'Concession per-patron improvement ($6 to $8)', 'Lease renegotiation and closure savings', 'Alternative content and event revenue', 'Margin improvement from 5% to 12%'],
    successCriteria: ['Attendance and box office revenue recovery plan', 'Concession and per-patron revenue optimization', 'Real estate and lease restructuring strategy', 'Diversification into events and alternative content', '3-year path to pre-pandemic profitability']
  },
  {
    id: 'prof-exp-15', title: 'Credit Union Margin Compression',
    category: 'Profitability', industry: 'Banking / Credit Union', difficulty: 'Easy',
    prompt: 'A $5B credit union has net interest margin shrink from 3.5% to 2.5% as deposits repriced faster than loans. Non-interest income flat. Operating costs up 8%. Membership growing but profitability per member declining.',
    context: '300K members. Deposits increased 15% during rate hikes (members seeking yield). Loan growth 5% (slowing). $200M capital above regulatory minimums.',
    keyFacts: ['Assets: $5B', 'Members: 300K, growing 5%', 'NIM: 2.5% (was 3.5%)', 'Cost of deposits: 2.8% (was 0.5%)', 'Loan yield: 5.8%', 'Non-interest income: $30M (flat)', 'Operating expense: $75M (1.5% of assets, up 8%)', 'ROA: 0.4% (benchmark 0.7%)', 'Capital ratio: 12%', 'Loan portfolio: mortgages 40%, auto 25%, credit cards 15%', 'Deposit mix: checking 25%, savings 30%, CDs 35%', 'Digital adoption: 40% (benchmark 60%)'],
    frameworkHints: ['Asset-liability management and rate risk optimization', 'Deposit mix shift to lower-cost core deposits', 'Fee income enhancement', 'Operating efficiency and digital transformation', 'Loan growth in higher-yielding segments'],
    expectedCalculations: ['NIM improvement from 2.5% to 3.0%', 'Deposit mix optimization impact', 'Fee income growth opportunities', 'Efficiency ratio improvement targets', 'ROA improvement from 0.4% to 0.7%'],
    successCriteria: ['NIM restoration strategy with quantifiable levers', 'Deposit gathering and pricing strategy', 'Non-interest income growth plan', 'Digital transformation and cost efficiency program', 'ROA improvement timeline to industry benchmark']
  },
  {
    id: 'prof-exp-16', title: 'Container Shipping Rate Recovery',
    category: 'Profitability', industry: 'Shipping / Logistics', difficulty: 'Expert',
    prompt: 'A container shipping line ($10B revenue) swung from record profits ($3B) to losses (-$500M) as freight rates normalized. Spot rates below break-even. $5B in new ships arriving. Restore profitability.',
    context: '200 container ships. Global fleet grew 20% post-pandemic. Trade growth only 2%. Spot rates $1,200/FEU vs break-even $1,800/FEU. Long-term contracts rolling off.',
    keyFacts: ['Revenue: $10B (down from $15B)', 'EBIT: -$500M (vs +$3B)', 'Capacity: 200 ships, 1.5M TEU', 'Order book: 30 new ships (500K TEU)', 'Break-even rate: $1,800/FEU', 'Spot rate: $1,200/FEU', 'Contract rate: $1,600/FEU (rolling off)', 'Operating cost/TEU: $1,200', 'Fuel: 30% of cost', 'Port: 25%, Vessel 20%, Inland 15%', 'Fleet age: 12 years'],
    frameworkHints: ['Revenue management: contract/spot mix optimization', 'Capacity management (idling, slow steaming, scrapping)', 'Cost reduction (fuel efficiency, port optimization)', 'Fleet deployment and network rationalization', 'Consolidation and alliance strategy'],
    expectedCalculations: ['Break-even rate reduction target and levers', 'Capacity management scenarios', 'Network optimization savings', 'Fuel cost reduction', 'Profitability under different rate scenarios'],
    successCriteria: ['Profitability restoration with rate environment assumptions', 'Capacity and fleet management strategy', 'Cost reduction program by category', 'Network and alliance optimization', '3-year financial forecast with sensitivity analysis']
  },

  // ============================================================
  // NEW BUSINESS / INNOVATION — 17 cases
  // ============================================================
  {
    id: 'nb-07', title: 'Autonomous Vehicle Mobility Service',
    category: 'New Business / Innovation', industry: 'Automotive / Mobility', difficulty: 'Expert',
    prompt: 'An automaker ($80B revenue) wants to launch an autonomous ride-hailing service in 5 cities. Investment: $5B. Expected to break even in 7 years.',
    context: 'Current: traditional auto manufacturer. AV technology: Level 4 pilot in 2 cities. Target: 1,000 vehicles in 5 cities. Competitor: Waymo (operational), Cruise (paused).',
    keyFacts: ['Revenue: $80B (traditional auto)', 'AV investment: $5B', 'Target cities: 5', 'Vehicles: 1,000 (Level 4)', 'Break-even: 7 years', 'Competitor: Waymo (1,000+ vehicles, 3 cities)', 'Technology: Level 4 pilot in 2 cities', 'Ride-hailing market: $200B by 2030', 'Current utilization: 18 hours/day (need 20)', 'Revenue per vehicle: $100K/year (need $200K)', 'Regulatory: 15 states permit AV operation', 'Safety: 1 incident per 1M miles (human: 1 per 100K)'],
    frameworkHints: ['City selection and market sizing', 'AV fleet deployment strategy (1,000 vehicles)', 'Technology and safety validation timeline', 'Regulatory and permitting strategy', 'Pricing and unit economics model'],
    expectedCalculations: ['Fleet deployment: 1,000 vehicles across 5 cities', 'Revenue per vehicle: $200K/year = $200M total', 'Unit economics: positive contribution margin by Year 3', 'Safety record: achieve 10x better than human drivers', 'Break-even timeline: 7 years'],
    successCriteria: ['AV mobility service launch strategy', 'City prioritization and market sizing', 'Technology and safety roadmap', 'Financial model with 7-year break-even plan', 'Regulatory and partnership strategy']
  },
  {
    id: 'nb-08', title: 'Space-Based Earth Observation Startup',
    category: 'New Business / Innovation', industry: 'Space / Technology', difficulty: 'Expert',
    prompt: 'A satellite startup ($0 revenue, $500M raised) wants to build a constellation of 100 small satellites for real-time Earth observation. Target market: agriculture, defense, climate.',
    context: 'Pre-revenue, $500M raised. Constellation cost: $2B. 100 small satellites, 1m resolution. Target customers: governments (40%), agriculture (30%), commercial (30%).',
    keyFacts: ['Revenue: $0 (pre-revenue)', 'Funding raised: $500M', 'Constellation cost: $2B (100 satellites)', 'Satellite cost: $15M each', 'Launch cost: $5M each (SpaceX rideshare)', 'Resolution: 1m (competitor: 30cm)', 'Time to first satellite: 18 months', 'Full constellation: 36 months', 'Target market: agriculture 30%, defense 40%, commercial 30%', 'Competitor: Planet (200 satellites), Maxar, BlackSky', 'TAM: $15B by 2030', 'Current team: 200 (need 500)'],
    frameworkHints: ['Constellation design (orbits, coverage, revisit rate)', 'Satellite manufacturing and launch strategy', 'Data platform and analytics services', 'Customer acquisition: government, agriculture, commercial', 'Funding strategy for remaining $1.5B'],
    expectedCalculations: ['First satellite launch: 18 months', 'Full constellation: 36 months', 'Revenue target: $100M by Year 5', 'Customer contracts: 50 by launch', 'Capital efficiency: $20M per satellite (benchmark)'],
    successCriteria: ['Space-based Earth observation business strategy', 'Satellite constellation and launch plan', 'Data platform and analytics offering', 'Customer and market strategy', 'Financial model and funding plan']
  },
  {
    id: 'nb-09', title: 'Vertical Farming Network Expansion',
    category: 'New Business / Innovation', industry: 'Agriculture / Food Tech', difficulty: 'Hard',
    prompt: 'A vertical farming startup ($50M revenue) wants to expand from 2 to 20 facilities nationally. Current: profitable in leafy greens, wants to add herbs and berries.',
    context: '2 facilities, $50M revenue, 15% EBITDA margin. Leafy greens only. Expansion: $500M capital for 18 new facilities. Competitor: AeroFarms (bankrupt), Plenty (struggling).',
    keyFacts: ['Revenue: $50M (2 facilities)', 'EBITDA margin: 15% ($7.5M)', 'Product: leafy greens only', 'Expansion: 18 new facilities (20 total)', 'Capital required: $500M', 'Revenue per facility: $25M', 'Competitor: AeroFarms (bankrupt), Plenty (struggling)', 'Cost per pound: $2 (benchmark outdoor: $1)', 'Energy cost: 30% of operating cost', 'Water usage: 95% less than outdoor farming', 'Retail customers: 50 grocery chains', 'Market: indoor farming $5B by 2028'],
    frameworkHints: ['Facility site selection (energy cost, proximity to market)', 'Crop expansion: herbs, berries, microgreens', 'Technology improvements: LED efficiency, automation', 'Customer expansion: new retail and food service', 'Capital raise: $500M equity and debt'],
    expectedCalculations: ['Facility expansion: 2 to 20 in 3 years', 'Revenue: $50M to $500M', 'EBITDA margin: 15% to 25% at scale', 'Product mix: leafy greens 50%, herbs 30%, berries 20%', 'Unit economics: positive contribution margin by facility #5'],
    successCriteria: ['Vertical farming network expansion strategy', 'Technology and crop diversification plan', 'Customer and market development', 'Capital and funding strategy', 'Financial model with 20-facility network economics']
  },
  {
    id: 'nb-10', title: 'Plant-Based Meat 2.0 Product Launch',
    category: 'New Business / Innovation', industry: 'Food Tech / CPG', difficulty: 'Medium',
    prompt: 'A food tech startup ($30M revenue) has developed a new plant-based meat using precision fermentation. They need to launch nationally and scale to $500M revenue.',
    context: 'Current: $30M revenue, specialty retail only. New product: indistinguishable from real meat (blind taste test 85% preference). Retail price: $8/lb (real meat: $6/lb).',
    keyFacts: ['Revenue: $30M (specialty retail only)', 'New product: precision fermentation plant-based meat', 'Taste test: 85% preference over competitor', 'Price: $8/lb (real meat $6/lb, competitor $10/lb)', 'Distribution: specialty retail only (need national)', 'Manufacturing: 1 facility (need 3)', 'Customers: 5,000 retail doors (need 50,000)', 'Marketing budget: $50M', 'Competitor: Impossible, Beyond Meat (struggling)', 'Market: plant-based meat $15B by 2030', 'Shelf life: 21 days (need 45 days)'],
    frameworkHints: ['National retail launch strategy (50K doors in 12 months)', 'Manufacturing scale-up: 3 facilities', 'Food service channel entry (restaurants, universities)', 'Marketing and brand building campaign', 'Supply chain for precision fermentation ingredients'],
    expectedCalculations: ['Revenue: $30M to $500M in 3 years', 'Distribution: 5K to 50K retail doors', 'Price parity with real meat: $8 to $6/lb', 'Manufacturing: 3 facilities at full capacity', 'Brand awareness: 0% to 40% in target demographic'],
    successCriteria: ['Plant-based meat 2.0 national launch strategy', 'Manufacturing and supply chain scale-up', 'Retail and food service channel strategy', 'Marketing and brand building plan', 'Financial model with $500M revenue target']
  },
  {
    id: 'nb-11', title: 'Cybersecurity Managed Service for SMBs',
    category: 'New Business / Innovation', industry: 'Cybersecurity / Technology', difficulty: 'Medium',
    prompt: 'A cybersecurity company ($200M revenue) wants to launch a managed security service for SMBs (100-1,000 employees). Market is underserved: 60% of SMBs have no security.',
    context: 'Current: enterprise cybersecurity ($200M revenue). SMB market: 30M companies, 60% unprotected. Competitor: mostly enterprise-focused. Price point: $500/month per company.',
    keyFacts: ['Revenue: $200M (enterprise only)', 'SMB target market: 30M companies (100-1,000 employees)', 'SMB security gap: 60% have no protection', 'Price point: $500/month per company', 'TAM: $180B (30M x $500 x 12)', 'Competitor: enterprise-focused (CrowdStrike, Palo Alto)', 'Technology: existing platform needs SMB adaptation', 'Sales model: PLG + inside sales (not field sales)', 'Customer acquisition cost: $2,000 (target LTV: $18,000)', 'Churn: target 5% monthly (benchmark 3%)', 'Revenue model: subscription + incident response fees'],
    frameworkHints: ['SMB-specific product bundle (endpoint, email, network, compliance)', 'PLG (product-led growth) acquisition funnel', 'Inside sales team and customer success', 'Partner channel: MSPs, VARs, accountants', 'Compliance add-on (SOC 2, HIPAA, PCI for SMBs)'],
    expectedCalculations: ['SMB customers: 0 to 10,000 in 3 years', 'Revenue: $0 to $60M from SMB segment', 'CAC: $2,000 (LTV/CAC: 9x)', 'Churn: 5% to 3% monthly', 'Gross margin: 70%+ on managed services'],
    successCriteria: ['SMB cybersecurity managed service strategy', 'Product and pricing design', 'PLG and inside sales go-to-market', 'Partner channel strategy', 'Financial model with $60M revenue target']
  },
  {
    id: 'nb-12', title: 'Digital Health Wearable Platform',
    category: 'New Business / Innovation', industry: 'Healthcare / Wearables', difficulty: 'Hard',
    prompt: 'A health tech company ($100M revenue) wants to launch a medical-grade wearable that monitors 10 health metrics. Target: 1M devices sold in Year 1.',
    context: 'Current: health data analytics ($100M revenue). New: FDA-cleared wearable. Metrics: heart rate, SpO2, ECG, blood pressure, glucose (non-invasive), temperature, sleep, stress, activity, respiratory rate.',
    keyFacts: ['Revenue: $100M (analytics only)', 'New product: medical-grade wearable', 'Price: $299 (consumer: $199, medical: $399)', 'FDA clearance: Class II (6-month timeline)', 'Battery life: 7 days (competitor: 2 days)', 'Accuracy: 95% (medical-grade threshold)', 'Target: 1M devices Year 1, 5M Year 3', 'Recurring revenue: $10/month subscription', 'Competitor: Apple Watch (consumer), Dexcom (glucose)', 'Non-invasive glucose: breakthrough technology (if achieved)', 'Manufacturing: contract manufacturer, $200M upfront', 'Marketing budget: $100M Year 1'],
    frameworkHints: ['FDA clearance strategy and clinical trials', 'Device manufacturing and supply chain', 'Software platform and health analytics', 'Consumer and medical channel distribution', 'Subscription and recurring revenue model'],
    expectedCalculations: ['Device sales: 1M Year 1, 5M Year 3', 'Revenue: $100M devices + $120M subscription Year 1', 'FDA clearance: achieve Class II approval', 'Accuracy: 95% across all 10 metrics', 'Gross margin: 50% devices, 80% subscription'],
    successCriteria: ['Medical wearable launch strategy', 'FDA and clinical trial roadmap', 'Manufacturing and distribution plan', 'Software platform and analytics', 'Financial model with device + subscription revenue']
  },
  {
    id: 'nb-13', title: 'Electric Aircraft Regional Routes',
    category: 'New Business / Innovation', industry: 'Aviation / Clean Tech', difficulty: 'Expert',
    prompt: 'An aviation startup ($0 revenue, $1B raised) wants to launch electric short-haul flights (500-mile routes). Fleet: 50 electric aircraft. Target: 20 routes by Year 3.',
    context: 'Pre-revenue, $1B raised. Electric aircraft: 19-seater, 500-mile range. Aircraft cost: $10M each. Operating cost: 70% less than jet fuel. Competitor: Heart Aerospace, Eviation.',
    keyFacts: ['Revenue: $0 (pre-revenue)', 'Funding: $1B raised (need $2B total)', 'Aircraft: 19-seater electric', 'Range: 500 miles', 'Aircraft cost: $10M each (50 = $500M)', 'Operating cost: 70% less than jet fuel', 'Competitor: Heart Aerospace (ES-30), Eviation (Alice)', 'FAA certification: 3-year timeline', 'First delivery: Year 2', 'Full fleet: Year 5', 'Routes: 20 regional routes by Year 3', 'Ticket price: 30% below comparable', 'Passengers per flight: 14 average (74% load factor)'],
    frameworkHints: ['FAA certification and type certificate strategy', 'Aircraft procurement and fleet management', 'Route selection and airport partnerships', 'Charging infrastructure at airports', 'Revenue management and pricing strategy'],
    expectedCalculations: ['FAA certification: achieve by Year 2', 'Fleet deployment: 50 aircraft over 5 years', 'Routes: 20 profitable regional routes', 'Operating cost: 70% reduction vs jet fuel', 'Break-even: Year 4 on route level'],
    successCriteria: ['Electric aviation business strategy', 'FAA certification and regulatory roadmap', 'Fleet and route planning', 'Infrastructure and partnerships', 'Financial model with 5-year fleet deployment']
  },
  {
    id: 'nb-14', title: 'AI-Powered Legal Services Platform',
    category: 'New Business / Innovation', industry: 'Legal / Technology', difficulty: 'Medium',
    prompt: 'A legal tech startup ($20M revenue) wants to build an AI platform that handles routine legal work (contracts, compliance, IP filings). Target: 10K law firms.',
    context: 'Current: $20M revenue from contract review tool. New: full legal services platform. AI handles 80% of routine legal work. Price: $500/month per firm.',
    keyFacts: ['Revenue: $20M (contract review tool only)', 'New platform: AI-powered legal services', 'Target: 10K law firms', 'Price: $500/month per firm', 'TAM: $60B (routine legal work)', 'AI capability: handles 80% of routine work', 'Competitor: Harvey AI, Casetext (acquired by Thomson Reuters)', 'Accuracy: 95% (human lawyer: 99%)', 'Time savings: 70% reduction in document drafting', 'Ethical considerations: unauthorized practice of law', 'Regulatory: varies by jurisdiction', 'Sales cycle: 3-6 months for law firms'],
    frameworkHints: ['AI model training on legal datasets (contracts, compliance, IP)', 'Law firm acquisition strategy (PLG + partnerships)', 'Ethical AI framework and liability management', 'Regulatory compliance by jurisdiction', 'Integration with existing legal practice management'],
    expectedCalculations: ['Law firm customers: 0 to 10,000 in 3 years', 'Revenue: $20M to $200M', 'AI accuracy: 95% to 99%', 'Time savings: 70% to 85%', 'Product liability: zero malpractice claims'],
    successCriteria: ['AI legal services platform strategy', 'AI model and accuracy improvement plan', 'Law firm go-to-market strategy', 'Ethical and regulatory framework', 'Financial model with $200M revenue target']
  },
  {
    id: 'nb-15', title: 'Subscription Car Service (No Ownership)',
    category: 'New Business / Innovation', industry: 'Automotive / Mobility', difficulty: 'Hard',
    prompt: 'An automotive company ($60B revenue) wants to launch a subscription car service where customers never own a car. Monthly fee includes insurance, maintenance, and unlimited swaps.',
    context: 'Subscription: $500/month (compact), $800/month (sedan), $1,200/month (SUV). Includes insurance, maintenance, roadside, 1 swap/month. Fleet: 50,000 vehicles.',
    keyFacts: ['Revenue: $60B (traditional sales)', 'New service: subscription car model', 'Price: $500-$1,200/month', 'Includes: insurance, maintenance, swaps', 'Fleet: 50,000 vehicles (Year 1, need 200K)', 'Customer acquisition cost: $2,000', 'Target customer: urban professionals 25-40', 'Churn: 5% monthly (benchmark 3%)', 'Vehicle utilization: 85% (need 90%)', 'Competitor: Care by Volvo, Porsche Drive', 'Market: subscription economy growing 20% annually', 'Unit economics: positive at 18 months per vehicle'],
    frameworkHints: ['Subscription tier design and pricing', 'Fleet management and vehicle lifecycle', 'Customer acquisition and retention', 'Insurance and maintenance cost optimization', 'Technology platform (app, vehicle access, swaps)'],
    expectedCalculations: ['Fleet size: 50K to 200K in 3 years', 'Revenue: $0 to $1B from subscriptions', 'Customer churn: 5% to 3% monthly', 'Vehicle utilization: 85% to 90%', 'Unit economics: positive contribution by Month 18'],
    successCriteria: ['Subscription car service business model', 'Fleet and operations strategy', 'Customer acquisition and pricing', 'Technology platform design', 'Financial model with unit economics per vehicle']
  },
  {
    id: 'nb-16', title: 'Carbon Capture and Trading Platform',
    category: 'New Business / Innovation', industry: 'Climate Tech / Energy', difficulty: 'Expert',
    prompt: 'A climate tech startup ($10M revenue) wants to build a carbon capture technology and digital trading platform. Target: capture 1M tonnes/year and trade carbon credits.',
    context: 'Current: pilot carbon capture facility (10K tonnes/year). New: scale to 1M tonnes and build trading platform. Cost: $100/tonne (need $50). Market price: $30-80/tonne.',
    keyFacts: ['Revenue: $10M (carbon credits, pilot)', 'Pilot capacity: 10K tonnes/year', 'Target: 1M tonnes/year', 'Capture cost: $100/tonne (need $50)', 'Market price: $30-80/tonne (volatile)', 'Technology: direct air capture (DAC)', 'Facility cost: $500M for 1M tonnes', 'Trading platform: digital marketplace', 'Competitor: Climeworks, Carbon Engineering, 1PointFive', 'Policy: IRA 45Q tax credit ($180/tonne US)', 'Demand: voluntary + compliance markets growing 30% annually', 'Team: 100 (need 500)'],
    frameworkHints: ['Technology scale-up from 10K to 1M tonnes', 'Carbon credit trading platform development', 'Policy and regulatory strategy (45Q, EU ETS)', 'Customer contracts (voluntary + compliance markets)', 'Facility financing and construction'],
    expectedCalculations: ['Capture capacity: 10K to 1M tonnes/year', 'Cost per tonne: $100 to $50', 'Revenue: $10M to $200M (trading platform + credits)', 'Tax credit optimization: $180/tonne 45Q', 'Platform: 100+ corporate buyers on trading platform'],
    successCriteria: ['Carbon capture and trading business strategy', 'Technology and facility scale-up plan', 'Trading platform development', 'Policy and regulatory strategy', 'Financial model with 5-year scaling roadmap']
  },
  {
    id: 'nb-17', title: 'Robotic Restaurant Kitchen',
    category: 'New Business / Innovation', industry: 'Food Tech / Robotics', difficulty: 'Hard',
    prompt: 'A robotics startup ($5M revenue) has developed a robotic kitchen that can cook 100 menu items. They want to launch 50 ghost kitchens in major cities.',
    context: 'Current: 2 pilot locations, $5M revenue. Robot cost: $250K each. Menu: 100 items. Cooking time: 3 minutes. Accuracy: 99%. Competitor: Miso Robotics (Flippy).',
    keyFacts: ['Revenue: $5M (2 pilot locations)', 'Robot cost: $250K each', 'Menu: 100 items', 'Cooking time: 3 minutes (human: 12 minutes)', 'Accuracy: 99%', 'Ghost kitchen model: 50 locations', 'Revenue per location: $1.5M/year', 'Target: 50 ghost kitchens in 3 years', 'Competitor: Miso Robotics (Flippy), Nuro', 'Labor: 1 person per kitchen (vs 5 human)', 'Food cost: 28% (human kitchen: 35%)', 'Delivery platforms: 30% commission'],
    frameworkHints: ['Robot manufacturing scale-up (50 units)', 'Ghost kitchen site selection and launch', 'Menu optimization for robotic cooking', 'Delivery platform partnerships and direct ordering', 'Franchise or company-owned model decision'],
    expectedCalculations: ['Ghost kitchens: 2 to 50 in 3 years', 'Revenue: $5M to $75M', 'Labor cost: 70% reduction vs human kitchen', 'Food cost: 28% (7% improvement)', 'Payback period: 12 months per kitchen'],
    successCriteria: ['Robotic kitchen ghost network strategy', 'Robot manufacturing and deployment', 'Kitchen operations and menu design', 'Customer acquisition and ordering platforms', 'Financial model with 50-kitchen network economics']
  },
  {
    id: 'nb-18', title: 'Drone Delivery Network (Last-Mile)',
    category: 'New Business / Innovation', industry: 'Logistics / Drone Tech', difficulty: 'Expert',
    prompt: 'A drone delivery startup ($10M revenue) has FAA Part 135 certification. They want to build a drone delivery network covering 10M households in 10 metropolitan areas.',
    context: 'FAA Part 135 certified. Current: 50 drones, 2 cities. Drone cost: $20K each. Delivery range: 10 miles. Payload: 5 lbs. Time: 15 minutes (vs 2 hours by car).',
    keyFacts: ['Revenue: $10M (2 cities)', 'FAA Part 135 certification: obtained', 'Drones: 50 (need 500)', 'Drone cost: $20K each (500 = $10M)', 'Delivery range: 10 miles', 'Payload: 5 lbs', 'Delivery time: 15 minutes', 'Coverage target: 10M households in 10 metro areas', 'Competitor: Wing (Alphabet), Zipline (healthcare)', 'Delivery price: $5 (competitor: $10+)', 'Orders per drone per day: 20 (need 30)', 'Unit economics: positive at 15+ orders/day'],
    frameworkHints: ['Drone fleet expansion: 50 to 500', 'Metropolitan area expansion (10 cities)', 'Customer partnerships (retail, pharmacy, food)', 'Airspace management and BVLOS operations', 'Maintenance and operations infrastructure'],
    expectedCalculations: ['Fleet: 50 to 500 drones', 'Coverage: 2 to 10 metropolitan areas', 'Orders per drone: 20 to 30 per day', 'Revenue: $10M to $100M', 'Unit economics: positive by Year 2'],
    successCriteria: ['Drone delivery network expansion strategy', 'Fleet and airspace operations', 'Customer and partnership strategy', 'Regulatory and safety framework', 'Financial model with 10-city network plan']
  },
  {
    id: 'nb-19', title: 'Personalized Nutrition AI Platform',
    category: 'New Business / Innovation', industry: 'Health Tech / Food Tech', difficulty: 'Medium',
    prompt: 'A health tech startup ($15M revenue) wants to launch an AI-powered personalized nutrition platform using gut microbiome testing. Target: 2M subscribers.',
    context: 'Current: $15M revenue from wellness app. New: gut microbiome test + AI meal plans. Price: $200 test + $30/month subscription. Competitor: ZOE, Viome.',
    keyFacts: ['Revenue: $15M (wellness app)', 'New product: microbiome-based nutrition AI', 'Test cost: $200', 'Subscription: $30/month', 'Target: 2M subscribers in 3 years', 'Competitor: ZOE ($100 test + $30/month), Viome', 'Science: gut microbiome links to 20+ health conditions', 'Accuracy: personalized recommendations improve outcomes 40%', 'Lab partner: 2 CLIA-certified labs', 'Time to result: 2 weeks (need 5 days)', 'Retention: 60% at 12 months (benchmark 70%)'],
    frameworkHints: ['Microbiome testing and lab partnership', 'AI nutrition recommendation engine', 'Content and meal planning platform', 'Customer acquisition (DTC + healthcare partnerships)', 'Clinical validation and published research'],
    expectedCalculations: ['Subscribers: 0 to 2M in 3 years', 'Revenue: $15M to $250M', 'Test turnaround: 2 weeks to 5 days', 'Retention: 60% to 70% at 12 months', 'Clinical outcomes: 40% improvement in health markers'],
    successCriteria: ['Personalized nutrition platform strategy', 'AI and microbiome science capabilities', 'Customer acquisition and retention', 'Clinical validation and partnerships', 'Financial model with 2M subscriber target']
  },
  {
    id: 'nb-20', title: 'Electric Boat Rental Network',
    category: 'New Business / Innovation', industry: 'Clean Tech / Maritime / Tourism', difficulty: 'Medium',
    prompt: 'A clean tech startup ($5M revenue) wants to build an electric boat rental network in 20 coastal/tourist cities. 1,000 boats, 500 charging stations.',
    context: 'Current: 2 cities, 50 boats, $5M revenue. Electric boats: 20ft, 4-hour range. Price: $100/hour. Competitor: few electric options. Tourism market: $1T globally.',
    keyFacts: ['Revenue: $5M (2 cities, 50 boats)', 'Boat: 20ft electric, 4-hour range', 'Price: $100/hour', 'Boat cost: $50K each (1,000 = $50M)', 'Charging stations: 500 ($5K each = $2.5M)', 'Expansion: 20 cities in 3 years', 'Revenue per boat: $100K/year (need $150K)', 'Utilization: 40% (need 60%)', 'Competitor: few electric boat options', 'Market: boat rental $15B globally', 'Tourism recovery: 120% of pre-COVID in target cities', 'Regulatory: marina permits, safety certifications'],
    frameworkHints: ['Fleet manufacturing and procurement (1,000 boats)', 'Charging infrastructure deployment (500 stations)', 'City expansion: 20 coastal/tourist cities', 'Customer acquisition: tourism platforms, direct', 'Operations and maintenance at scale'],
    expectedCalculations: ['Fleet: 50 to 1,000 boats', 'Cities: 2 to 20', 'Revenue: $5M to $150M', 'Utilization: 40% to 60%', 'Charging stations: 500 across 20 cities'],
    successCriteria: ['Electric boat rental network expansion strategy', 'Fleet and infrastructure deployment plan', 'City selection and market entry', 'Customer acquisition and partnerships', 'Financial model with 20-city network']
  },
  {
    id: 'nb-21', title: 'AI Tutoring Platform (K-12 Education)',
    category: 'New Business / Innovation', industry: 'Education / EdTech', difficulty: 'Medium',
    prompt: 'An edtech startup ($25M revenue) wants to launch an AI tutoring platform that adapts to each student. Target: 10M students in 3 years.',
    context: 'Current: $25M from online courses. New: AI tutor that adapts in real-time. Price: $20/student/month. Competitor: Khanmigo, Duolingo Max.',
    keyFacts: ['Revenue: $25M (online courses)', 'New product: adaptive AI tutor', 'Price: $20/student/month', 'Target: 10M students in 3 years', 'Market: K-12 tutoring $100B globally', 'Competitor: Khanmigo, Duolingo MasterClass', 'AI capability: real-time adaptation, 50 subjects', 'Learning improvement: 2x faster than traditional', 'Teacher dashboard: progress and intervention alerts', 'Accessibility: 20 languages', 'School vs parent purchasing: 60% school, 40% parent'],
    frameworkHints: ['AI tutor model training and subject expansion', 'School district sales and partnerships', 'Parent direct-to-consumer marketing', 'Teacher and administrator dashboard', 'Multi-language and accessibility features'],
    expectedCalculations: ['Students: 0 to 10M in 3 years', 'Revenue: $25M to $500M', 'Learning outcomes: 2x improvement', 'School partnerships: 1,000 districts', 'Subject coverage: 50 subjects in 20 languages'],
    successCriteria: ['AI tutoring platform strategy', 'AI model and content development', 'School district and parent go-to-market', 'Learning outcomes measurement and validation', 'Financial model with 10M student target']
  },
  {
    id: 'nb-22', title: 'Smart Home Energy Management System',
    category: 'New Business / Innovation', industry: 'Clean Tech / Smart Home', difficulty: 'Easy',
    prompt: 'A clean tech startup ($15M revenue) wants to launch a smart home energy system that reduces electricity bills by 40%. Target: 2M homes in 3 years.',
    context: 'Current: smart thermostat ($15M revenue). New: complete home energy system (solar, battery, EV charger, smart panels). Price: $15,000 installed (before tax credits).',
    keyFacts: ['Revenue: $15M (smart thermostat only)', 'New product: complete home energy system', 'Components: solar panels, battery, EV charger, smart panel', 'Price: $15,000 installed (before 30% tax credit = $10,500)', 'Savings: $2,400/year (40% reduction)', 'Payback: 4.4 years', 'Target: 2M homes in 3 years', 'Competitor: Tesla Powerwall, Enphase, Sunrun', 'Installation: certified installer network (500 partners)', 'Financing: $0 down, 10-year loan ($100/month)', 'Net savings: $100/month ($200 savings - $100 loan)'],
    frameworkHints: ['Home energy system product bundle', 'Installer network expansion (500 partners)', 'Financing and subscription options', 'Utility partnership and grid services', 'Smart home app and energy optimization AI'],
    expectedCalculations: ['Homes: 0 to 2M in 3 years', 'Revenue: $15M to $3B', 'Installer network: 500 to 2,000 partners', 'Customer savings: $2,400/year average', 'Payback period: <5 years for customer'],
    successCriteria: ['Smart home energy system launch strategy', 'Product and installation network plan', 'Financing and customer acquisition', 'Utility partnerships and grid services', 'Financial model with 2M home deployment']
  },
  {
    id: 'nb-23', title: 'Virtual Reality Training Platform (Enterprise)',
    category: 'New Business / Innovation', industry: 'VR / Enterprise Training', difficulty: 'Medium',
    prompt: 'A VR startup ($10M revenue) wants to launch an enterprise training platform for high-risk industries (oil & gas, healthcare, construction). Target: 5,000 enterprise clients.',
    context: 'Current: $10M from VR gaming. New: enterprise training. VR training reduces incidents 40%, speeds learning 60%. Price: $500/employee/year. Competitor: Strivr, Mursion.',
    keyFacts: ['Revenue: $10M (VR gaming)', 'New product: enterprise VR training platform', 'Price: $500/employee/year', 'Target: 5,000 enterprise clients in 3 years', 'Industries: oil & gas, healthcare, construction, aviation', 'Training improvement: 60% faster learning, 40% fewer incidents', 'Competitor: Strivr, Mursion, Talespin', 'Market: enterprise VR training $12B by 2028', 'Hardware: Meta Quest 3, Apple Vision Pro', 'Content library: 100 pre-built training modules', 'Custom content development: $50K per module'],
    frameworkHints: ['Enterprise VR training content library (100 modules)', 'Industry-specific solutions (oil & gas, healthcare, construction)', 'Enterprise sales team and channel partnerships', 'VR hardware partnerships and procurement', 'ROI measurement and analytics platform'],
    expectedCalculations: ['Enterprise clients: 0 to 5,000 in 3 years', 'Revenue: $10M to $250M', 'Content library: 100 to 500 modules', 'Employee reach: 0 to 5M trained', 'ROI proof: 40% incident reduction documented'],
    successCriteria: ['Enterprise VR training platform strategy', 'Content library and industry solution development', 'Enterprise sales and channel strategy', 'Hardware partnerships and deployment', 'Financial model with $250M revenue target']
  },

  // ============================================================
  // OPERATIONS / SUPPLY CHAIN — 17 cases
  // ============================================================
  {
    id: 'ops-07', title: 'Freight Network Optimization',
    category: 'Operations / Supply Chain', industry: 'Logistics / Freight', difficulty: 'Hard',
    prompt: 'A national freight company ($4B revenue, 5,000 trucks) is spending 30% of revenue on fuel while operating at 65% truck utilization. Target 85% utilization with 20% fuel reduction.',
    context: 'Long-haul trucking, 200 terminals, 3,000 drivers. Key issue: empty backhauls (40% of miles), poor route planning, aging fleet.',
    keyFacts: ['Revenue: $4B','Fuel cost: 30% of revenue ($1.2B)','Trucks: 5,000','Utilization: 65% (target 85%)','Drivers: 3,000','Terminals: 200','Empty backhaul rate: 40%','Route efficiency: below benchmark','Fleet age: avg 8 years','Driver turnover: 80% annually','Maintenance cost: rising 12% yearly'],
    frameworkHints: ['Route optimization and empty backhaul reduction','Fleet electrification strategy','Terminal consolidation and automation','Driver scheduling and productivity improvement','Load matching technology platform'],
    expectedCalculations: ['Fuel reduction from 30% to 25% = $200M savings','Utilization improvement revenue per truck','Empty backhaul elimination value','Terminal consolidation savings','Driver productivity and retention impact'],
    successCriteria: ['Operations transformation plan','Route optimization and load matching technology','Fleet modernization strategy','Terminal and network optimization','Financial model and implementation timeline']
  },
  {
    id: 'ops-08', title: 'E-Commerce Returns Management',
    category: 'Operations / Supply Chain', industry: 'E-commerce / Retail', difficulty: 'Medium',
    prompt: 'An online fashion retailer ($1B revenue) has 30% return rate costing $100M annually to process. Target: reduce to 20% and cut processing cost by 50%.',
    context: 'Fashion e-commerce, 5M customers, 15M orders/year. 30% return rate is highest in industry (benchmark 15-20%). High return rate driven by poor size guidance and customer expectation.',
    keyFacts: ['Revenue: $1B','Return rate: 30% (benchmark 15-20%)','Return processing cost: $100M annually','Orders: 15M/year','Customers: 5M','Avg order value: $65','Return items: 4.5M annually','Restocking cost: $8/item','Resale value: 70% of original (10% unsellable)','Size selection accuracy: 60%','Free return shipping cost: $5/item'],
    frameworkHints: ['AI-powered size recommendation engine','Virtual try-on technology (AR)','Return friction design (prepaid labels, instant refunds)','Customer education and styling content','Return-to-resale marketplace for unsellable items'],
    expectedCalculations: ['Return rate reduction from 30% to 20% savings','Processing cost reduction per return','Size recommendation accuracy improvement','AR try-on conversion rate impact','Total cost reduction from returns optimization'],
    successCriteria: ['Returns reduction strategy with technology','Size and fit solution roadmap','Return-to-resale marketplace design','Financial model and savings projection','Implementation timeline and investment']
  },
  {
    id: 'ops-09', title: 'Agricultural Supply Chain Traceability',
    category: 'Operations / Supply Chain', industry: 'Agriculture / Food', difficulty: 'Hard',
    prompt: 'A major food manufacturer ($20B revenue) needs to build a blockchain-based supply chain traceability system for farm-to-fork transparency. Customers and regulators demanding provenance data.',
    context: '40+ countries, 10,000 suppliers, 2M tonnes of raw materials annually. Current traceability: 1-step back, need end-to-end. Food safety incidents risk brand reputation.',
    keyFacts: ['Revenue: $20B','Suppliers: 10,000 across 40 countries','Raw materials: 2M tonnes annually','Current traceability: 1-step back','Regulatory trend: EU Farm to Fork (2025), FDA FSMA 2.0','Technology cost: $200M over 3 years','Incident cost: avg $10M per food safety recall','Customer demand: 70% of food buyers want provenance data','Competitor: Nestle (blockchain for coffee, pilot)','Integration complexity: 50+ ERP systems across geographies'],
    frameworkHints: ['Blockchain-based traceability platform design','Supplier onboarding and data collection strategy','Regulatory compliance framework (EU, US, China)','Consumer-facing transparency portal','Integration with existing ERP and supply chain systems'],
    expectedCalculations: ['Traceability platform development cost and timeline','Supplier adoption cost and timeline','ROI: incident reduction + brand value + premium pricing','Data collection infrastructure and sensors','Scalability: 10,000 suppliers across 40 countries'],
    successCriteria: ['End-to-end traceability implementation strategy','Technology platform recommendation','Supplier onboarding and data strategy','Regulatory compliance framework','Financial model and ROI analysis']
  },
  {
    id: 'ops-10', title: 'Warehouse Automation Transformation',
    category: 'Operations / Supply Chain', industry: 'Retail / E-commerce', difficulty: 'Easy',
    prompt: 'A retail distribution network ($50B company, 20 warehouses, 50K SKUs) has 3% error rate and 48-hour fulfillment time. Target: automate 60% with robots and AI.',
    context: 'Current: 5,000 warehouse workers, $500M labor cost, 3% error rate, 48-hour fulfillment. Target: reduce to 2,000 workers, 0.5% error, 24-hour fulfillment.',
    keyFacts: ['Revenue: $50B (company)','Warehouses: 20, 50K SKUs','Workers: 5,000 warehouse staff','Labor cost: $500M','Error rate: 3% (target 0.5%)','Fulfillment time: 48 hours (target 24)','Automation investment: $1B over 5 years','ROI: 3x on automation','Competitor: Amazon (60% automated)','Technology: AMRs, ASRS, vision systems','Integration: existing WMS'],
    frameworkHints: ['Warehouse automation roadmap (phased by type)','Robot selection and deployment strategy','Labor transition and reskilling plan','WMS integration and data architecture','Change management for warehouse operations'],
    expectedCalculations: ['Automation ROI by warehouse (20 locations)','Labor cost reduction ($500M to $200M target)','Error rate reduction impact on quality and returns','Fulfillment speed improvement customer impact','Implementation timeline and capital allocation'],
    successCriteria: ['Warehouse automation strategy','Robot deployment and integration plan','Labor transition and reskilling','WMS and technology architecture','Financial model and implementation timeline']
  },
  {
    id: 'ops-11', title: 'Cold Chain Last-Mile Innovation',
    category: 'Operations / Supply Chain', industry: 'Pharma / Logistics', difficulty: 'Medium',
    prompt: 'A pharmaceutical logistics provider ($5B revenue) distributes to 50,000 pharmacies and 2,000 hospitals. They want to reduce last-mile delivery cost by 25% while improving reliability.',
    context: 'Current: 95% on-time delivery, $15 cost per delivery, 8% wastage on temperature-sensitive products. Competition: FedEx Cold Chain, UPS Temperature True.',
    keyFacts: ['Revenue: $5B','Delivery destinations: 50K pharmacies + 2K hospitals','On-time delivery: 95% (target 98%)','Cost per delivery: $15','Temperature wastage: 8% ($400M annual loss)','Fleet: 3,000 refrigerated vehicles','Route: avg 50 miles, 15 stops','Cold chain breach cost: $200K per incident','Competitor performance: 97% on-time, $12 cost per delivery','Technology gap: basic GPS, no real-time temp monitoring','Customer requirements: 99.9% temp compliance'],
    frameworkHints: ['Route optimization and load consolidation','Real-time temperature monitoring IoT platform','Cold chain packaging innovation (phase-change materials)','Last-mile delivery partnerships (micro-fulfillment)','Predictive maintenance for refrigerated vehicles'],
    expectedCalculations: ['Cost reduction from $15 to $11 per delivery','Temperature wastage reduction from 8% to 3%','Customer retention improvement from reliability gains','Technology investment ROI','Revenue growth from premium cold chain services'],
    successCriteria: ['Last-mile cold chain optimization strategy','IoT monitoring and predictive maintenance','Packaging and vehicle technology upgrades','Partnership and micro-fulfillment strategy','Financial model and implementation timeline']
  },
  {
    id: 'ops-12', title: 'Multi-National Inventory Optimization',
    category: 'Operations / Supply Chain', industry: 'Retail / Consumer Goods', difficulty: 'Hard',
    prompt: 'A global consumer goods company ($30B revenue, 15 countries, 50K SKUs) has $5B in inventory (120 days vs benchmark 60 days). They want to cut inventory to $3B while maintaining service levels.',
    context: 'Inventory: $5B (120 days vs 60-day benchmark). 50K SKUs across 15 countries. Forecast accuracy: 70% (benchmark 85%). Waste/spoilage: 5% of inventory value. Seasonality is significant.',
    keyFacts: ['Revenue: $30B','Inventory: $5B (120 days, benchmark 60)','SKUs: 50K across 15 countries','Forecast accuracy: 70% (benchmark 85%)','Waste/spoilage: 5% ($250M annual loss)','Seasonality: high (peaks 3x in Q4)','Warehouse cost: $500M annually','IT systems: 8 legacy systems, no unified visibility','Supply chain cost: 18% of revenue (benchmark 12%)','Customer SLA: 99% fill rate required','Demand volatility: 30% coefficient of variation'],
    frameworkHints: ['Demand forecasting AI/ML platform implementation','Inventory optimization by SKU tier (ABC analysis)','Supply chain visibility and control tower','Warehouse and distribution network rationalization','Supplier collaboration and VMI programs'],
    expectedCalculations: ['Inventory reduction from $5B to $3B = $2B cash release','Waste reduction from 5% to 2% = $90M annual savings','Forecast accuracy improvement revenue impact','Warehouse cost reduction from optimization','Service level maintenance during inventory reduction'],
    successCriteria: ['Inventory optimization transformation strategy','AI/ML demand forecasting implementation','Supply chain visibility platform','Network and warehouse optimization','Financial model with $2B cash release target']
  },
  {
    id: 'ops-13', title: 'Airport Ground Handling Digitization',
    category: 'Operations / Supply Chain', industry: 'Aviation / Ground Handling', difficulty: 'Medium',
    prompt: 'An airport ground handling company ($800M revenue) manages turnaround services for 30 airlines at 12 airports. Operations are manual and slow. Want to digitize to improve efficiency and reduce delays.',
    context: 'Manual checklists, paper-based workflows, radio communications. Average turnaround time 45 minutes (target 35). Delay rate: 15% (target 5%). Labor cost: 40% of revenue.',
    keyFacts: ['Revenue: $800M','Airlines served: 30','Airports: 12','Avg turnaround time: 45 min (target 35)','Delay rate: 15% (target 5%)','Labor cost: 40% of revenue ($320M)','Workers: 8,000','Shifts: 24/7 operations','Equipment: 500 ground support vehicles','Current tech: paper checklists, radio comms','Customer satisfaction: below SLA penalties'],
    frameworkHints: ['Digital operations platform (mobile, real-time tracking)','Ground handling automation (baggage, fueling)','Predictive analytics for turnaround optimization','Airline integration and data sharing','Worker safety and performance management'],
    expectedCalculations: ['Turnaround time reduction from 45 to 35 minutes','Delay rate reduction from 15% to 5%','Labor cost reduction through productivity gains','Airline satisfaction and contract renewal rate','Technology investment ROI and payback'],
    successCriteria: ['Digital ground handling transformation strategy','Technology platform and automation plan','Airline integration and partnership strategy','Worker transition and training program','Financial model and implementation timeline']
  },
  {
    id: 'ops-14', title: 'Perishable Food Cold Chain Optimization',
    category: 'Operations / Supply Chain', industry: 'Food / Retail', difficulty: 'Easy',
    prompt: 'A regional grocery chain ($5B revenue, 500 stores) is experiencing 12% spoilage in its fresh foods category (benchmark 5%). They need to redesign their cold chain from farm to shelf.',
    context: 'Fresh produce and dairy represent 30% of revenue ($1.5B). 8 regional distribution centers, 30% of deliveries have temperature issues. Average shelf life: 5 days (benchmark 7).',
    keyFacts: ['Revenue: $5B','Fresh food: $1.5B (30% of revenue)','Spoilage rate: 12% (benchmark 5%)','Spoilage cost: $180M annually','Distribution centers: 8 regional','Temperature compliance: 70% on all deliveries','Avg shelf life: 5 days (benchmark 7)','Fleet: 200 refrigerated trucks','Driver scheduling: manual, no route optimization','Demand forecasting: basic historical averages','Waste disposal cost: $20M annually','Competitor benchmark: Walmart 3% spoilage, Whole Foods 4%'],
    frameworkHints: ['IoT temperature monitoring across cold chain','AI-powered demand forecasting and dynamic ordering','Shelf-life management and predictive expiration','Delivery route and timing optimization','Waste reduction and donation programs'],
    expectedCalculations: ['Spoilage reduction from 12% to 5% = $105M savings','Waste disposal cost reduction','Demand forecasting revenue uplift from reduced out-of-stocks','Energy cost reduction from optimized cold chain','Investment payback and ROI timeline'],
    successCriteria: ['Cold chain transformation strategy','IoT monitoring and real-time visibility platform','Demand forecasting and dynamic ordering','Waste reduction program','Financial model and implementation roadmap']
  },
  {
    id: 'ops-15', title: 'Pharmaceutical Batch Production Optimization',
    category: 'Operations / Supply Chain', industry: 'Pharmaceuticals', difficulty: 'Expert',
    prompt: 'A pharmaceutical manufacturer ($8B revenue) operates 6 GMP-certified facilities producing 200 million units/year. Batch failure rate is 8% (industry avg 3%). Reduce failures while increasing throughput.',
    context: 'Six facilities producing biologics, small molecules, and generics. Batch failure costs $50M annually in rework, disposal, and lost capacity. Compliance is FDA/EMA critical.',
    keyFacts: ['Revenue: $8B','Facilities: 6 GMP-certified plants','Annual output: 200M units','Batch failure rate: 8% (industry avg 3%)','Failure cost: $50M annually','FDA/EMA compliance: critical','Product mix: biologics 40%, small molecules 40%, generics 20%','Capacity utilization: 75% (target 90%)','Changeover time: 12 hours average','Quality release time: 72 hours','Labor: 3,000 skilled workers','Energy cost: $100M annually','Supply chain: 100+ raw material suppliers'],
    frameworkHints: ['Process analytical technology (PAT) implementation','Batch release acceleration (rapid microbiology)','Predictive maintenance for GMP equipment','Supply chain digitization and supplier quality','Advanced process control and automation'],
    expectedCalculations: ['Batch failure reduction from 8% to 3% = $150M capacity recovered','Throughput increase: 20% more units without new facilities','Quality release time reduction (72h to 24h)','Energy and utility cost reduction','Regulatory compliance improvement and audit readiness'],
    successCriteria: ['Pharmaceutical manufacturing optimization strategy','PAT and process analytics implementation plan','Supply chain digitalization roadmap','Quality improvement and compliance program','Financial model and implementation timeline']
  },
  {
    id: 'ops-16', title: 'Retail Store Network Optimization',
    category: 'Operations / Supply Chain', industry: 'Retail', difficulty: 'Medium',
    prompt: 'A fashion retail chain ($2B revenue, 800 stores) has 40% of stores underperforming. Revenue/sq ft: $200 (benchmark $300). They want to optimize the network.',
    context: '800 stores in malls and lifestyle centers. 40% of stores below breakeven. Real estate mix: 60% malls, 40% lifestyle centers. E-commerce growing at 30%.',
    keyFacts: ['Revenue: $2B','Stores: 800','Avg revenue/sq ft: $200 (benchmark $300)','Underperforming stores: 40% (320 stores)','Mall vs lifestyle: 60/40','Store closures needed: 150-200 stores','Annual lease cost: $600M','Customer satisfaction: 78/100','E-commerce: 25% of sales (growing 30%)','Foot traffic decline: 15% over 5 years in malls'],
    frameworkHints: ['Store performance analysis and ranking','Network optimization modeling (open/closed/resize)','Real estate portfolio restructuring (renegotiations, closures)','Digital and e-commerce expansion','Brand repositioning and customer experience innovation'],
    expectedCalculations: ['Store closure savings: $200M lease cost reduction','Revenue risk from closures: $50M-100M','Net profit improvement: $100M-150M annually','Digital revenue potential: $200M-500M','Brand repositioning impact on customer satisfaction and NPS'],
    successCriteria: ['Store network optimization strategy','Store closure and resize recommendations','Real estate portfolio restructuring plan','Digital and brand innovation strategy','Financial model and implementation timeline']
  },
  {
    id: 'ops-17', title: 'Last-Mile Delivery Autonomous Fleet',
    category: 'Operations / Supply Chain', industry: 'Logistics / Technology', difficulty: 'Expert',
    prompt: 'A last-mile delivery company ($3B revenue, 20,000 drivers) wants to deploy autonomous delivery vehicles (Level 4) in 10 metro areas to reduce cost-per-delivery from $4 to $1.50.',
    context: 'Driver shortage: 25% vacancy rate. Cost per delivery: $4.00. Average 20 deliveries/day per driver. Autonomous vehicles can do 100+ deliveries/day. Competitors: Nuro, Starship, Amazon Scout.',
    keyFacts: ['Revenue: $3B','Drivers: 20,000 (25% vacancy rate)','Cost per delivery: $4.00','Deliveries per driver per day: 20','Autonomous capacity: 100+ deliveries/day','Metropolitan areas: 10 target','Technology cost: $200K per vehicle (Level 4)','Infrastructure cost: $50M for charging/maintenance hubs','Regulatory: 8 of 50 states fully permit autonomous delivery','Timeline: 2-year pilot in 3 cities, 5-year full deployment','Workforce transition: 20,000 drivers need retraining','Competitor: Nuro (10,000+ vehicles), Starship (2,000+ robots)'],
    frameworkHints: ['Autonomous fleet deployment strategy (phased by city)','Driver transition and retraining program','Infrastructure investment (charging hubs, maintenance)','Regulatory compliance and permitting strategy','Customer acceptance and communication plan'],
    expectedCalculations: ['Cost-per-delivery reduction: $4 to $1.50','Autonomous fleet ROI vs current driver model','Driver transition cost and timeline','Infrastructure investment and payback period','Customer satisfaction improvement from reliability'],
    successCriteria: ['Autonomous fleet deployment strategy with city prioritization','Driver transition and workforce transformation plan','Infrastructure investment and technology roadmap','Regulatory compliance strategy','Financial model and implementation timeline']
  },
  {
    id: 'ops-18', title: 'Omnichannel Fulfillment Network',
    category: 'Operations / Supply Chain', industry: 'Retail / E-commerce', difficulty: 'Medium',
    prompt: 'A specialty retail chain ($5B revenue, 1,200 stores) wants to offer BOPIS and ship-from-store across all locations. Currently fulfillment is 100% warehouse-based.',
    context: '1,200 stores in US and Canada. 5 warehouses ship 80% of online orders. Store inventory: $3B. E-commerce revenue: $1.5B (30% of total). BOPIS not available. Ship-from-store: 5% pilot.',
    keyFacts: ['Revenue: $5B ($3.5B stores, $1.5B online)','Stores: 1,200 (US and Canada)','Warehouses: 5','Inventory: $3B total ($200K/store avg)','E-commerce: $1.5B (30% of revenue)','BOPIS: not available','Ship-from-store: 5% pilot (100 stores)','Avg order value: $85','Same-day delivery demand: 30% of online orders','Customer expectation: Amazon-level speed','Ship-from-store margin: 20% higher than warehouse'],
    frameworkHints: ['Ship-from-store network design (all 1200 stores)','BOPIS implementation and in-store fulfillment workflow','Inventory visibility and allocation system','Last-mile delivery optimization (couriers, lockers)','Store staffing and labor management for fulfillment'],
    expectedCalculations: ['Ship-from-store: $500M revenue uplift in 3 years','BOPIS: $200M revenue uplift (customers spend 35% more in store)','Same-day delivery capability: 2x conversion rate increase','Inventory turnover improvement: 25% reduction in days-on-hand','Fulfillment cost reduction: $50M from store-based fulfillment'],
    successCriteria: ['Omnichannel fulfillment transformation strategy','Ship-from-store and BOPIS implementation roadmap','Technology and integration plan','Labor and operations optimization','Financial model and implementation timeline']
  },
  {
    id: 'ops-19', title: 'Manufacturing Predictive Maintenance Network',
    category: 'Operations / Supply Chain', industry: 'Manufacturing / IoT', difficulty: 'Hard',
    prompt: 'A heavy equipment manufacturer ($15B revenue, 20 factories globally) has 10,000 machines and 20% unplanned downtime ($1B annual cost). They want to deploy IoT and AI to predict failures.',
    context: '20 factories, 10,000 CNC machines, presses, and assembly lines. Unplanned downtime: 20% (benchmark 5%). Each hour of downtime costs $50K. Current maintenance: calendar-based, reactive.',
    keyFacts: ['Revenue: $15B','Machines: 10,000 (CNC, presses, assembly)','Factories: 20 globally','Unplanned downtime: 20% (benchmark 5%)','Downtime cost: $1B annually ($50K/hour)','Maintenance cost: $500M annually','Equipment age: avg 12 years','Maintenance strategy: calendar-based (reactive)','Spare parts inventory: $100M','MTBF: 500 hours (benchmark 1,000)','Technician response time: 4 hours (target 30 min)'],
    frameworkHints: ['IoT sensor deployment strategy for 10,000 machines','AI/ML predictive failure modeling platform','Predictive maintenance scheduling and optimization','Spare parts management and supply chain','Workforce training and change management for 5,000 technicians'],
    expectedCalculations: ['Unplanned downtime reduction: 20% to 5% = $750M annual savings','Maintenance cost reduction through predictive scheduling','Spare parts inventory reduction from $100M to $50M','Production throughput increase: 15% from reduced downtime','Investment: $200M over 3 years with 3-year payback'],
    successCriteria: ['Predictive maintenance IoT and AI strategy','Implementation roadmap across 20 factories','Workforce and change management program','Technology platform architecture','Financial model with $750M annual savings target']
  },
  {
    id: 'ops-20', title: 'Retail Demand Sensing Network',
    category: 'Operations / Supply Chain', industry: 'Retail / CPG', difficulty: 'Medium',
    prompt: 'A consumer goods company ($10B revenue, 200 SKUs, 15,000 retail accounts) has 35% forecast accuracy (benchmark 85%). Poor demand sensing causes $500M in excess inventory and $300M in lost sales.',
    context: '200 SKUs across 15,000 retail accounts. Demand variability: 40% month-to-month (benchmark 15%). Inventory: 90 days (benchmark 45). Lost sales: $300M.',
    keyFacts: ['Revenue: $10B','SKUs: 200','Retail accounts: 15,000','Forecast accuracy: 35% (benchmark 85%)','Excess inventory cost: $500M annually','Lost sales due to stockouts: $300M annually','Inventory days: 90 (benchmark 45)','Demand variability: 40% month-to-month','Seasonality: 30% of sales in Q4','Lead time from order: 14 days','Waste/spoilage: 4% of inventory','Promotional spend: $1B annually (25% of revenue)'],
    frameworkHints: ['Demand sensing AI/ML platform','Real-time point-of-sale data integration','Weather and event-driven demand prediction','Promotional impact modeling and optimization','Dynamic allocation and replenishment system'],
    expectedCalculations: ['Excess inventory reduction: $500M to $200M = $300M savings','Lost sales reduction: $300M to $100M = $200M recovered','Promotional ROI improvement: 15% incrementality lift','Forecast accuracy improvement: 35% to 85%','Waste/spoilage reduction: 4% to 1% = $30M savings'],
    successCriteria: ['Demand sensing and AI/ML platform strategy','Point-of-sale and data integration plan','Replenishment and allocation system','Implementation and training program','Financial model with $800M annual impact']
  },
  {
    id: 'ops-21', title: 'Healthcare Hospital Operations Transformation',
    category: 'Operations / Supply Chain', industry: 'Healthcare / Hospital Operations', difficulty: 'Hard',
    prompt: 'A 500-bed hospital has 6-hour ED wait times (benchmark 2 hours), 15% readmission rate (benchmark 10%), and $200M in avoidable costs. They need a comprehensive operations overhaul.',
    context: '500 beds, 50,000 ED visits/year, 20,000 admissions/year. ED bottlenecks, discharge delays, physician burnout, poor handoffs. Readmission rate 15% costs $50M in penalties.',
    keyFacts: ['Beds: 500','ED visits: 50,000/year','Admissions: 20,000/year','ED wait time: 6 hours (benchmark 2)','Readmission rate: 15% (benchmark 10%)','Avoidable costs: $200M annually','Physician burnout: 40% (benchmark 25%)','Patient satisfaction: 30th percentile','Length of stay: 5.5 days (benchmark 4.5)','OR utilization: 65% (benchmark 85%)','Bed turnover: 1.5x/day (benchmark 2x)','Discharge delay: avg 8 hours post-decision'],
    frameworkHints: ['Lean Six Sigma process improvement','AI-powered patient flow optimization','Discharge planning and care coordination','ED fast track and streaming system','Physician productivity and burnout prevention'],
    expectedCalculations: ['ED wait time reduction from 6 to 2 hours','Readmission rate reduction from 15% to 10%','Avoidable cost reduction from $200M to $50M','Patient satisfaction improvement from 30th to 70th percentile','OR utilization improvement from 65% to 85%'],
    successCriteria: ['Hospital operations transformation strategy','Lean Six Sigma implementation plan','AI-powered patient flow and discharge planning','ED and OR optimization program','Financial model with $150M annual savings']
  },
  {
    id: 'ops-22', title: 'Pharmaceutical Warehouse Automation',
    category: 'Operations / Supply Chain', industry: 'Pharmaceuticals / Logistics', difficulty: 'Medium',
    prompt: 'A pharmaceutical distribution company ($8B revenue, 15 warehouses) handles 2B units annually. Current: manual picking (4 errors/1000), 3-day cycle time, $400M labor cost. Target: automate 70% with 99.9% accuracy.',
    context: '15 warehouses across US and Europe. 2B units/year, 50K SKUs (temperature-sensitive). Customer SLA: 99.9% order accuracy, next-day delivery. Current error rate: 4 per 1,000.',
    keyFacts: ['Revenue: $8B','Warehouses: 15 (US 10, Europe 5)','Annual units: 2B','SKUs: 50K (temperature-sensitive)','Order accuracy: 99.6% (target 99.9%)','Cycle time: 3 days (target 1 day)','Labor cost: $400M annually','Workers: 12,000 (warehouse staff)','Temperature compliance: 99.5% (FDA requirement 99.9%)','Competitors: McKesson, AmerisourceBergen, Cardinal Health','Technology: basic conveyor systems, manual picking'],
    frameworkHints: ['Warehouse automation roadmap (robotics, ASRS, AMR)','Temperature monitoring IoT platform expansion','Order picking accuracy improvement (vision systems)','WMS integration and real-time visibility','Workforce transition and reskilling program'],
    expectedCalculations: ['Automation ROI by warehouse','Order accuracy improvement from 99.6% to 99.9%','Temperature compliance improvement: 99.5% to 99.9%','Labor cost reduction: $400M to $250M','Fulfillment speed: 3-day to 1-day cycle time'],
    successCriteria: ['Pharmaceutical warehouse automation strategy','Robotics and automation technology deployment','Temperature monitoring and compliance platform','WMS and integration architecture','Financial model and implementation timeline']
  },
  {
    id: 'ops-23', title: 'Agricultural Crop Monitoring Network',
    category: 'Operations / Supply Chain', industry: 'Agriculture / Technology', difficulty: 'Easy',
    prompt: 'A large agricultural cooperative (5,000 farms, $2B revenue) needs to deploy satellite and drone monitoring to reduce crop losses (currently 15%) and improve yields.',
    context: '5,000 farms across US Midwest. Current crop loss: 15% (benchmark 5%). Yield gap: 20% below potential. Data: manual soil testing, no real-time monitoring. Climate risk increasing.',
    keyFacts: ['Revenue: $2B','Farms: 5,000 (US Midwest)','Crop loss rate: 15% (benchmark 5%)','Yield gap: 20% below potential','Total crop value: $4B annually','Crop loss cost: $600M annually','Current monitoring: manual soil testing (quarterly)','Real-time data: none','Drones: 0 (target: 50)','Satellite subscription: none','Climate risk: increasing drought/flood events','Technology gap: 10-15 years behind precision ag leaders'],
    frameworkHints: ['Satellite imagery and NDVI monitoring','Drone-based crop health assessment','AI/ML predictive analytics platform','Soil and weather sensor deployment','Integration with farm management software'],
    expectedCalculations: ['Crop loss reduction from 15% to 5% = $400M savings','Yield improvement from 20% gap to 10% gap = $400M gain','Water usage reduction: 25% (drought mitigation)','Pesticide cost reduction: 20% (precision application)','Total annual benefit: $800M+'],
    successCriteria: ['Agricultural monitoring network strategy','Technology deployment plan (satellites, drones, sensors)','AI/ML analytics platform development','Farmer training and adoption program','Financial model with $800M annual benefit target']
  },

  // ============================================================
  // DIGITAL TRANSFORMATION — 17 cases
  // ============================================================
  {
    id: 'dt-07', title: 'Telecom 5G Digital Services',
    category: 'Digital Transformation', industry: 'Telecommunications', difficulty: 'Expert',
    prompt: 'A telecom operator ($25B revenue) is launching 5G and wants to build a $5B digital services business on top of the network. Currently 90% of revenue is from connectivity.',
    context: '300M subscribers, 5G rolling out in 20 markets. Connectivity ARPU declining 5% annually. Digital services opportunity: enterprise IoT, edge computing, private networks, consumer AR/VR.',
    keyFacts: ['Revenue: $25B (90% connectivity)','Subscribers: 300M','5G coverage: 20 markets','ARPU: declining 5% annually','Digital services today: $2.5B (10% of revenue)','Target: $5B digital services in 5 years','Enterprise segment: 50K business customers','Network capex: $4B annually','Competitors: AT&T (Warner), T-Mobile (Magenta)','Technology gap: no cloud-native platform','Talent: 500 digital engineers (need 5,000)'],
    frameworkHints: ['5G digital services portfolio design (B2B, B2C, B2B2X)','Cloud-native platform and API strategy','Enterprise IoT and private 5G network offerings','Consumer digital services (AR/VR, gaming, health)','Organization transformation: digital business unit'],
    expectedCalculations: ['Digital services revenue: $2.5B to $5B in 5 years','ARPU stabilization through digital upsell','Enterprise digital revenue growth','Platform economics and margin improvement','Organization and talent transformation investment'],
    successCriteria: ['5G digital services strategy','Platform and technology architecture','Enterprise and consumer offering design','Organization and capability transformation','Financial model and investment case']
  },
  {
    id: 'dt-08', title: 'Manufacturing Industry 4.0 Rollout',
    category: 'Digital Transformation', industry: 'Manufacturing', difficulty: 'Hard',
    prompt: 'A manufacturer ($12B revenue, 30 plants) wants to implement Industry 4.0 across all facilities. Currently: 2 plants are smart factories, rest are traditional.',
    context: '30 plants in 12 countries. Only 2 have IoT, digital twins, and AI. Current OEE: 65% (benchmark 85%). Annual maintenance cost: $600M.',
    keyFacts: ['Revenue: $12B','Plants: 30 (12 countries)','Smart factory count: 2','OEE: 65% (benchmark 85%)','Maintenance cost: $600M','Quality defect rate: 2.5% (benchmark 0.5%)','Downtime: 15% (benchmark 5%)','Workers: 25,000 across all plants','IT/OT systems: fragmented, no standardization','Digital maturity: Level 1-2 (of 5)','Investment available: $500M over 3 years','Competitor: Siemens (14 smart factories)'],
    frameworkHints: ['Digital maturity assessment and roadmap by plant','IoT platform selection and deployment','Digital twin implementation strategy','AI/ML use cases: predictive quality, maintenance, scheduling','Worker upskilling and change management'],
    expectedCalculations: ['OEE improvement: 65% to 80% across all plants','Quality defect reduction: 2.5% to 0.8%','Maintenance cost reduction: $600M to $400M','Digital skills training: 25,000 workers','Payback period for $500M investment'],
    successCriteria: ['Industry 4.0 transformation strategy','Plant-by-plant implementation roadmap','Technology platform and architecture','Workforce transformation plan','Financial model with 3-year payback target']
  },
  {
    id: 'dt-09', title: 'Insurance Telematics Platform',
    category: 'Digital Transformation', industry: 'Insurance', difficulty: 'Medium',
    prompt: 'An auto insurer ($8B GWP) wants to launch a telematics-based usage insurance product. Currently: traditional underwriting, no real-time driving data.',
    context: '2M policyholders. Loss ratio: 72% (benchmark 65%). No driving behavior data. Competitors: Progressive Snapshot, GEICO DriveSafe.',
    keyFacts: ['GWP: $8B','Policyholders: 2M','Loss ratio: 72% (benchmark 65%)','Telematics adoption: 0% (benchmark 20%)','Target loss ratio: 65%','Competitor penetration: 20-30% of policies','Customer satisfaction: 72/100','Mobile app users: 40% (800K)','Data: no real-time driving data','Pricing model: demographic only','Regulatory: telematics approved in 45 states'],
    frameworkHints: ['Telematics data collection (OBD device, mobile app)','Risk scoring model using driving behavior','Usage-based insurance product design','Customer acquisition and opt-in strategy','Privacy and regulatory compliance framework'],
    expectedCalculations: ['Loss ratio reduction from 72% to 65% = $560M savings','Telematics adoption: 0% to 30% of book','Customer retention improvement from personalized pricing','New customer acquisition from competitive pricing','Data monetization and partnership opportunities'],
    successCriteria: ['Telematics and usage-based insurance strategy','Data collection and risk modeling platform','Product design and pricing innovation','Customer acquisition and retention plan','Financial model and ROI analysis']
  },
  {
    id: 'dt-10', title: 'Media Company Direct-to-Consumer Pivot',
    category: 'Digital Transformation', industry: 'Media / Entertainment', difficulty: 'Hard',
    prompt: 'A traditional media company ($5B revenue: 70% broadcast, 30% digital) wants to flip to 30% broadcast, 70% digital in 3 years. Digital subscribers: 2M (need 15M).',
    context: 'Broadcast TV networks, 200M reach. Digital: streaming with 2M subscribers ($5/month). Need to reach 15M subscribers at $12/month to offset broadcast decline.',
    keyFacts: ['Revenue: $5B (70% broadcast, 30% digital)','Digital subscribers: 2M (need 15M)','Streaming price: $5/month (need $12)','Broadcast reach: 200M households','Content spend: $2B annually','Digital content: 10% of budget (need 40%)','Ad revenue declining: 8% annually in broadcast','Competitors: Netflix (250M), Disney+ (150M), Peacock','Churn rate: 8% monthly (benchmark 5%)','Tech platform: licensed, not owned','Customer acquisition cost: $50 per subscriber'],
    frameworkHints: ['Content strategy for streaming-first (originals, library)','Direct-to-consumer platform build vs license','Pricing and bundling strategy (ad-free, ad-supported)','Distribution and partnership strategy','Organization from broadcast to digital-first culture'],
    expectedCalculations: ['Digital subscribers: 2M to 15M in 3 years','Digital revenue: $1.5B to $3.5B','Content cost reallocation: 10% to 40% digital','Customer acquisition: 13M new subscribers at $50 CAC','Total investment: $1.5B over 3 years'],
    successCriteria: ['Direct-to-consumer transformation strategy','Content and programming strategy','Platform and technology roadmap','Organization and culture transformation','Financial model with subscriber growth projections']
  },
  {
    id: 'dt-11', title: 'Logistics Real-Time Visibility Platform',
    category: 'Digital Transformation', industry: 'Logistics / Supply Chain', difficulty: 'Medium',
    prompt: 'A third-party logistics provider ($10B revenue) wants to build a real-time visibility platform for 50K shippers. Currently: batch tracking, no real-time data.',
    context: '50,000 shippers, 2M shipments/month. Current tracking: batch updates every 4 hours. Customer complaints: 35% cite visibility as top issue.',
    keyFacts: ['Revenue: $10B','Shippers: 50,000','Shipments: 2M/month','Current tracking: batch updates every 4h','Customer complaints: 35% cite visibility','Customer churn: 12% annually','Competitor: project44, FourKites (real-time)','Data: GPS from 30% of fleet, nothing from carriers','Platform: legacy TMS, no API layer','Investment available: $100M','Target: real-time visibility for 90% of shipments'],
    frameworkHints: ['Real-time visibility platform architecture','IoT and GPS data collection from multiple sources','Carrier onboarding and data integration','Customer-facing dashboard and API','Analytics: ETA prediction, exception management'],
    expectedCalculations: ['Visibility: batch to real-time for 90% of shipments','Customer churn reduction from 12% to 5%','Revenue uplift from premium visibility services','Operational efficiency from exception management','Customer satisfaction improvement from 65 to 85 NPS'],
    successCriteria: ['Real-time visibility platform strategy','Data collection and carrier integration','Customer experience and analytics platform','Implementation roadmap','Financial model and ROI analysis']
  },
  {
    id: 'dt-12', title: 'Healthcare Patient Portal Overhaul',
    category: 'Digital Transformation', industry: 'Healthcare', difficulty: 'Medium',
    prompt: 'A health system ($6B revenue, 30 hospitals, 500 clinics) has an outdated patient portal with 15% adoption. They want to build a modern digital health platform with 60% adoption.',
    context: '30 hospitals, 500 clinics, 3M patients. Current portal: basic, fragmented (3 different systems). Mobile app: none. Telehealth: 5% of visits.',
    keyFacts: ['Revenue: $6B','Hospitals: 30','Clinics: 500','Patients: 3M','Portal adoption: 15% (target 60%)','Current portal: basic, 3 fragmented systems','Mobile app: none','Telehealth: 5% of visits','Patient satisfaction with digital: 25th percentile','Cost per patient interaction: $15 (digital $2)','Competitors: Epic MyChart, Cerner Patient Portal','Regulatory: ONC interoperability rules'],
    frameworkHints: ['Unified patient portal with single sign-on','Mobile-first design with patient engagement features','Telehealth and virtual care platform','Integration with EHRs (Epic, Cerner, Meditech)','Patient engagement: messaging, scheduling, records'],
    expectedCalculations: ['Portal adoption: 15% to 60%','Cost per interaction: $15 to $5 (digital shift)','Patient satisfaction improvement from 25th to 70th percentile','Revenue from telehealth expansion','Operational efficiency from self-service'],
    successCriteria: ['Digital health platform strategy','Portal and mobile app design','Integration and interoperability roadmap','Patient adoption and engagement plan','Financial model and implementation timeline']
  },
  {
    id: 'dt-13', title: 'Energy Company Digital Field Operations',
    category: 'Digital Transformation', industry: 'Energy / Utilities', difficulty: 'Hard',
    prompt: 'An oil and gas company ($20B revenue, 500 field sites) is deploying digital tools for 10,000 field workers. Currently: paper-based, 2-hour average response time to incidents.',
    context: '500 field sites, 10,000 field workers. Paper-based work orders, manual safety inspections, no real-time monitoring. Incident response: 2 hours average. Target: 15 minutes.',
    keyFacts: ['Revenue: $20B','Field sites: 500','Field workers: 10,000','Current response time: 2 hours (target 15 min)','Work orders: paper-based','Safety inspections: manual, quarterly','Equipment downtime: 12% ($2.4B annual cost)','Maintenance cost: $1.5B annually','Incident rate: 2.5 per 100 workers (benchmark 1.0)','Digital maturity: Level 1','IT budget: $500M (10% for digital)'],
    frameworkHints: ['Mobile field worker platform (work orders, inspections)','IoT sensors for equipment monitoring','Real-time safety monitoring and incident response','Digital twin of critical assets','AR/VR for remote expert assistance'],
    expectedCalculations: ['Response time: 2 hours to 15 minutes','Equipment downtime: 12% to 5% = $1.4B savings','Maintenance cost reduction: $1.5B to $1B','Safety incident rate reduction: 2.5 to 1.0','Field worker productivity improvement: 25%'],
    successCriteria: ['Digital field operations strategy','Mobile and IoT platform architecture','Safety and incident response digitization','Implementation across 500 sites','Financial model with $1.4B downtime savings']
  },
  {
    id: 'dt-14', title: 'Banking Core Modernization',
    category: 'Digital Transformation', industry: 'Banking / Financial Services', difficulty: 'Expert',
    prompt: 'A regional bank ($50B assets) is running on a 30-year-old core banking system. They want to modernize to compete with fintech challengers. Current: 40% digital adoption, high cost-to-serve.',
    context: 'Core system: 30 years old, COBOL-based. Cost to maintain: $200M/year. New product launch: 6 months (benchmark 2 weeks). Digital adoption: 40%.',
    keyFacts: ['Assets: $50B','Core system age: 30 years (COBOL)','Maintenance cost: $200M/year','New product launch: 6 months (benchmark 2 weeks)','Digital adoption: 40%','Branches: 200','Customers: 2M','Cost-to-income ratio: 65% (benchmark 45%)','Digital competitors: 5 neobanks in market','Data: locked in legacy systems, no real-time','Staff: 5,000 (30% in IT)'],
    frameworkHints: ['Core banking modernization strategy (replace, re-platform, or wrap)','Cloud migration and API-first architecture','Digital product factory for rapid launch','Data platform for real-time analytics','Branch and workforce transformation'],
    expectedCalculations: ['Maintenance cost: $200M to $50M','New product launch: 6 months to 2 weeks','Cost-to-income ratio: 65% to 50%','Digital adoption: 40% to 80%','Customer growth: 2M to 3M from digital channels'],
    successCriteria: ['Core modernization strategy with risk assessment','Cloud and API architecture','Digital product and platform strategy','Branch and workforce transformation','Financial model with $150M annual savings']
  },
  {
    id: 'dt-15', title: 'Retail Media Network Launch',
    category: 'Digital Transformation', industry: 'Retail / Advertising', difficulty: 'Medium',
    prompt: 'A grocery chain ($30B revenue, 1,000 stores) wants to build a retail media network leveraging its loyalty data (15M members). Target: $500M in ad revenue in 3 years.',
    context: '1,000 stores, 15M loyalty members. Current: no media business. Competitor: Walmart Connect ($2B+), Kroger Precision Marketing.',
    keyFacts: ['Revenue: $30B (grocery)','Stores: 1,000','Loyalty members: 15M','Competitor: Walmart Connect $2B+, Kroger $1B+','Target: $500M ad revenue in 3 years','Data: purchase history, demographics, store visits','Current data monetization: $0','Digital ads market: growing 25% annually','Advertiser demand: 200 CPG brands as partners','Technology: basic loyalty platform, no DSP','Privacy: first-party data advantage (cookie deprecation)'],
    frameworkHints: ['Retail media platform build (DSP, ad server)','Data clean room for advertiser analytics','Advertiser sales team and go-to-market','Measurement and attribution framework','Privacy and compliance framework'],
    expectedCalculations: ['Ad revenue: $0 to $500M in 3 years','Advertiser count: 0 to 200 brands','Data-driven advertising ROAS vs traditional','Loyalty member engagement improvement','Gross margin on media: 70%+'],
    successCriteria: ['Retail media network strategy','Platform and data architecture','Advertiser acquisition and sales strategy','Measurement and attribution platform','Financial model with $500M revenue target']
  },
  {
    id: 'dt-16', title: 'Education Digital Learning Platform',
    category: 'Digital Transformation', industry: 'Education / EdTech', difficulty: 'Easy',
    prompt: 'A university ($2B revenue, 40K students) wants to build a hybrid digital learning platform. Currently: 90% in-person, limited LMS usage, no online degree programs.',
    context: '40,000 students, 2,000 faculty, 200 programs. LMS adoption: 30% of courses. Online programs: 0. Competitor: Arizona State (online 70K students).',
    keyFacts: ['Revenue: $2B (90% in-person tuition)','Students: 40,000','Faculty: 2,000','Programs: 200','LMS adoption: 30%','Online programs: 0 (target: 50)','Competitor: ASU online 70K students','Market: online higher ed $100B and growing 15%','Technology: basic LMS (Canvas), no video platform','Student satisfaction with tech: 40/100','Digital skills gap: 60% of faculty need training'],
    frameworkHints: ['Hybrid learning platform design (LMS, video, assessment)','Online program development (50 programs in 3 years)','Faculty digital training program','Student engagement and retention tools','Marketing and student acquisition for online'],
    expectedCalculations: ['Online enrollment: 0 to 20,000 students in 3 years','Online revenue: $0 to $400M','Faculty digital proficiency: 40% to 90%','Student satisfaction with tech: 40 to 80/100','Cost per online student: 50% of in-person'],
    successCriteria: ['Digital learning transformation strategy','Platform and technology architecture','Online program portfolio design','Faculty training and adoption plan','Financial model with $400M online revenue target']
  },
  {
    id: 'dt-17', title: 'Insurance Claims AI Automation',
    category: 'Digital Transformation', industry: 'Insurance', difficulty: 'Hard',
    prompt: 'A property and casualty insurer ($12B GWP) processes 1M claims/year with 40% straight-through processing rate. They want to achieve 80% STP using AI.',
    context: '1M claims/year, 40% STP (benchmark 80%). Average claims cycle: 30 days (benchmark 7). Claims cost: $8B annually. Leakage: 15% (benchmark 5%).',
    keyFacts: ['GWP: $12B','Claims volume: 1M/year','STP rate: 40% (benchmark 80%)','Average claims cycle: 30 days (benchmark 7)','Claims cost: $8B annually','Claims leakage: 15% ($1.2B) vs benchmark 5%','Customer satisfaction: 55/100','Claims staff: 3,000','Fraud detection: manual review of 10%','Technology: legacy claims system, basic rules engine','Competitor: Lemonade (AI claims in 3 seconds)'],
    frameworkHints: ['AI/ML claims triage and routing','Computer vision for damage assessment (auto, property)','NLP for claims intake and documentation','Fraud detection and anomaly scoring','Straight-through processing engine'],
    expectedCalculations: ['STP rate: 40% to 80%','Claims cycle time: 30 days to 7 days','Claims leakage: 15% to 5% = $800M savings','Customer satisfaction: 55 to 80/100','Claims staff redeployment: 1,500 to value-added roles'],
    successCriteria: ['AI claims automation strategy','Computer vision and NLP implementation','STP engine and workflow redesign','Fraud detection platform','Financial model with $800M leakage reduction']
  },
  {
    id: 'dt-18', title: 'Agricultural Precision Farming Platform',
    category: 'Digital Transformation', industry: 'Agriculture', difficulty: 'Medium',
    prompt: 'A large agribusiness ($8B revenue) wants to build a precision farming digital platform for 10,000 partner farmers. Currently: no digital tools, traditional farming practices.',
    context: '10,000 partner farmers, 20M acres. Crop yield: 15% below optimal. Input costs: $3B. Digital tools: none. Competitor: John Deere Operations Center.',
    keyFacts: ['Revenue: $8B','Partner farmers: 10,000','Acres: 20M','Yield gap: 15% below optimal','Input costs: $3B (seeds, fertilizer, chemicals)','Digital tools: none','Competitor: John Deere, Climate Corp','Market opportunity: precision ag $12B by 2028','Data: soil tests (quarterly), no real-time','Climate risk: increasing variability','Farmer tech adoption: low (average age 55)'],
    frameworkHints: ['Precision farming platform (soil, weather, satellite)','AI/ML yield optimization recommendations','Input optimization (seeds, fertilizer, chemicals)','Farm management software and mobile app','Data partnerships (equipment OEMs, weather services)'],
    expectedCalculations: ['Yield improvement: 15% gap to 5% = $1.2B value','Input cost reduction: 10% = $300M savings','Platform revenue: $100M/year from 10,000 farmers','Carbon credit monetization potential','Data-driven agronomy advisory services'],
    successCriteria: ['Precision farming platform strategy','AI/ML and data analytics capabilities','Farmer adoption and engagement plan','Partnership and ecosystem strategy','Financial model with $1.5B total value creation']
  },
  {
    id: 'dt-19', title: 'Pharma Digital Clinical Trials',
    category: 'Digital Transformation', industry: 'Pharmaceuticals', difficulty: 'Expert',
    prompt: 'A pharmaceutical company ($25B revenue) wants to digitize clinical trials. Currently: 90% site-based, 50% of trials delayed, $2B annual trial cost.',
    context: '150 active trials, 50,000 patients. 90% site-based (target 50% decentralized). Trial delays: 50% (cost $100M each). Patient recruitment: 30% fail to meet targets.',
    keyFacts: ['Revenue: $25B','Active trials: 150','Patients: 50,000','Site-based: 90% (target 50% decentralized)','Trial delays: 50% ($100M cost each)','Recruitment failures: 30% of trials','Annual trial cost: $2B','Patient dropout: 25%','Data: paper CRFs in 40% of sites','Regulatory: FDA accepts DHT data','Competitor: Medidata, Oracle Health Sciences'],
    frameworkHints: ['Decentralized clinical trial (DCT) platform','Wearable and remote patient monitoring','AI-powered patient recruitment and matching','Electronic data capture and real-time analytics','Regulatory strategy for digital endpoints'],
    expectedCalculations: ['Trial timeline reduction: 50% delay to 20% delay','Patient recruitment improvement: 30% failure to 10%','Patient dropout reduction: 25% to 10%','Cost per trial reduction: 20%','Time-to-market improvement: 6 months faster'],
    successCriteria: ['Digital clinical trials transformation strategy','DCT platform and wearable integration','Patient recruitment and retention platform','Regulatory and compliance framework','Financial model with $600M annual savings']
  },
  {
    id: 'dt-20', title: 'Insurance Product Configuration Engine',
    category: 'Digital Transformation', industry: 'Insurance', difficulty: 'Medium',
    prompt: 'A commercial insurer ($6B GWP) takes 9 months to launch new products. They want to build a no-code product configuration engine to launch in 2 weeks.',
    context: 'Commercial lines: 50 products, 20 states. Current: 9 months per product launch. IT bottleneck: 80% of time spent on configuration vs innovation.',
    keyFacts: ['GWP: $6B','Products: 50 commercial lines','States: 20','Product launch time: 9 months (target 2 weeks)','IT bottleneck: 80% on configuration','Product changes: 200/year','Compliance changes: 50/year','Underwriter manual processes: 60%','Competitor: Socotra (cloud-native core)','Regulatory filing: 4-6 weeks per state','Customer demand: 40% want digital self-service'],
    frameworkHints: ['No-code product configuration engine','Rate/rule management and versioning','Regulatory compliance automation','Underwriter workflow and decision engine','API-first architecture for distribution channels'],
    expectedCalculations: ['Product launch time: 9 months to 2 weeks','Product change implementation: 4 weeks to 1 day','IT time on configuration: 80% to 20%','Underwriter productivity: 40% improvement','Time-to-revenue for new products: 6x faster'],
    successCriteria: ['Product configuration engine architecture','No-code/low-code platform selection','Regulatory compliance automation','Underwriter workflow redesign','Financial model and implementation roadmap']
  },
  {
    id: 'dt-21', title: 'Fashion Virtual Try-On Platform',
    category: 'Digital Transformation', industry: 'Fashion / E-commerce', difficulty: 'Medium',
    prompt: 'A fashion retailer ($3B revenue, 20M online customers) has 30% return rate due to fit issues. They want to deploy AR virtual try-on to reduce returns by 40%.',
    context: '30% return rate (industry avg 20%). 20M online customers. Fit/size: #1 reason for returns (60%). AR technology: available but unproven at scale.',
    keyFacts: ['Revenue: $3B (online 40%)','Online customers: 20M','Return rate: 30% (industry avg 20%)','Fit/size issues: 60% of returns','Return processing cost: $150M/year','AR technology cost: $50M implementation','Size data: basic (S, M, L)','Body measurement data: none','Mobile traffic: 70% of visits','Conversion rate: 2.5%','Competitor: Warby Parker (virtual try-on), ASOS (Fit Assistant)'],
    frameworkHints: ['AR virtual try-on for clothing and shoes','AI-powered size recommendation engine','Body measurement technology (phone camera)','Fit database from return data analytics','Integration with product pages and checkout'],
    expectedCalculations: ['Return rate reduction: 30% to 18% = $180M savings','Conversion rate improvement: 2.5% to 3.5%','Customer satisfaction with fit: 50% to 80%','Size data creation: 20M body measurements','AR engagement rate: 25% of visitors'],
    successCriteria: ['Virtual try-on technology strategy','AI size recommendation platform','Body measurement and fit analytics','Customer adoption and engagement plan','Financial model with $180M return savings']
  },
  {
    id: 'dt-22', title: 'Banking AI-Powered Personalization',
    category: 'Digital Transformation', industry: 'Banking / Financial Services', difficulty: 'Medium',
    prompt: 'A retail bank ($80B assets, 5M customers) wants to deliver personalized financial advice at scale. Currently: generic product pushes, 2% cross-sell rate.',
    context: '5M customers, 8M accounts. Cross-sell rate: 2% (benchmark 15%). Customer satisfaction: 60/100. Digital engagement: 45%. Personalization: none.',
    keyFacts: ['Assets: $80B','Customers: 5M','Accounts: 8M','Cross-sell rate: 2% (benchmark 15%)','Customer satisfaction: 60/100','Digital engagement: 45%','Personalization: none (generic product pushes)','Revenue per customer: $400 (benchmark $800)','NPS: 15 (benchmark 45)','Competitor: JPMorgan (personalized at scale)','Data: transaction history, demographics, behavior'],
    frameworkHints: ['AI/ML customer segmentation and next-best-action','Personalized financial health scoring','Contextual product recommendations','Hyper-personalized communication (email, push, in-app)','Privacy and consent management framework'],
    expectedCalculations: ['Cross-sell rate: 2% to 15%','Revenue per customer: $400 to $800','Customer satisfaction: 60 to 80/100','NPS improvement: 15 to 45','Digital engagement: 45% to 75%'],
    successCriteria: ['AI personalization strategy','Customer data and segmentation platform','Next-best-action engine design','Personalization use cases and roadmap','Financial model with $2B revenue uplift']
  },
  {
    id: 'dt-23', title: 'Supply Chain Control Tower',
    category: 'Digital Transformation', industry: 'Supply Chain / Retail', difficulty: 'Expert',
    prompt: 'A consumer goods company ($15B revenue, 500 suppliers, 20 warehouses) has zero end-to-end supply chain visibility. They want to build a control tower for real-time visibility and predictive analytics.',
    context: '500 suppliers, 20 warehouses, 100 distribution points. Current: batch updates, 24-hour lag. Disruptions cost $500M annually in expedited shipping and lost sales.',
    keyFacts: ['Revenue: $15B','Suppliers: 500','Warehouses: 20','Distribution points: 100','Current visibility: batch (24h lag)','Disruption cost: $500M annually','Expedited shipping: $200M annually','Inventory excess: $1B above optimal','Demand forecast accuracy: 70%','Supply chain cost: 15% of revenue ($2.25B)','Competitor: Unilever (control tower), P&G (digital SC)'],
    frameworkHints: ['Real-time supply chain visibility platform','Predictive disruption detection and alerts','Dynamic inventory rebalancing engine','Control tower operations and response protocols','Integration with 500 suppliers and 20 warehouses'],
    expectedCalculations: ['Expedited shipping reduction: $200M to $80M','Disruption cost reduction: $500M to $200M','Inventory optimization: $1B to $600M','Demand forecast accuracy: 70% to 90%','Response time to disruption: 24h to 2h'],
    successCriteria: ['Supply chain control tower strategy','Platform architecture and data integration','Predictive analytics and disruption management','Supplier and warehouse integration','Financial model with $820M annual savings']
  },

  // ============================================================
  // TURNAROUND / RESTRUCTURING — 17 cases
  // ============================================================
  {
    id: 'tr-07', title: 'Airline Fleet Restructuring',
    category: 'Turnaround / Restructuring', industry: 'Aviation / Airlines', difficulty: 'Expert',
    prompt: 'An airline ($15B revenue) is losing $2B annually with an aging fleet, high fuel costs, and unprofitable routes. They need a complete turnaround to survive.',
    context: '200 aircraft (avg age 14 years, benchmark 8). Fuel cost: 35% of revenue (benchmark 25%). Load factor: 72% (benchmark 85%). Routes: 150 (40% unprofitable).',
    keyFacts: ['Revenue: $15B','Net loss: -$2B annually','Fleet: 200 aircraft (avg age 14 years, benchmark 8)','Fuel cost: 35% of revenue ($5.25B)','Load factor: 72% (benchmark 85%)','Routes: 150 (40% unprofitable = 60 routes)','Passengers: 50M/year','Employee count: 45,000 (need 30,000)','Debt: $12B','Cash: $1.5B (6 months runway)','Competitors: 5 major airlines, 3 LCCs','Labor cost: 30% of revenue (benchmark 25%)'],
    frameworkHints: ['Fleet renewal strategy (retire old, order efficient aircraft)','Route profitability analysis and network optimization','Cost reduction: fuel hedging, maintenance optimization','Revenue management and yield improvement','Workforce restructuring: 15,000 positions','Debt restructuring with creditors'],
    expectedCalculations: ['Fleet fuel efficiency improvement: 35% to 25%','Route pruning: eliminate 60 unprofitable routes','Cost reduction: $3B over 2 years','Load factor improvement: 72% to 82%','Debt reduction from $12B to $8B'],
    successCriteria: ['Comprehensive airline turnaround strategy','Fleet and network optimization plan','Cost reduction and restructuring program','Revenue improvement and market positioning','Financial model and creditor negotiation plan']
  },
  {
    id: 'tr-08', title: 'Retail Chain Store Closures and Rebrand',
    category: 'Turnaround / Restructuring', industry: 'Retail', difficulty: 'Hard',
    prompt: 'A department store chain ($8B revenue, 400 stores) is losing $1B annually. 40% of stores are unprofitable. They need to close 150 stores, rebrand, and transform digitally.',
    context: '400 stores in malls (60%) and off-mall (40%). Revenue declining 10% annually. E-commerce: 8% of sales (benchmark 30%). Brand perception: dated.',
    keyFacts: ['Revenue: $8B (declining 10% annually)','Stores: 400 (150 to close)','Unprofitable stores: 40% (160 stores)','Net loss: -$1B annually','E-commerce: 8% of sales (benchmark 30%)','Mall concentration: 60%','Avg store size: 100K sq ft','Inventory: $3B (turns: 2x, benchmark 4x)','Lease obligations: $4B (avg 5 years)','Employee count: 30,000 (to reduce to 20,000)','Brand awareness: 60% (declining)','Competitor: Nordstrom (thriving), Sears (failed)'],
    frameworkHints: ['Store closure strategy (which 150, exit costs, timeline)','Brand repositioning and marketing relaunch','E-commerce acceleration (from 8% to 30%)','Inventory reduction and supply chain optimization','Workforce restructuring and severance planning','Lease renegotiation and exit strategy'],
    expectedCalculations: ['Store closures: 150 stores saving $600M annually','Revenue loss from closures: $1.5B','Digital revenue: 8% to 30% = $2.4B','Inventory reduction: $3B to $1.5B','Net improvement: break-even in 2 years'],
    successCriteria: ['Turnaround strategy with store closure plan','Brand repositioning and digital transformation','Workforce and lease restructuring','E-commerce acceleration strategy','Financial model with break-even timeline']
  },
  {
    id: 'tr-09', title: 'Telecom Subscriber Loss Crisis',
    category: 'Turnaround / Restructuring', industry: 'Telecommunications', difficulty: 'Hard',
    prompt: 'A telecom operator ($12B revenue) is losing 500K subscribers quarterly to competitors. Net Promoter Score: -20. Network quality complaints: 40% of calls.',
    context: 'Subscribers declining from 20M to 18M. Churn rate: 3% monthly (benchmark 1.5%). ARPU: $45 (benchmark $55). Network: 60% 4G coverage (benchmark 95% 5G).',
    keyFacts: ['Revenue: $12B (declining)','Subscribers: 18M (losing 500K/quarter)','Churn rate: 3% monthly (benchmark 1.5%)','ARPU: $45 (benchmark $55)','NPS: -20 (benchmark +30)','Network complaints: 40% of calls','4G coverage: 60% (competitors 95% 5G)','Net loss: -$500M annually','Market share: 15% (was 25%)','Fiber coverage: 20%','Competitors: 3 operators, 2 with 5G','Workforce: 8,000 (20% overstaffed)'],
    frameworkHints: ['Network quality rapid improvement plan','Customer retention and win-back program','Competitive pricing and value proposition','Digital customer experience overhaul','Operational cost restructuring'],
    expectedCalculations: ['Subscriber loss: 500K/quarter to net positive','Churn reduction: 3% to 1.5%','ARPU improvement: $45 to $55','NPS improvement: -20 to +20','Return to profitability in 18 months'],
    successCriteria: ['Telecom turnaround strategy','Network improvement and 5G deployment','Customer retention and acquisition plan','Pricing and product restructuring','Financial model with subscriber recovery projections']
  },
  {
    id: 'tr-10', title: 'Auto Parts Manufacturer Electric Transition',
    category: 'Turnaround / Restructuring', industry: 'Automotive / Manufacturing', difficulty: 'Expert',
    prompt: 'An auto parts manufacturer ($6B revenue) makes 80% ICE components. EV adoption is threatening their core business. They need to pivot to EV components while managing ICE decline.',
    context: '80% revenue from ICE components (declining 15% annually). 20% from electronics. Need to become 50% EV-compatible in 3 years. 10 factories, 8 designed for ICE.',
    keyFacts: ['Revenue: $6B (80% ICE, 20% electronics)','ICE revenue declining: 15% annually','EV trend: 40% of new cars by 2028','Factories: 10 (8 ICE-specific)','Workers: 15,000 (5,000 ICE-specific skills)','Customer base: 20 OEMs (15 ICE, 5 EV)','R&D spend: $200M (80% ICE, need 80% EV)','Competitor: Bosch (60% EV-ready), Continental','Technology gap: no battery, motor, or power electronics','Investment needed: $2B for EV transition','Timeline: 3 years to be 50% EV-compatible'],
    frameworkHints: ['EV component strategy (battery, motor, power electronics, thermal)','Factory retooling and automation','Customer win-back from ICE to EV programs','R&D reallocation and talent acquisition','Strategic partnerships or acquisitions for EV technology'],
    expectedCalculations: ['EV revenue: 20% to 50% in 3 years','ICE decline management: minimize revenue loss','Factory conversion: 8 ICE to 5 EV-ready','R&D reallocation: 80% EV by Year 1','Customer retention: keep 15 ICE accounts while winning EV business'],
    successCriteria: ['EV transition turnaround strategy','Factory and capability transformation plan','Customer and market strategy','Talent and organization redesign','Financial model with $2B investment and 5-year ROI']
  },
  {
    id: 'tr-11', title: 'Hospital Network Financial Recovery',
    category: 'Turnaround / Restructuring', industry: 'Healthcare / Hospital Network', difficulty: 'Hard',
    prompt: 'A hospital network ($4B revenue, 8 hospitals) is hemorrhaging $400M annually. Three rural hospitals are unprofitable, payer mix is deteriorating, and physician turnover is 25%.',
    context: '8 hospitals: 5 urban (profitable), 3 rural (losing $200M). Payer mix: 40% Medicare/Medicaid (reimburses 60% of cost). Physician turnover: 25%. ER diversion rate: 15%.',
    keyFacts: ['Revenue: $4B','Net loss: -$400M annually','Hospitals: 8 (5 urban profitable, 3 rural losing $200M)','Payer mix: 40% government (Medicare/Medicaid)','Physician turnover: 25% (benchmark 10%)','ER diversion rate: 15%','Bed occupancy: 55% (benchmark 80%)','Length of stay: 5.5 days (benchmark 4.5)','IT systems: 4 different EHRs','Malpractice insurance: rising 20% annually','Community: rural hospitals are sole providers'],
    frameworkHints: ['Service line rationalization (what to keep, what to close)','Payer strategy: value-based care contracts','Physician recruitment and retention program','Operational efficiency: LEAN Six Sigma','Rural hospital transformation (critical access, telemedicine)','IT consolidation and interoperability'],
    expectedCalculations: ['Net loss reduction: -$400M to break-even','Rural hospital strategy: close, convert, or restructure','Physician turnover: 25% to 10%','Bed occupancy: 55% to 75%','Length of stay: 5.5 to 4.5 days'],
    successCriteria: ['Hospital network turnaround strategy','Service line and rural hospital restructuring','Payer and revenue cycle optimization','Physician retention and operational efficiency','Financial model with break-even in 18 months']
  },
  {
    id: 'tr-12', title: 'Consumer Packaged Goods Brand Revival',
    category: 'Turnaround / Restructuring', industry: 'Consumer Packaged Goods', difficulty: 'Medium',
    prompt: 'A legacy CPG brand ($5B revenue) has lost 30% market share in 5 years to DTC competitors. Brand perception is outdated. They need to revitalize while maintaining core customers.',
    context: '50-year-old brand, $5B revenue (was $7B). Market share declining 6% annually. DTC competitors growing 40% annually. Core customer aging (avg 55, target 35).',
    keyFacts: ['Revenue: $5B (was $7B, declining 6% annually)','Market share: 12% (was 18%)','DTC competitors: growing 40% annually','Core customer avg age: 55 (target 35)','Brand awareness: 80% (but low relevance for under 40)','Distribution: 90% retail (benchmark: 60% retail, 40% DTC)','Digital: 5% of sales (benchmark 25%)','Innovation: 1 new product/year (benchmark 10)','Marketing spend: $500M (80% TV, 20% digital)','Competitor: 20+ DTC brands collectively taking 15% share','E-commerce: Amazon #1 seller, no DTC presence'],
    frameworkHints: ['Brand repositioning for younger demographics','DTC channel launch and e-commerce acceleration','Product innovation pipeline (10 launches/year)','Marketing mix shift: TV to digital/social/influencer','Retail partner strategy evolution'],
    expectedCalculations: ['Revenue stabilization: stop 6% annual decline','DTC revenue: 0% to 25% of sales ($1.25B)','Digital marketing ROI: 3x vs traditional','New customer acquisition: 1M under-40 customers/year','Market share recovery: 12% to 15%'],
    successCriteria: ['Brand turnaround and revitalization strategy','DTC and digital transformation plan','Product innovation pipeline','Marketing and channel strategy','Financial model with market share recovery targets']
  },
  {
    id: 'tr-13', title: 'Restaurant Chain Operational Overhaul',
    category: 'Turnaround / Restructuring', industry: 'Food & Beverage / Restaurants', difficulty: 'Easy',
    prompt: 'A fast-casual chain ($2B revenue, 800 locations) is losing market share. Food costs: 35% (benchmark 28%). Wait time: 12 minutes (benchmark 5). Customer satisfaction: 3.2/5.',
    context: '800 locations, avg revenue $2.5M/location. Food costs 35%, labor 30%, rent 15%. Profit margin: -2% (benchmark 8%). Drive-through: 40% of orders, 12 min avg wait.',
    keyFacts: ['Revenue: $2B (800 locations)','Avg revenue per location: $2.5M','Food cost: 35% (benchmark 28%)','Labor cost: 30% (benchmark 25%)','Rent: 15% (benchmark 10%)','Profit margin: -2% (benchmark 8%)','Drive-through wait: 12 min (benchmark 5)','Customer satisfaction: 3.2/5','Digital orders: 15% (benchmark 40%)','Delivery: 10% (through 3rd party, 30% commission)','Employee turnover: 120% annually'],
    frameworkHints: ['Menu engineering for food cost optimization','Kitchen workflow and speed improvement','Digital ordering and drive-through technology','Labor scheduling optimization','Delivery channel strategy (reduce 3rd party dependence)'],
    expectedCalculations: ['Food cost: 35% to 28% = $140M savings','Labor cost: 30% to 25% = $100M savings','Drive-through time: 12 min to 5 min','Digital orders: 15% to 40%','Net margin improvement: -2% to 8% = $200M profit'],
    successCriteria: ['Restaurant turnaround strategy','Menu and food cost optimization','Digital and drive-through improvement','Labor and operational efficiency','Financial model with margin recovery plan']
  },
  {
    id: 'tr-14', title: 'Industrial Conglomerate Divestiture Strategy',
    category: 'Turnaround / Restructuring', industry: 'Industrial / Conglomerate', difficulty: 'Expert',
    prompt: 'A conglomerate ($30B revenue, 5 business units) is trading at a 30% conglomerate discount. Shareholders want breakup. They need to decide: divest, spin-off, or restructure.',
    context: '5 units: chemicals ($10B, 8% margin), packaging ($8B, 12%), automation ($6B, 15%), services ($4B, 5%), real estate ($2B, 20%). Total market cap: $15B (should be $22B).',
    keyFacts: ['Revenue: $30B (5 business units)','Market cap: $15B (conglomerate discount: 30%)','Units: Chemicals ($10B, 8%), Packaging ($8B, 12%), Automation ($6B, 15%), Services ($4B, 5%), Real estate ($2B, 20%)','Debt: $10B','Overhead: $1.5B corporate (5% of revenue)','Synergies: $500M between units','Board pressure: activist investor demanding breakup','CEO tenure: 2 years (turnaround mandate)','Regulatory: antitrust for some divestitures','Timeline: 18 months for transformation'],
    frameworkHints: ['Portfolio analysis: hold, divest, or spin-off each unit','Valuation analysis: sum-of-parts vs conglomerate','Separation costs and dis-synergies','Management team reallocation','Shareholder communication and governance reform'],
    expectedCalculations: ['Conglomerate discount elimination: $15B to $22B market cap','Divestiture proceeds from services and real estate: $6B','Corporate overhead reduction: $1.5B to $500M','Debt reduction: $10B to $6B','Focus: 3 core units with 10%+ margins'],
    successCriteria: ['Portfolio restructuring strategy','Divestiture and spin-off recommendations','Valuation and financial modeling','Governance and shareholder value plan','Execution roadmap with 18-month timeline']
  },
  {
    id: 'tr-15', title: 'Banking NPL Crisis Resolution',
    category: 'Turnaround / Restructuring', industry: 'Banking / Financial Services', difficulty: 'Expert',
    prompt: 'A bank ($30B assets) has 15% non-performing loans (NPLs) from a real estate portfolio collapse. They need to clean up the balance sheet while maintaining operations.',
    context: 'NPL ratio: 15% ($4.5B). Provision for credit losses: $2B. Capital adequacy: 8% (minimum 10.5%). Liquidity ratio: 90% (minimum 100%).',
    keyFacts: ['Assets: $30B','NPLs: 15% ($4.5B, mostly real estate)','Provision for credit losses: $2B','Capital adequacy: 8% (minimum 10.5%)','Liquidity ratio: 90% (minimum 100%)','Deposits: $20B (30% wholesale funded)','Real estate exposure: 40% of loan book ($12B)','NPL resolution rate: 20% (benchmark 60%)','Legal proceedings: 500 cases pending','NII margin: 3.2% (benchmark 3.5%)','Regulatory: under supervision, remediation plan required'],
    frameworkHints: ['NPL resolution strategy (restructure, provision, sell, or write-off)','Real estate asset management and recovery','Capital raising strategy (equity, sub-debt, asset sales)','Deposit base strengthening','Regulatory compliance and remediation','Asset-liability management'],
    expectedCalculations: ['NPL ratio: 15% to 5% in 3 years','Capital adequacy: 8% to 12%','Liquidity ratio: 90% to 110%','NPL resolution: recover 50% of $4.5B ($2.25B)','Cost of resolution: $1B in provisions and write-offs'],
    successCriteria: ['NPL resolution and balance sheet cleanup strategy','Capital strengthening and regulatory compliance','Asset management and recovery plan','Deposit and funding strategy','Financial model with 3-year NPL reduction roadmap']
  },
  {
    id: 'tr-16', title: 'Tech Startup Profitability Pivot',
    category: 'Turnaround / Restructuring', industry: 'Technology / SaaS', difficulty: 'Medium',
    prompt: 'A SaaS startup ($200M ARR) is burning $150M/year. Growth has slowed to 20% (was 80%). They need to reach profitability within 18 months or face shutdown.',
    context: 'ARR: $200M (growing 20%, was 80%). Burn: $150M/year. Cash: $100M (8 months runway). Customers: 5,000. Churn: 15% (benchmark 5%). CAC: $50K (LTV: $100K).',
    keyFacts: ['ARR: $200M (growth slowing: 80% to 20%)','Burn rate: $150M/year','Cash: $100M (8 months runway)','Customers: 5,000','Churn rate: 15% (benchmark 5%)','CAC: $50K (LTV: $100K, LTV/CAC = 2x, benchmark 5x)','Employees: 2,000 (target: 1,200)','Gross margin: 60% (benchmark 80%)','NDR: 90% (benchmark 120%)','Pricing: $40K ACV','Competitors: 10 well-funded alternatives'],
    frameworkHints: ['Aggressive cost reduction to extend runway','Churn reduction and customer success overhaul','Pricing and packaging optimization','Gross margin improvement (cloud cost optimization)','Revenue focus: land-and-expand strategy'],
    expectedCalculations: ['Burn rate reduction: $150M to $30M/month','Churn reduction: 15% to 5%','Gross margin: 60% to 80%','LTV/CAC: 2x to 5x','Path to profitability: EBITDA positive in 18 months'],
    successCriteria: ['Startup turnaround and profitability pivot strategy','Cost reduction and runway extension plan','Customer retention and revenue optimization','Pricing and unit economics improvement','Financial model with 18-month profitability path']
  },
  {
    id: 'tr-17', title: 'Pharmaceutical Patent Cliff Response',
    category: 'Turnaround / Restructuring', industry: 'Pharmaceuticals', difficulty: 'Hard',
    prompt: 'A pharma company ($20B revenue) faces a $8B revenue cliff when its top drug loses patent exclusivity in 2 years. Pipeline is weak. They need to bridge the gap.',
    context: 'Top drug: $8B revenue (40% of total), patent cliff in 2 years. Pipeline: 3 late-stage drugs, combined peak sales $2B. Generic competition expected to capture 80% within 12 months.',
    keyFacts: ['Revenue: $20B ($8B from top drug, 40%)','Patent cliff: 2 years','Generic erosion: 80% within 12 months ($6.4B loss)','Pipeline: 3 late-stage drugs (peak sales $2B combined)','R&D spend: $3B (15% of revenue)','Cash: $5B','M&A budget: $10B available','Workforce: 30,000','Sales force: 5,000 (focused on top drug)','Regulatory: 2 ANDAs filed by generics companies','Competitor: 3 companies with generic versions ready'],
    frameworkHints: ['Patent cliff mitigation (authorized generics, litigation, settlements)','Pipeline acceleration (fast-track approvals, label expansion)','M&A for pipeline acquisition (buy revenue to bridge gap)','Cost restructuring for post-cliff revenue level','Lifecycle management (new formulations, combinations)'],
    expectedCalculations: ['Revenue gap: $8B loss, need to cover $4B+ through new sources','Pipeline acceleration: bring 1 drug forward 6 months','M&A: acquire $2B+ revenue product','Cost restructuring: reduce $3B to match post-cliff revenue','Cash deployment: optimal mix of M&A vs R&D'],
    successCriteria: ['Patent cliff response strategy','M&A and pipeline acceleration plan','Cost and revenue restructuring','Lifecycle management and legal strategy','Financial model with revenue bridge plan']
  },
  {
    id: 'tr-18', title: 'Logistics Company Union Restructuring',
    category: 'Turnaround / Restructuring', industry: 'Logistics / Transportation', difficulty: 'Hard',
    prompt: 'A trucking company ($3B revenue) has a unionized workforce with restrictive work rules. Labor costs are 45% of revenue (benchmark 30%). They need to renegotiate or restructure.',
    context: 'Union workforce: 10,000 drivers, 2,000 dock workers. Labor cost: 45% of revenue ($1.35B). Work rules: no cross-training, strict seniority, 23% absenteeism. Non-union competitors: 30% labor cost.',
    keyFacts: ['Revenue: $3B','Labor cost: 45% ($1.35B, benchmark 30%)','Union workers: 12,000 (10K drivers, 2K dock)','Work rules: no cross-training, strict seniority','Absenteeism: 23% (benchmark 5%)','Contract expiration: 8 months','Non-union competitors: 30% labor cost','Profit margin: -1% (benchmark 8%)','Safety record: above industry average','Customer satisfaction: declining','Strike risk: high if negotiations fail'],
    frameworkHints: ['Union contract renegotiation strategy','Operational flexibility improvements','Technology investment to reduce labor dependency','Workforce transition planning (if strike)','Non-union facility expansion strategy'],
    expectedCalculations: ['Labor cost: 45% to 35% = $300M savings','Absenteeism: 23% to 8%','Productivity improvement: 20%','Strike risk mitigation and contingency plan','Margin improvement: -1% to 8% = $270M profit'],
    successCriteria: ['Labor restructuring and union negotiation strategy','Operational flexibility and technology plan','Contingency and strike preparedness','Non-union expansion strategy','Financial model with $300M labor cost reduction']
  },
  {
    id: 'tr-19', title: 'Education Institution Revenue Diversification',
    category: 'Turnaround / Restructuring', industry: 'Education / Higher Education', difficulty: 'Medium',
    prompt: 'A university ($800M revenue) is 90% dependent on tuition. Enrollment is declining 5% annually. They need to diversify to survive.',
    context: 'Enrollment: 15,000 (was 20,000, declining 5%/year). Tuition: 90% of revenue. Endowment: $500M. Deferred maintenance: $200M. Faculty: 800.',
    keyFacts: ['Revenue: $800M (90% tuition = $720M)','Enrollment: 15,000 (declining 5%/year, was 20K)','Tuition dependence: 90%','Endowment: $500M','Deferred maintenance: $200M','Faculty: 800 (20% nearing retirement)','Student satisfaction: 60/100','Alumni giving rate: 15% (benchmark 25%)','Online programs: minimal','Research funding: $50M (benchmark $150M)','Competitor: 10 similar institutions in region'],
    frameworkHints: ['Revenue diversification: corporate training, online, research','Enrollment recovery through new programs and marketing','Alumni engagement and giving improvement','Endowment growth strategy','Cost structure optimization'],
    expectedCalculations: ['Tuition dependence: 90% to 60% in 5 years','New revenue streams: $200M from corporate, online, research','Enrollment: stabilize at 15K, grow to 18K','Endowment growth: $500M to $800M','Deferred maintenance: reduce from $200M to $50M'],
    successCriteria: ['Revenue diversification strategy','Enrollment and program innovation plan','Alumni and endowment strategy','Cost optimization and facilities plan','Financial model with 5-year revenue mix targets']
  },
  {
    id: 'tr-20', title: 'Energy Company Coal-to-Renewables Transition',
    category: 'Turnaround / Restructuring', industry: 'Energy / Utilities', difficulty: 'Expert',
    prompt: 'An energy company ($10B revenue) generates 70% from coal. Regulatory and market pressures are forcing a transition to renewables. They need to transition while managing $5B in stranded assets.',
    context: '70% coal ($7B), 20% gas, 10% renewables. Coal declining 10% annually. Regulatory: carbon tax proposed. Stranded assets: $5B coal plants. Workers: 8,000 in coal operations.',
    keyFacts: ['Revenue: $10B (70% coal, 20% gas, 10% renewables)','Coal revenue: $7B (declining 10% annually)','Stranded asset risk: $5B coal plants','Carbon tax risk: $500M annually if enacted','Workers: 8,000 in coal operations','Regulatory: 2050 net-zero mandates in 12 states','Capital available: $3B over 5 years','Competitor: NextEra (largest wind/solar), Duke (coal exit)','Technology: no renewable development capability','Grid infrastructure: aging, needs $1B upgrade','Political: coal communities dependent on operations'],
    frameworkHints: ['Renewables development strategy (wind, solar, storage)','Coal plant retirement schedule and asset write-down','Just transition plan for coal workers and communities','Gas as bridge fuel strategy','Carbon capture and storage evaluation','Regulatory and policy engagement'],
    expectedCalculations: ['Renewable capacity: 10% to 50% in 10 years','Coal phase-down: 70% to 20%','Stranded asset management: minimize write-downs','Worker transition: retrain or severance for 8,000','Revenue stability during transition: <5% annual decline'],
    successCriteria: ['Energy transition turnaround strategy','Renewables development and investment plan','Coal retirement and asset management','Just transition and workforce plan','Financial model with 10-year transition roadmap']
  },
  {
    id: 'tr-21', title: 'Media Company Cord-Cutting Survival',
    category: 'Turnaround / Restructuring', industry: 'Media / Telecommunications', difficulty: 'Hard',
    prompt: 'A cable company ($8B revenue) is losing 500K subscribers quarterly to cord-cutting. They need to transform from cable to broadband/entertainment platform.',
    context: 'Subscribers declining from 8M to 6M. Cord-cutting: 500K/quarter. Broadband: 3M subscribers (growing). Content: no owned content. OTT: no offering.',
    keyFacts: ['Revenue: $8B (cable 60%, broadband 30%, other 10%)','Subscribers: 6M (declining 500K/quarter from 8M)','Broadband: 3M subscribers (growing 10% annually)','Cord-cutting rate: 500K/quarter','Content: no owned content','OTT: no offering','Competitors: Netflix, YouTube TV, Hulu','Infrastructure: DOCSIS 3.1, fiber limited','Customer satisfaction: 3.5/5','Churn: 2% monthly (benchmark 1.5%)','Employee count: 25,000'],
    frameworkHints: ['Broadband-first strategy (upgrade infrastructure)','OTT streaming platform launch','Content acquisition and bundling','Customer retention: bundles, pricing, service','Workforce transformation from cable to digital'],
    expectedCalculations: ['Broadband: 3M to 6M subscribers in 3 years','OTT subscribers: 0 to 2M','Cable decline: manage to $2B from $5B','Total revenue: maintain $8B through diversification','Customer retention: churn from 2% to 1.2%'],
    successCriteria: ['Cord-cutting survival and transformation strategy','Broadband infrastructure and growth plan','OTT and content strategy','Customer retention and pricing','Financial model with revenue diversification']
  },
  {
    id: 'tr-22', title: 'Professional Services Firm Digitization',
    category: 'Turnaround / Restructuring', industry: 'Professional Services / Consulting', difficulty: 'Medium',
    prompt: 'A mid-tier accounting firm ($500M revenue) is losing clients to Big 4 and tech-enabled competitors. Utilization: 65% (benchmark 80%). They need to digitize or die.',
    context: '2,000 professionals, 200 partners. Revenue declining 8% annually. Clients: 500 (losing 10% to Big 4). Technology: basic Excel/Word. No AI, no automation.',
    keyFacts: ['Revenue: $500M (declining 8% annually)','Professionals: 2,000','Partners: 200','Clients: 500 (losing 10%/year to Big 4)','Utilization: 65% (benchmark 80%)','Technology: basic Excel/Word, no AI','No automation: manual audit/tax processes','Competitor: Big 4 (tech-enabled), tech startups','Pricing pressure: 20% below Big 4','Talent: losing recruits to Big 4 and tech'],
    frameworkHints: ['Digital transformation: AI-powered audit and tax tools','Automation of routine compliance work','Data analytics and advisory services expansion','Talent modernization and digital skills','Client experience and platform upgrade'],
    expectedCalculations: ['Revenue decline: reverse from -8% to +5%','Utilization: 65% to 80%','Client retention: stop 10% annual loss','New revenue: data analytics advisory ($50M/year)','Talent retention improvement'],
    successCriteria: ['Digital transformation strategy for professional services','AI and automation implementation','Advisory services expansion','Talent and client experience modernization','Financial model with revenue recovery plan']
  },
  {
    id: 'tr-23', title: 'Aerospace Supply Chain Crisis Recovery',
    category: 'Turnaround / Restructuring', industry: 'Aerospace / Defense', difficulty: 'Expert',
    prompt: 'An aerospace supplier ($8B revenue) has critical quality issues causing production halts at 3 major OEM customers. They face potential loss of $4B in contracts.',
    context: '3 OEM customers: Boeing (40% of revenue), Airbus (30%), Lockheed (20%). Quality escapes: 12 in 6 months. Production halts: 3 (costing $2B to customers). Potential contract loss: $4B.',
    keyFacts: ['Revenue: $8B','Customer concentration: Boeing 40%, Airbus 30%, Lockheed 20%','Quality escapes: 12 in 6 months (benchmark: 0-1)','Production halts at customers: 3','Contract loss risk: $4B','Quality cost: $500M (rework, scrap, warranty)','Workforce: 15,000','Facilities: 8 plants','ITAR compliance: critical','Regulatory: FAA/EASA scrutiny increasing','Competitor: 3 qualified alternates ready to step in'],
    frameworkHints: ['Root cause analysis and quality system overhaul','Customer recovery and relationship rebuilding','Quality management system (AS9100) certification','Manufacturing process improvement (Six Sigma)','Supply chain quality management','Regulatory compliance and communication'],
    expectedCalculations: ['Quality escapes: 12 to 0 per year','Production halts: eliminate completely','Customer retention: keep 100% of $8B contracts','Quality cost: $500M to $100M','Regulatory compliance: zero findings'],
    successCriteria: ['Quality crisis recovery and turnaround strategy','Customer relationship recovery plan','Quality management system overhaul','Manufacturing and supply chain improvement','Financial model with quality cost reduction targets']
  },
]
export function getAllExpandedCases(): CaseData[] {
  return expandedCases;
}
