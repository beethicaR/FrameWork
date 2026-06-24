import { CaseData } from '../data/cases';

const categories = [
  'Market Entry', 'Profitability', 'Pricing Strategy', 'Growth Strategy',
  'Operations / Supply Chain', 'M&A / Corporate Strategy', 'Digital Transformation', 'Turnaround / Restructuring', 'New Business / Innovation'
];

const industries: Record<string, string[]> = {
  'Market Entry': ['Technology', 'Healthcare', 'Finance', 'Retail', 'Energy', 'Manufacturing', 'Consumer Goods', 'Logistics', 'Education', 'Real Estate'],
  'Profitability': ['SaaS', 'Manufacturing', 'Retail', 'Healthcare', 'Hospitality', 'Airlines', 'Banking', 'Telecom', 'Mining', 'Media'],
  'Pricing Strategy': ['Software', 'Pharmaceuticals', 'Airlines', 'Hospitality', 'Automotive', 'Insurance', 'Consulting', 'Luxury Goods', 'Agriculture', 'Construction'],
  'Growth Strategy': ['E-commerce', 'Fintech', 'Healthcare', 'Education', 'Food & Beverage', 'Fashion', 'Logistics', 'Energy', 'Media', 'Gaming'],
  'Operations / Supply Chain': ['Manufacturing', 'Retail', 'Logistics', 'Healthcare', 'Food', 'Automotive', 'Aerospace', 'Pharmaceuticals', 'Technology', 'Energy'],
  'M&A / Corporate Strategy': ['Technology', 'Healthcare', 'Financial Services', 'Energy', 'Consumer Goods', 'Industrial', 'Media', 'Telecom', 'Pharma', 'Retail'],
  'Digital Transformation': ['Insurance', 'Banking', 'Manufacturing', 'Retail', 'Healthcare', 'Education', 'Government', 'Energy', 'Logistics', 'Media'],
  'Turnaround / Restructuring': ['Retail', 'Airlines', 'Manufacturing', 'Hospitality', 'Media', 'Banking', 'Healthcare', 'Technology', 'Energy', 'Construction'],
  'New Business / Innovation': ['Automotive', 'Banking', 'Energy', 'Healthcare', 'Technology', 'Consumer Products', 'Logistics', 'Agriculture', 'Education', 'Entertainment']
};

