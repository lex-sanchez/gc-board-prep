import type { BoardPracticeSection, QuickReferenceTable } from '@/types/board-practice'

export const syndromeRecognitionSections: BoardPracticeSection[] = [
  {
    id: 'exam-focus-syndromes',
    title: '🧬 Syndromes from Your Practice Exam',
    content: `
      <div class="exam-syndromes-container">
        <div class="syndrome-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">Meckel-Gruber Syndrome (Question 14)</h3>
          <p class="diagnostic-feature mb-4"><strong>Most significant diagnostic feature:</strong> <span class="text-red-600 font-semibold">Cystic renal disease</span></p>
          
          <div class="clinical-triad mb-4">
            <h4 class="font-semibold mb-2">Clinical Triad:</h4>
            <ol class="list-decimal pl-6">
              <li><strong>Cystic renal disease</strong> (polycystic kidneys)</li>
              <li><strong>Occipital encephalocele</strong></li>
              <li><strong>Postaxial polydactyly</strong></li>
            </ol>
          </div>

          <div class="additional-features mb-4">
            <h4 class="font-semibold mb-2">Additional Features:</h4>
            <ul class="list-disc pl-6">
              <li>Cleft lip/palate</li>
              <li>Hepatic cysts</li>
              <li>Genital abnormalities</li>
            </ul>
          </div>

          <div class="genetics mb-4">
            <h4 class="font-semibold mb-2">Genetics:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Inheritance:</strong> Autosomal recessive</li>
              <li><strong>Genes:</strong> Multiple (MKS1, TMEM67, CEP290, others)</li>
              <li><strong>Prevalence:</strong> 1 in 13,000-140,000</li>
            </ul>
          </div>

          <div class="prognosis mb-4">
            <p><strong>Prognosis:</strong> Usually lethal in perinatal period</p>
          </div>

          <div class="key-point">
            <p class="text-blue-600 font-medium">🔍 Key Point: Cystic renal disease is the most consistent feature - present in nearly 100% of cases</p>
          </div>
        </div>

        <div class="syndrome-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-green-600">Smith-Lemli-Opitz Syndrome (Question 42)</h3>
          <p class="diagnostic-test mb-4"><strong>Diagnostic test:</strong> <span class="text-red-600 font-semibold">7-dehydrocholesterol analysis</span></p>
          
          <div class="clinical-features mb-4">
            <h4 class="font-semibold mb-2">Clinical Features:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Growth:</strong> Prenatal and postnatal growth restriction</li>
              <li><strong>Facial:</strong> Microcephaly, ptosis, anteverted nares, cleft palate</li>
              <li><strong>Limbs:</strong> 2-3 toe syndactyly, postaxial polydactyly</li>
              <li><strong>Genitalia:</strong> Hypospadias, cryptorchidism, ambiguous genitalia</li>
              <li><strong>CNS:</strong> Intellectual disability, autism spectrum behaviors</li>
            </ul>
          </div>

          <div class="biochemical-defect mb-4">
            <h4 class="font-semibold mb-2">Biochemical Defect:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Enzyme:</strong> 7-dehydrocholesterol reductase (DHCR7)</li>
              <li><strong>Metabolite:</strong> Elevated 7-dehydrocholesterol</li>
              <li><strong>Cholesterol:</strong> Low-normal to low cholesterol levels</li>
            </ul>
          </div>

          <div class="treatment mb-4">
            <p><strong>Treatment:</strong> Cholesterol supplementation (limited benefit)</p>
          </div>

          <div class="key-point">
            <p class="text-blue-600 font-medium">🔍 Key Point: Only disorder with elevated 7-dehydrocholesterol - pathognomonic</p>
          </div>
        </div>

        <div class="syndrome-section mb-8">
          <h3 class="text-xl font-semibold mb-4 text-purple-600">Fabry Disease (Question 43)</h3>
          <p class="gene mb-4"><strong>Gene:</strong> <span class="text-red-600 font-semibold">GLA</span> (α-galactosidase A)</p>
          
          <div class="clinical-scenario mb-4">
            <p class="italic text-gray-700">Clinical Scenario: 43-year-old male with hypertrophic cardiomyopathy, "burning pains" in hands, difficulty sweating</p>
          </div>

          <div class="classic-features mb-4">
            <h4 class="font-semibold mb-2">Classic Features:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Pain:</strong> Acroparesthesias (burning pain in hands/feet)</li>
              <li><strong>Skin:</strong> Angiokeratomas (dark red spots)</li>
              <li><strong>Sweating:</strong> Hypohidrosis/anhidrosis</li>
              <li><strong>Eyes:</strong> Corneal verticillata, retinal vessel tortuosity</li>
              <li><strong>Renal:</strong> Progressive nephropathy, proteinuria</li>
              <li><strong>Cardiac:</strong> Left ventricular hypertrophy, arrhythmias</li>
              <li><strong>CNS:</strong> Stroke (young age), white matter lesions</li>
            </ul>
          </div>

          <div class="diagnosis mb-4">
            <h4 class="font-semibold mb-2">Diagnosis:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Males:</strong> Low/absent α-galactosidase A activity</li>
              <li><strong>Females:</strong> Genetic testing (enzyme levels may be normal)</li>
            </ul>
          </div>

          <div class="treatment mb-4">
            <p><strong>Treatment:</strong> Enzyme replacement therapy (agalsidase)</p>
          </div>

          <div class="key-point">
            <p class="text-blue-600 font-medium">🔍 Key Point: X-linked lysosomal storage disorder with cardiac, renal, and neurologic involvement</p>
          </div>
        </div>

        <div class="syndrome-section">
          <h3 class="text-xl font-semibold mb-4 text-orange-600">Cat-eye Syndrome (Question 48)</h3>
          <p class="chromosomal-abnormality mb-4"><strong>Chromosomal abnormality:</strong> <span class="text-red-600 font-semibold">Marker chromosome derived from chromosome 22</span></p>
          
          <div class="clinical-features mb-4">
            <h4 class="font-semibold mb-2">Clinical Features:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Eyes:</strong> Iris coloboma (cat-eye appearance) - not always present</li>
              <li><strong>Ears:</strong> Preauricular pits/tags, hearing loss</li>
              <li><strong>Anal:</strong> Anal atresia</li>
              <li><strong>Cardiac:</strong> Total anomalous pulmonary venous return</li>
              <li><strong>Renal:</strong> Unilateral renal agenesis</li>
              <li><strong>Facial:</strong> Micrognathia, cleft palate</li>
            </ul>
          </div>

          <div class="genetics mb-4">
            <h4 class="font-semibold mb-2">Genetics:</h4>
            <ul class="list-disc pl-6">
              <li><strong>Karyotype:</strong> 47,XX or XY,+mar(22)</li>
              <li><strong>Mechanism:</strong> Partial tetrasomy 22q11</li>
              <li><strong>Region:</strong> Contains CECR1 and other genes</li>
            </ul>
          </div>

          <div class="variability mb-4">
            <p><strong>Variability:</strong> Highly variable expression, even within families</p>
          </div>

          <div class="key-point">
            <p class="text-blue-600 font-medium">🔍 Key Point: Chromosome 22 marker → think cat-eye syndrome</p>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 15,
    tags: ['meckel-gruber', 'smith-lemli-opitz', 'fabry', 'cat-eye', 'practice-exam']
  },
  {
    id: 'high-yield-syndromes',
    title: '🧬 High-Yield Syndromes for Board Exam',
    content: `
      <div class="high-yield-container">
        <div class="syndrome-section mb-6">
          <h3 class="text-xl font-semibold mb-3 text-blue-600">Williams Syndrome</h3>
          <p class="genetics mb-3"><strong>Genetics:</strong> 7q11.23 deletion (includes ELN gene)</p>
          
          <div class="features mb-3">
            <h4 class="font-semibold mb-2">Classic Features:</h4>
            <ul class="list-disc pl-5">
              <li><strong>Facial:</strong> "Elfin" facies, stellate iris pattern</li>
              <li><strong>Cardiac:</strong> Supravalvular aortic stenosis</li>
              <li><strong>Behavior:</strong> Overly friendly, cocktail party personality</li>
              <li><strong>Cognitive:</strong> Relative strength in language, weakness in visuospatial</li>
            </ul>
          </div>
          
          <p class="text-blue-600 font-medium">🔍 Memory Aid: "Williams loves 7-Eleven" (7q deletion)</p>
        </div>

        <div class="syndrome-section mb-6">
          <h3 class="text-xl font-semibold mb-3 text-green-600">Noonan Syndrome</h3>
          <p class="key-question mb-3"><strong>Key Question:</strong> <span class="text-red-600 font-semibold">First recommendation for stunted growth: Echocardiogram</span></p>
          
          <div class="features mb-3">
            <h4 class="font-semibold mb-2">Classic Features:</h4>
            <ul class="list-disc pl-5">
              <li><strong>Facial:</strong> Ptosis, low-set ears, webbed neck</li>
              <li><strong>Cardiac:</strong> Pulmonary stenosis (most common)</li>
              <li><strong>Growth:</strong> Short stature</li>
              <li><strong>Other:</strong> Cryptorchidism, bleeding tendency</li>
            </ul>
          </div>
          
          <p class="text-blue-600 font-medium">🔍 Key Point: Always rule out cardiac defects before growth hormone</p>
        </div>

        <div class="syndrome-section mb-6">
          <h3 class="text-xl font-semibold mb-3 text-purple-600">Beckwith-Wiedemann Syndrome</h3>
          <p class="genetics mb-3"><strong>Genetics:</strong> 11p15 region (IGF2/H19, KCNQ1OT1)</p>
          
          <div class="features mb-3">
            <h4 class="font-semibold mb-2">Classic Features:</h4>
            <ul class="list-disc pl-5">
              <li><strong>Growth:</strong> Macrosomia, hemihyperplasia</li>
              <li><strong>Facial:</strong> Macroglossia, ear pits/creases</li>
              <li><strong>Abdominal:</strong> Omphalocele, organomegaly</li>
              <li><strong>Metabolic:</strong> Hypoglycemia</li>
            </ul>
          </div>
          
          <div class="cancer-risk mb-3">
            <p><strong>Cancer Risk:</strong> Wilms tumor, hepatoblastoma, adrenocortical carcinoma</p>
          </div>
          
          <p class="text-blue-600 font-medium">🔍 Memory Aid: "Big Baby Beckwith" (overgrowth syndrome)</p>
        </div>

        <div class="syndrome-section mb-6">
          <h3 class="text-xl font-semibold mb-3 text-orange-600">Ehlers-Danlos Syndromes</h3>
          
          <div class="eds-types">
            <div class="mb-4">
              <h4 class="font-semibold text-blue-600">Classical EDS</h4>
              <ul class="list-disc pl-5">
                <li><strong>Features:</strong> Hyperextensible skin, atrophic scars, joint hypermobility</li>
                <li><strong>Genetics:</strong> COL5A1, COL5A2</li>
              </ul>
            </div>
            
            <div class="mb-4">
              <h4 class="font-semibold text-green-600">Hypermobile EDS</h4>
              <ul class="list-disc pl-5">
                <li><strong>Features:</strong> Joint hypermobility, soft skin, chronic pain</li>
                <li><strong>Genetics:</strong> Clinical diagnosis (no gene identified)</li>
              </ul>
            </div>
            
            <div class="mb-4">
              <h4 class="font-semibold text-red-600">Vascular EDS</h4>
              <ul class="list-disc pl-5">
                <li><strong>Features:</strong> Arterial rupture, bowel perforation, uterine rupture</li>
                <li><strong>Genetics:</strong> COL3A1</li>
                <li><strong>🚨 Critical:</strong> Life-threatening complications</li>
              </ul>
            </div>
          </div>
          
          <p class="text-blue-600 font-medium">🔍 Key Point: Vascular EDS is the dangerous one - think COL3A1</p>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    estimatedReadTime: 12,
    tags: ['williams', 'noonan', 'beckwith-wiedemann', 'ehlers-danlos', 'high-yield']
  }
]

