import type { PracticeQuestion } from '@/types/board-practice'

export const domain3bPracticeQuestions: PracticeQuestion[] = [
  {
    id: 'q3b_1',
    question: 'Diagnostic trio exome sequencing is recommended for an affected child. When discussing the need for parental samples, mother states she\'s excited to have testing as she has wanted to buy a DNA test kit from the store. The genetic counselor can BEST address this statement by:',
    options: {
      A: 'Explaining the limitations of direct-to-consumer genetic testing',
      B: 'Discussing the cost difference between clinical and DTC testing',
      C: 'Assessing mother\'s understanding of analysis for parental samples in trio exome testing',
      D: 'Recommending she purchase the DTC test first for comparison'
    },
    correctAnswer: 'C',
    explanation: 'The mother\'s excitement suggests she may misunderstand the purpose of parental testing in trio exome sequencing. The parents are tested to help interpret the child\'s variants (determine inheritance pattern), not for their own health screening. Assessment of understanding should come before education.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['trio-sequencing', 'patient-education', 'DTC-testing']
  },
  {
    id: 'q3b_2',
    question: 'A patient is seen to discuss genetic testing for their history of cardiomyopathy. The patient declines, citing they are already having genetic testing through their participation in an institutional biobank. Which point is MOST important to review with the patient?',
    options: {
      A: 'Research testing uses different technology than clinical testing',
      B: 'Biobank participation may take several years to provide results',
      C: 'Receipt of a genetic result is NOT guaranteed from research participation',
      D: 'Research testing is not as accurate as clinical testing'
    },
    correctAnswer: 'C',
    explanation: 'This is a critical distinction. Research participation is for advancing scientific knowledge, not providing clinical care. Many research studies do not return individual results to participants, and this patient may be declining needed clinical testing based on a misunderstanding.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['research-vs-clinical', 'biobank', 'patient-education']
  },
  {
    id: 'q3b_3',
    question: 'A 25-year-old woman requests predictive testing for Huntington disease. Her father tested positive for a CAG repeat expansion in the HTT gene. What is the most appropriate initial testing strategy?',
    options: {
      A: 'Direct testing for CAG repeat expansion in HTT',
      B: 'Linkage analysis using family members',
      C: 'Chromosomal microarray to rule out deletion',
      D: 'Whole exome sequencing to look for other causes'
    },
    correctAnswer: 'A',
    explanation: 'When a specific pathogenic variant has been identified in the family (CAG expansion in HTT), direct testing for that variant is the most appropriate approach. Linkage analysis would only be used if the familial variant were unknown.',
    domain: '3B',
    difficulty: 'Beginner',
    tags: ['huntington-disease', 'predictive-testing', 'direct-testing']
  },
  {
    id: 'q3b_4',
    question: 'Chromosomal microarray (CMA) analysis shows multiple regions of homozygosity (ROH) in a child with developmental delay. The parents deny consanguinity. What should be considered in the differential diagnosis?',
    options: {
      A: 'Sample contamination',
      B: 'Uniparental disomy',
      C: 'Laboratory error',
      D: 'Maternal cell contamination'
    },
    correctAnswer: 'B',
    explanation: 'Multiple regions of homozygosity can indicate consanguinity, but when parents deny this, uniparental disomy should be considered. UPD can cause regions of homozygosity and may be associated with developmental delay if it involves imprinted regions.',
    domain: '3B',
    difficulty: 'Advanced',
    tags: ['uniparental-disomy', 'regions-of-homozygosity', 'CMA']
  },
  {
    id: 'q3b_5',
    question: 'A couple requests carrier screening for spinal muscular atrophy (SMA). What is the most common molecular mechanism causing SMA?',
    options: {
      A: 'Point mutations in SMN1',
      B: 'Homozygous deletion of SMN1 exon 7',
      C: 'Copy number variations in SMN2',
      D: 'Repeat expansion in SMN1'
    },
    correctAnswer: 'B',
    explanation: 'Approximately 95% of SMA cases are caused by homozygous deletion of SMN1 exon 7 (and usually exon 8). The remaining 5% are caused by point mutations. Prognosis is modified by SMN2 copy number.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['spinal-muscular-atrophy', 'SMN1', 'deletion']
  },
  {
    id: 'q3b_6',
    question: 'Which testing method would be MOST appropriate for detecting a known familial balanced translocation?',
    options: {
      A: 'Chromosomal microarray',
      B: 'Karyotype analysis',
      C: 'FISH (fluorescence in situ hybridization)',
      D: 'Next-generation sequencing'
    },
    correctAnswer: 'C',
    explanation: 'FISH is most appropriate for detecting known specific chromosomal rearrangements. While karyotype can detect balanced translocations, FISH is more sensitive and specific when the exact breakpoints are known.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['FISH', 'balanced-translocation', 'testing-methods']
  },
  {
    id: 'q3b_7',
    question: 'A patient with suspected Fragile X syndrome has a normal FMR1 gene analysis by PCR. What additional testing should be considered?',
    options: {
      A: 'Chromosomal microarray',
      B: 'Karyotype analysis',
      C: 'Southern blot analysis',
      D: 'Whole exome sequencing'
    },
    correctAnswer: 'C',
    explanation: 'PCR-based testing for Fragile X can miss large expansions (>200 repeats) due to technical limitations. Southern blot analysis is needed to detect full mutations and determine methylation status of the FMR1 gene.',
    domain: '3B',
    difficulty: 'Advanced',
    tags: ['fragile-X', 'southern-blot', 'PCR-limitations']
  },
  {
    id: 'q3b_8',
    question: 'When is Sanger sequencing preferred over next-generation sequencing (NGS)?',
    options: {
      A: 'When testing multiple genes simultaneously',
      B: 'When analyzing repetitive sequences or regions with high GC content',
      C: 'When looking for copy number variants',
      D: 'When cost is a primary consideration'
    },
    correctAnswer: 'B',
    explanation: 'Sanger sequencing is superior to NGS for repetitive sequences, regions with high GC content, and areas where NGS has poor coverage. It\'s also used for confirmation of NGS findings and family member testing for known variants.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['sanger-sequencing', 'NGS-limitations', 'testing-methods']
  },
  {
    id: 'q3b_9',
    question: 'A 3-year-old child with autism spectrum disorder and dysmorphic features has a normal chromosomal microarray. What would be the most appropriate next step?',
    options: {
      A: 'Fragile X testing',
      B: 'Whole exome sequencing',
      C: 'Karyotype analysis',
      D: 'Targeted autism gene panel'
    },
    correctAnswer: 'B',
    explanation: 'For patients with autism spectrum disorder, intellectual disability, and dysmorphic features who have normal CMA results, whole exome sequencing (preferably trio) has the highest diagnostic yield (25-30%).',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['autism', 'whole-exome-sequencing', 'diagnostic-yield']
  },
  {
    id: 'q3b_10',
    question: 'What is the primary advantage of trio exome sequencing compared to proband-only exome sequencing?',
    options: {
      A: 'Lower cost per sample',
      B: 'Faster turnaround time',
      C: 'Better coverage of exonic regions',
      D: 'Improved variant interpretation and higher diagnostic yield'
    },
    correctAnswer: 'D',
    explanation: 'Trio exome sequencing allows determination of inheritance patterns, helps prioritize de novo variants (which are more likely to be pathogenic), and significantly improves diagnostic yield compared to proband-only testing.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['trio-sequencing', 'variant-interpretation', 'diagnostic-yield']
  },
  {
    id: 'q3b_11',
    question: 'A patient with early-onset Alzheimer disease has negative genetic testing for APP, PSEN1, and PSEN2. Family history is positive for dementia. What testing option should be considered next?',
    options: {
      A: 'Repeat the same gene panel',
      B: 'Chromosomal microarray',
      C: 'Broader neurodegenerative disease panel or exome sequencing',
      D: 'APOE genotyping'
    },
    correctAnswer: 'C',
    explanation: 'When initial targeted testing is negative but clinical suspicion remains high, broader testing approaches are appropriate. APOE is a risk factor, not a diagnostic test for early-onset familial Alzheimer disease.',
    domain: '3B',
    difficulty: 'Advanced',
    tags: ['alzheimer-disease', 'neurodegenerative', 'gene-panels']
  },
  {
    id: 'q3b_12',
    question: 'For which condition would methylation analysis be the most appropriate initial testing approach?',
    options: {
      A: 'Beckwith-Wiedemann syndrome',
      B: 'Huntington disease',
      C: 'Marfan syndrome',
      D: 'Cystic fibrosis'
    },
    correctAnswer: 'A',
    explanation: 'Beckwith-Wiedemann syndrome can be caused by multiple molecular mechanisms involving the 11p15 region. Methylation analysis can detect all major mechanisms (paternal UPD11, IC1/IC2 methylation defects) in a single test.',
    domain: '3B',
    difficulty: 'Advanced',
    tags: ['beckwith-wiedemann', 'methylation-analysis', 'imprinting']
  },
  {
    id: 'q3b_13',
    question: 'A chromosomal microarray shows a 500 kb deletion at 16p11.2. This finding is most likely:',
    options: {
      A: 'Benign copy number variant',
      B: 'Pathogenic deletion associated with autism/developmental delay',
      C: 'Technical artifact requiring confirmation',
      D: 'Variant of uncertain significance'
    },
    correctAnswer: 'B',
    explanation: 'The 16p11.2 deletion (approximately 500 kb) is a well-established pathogenic copy number variant associated with autism spectrum disorder, developmental delay, and other neurodevelopmental phenotypes.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['16p11.2-deletion', 'copy-number-variant', 'autism']
  },
  {
    id: 'q3b_14',
    question: 'What is the most significant limitation of chromosomal microarray analysis?',
    options: {
      A: 'Cannot detect single nucleotide variants',
      B: 'Poor resolution for copy number changes',
      C: 'Cannot analyze methylation patterns',
      D: 'Limited coverage of the genome'
    },
    correctAnswer: 'A',
    explanation: 'Chromosomal microarray (CMA) is excellent for detecting copy number variants and regions of homozygosity but cannot detect single nucleotide variants, small indels, or balanced chromosomal rearrangements.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['chromosomal-microarray', 'limitations', 'SNV-detection']
  },
  {
    id: 'q3b_15',
    question: 'A patient with suspected Marfan syndrome has negative FBN1 gene sequencing. What additional testing would be most appropriate?',
    options: {
      A: 'FBN1 deletion/duplication analysis',
      B: 'Chromosomal microarray',
      C: 'Testing for Loeys-Dietz syndrome genes (TGFBR1/TGFBR2)',
      D: 'Collagen biochemical testing'
    },
    correctAnswer: 'A',
    explanation: 'If sequence analysis of FBN1 is negative, deletion/duplication analysis should be performed since copy number variants can cause Marfan syndrome. Other Marfan-like condition testing would be considered after completing FBN1 analysis.',
    domain: '3B',
    difficulty: 'Advanced',
    tags: ['marfan-syndrome', 'FBN1', 'deletion-duplication']
  },
  {
    id: 'q3b_16',
    question: 'Optical genome mapping would be most useful for detecting:',
    options: {
      A: 'Single nucleotide variants',
      B: 'Structural variants and copy number changes',
      C: 'Methylation abnormalities',
      D: 'Trinucleotide repeat expansions'
    },
    correctAnswer: 'B',
    explanation: 'Optical genome mapping excels at detecting structural variants, including balanced translocations, inversions, and complex rearrangements that may be missed by other technologies. It provides long-range genomic information.',
    domain: '3B',
    difficulty: 'Advanced',
    tags: ['optical-genome-mapping', 'structural-variants', 'technology']
  },
  {
    id: 'q3b_17',
    question: 'A newborn with suspected Smith-Lemli-Opitz syndrome should have which initial biochemical test?',
    options: {
      A: 'Plasma amino acids',
      B: 'Urine organic acids',
      C: '7-dehydrocholesterol level',
      D: 'Cholesterol level'
    },
    correctAnswer: 'C',
    explanation: 'Elevated 7-dehydrocholesterol is pathognomonic for Smith-Lemli-Opitz syndrome and is the most specific diagnostic test. This biochemical marker is elevated due to deficiency of 7-dehydrocholesterol reductase.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['smith-lemli-opitz', '7-dehydrocholesterol', 'biochemical-testing']
  },
  {
    id: 'q3b_18',
    question: 'What is the most appropriate genetic test for confirming a diagnosis of myotonic dystrophy type 1?',
    options: {
      A: 'CTG repeat analysis in DMPK gene',
      B: 'Muscle biopsy with genetic analysis',
      C: 'Electromyography (EMG)',
      D: 'Creatine kinase level'
    },
    correctAnswer: 'A',
    explanation: 'Myotonic dystrophy type 1 is caused by CTG repeat expansion in the DMPK gene. Repeat expansion analysis is the definitive diagnostic test. EMG and CK can be supportive but are not diagnostic.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['myotonic-dystrophy', 'CTG-repeat', 'DMPK']
  },
  {
    id: 'q3b_19',
    question: 'For a patient with clinical features of Prader-Willi syndrome, what is the most comprehensive initial genetic test?',
    options: {
      A: '15q11-q13 FISH analysis',
      B: 'UBE3A gene sequencing',
      C: 'Methylation analysis of the SNRPN region',
      D: 'Chromosomal microarray'
    },
    correctAnswer: 'C',
    explanation: 'Methylation analysis can detect all three molecular mechanisms causing Prader-Willi syndrome: paternal deletion, maternal UPD15, and imprinting defects. It\'s the most efficient single test for diagnosis.',
    domain: '3B',
    difficulty: 'Advanced',
    tags: ['prader-willi', 'methylation-analysis', 'SNRPN']
  },
  {
    id: 'q3b_20',
    question: 'A family has a known pathogenic variant in the BRCA1 gene. For at-risk family members, what is the most appropriate testing strategy?',
    options: {
      A: 'Full BRCA1 and BRCA2 sequencing',
      B: 'Single-site analysis for the known familial variant',
      C: 'Chromosomal microarray',
      D: 'Large rearrangement testing only'
    },
    correctAnswer: 'B',
    explanation: 'When a specific pathogenic variant has been identified in the family, single-site analysis (testing only for that specific variant) is the most appropriate, cost-effective approach for at-risk family members.',
    domain: '3B',
    difficulty: 'Beginner',
    tags: ['BRCA1', 'familial-testing', 'single-site-analysis']
  }
]