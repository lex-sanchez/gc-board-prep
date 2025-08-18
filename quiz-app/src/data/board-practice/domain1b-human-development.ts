import type { BoardPracticeSection, QuickReferenceTable } from '@/types/board-practice'

export const domain1bSections: BoardPracticeSection[] = [
  {
    id: 'learning-objectives',
    title: '🎯 Learning Objectives',
    content: `
      <div class="objectives-container">
        <p class="mb-4">By the end of this guide, you will be able to:</p>
        <ul class="objectives-list">
          <li>Distinguish between malformation, deformation, disruption, and sequence</li>
          <li>Identify critical periods of embryonic development and associated teratogens</li>
          <li>Recognize developmental sequences and their features</li>
          <li>Apply embryological knowledge to clinical scenarios</li>
        </ul>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 2,
    tags: ['objectives', 'overview']
  },
  {
    id: 'embryonic-timeline',
    title: '📅 Embryonic Development Timeline',
    content: `
      <div class="timeline-container">
        <h3 class="text-xl font-semibold mb-4">Critical Periods (Most Vulnerable to Teratogens)</h3>
        
        <div class="timeline-table mb-6">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-blue-50">
                <th class="border border-gray-300 p-3">Gestational Age</th>
                <th class="border border-gray-300 p-3">Key Developments</th>
                <th class="border border-gray-300 p-3">Teratogen Effects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-3 font-semibold">Weeks 3-4</td>
                <td class="border border-gray-300 p-3">Neural tube closure, limb buds</td>
                <td class="border border-gray-300 p-3">Neural tube defects, limb defects</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-semibold">Weeks 4-5</td>
                <td class="border border-gray-300 p-3">Heart development begins</td>
                <td class="border border-gray-300 p-3">Congenital heart defects</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-semibold">Weeks 5-6</td>
                <td class="border border-gray-300 p-3">Facial development</td>
                <td class="border border-gray-300 p-3">Cleft lip/palate</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-semibold">Weeks 6-8</td>
                <td class="border border-gray-300 p-3">Organ formation (organogenesis)</td>
                <td class="border border-gray-300 p-3">Major malformations</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-3 font-semibold">Weeks 8-12</td>
                <td class="border border-gray-300 p-3">External genital differentiation</td>
                <td class="border border-gray-300 p-3">Genital abnormalities</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3 font-semibold">Weeks 12-16</td>
                <td class="border border-gray-300 p-3">Palate closure completion</td>
                <td class="border border-gray-300 p-3">Late cleft palate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-lg font-semibold mb-3">Key Developmental Milestones</h4>
        <ul class="milestone-list">
          <li><strong>Week 3:</strong> Gastrulation begins</li>
          <li><strong>Week 4:</strong> Limb buds appear</li>
          <li><strong>Week 5:</strong> Hand plates visible</li>
          <li><strong>Week 6:</strong> Finger rays appear</li>
          <li><strong>Week 8:</strong> All major organs formed</li>
          <li><strong>Week 10:</strong> Fingers and toes separated</li>
        </ul>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 8,
    tags: ['embryology', 'timeline', 'teratogens', 'critical-periods']
  },
  {
    id: 'birth-defect-classifications',
    title: '🧬 Birth Defect Classifications',
    content: `
      <div class="classifications-container">
        <div class="classification-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-red-600">1. MALFORMATION</h3>
          <p class="definition mb-3"><strong>Definition:</strong> Primary structural defect due to abnormal development during embryogenesis</p>
          
          <div class="characteristics mb-4">
            <h4 class="font-semibold mb-2">Characteristics:</h4>
            <ul class="list-disc pl-6">
              <li>Intrinsic developmental problem</li>
              <li>Present from conception/early development</li>
              <li>Often genetic in origin</li>
            </ul>
          </div>

          <div class="examples mb-4">
            <h4 class="font-semibold mb-2">Examples:</h4>
            <ul class="example-list">
              <li><strong>Spina bifida</strong> - Neural tube defect</li>
              <li><strong>Cleft lip/palate</strong> - Facial development failure</li>
              <li><strong>Congenital heart defects</strong> - Cardiac development abnormality</li>
              <li><strong>Polydactyly</strong> - Extra digits</li>
              <li><strong>Esophageal atresia</strong> - Developmental failure of esophageal formation</li>
            </ul>
          </div>

          <div class="exam-focus">
            <p class="text-blue-600 font-medium">🔍 Exam Focus: Esophageal atresia is a classic example of a malformation</p>
          </div>
        </div>

        <div class="classification-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-orange-600">2. DEFORMATION</h3>
          <p class="definition mb-3"><strong>Definition:</strong> Abnormal form/position due to mechanical forces on normal tissue</p>
          
          <div class="characteristics mb-4">
            <h4 class="font-semibold mb-2">Characteristics:</h4>
            <ul class="list-disc pl-6">
              <li>Secondary to external forces</li>
              <li>Often reversible with intervention</li>
              <li>Usually occurs in 2nd/3rd trimester</li>
            </ul>
          </div>

          <div class="examples mb-4">
            <h4 class="font-semibold mb-2">Examples:</h4>
            <ul class="example-list">
              <li><strong>Clubfoot</strong> - Intrauterine positioning</li>
              <li><strong>Torticollis</strong> - Neck positioning in utero</li>
              <li><strong>Arthrogryposis</strong> - Joint contractures from decreased fetal movement</li>
              <li><strong>Plagiocephaly</strong> - Skull flattening from positioning</li>
            </ul>
          </div>

          <div class="exam-focus">
            <p class="text-blue-600 font-medium">🔍 Twin-Twin Considerations: In twin pregnancies, oligohydramnios can cause deformational changes</p>
          </div>
        </div>

        <div class="classification-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-purple-600">3. DISRUPTION</h3>
          <p class="definition mb-3"><strong>Definition:</strong> Breakdown of normal tissue due to destructive process</p>
          
          <div class="characteristics mb-4">
            <h4 class="font-semibold mb-2">Characteristics:</h4>
            <ul class="list-disc pl-6">
              <li>Secondary to external agent</li>
              <li>Tissue was initially normal</li>
              <li>Often involves vascular compromise</li>
            </ul>
          </div>

          <div class="examples mb-4">
            <h4 class="font-semibold mb-2">Examples:</h4>
            <ul class="example-list">
              <li><strong>Limb amputation</strong> - Amniotic band syndrome</li>
              <li><strong>Gastroschisis</strong> - Abdominal wall disruption</li>
              <li><strong>Porencephaly</strong> - Brain tissue destruction</li>
            </ul>
          </div>
        </div>

        <div class="classification-section">
          <h3 class="text-xl font-semibold mb-4 text-green-600">4. SEQUENCE</h3>
          <p class="definition mb-3"><strong>Definition:</strong> Multiple anomalies resulting from a single primary defect</p>
          
          <div class="examples mb-4">
            <h4 class="font-semibold mb-2">Examples:</h4>
            <ul class="example-list">
              <li><strong>Potter Sequence</strong> (oligohydramnios sequence)</li>
              <li><strong>Pierre Robin Sequence</strong></li>
              <li><strong>VATER/VACTERL sequence</strong></li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 12,
    tags: ['malformation', 'deformation', 'disruption', 'sequence', 'classification']
  },
  {
    id: 'developmental-sequences',
    title: '🎭 Important Developmental Sequences',
    content: `
      <div class="sequences-container">
        <div class="sequence-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">Pierre Robin Sequence</h3>
          <p class="text-sm text-gray-600 mb-3 italic">From your exam question</p>
          
          <div class="primary-defect mb-4">
            <p><strong>Primary Defect:</strong> Micrognathia (small jaw)</p>
          </div>

          <div class="secondary-features mb-4">
            <h4 class="font-semibold mb-2">Secondary Features:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Glossoptosis</strong> - Posterior tongue displacement</li>
              <li><strong>Cleft palate</strong> - Secondary to tongue position</li>
            </ul>
          </div>

          <div class="pathophysiology mb-4">
            <p><strong>Pathophysiology:</strong> Small jaw → tongue positioned posteriorly → interference with palate closure</p>
          </div>

          <div class="clinical-management">
            <h4 class="font-semibold mb-2">Clinical Management:</h4>
            <ul class="list-disc pl-6">
              <li>Airway management priority</li>
              <li>Feeding difficulties common</li>
              <li>May require tracheostomy</li>
            </ul>
          </div>
        </div>

        <div class="sequence-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-green-600">Potter Sequence</h3>
          
          <div class="primary-defect mb-4">
            <p><strong>Primary Defect:</strong> Oligohydramnios (decreased amniotic fluid)</p>
          </div>

          <div class="secondary-features mb-4">
            <h4 class="font-semibold mb-2">Secondary Features:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Pulmonary hypoplasia</strong> - Decreased lung development</li>
              <li><strong>Growth restriction</strong></li>
              <li><strong>Characteristic facial features</strong> - Low-set ears, epicanthal folds</li>
              <li><strong>Limb deformities</strong> - Clubfoot, joint contractures</li>
            </ul>
          </div>

          <div class="causes">
            <h4 class="font-semibold mb-2">Causes of Oligohydramnios:</h4>
            <ul class="list-disc pl-6">
              <li>Renal agenesis/dysgenesis</li>
              <li>Chronic amniotic fluid leak</li>
              <li>Severe intrauterine growth restriction</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 10,
    tags: ['pierre-robin', 'potter-sequence', 'oligohydramnios', 'micrognathia']
  },
  {
    id: 'teratogen-effects',
    title: '🧪 Teratogen Effects by System',
    content: `
      <div class="teratogen-container">
        <div class="system-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-red-600">Neural Tube Defects</h3>
          <p class="mb-3"><strong>Critical Period:</strong> Days 22-28 (weeks 3-4)</p>
          
          <div class="teratogens mb-4">
            <h4 class="font-semibold mb-2">Teratogens:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Folate deficiency</strong> - Most common preventable cause</li>
              <li><strong>Valproic acid</strong> - Anticonvulsant</li>
              <li><strong>Carbamazepine</strong> - Anticonvulsant</li>
              <li><strong>Maternal diabetes</strong> - Elevated glucose</li>
            </ul>
          </div>

          <div class="prevention">
            <p><strong>Prevention:</strong> Folic acid supplementation (400-800 mcg daily)</p>
          </div>
        </div>

        <div class="system-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">Cardiac Defects</h3>
          <p class="mb-3"><strong>Critical Period:</strong> Weeks 4-8</p>
          
          <div class="teratogens mb-4">
            <h4 class="font-semibold mb-2">Teratogens:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Maternal diabetes</strong> - Most common</li>
              <li><strong>Lithium</strong> - Ebstein anomaly</li>
              <li><strong>Retinoic acid</strong> - Conotruncal defects</li>
              <li><strong>Maternal PKU</strong> - Multiple defects</li>
            </ul>
          </div>

          <div class="key-point">
            <p class="text-blue-600 font-medium">🔍 Key Point: Maternal diabetes affects multiple systems - heart, neural tube, kidneys</p>
          </div>
        </div>

        <div class="system-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-green-600">Limb Defects</h3>
          <p class="mb-3"><strong>Critical Period:</strong> Weeks 4-8</p>
          
          <div class="teratogens">
            <h4 class="font-semibold mb-2">Teratogens:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Thalidomide</strong> - Phocomelia</li>
              <li><strong>Valproic acid</strong> - Limb reduction defects</li>
              <li><strong>Warfarin</strong> - Chondrodysplasia punctata</li>
            </ul>
          </div>
        </div>

        <div class="system-section">
          <h3 class="text-xl font-semibold mb-4 text-purple-600">Facial Development</h3>
          <p class="mb-3"><strong>Critical Period:</strong> Weeks 5-12</p>
          
          <div class="teratogens">
            <h4 class="font-semibold mb-2">Teratogens:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Alcohol</strong> - Fetal alcohol syndrome</li>
              <li><strong>Isotretinoin</strong> - Craniofacial defects</li>
              <li><strong>Anticonvulsants</strong> - Cleft lip/palate</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 12,
    tags: ['teratogens', 'neural-tube', 'cardiac', 'limb-defects', 'facial']
  },
  {
    id: 'major-teratogens',
    title: '🍷 Major Teratogens and Their Effects',
    content: `
      <div class="major-teratogens-container">
        <div class="teratogen-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-red-600">Alcohol (Fetal Alcohol Syndrome)</h3>
          
          <div class="effects mb-4">
            <h4 class="font-semibold mb-2">Effects:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Facial:</strong> Smooth philtrum, thin upper lip, small palpebral fissures</li>
              <li><strong>Growth:</strong> Pre/postnatal growth restriction</li>
              <li><strong>CNS:</strong> Microcephaly, intellectual disability, behavioral issues</li>
            </ul>
          </div>

          <div class="warning">
            <p class="text-red-600 font-medium"><strong>No Safe Amount:</strong> Any alcohol consumption carries risk</p>
          </div>
        </div>

        <div class="teratogen-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-orange-600">Isotretinoin (Accutane)</h3>
          
          <div class="effects mb-4">
            <h4 class="font-semibold mb-2">Effects:</h4>
            <ul class="list-disc pl-6">
              <li><strong>CNS:</strong> Hydrocephalus, microcephaly</li>
              <li><strong>Cardiac:</strong> Conotruncal defects</li>
              <li><strong>Facial:</strong> Microtia, cleft palate</li>
              <li><strong>Thymic:</strong> DiGeorge-like syndrome</li>
            </ul>
          </div>

          <div class="contraception">
            <p><strong>Contraception:</strong> Requires two forms of birth control</p>
          </div>
        </div>

        <div class="teratogen-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-purple-600">Valproic Acid</h3>
          
          <div class="effects mb-4">
            <h4 class="font-semibold mb-2">Effects:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Neural tube defects</strong> (1-2% risk)</li>
              <li><strong>Facial dysmorphism:</strong> Broad nasal bridge, thin upper lip</li>
              <li><strong>Limb defects:</strong> Radial ray defects</li>
              <li><strong>Cardiac defects</strong></li>
            </ul>
          </div>

          <div class="folic-acid">
            <p><strong>Folic Acid:</strong> Higher doses (4-5 mg) recommended</p>
          </div>
        </div>

        <div class="teratogen-section">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">Maternal PKU</h3>
          <p class="mb-3"><strong>Mechanism:</strong> Elevated phenylalanine crosses placenta</p>
          
          <div class="effects mb-4">
            <h4 class="font-semibold mb-2">Effects:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Microcephaly</strong></li>
              <li><strong>Intellectual disability</strong></li>
              <li><strong>Cardiac defects</strong></li>
              <li><strong>Growth restriction</strong></li>
            </ul>
          </div>

          <div class="prevention">
            <p><strong>Prevention:</strong> Strict dietary control before conception</p>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 10,
    tags: ['alcohol', 'isotretinoin', 'valproic-acid', 'maternal-pku', 'fetal-alcohol']
  }
]

