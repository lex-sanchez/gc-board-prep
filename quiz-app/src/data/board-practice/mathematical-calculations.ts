import type { StudySection } from '@/types/board-practice'

export const mathematicalCalculationsSections: StudySection[] = [
  {
    id: 'bayesian-analysis',
    title: 'Bayesian Analysis Fundamentals',
    content: `
      <h3>🧮 Bayesian Analysis</h3>
      
      <h4>Fundamental Concept</h4>
      <p>Bayesian analysis updates probability estimates based on new information (test results).</p>
      
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>Formula:</strong></p>
        <code>Posterior Probability = (Prior Probability × Likelihood) / Total Probability</code>
      </div>
      
      <h4>Key Components</h4>
      <ul>
        <li><strong>Prior probability:</strong> Risk before testing</li>
        <li><strong>Likelihood:</strong> Probability of test result given disease status</li>
        <li><strong>Posterior probability:</strong> Risk after testing</li>
      </ul>
      
      <h4>Step-by-Step Approach</h4>
      
      <h5>Step 1: Set up 2×2 table</h5>
      <table class="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2"></th>
            <th class="border border-gray-300 p-2">Disease (+)</th>
            <th class="border border-gray-300 p-2">Disease (-)</th>
            <th class="border border-gray-300 p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Test (+)</td>
            <td class="border border-gray-300 p-2">a</td>
            <td class="border border-gray-300 p-2">b</td>
            <td class="border border-gray-300 p-2">a+b</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Test (-)</td>
            <td class="border border-gray-300 p-2">c</td>
            <td class="border border-gray-300 p-2">d</td>
            <td class="border border-gray-300 p-2">c+d</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Total</td>
            <td class="border border-gray-300 p-2">a+c</td>
            <td class="border border-gray-300 p-2">b+d</td>
            <td class="border border-gray-300 p-2">N</td>
          </tr>
        </tbody>
      </table>
      
      <h5>Step 2: Calculate cell values</h5>
      <ul>
        <li><strong>a</strong> = Prior probability × Sensitivity × Population</li>
        <li><strong>b</strong> = (1 - Prior probability) × (1 - Specificity) × Population</li>
        <li><strong>c</strong> = Prior probability × (1 - Sensitivity) × Population</li>
        <li><strong>d</strong> = (1 - Prior probability) × Specificity × Population</li>
      </ul>
      
      <h5>Step 3: Calculate posterior probabilities</h5>
      <ul>
        <li><strong>Positive Predictive Value (PPV)</strong> = a/(a+b)</li>
        <li><strong>Negative Predictive Value (NPV)</strong> = d/(c+d)</li>
      </ul>
      
      <h4>Worked Example: BRCA Testing</h4>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Scenario:</strong></p>
        <ul>
          <li>Woman with strong family history</li>
          <li>Prior probability of BRCA mutation = 20%</li>
          <li>Test sensitivity = 95%</li>
          <li>Test specificity = 99%</li>
          <li>Population = 1000 women</li>
        </ul>
      </div>
      
      <p><strong>Step 1: Calculate cell values</strong></p>
      <ul>
        <li>a = 0.20 × 0.95 × 1000 = 190</li>
        <li>b = 0.80 × 0.01 × 1000 = 8</li>
        <li>c = 0.20 × 0.05 × 1000 = 10</li>
        <li>d = 0.80 × 0.99 × 1000 = 792</li>
      </ul>
      
      <p><strong>Results:</strong></p>
      <ul>
        <li><strong>PPV</strong> = 190/198 = 96.0%</li>
        <li><strong>NPV</strong> = 792/802 = 98.8%</li>
      </ul>
      
      <div class="bg-yellow-50 p-4 rounded-lg">
        <p><strong>Interpretation:</strong></p>
        <ul>
          <li>If test positive: 96% chance of having mutation</li>
          <li>If test negative: 98.8% chance of not having mutation</li>
        </ul>
      </div>
    `,
    importance: 3,
    estimatedReadTime: 8
  },
  {
    id: 'sensitivity-specificity',
    title: 'Sensitivity and Specificity Calculations',
    content: `
      <h3>📊 Sensitivity and Specificity</h3>
      
      <h4>Definitions</h4>
      <ul>
        <li><strong>Sensitivity:</strong> Probability test is positive when disease is present</li>
        <li><strong>Specificity:</strong> Probability test is negative when disease is absent</li>
      </ul>
      
      <h4>Formulas</h4>
      <ul>
        <li><strong>Sensitivity</strong> = a/(a+c) = True Positives / All Disease Positive</li>
        <li><strong>Specificity</strong> = d/(b+d) = True Negatives / All Disease Negative</li>
        <li><strong>PPV</strong> = a/(a+b) = True Positives / All Test Positive</li>
        <li><strong>NPV</strong> = d/(c+d) = True Negatives / All Test Negative</li>
      </ul>
      
      <h4>Memory Aid: "SNOUT and SPIN"</h4>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>SN</strong>out: High <strong>Se</strong><strong>N</strong>sitivity rules <strong>OUT</strong> disease (good NPV)</li>
          <li><strong>SP</strong>in: High <strong>SP</strong>ecificity rules <strong>IN</strong> disease (good PPV)</li>
        </ul>
      </div>
      
      <h4>Practice Problem: PKU Screening</h4>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Scenario:</strong> Newborn screening for phenylketonuria (PKU)</p>
        <ul>
          <li>500,000 newborns screened</li>
          <li>PKU prevalence: 1 in 10,000 (0.01%)</li>
          <li>Test sensitivity: 98%</li>
          <li>Test specificity: 99.8%</li>
        </ul>
      </div>
      
      <p><strong>Step 1: Determine disease prevalence</strong></p>
      <ul>
        <li>Disease positive: 500,000 × 0.0001 = 50</li>
        <li>Disease negative: 500,000 - 50 = 499,950</li>
      </ul>
      
      <p><strong>Step 2: Calculate test results</strong></p>
      <ul>
        <li>a (True Positive): 50 × 0.98 = 49</li>
        <li>c (False Negative): 50 × 0.02 = 1</li>
        <li>d (True Negative): 499,950 × 0.998 = 498,950</li>
        <li>b (False Positive): 499,950 × 0.002 = 1,000</li>
      </ul>
      
      <h5>Complete Table</h5>
      <table class="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2"></th>
            <th class="border border-gray-300 p-2">PKU (+)</th>
            <th class="border border-gray-300 p-2">PKU (-)</th>
            <th class="border border-gray-300 p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Screen (+)</td>
            <td class="border border-gray-300 p-2">49</td>
            <td class="border border-gray-300 p-2">1,000</td>
            <td class="border border-gray-300 p-2">1,049</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Screen (-)</td>
            <td class="border border-gray-300 p-2">1</td>
            <td class="border border-gray-300 p-2">498,950</td>
            <td class="border border-gray-300 p-2">498,951</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Total</td>
            <td class="border border-gray-300 p-2">50</td>
            <td class="border border-gray-300 p-2">499,950</td>
            <td class="border border-gray-300 p-2">500,000</td>
          </tr>
        </tbody>
      </table>
      
      <p><strong>Results:</strong></p>
      <ul>
        <li><strong>Sensitivity:</strong> 49/50 = 98%</li>
        <li><strong>Specificity:</strong> 498,950/499,950 = 99.8%</li>
        <li><strong>PPV:</strong> 49/1,049 = 4.7%</li>
        <li><strong>NPV:</strong> 498,950/498,951 = 99.9998%</li>
      </ul>
      
      <div class="bg-yellow-50 p-4 rounded-lg">
        <p><strong>Clinical Interpretation:</strong></p>
        <ul>
          <li>Positive screen has only 4.7% chance of true PKU</li>
          <li>Negative screen virtually rules out PKU</li>
          <li>Many false positives require follow-up testing</li>
        </ul>
      </div>
    `,
    importance: 3,
    estimatedReadTime: 7
  },
  {
    id: 'hardy-weinberg',
    title: 'Hardy-Weinberg Equilibrium',
    content: `
      <h3>🧬 Hardy-Weinberg Equilibrium</h3>
      
      <h4>Fundamental Principle</h4>
      <p>In a population at equilibrium, allele and genotype frequencies remain constant across generations.</p>
      
      <h4>Conditions Required</h4>
      <ol>
        <li>No mutations</li>
        <li>No natural selection</li>
        <li>No gene flow (migration)</li>
        <li>Large population size</li>
        <li>Random mating</li>
      </ol>
      
      <h4>Basic Formula</h4>
      <p>For a gene with two alleles (A and a):</p>
      <ul>
        <li><strong>p</strong> = frequency of allele A</li>
        <li><strong>q</strong> = frequency of allele a</li>
        <li><strong>p + q = 1</strong></li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>Genotype frequencies:</strong></p>
        <ul>
          <li><strong>AA:</strong> p²</li>
          <li><strong>Aa:</strong> 2pq</li>
          <li><strong>aa:</strong> q²</li>
        </ul>
        <p><strong>Check:</strong> p² + 2pq + q² = 1</p>
      </div>
      
      <h4>Carrier Frequency Calculations</h4>
      
      <h5>Example 1: Cystic Fibrosis</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Given:</strong> CF affects 1 in 2,500 Caucasians</p>
      </div>
      
      <p><strong>Step 1: Calculate q²</strong></p>
      <p>q² = 1/2,500 = 0.0004</p>
      
      <p><strong>Step 2: Calculate q</strong></p>
      <p>q = √0.0004 = 0.02</p>
      
      <p><strong>Step 3: Calculate p</strong></p>
      <p>p = 1 - q = 1 - 0.02 = 0.98</p>
      
      <p><strong>Step 4: Calculate carrier frequency</strong></p>
      <p>Carrier frequency = 2pq = 2 × 0.98 × 0.02 = 0.0392</p>
      <p><strong>Carrier frequency = 1 in 25 (approximately)</strong></p>
      
      <h5>Example 2: Tay-Sachs in Ashkenazi Jews</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Given:</strong> Tay-Sachs affects 1 in 3,600 Ashkenazi Jewish births</p>
      </div>
      
      <p><strong>Calculations:</strong></p>
      <ul>
        <li>q² = 1/3,600 = 0.000278</li>
        <li>q = √0.000278 = 0.0167</li>
        <li>p = 1 - 0.0167 = 0.9833</li>
        <li>Carrier frequency = 2pq = 2 × 0.9833 × 0.0167 = 0.0328</li>
        <li><strong>Carrier frequency = 1 in 30</strong></li>
      </ul>
      
      <h4>X-linked Calculations</h4>
      
      <p>For X-linked recessive conditions:</p>
      <ul>
        <li><strong>Affected males</strong> = q (frequency of recessive allele)</li>
        <li><strong>Carrier females</strong> = 2pq</li>
        <li><strong>Affected females</strong> = q²</li>
      </ul>
      
      <h5>Example: Hemophilia A</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Given:</strong> Affects 1 in 5,000 males</p>
      </div>
      
      <p><strong>Calculations:</strong></p>
      <ul>
        <li>q = 1/5,000 = 0.0002</li>
        <li>p = 1 - 0.0002 = 0.9998</li>
        <li><strong>Carrier females</strong> = 2pq = 2 × 0.9998 × 0.0002 = 0.0004</li>
        <li><strong>Carrier frequency = 1 in 2,500 females</strong></li>
        <li><strong>Affected females</strong> = q² = (0.0002)² = 0.00000004 = 1 in 25,000,000</li>
      </ul>
    `,
    importance: 3,
    estimatedReadTime: 8
  },
  {
    id: 'risk-calculations',
    title: 'Risk Calculations and Modifications',
    content: `
      <h3>🧮 Risk Calculations</h3>
      
      <h4>Empiric Risk Modification</h4>
      
      <h5>Neural Tube Defects</h5>
      <ul>
        <li><strong>Background risk:</strong> 1-2 per 1,000</li>
        <li><strong>After one affected child:</strong> 3-5%</li>
        <li><strong>After two affected children:</strong> 10-15%</li>
      </ul>
      
      <h5>Autism Spectrum Disorder</h5>
      <ul>
        <li><strong>Background risk:</strong> ~1%</li>
        <li><strong>One affected sibling:</strong> 10-20%</li>
        <li><strong>Two affected siblings:</strong> 25-35%</li>
      </ul>
      
      <h4>Mendelian Risk Calculations</h4>
      
      <h5>Autosomal Recessive</h5>
      <p><strong>Both parents carriers:</strong> 25% risk each pregnancy</p>
      
      <p><strong>Risk modification by testing:</strong></p>
      <ul>
        <li>If fetus tests negative: Risk reduced to near 0%</li>
        <li>If one parent not a carrier: Risk = 0%</li>
      </ul>
      
      <h5>Autosomal Dominant</h5>
      <p><strong>One parent affected:</strong> 50% risk each pregnancy</p>
      
      <p><strong>Risk modification:</strong></p>
      <ul>
        <li>Reduced penetrance: Risk × penetrance</li>
        <li>Variable expressivity: Risk same, severity variable</li>
      </ul>
      
      <h5>X-linked Recessive</h5>
      <p><strong>Carrier mother:</strong></p>
      <ul>
        <li>50% risk for each son to be affected</li>
        <li>50% risk for each daughter to be a carrier</li>
      </ul>
      
      <h4>Consanguinity Risk Calculations</h4>
      
      <h5>First Cousin Mating</h5>
      <p><strong>Coefficient of inbreeding</strong> = 1/16 = 0.0625</p>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p><strong>Increased risk calculation:</strong></p>
        <ul>
          <li>Background risk for birth defects: 3-4%</li>
          <li>Additional risk from consanguinity: 2-3%</li>
          <li><strong>Total risk: 5-7%</strong></li>
        </ul>
      </div>
      
      <p><strong>For specific autosomal recessive conditions:</strong></p>
      <p>Risk = (Carrier frequency)² × (1 + coefficient of inbreeding)</p>
      
      <h4>Practice Problems</h4>
      
      <h5>Problem 1: Bayesian Analysis</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p>A 35-year-old woman has a 1% prior risk for a genetic condition. She undergoes testing with 90% sensitivity and 95% specificity. If her test is positive, what is her risk of having the condition?</p>
      </div>
      
      <p><strong>Solution steps:</strong></p>
      <ol>
        <li>Set up table with population of 10,000</li>
        <li>Calculate cells: a=90, b=495, c=10, d=9,405</li>
        <li>PPV = 90/(90+495) = 90/585 = 15.4%</li>
      </ol>
      
      <h5>Problem 2: Hardy-Weinberg</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p>Sickle cell disease affects 1 in 400 African Americans. What is the carrier frequency?</p>
      </div>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>q² = 1/400 = 0.0025</li>
        <li>q = √0.0025 = 0.05</li>
        <li>p = 1 - 0.05 = 0.95</li>
        <li>Carrier frequency = 2pq = 2 × 0.95 × 0.05 = 0.095 = 1 in 10.5</li>
      </ol>
      
      <h5>Problem 3: Risk Calculation</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p>Two carrier parents for an autosomal recessive condition plan three children. What is the probability that all three will be unaffected?</p>
      </div>
      
      <p><strong>Solution:</strong></p>
      <ul>
        <li>Risk each child affected = 25%</li>
        <li>Risk each child unaffected = 75%</li>
        <li>Risk all three unaffected = 0.75³ = 0.422 = 42.2%</li>
      </ul>
    `,
    importance: 2,
    estimatedReadTime: 6
  },
  {
    id: 'quick-reference',
    title: 'Quick Reference Formulas',
    content: `
      <h3>📚 Common Formulas Quick Reference</h3>
      
      <h4>Bayesian Analysis</h4>
      <ul>
        <li><strong>PPV</strong> = True Positives / (True Positives + False Positives)</li>
        <li><strong>NPV</strong> = True Negatives / (True Negatives + False Negatives)</li>
      </ul>
      
      <h4>Test Characteristics</h4>
      <ul>
        <li><strong>Sensitivity</strong> = True Positives / (True Positives + False Negatives)</li>
        <li><strong>Specificity</strong> = True Negatives / (True Negatives + False Positives)</li>
      </ul>
      
      <h4>Hardy-Weinberg</h4>
      <ul>
        <li><strong>Allele frequencies:</strong> p + q = 1</li>
        <li><strong>Genotype frequencies:</strong> p² + 2pq + q² = 1</li>
        <li><strong>Carrier frequency:</strong> 2pq</li>
      </ul>
      
      <h4>Risk Calculations</h4>
      <ul>
        <li><strong>Autosomal recessive:</strong> 25% if both parents carriers</li>
        <li><strong>Autosomal dominant:</strong> 50% if one parent affected</li>
        <li><strong>X-linked recessive:</strong> 50% for sons of carrier mothers</li>
      </ul>
      
      <h4>Exam Strategy Tips</h4>
      
      <h5>Time Management</h5>
      <ul>
        <li><strong>Set up tables systematically</strong> - don't rush</li>
        <li><strong>Use consistent variable names</strong> (p, q for Hardy-Weinberg)</li>
        <li><strong>Double-check calculations</strong> with calculator</li>
        <li><strong>Round appropriately</strong> for final answers</li>
      </ul>
      
      <h5>Common Mistakes to Avoid</h5>
      <ul>
        <li><strong>Confusing sensitivity/specificity</strong> with PPV/NPV</li>
        <li><strong>Forgetting to square</strong> allele frequency for disease frequency</li>
        <li><strong>Mixing up</strong> prior and posterior probabilities</li>
        <li><strong>Calculation errors</strong> from rushing</li>
      </ul>
      
      <h5>Memory Aids</h5>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>"SPIN and SNOUT"</strong> for test characteristics</li>
          <li><strong>"p squared, 2pq, q squared"</strong> for Hardy-Weinberg</li>
          <li><strong>"Prior × Likelihood = Posterior"</strong> for Bayesian thinking</li>
        </ul>
      </div>
      
      <h4>Step-by-Step Checklists</h4>
      
      <h5>Bayesian Analysis Checklist</h5>
      <ol>
        <li>✓ Identify prior probability</li>
        <li>✓ Identify test sensitivity and specificity</li>
        <li>✓ Set up 2×2 table</li>
        <li>✓ Calculate all four cells</li>
        <li>✓ Calculate PPV and NPV</li>
        <li>✓ Interpret results clinically</li>
      </ol>
      
      <h5>Hardy-Weinberg Checklist</h5>
      <ol>
        <li>✓ Identify disease frequency (q²)</li>
        <li>✓ Calculate allele frequency (q)</li>
        <li>✓ Calculate normal allele frequency (p)</li>
        <li>✓ Calculate carrier frequency (2pq)</li>
        <li>✓ Convert to "1 in X" format</li>
        <li>✓ Consider population-specific variations</li>
      </ol>
      
      <h5>Sensitivity/Specificity Checklist</h5>
      <ol>
        <li>✓ Understand what test measures</li>
        <li>✓ Set up 2×2 table correctly</li>
        <li>✓ Calculate true/false positives and negatives</li>
        <li>✓ Remember: sensitivity relates to disease-positive; specificity to disease-negative</li>
        <li>✓ Interpret PPV and NPV in clinical context</li>
      </ol>
      
      <h4>Key Points for Board Exam</h4>
      
      <h5>Bayesian Analysis</h5>
      <ul>
        <li>Updates probability based on test results</li>
        <li>Requires prior probability and test characteristics</li>
        <li>PPV and NPV depend on disease prevalence</li>
        <li>Higher prevalence → higher PPV</li>
      </ul>
      
      <h5>Hardy-Weinberg</h5>
      <ul>
        <li>p + q = 1 (allele frequencies)</li>
        <li>p² + 2pq + q² = 1 (genotype frequencies)</li>
        <li>Carrier frequency = 2pq</li>
        <li>Used for population genetics calculations</li>
      </ul>
      
      <h5>Test Characteristics</h5>
      <ul>
        <li>Sensitivity: how well test detects disease</li>
        <li>Specificity: how well test excludes disease</li>
        <li>PPV: probability of disease if test positive</li>
        <li>NPV: probability of no disease if test negative</li>
      </ul>
      
      <h5>Clinical Applications</h5>
      <ul>
        <li>Bayesian analysis for genetic counseling</li>
        <li>Hardy-Weinberg for carrier screening programs</li>
        <li>Test characteristics for screening program evaluation</li>
        <li>Risk calculations for family planning</li>
      </ul>
    `,
    importance: 2,
    estimatedReadTime: 6
  }
]