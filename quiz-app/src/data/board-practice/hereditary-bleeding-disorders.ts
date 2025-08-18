import type { BoardPracticeSection, QuickReferenceTable } from '@/types/board-practice'

export const hereditaryBleedingSections: BoardPracticeSection[] = [
  {
    id: 'learning-objectives',
    title: '🎯 Learning Objectives',
    content: `
      <div class="objectives-container">
        <p class="mb-4">By the end of this guide, you will be able to:</p>
        <ul class="objectives-list">
          <li>Recognize clinical presentations of hereditary bleeding disorders</li>
          <li>Identify appropriate family history questions for bleeding disorders</li>
          <li>Distinguish between different types of inherited bleeding conditions</li>
          <li>Apply inheritance patterns to bleeding disorder pedigrees</li>
        </ul>
      </div>
    `,
    importance: 2,
    subsections: [],
    estimatedReadTime: 2,
    tags: ['objectives', 'bleeding-disorders']
  },
  {
    id: 'key-clinical-scenario',
    title: '🩸 Key Clinical Scenario from Your Exam',
    content: `
      <div class="clinical-scenario-container">
        <div class="scenario-card mb-6">
          <h3 class="text-lg font-semibold mb-3 text-red-600">13-year-old girl with frequent nosebleeds</h3>
          <p class="mb-3"><strong>Most important family history to elicit:</strong> <span class="text-red-600 font-bold">Gastrointestinal bleeds</span></p>
          
          <div class="rationale-box p-4 bg-blue-50 rounded-lg">
            <h4 class="font-semibold mb-2">Why this matters:</h4>
            <p>This combination (nosebleeds + GI bleeds) is classic for <strong>Hereditary Hemorrhagic Telangiectasia (HHT)</strong></p>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 3,
    tags: ['clinical-scenario', 'HHT', 'nosebleeds', 'family-history']
  },
  {
    id: 'hht-overview',
    title: '🧬 Hereditary Hemorrhagic Telangiectasia (HHT)',
    content: `
      <div class="hht-container">
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3">Also Known As: Osler-Weber-Rendu Syndrome</h3>
        </div>

        <div class="genetics-section mb-8">
          <h3 class="text-lg font-semibold mb-4 text-blue-600">Genetics</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Inheritance:</strong> Autosomal dominant</li>
            <li><strong>Penetrance:</strong> Nearly 100% by age 40</li>
            <li><strong>Genes:</strong>
              <ul class="list-disc pl-6 mt-2">
                <li><strong>ENG</strong> (HHT1) - ~60% of cases</li>
                <li><strong>ACVRL1</strong> (HHT2) - ~30% of cases</li>
                <li><strong>SMAD4</strong> (HHT/JP syndrome) - Rare, associated with juvenile polyposis</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="clinical-features-section mb-8">
          <h3 class="text-lg font-semibold mb-4 text-green-600">Clinical Features (Curaçao Criteria)</h3>
          <p class="mb-4 text-sm text-gray-600 italic">Need 3/4 criteria for definite diagnosis:</p>
          
          <div class="space-y-6">
            <div class="criteria-item">
              <h4 class="font-semibold text-red-600 mb-2">1. Spontaneous recurrent nosebleeds (epistaxis)</h4>
              <ul class="list-disc pl-6 text-sm">
                <li>Most common presenting symptom</li>
                <li>Usually begins in childhood</li>
                <li>Can be severe and frequent</li>
              </ul>
            </div>

            <div class="criteria-item">
              <h4 class="font-semibold text-purple-600 mb-2">2. Telangiectases in characteristic locations</h4>
              <ul class="list-disc pl-6 text-sm">
                <li>Lips, oral cavity, fingers, nose</li>
                <li>Multiple, pinpoint red spots</li>
                <li>Blanch with pressure</li>
              </ul>
            </div>

            <div class="criteria-item">
              <h4 class="font-semibold text-orange-600 mb-2">3. Visceral lesions</h4>
              <ul class="list-disc pl-6 text-sm">
                <li><strong>Pulmonary AVMs</strong> (15-50%)</li>
                <li><strong>Hepatic AVMs</strong> (30-70%)</li>
                <li><strong>Cerebral AVMs</strong> (5-23%)</li>
                <li><strong>GI telangiectases</strong> → GI bleeding</li>
              </ul>
            </div>

            <div class="criteria-item">
              <h4 class="font-semibold text-blue-600 mb-2">4. Family history of HHT in first-degree relative</h4>
            </div>
          </div>
        </div>

        <div class="key-insight-section p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
          <h3 class="text-lg font-semibold mb-3 text-yellow-800">🔍 Why GI Bleeding is the Key Question</h3>
          <ul class="list-disc pl-6 space-y-1 text-sm">
            <li><strong>Nosebleeds alone</strong> are common in childhood (not specific)</li>
            <li><strong>Nosebleeds + GI bleeding</strong> combination is highly suggestive of HHT</li>
            <li>GI bleeding indicates visceral involvement</li>
            <li>May not manifest until adulthood</li>
          </ul>
        </div>

        <div class="management-section mt-8">
          <h3 class="text-lg font-semibold mb-4 text-purple-600">Clinical Management</h3>
          
          <div class="mb-4">
            <h4 class="font-semibold mb-2">Screening for AVMs:</h4>
            <ul class="list-disc pl-6 text-sm">
              <li><strong>Pulmonary:</strong> Chest CT with contrast</li>
              <li><strong>Cerebral:</strong> MRI brain with contrast</li>
              <li><strong>Hepatic:</strong> Usually managed conservatively</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-2">Treatment:</h4>
            <ul class="list-disc pl-6 text-sm">
              <li>Iron supplementation for anemia</li>
              <li>Antifibrinolytics for bleeding</li>
              <li>AVM embolization when indicated</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 12,
    tags: ['HHT', 'autosomal-dominant', 'AVM', 'telangiectases', 'nosebleeds']
  },
  {
    id: 'von-willebrand-disease',
    title: '🩸 Von Willebrand Disease (VWD)',
    content: `
      <div class="vwd-container">
        <div class="overview-section mb-6">
          <p class="text-lg font-semibold text-blue-600 mb-4">Most common inherited bleeding disorder (1% of population)</p>
        </div>

        <div class="types-section space-y-8">
          <div class="type-card border rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-4 text-green-600">Type 1 VWD (70-80% of cases)</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 class="font-semibold mb-2">Inheritance:</h4>
                <p class="text-sm">Autosomal dominant (variable penetrance)</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Features:</h4>
                <p class="text-sm">Mild bleeding, mucocutaneous</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Laboratory:</h4>
                <p class="text-sm">Slightly decreased VWF levels</p>
              </div>
            </div>
          </div>

          <div class="type-card border rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Type 2 VWD (15-20% of cases)</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 class="font-semibold mb-2">Subtypes:</h4>
                <p class="text-sm">2A, 2B, 2M, 2N</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Inheritance:</h4>
                <p class="text-sm">Usually autosomal dominant</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Features:</h4>
                <p class="text-sm">Moderate bleeding</p>
              </div>
            </div>
          </div>

          <div class="type-card border rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-4 text-red-600">Type 3 VWD (<5% of cases)</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 class="font-semibold mb-2">Inheritance:</h4>
                <p class="text-sm">Autosomal recessive</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Features:</h4>
                <p class="text-sm">Severe bleeding, factor VIII deficiency</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Laboratory:</h4>
                <p class="text-sm">Absent VWF</p>
              </div>
            </div>
          </div>
        </div>

        <div class="clinical-features-section mt-8 mb-8">
          <h3 class="text-lg font-semibold mb-4 text-purple-600">Clinical Features</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Mucocutaneous bleeding:</strong> Easy bruising, nosebleeds</li>
            <li><strong>Menorrhagia:</strong> Heavy menstrual periods</li>
            <li><strong>Post-surgical bleeding</strong></li>
            <li><strong>Prolonged bleeding after dental procedures</strong></li>
          </ul>
        </div>

        <div class="family-history-section p-4 bg-blue-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-3 text-blue-800">Family History Questions</h3>
          <ul class="list-disc pl-6 space-y-1 text-sm">
            <li>Heavy menstrual periods in female relatives</li>
            <li>Easy bruising or bleeding after surgery/dental work</li>
            <li>Bleeding requiring hospitalization</li>
          </ul>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 8,
    tags: ['von-willebrand', 'mucocutaneous-bleeding', 'menorrhagia', 'autosomal-dominant']
  },
  {
    id: 'hemophilia',
    title: '🧬 Hemophilia A and B',
    content: `
      <div class="hemophilia-container">
        <div class="overview-section mb-6">
          <p class="text-lg font-semibold text-red-600 mb-4">X-linked recessive bleeding disorders</p>
        </div>

        <div class="types-section space-y-6">
          <div class="hemophilia-card border-l-4 border-red-500 pl-6">
            <h3 class="text-xl font-semibold mb-4 text-red-600">Hemophilia A (Factor VIII deficiency)</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 class="font-semibold mb-2">Incidence:</h4>
                <p class="text-sm">1 in 5,000 male births</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Inheritance:</h4>
                <p class="text-sm">X-linked recessive</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Features:</h4>
                <p class="text-sm">Deep bleeding (muscles, joints)</p>
              </div>
            </div>
          </div>

          <div class="hemophilia-card border-l-4 border-blue-500 pl-6">
            <h3 class="text-xl font-semibold mb-4 text-blue-600">Hemophilia B (Factor IX deficiency)</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 class="font-semibold mb-2">Incidence:</h4>
                <p class="text-sm">1 in 30,000 male births</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Inheritance:</h4>
                <p class="text-sm">X-linked recessive</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Features:</h4>
                <p class="text-sm">Clinically identical to Hemophilia A</p>
              </div>
            </div>
          </div>
        </div>

        <div class="clinical-features-section mt-8 mb-8">
          <h3 class="text-lg font-semibold mb-4 text-purple-600">Clinical Features</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Joint bleeding (hemarthrosis)</strong> - hallmark feature</li>
            <li><strong>Muscle bleeding</strong></li>
            <li><strong>CNS bleeding</strong> (severe cases)</li>
            <li><strong>Post-surgical bleeding</strong></li>
          </ul>
        </div>

        <div class="inheritance-pattern-section p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
          <h3 class="text-lg font-semibold mb-3 text-red-800">Family History Pattern</h3>
          <ul class="list-disc pl-6 space-y-1 text-sm">
            <li>Affected males through unaffected females</li>
            <li><strong>No male-to-male transmission</strong></li>
            <li>Carrier females may have mild bleeding</li>
          </ul>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 6,
    tags: ['hemophilia', 'x-linked', 'factor-deficiency', 'hemarthrosis']
  },
  {
    id: 'clinical-assessment',
    title: '🔍 Clinical Assessment Approach',
    content: `
      <div class="assessment-container">
        <div class="family-history-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">Key Family History Questions for Any Bleeding Disorder</h3>
          
          <div class="questions-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="question-category">
              <h4 class="font-semibold mb-3 text-green-600">1. Location of bleeding</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Nosebleeds (frequency, severity, age of onset)</li>
                <li>GI bleeding (melena, hematochezia)</li>
                <li>Heavy menstrual periods</li>
                <li>Easy bruising</li>
              </ul>
            </div>

            <div class="question-category">
              <h4 class="font-semibold mb-3 text-orange-600">2. Precipitating factors</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Surgery or dental procedures</li>
                <li>Trauma</li>
                <li>Medications (aspirin, anticoagulants)</li>
              </ul>
            </div>

            <div class="question-category">
              <h4 class="font-semibold mb-3 text-red-600">3. Severity indicators</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Hospitalization for bleeding</li>
                <li>Blood transfusions</li>
                <li>Iron deficiency anemia</li>
              </ul>
            </div>

            <div class="question-category">
              <h4 class="font-semibold mb-3 text-purple-600">4. Age of onset</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Childhood vs. adult onset</li>
                <li>Lifelong vs. recent</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="red-flags-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-red-600">Red Flags for Hereditary Bleeding Disorder</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="high-suspicion p-4 bg-red-50 rounded-lg">
              <h4 class="font-semibold mb-3 text-red-700">High Suspicion:</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>Bleeding since childhood</li>
                <li>Family history of bleeding</li>
                <li>Bleeding requiring medical intervention</li>
                <li>Multiple bleeding sites</li>
              </ul>
            </div>

            <div class="specific-combinations p-4 bg-orange-50 rounded-lg">
              <h4 class="font-semibold mb-3 text-orange-700">Specific Combinations:</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li><strong>Nosebleeds + GI bleeding</strong> → Think HHT</li>
                <li><strong>Joint bleeding in males</strong> → Think hemophilia</li>
                <li><strong>Heavy menses + family history</strong> → Think VWD</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="testing-approach-section">
          <h3 class="text-xl font-semibold mb-4 text-purple-600">Diagnostic Testing Approach</h3>
          
          <div class="initial-studies mb-6">
            <h4 class="font-semibold mb-3">Initial Laboratory Studies</h4>
            <ul class="list-disc pl-6 text-sm space-y-1">
              <li><strong>CBC with platelet count</strong></li>
              <li><strong>PT/INR</strong> - Tests extrinsic pathway</li>
              <li><strong>PTT</strong> - Tests intrinsic pathway</li>
              <li><strong>Bleeding time or PFA-100</strong> - Platelet function</li>
            </ul>
          </div>

          <div class="specialized-testing">
            <h4 class="font-semibold mb-3">Specialized Testing Based on Initial Results</h4>
            
            <div class="testing-scenarios space-y-4">
              <div class="scenario p-3 border-l-4 border-blue-400 bg-blue-50">
                <h5 class="font-semibold text-blue-700">Prolonged PTT:</h5>
                <ul class="list-disc pl-6 text-sm mt-2">
                  <li>Factor VIII and IX levels</li>
                  <li>VWF studies (antigen, activity, multimers)</li>
                </ul>
              </div>

              <div class="scenario p-3 border-l-4 border-green-400 bg-green-50">
                <h5 class="font-semibold text-green-700">Normal PT/PTT with bleeding history:</h5>
                <ul class="list-disc pl-6 text-sm mt-2">
                  <li>VWF studies</li>
                  <li>Platelet aggregometry</li>
                  <li>Factor XIII level</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 10,
    tags: ['clinical-assessment', 'family-history', 'laboratory-testing', 'red-flags']
  },
  {
    id: 'inheritance-patterns',
    title: '🧬 Inheritance Patterns and Genetic Counseling',
    content: `
      <div class="inheritance-container">
        <div class="patterns-section space-y-8">
          <div class="pattern-card p-6 border rounded-lg">
            <h3 class="text-xl font-semibold mb-4 text-blue-600">Autosomal Dominant (HHT, Type 1 VWD)</h3>
            <div class="penetrance-info mb-4">
              <p><strong>Penetrance:</strong> Variable, often age-related</p>
            </div>
            <div class="counseling-points">
              <h4 class="font-semibold mb-2">Counseling points:</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>50% risk to each child</li>
                <li>Both sexes equally affected</li>
                <li>Variable severity within families</li>
              </ul>
            </div>
          </div>

          <div class="pattern-card p-6 border rounded-lg">
            <h3 class="text-xl font-semibold mb-4 text-green-600">Autosomal Recessive (Type 3 VWD, rare platelet disorders)</h3>
            <div class="counseling-points">
              <h4 class="font-semibold mb-2">Counseling points:</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li>25% risk if both parents carriers</li>
                <li>Consanguinity increases risk</li>
                <li>Often more severe phenotype</li>
              </ul>
            </div>
          </div>

          <div class="pattern-card p-6 border rounded-lg">
            <h3 class="text-xl font-semibold mb-4 text-red-600">X-linked Recessive (Hemophilia A and B)</h3>
            <div class="counseling-points">
              <h4 class="font-semibold mb-2">Counseling points:</h4>
              <ul class="list-disc pl-6 text-sm space-y-1">
                <li><strong>No male-to-male transmission</strong></li>
                <li>All daughters of affected males are carriers</li>
                <li>50% risk of carrier daughters having affected sons</li>
                <li>Carrier females may have mild bleeding</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="scenarios-section mt-8">
          <h3 class="text-xl font-semibold mb-4 text-purple-600">Clinical Scenarios</h3>
          
          <div class="scenarios space-y-6">
            <div class="scenario-card p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <h4 class="font-semibold mb-2 text-yellow-800">Scenario 1: HHT Recognition</h4>
              <p class="text-sm mb-2 italic">A 25-year-old woman presents with recurrent nosebleeds since childhood. Her father also has frequent nosebleeds. What is the most important additional history to obtain?</p>
              <p class="text-sm mb-1"><strong>Answer:</strong> GI bleeding history in patient and family</p>
              <p class="text-sm"><strong>Rationale:</strong> Nosebleeds + GI bleeding strongly suggests HHT</p>
            </div>

            <div class="scenario-card p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <h4 class="font-semibold mb-2 text-blue-800">Scenario 2: Hemophilia Inheritance</h4>
              <p class="text-sm mb-2 italic">A woman's brother has hemophilia A. She is pregnant with a male fetus. What is the risk the baby will have hemophilia?</p>
              <p class="text-sm mb-1"><strong>Answer:</strong> 25%</p>
              <p class="text-sm"><strong>Rationale:</strong> 50% chance she's a carrier × 50% chance of transmitting = 25%</p>
            </div>

            <div class="scenario-card p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <h4 class="font-semibold mb-2 text-green-800">Scenario 3: VWD vs. Platelet Disorder</h4>
              <p class="text-sm mb-2 italic">A teenager has easy bruising and heavy menstrual periods. Normal platelet count, prolonged bleeding time. What is the most likely diagnosis?</p>
              <p class="text-sm mb-1"><strong>Answer:</strong> Von Willebrand disease</p>
              <p class="text-sm"><strong>Rationale:</strong> Mucocutaneous bleeding with prolonged bleeding time suggests VWF deficiency</p>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 8,
    tags: ['inheritance-patterns', 'genetic-counseling', 'risk-assessment', 'clinical-scenarios']
  }
]

