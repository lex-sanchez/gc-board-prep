import type { StudySection } from '@/types/learning'

export const topic3Sections: StudySection[] = [
  {
    id: 'quick-navigation',
    title: 'Quick Navigation',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📋 Table of Contents
          </h3>
          <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">🫁 Pulmonary Disorders</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Cystic Fibrosis (CF) ⭐⭐⭐</strong></li>
                <li>• <strong>α1-Antitrypsin Deficiency ⭐⭐</strong></li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">❤️ Cardiovascular Disorders</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Hypertrophic Cardiomyopathy (HCM) ⭐⭐⭐</strong></li>
                <li>• <strong>Long QT Syndrome (LQTS) ⭐⭐⭐</strong></li>
                <li>• <strong>Dilated Cardiomyopathy (DCM) ⭐⭐</strong></li>
              </ul>
            </div>
          </div>
          <div class="mt-4">
            <h4 class="mb-2 font-semibold text-primary">🫘 Renal/Genital Disorders</h4>
            <ul class="space-y-1 text-sm">
              <li>• <strong>Polycystic Kidney Disease ⭐⭐⭐</strong></li>
              <li>• <strong>Alport Syndrome ⭐⭐</strong></li>
              <li>• <strong>Disorders of Sex Development</strong></li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [],
    estimatedReadTime: 2
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
              <span><strong>Explain</strong> CFTR mutation classes and their clinical implications in cystic fibrosis</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span><strong>Apply</strong> cystic fibrosis carrier screening guidelines and interpret residual risks</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span><strong>Distinguish</strong> between different types of cardiomyopathies and their genetic causes</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span><strong>Recognize</strong> clinical features and genetic testing for Long QT syndrome variants</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <span><strong>Compare</strong> autosomal dominant vs autosomal recessive polycystic kidney disease</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <span><strong>Understand</strong> disorders of sex development and their genetic mechanisms</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">7</span>
              <span><strong>Describe</strong> α1-antitrypsin deficiency inheritance and phenotype-genotype correlations</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">8</span>
              <span><strong>Analyze</strong> family history patterns for organ system genetic disorders</span>
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
    id: 'pulmonary-disorders',
    title: '🫁 PULMONARY DISORDERS',
    content: `
      <div class="space-y-8">
        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Cystic Fibrosis (CF) ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">Most Important Pulmonary Genetic Disorder - Study This First!</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Pulmonary insufficiency</strong> - chronic respiratory infections, thick mucus</li>
              <li><strong>CBAVD</strong> - congenital bilateral absence of vas deferens (male infertility)</li>
              <li><strong>Elevated sweat chloride</strong> - diagnostic hallmark (>60 mEq/L)</li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold text-primary mb-2">Pulmonary:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Thick, sticky mucus → chronic bacterial infections</li>
                  <li>• Pseudomonas aeruginosa colonization</li>
                  <li>• Progressive lung damage and fibrosis</li>
                  <li>• Chronic cough, wheezing, shortness of breath</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Gastrointestinal:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Pancreatic insufficiency → malabsorption, FTT</li>
                  <li>• Meconium ileus (10-15% of newborns)</li>
                  <li>• CF-related diabetes (CFRD)</li>
                  <li>• Liver disease, gallstones</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Reproductive:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Male infertility due to CBAVD (>95%)</li>
                  <li>• Female fertility reduced but possible</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Other:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Salt-wasting, dehydration</li>
                  <li>• Nasal polyps, sinusitis</li>
                  <li>• Clubbing of fingers/toes</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="molecular-genetics">
            <h4>🧬 CFTR Mutation Classes</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h5 class="font-semibold text-red-700 mb-2">Severe Phenotype Classes</h5>
                <div class="space-y-2 text-sm">
                  <div><strong>Class 1:</strong> Protein Production Defects (nonsense, frameshift)</div>
                  <div><strong>Class 2:</strong> ΔF508 - Protein Processing Defects</div>
                  <div><strong>Class 3:</strong> G551D - Gating Defects (responds to ivacaftor)</div>
                </div>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h5 class="font-semibold text-yellow-700 mb-2">Milder Phenotype Classes</h5>
                <div class="space-y-2 text-sm">
                  <div><strong>Class 4:</strong> R117H - Conduction Defects</div>
                  <div><strong>Class 5:</strong> Insufficient Protein</div>
                  <div><strong>Class 6:</strong> Decreased Stability</div>
                </div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• CF is most common lethal AR disorder in Caucasians</li>
              <li>• CFTR classes 1-3 = severe, classes 4-6 = milder</li>
              <li>• ΔF508 accounts for ~70% of CF alleles worldwide</li>
              <li>• CBAVD can be isolated (mild CFTR variants) or part of CF spectrum</li>
              <li>• R117H + 5T = pancreatic sufficient CF, CBAVD</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-header">
            <h3 class="syndrome-title">α1-Antitrypsin Deficiency ⭐⭐</h3>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Emphysema</strong> - particularly lower lobe, early onset</li>
              <li><strong>Liver dysfunction</strong> - jaundice, cirrhosis, hepatocellular carcinoma risk</li>
              <li><strong>Co-dominant inheritance</strong> - both alleles contribute to phenotype</li>
            </ol>
          </div>

          <div class="molecular-genetics">
            <h4>🧬 Molecular Genetics</h4>
            <div class="space-y-2">
              <div><strong>SERPINA1 Gene Variants:</strong></div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <div><strong>M allele:</strong> Normal (wild-type)</div>
                  <div><strong>S allele:</strong> Moderately reduced α1-AT levels</div>
                  <div><strong>Z allele:</strong> Severely reduced α1-AT levels</div>
                </div>
                <div>
                  <div><strong>Phenotype Severity:</strong></div>
                  <div class="text-sm space-y-1">
                    <div>1. <strong>ZZ:</strong> Severe deficiency</div>
                    <div>2. <strong>SZ:</strong> Moderate deficiency</div>
                    <div>3. <strong>SS:</strong> Mild deficiency</div>
                    <div>4. <strong>MZ:</strong> Slightly increased risk</div>
                    <div>5. <strong>MS:</strong> Normal protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• One of most common metabolic disorders in Europeans</li>
              <li>• Smoking dramatically increases lung disease risk in deficient individuals</li>
              <li>• Liver disease can occur without lung involvement</li>
              <li>• "Co-dominant" = both alleles affect phenotype</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: ["CF: Classes 1-3 = severe, 4-6 = milder", "α1-AT: ZZ worst, SZ moderate, SS mild"],
    estimatedReadTime: 12
  },
  {
    id: 'cardiovascular-disorders',
    title: '❤️ CARDIOVASCULAR DISORDERS',
    content: `
      <div class="space-y-8">
        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Hypertrophic Cardiomyopathy (HCM) ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">Most Common Inherited Cardiac Condition</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Thick cardiac muscle</strong> - particularly interventricular septum</li>
              <li><strong>Sudden cardiac death risk</strong> - especially in young athletes</li>
              <li><strong>Autosomal dominant</strong> - with variable expressivity</li>
            </ol>
          </div>

          <div class="clinical-features">
            <h4>🏥 Clinical Features</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold text-primary mb-2">Symptoms:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Chest pain</li>
                  <li>• Shortness of breath</li>
                  <li>• Palpitations</li>
                  <li>• Syncope</li>
                  <li>• Exercise intolerance</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Physical Exam:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Harsh systolic murmur</li>
                  <li>• Murmur increases with Valsalva</li>
                  <li>• Bifid carotid pulse</li>
                  <li>• S4 gallop</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="molecular-genetics">
            <h4>🧬 Molecular Genetics</h4>
            <div class="space-y-3">
              <div><strong>Most Common Genes:</strong></div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-blue-50 p-3 rounded">
                  <div><strong>MYH7 (β-myosin heavy chain):</strong> ~25%</div>
                  <div><strong>MYBPC3 (myosin binding protein C):</strong> ~25%</div>
                </div>
                <div class="bg-green-50 p-3 rounded">
                  <div><strong>TNNT2 (troponin T):</strong> ~5%</div>
                  <div><strong>TNNI3 (troponin I):</strong> ~5%</div>
                </div>
              </div>
              <div class="text-sm"><strong>Overall:</strong> ~60% of HCM cases have identifiable mutations</div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Prevalence: 1:500 (most common inherited cardiac condition)</li>
              <li>• Murmur decreases with squatting, increases with standing/Valsalva</li>
              <li>• Screen first-degree relatives with echo + ECG</li>
              <li>• Genetic testing yield ~60%</li>
              <li>• Activity restrictions for competitive athletes</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Long QT Syndrome (LQTS) ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">Channelopathy with Sudden Death Risk</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Prolonged QT interval</strong> - corrected QT (QTc) >450ms (men), >460ms (women)</li>
              <li><strong>Syncope/sudden death</strong> - triggered by specific stimuli</li>
              <li><strong>Trigger-specific types</strong> - exercise, emotion, auditory stimuli</li>
            </ol>
          </div>

          <div class="molecular-genetics">
            <h4>🧬 Major LQTS Types</h4>
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h5 class="font-semibold text-red-700 mb-2">LQT1 (KCNQ1) - ~45%</h5>
                <ul class="text-sm space-y-1">
                  <li>• <strong>Trigger:</strong> Exercise, swimming</li>
                  <li>• <strong>ECG:</strong> Broad-based T waves</li>
                  <li>• <strong>Treatment:</strong> β-blockers very effective</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h5 class="font-semibold text-orange-700 mb-2">LQT2 (KCNH2) - ~35%</h5>
                <ul class="text-sm space-y-1">
                  <li>• <strong>Trigger:</strong> Emotion, auditory stimuli</li>
                  <li>• <strong>ECG:</strong> Bifid/notched T waves</li>
                  <li>• <strong>Treatment:</strong> β-blockers, avoid QT-prolonging drugs</li>
                </ul>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h5 class="font-semibold text-yellow-700 mb-2">LQT3 (SCN5A) - ~10%</h5>
                <ul class="text-sm space-y-1">
                  <li>• <strong>Trigger:</strong> Rest, sleep</li>
                  <li>• <strong>ECG:</strong> Late-appearing T waves</li>
                  <li>• <strong>Treatment:</strong> β-blockers less effective, consider ICD</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Prevalence: ~1:2,500</li>
              <li>• QTc calculation: QT/√RR interval</li>
              <li>• Family screening: ECG all first-degree relatives</li>
              <li>• Drug-induced LQTS: Check QTdrugs.org</li>
              <li>• Genetic testing yield ~75%</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Dilated Cardiomyopathy (DCM) ⭐⭐</h3>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Enlarged heart</strong> - with reduced ejection fraction</li>
              <li><strong>Heart failure symptoms</strong> - dyspnea, fatigue, edema</li>
              <li><strong>Genetic heterogeneity</strong> - many genes involved</li>
            </ol>
          </div>

          <div class="molecular-genetics">
            <h4>🧬 Common Genes</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div><strong>TTN (titin):</strong> ~20%</div>
                <div><strong>LMNA (lamin A/C):</strong> ~5%</div>
                <div><strong>MYH7:</strong> ~3%</div>
              </div>
              <div>
                <div><strong>MYBPC3:</strong> ~3%</div>
                <div><strong>TNNT2:</strong> ~2%</div>
                <div><strong>Overall yield:</strong> ~40%</div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• LMNA mutations → high arrhythmia risk</li>
              <li>• TTN truncating variants most common cause</li>
              <li>• Screen first-degree relatives with echo</li>
              <li>• Consider genetic testing if family history or young onset</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: ["LQTS triggers: Exercise Emotions Rest (LQT1, LQT2, LQT3)", "HCM murmur: decreases with squatting, increases with Valsalva"],
    estimatedReadTime: 15
  },
  {
    id: 'renal-genital-disorders',
    title: '🫘 RENAL/GENITAL DISORDERS',
    content: `
      <div class="space-y-8">
        <div class="syndrome-card syndrome-card-high">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Polycystic Kidney Disease ⭐⭐⭐</h3>
            <div class="syndrome-subtitle">Most Common Inherited Kidney Disease</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-semibold text-blue-700 mb-2">ADPKD (Autosomal Dominant)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Bilateral renal cysts</li>
                  <li>• Hypertension</li>
                  <li>• Kidney enlargement</li>
                  <li>• Adult onset symptoms</li>
                  <li>• PKD1 (85%) or PKD2 (15%)</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h5 class="font-semibold text-green-700 mb-2">ARPKD (Autosomal Recessive)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Infantile presentation</li>
                  <li>• Enlarged echogenic kidneys</li>
                  <li>• Oligohydramnios</li>
                  <li>• Pulmonary hypoplasia</li>
                  <li>• PKHD1 gene</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="clinical-features">
            <h4>🏥 ADPKD Clinical Features</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold text-primary mb-2">Renal:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Progressive kidney enlargement</li>
                  <li>• Chronic kidney disease</li>
                  <li>• Hypertension (early sign)</li>
                  <li>• Kidney stones</li>
                  <li>• UTIs</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-primary mb-2">Extra-renal:</h5>
                <ul class="space-y-1 text-sm">
                  <li>• Liver cysts (common)</li>
                  <li>• Intracranial aneurysms (8-10%)</li>
                  <li>• Mitral valve prolapse</li>
                  <li>• Colonic diverticulosis</li>
                  <li>• Hernias</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="molecular-genetics">
            <h4>🧬 Molecular Genetics</h4>
            <div class="space-y-3">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-purple-50 p-3 rounded">
                  <div><strong>PKD1 (16p13.3):</strong></div>
                  <div class="text-sm">• 85% of ADPKD cases</div>
                  <div class="text-sm">• More severe phenotype</div>
                  <div class="text-sm">• Earlier onset ESRD</div>
                </div>
                <div class="bg-pink-50 p-3 rounded">
                  <div><strong>PKD2 (4q22.1):</strong></div>
                  <div class="text-sm">• 15% of ADPKD cases</div>
                  <div class="text-sm">• Milder phenotype</div>
                  <div class="text-sm">• Later onset ESRD</div>
                </div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• ADPKD prevalence: 1:400-1:1,000</li>
              <li>• PKD1 → ESRD ~54 years, PKD2 → ESRD ~74 years</li>
              <li>• Screen for intracranial aneurysms if family history</li>
              <li>• Genetic testing challenging due to PKD1 pseudogenes</li>
              <li>• Ultrasound criteria vary by age and family history</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Alport Syndrome ⭐⭐</h3>
            <div class="syndrome-subtitle">Hereditary Nephritis with Hearing Loss</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features (Top 3)</h4>
            <ol>
              <li><strong>Progressive nephritis</strong> - hematuria, proteinuria</li>
              <li><strong>Sensorineural hearing loss</strong> - high frequency</li>
              <li><strong>Ocular abnormalities</strong> - anterior lenticonus</li>
            </ol>
          </div>

          <div class="molecular-genetics">
            <h4>🧬 Genetic Types</h4>
            <div class="space-y-3">
              <div class="bg-red-50 p-3 rounded">
                <div><strong>X-linked (85%):</strong> COL4A5</div>
                <div class="text-sm">• Males severely affected</div>
                <div class="text-sm">• Females variably affected</div>
              </div>
              <div class="bg-blue-50 p-3 rounded">
                <div><strong>Autosomal recessive (10%):</strong> COL4A3/COL4A4</div>
                <div class="text-sm">• Both sexes equally affected</div>
              </div>
              <div class="bg-green-50 p-3 rounded">
                <div><strong>Autosomal dominant (5%):</strong> COL4A3/COL4A4</div>
                <div class="text-sm">• Milder phenotype</div>
              </div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• Prevalence: ~1:50,000</li>
              <li>• Males with X-linked form → ESRD by 30s</li>
              <li>• Anterior lenticonus pathognomonic</li>
              <li>• Kidney biopsy shows basket-weave appearance</li>
              <li>• Genetic testing preferred over biopsy</li>
            </ul>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-header">
            <h3 class="syndrome-title">Disorders of Sex Development</h3>
            <div class="syndrome-subtitle">Androgen Insensitivity Syndrome (AIS)</div>
          </div>
          
          <div class="key-features">
            <h4>🔑 Key Features</h4>
            <div class="space-y-3">
              <div class="bg-pink-50 p-4 rounded-lg">
                <h5 class="font-semibold text-pink-700 mb-2">Complete AIS (CAIS)</h5>
                <ul class="text-sm space-y-1">
                  <li>• 46,XY karyotype</li>
                  <li>• Female external genitalia</li>
                  <li>• Absent/rudimentary vagina</li>
                  <li>• No uterus</li>
                  <li>• Inguinal/abdominal testes</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-semibold text-blue-700 mb-2">Partial AIS (PAIS)</h5>
                <ul class="text-sm space-y-1">
                  <li>• Variable virilization</li>
                  <li>• Ambiguous genitalia</li>
                  <li>• Micropenis, hypospadias</li>
                  <li>• Bifid scrotum</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="molecular-genetics">
            <h4>🧬 Molecular Genetics</h4>
            <div class="space-y-2">
              <div><strong>Gene:</strong> AR (androgen receptor) - X-linked</div>
              <div><strong>Mechanism:</strong> Androgen insensitivity</div>
              <div><strong>Prevalence:</strong> CAIS ~1:20,000 XY individuals</div>
            </div>
          </div>

          <div class="board-pearls">
            <h4>💎 Board Pearls</h4>
            <ul>
              <li>• CAIS: Normal female phenotype until puberty</li>
              <li>• Primary amenorrhea common presentation</li>
              <li>• Gonadectomy recommended (malignancy risk)</li>
              <li>• Hormone replacement therapy needed</li>
              <li>• Genetic counseling crucial for family planning</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 1,
    subsections: [],
    practiceQuestions: [],
    mnemonics: ["ADPKD: PKD1 = 54 years ESRD, PKD2 = 74 years ESRD", "Alport: anterior lenticonus pathognomonic"],
    estimatedReadTime: 12
  },
  {
    id: 'study-tips-mnemonics',
    title: '🧠 Study Tips & Mnemonics',
    content: `
      <div class="space-y-6">
        <div class="mnemonics-card">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🧠 Memory Aids & Mnemonics
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">CFTR Mutation Classes</h4>
                <div class="text-sm space-y-1">
                  <div><strong>"No Protein, Processing Problems, Gating Gone"</strong></div>
                  <div>• Classes 1-3: Severe phenotype</div>
                  <div>• Classes 4-6: Milder phenotype</div>
                  <div>• ΔF508 = Class 2 (most common)</div>
                </div>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold text-green-700 mb-2">Long QT Triggers</h4>
                <div class="text-sm space-y-1">
                  <div><strong>"Exercise Emotions Rest"</strong></div>
                  <div>• LQT1: Exercise, swimming</div>
                  <div>• LQT2: Emotions, auditory</div>
                  <div>• LQT3: Rest, sleep</div>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-purple-700 mb-2">α1-Antitrypsin Phenotypes</h4>
                <div class="text-sm space-y-1">
                  <div><strong>"Zebras are Sickest, then Some, then Mild"</strong></div>
                  <div>• ZZ: Most severe</div>
                  <div>• SZ: Moderate</div>
                  <div>• SS: Mild</div>
                  <div>• MZ/MS: Minimal risk</div>
                </div>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-semibold text-yellow-700 mb-2">HCM vs DCM</h4>
                <div class="text-sm space-y-1">
                  <div><strong>"Thick vs Thin"</strong></div>
                  <div>• HCM: Thick walls, murmur with Valsalva</div>
                  <div>• DCM: Thin walls, heart failure</div>
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
    mnemonics: ["CFTR: No Protein, Processing Problems, Gating Gone", "LQTS: Exercise Emotions Rest", "α1-AT: Zebras Sickest, Some, Mild", "HCM vs DCM: Thick vs Thin"],
    estimatedReadTime: 4
  },
  {
    id: 'high-yield-facts-summary',
    title: '📝 High-Yield Facts Summary',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📊 Must-Know Statistics
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-primary mb-2">Prevalences</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>CF:</strong> 1/3,200 (Caucasians)</li>
                <li>• <strong>HCM:</strong> 1/500</li>
                <li>• <strong>LQTS:</strong> 1/2,500</li>
                <li>• <strong>ADPKD:</strong> 1/400-1,000</li>
                <li>• <strong>α1-AT deficiency:</strong> 1/2,500</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-2">Inheritance Patterns</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>CF:</strong> Autosomal recessive</li>
                <li>• <strong>HCM/LQTS/ADPKD:</strong> Autosomal dominant</li>
                <li>• <strong>α1-AT:</strong> Co-dominant</li>
                <li>• <strong>X-linked Alport:</strong> X-linked</li>
                <li>• <strong>AIS:</strong> X-linked recessive</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 Testing Essentials
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-accent mb-2">Diagnostic Tests</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>CF:</strong> Sweat chloride >60 mEq/L</li>
                <li>• <strong>HCM:</strong> Echo + ECG</li>
                <li>• <strong>LQTS:</strong> QTc >450ms (M), >460ms (F)</li>
                <li>• <strong>ADPKD:</strong> Renal ultrasound</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-accent mb-2">Genetic Testing Yields</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>HCM:</strong> ~60%</li>
                <li>• <strong>LQTS:</strong> ~75%</li>
                <li>• <strong>DCM:</strong> ~40%</li>
                <li>• <strong>CF:</strong> >95% (screening panel)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-secondary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ⚠️ Management Pearls
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="font-semibold text-secondary mb-2">Family Screening</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>HCM:</strong> Echo + ECG for first-degree relatives</li>
                <li>• <strong>LQTS:</strong> ECG for first-degree relatives</li>
                <li>• <strong>ADPKD:</strong> Ultrasound for at-risk relatives</li>
                <li>• <strong>Alport:</strong> Urine analysis + hearing test</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-secondary mb-2">Treatment Highlights</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>CF:</strong> Ivacaftor for G551D mutations</li>
                <li>• <strong>LQTS:</strong> β-blockers (LQT1/2), avoid QT drugs</li>
                <li>• <strong>HCM:</strong> Activity restrictions for athletes</li>
                <li>• <strong>AIS:</strong> Gonadectomy (malignancy risk)</li>
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
    estimatedReadTime: 6
  },
  {
    id: 'practice-questions',
    title: '🎯 Practice Questions',
    content: `
      <div class="space-y-8">
        <div class="practice-question">
          <h3 class="text-lg font-semibold mb-4">Question 1</h3>
          <div class="bg-slate-50 p-4 rounded-lg mb-4">
            <p>A 25-year-old man presents with recurrent respiratory infections and infertility. Sweat chloride test is 75 mEq/L. His partner asks about the risk to their future children if they conceive through IVF with ICSI.</p>
            <div class="mt-4 space-y-2">
              <div><strong>A)</strong> 25% risk of cystic fibrosis</div>
              <div><strong>B)</strong> 50% risk of being carriers</div>
              <div><strong>C)</strong> Risk depends on partner's carrier status</div>
              <div><strong>D)</strong> No increased risk</div>
            </div>
          </div>
          <details class="bg-green-50 p-4 rounded-lg">
            <summary class="font-semibold cursor-pointer">Click for answer</summary>
            <div class="mt-2">
              <p><strong>Answer: C) Risk depends on partner's carrier status</strong></p>
              <p class="mt-2 text-sm">The man has CF (sweat Cl⁻ >60 mEq/L), so he will pass a CF mutation to all offspring. Risk to children depends on whether his partner is a carrier. If she's a carrier: 50% affected, 50% carriers. If not a carrier: 100% carriers, 0% affected.</p>
            </div>
          </details>
        </div>

        <div class="practice-question">
          <h3 class="text-lg font-semibold mb-4">Question 2</h3>
          <div class="bg-slate-50 p-4 rounded-lg mb-4">
            <p>A 16-year-old athlete collapses during basketball practice. ECG shows QTc of 480ms. Family history reveals a maternal uncle who died suddenly at age 20. What is the most appropriate next step?</p>
            <div class="mt-4 space-y-2">
              <div><strong>A)</strong> Restrict all physical activity</div>
              <div><strong>B)</strong> Start β-blocker therapy</div>
              <div><strong>C)</strong> Screen family members with ECG</div>
              <div><strong>D)</strong> All of the above</div>
            </div>
          </div>
          <details class="bg-green-50 p-4 rounded-lg">
            <summary class="font-semibold cursor-pointer">Click for answer</summary>
            <div class="mt-2">
              <p><strong>Answer: D) All of the above</strong></p>
              <p class="mt-2 text-sm">This presentation suggests LQTS. Management includes: activity restriction (especially competitive sports), β-blocker therapy, and family screening with ECGs. The combination of prolonged QT, syncope, and family history of sudden death is concerning for LQTS.</p>
            </div>
          </details>
        </div>

        <div class="practice-question">
          <h3 class="text-lg font-semibold mb-4">Question 3</h3>
          <div class="bg-slate-50 p-4 rounded-lg mb-4">
            <p>A 45-year-old man with a family history of kidney disease presents with hypertension and flank pain. Renal ultrasound shows multiple bilateral cysts. His father required dialysis at age 55. What is the most likely diagnosis?</p>
            <div class="mt-4 space-y-2">
              <div><strong>A)</strong> ADPKD due to PKD1 mutation</div>
              <div><strong>B)</strong> ADPKD due to PKD2 mutation</div>
              <div><strong>C)</strong> ARPKD</div>
              <div><strong>D)</strong> Acquired cystic kidney disease</div>
            </div>
          </div>
          <details class="bg-green-50 p-4 rounded-lg">
            <summary class="font-semibold cursor-pointer">Click for answer</summary>
            <div class="mt-2">
              <p><strong>Answer: A) ADPKD due to PKD1 mutation</strong></p>
              <p class="mt-2 text-sm">The family history (father affected, suggesting AD inheritance) and early onset of ESRD (age 55) suggests PKD1-related ADPKD. PKD1 causes more severe disease with earlier ESRD (~54 years) compared to PKD2 (~74 years). ARPKD presents in infancy.</p>
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
    id: 'topic-3-completion-checklist',
    title: '🏁 Topic 3 Completion Checklist',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ✅ Knowledge Checklist
          </h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Can explain CFTR mutation classes and their clinical implications</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Understand CF carrier screening guidelines and residual risks</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Know key features of HCM, LQTS, and DCM</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Recognize LQTS triggers and ECG patterns by subtype</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Distinguish ADPKD from ARPKD</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Understand α1-antitrypsin co-dominant inheritance</span>
            </div>
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1" />
              <span>Know AIS clinical features and management</span>
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
            <div><strong>Next Topic:</strong> <a href="#" class="text-primary hover:underline">Topic 4: Neurological, Neuromuscular & Developmental Disorders →</a></div>
            <div><strong>Review Schedule:</strong> Review this topic after completing Topic 5</div>
            <div><strong>Study Time Recommendation:</strong> 8-10 hours</div>
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

export const topic3QuickLookup = {
  id: 'topic3-quick-lookup',
  title: 'Quick Condition Lookup',
  headers: ['Condition', 'Gene(s)', 'Key Features', 'Inheritance', 'Prevalence'],
  rows: [
    {
      id: 'cf',
      cells: ['Cystic Fibrosis', 'CFTR', 'Pulmonary insufficiency, CBAVD, ↑ sweat Cl⁻', 'AR', '1/3,200']
    },
    {
      id: 'a1at',
      cells: ['α1-Antitrypsin Deficiency', 'SERPINA1', 'Early emphysema, liver disease', 'Co-dominant', '1/2,500']
    },
    {
      id: 'hcm',
      cells: ['Hypertrophic Cardiomyopathy', 'MYH7, MYBPC3', 'Thick cardiac muscle, sudden death risk', 'AD', '1/500']
    },
    {
      id: 'lqts',
      cells: ['Long QT Syndrome', 'KCNQ1, KCNH2, SCN5A', 'Prolonged QT, syncope, triggers', 'AD', '1/2,500']
    },
    {
      id: 'adpkd',
      cells: ['ADPKD', 'PKD1, PKD2', 'Bilateral renal cysts, hypertension', 'AD', '1/1,000']
    },
    {
      id: 'alport',
      cells: ['Alport Syndrome', 'COL4A5, COL4A3/4', 'Progressive nephritis, hearing loss', 'X-linked/AR', '1/50,000']
    },
    {
      id: 'ais',
      cells: ['AIS', 'AR', '46,XY with female external genitalia', 'X-linked', '1/20,000']
    }
  ]
} 