export const domain1bQuickLookup: QuickReferenceTable[] = [
  {
    id: 'critical-periods-table',
    title: 'Critical Periods for Teratogen Exposure',
    description: 'Key developmental windows and associated malformations',
    headers: ['Gestational Age', 'Development', 'Vulnerable To'],
    rows: [
      {
        id: 'weeks-3-4',
        cells: ['Weeks 3-4', 'Neural tube closure', 'Neural tube defects']
      },
      {
        id: 'weeks-4-5', 
        cells: ['Weeks 4-5', 'Heart development', 'Cardiac defects']
      },
      {
        id: 'weeks-5-6',
        cells: ['Weeks 5-6', 'Facial development', 'Cleft lip/palate']
      },
      {
        id: 'weeks-6-8',
        cells: ['Weeks 6-8', 'Organogenesis', 'Major malformations']
      },
      {
        id: 'weeks-8-12',
        cells: ['Weeks 8-12', 'Genital differentiation', 'Genital abnormalities']
      }
    ]
  },
  {
    id: 'malformation-classification-table',
    title: 'Birth Defect Classification Summary',
    description: 'Quick reference for distinguishing malformation types',
    headers: ['Type', 'Definition', 'Key Example'],
    rows: [
      {
        id: 'malformation',
        cells: ['Malformation', 'Primary structural defect', 'Spina bifida, cleft palate']
      },
      {
        id: 'deformation',
        cells: ['Deformation', 'Mechanical forces on normal tissue', 'Clubfoot, torticollis']
      },
      {
        id: 'disruption',
        cells: ['Disruption', 'Breakdown of normal tissue', 'Amniotic band syndrome']
      },
      {
        id: 'sequence',
        cells: ['Sequence', 'Multiple anomalies from single defect', 'Pierre Robin, Potter']
      }
    ]
  },
  {
    id: 'major-teratogens-table',
    title: 'Major Teratogens Quick Reference',
    description: 'High-yield teratogens and their primary effects',
    headers: ['Teratogen', 'Primary Effects', 'Prevention/Notes'],
    rows: [
      {
        id: 'alcohol',
        cells: ['Alcohol', 'FAS: facial, growth, CNS', 'No safe amount']
      },
      {
        id: 'isotretinoin',
        cells: ['Isotretinoin', 'CNS, cardiac, facial', '2 forms birth control']
      },
      {
        id: 'valproic-acid',
        cells: ['Valproic acid', 'Neural tube defects (1-2%)', 'Higher folic acid (4-5mg)']
      },
      {
        id: 'maternal-diabetes',
        cells: ['Maternal diabetes', 'Cardiac, neural tube, renal', 'Glycemic control']
      },
      {
        id: 'maternal-pku',
        cells: ['Maternal PKU', 'Microcephaly, ID, cardiac', 'Strict diet before conception']
      }
    ]
  }
]