export const syndromeRecognitionTables: QuickReferenceTable[] = [
  {
    id: 'exam-syndromes-table',
    title: 'Practice Exam Syndromes Quick Reference',
    description: 'Key features of syndromes from your practice exam',
    headers: ['Syndrome', 'Most Important Feature', 'Gene/Genetics', 'Key Association'],
    rows: [
      {
        id: 'meckel-gruber',
        cells: ['Meckel-Gruber', 'Cystic renal disease', 'Multiple AR genes', 'Encephalocele + polydactyly']
      },
      {
        id: 'smith-lemli-opitz',
        cells: ['Smith-Lemli-Opitz', '7-dehydrocholesterol ↑', 'DHCR7 (AR)', 'Cholesterol synthesis defect']
      },
      {
        id: 'fabry',
        cells: ['Fabry Disease', 'Burning pain in hands', 'GLA (X-linked)', 'α-galactosidase A deficiency']
      },
      {
        id: 'cat-eye',
        cells: ['Cat-eye', 'Marker chromosome 22', 'Tetrasomy 22q11', 'Iris coloboma (variable)']
      }
    ]
  },
  {
    id: 'connective-tissue-comparison',
    title: 'Connective Tissue Disorders Comparison',
    description: 'Key differences between Marfan, Loeys-Dietz, and Homocystinuria',
    headers: ['Feature', 'Marfan', 'Loeys-Dietz', 'Homocystinuria'],
    rows: [
      {
        id: 'gene',
        cells: ['Gene', 'FBN1', 'TGFBR1/TGFBR2', 'CBS']
      },
      {
        id: 'aortic-root',
        cells: ['Aortic root', 'Enlarged', 'Enlarged', 'Normal']
      },
      {
        id: 'cleft-palate',
        cells: ['Cleft palate', 'No', 'Yes', 'No']
      },
      {
        id: 'eye',
        cells: ['Eye', 'Lens dislocation (up)', 'Normal', 'Lens dislocation (down)']
      },
      {
        id: 'intellectual',
        cells: ['Intellectual', 'Normal', 'Normal', 'Often impaired']
      },
      {
        id: 'treatment',
        cells: ['Treatment', 'Surveillance', 'Early surgery', 'B6, diet']
      }
    ]
  },
  {
    id: 'cardiac-syndromes',
    title: 'Cardiac-Associated Syndromes',
    description: 'Syndromes with characteristic cardiac defects',
    headers: ['Syndrome', 'Cardiac Defect', 'Key Features'],
    rows: [
      {
        id: 'williams-cardiac',
        cells: ['Williams', 'Supravalvular AS', 'Elfin facies, friendly']
      },
      {
        id: 'noonan-cardiac',
        cells: ['Noonan', 'Pulmonary stenosis', 'Webbed neck, short']
      },
      {
        id: 'holt-oram',
        cells: ['Holt-Oram', 'ASD/VSD', 'Upper limb defects']
      },
      {
        id: '22q11-cardiac',
        cells: ['22q11.2', 'Conotruncal', 'Cleft palate, immune']
      }
    ]
  },
  {
    id: 'growth-patterns',
    title: 'Growth Pattern Syndromes',
    description: 'Syndromes characterized by growth abnormalities',
    headers: ['Overgrowth', 'Undergrowth'],
    rows: [
      {
        id: 'beckwith-russell',
        cells: ['Beckwith-Wiedemann', 'Russell-Silver']
      },
      {
        id: 'sotos-3m',
        cells: ['Sotos', '3-M syndrome']
      },
      {
        id: 'weaver-seckel',
        cells: ['Weaver', 'Seckel']
      },
      {
        id: 'mccune-bloom',
        cells: ['McCune-Albright', 'Bloom']
      }
    ]
  }
]