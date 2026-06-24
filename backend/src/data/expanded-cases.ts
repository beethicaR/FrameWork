import { CaseData } from './cases';

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
];

export function getAllExpandedCases(): CaseData[] {
  return expandedCases;
}