export const hereditaryBleedingTables: QuickReferenceTable[] = [
  {
    id: 'bleeding-disorders-comparison',
    title: 'Hereditary Bleeding Disorders Comparison',
    description: 'Quick comparison of major inherited bleeding disorders',
    headers: ['Disorder', 'Inheritance', 'Key Features', 'Laboratory Findings'],
    rows: [
      {
        id: 'hht',
        cells: ['HHT', 'Autosomal dominant', 'Nosebleeds + GI bleeding, telangiectases', 'Normal coagulation studies']
      },
      {
        id: 'vwd-type1',
        cells: ['VWD Type 1', 'Autosomal dominant', 'Mild mucocutaneous bleeding', 'Decreased VWF levels']
      },
      {
        id: 'vwd-type3',
        cells: ['VWD Type 3', 'Autosomal recessive', 'Severe bleeding + factor VIII ↓', 'Absent VWF']
      },
      {
        id: 'hemophilia-a',
        cells: ['Hemophilia A', 'X-linked recessive', 'Joint/muscle bleeding in males', 'Factor VIII deficiency']
      },
      {
        id: 'hemophilia-b',
        cells: ['Hemophilia B', 'X-linked recessive', 'Joint/muscle bleeding in males', 'Factor IX deficiency']
      }
    ]
  },
  {
    id: 'family-history-red-flags',
    title: 'Family History Red Flags by Disorder',
    description: 'Key family history features for each bleeding disorder',
    headers: ['Disorder', 'Family History Red Flags', 'Age of Onset'],
    rows: [
      {
        id: 'hht-history',
        cells: ['HHT', 'Nosebleeds + GI bleeding in relatives', 'Childhood nosebleeds, adult GI bleeding']
      },
      {
        id: 'vwd-history',
        cells: ['VWD', 'Heavy menses, surgical bleeding', 'Variable, often recognized at puberty']
      },
      {
        id: 'hemophilia-history',
        cells: ['Hemophilia', 'Male bleeding through carrier females', 'Early childhood']
      }
    ]
  },
  {
    id: 'laboratory-testing-algorithm',
    title: 'Laboratory Testing Algorithm',
    description: 'Systematic approach to bleeding disorder testing',
    headers: ['Initial Finding', 'Next Tests', 'Likely Diagnosis'],
    rows: [
      {
        id: 'prolonged-ptt',
        cells: ['Prolonged PTT', 'Factor VIII, IX, VWF studies', 'Hemophilia A/B, VWD']
      },
      {
        id: 'normal-coag-bleeding',
        cells: ['Normal PT/PTT + bleeding', 'VWF studies, platelet function', 'VWD, platelet disorders']
      },
      {
        id: 'normal-all-bleeding',
        cells: ['Normal studies + bleeding', 'Factor XIII, clinical correlation', 'Mild VWD, factor XIII deficiency']
      }
    ]
  }
]