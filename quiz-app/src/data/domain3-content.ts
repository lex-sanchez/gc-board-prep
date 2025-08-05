import type { StudySection } from '@/types/learning'

export const domain3Sections: StudySection[] = [
  {
    id: 'genetic-testing-technologies',
    title: 'Genetic Testing Technologies',
    content: `
      <div class="space-y-6">
        <div class="bg-primary/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🧬 Core Testing Technologies
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-primary mb-2">Karyotype Analysis ⭐⭐</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Gold standard</strong> for balanced chromosomal rearrangements</li>
                <li>• <strong>Detects mosaicism</strong> better than other methods</li>
                <li>• <strong>Resolution:</strong> ~5-10 Mb deletions/duplications</li>
                <li>• <strong>Best for:</strong> Balanced translocations, mosaicism, marker chromosomes</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-2">Chromosomal Microarray (CMA) ⭐⭐⭐</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>First-tier test</strong> for developmental delay/autism</li>
                <li>• <strong>Higher resolution</strong> than karyotype (~50-100 kb)</li>
                <li>• <strong>Detects CNVs</strong> (copy number variants)</li>
                <li>• <strong>Diagnostic yield:</strong> DD/ID (15-20%), ASD (7-10%)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-accent/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🔬 Sequencing Technologies ⭐⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-accent mb-2">Test Selection Strategy</h4>
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-green-600 mb-2">Single Gene</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Strong clinical suspicion (>50%)</li>
                    <li>• Well-defined phenotype</li>
                    <li>• Cost considerations</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-blue-600 mb-2">Gene Panel</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Moderate clinical suspicion</li>
                    <li>• Overlapping phenotypes</li>
                    <li>• Multiple genes possible</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-purple-600 mb-2">WES/WGS</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Broad differential diagnosis</li>
                    <li>• Previous testing negative</li>
                    <li>• Atypical presentations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-semibold text-yellow-700 mb-2">💎 Board Pearls</h4>
              <ul class="space-y-1 text-sm text-yellow-600">
                <li>• WES diagnostic yield highest in pediatric neurology (25-30%)</li>
                <li>• Trio analysis increases diagnostic yield by 5-10%</li>
                <li>• WGS includes non-coding regions but has complex interpretation</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-green/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🧪 Specialized Testing Methods ⭐⭐
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-green-700 mb-2">MS-MLPA</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Applications:</strong> Prader-Willi/Angelman, BWS, SRS</li>
                <li>• <strong>Advantage:</strong> Detects deletions, duplications, AND methylation</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-green-700 mb-2">Repeat-Primed PCR</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Applications:</strong> Fragile X, Huntington, myotonic dystrophy</li>
                <li>• <strong>Advantage:</strong> Detects repeat expansions accurately</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [
      {
        id: 'cma-first-tier',
        question: 'A 2-year-old with developmental delay and dysmorphic features has a normal karyotype. What is the most appropriate next genetic test?',
        options: {
          A: 'Fragile X testing',
          B: 'Chromosomal microarray',
          C: 'Whole exome sequencing',
          D: 'Targeted gene panel'
        },
        correctAnswer: 'B',
        explanation: 'CMA is the first-tier genetic test recommended by ACMG for unexplained developmental delay/intellectual disability, especially when associated with dysmorphic features. It has higher resolution than karyotype and can detect pathogenic CNVs missed by conventional chromosome analysis.'
      },
      {
        id: 'sequencing-selection',
        question: 'Which testing approach is most appropriate for a patient with suspected Huntington disease?',
        options: {
          A: 'Chromosomal microarray',
          B: 'Gene panel',
          C: 'Single gene sequencing',
          D: 'Whole exome sequencing'
        },
        correctAnswer: 'C',
        explanation: 'For Huntington disease, single gene testing of HTT is most appropriate due to the high clinical suspicion and single gene etiology. The testing specifically looks for CAG repeat expansions in the HTT gene, making targeted testing more efficient than broader approaches.'
      }
    ],
    mnemonics: [
      "CMA First: Chromosomal Microarray first for DD/ASD - First-tier Imaging for Resolution Superior to karyotype Testing",
      "Sequence by Suspicion: Single gene = Strong suspicion, Panel = Phenotype-driven, Exome = Expansive differential, Genome = Greatest coverage"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'laboratory-methodologies',
    title: 'Laboratory Methodologies & Variant Interpretation',
    content: `
      <div class="space-y-6">
        <div class="bg-primary/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🧪 Biochemical Testing ⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-primary mb-2">Mass Spectrometry (MS/MS)</h4>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <ul class="space-y-1 text-sm">
                    <li>• <strong>Applications:</strong> Newborn screening for metabolic disorders</li>
                    <li>• <strong>Analysis:</strong> Amino acids, acylcarnitines, organic acids</li>
                    <li>• <strong>Advantages:</strong> Rapid results (hours), high throughput</li>
                  </ul>
                </div>
                <div>
                  <ul class="space-y-1 text-sm">
                    <li>• <strong>Conditions detected:</strong> PKU, MCADD, organic acidemias</li>
                    <li>• <strong>Sample:</strong> Dried blood spots</li>
                    <li>• <strong>Quantitative:</strong> Cost-effective for screening</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-accent/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🔬 Molecular Testing Approaches ⭐⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-accent mb-2">PCR-Based Methods</h4>
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded-lg">
                  <h5 class="font-semibold text-sm mb-2">Standard PCR</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Single gene analysis</li>
                    <li>• Mutation-specific testing</li>
                    <li>• Rapid, cost-effective</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded-lg">
                  <h5 class="font-semibold text-sm mb-2">Real-Time PCR (qPCR)</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Quantitative analysis</li>
                    <li>• Copy number assessment</li>
                    <li>• Contamination detection</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded-lg">
                  <h5 class="font-semibold text-sm mb-2">Digital PCR</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Absolute quantification</li>
                    <li>• Rare variant detection</li>
                    <li>• Prenatal diagnosis</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="font-semibold text-accent mb-2">Hybridization Methods</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>FISH:</strong> Chromosome-specific probes, microdeletion detection</li>
                <li>• <strong>Array methods:</strong> CGH arrays for CNVs, SNP arrays for UPD analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-purple/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            📊 ACMG Variant Interpretation ⭐⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-purple-700 mb-2">Five-Tier Classification System</h4>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <ol class="list-decimal list-inside space-y-1 text-sm">
                    <li><strong>Pathogenic</strong> - Established disease-causing</li>
                    <li><strong>Likely Pathogenic</strong> - >90% certainty of pathogenicity</li>
                    <li><strong>VUS</strong> - Variant of Uncertain Significance</li>
                  </ol>
                </div>
                <div>
                  <ol class="list-decimal list-inside space-y-1 text-sm" start="4">
                    <li><strong>Likely Benign</strong> - >90% certainty of benign nature</li>
                    <li><strong>Benign</strong> - Established as non-disease-causing</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-semibold text-yellow-700 mb-2">💎 Board Pearls</h4>
              <ul class="space-y-1 text-sm text-yellow-600">
                <li>• ~40-50% of VUS get reclassified within 2-3 years</li>
                <li>• Population frequency is strongest evidence for benign classification</li>
                <li>• Clinical management should not change based on VUS results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [
      {
        id: 'variant-interpretation',
        question: 'What is the most important consideration when counseling about a VUS (variant of uncertain significance)?',
        options: {
          A: 'The variant will likely become pathogenic',
          B: 'Clinical management should not change based on the VUS',
          C: 'The variant is probably benign',
          D: 'Additional testing is always required'
        },
        correctAnswer: 'B',
        explanation: 'The key principle in VUS counseling is that clinical management should not be altered based on a VUS result. The significance is uncertain, and medical decisions should be based on clinical findings and family history rather than the VUS. Variants may be reclassified over time as more evidence becomes available.'
      }
    ],
    mnemonics: [
      "ACMG Variant Classification: Pathogenic, Likely Pathogenic, VUS, Likely Benign, Benign (P-LP-VUS-LB-B)",
      "VUS Management: No clinical decisions based on uncertain variants"
    ],
    estimatedReadTime: 6
  },
  {
    id: 'newborn-screening',
    title: 'Newborn Screening',
    content: `
      <div class="space-y-6">
        <div class="bg-primary/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            👶 RUSP Core Conditions ⭐⭐⭐
          </h3>
          <p class="text-sm mb-4"><strong>Recommended Uniform Screening Panel - 35 Core Conditions</strong></p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-primary mb-2">Condition Categories</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>9</strong> Organic acid conditions</li>
                <li>• <strong>5</strong> Fatty acid oxidation disorders</li>
                <li>• <strong>9</strong> Amino acid disorders</li>
                <li>• <strong>2</strong> Endocrine disorders</li>
                <li>• <strong>3</strong> Hemoglobinopathies</li>
                <li>• <strong>7</strong> Other conditions</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-2">Key Conditions</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>PKU</strong> - Most common treatable metabolic disorder</li>
                <li>• <strong>MCADD</strong> - Most common fatty acid oxidation defect</li>
                <li>• <strong>CAH</strong> - 21-hydroxylase deficiency (>90%)</li>
                <li>• <strong>SCID</strong> - Uses TREC analysis</li>
                <li>• <strong>SMA</strong> - SMN1 deletion testing</li>
                <li>• <strong>CF</strong> - CFTR mutations</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-accent/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🧪 Testing Methodologies ⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-accent mb-2">Primary Methods</h4>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-blue-600 mb-2">MS/MS (Primary)</h5>
                  <ul class="space-y-1 text-sm">
                    <li>• Amino acids analysis</li>
                    <li>• Acylcarnitines analysis</li>
                    <li>• Rapid, high-throughput</li>
                    <li>• Quantitative results</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-green-600 mb-2">Specialized Assays</h5>
                  <ul class="space-y-1 text-sm">
                    <li>• Enzyme assays (biotinidase, GALT)</li>
                    <li>• DNA-based (TREC, SMN1, CFTR)</li>
                    <li>• Immunoassays (TSH, 17-OHP)</li>
                    <li>• Hemoglobin electrophoresis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-green/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            📊 Result Interpretation ⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-green-700 mb-2">Result Categories</h4>
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded-lg">
                  <h5 class="font-semibold text-green-600 text-sm mb-1">Normal/Negative</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Values within normal range</li>
                    <li>• No further action required</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded-lg">
                  <h5 class="font-semibold text-orange-600 text-sm mb-1">Abnormal/Positive</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Values outside normal range</li>
                    <li>• Requires immediate follow-up</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded-lg">
                  <h5 class="font-semibold text-blue-600 text-sm mb-1">Inconclusive</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Values in uncertain range</li>
                    <li>• May require repeat testing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-semibold text-red-700 mb-2">⚠️ Follow-Up Protocols</h4>
              <ul class="space-y-1 text-sm text-red-600">
                <li>• Contact family within 24-48 hours for abnormal results</li>
                <li>• Refer to specialist immediately</li>
                <li>• Begin emergency treatment if indicated</li>
                <li>• Use different methodology for confirmatory testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [
      {
        id: 'newborn-screening-methodology',
        question: 'Which newborn screening methodology is used to detect the majority of metabolic conditions?',
        options: {
          A: 'Enzyme assays',
          B: 'DNA analysis',
          C: 'Mass spectrometry (MS/MS)',
          D: 'Immunoassays'
        },
        correctAnswer: 'C',
        explanation: 'MS/MS is the primary technology used in newborn screening to detect amino acid disorders, organic acid conditions, and fatty acid oxidation defects. It can analyze multiple metabolites simultaneously from dried blood spots, making it ideal for population screening.'
      },
      {
        id: 'elevated-c8',
        question: 'A newborn screening result shows elevated C8 acylcarnitine. What condition is most likely?',
        options: {
          A: 'Phenylketonuria',
          B: 'Medium-chain acyl-CoA dehydrogenase deficiency',
          C: 'Maple syrup urine disease',
          D: 'Galactosemia'
        },
        correctAnswer: 'B',
        explanation: 'Elevated C8 (octanoylcarnitine) is the characteristic finding in MCADD, the most common fatty acid oxidation defect. This pattern is detected by MS/MS analysis of acylcarnitines in newborn screening programs.'
      }
    ],
    mnemonics: [
      "Core 35: 3 hemoglobinopathies, 5 fatty acid oxidation defects, 9 organic acid conditions, 9 amino acid disorders, 2 endocrine conditions, 7 other conditions",
      "Key NBS Facts: PKU most common treatable, MCADD most common FAO defect, CAH detects 21-hydroxylase >90%, SCID uses TREC"
    ],
    estimatedReadTime: 7
  },
  {
    id: 'prenatal-carrier-screening',
    title: 'Prenatal & Carrier Screening',
    content: `
      <div class="space-y-6">
        <div class="bg-primary/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🤰 NIPT/cfDNA Screening ⭐⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-primary mb-2">Key Features</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>High sensitivity/specificity</strong> for common trisomies</li>
                <li>• <strong>Screening test</strong> - not diagnostic</li>
                <li>• <strong>Available from 9-10 weeks</strong> gestation</li>
                <li>• <strong>Should be offered</strong> to all pregnant women (ACOG)</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-2">Performance Characteristics</h4>
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded-lg">
                  <h5 class="font-semibold text-blue-600 text-sm mb-1">Trisomy 21</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Sensitivity: >99%</li>
                    <li>• Specificity: >99%</li>
                    <li>• PPV: 80-90% (age-dependent)</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded-lg">
                  <h5 class="font-semibold text-orange-600 text-sm mb-1">Trisomy 18</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Sensitivity: >97%</li>
                    <li>• Specificity: >99%</li>
                    <li>• PPV: 20-50%</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded-lg">
                  <h5 class="font-semibold text-purple-600 text-sm mb-1">Trisomy 13</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Sensitivity: >90%</li>
                    <li>• Specificity: >99%</li>
                    <li>• PPV: 10-30%</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-semibold text-yellow-700 mb-2">⚠️ Technical Considerations</h4>
              <ul class="space-y-1 text-sm text-yellow-600">
                <li>• <strong>Fetal fraction:</strong> Minimum 4% required for reliable results</li>
                <li>• <strong>Confined placental mosaicism:</strong> 1-2% discordance rate</li>
                <li>• <strong>Maternal factors:</strong> Weight, gestational age, mosaicism</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-accent/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🔬 Diagnostic Testing ⭐⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-accent mb-2">Invasive Procedures</h4>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-blue-600 mb-2">CVS (10-13 weeks)</h5>
                  <ul class="space-y-1 text-sm">
                    <li>• <strong>Approaches:</strong> Transcervical or transabdominal</li>
                    <li>• <strong>Advantages:</strong> Earlier diagnosis, first trimester</li>
                    <li>• <strong>Limitations:</strong> Cannot detect NTDs, 1-2% mosaicism</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-green-600 mb-2">Amniocentesis (15-20 weeks)</h5>
                  <ul class="space-y-1 text-sm">
                    <li>• <strong>Timing:</strong> Optimal 15-17 weeks</li>
                    <li>• <strong>Advantages:</strong> Can detect NTDs, no mosaicism</li>
                    <li>• <strong>Sample:</strong> 15-20 mL amniotic fluid</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-semibold text-red-700 mb-2">🔒 Risk-Benefit Counseling</h4>
              <ul class="space-y-1 text-sm text-red-600">
                <li>• <strong>Miscarriage risk:</strong> <1/300-500 procedures</li>
                <li>• <strong>Benefits:</strong> Definitive diagnosis, informed decision-making</li>
                <li>• <strong>Considerations:</strong> Patient values, risk tolerance, pregnancy plans</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-purple/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🧬 Carrier Screening Programs ⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-purple-700 mb-2">ACOG Universal Screening</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Cystic fibrosis</strong> - Most common in Caucasians (1/25 carrier rate)</li>
                <li>• <strong>Spinal muscular atrophy</strong> - Pan-ethnic condition (1/40-50 carrier rate)</li>
                <li>• <strong>Hemoglobinopathies</strong> - Sickle cell disease, thalassemias</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-purple-700 mb-2">Expanded Carrier Screening</h4>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-green-600 mb-1">Advantages</h5>
                  <ul class="space-y-1 text-sm">
                    <li>• More comprehensive screening</li>
                    <li>• Detects rare conditions</li>
                    <li>• May identify mixed ancestry</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-orange-600 mb-1">Considerations</h5>
                  <ul class="space-y-1 text-sm">
                    <li>• Higher cost</li>
                    <li>• More complex counseling</li>
                    <li>• Potential for more VUS results</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-700 mb-2">💎 Board Pearls</h4>
              <ul class="space-y-1 text-sm text-blue-600">
                <li>• Residual risk exists after negative carrier screening</li>
                <li>• Sequential vs. concurrent partner screening strategies</li>
                <li>• 25% risk when both partners are carriers for AR condition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [
      {
        id: 'nipt-ppv',
        question: 'A pregnant woman receives NIPT results showing high risk for trisomy 18. The positive predictive value is approximately 30%. What does this mean?',
        options: {
          A: 'There is a 30% chance the fetus has trisomy 18',
          B: 'There is a 70% chance the result is a false positive',
          C: 'Both A and B are correct',
          D: 'The test should be repeated'
        },
        correctAnswer: 'C',
        explanation: 'A positive predictive value of 30% means that when NIPT is positive for trisomy 18, there is a 30% chance the fetus actually has the condition and a 70% chance it\'s a false positive. This demonstrates why NIPT is a screening test requiring diagnostic confirmation with amniocentesis or CVS.'
      },
      {
        id: 'carrier-screening',
        question: 'A couple is found to be at 25% risk for having a child with cystic fibrosis. What is the most likely scenario?',
        options: {
          A: 'Both partners are carriers',
          B: 'One partner is affected',
          C: 'One partner is a carrier',
          D: 'Neither partner was tested'
        },
        correctAnswer: 'A',
        explanation: 'When both partners are carriers for an autosomal recessive condition like cystic fibrosis, each pregnancy has a 25% risk of being affected, 50% risk of being a carrier, and 25% risk of being unaffected and not a carrier.'
      }
    ],
    mnemonics: [
      "NIPT Numbers: Nine weeks minimum, Is screening (not diagnostic), PPV depends on prior probability, Trisomies 13, 18, 21 most accurate",
      "Universal CFSickle: Cystic Fibrosis (all patients), Spinal muscular atrophy (all patients), Hemoglobinopathies/Sickle cell (all patients)"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'professional-guidelines',
    title: 'Professional Guidelines',
    content: `
      <div class="space-y-6">
        <div class="bg-primary/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            📋 NSGC Position Statements ⭐⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-primary mb-2">Reproductive Health & Pregnancy</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Prenatal counseling:</strong> Comprehensive risk assessment, non-directive approach</li>
                <li>• <strong>Carrier screening:</strong> Preconception counseling preferred, residual risk communication</li>
                <li>• <strong>Pregnancy termination:</strong> Support for patient autonomy, non-judgmental counseling</li>
                <li>• <strong>Cultural competency:</strong> Required for all reproductive counseling</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-2">Genetic Testing Guidelines</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Testing in minors:</strong> Adult-onset conditions generally deferred</li>
                <li>• <strong>DTC testing:</strong> Need for professional interpretation and follow-up</li>
                <li>• <strong>Incidental findings:</strong> Patient preference for disclosure, actionable findings priority</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-accent/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🔬 ACMG Practice Guidelines ⭐⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-accent mb-2">Testing Recommendations</h4>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-blue-600 mb-2">Chromosomal Microarray</h5>
                  <ul class="space-y-1 text-sm">
                    <li>• First-tier test for DD/ID/ASD</li>
                    <li>• Prenatal testing for abnormal ultrasound</li>
                    <li>• Higher resolution than karyotype</li>
                    <li>• Cost-effective analysis</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-green-600 mb-2">Sequencing Guidelines</h5>
                  <ul class="space-y-1 text-sm">
                    <li>• Gene selection criteria</li>
                    <li>• Variant interpretation standards</li>
                    <li>• Laboratory accreditation requirements</li>
                    <li>• Quality metrics and reporting</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="font-semibold text-accent mb-2">Laboratory Standards</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Variant classification:</strong> Five-tier system with evidence-based criteria</li>
                <li>• <strong>Quality assurance:</strong> Proficiency testing, internal controls</li>
                <li>• <strong>Regular reclassification:</strong> Database submission requirements</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-green/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🤰 ACOG Recommendations ⭐⭐
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-green-700 mb-2">Prenatal Care Guidelines</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>NIPT:</strong> Should be offered to all pregnant women</li>
                <li>• <strong>Carrier screening:</strong> Universal for CF, SMA, hemoglobinopathies</li>
                <li>• <strong>Diagnostic testing:</strong> CVS vs. amniocentesis counseling</li>
                <li>• <strong>High-risk pregnancy:</strong> Advanced maternal age considerations</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-700 mb-2">💎 Board Pearls</h4>
              <ul class="space-y-1 text-sm text-blue-600">
                <li>• Guidelines evolve with technology advances</li>
                <li>• Professional society recommendations may differ</li>
                <li>• Evidence basis underlying recommendations is important</li>
                <li>• Local protocols may vary from national guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [
      {
        id: 'nipt-guidelines',
        question: 'According to current guidelines, which statement about NIPT is correct?',
        options: {
          A: 'Should only be offered to women over 35',
          B: 'Can replace diagnostic testing',
          C: 'Should be offered to all pregnant women',
          D: 'Is most accurate for sex chromosome aneuploidies'
        },
        correctAnswer: 'C',
        explanation: 'Current ACOG/SMFM guidelines recommend that NIPT should be offered to all pregnant women regardless of age or risk factors. It remains a screening test that cannot replace diagnostic testing, and it is most accurate for autosomal trisomies, not sex chromosome aneuploidies.'
      }
    ],
    mnemonics: [
      "ACMG Guidelines: CMA first for DD/ASD, Evidence-based variant classification, Quality assurance required",
      "ACOG Universal: NIPT to all women, Carrier screening CF/SMA/Hemoglobinopathies"
    ],
    estimatedReadTime: 5
  },
  {
    id: 'specialized-testing-protocols',
    title: 'Specialized Testing Protocols',
    content: `
      <div class="space-y-6">
        <div class="bg-primary/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🧠 Neurological Conditions
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-primary mb-2">Epilepsy Genetic Testing</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Consider for:</strong> Early-onset epilepsy, specific epilepsy syndromes</li>
                <li>• <strong>Approach:</strong> Gene panels appropriate, trio analysis increases yield</li>
                <li>• <strong>Impact:</strong> Treatment decisions and family planning</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-2">Intellectual Disability/Autism</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>First-tier:</strong> CMA (ACMG recommendation)</li>
                <li>• <strong>Males:</strong> Consider FMR1 testing for Fragile X</li>
                <li>• <strong>Negative CMA:</strong> Consider WES with trio analysis</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-2">Neuromuscular Disorders</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>SMA:</strong> SMN1 testing standard</li>
                <li>• <strong>Muscular dystrophy:</strong> Dystrophin testing for DMD/BMD</li>
                <li>• <strong>Repeat expansions:</strong> When clinically indicated</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-accent/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🫀 Cardiac Genetic Testing
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-accent mb-2">Cardiomyopathy Protocols</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Gene panels:</strong> Type-specific cardiomyopathy panels</li>
                <li>• <strong>Family screening:</strong> Cascade screening implementation</li>
                <li>• <strong>Timing:</strong> Consider early in diagnostic workup</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-accent mb-2">Arrhythmia Syndromes</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Long QT syndrome:</strong> Panel testing available</li>
                <li>• <strong>Brugada syndrome:</strong> Specific gene evaluation</li>
                <li>• <strong>CPVT:</strong> Catecholaminergic polymorphic ventricular tachycardia</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-purple/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            👁️ Vision/Hearing Loss
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-purple-700 mb-2">Genetic Hearing Loss</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>First-line:</strong> GJB2/GJB6 testing (connexin genes)</li>
                <li>• <strong>Comprehensive:</strong> Hearing loss gene panels available</li>
                <li>• <strong>Evaluation:</strong> Syndromic vs. non-syndromic classification</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-purple-700 mb-2">Inherited Eye Disease</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Retinal dystrophy:</strong> Comprehensive gene panels</li>
                <li>• <strong>LCA:</strong> Leber congenital amaurosis testing</li>
                <li>• <strong>Stargardt disease:</strong> ABCA4 gene evaluation</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            💎 Testing Strategy Pearls
          </h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Family history crucial:</strong> Guides testing strategy and interpretation</li>
            <li>• <strong>Trio analysis:</strong> Significantly increases diagnostic yield for many conditions</li>
            <li>• <strong>Phenotype-driven panels:</strong> More cost-effective than broad screening</li>
            <li>• <strong>Cascade screening:</strong> Essential for actionable hereditary conditions</li>
            <li>• <strong>Reanalysis:</strong> Consider for previously negative results as databases improve</li>
          </ul>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "Neurological Testing: CMA first for DD/ASD, FMR1 for males with ID, SMN1 for SMA, Dystrophin for DMD",
      "Hearing Loss: GJB2/GJB6 first-line, then comprehensive panels"
    ],
    estimatedReadTime: 4
  },
  {
    id: 'study-tips',
    title: 'Study Tips & High-Yield Facts',
    content: `
      <div class="space-y-6">
        <div class="bg-primary/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🧠 Testing Technology Comparison
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-primary mb-2">Resolution Comparison</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Karyotype:</strong> ~5-10 Mb (balanced rearrangements, mosaicism)</li>
                <li>• <strong>CMA:</strong> ~50-100 kb (CNVs, first-tier DD/ASD)</li>
                <li>• <strong>Sequencing:</strong> Gene-level analysis (highest diagnostic yield)</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-2">Testing Guidelines</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>CMA first</strong> for unexplained DD/ID/ASD (ACMG)</li>
                <li>• <strong>NIPT offered</strong> to all pregnant women (ACOG)</li>
                <li>• <strong>Universal carrier screening</strong> for CF, SMA, hemoglobinopathies</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-accent/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            📊 Critical Numbers for Boards
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-accent mb-2">NIPT Performance</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Trisomy 21 PPV:</strong> 80-90% (age-dependent)</li>
                <li>• <strong>Trisomy 18 PPV:</strong> 20-50%</li>
                <li>• <strong>Trisomy 13 PPV:</strong> 10-30%</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-accent mb-2">Diagnostic Yields</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>CMA:</strong> DD/ID (15-20%), ASD (7-10%)</li>
                <li>• <strong>WES:</strong> 25-30% for pediatric conditions</li>
                <li>• <strong>Trio analysis:</strong> Increases yield by 5-10%</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-accent mb-2">Newborn Screening</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Core conditions:</strong> 35 total</li>
                <li>• <strong>Secondary targets:</strong> 26 additional</li>
                <li>• <strong>Most common:</strong> PKU (treatable), MCADD (FAO defect)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-green/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            🎯 Board Exam Strategies
          </h3>
          <div class="space-y-2">
            <ul class="space-y-2 text-sm">
              <li><strong>1. Technology selection:</strong> Match test to clinical scenario (strong suspicion → single gene, broad differential → WES)</li>
              <li><strong>2. Interpretation focus:</strong> Understand PPV depends on population prevalence</li>
              <li><strong>3. Guidelines knowledge:</strong> Know current ACMG, ACOG, NSGC recommendations</li>
              <li><strong>4. VUS counseling:</strong> No clinical decisions based on uncertain variants</li>
              <li><strong>5. Newborn screening:</strong> MS/MS detects most metabolic conditions</li>
              <li><strong>6. NIPT limitations:</strong> Screening test, maternal age affects PPV</li>
              <li><strong>7. Carrier screening:</strong> Residual risk after negative results</li>
            </ul>
          </div>
        </div>

        <div class="bg-yellow/10 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            💡 Key Memory Aids
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="font-semibold text-yellow-700 mb-2">Testing Technology</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>CMA First:</strong> Chromosomal Microarray first for DD/ASD</li>
                <li>• <strong>Sequence by Suspicion:</strong> Single = Strong, Panel = Phenotype, Exome = Expansive, Genome = Greatest</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-yellow-700 mb-2">NIPT & Screening</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>NIPT Numbers:</strong> Nine weeks minimum, Is screening, PPV depends on probability, Trisomies 13/18/21</li>
                <li>• <strong>Universal CFSickle:</strong> Cystic Fibrosis, Spinal muscular atrophy, Sickle cell/hemoglobinopathies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "All key mnemonics from previous sections combined for review",
      "Board Strategy: Match test to suspicion, PPV depends on prevalence, Guidelines evolve with technology"
    ],
    estimatedReadTime: 4
  }
]

// Quick lookup table for Domain 3
export const domain3QuickLookup = {
  id: 'domain3-testing-lookup',
  title: 'Quick Genetic Testing Reference',
  headers: ['Test Type', 'Best Used For', 'Limitations', 'Turnaround'],
  rows: [
    {
      id: 'karyotype',
      cells: ['Karyotype', 'Balanced rearrangements, mosaicism', 'Low resolution (~5-10 Mb)', '7-14 days']
    },
    {
      id: 'cma',
      cells: ['CMA', 'CNVs, first-tier for DD/ASD', 'Balanced rearrangements', '7-14 days']
    },
    {
      id: 'single-gene',
      cells: ['Single Gene', 'Known gene/condition', 'Limited scope', '2-4 weeks']
    },
    {
      id: 'gene-panel',
      cells: ['Gene Panel', 'Phenotype-specific testing', 'May miss novel genes', '2-4 weeks']
    },
    {
      id: 'wes',
      cells: ['WES', 'Broad differential, coding variants', 'Intronic/regulatory variants', '4-8 weeks']
    },
    {
      id: 'wgs',
      cells: ['WGS', 'Comprehensive analysis', 'Cost, interpretation complexity', '4-8 weeks']
    },
    {
      id: 'nipt',
      cells: ['NIPT', 'Trisomy screening', 'Screening test, not diagnostic', '3-7 days']
    },
    {
      id: 'msms',
      cells: ['MS/MS', 'Metabolic disorders', 'Some conditions missed', 'Same day']
    }
  ]
} 