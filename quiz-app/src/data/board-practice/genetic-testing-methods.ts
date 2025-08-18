import type { BoardPracticeSection, QuickReferenceTable } from '@/types/board-practice'

export const geneticTestingMethodsSections: BoardPracticeSection[] = [
  {
    id: 'key-scenario-trio-exome',
    title: '🎯 Key Scenario from Your Practice Exam',
    content: `
      <div class="key-scenario-container">
        <div class="scenario-card mb-6 p-6 border-l-4 border-blue-500 bg-blue-50">
          <h3 class="text-lg font-semibold mb-3 text-blue-800">Trio Exome vs. Direct-to-Consumer Testing (Question 3)</h3>
          
          <div class="clinical-scenario mb-4">
            <p class="text-sm mb-2 italic"><strong>Clinical Scenario:</strong> Diagnostic trio exome sequencing recommended for affected child. Mother excited because she "wanted to buy a DNA test kit from the store."</p>
          </div>

          <div class="best-response mb-4">
            <p class="mb-2"><strong>Best Response:</strong> <span class="text-red-600 font-semibold">Assess mother's understanding of analysis for parental samples in trio exome testing</span></p>
          </div>

          <div class="rationale p-3 bg-white rounded border">
            <h4 class="font-semibold mb-2">Why this matters:</h4>
            <p class="text-sm">Parents often misunderstand the purpose and scope of different genetic tests.</p>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 3,
    tags: ['trio-exome', 'DTC-testing', 'patient-education', 'practice-exam']
  },
  {
    id: 'trio-vs-dtc-comparison',
    title: '🧬 Trio Exome Sequencing vs. Direct-to-Consumer Testing',
    content: `
      <div class="comparison-container">
        <div class="comparison-table-wrapper">
          <table class="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr class="bg-blue-50">
                <th class="border border-gray-300 p-3 text-left font-semibold">Aspect</th>
                <th class="border border-gray-300 p-3 text-left font-semibold">Trio Exome</th>
                <th class="border border-gray-300 p-3 text-left font-semibold">Direct-to-Consumer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Purpose</td>
                <td class="border border-gray-300 p-3">Diagnostic for medical condition</td>
                <td class="border border-gray-300 p-3">Risk assessment/ancestry</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-medium">Medical oversight</td>
                <td class="border border-gray-300 p-3">Required (physician order)</td>
                <td class="border border-gray-300 p-3">None required</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Genes analyzed</td>
                <td class="border border-gray-300 p-3">~20,000 coding regions</td>
                <td class="border border-gray-300 p-3">SNP array (~600K-1M variants)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-medium">Variant interpretation</td>
                <td class="border border-gray-300 p-3">Medical-grade, pathogenicity assessment</td>
                <td class="border border-gray-300 p-3">Consumer-grade, risk estimates</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Family analysis</td>
                <td class="border border-gray-300 p-3">Parents included for inheritance analysis</td>
                <td class="border border-gray-300 p-3">Individual only</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-medium">Secondary findings</td>
                <td class="border border-gray-300 p-3">Actionable findings reported (if elected)</td>
                <td class="border border-gray-300 p-3">Limited/variable</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Cost</td>
                <td class="border border-gray-300 p-3">$3,000-5,000+</td>
                <td class="border border-gray-300 p-3">$100-300</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-medium">Insurance</td>
                <td class="border border-gray-300 p-3">May be covered for medical indication</td>
                <td class="border border-gray-300 p-3">Self-pay</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Results delivery</td>
                <td class="border border-gray-300 p-3">Through genetic counselor/physician</td>
                <td class="border border-gray-300 p-3">Direct to consumer</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-medium">Follow-up</td>
                <td class="border border-gray-300 p-3">Genetic counseling included</td>
                <td class="border border-gray-300 p-3">Limited/none</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Accuracy</td>
                <td class="border border-gray-300 p-3">High for diagnostic variants</td>
                <td class="border border-gray-300 p-3">Variable for risk prediction</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="educational-points-section mt-8">
          <h3 class="text-lg font-semibold mb-4 text-blue-600">🔍 Key Educational Points for Parents</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="trio-purpose p-4 bg-green-50 rounded-lg">
              <h4 class="font-semibold mb-3 text-green-700">Trio Exome Purpose:</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Parental samples help determine if child's variants are inherited or de novo</li>
                <li>De novo variants more likely to be pathogenic</li>
                <li>Improves diagnostic yield and variant interpretation</li>
                <li><strong>Not for parental health screening</strong></li>
              </ul>
            </div>

            <div class="dtc-limitations p-4 bg-red-50 rounded-lg">
              <h4 class="font-semibold mb-3 text-red-700">DTC Testing Limitations:</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Not diagnostic for medical conditions</li>
                <li>Limited gene coverage</li>
                <li>No medical interpretation</li>
                <li>May miss causative variants</li>
                <li>Different technology (SNP array vs. sequencing)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 8,
    tags: ['trio-exome', 'DTC-testing', 'comparison', 'patient-counseling']
  },
  {
    id: 'research-vs-clinical',
    title: '🧬 Research vs. Clinical Testing',
    content: `
      <div class="research-clinical-container">
        <div class="key-point-section mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <h3 class="text-lg font-semibold mb-2 text-yellow-800">Research Participation vs. Clinical Testing (Question 12)</h3>
          <p class="text-red-600 font-semibold">Key Point: Receipt of genetic results is NOT guaranteed from research participation</p>
        </div>

        <div class="comparison-table-wrapper mb-8">
          <table class="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr class="bg-purple-50">
                <th class="border border-gray-300 p-3 text-left font-semibold">Aspect</th>
                <th class="border border-gray-300 p-3 text-left font-semibold">Research Testing</th>
                <th class="border border-gray-300 p-3 text-left font-semibold">Clinical Testing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Primary purpose</td>
                <td class="border border-gray-300 p-3">Advance scientific knowledge</td>
                <td class="border border-gray-300 p-3">Patient care/diagnosis</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-medium">Result return</td>
                <td class="border border-gray-300 p-3"><strong>Variable, often not provided</strong></td>
                <td class="border border-gray-300 p-3">Always provided</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Medical oversight</td>
                <td class="border border-gray-300 p-3">Research protocol</td>
                <td class="border border-gray-300 p-3">Clinical standards</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-medium">Quality standards</td>
                <td class="border border-gray-300 p-3">Research-grade</td>
                <td class="border border-gray-300 p-3">Clinical-grade (CLIA)</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Cost to patient</td>
                <td class="border border-gray-300 p-3">Usually free</td>
                <td class="border border-gray-300 p-3">Patient/insurance pays</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-medium">Timeline</td>
                <td class="border border-gray-300 p-3">Variable, often years</td>
                <td class="border border-gray-300 p-3">Weeks to months</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-medium">Actionability</td>
                <td class="border border-gray-300 p-3">May not meet clinical criteria</td>
                <td class="border border-gray-300 p-3">Medically actionable</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-medium">Follow-up</td>
                <td class="border border-gray-300 p-3">Limited</td>
                <td class="border border-gray-300 p-3">Clinical care team</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="counseling-points-section p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
          <h3 class="text-lg font-semibold mb-3 text-red-800">🚨 Important Counseling Points</h3>
          <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Research participation ≠ clinical care</li>
            <li>Results may never be returned</li>
            <li>Research findings require clinical confirmation</li>
            <li>Separate consent processes</li>
            <li>Different timelines and expectations</li>
          </ul>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 6,
    tags: ['research-testing', 'clinical-testing', 'result-return', 'counseling']
  },
  {
    id: 'testing-methods-overview',
    title: '🧬 Genetic Testing Method Details',
    content: `
      <div class="testing-methods-container">
        <div class="methods-section space-y-8">
          <div class="method-card border rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-4 text-blue-600">Chromosomal Microarray (CMA)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold mb-2 text-green-600">Technology:</h4>
                <p class="text-sm mb-4">SNP array or aCGH</p>
                
                <h4 class="font-semibold mb-2 text-green-600">Detects:</h4>
                <ul class="list-disc pl-6 text-sm space-y-1">
                  <li>Copy number variants (deletions/duplications)</li>
                  <li>Regions of homozygosity (ROH)</li>
                  <li>Uniparental disomy (UPD)</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-2 text-red-600">Cannot detect:</h4>
                <ul class="list-disc pl-6 text-sm space-y-1">
                  <li>Balanced rearrangements</li>
                  <li>Single nucleotide variants</li>
                  <li>Small insertions/deletions</li>
                </ul>
                
                <div class="roh-info mt-4 p-3 bg-yellow-50 rounded">
                  <h4 class="font-semibold mb-2 text-yellow-700">🔍 Regions of Homozygosity (ROH):</h4>
                  <p class="text-sm mb-2"><strong>Significance:</strong> May indicate consanguinity</p>
                  <p class="text-sm"><strong>Consider:</strong> UPD, population isolate effects, cryptic consanguinity</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-card border rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-4 text-purple-600">Sanger Sequencing</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold mb-2 text-green-600">Technology:</h4>
                <p class="text-sm mb-4">Chain termination method</p>
                
                <h4 class="font-semibold mb-2 text-green-600">Best used for:</h4>
                <ul class="list-disc pl-6 text-sm space-y-1">
                  <li>Single gene analysis</li>
                  <li>Confirmation of NGS findings</li>
                  <li>Family member testing for known variants</li>
                  <li><strong>Repetitive sequences</strong> (when NGS struggles)</li>
                </ul>
              </div>
              <div>
                <div class="key-point p-3 bg-green-50 rounded">
                  <h4 class="font-semibold mb-2 text-green-700">🔍 Key Point:</h4>
                  <p class="text-sm">Sanger superior for repetitive sequences, tandem repeats, and regions with high GC content</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-card border rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Next-Generation Sequencing (NGS)</h3>
            
            <div class="ngs-types space-y-6">
              <div class="ngs-type">
                <h4 class="font-semibold mb-3 text-blue-600">Targeted Gene Panels</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div><strong>Coverage:</strong> Specific genes related to phenotype</div>
                  <div><strong>Depth:</strong> High coverage of included genes</div>
                  <div><strong>Cost:</strong> Moderate</div>
                  <div><strong>Turnaround:</strong> Faster than exome/genome</div>
                </div>
              </div>

              <div class="ngs-type">
                <h4 class="font-semibold mb-3 text-purple-600">Exome Sequencing</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div><strong>Coverage:</strong> ~20,000 coding genes (1-2% of genome)</div>
                  <div><strong>Variants:</strong> ~25,000 variants per person</div>
                  <div><strong>Limitations:</strong> Misses intronic, regulatory regions</div>
                </div>
              </div>

              <div class="ngs-type">
                <h4 class="font-semibold mb-3 text-red-600">Genome Sequencing</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div><strong>Coverage:</strong> Entire genome</div>
                  <div><strong>Variants:</strong> ~4-5 million per person</div>
                  <div><strong>Advantages:</strong> Detects structural variants, copy number changes</div>
                  <div><strong>Cost:</strong> Highest, but decreasing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    estimatedReadTime: 10,
    tags: ['CMA', 'sanger-sequencing', 'NGS', 'testing-methods']
  },
  {
    id: 'testing-decision-trees',
    title: '🧬 Testing Decision Trees and Selection',
    content: `
      <div class="decision-trees-container">
        <div class="decision-tree-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-purple-600">When to Use Each Method</h3>
          
          <div class="decision-tree p-6 bg-gray-50 rounded-lg font-mono text-sm">
            <div class="tree-structure">
              <div class="mb-2"><strong>Suspected genetic condition</strong></div>
              <div class="ml-4">
                <div class="mb-2">├── <strong>Specific syndrome suspected</strong></div>
                <div class="ml-8">
                  <div class="mb-1">├── Single gene → Sanger or targeted panel</div>
                  <div class="mb-2">└── Multiple genes → Gene panel</div>
                </div>
                <div class="mb-2">├── <strong>Intellectual disability/autism</strong></div>
                <div class="ml-8">
                  <div class="mb-1">├── First-tier → CMA</div>
                  <div class="mb-2">└── CMA normal → Exome/genome</div>
                </div>
                <div class="mb-2">├── <strong>Multiple congenital anomalies</strong></div>
                <div class="ml-8">
                  <div class="mb-1">├── Chromosomal suspected → Karyotype + CMA</div>
                  <div class="mb-2">└── Single gene suspected → Exome</div>
                </div>
                <div class="mb-2">└── <strong>Family history positive</strong></div>
                <div class="ml-8">
                  <div class="mb-1">├── Known familial variant → Sanger</div>
                  <div>└── Unknown cause → Panel/exome</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="trio-vs-proband-section">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">Trio vs. Proband-Only Testing</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="use-trio p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <h4 class="font-semibold mb-3 text-green-700">Use Trio When:</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Intellectual disability/developmental delay</li>
                <li>Multiple congenital anomalies</li>
                <li>Suspected de novo condition</li>
                <li>Consanguineous parents</li>
                <li>High likelihood of recessive condition</li>
              </ul>
            </div>

            <div class="proband-only p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <h4 class="font-semibold mb-3 text-blue-700">Proband-Only Appropriate When:</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Adult-onset conditions</li>
                <li>Family history suggests dominant pattern</li>
                <li>Cost considerations</li>
                <li>Parents unavailable</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="quality-regulation-section mt-8">
          <h3 class="text-xl font-semibold mb-4 text-red-600">Quality and Regulation</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="clia-section">
              <h4 class="font-semibold mb-3 text-red-700">CLIA (Clinical Laboratory Improvement Amendments):</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Required for clinical testing</li>
                <li>Quality control standards</li>
                <li>Personnel requirements</li>
                <li>Proficiency testing</li>
              </ul>
            </div>

            <div class="cap-section">
              <h4 class="font-semibold mb-3 text-blue-700">CAP (College of American Pathologists):</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Additional accreditation</li>
                <li>Higher standards than CLIA alone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 8,
    tags: ['decision-trees', 'test-selection', 'trio-testing', 'quality-standards']
  }
]

export const geneticTestingMethodsTables: QuickReferenceTable[] = [
  {
    id: 'testing-method-selection',
    title: 'Testing Method Selection Matrix',
    description: 'Quick guide for selecting appropriate genetic testing method',
    headers: ['Clinical Scenario', 'First-Line Test', 'If Normal, Consider'],
    rows: [
      {
        id: 'intellectual-disability',
        cells: ['Intellectual disability/autism', 'CMA', 'Exome sequencing']
      },
      {
        id: 'specific-syndrome',
        cells: ['Specific syndrome suspected', 'Targeted gene panel', 'Exome if panel negative']
      },
      {
        id: 'multiple-anomalies',
        cells: ['Multiple congenital anomalies', 'CMA + karyotype', 'Exome sequencing']
      },
      {
        id: 'family-history',
        cells: ['Known familial variant', 'Sanger sequencing', 'Family studies']
      },
      {
        id: 'adult-onset',
        cells: ['Adult-onset disorder', 'Targeted panel', 'Exome (proband-only)']
      }
    ]
  },
  {
    id: 'test-capabilities-comparison',
    title: 'Testing Technology Capabilities',
    description: 'What each testing method can and cannot detect',
    headers: ['Method', 'Can Detect', 'Cannot Detect'],
    rows: [
      {
        id: 'cma-capabilities',
        cells: ['CMA', 'CNVs, ROH, UPD', 'SNVs, balanced rearrangements']
      },
      {
        id: 'sanger-capabilities',
        cells: ['Sanger', 'SNVs, small indels, repeats', 'CNVs, large rearrangements']
      },
      {
        id: 'exome-capabilities',
        cells: ['Exome', 'Coding SNVs, small indels', 'Intronic variants, large CNVs']
      },
      {
        id: 'genome-capabilities',
        cells: ['Genome', 'All variant types, structural', 'Some repetitive regions']
      }
    ]
  },
  {
    id: 'research-vs-clinical-summary',
    title: 'Research vs Clinical Testing Summary',
    description: 'Key differences between research and clinical genetic testing',
    headers: ['Aspect', 'Research Testing', 'Clinical Testing'],
    rows: [
      {
        id: 'purpose',
        cells: ['Purpose', 'Scientific knowledge', 'Patient diagnosis']
      },
      {
        id: 'result-return',
        cells: ['Result return', 'Variable/often none', 'Always provided']
      },
      {
        id: 'standards',
        cells: ['Quality standards', 'Research-grade', 'CLIA-certified']
      },
      {
        id: 'timeline',
        cells: ['Timeline', 'Years', 'Weeks to months']
      },
      {
        id: 'follow-up',
        cells: ['Follow-up', 'Limited', 'Clinical care team']
      }
    ]
  },
  {
    id: 'quality-indicators',
    title: 'Laboratory Quality Indicators',
    description: 'Key quality markers for genetic testing laboratories',
    headers: ['Quality Marker', 'Requirement', 'Significance'],
    rows: [
      {
        id: 'clia-certification',
        cells: ['CLIA certification', 'Required for clinical testing', 'Basic quality standards']
      },
      {
        id: 'cap-accreditation',
        cells: ['CAP accreditation', 'Optional but preferred', 'Higher standards']
      },
      {
        id: 'medical-oversight',
        cells: ['Medical director', 'Required MD/PhD oversight', 'Clinical interpretation']
      },
      {
        id: 'proficiency-testing',
        cells: ['Proficiency testing', 'Regular external validation', 'Ongoing quality assurance']
      }
    ]
  }
]