const difficulties: Array<'Easy' | 'Medium' | 'Hard' | 'Expert'> = ['Easy', 'Medium', 'Hard', 'Expert'];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCase(id: number, category: string): CaseData {
  const industry = randomItem(industries[category] || ['General']);
  const difficulty = randomItem(difficulties);
  
  const prompts: Record<string, string[]> = {
    'Market Entry': [
      `A leading ${industry} company wants to enter the Southeast Asian market. Design a market entry strategy.`,
      `A European ${industry} firm is considering expansion into Latin America. How should they proceed?`,
      `A US-based ${industry} company wants to enter the Indian market. What is the optimal entry strategy?`,
      `A Japanese ${industry} manufacturer wants to establish presence in Africa. Design the approach.`,
      `A Chinese ${industry} company is looking at European markets. How should they enter?`,
      `A Middle Eastern ${industry} firm wants to expand into North America. Design the strategy.`,
      `An Australian ${industry} company is considering entry into the UK market. Recommend an approach.`,
      `A Canadian ${industry} startup wants to launch in the Middle East. Design the go-to-market.`,
      `A Korean ${industry} giant wants to enter the Brazilian market. How should they proceed?`,
      `An Indian ${industry} company is looking at Australian expansion. Design the entry strategy.`
    ],
    'Profitability': [
      `A ${industry} company has seen margins decline from 15% to 5% over 3 years. Diagnose and fix profitability.`,
      `A ${industry} firm is burning cash despite strong revenue growth. How can they achieve profitability?`,
      `A ${industry} company faces rising costs and shrinking margins. Design a cost transformation.`,
      `A ${industry} business has flat revenue but increasing costs. Restore profitability.`,
      `A ${industry} company's EBITDA has dropped 40% in 2 years. Turn around the business.`,
      `A ${industry} firm has high customer acquisition costs. Improve unit economics.`,
      `A ${industry} company is losing market share to cheaper competitors. Fix profitability.`,
      `A ${industry} business has inefficient operations driving margin compression. Optimize.`,
      `A ${industry} company's gross margins are eroding due to input cost inflation. Restore margins.`,
      `A ${industry} firm has high overhead costs relative to revenue. Right-size the cost structure.`
    ],
    'Pricing Strategy': [
      `A ${industry} company is launching a new product. Design the optimal pricing strategy.`,
      `A ${industry} firm wants to increase prices without losing customers. How should they proceed?`,
      `A ${industry} company is considering a freemium model. Design the pricing tiers.`,
      `A ${industry} business faces price pressure from competitors. Develop a pricing strategy.`,
      `A ${industry} company wants to move from one-time sales to subscription. Design the pricing.`,
      `A ${industry} firm needs to price a premium product in a value-conscious market. How?`,
      `A ${industry} company is implementing dynamic pricing. Design the strategy.`,
      `A ${industry} business wants to introduce usage-based pricing. Design the model.`,
      `A ${industry} company is entering a new market with different purchasing power. Price accordingly.`,
      `A ${industry} firm wants to optimize their discounting strategy. Design the approach.`
    ],
    'Growth Strategy': [
      `A ${industry} company wants to accelerate growth from 5% to 20% annually. Design the growth strategy.`,
      `A ${industry} firm has plateaued in their home market. Identify growth opportunities.`,
      `A ${industry} company wants to expand into adjacent markets. Design the expansion.`,
      `A ${industry} business wants to grow through M&A. Identify acquisition targets.`,
      `A ${industry} company wants to launch a new product line. Design the go-to-market.`,
      `A ${industry} firm wants to expand internationally. Prioritize target markets.`,
      `A ${industry} company wants to grow through partnerships. Design the alliance strategy.`,
      `A ${industry} business wants to enter the B2B space. Design the transition.`,
      `A ${industry} company wants to scale their platform business. Design the growth plan.`,
      `A ${industry} firm wants to diversify into new segments. Evaluate opportunities.`
    ],
    'Operations / Supply Chain': [
      `A ${industry} company has high logistics costs. Optimize the supply chain.`,
      `A ${industry} firm has inventory management issues. Redesign operations.`,
      `A ${industry} company wants to implement just-in-time manufacturing. Design the approach.`,
      `A ${industry} business has quality control issues. Improve operations.`,
      `A ${industry} company wants to nearshore their supply chain. Evaluate and design.`,
      `A ${industry} firm has long lead times. Reduce time to market.`,
      `A ${industry} company has high waste in their operations. Implement lean.`,
      `A ${industry} business wants to automate their warehouse. Design the automation strategy.`,
      `A ${industry} company has supplier concentration risk. Diversify the supply base.`,
      `A ${industry} firm wants to implement Industry 4.0. Design the transformation.`
    ],
    'M&A / Corporate Strategy': [
      `A ${industry} company is considering acquiring a competitor. Evaluate the deal.`,
      `A ${industry} firm wants to roll up fragmented competitors. Design the M&A strategy.`,
      `A ${industry} company is considering a merger of equals. Evaluate strategic rationale.`,
      `A ${industry} business wants to divest a non-core division. Design the carve-out.`,
      `A ${industry} company is considering a joint venture in Asia. Evaluate the opportunity.`,
      `A ${industry} firm wants to acquire a tech startup. Design the integration plan.`,
      `A ${industry} company is considering a cross-border acquisition. Evaluate risks.`,
      `A ${industry} business wants to spin off a division. Design the IPO strategy.`,
      `A ${industry} company is considering a strategic partnership. Evaluate options.`,
      `A ${industry} firm wants to acquire a company in a new market. Design the entry.`
    ],
    'Digital Transformation': [
      `A ${industry} company wants to modernize their legacy systems. Design the transformation.`,
      `A ${industry} firm wants to implement AI across their operations. Design the strategy.`,
      `A ${industry} company wants to move to the cloud. Design the migration.`,
      `A ${industry} business wants to improve their data analytics capabilities. Design the approach.`,
      `A ${industry} company wants to implement IoT across their operations. Design the strategy.`,
      `A ${industry} firm wants to develop a mobile app for customers. Design the product.`,
      `A ${industry} company wants to automate their customer service. Design the solution.`,
      `A ${industry} business wants to implement blockchain. Evaluate use cases.`,
      `A ${industry} company wants to improve their cybersecurity posture. Design the program.`,
      `A ${industry} firm wants to implement robotic process automation. Design the rollout.`
    ],
    'Turnaround / Restructuring': [
      `A ${industry} company is in financial distress. Design a turnaround plan.`,
      `A ${industry} firm has declining revenue and rising costs. Restructure the business.`,
      `A ${industry} company is facing bankruptcy. Design a rescue plan.`,
      `A ${industry} business has lost market share. Turn around the decline.`,
      `A ${industry} company has high debt and low cash. Restructure the balance sheet.`,
      `A ${industry} firm has operational inefficiencies. Fix the business model.`,
      `A ${industry} company is losing key customers. Develop a retention strategy.`,
      `A ${industry} business has a toxic culture. Turn around the organization.`,
      `A ${industry} company has failed product launches. Revitalize the portfolio.`,
      `A ${industry} firm has poor unit economics. Fix the business model.`
    ],
    'New Business / Innovation': [
      `A ${industry} company wants to launch a new business model. Design the venture.`,
      `A ${industry} firm wants to develop a subscription service. Design the offering.`,
      `A ${industry} company wants to enter the sustainability space. Design the initiative.`,
      `A ${industry} business wants to launch a platform business. Design the model.`,
      `A ${industry} company wants to develop a circular economy strategy. Design the approach.`,
      `A ${industry} firm wants to create a new customer segment. Design the offering.`,
      `A ${industry} company wants to launch a direct-to-consumer channel. Design the strategy.`,
      `A ${industry} business wants to develop a data monetization strategy. Design the model.`,
      `A ${industry} company wants to enter the gig economy. Design the platform.`,
      `A ${industry} firm wants to launch a sustainability-focused product line. Design the offering.`
    ]
  };

  const contextTemplates: Record<string, string[]> = {
    'Market Entry': [
      `The company has $500M in annual revenue and is looking for growth. They have no presence in the target region.`,
      `The firm is a market leader in their home country with 20% market share. They want to replicate success internationally.`,
      `The company has a strong product but limited international experience. They need to enter quickly.`,
      `The firm has $1B revenue and wants to diversify geographically. The target market is growing at 15% annually.`,
      `The company has a patented technology and wants to monetize it in new markets.`
    ],
    'Profitability': [
      `The company has $1B in revenue but margins have been declining for 3 consecutive years.`,
      `The firm is profitable but below industry benchmarks. There is pressure from investors to improve.`,
      `The company has strong growth but negative cash flow. They need to achieve profitability.`,
      `The firm has flat revenue but rising costs. Margins have compressed from 12% to 4%.`,
      `The company is burning $10M per month and has 18 months of runway.`
    ],
    'Pricing Strategy': [
      `The company has a strong product but is underpricing relative to value.`,
      `The firm faces intense price competition and needs to differentiate.`,
      `The company is launching in a new market with different price sensitivity.`,
      `The firm wants to move from product sales to recurring revenue.`,
      `The company has a cost advantage and wants to price competitively.`
    ],
    'Growth Strategy': [
      `The company is a market leader but growth has slowed to 2% annually.`,
      `The firm has $50M in cash and wants to accelerate growth.`,
      `The company has a strong brand but limited geographic reach.`,
      `The firm wants to expand from B2C to B2B markets.`,
      `The company has a successful product in one segment and wants to expand.`
    ],
    'Operations / Supply Chain': [
      `The company has grown rapidly but operations have not scaled efficiently.`,
      `The firm has high logistics costs relative to competitors.`,
      `The company has experienced supply chain disruptions and wants to build resilience.`,
      `The firm has quality issues that are damaging their brand.`,
      `The company wants to reduce their carbon footprint while improving efficiency.`
    ],
    'M&A / Corporate Strategy': [
      `The company has $2B to deploy for acquisitions.`,
      `The firm is considering a transformative deal that would double their size.`,
      `The company has received an acquisition offer and must decide.`,
      `The firm wants to consolidate a fragmented market.`,
      `The company is considering a joint venture to enter a new market.`
    ],
    'Digital Transformation': [
      `The company is running on legacy systems that are costly to maintain.`,
      `The firm wants to leverage data and AI to gain competitive advantage.`,
      `The company has been slow to adopt digital technologies.`,
      `The firm wants to improve customer experience through technology.`,
      `The company has a digital strategy but poor execution.`
    ],
    'Turnaround / Restructuring': [
      `The company has lost 40% of its value in 2 years.`,
      `The firm is facing bankruptcy and needs immediate action.`,
      `The company has a strong brand but poor financial performance.`,
      `The firm has been mismanaged and needs a complete overhaul.`,
      `The company has a viable business but unsustainable cost structure.`
    ],
    'New Business / Innovation': [
      `The company wants to diversify beyond their core business.`,
      `The firm sees a major market shift and wants to adapt.`,
      `The company has a strong culture of innovation but needs focus.`,
      `The firm wants to create a new revenue stream.`,
      `The company has resources to invest in new ventures.`
    ]
  };

  const prompt = randomItem(prompts[category] || prompts['Market Entry']);
  const context = randomItem(contextTemplates[category] || contextTemplates['Market Entry']);

  const keyFacts = [
    `Industry: ${industry}`,
    `Market size: $${(Math.random() * 50 + 5).toFixed(0)}B`,
    `Growth rate: ${(Math.random() * 20 + 2).toFixed(0)}% annually`,
    `Competition: 3-5 major players`,
    `Company revenue: $${(Math.random() * 5 + 0.5).toFixed(1)}B`,
    `Profit margin: ${(Math.random() * 15 + 2).toFixed(0)}%`,
    `Customer base: ${(Math.random() * 10 + 0.5).toFixed(1)}M`,
    `Employees: ${(Math.random() * 50 + 1).toFixed(0)}K`,
    `Geographic presence: ${Math.floor(Math.random() * 20 + 1)} countries`,
    `Technology maturity: ${randomItem(['Early', 'Growing', 'Mature', 'Disruptive'])}`
  ];

  const frameworkHints = [
    'Analyze the current situation and identify key issues',
    'Evaluate strategic options and trade-offs',
    'Develop a detailed implementation plan',
    'Consider financial implications and ROI',
    'Assess risks and mitigation strategies'
  ];

  const expectedCalculations = [
    'Market sizing and opportunity assessment',
    'Financial projections and ROI analysis',
    'Cost-benefit analysis of different approaches',
    'Sensitivity analysis on key assumptions'
  ];

  const successCriteria = [
    'Clear strategic recommendation with rationale',
    'Quantified financial impact',
    'Implementation roadmap with milestones',
    'Risk assessment and mitigation plan',
    'Stakeholder alignment and communication plan'
  ];

  return {
    id: `${category.toLowerCase().replace(/\s+/g, '-')}-${id}`,
    title: `${industry} ${category} Case ${id}`,
    category,
    industry,
    difficulty,
    prompt,
    context,
    keyFacts,
    frameworkHints,
    expectedCalculations,
    successCriteria
  };
}

function generateAllCases(): CaseData[] {
  const cases: CaseData[] = [];
  let id = 100; // Start after existing cases

  // Generate 25+ cases per category = 225+ total
  for (const category of categories) {
    const count = 25; // 25 cases per category
    for (let i = 0; i < count; i++) {
      cases.push(generateCase(id++, category));
    }
  }

  return cases;
}

const allGeneratedCases = generateAllCases();

// Output as TypeScript
console.log(`Generated ${allGeneratedCases.length} cases`);
console.log(JSON.stringify(allGeneratedCases, null, 2));