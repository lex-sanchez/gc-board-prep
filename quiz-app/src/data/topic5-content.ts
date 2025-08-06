import type { StudySection } from '@/types/learning'

export const topic5Sections: StudySection[] = [
  {
    id: 'quick-navigation',
    title: 'Quick Navigation',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📋 Table of Contents
          </h3>
          <div class="grid grid-cols-1 gap-2 md:grid-cols-3">
            <div>
              <h4 class="mb-2 font-semibold text-primary">🧬 Amino Acid Disorders</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Phenylketonuria (PKU) ⭐⭐⭐</strong></li>
                <li>• <strong>Homocystinuria ⭐⭐</strong></li>
                <li>• <strong>Tyrosinemia Type I ⭐⭐</strong></li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">🧪 Organic Acidemias</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Methylmalonic Acidemia (MMA) ⭐⭐⭐</strong></li>
                <li>• <strong>Propionic Acidemia ⭐⭐</strong></li>
                <li>• <strong>Maple Syrup Urine Disease (MSUD) ⭐⭐</strong></li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">🍬 Carbohydrate Disorders</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Galactosemia (Classic) ⭐⭐⭐</strong></li>
                <li>• <strong>Glycogen Storage Disease Type I ⭐⭐</strong></li>
                <li>• <strong>Glycogen Storage Disease Type II ⭐⭐</strong></li>
              </ul>
            </div>
          </div>
          <div class="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">🧬 Lysosomal Storage Disorders</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Gaucher Disease ⭐⭐⭐</strong></li>
                <li>• <strong>Tay-Sachs Disease ⭐⭐⭐</strong></li>
                <li>• <strong>Fabry Disease ⭐⭐⭐</strong></li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">🧬 Other Key Disorders</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Wilson Disease ⭐⭐⭐</strong></li>
                <li>• <strong>X-linked Adrenoleukodystrophy ⭐⭐⭐</strong></li>
                <li>• <strong>MCAD Deficiency ⭐⭐⭐</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [],
    estimatedReadTime: 3
  },
  {
    id: 'learning-objectives',
    title: 'Learning Objectives',
    content: `
      <div class="space-y-4">
        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 By the end of this topic, you should be able to:
          </h3>
          <div class="grid grid-cols-1 gap-3">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span><strong>Identify</strong> which metabolic disorders are included in newborn screening panels and their follow-up protocols</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span><strong>Calculate</strong> carrier risks for metabolic disorders in specific populations (Ashkenazi Jewish, Finnish, etc.)</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span><strong>Counsel</strong> families on dietary management for PKU, galactosemia, and other treatable conditions</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span><strong>Distinguish</strong> between different types of metabolic disorders based on clinical presentation and biochemical findings</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <span><strong>Explain</strong> enzyme replacement therapy options and their implications for genetic counseling</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <span><strong>Apply</strong> consanguinity risk calculations for autosomal recessive metabolic disorders</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">7</span>
              <span><strong>Recognize</strong> metabolic emergencies and appropriate management protocols</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">8</span>
              <span><strong>Compare</strong> population-based carrier screening programs (Tay-Sachs, Gaucher) and their effectiveness</span>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [],
    estimatedReadTime: 4
  },
  {
    id: 'amino-acid-disorders',
    title: '🧬 AMINO ACID DISORDERS',
    content: `
      <div class="space-y-8">
        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Phenylketonuria (PKU) ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">Most Common Amino Acid Disorder - High Board Yield!</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Intellectual disability</strong> if untreated</li>
              <li><strong>Musty body odor</strong></li>
              <li><strong>Fair skin/hair</strong> (decreased pigmentation)</li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold text-primary mb-2">Neurological:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Progressive ID without treatment</li>
                  <li>• Seizures, behavioral problems</li>
                  <li>• Microcephaly</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Other:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Eczema, decreased melanin</li>
                  <li>• Musty/mousy odor</li>
                  <li>• Fair complexion</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="molecular-genetics">
            <h4>🧪 Biochemistry & Testing</h4>
            <div class="space-y-3">
              <div><strong>Defect:</strong> Phenylalanine hydroxylase (PAH) deficiency</div>
              <div><strong>Pathway:</strong> Phenylalanine → Tyrosine (blocked)</div>
              <div><strong>NBS:</strong> Tandem MS - elevated phenylalanine</div>
              <div class="bg-blue-50 p-3 rounded">
                <div><strong>Classification:</strong></div>
                <div class="text-sm space-y-1 mt-2">
                  <div>• Classic PKU: Phe >1200 μmol/L</div>
                  <div>• Moderate PKU: Phe 600-1200 μmol/L</div>
                  <div>• Mild PKU: Phe 360-600 μmol/L</div>
                  <div>• Mild hyperphe: Phe 120-360 μmol/L</div>
                </div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Cannot test Phe/Tyr ratio if on birth control or pregnant</li>
              <li>• Most common inborn error of amino acid metabolism</li>
              <li>• All 50 states include PKU in NBS</li>
              <li>• Offspring of PKU mothers: 100% carriers, at risk for maternal PKU effects</li>
              <li>• Compliance challenges increase in adolescence</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Homocystinuria ⭐⭐</h3>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Ectopia lentis</strong> (downward lens dislocation)</li>
              <li><strong>Marfanoid habitus</strong></li>
              <li><strong>Thromboembolism risk</strong></li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold text-primary mb-2">Ocular:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Ectopia lentis (85%)</li>
                  <li>• Myopia, glaucoma</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Skeletal:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Tall stature, arachnodactyly</li>
                  <li>• Scoliosis, osteoporosis</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Vascular:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Thromboembolism (50% by age 30)</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Neurologic:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• ID variable, seizures</li>
                  <li>• Psychiatric symptoms</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Lens dislocation: DOWN and OUT (vs Marfan: UP)</li>
              <li>• Major cause of preventable ID if B6 responsive</li>
              <li>• Screen before surgery due to thrombosis risk</li>
              <li>• Can be missed on NBS if mild or late-onset</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: ["PKU: Most common amino acid disorder", "Homocystinuria: DOWN and OUT lens dislocation"],
    estimatedReadTime: 10
  },
  {
    id: 'organic-acidemias',
    title: '🧪 ORGANIC ACIDEMIAS',
    content: `
      <div class="space-y-8">
        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Methylmalonic Acidemia (MMA) ⭐⭐⭐</h3>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Metabolic acidosis</strong> with anion gap</li>
              <li><strong>Hyperammonemia</strong></li>
              <li><strong>Elevated C3 on acylcarnitine profile</strong></li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold text-primary mb-2">Acute presentation:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Lethargy, vomiting, dehydration</li>
                  <li>• Ketoacidosis, hyperammonemia</li>
                  <li>• Encephalopathy</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Long-term:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Developmental delays</li>
                  <li>• Progressive CKD</li>
                  <li>• Basal ganglia strokes</li>
                  <li>• Pancytopenia</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="molecular-genetics">
            <h4>🧪 Biochemistry & Testing</h4>
            <div class="space-y-3">
              <div><strong>Defect:</strong> Methylmalonyl-CoA mutase OR cobalamin metabolism</div>
              <div><strong>NBS:</strong> ↑ C3 (propionylcarnitine)</div>
              <div class="bg-yellow-50 p-3 rounded">
                <div><strong>Subtypes:</strong></div>
                <div class="text-sm space-y-1 mt-2">
                  <div>• mut⁰: No enzyme activity</div>
                  <div>• mut⁻: Reduced enzyme activity</div>
                  <div>• cbl A-G: Cobalamin metabolism defects</div>
                </div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Some forms B12 responsive - always trial</li>
              <li>• Combined with homocystinuria = cbl C defect</li>
              <li>• Risk of metabolic stroke during crisis</li>
              <li>• Sibling recurrence: 25%</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Maple Syrup Urine Disease (MSUD) ⭐⭐</h3>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Sweet maple syrup odor</strong> (urine, cerumen)</li>
              <li><strong>Encephalopathy</strong> in newborn period</li>
              <li><strong>Elevated branched-chain amino acids</strong></li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="space-y-3">
              <div class="bg-red-50 p-3 rounded">
                <h5 class="font-semibold text-red-700 mb-2">Classic form (85%):</h5>
                <ul class="text-sm space-y-1">
                  <li>• Normal at birth</li>
                  <li>• Poor feeding by 2-3 days</li>
                  <li>• Encephalopathy by 4-5 days</li>
                  <li>• Characteristic odor</li>
                </ul>
              </div>
              <div>
                <div><strong>Neurologic:</strong> Alternating hyper/hypotonia, seizures</div>
                <div><strong>Metabolic:</strong> Ketoacidosis, hypoglycemia</div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Can have normal intelligence if well-controlled</li>
              <li>• Leucine is most neurotoxic BCAA</li>
              <li>• Smell may be subtle - check earwax</li>
              <li>• Metabolic crisis with minor illness</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: ["MMA: C3 elevated on NBS", "MSUD: Maple syrup smell, check earwax"],
    estimatedReadTime: 8
  },
  {
    id: 'lysosomal-storage-disorders',
    title: '🧬 LYSOSOMAL STORAGE DISORDERS',
    content: `
      <div class="space-y-8">
        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Gaucher Disease ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">Most Common LSD - High Yield for AJ Carrier Screening!</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Hepatosplenomegaly</strong> (massive)</li>
              <li><strong>Bone pain/crises</strong></li>
              <li><strong>Thrombocytopenia</strong></li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features by Type</h4>
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-semibold text-green-700 mb-2">Type 1 (Non-neuronopathic) - 90%</h5>
                <ul class="text-sm space-y-1">
                  <li>• Hepatosplenomegaly</li>
                  <li>• Anemia, thrombocytopenia</li>
                  <li>• Bone disease (pain, AVN, fractures)</li>
                  <li>• Gaucher cells in marrow</li>
                  <li>• Normal intelligence</li>
                  <li>• Parkinson disease risk (GBA carriers too)</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h5 class="font-semibold text-red-700 mb-2">Type 2 (Acute neuronopathic)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Onset <2 years</li>
                  <li>• Severe neurodegeneration</li>
                  <li>• Death by 2-4 years</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="molecular-genetics">
            <h4>📈 Inheritance & Statistics</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div><strong>Pattern:</strong> Autosomal recessive</div>
                <div><strong>Gene:</strong> GBA (1q22)</div>
                <div><strong>General prevalence:</strong> 1:40,000</div>
              </div>
              <div>
                <div><strong>Ashkenazi Jewish:</strong> 1:450</div>
                <div><strong>AJ carrier frequency:</strong> 1:15 (6%)</div>
                <div><strong>Common AJ mutations:</strong> N370S, 84GG, L444P</div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Most common LSD</li>
              <li>• N370S = Type 1 only (neuroprotective)</li>
              <li>• L444P homozygotes = neuronopathic</li>
              <li>• GBA carriers → 5-fold ↑ Parkinson risk</li>
              <li>• Pregnancy can worsen symptoms</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Tay-Sachs Disease ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">Classic AJ Carrier Screening - Know Well!</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Cherry-red spot</strong> on macula</li>
              <li><strong>Progressive neurodegeneration</strong></li>
              <li><strong>Exaggerated startle response</strong></li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="bg-red-50 p-4 rounded-lg">
              <h5 class="font-semibold text-red-700 mb-2">Classic Infantile</h5>
              <ul class="text-sm space-y-1">
                <li>• Normal until 3-6 months</li>
                <li>• Loss of milestones</li>
                <li>• Hypotonia → spasticity</li>
                <li>• Cherry-red spot (90%)</li>
                <li>• Seizures, macrocephaly</li>
                <li>• Death by 2-5 years</li>
              </ul>
            </div>
          </div>

          <div class="molecular-genetics">
            <h4>📈 Inheritance & Statistics</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div><strong>Pattern:</strong> Autosomal recessive</div>
                <div><strong>Gene:</strong> HEXA (15q23)</div>
                <div><strong>Ashkenazi Jewish:</strong> 1:30</div>
              </div>
              <div>
                <div><strong>French Canadian:</strong> 1:30</div>
                <div><strong>Cajun:</strong> 1:30</div>
                <div><strong>General population:</strong> 1:300</div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Carrier screening success story (>90% reduction)</li>
              <li>• Pseudodeficiency alleles common</li>
              <li>• Sandhoff disease = Hex A + B deficiency</li>
              <li>• Test enzyme in pregnant/OCP users</li>
              <li>• 3 founder mutations in AJ (1278insTATC most common)</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Fabry Disease ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">X-linked LSD - Different from Others!</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Acroparesthesias</strong> (burning pain)</li>
              <li><strong>Angiokeratomas</strong></li>
              <li><strong>Corneal whorling</strong></li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-blue-50 p-3 rounded">
                <h5 class="font-semibold text-blue-700 mb-2">Males (Classic)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Pain crises (hands/feet)</li>
                  <li>• Angiokeratomas (bathing suit area)</li>
                  <li>• Hypohidrosis</li>
                  <li>• Progressive renal failure</li>
                  <li>• Cardiac (LVH, arrhythmias)</li>
                </ul>
              </div>
              <div class="bg-pink-50 p-3 rounded">
                <h5 class="font-semibold text-pink-700 mb-2">Females</h5>
                <ul class="text-sm space-y-1">
                  <li>• Variable (X-inactivation)</li>
                  <li>• Corneal whorling common</li>
                  <li>• Can be as severe as males</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Females are not just carriers</li>
              <li>• Enzyme testing unreliable in females</li>
              <li>• Corneal whorling doesn't affect vision</li>
              <li>• Later-onset cardiac variants common</li>
              <li>• Consider in young stroke</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: ["Gaucher: Most common LSD, AJ 1:15 carrier", "Tay-Sachs: Cherry-red spot, AJ 1:30 carrier", "Fabry: X-linked, females affected too"],
    estimatedReadTime: 15
  },
  {
    id: 'other-key-disorders',
    title: '🧬 OTHER KEY METABOLIC DISORDERS',
    content: `
      <div class="space-y-8">
        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Wilson Disease ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">Treatable Cause of Liver Disease + Neuropsychiatric!</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Kayser-Fleischer rings</strong></li>
              <li><strong>Liver disease</strong> (varies)</li>
              <li><strong>Neuropsychiatric symptoms</strong></li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-yellow-50 p-3 rounded">
                <h5 class="font-semibold text-yellow-700 mb-2">Hepatic (40%)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Acute hepatitis</li>
                  <li>• Chronic hepatitis</li>
                  <li>• Cirrhosis</li>
                  <li>• Fulminant hepatic failure</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-3 rounded">
                <h5 class="font-semibold text-blue-700 mb-2">Neurologic (40%)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Tremor (wing-beating)</li>
                  <li>• Dystonia</li>
                  <li>• Dysarthria, dysphagia</li>
                  <li>• Parkinsonism</li>
                </ul>
              </div>
              <div class="bg-purple-50 p-3 rounded">
                <h5 class="font-semibold text-purple-700 mb-2">Psychiatric (20%)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Personality changes</li>
                  <li>• Depression</li>
                  <li>• Psychosis</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• K-F rings absent in 50% with liver disease</li>
              <li>• Low alkaline phosphatase in fulminant failure</li>
              <li>• Screen siblings (even if asymptomatic)</li>
              <li>• Pregnancy: Continue treatment</li>
              <li>• Treatable → great prognosis if caught early</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">X-linked Adrenoleukodystrophy (X-ALD) ⭐⭐⭐</h3>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Adrenal insufficiency</strong></li>
              <li><strong>Progressive white matter disease</strong></li>
              <li><strong>Very long chain fatty acids (VLCFA)</strong></li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Phenotypes</h4>
            <div class="space-y-3">
              <div class="bg-red-50 p-3 rounded">
                <h5 class="font-semibold text-red-700 mb-2">Childhood cerebral (35%)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Normal until 4-10 years</li>
                  <li>• Behavioral changes</li>
                  <li>• Rapid neurodegeneration</li>
                  <li>• Death within 2-4 years</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-3 rounded">
                <h5 class="font-semibold text-orange-700 mb-2">Adrenomyeloneuropathy (AMN)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Adult onset (20-30s)</li>
                  <li>• Progressive paraparesis</li>
                  <li>• Peripheral neuropathy</li>
                  <li>• Adrenal insufficiency (70%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Female carriers can be symptomatic (AMN-like)</li>
              <li>• No genotype-phenotype correlation</li>
              <li>• Screen all males with Addison's</li>
              <li>• HSCT only helps if early cerebral</li>
              <li>• Different from neonatal ALD (Zellweger)</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">MCAD Deficiency ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">Most Common FAO Disorder!</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Hypoketotic hypoglycemia</strong></li>
              <li><strong>Hepatomegaly</strong> during crisis</li>
              <li><strong>"SIDS-like" presentation</strong></li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="space-y-3">
              <div class="bg-red-50 p-4 rounded">
                <h5 class="font-semibold text-red-700 mb-2">Typical presentation:</h5>
                <ul class="text-sm space-y-1">
                  <li>• Well until metabolic stress</li>
                  <li>• Vomiting, lethargy</li>
                  <li>• Hypoglycemia</li>
                  <li>• Can progress to coma/death</li>
                </ul>
              </div>
              <div>
                <div><strong>Triggers:</strong> Fasting, illness</div>
                <div><strong>Age:</strong> Usually 3-24 months</div>
                <div><strong>Between episodes:</strong> Normal</div>
              </div>
            </div>
          </div>

          <div class="molecular-genetics">
            <h4>🧪 Biochemistry & Testing</h4>
            <div class="space-y-2">
              <div><strong>Defect:</strong> ACADM gene</div>
              <div><strong>NBS:</strong> ↑ C8 (octanoylcarnitine)</div>
              <div><strong>Common mutation:</strong> c.985A>G (K329E)</div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• #1 cause of "near-miss SIDS"</li>
              <li>• K329E mutation in 80% of alleles</li>
              <li>• Normal between episodes</li>
              <li>• Excellent prognosis if fasting avoided</li>
              <li>• Some never have symptoms (NBS finding)</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: ["Wilson: K-F rings, treatable", "X-ALD: Screen males with Addison's", "MCAD: #1 cause near-miss SIDS"],
    estimatedReadTime: 12
  },
  {
    id: 'study-aids-mnemonics',
    title: '📋 Study Aids & Mnemonics',
    content: `
      <div class="space-y-6">
        <div class="mnemonics-card">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🧠 Memory Aids & Mnemonics
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">NBS Conditions by Category</h4>
                <div class="text-sm space-y-2">
                  <div><strong>Amino Acid:</strong> PKU, MSUD, Homocystinuria, Tyrosinemia</div>
                  <div><strong>Organic Acids:</strong> MMA, PA, IVA, GA-1</div>
                  <div><strong>FAO:</strong> MCAD, VLCAD, LCHAD</div>
                  <div><strong>Others:</strong> Galactosemia, Biotinidase, CAH</div>
                </div>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold text-green-700 mb-2">Ashkenazi Jewish Panel</h4>
                <div class="text-sm space-y-1">
                  <div><strong>"Tay-Sachs Gets Canavan, Family Dies, Niemann-Pick Blooms, Fanconi Mucoli"</strong></div>
                  <div>1. Tay-Sachs (1:30)</div>
                  <div>2. Gaucher (1:15)</div>
                  <div>3. Canavan (1:40)</div>
                  <div>4. Familial dysautonomia (1:30)</div>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-purple-700 mb-2">Metabolic Emergency Protocol</h4>
                <div class="text-sm space-y-1">
                  <div><strong>"STOP"</strong></div>
                  <div>• <strong>S</strong>top protein</div>
                  <div>• <strong>T</strong>reat with IV dextrose</div>
                  <div>• <strong>O</strong>btain labs</div>
                  <div>• <strong>P</strong>revent catabolism</div>
                </div>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-semibold text-yellow-700 mb-2">Enzyme Replacement Available</h4>
                <div class="text-sm space-y-1">
                  <div><strong>"GIFT FANG"</strong></div>
                  <div>• <strong>G</strong>aucher, <strong>I</strong>migen (Pompe)</div>
                  <div>• <strong>F</strong>abry, <strong>T</strong>ay-Sachs (trials)</div>
                  <div>• <strong>F</strong>ucosidosis, <strong>A</strong>LD</div>
                  <div>• <strong>N</strong>iemann-Pick B, <strong>G</strong>SD II</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: ["NBS: PKU MSUD MMA MCAD Galactosemia", "AJ Panel: Tay-Sachs Gets Canavan", "Emergency: STOP protocol", "ERT: GIFT FANG"],
    estimatedReadTime: 5
  },
  {
    id: 'high-yield-board-facts',
    title: '🎯 High-Yield Board Facts',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📊 Newborn Screening
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-primary mb-2">Key Facts</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>PKU:</strong> Most common amino acid disorder on NBS</li>
                <li>• <strong>MCAD:</strong> Most common FAO disorder</li>
                <li>• <strong>False positives:</strong> Common with prematurity, TPN</li>
                <li>• <strong>False negatives:</strong> Can occur if tested too early</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-2">Important Notes</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Transfusion:</strong> Affects galactosemia, biotinidase</li>
                <li>• <strong>Timing:</strong> 24-48 hours after birth optimal</li>
                <li>• <strong>Follow-up:</strong> Critical for positive results</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📈 Carrier Frequencies
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-accent mb-2">Highest in AJ</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Gaucher:</strong> 1:15 (6%)</li>
                <li>• <strong>Tay-Sachs:</strong> 1:30</li>
                <li>• <strong>Canavan:</strong> 1:40</li>
                <li>• <strong>Familial dysautonomia:</strong> 1:30</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-accent mb-2">Pan-ethnic High</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>PKU:</strong> 1:50</li>
                <li>• <strong>CF:</strong> 1:25 (Northern European)</li>
                <li>• <strong>FH:</strong> 1:250</li>
                <li>• <strong>α1-AT deficiency:</strong> 1:25</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-secondary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            💊 Treatment Pearls
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-secondary mb-2">Diet from Birth</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>PKU:</strong> Low phenylalanine diet</li>
                <li>• <strong>Galactosemia:</strong> No galactose</li>
                <li>• <strong>MSUD:</strong> Low BCAA</li>
                <li>• <strong>Tyrosinemia:</strong> Low tyrosine + NTBC</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-secondary mb-2">Other Treatments</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>ERT available:</strong> Gaucher, Fabry, Pompe, MPS I/II</li>
                <li>• <strong>Vitamin responsive:</strong> B6 (homocystinuria), B12 (MMA)</li>
                <li>• <strong>Liver transplant curative:</strong> Tyrosinemia, some UCDs</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-destructive/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ⚠️ Emergency Management
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-destructive mb-2">First Steps</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>NPO + D10:</strong> First step for most</li>
                <li>• <strong>Dialysis:</strong> MSUD, hyperammonemia</li>
                <li>• <strong>Avoid catabolism:</strong> Key principle</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-destructive mb-2">Important Notes</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Written protocol:</strong> Essential for families</li>
                <li>• <strong>Emergency contacts:</strong> Metabolic team</li>
                <li>• <strong>Medical alert:</strong> Bracelets recommended</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [],
    estimatedReadTime: 7
  },
  {
    id: 'practice-questions',
    title: '📝 Practice Questions',
    content: `
      <div class="space-y-8">
        <div class="practice-question">
          <h3 class="text-lg font-semibold mb-4">Question 1</h3>
          <div class="bg-slate-50 p-4 rounded-lg mb-4">
            <p>A 6-month-old presents with poor feeding, vomiting, and lethargy after a viral illness. Labs show hypoglycemia without ketones, elevated liver enzymes, and hyperammonemia. Acylcarnitine profile shows elevated C8. What is the most likely diagnosis?</p>
            <div class="mt-4 space-y-2">
              <div><strong>A)</strong> MCAD deficiency</div>
              <div><strong>B)</strong> Propionic acidemia</div>
              <div><strong>C)</strong> Glycogen storage disease I</div>
              <div><strong>D)</strong> Ornithine transcarbamylase deficiency</div>
            </div>
          </div>
          <details class="bg-green-50 p-4 rounded-lg">
            <summary class="font-semibold cursor-pointer">Click for answer</summary>
            <div class="mt-2">
              <p><strong>Answer: A - MCAD deficiency</strong></p>
              <p class="mt-2 text-sm">Hypoketotic hypoglycemia is classic for MCAD. C8 elevation is specific for MCAD deficiency. Triggered by illness/fasting. Hyperammonemia can occur but is not the primary feature.</p>
            </div>
          </details>
        </div>

        <div class="practice-question">
          <h3 class="text-lg font-semibold mb-4">Question 2</h3>
          <div class="bg-slate-50 p-4 rounded-lg mb-4">
            <p>A couple of Ashkenazi Jewish descent requests carrier screening. The woman is found to be a carrier for Gaucher disease. What is the chance their child will be affected if the man is also of 100% Ashkenazi Jewish descent?</p>
            <div class="mt-4 space-y-2">
              <div><strong>A)</strong> 1:60</div>
              <div><strong>B)</strong> 1:120</div>
              <div><strong>C)</strong> 1:240</div>
              <div><strong>D)</strong> 1:900</div>
            </div>
          </div>
          <details class="bg-green-50 p-4 rounded-lg">
            <summary class="font-semibold cursor-pointer">Click for answer</summary>
            <div class="mt-2">
              <p><strong>Answer: A - 1:60</strong></p>
              <p class="mt-2 text-sm">Woman is carrier (confirmed). Man's carrier risk: 1:15 (AJ population). Risk calculation: 1 × 1/15 × 1/4 = 1/60</p>
            </div>
          </details>
        </div>

        <div class="practice-question">
          <h3 class="text-lg font-semibold mb-4">Question 3</h3>
          <div class="bg-slate-50 p-4 rounded-lg mb-4">
            <p>A 35-year-old woman with PKU (diagnosed by NBS, poorly controlled) presents at 8 weeks gestation. Her Phe level is 850 μmol/L. What is her fetus at highest risk for?</p>
            <div class="mt-4 space-y-2">
              <div><strong>A)</strong> PKU</div>
              <div><strong>B)</strong> Microcephaly</div>
              <div><strong>C)</strong> Galactosemia</div>
              <div><strong>D)</strong> Neural tube defects</div>
            </div>
          </div>
          <details class="bg-green-50 p-4 rounded-lg">
            <summary class="font-semibold cursor-pointer">Click for answer</summary>
            <div class="mt-2">
              <p><strong>Answer: B - Microcephaly</strong></p>
              <p class="mt-2 text-sm">Maternal PKU syndrome. High Phe is teratogenic. Microcephaly most common (73%). Fetus is obligate carrier, not affected with PKU.</p>
            </div>
          </details>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [],
    estimatedReadTime: 8
  },
  {
    id: 'topic-5-completion-checklist',
    title: '✅ Topic 5 Completion Checklist',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ✅ Core Knowledge Areas
          </h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Know which disorders are included in newborn screening</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Understand PKU classification and maternal PKU syndrome</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Master Ashkenazi Jewish carrier screening panel</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Recognize emergency presentations (MCAD, MSUD, MMA)</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Distinguish lysosomal storage disorders by features</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Know inheritance patterns (AR vs X-linked disorders)</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Understand enzyme replacement therapy options</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Completed all practice questions successfully</span>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📚 Next Steps
          </h3>
          <div class="space-y-2 text-sm">
            <div><strong>Next Topic:</strong> <a href="#" class="text-primary hover:underline">Topic 6: Specialized Organ Systems →</a></div>
            <div><strong>Review Schedule:</strong> Review this topic after completing Topic 6</div>
            <div><strong>Study Time Recommendation:</strong> 15-18 hours</div>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [],
    estimatedReadTime: 3
  }
]

export const topic5QuickLookup = {
  id: 'topic5-quick-lookup',
  title: 'Quick Disorder Lookup',
  headers: ['Disorder', 'Gene/Defect', 'Key Features', 'Inheritance', 'NBS'],
  rows: [
    {
      id: 'pku',
      cells: ['PKU', 'PAH', 'ID without treatment, musty odor', 'AR', 'Yes']
    },
    {
      id: 'galactosemia',
      cells: ['Galactosemia', 'GALT', 'Liver disease, E. coli sepsis', 'AR', 'Yes']
    },
    {
      id: 'mcad',
      cells: ['MCAD', 'ACADM', 'Hypoketotic hypoglycemia', 'AR', 'Yes']
    },
    {
      id: 'gaucher',
      cells: ['Gaucher', 'GBA', 'Hepatosplenomegaly, bone disease', 'AR', 'No']
    },
    {
      id: 'tay-sachs',
      cells: ['Tay-Sachs', 'HEXA', 'Cherry-red spot, neurodegeneration', 'AR', 'No']
    },
    {
      id: 'fabry',
      cells: ['Fabry', 'GLA', 'Acroparesthesias, angiokeratomas', 'X-linked', 'Some']
    },
    {
      id: 'wilson',
      cells: ['Wilson', 'ATP7B', 'K-F rings, liver disease', 'AR', 'No']
    },
    {
      id: 'x-ald',
      cells: ['X-ALD', 'ABCD1', 'Adrenal insufficiency, white matter disease', 'X-linked', 'Some']
    }
  ]
} 