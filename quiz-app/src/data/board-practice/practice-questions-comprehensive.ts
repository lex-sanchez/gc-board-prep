import type { PracticeQuestion } from '@/types/board-practice'

export const comprehensivePracticeQuestions: PracticeQuestion[] = [
  {
    id: 'q_comp_1',
    question: 'A woman with poorly controlled maternal diabetes is at highest risk for having a baby with:',
    options: {
      A: 'Achondroplasia',
      B: 'Caudal regression syndrome',
      C: 'Cystic fibrosis',
      D: 'Trisomy 21'
    },
    correctAnswer: 'B',
    explanation: 'Maternal diabetes significantly increases the risk for caudal regression syndrome, which affects the lower spine and pelvis. This occurs due to hyperglycemia during critical developmental periods.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['maternal-diabetes', 'teratogens', 'caudal-regression']
  },
  {
    id: 'q_comp_2',
    question: 'A 4-year-old child with seizures and dysmorphic features undergoes exome sequencing. The parents specifically opted out of secondary findings, but a pathogenic BRCA2 variant is reported. The genetic counselor should:',
    options: {
      A: 'Disclose the result since it\'s medically actionable',
      B: 'Contact the laboratory to clarify the error',
      C: 'Contact hospital\'s ethics board to discuss the situation',
      D: 'Document the finding but do not disclose to parents'
    },
    correctAnswer: 'C',
    explanation: 'When there is a conflict between patient autonomy (opting out of secondary findings) and medical benefit, the ethics board should be consulted to navigate this complex situation appropriately.',
    domain: '3B',
    difficulty: 'Advanced',
    tags: ['secondary-findings', 'ethics', 'consent']
  },
  {
    id: 'q_comp_3',
    question: 'A 43-year-old male with hypertrophic cardiomyopathy reports "burning pains" in his hands and difficulty sweating. Previous genetic testing was negative for sarcomeric genes. Which gene should be included in updated testing?',
    options: {
      A: 'MYH7',
      B: 'GLA',
      C: 'MYBPC3',
      D: 'TNNT2'
    },
    correctAnswer: 'B',
    explanation: 'The combination of hypertrophic cardiomyopathy with neuropathic pain (burning hands) and anhidrosis (difficulty sweating) suggests Fabry disease, caused by mutations in the GLA gene.',
    domain: '1C',
    difficulty: 'Advanced',
    tags: ['fabry-disease', 'GLA', 'cardiomyopathy']
  },
  {
    id: 'q_comp_4',
    question: 'A pregnant woman asks, "If I were your wife, what would you tell me to do about amniocentesis?" The best nondirective response is:',
    options: {
      A: 'I would have the amniocentesis done',
      B: 'I can\'t make that decision for you',
      C: 'I don\'t know what I would do, but I know what concerns I would think about',
      D: 'That\'s a very personal decision'
    },
    correctAnswer: 'C',
    explanation: 'This response exemplifies nondirective counseling by avoiding giving specific advice while still being helpful. The counselor redirects the focus to exploring concerns rather than providing directive guidance.',
    domain: '4A',
    difficulty: 'Intermediate',
    tags: ['nondirective-counseling', 'communication', 'counseling-techniques']
  },
  {
    id: 'q_comp_5',
    question: 'Cystic fibrosis affects 1 in 2,500 Caucasians. What is the carrier frequency in this population?',
    options: {
      A: '1 in 25',
      B: '1 in 50',
      C: '1 in 100',
      D: '1 in 1,250'
    },
    correctAnswer: 'A',
    explanation: 'Using Hardy-Weinberg principles: if q² = 1/2500, then q = 1/50, and carrier frequency (2pq) ≈ 2 × 1/50 = 1/25.',
    domain: '2B',
    difficulty: 'Intermediate',
    tags: ['hardy-weinberg', 'carrier-frequency', 'cystic-fibrosis']
  },
  {
    id: 'q_comp_6',
    question: 'Under GINA, genetic information can legally be used for:',
    options: {
      A: 'Health insurance coverage decisions',
      B: 'Employment hiring decisions',
      C: 'Life insurance coverage decisions',
      D: 'Group health plan premium setting'
    },
    correctAnswer: 'C',
    explanation: 'GINA protects against genetic discrimination in health insurance and employment, but does NOT cover life insurance, disability insurance, or long-term care insurance.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['GINA', 'genetic-discrimination', 'insurance']
  },
  {
    id: 'q_comp_7',
    question: 'A 13-year-old girl presents with frequent nosebleeds. Which family history finding would be MOST important to elicit?',
    options: {
      A: 'Easy bruising in relatives',
      B: 'Gastrointestinal bleeding',
      C: 'Heavy menstrual periods',
      D: 'Prolonged bleeding after surgery'
    },
    correctAnswer: 'B',
    explanation: 'Nosebleeds in a young person combined with GI bleeding in family suggests hereditary hemorrhagic telangiectasia (HHT), which requires specific genetic evaluation.',
    domain: '1A',
    difficulty: 'Advanced',
    tags: ['HHT', 'nosebleeds', 'family-history']
  },
  {
    id: 'q_comp_8',
    question: 'A chromosomal microarray shows a 500 kb deletion at 16p11.2. This finding is most likely:',
    options: {
      A: 'A benign copy number variant',
      B: 'A pathogenic deletion associated with autism',
      C: 'A technical artifact',
      D: 'A variant of uncertain significance'
    },
    correctAnswer: 'B',
    explanation: 'The 16p11.2 deletion (approximately 500 kb) is a well-established pathogenic copy number variant associated with autism spectrum disorder, developmental delay, and other neurodevelopmental phenotypes.',
    domain: '3A',
    difficulty: 'Intermediate',
    tags: ['16p11.2-deletion', 'copy-number-variant', 'autism']
  },
  {
    id: 'q_comp_9',
    question: 'A fetus has micrognathia, cleft palate, and glossoptosis. This represents:',
    options: {
      A: 'A malformation',
      B: 'A deformation',
      C: 'A disruption',
      D: 'A sequence'
    },
    correctAnswer: 'D',
    explanation: 'This describes Pierre Robin sequence, where the primary defect (micrognathia) leads to secondary features (glossoptosis and cleft palate). This is a classic example of a sequence.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['pierre-robin', 'sequence', 'malformation-classification']
  },
  {
    id: 'q_comp_10',
    question: 'A couple disagrees about amniocentesis. The wife is reluctant; the husband favors it but says "it\'s her decision." The best approach is:',
    options: {
      A: 'Support the husband\'s recommendation',
      B: 'Explore the wife\'s concerns',
      C: 'Facilitate discussion between the couple',
      D: 'Provide amniocentesis statistics'
    },
    correctAnswer: 'C',
    explanation: 'When couples have different perspectives, facilitating discussion helps them communicate their viewpoints, explore underlying concerns, and work toward a collaborative decision.',
    domain: '4B',
    difficulty: 'Intermediate',
    tags: ['couple-counseling', 'decision-making', 'communication']
  },
  {
    id: 'q_comp_11',
    question: 'The most significant diagnostic feature of Meckel-Gruber syndrome is:',
    options: {
      A: 'Postaxial polydactyly',
      B: 'Occipital encephalocele',
      C: 'Cystic renal disease',
      D: 'Cleft lip and palate'
    },
    correctAnswer: 'C',
    explanation: 'Cystic renal disease is the most consistent and significant feature of Meckel-Gruber syndrome, present in nearly all cases and often leading to oligohydramnios.',
    domain: '1C',
    difficulty: 'Advanced',
    tags: ['meckel-gruber', 'cystic-renal-disease', 'genetic-syndromes']
  },
  {
    id: 'q_comp_12',
    question: 'A patient declines genetic testing for cardiomyopathy, stating they\'re already enrolled in a biobank study. The most important point to discuss is:',
    options: {
      A: 'Biobank testing uses different technology',
      B: 'Receipt of results is not guaranteed from research',
      C: 'Biobank results take longer to obtain',
      D: 'Clinical testing is more accurate'
    },
    correctAnswer: 'B',
    explanation: 'This is a critical distinction. Research participation is for advancing scientific knowledge, not providing clinical care. Many research studies do not return individual results to participants.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['research-vs-clinical', 'biobank', 'patient-education']
  },
  {
    id: 'q_comp_13',
    question: 'A woman has a 1% prior risk for a condition. Testing has 90% sensitivity and 95% specificity. If her test is positive, her risk is approximately:',
    options: {
      A: '15%',
      B: '50%',
      C: '90%',
      D: '95%'
    },
    correctAnswer: 'A',
    explanation: 'Using Bayes theorem: PPV = (sensitivity × prevalence) / [(sensitivity × prevalence) + (1-specificity) × (1-prevalence)] = (0.9 × 0.01) / [(0.9 × 0.01) + (0.05 × 0.99)] ≈ 15%',
    domain: '2A',
    difficulty: 'Advanced',
    tags: ['bayesian-analysis', 'risk-assessment', 'PPV']
  },
  {
    id: 'q_comp_14',
    question: 'Which laboratory test would confirm Smith-Lemli-Opitz syndrome?',
    options: {
      A: 'Cholesterol level',
      B: '7-dehydrocholesterol analysis',
      C: 'Sterol analysis',
      D: 'Amino acid analysis'
    },
    correctAnswer: 'B',
    explanation: 'Elevated 7-dehydrocholesterol is pathognomonic for Smith-Lemli-Opitz syndrome and is the most specific diagnostic test.',
    domain: '1C',
    difficulty: 'Intermediate',
    tags: ['smith-lemli-opitz', '7-dehydrocholesterol', 'biochemical-testing']
  },
  {
    id: 'q_comp_15',
    question: 'A patient says "Everyone will think I gave the bad gene to my baby." This demonstrates:',
    options: {
      A: 'Projection',
      B: 'Denial',
      C: 'Rationalization',
      D: 'Sublimation'
    },
    correctAnswer: 'A',
    explanation: 'Projection involves attributing one\'s own feelings to others. The patient is likely feeling guilt about potentially passing on a genetic condition but expresses this as what "everyone" will think.',
    domain: '4A',
    difficulty: 'Intermediate',
    tags: ['defense-mechanisms', 'projection', 'psychological-response']
  },
  {
    id: 'q_comp_16',
    question: 'A 25-year-old woman seeks genetic counseling because her father has Becker muscular dystrophy. Amniocentesis shows neither she nor her male fetus carries the mutation. She\'s unaware her father isn\'t her biological father. The counselor should:',
    options: {
      A: 'Inform her about the non-paternity',
      B: 'Focus only on the negative test results',
      C: 'Contact hospital\'s ethics board',
      D: 'Discuss implications for future pregnancies'
    },
    correctAnswer: 'C',
    explanation: 'Non-paternity findings create complex ethical dilemmas involving autonomy, beneficence, and potential family harm. Ethics board consultation helps navigate these sensitive situations appropriately.',
    domain: '3C',
    difficulty: 'Advanced',
    tags: ['non-paternity', 'ethics', 'incidental-findings']
  },
  {
    id: 'q_comp_17',
    question: 'Valproic acid exposure during weeks 4-6 of pregnancy primarily increases risk for:',
    options: {
      A: 'Limb defects',
      B: 'Neural tube defects',
      C: 'Cardiac defects',
      D: 'Facial clefts'
    },
    correctAnswer: 'B',
    explanation: 'Weeks 4-6 correspond to the critical period for neural tube closure (days 22-28). Valproic acid exposure during this time increases neural tube defect risk by 1-2%.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['valproic-acid', 'teratogens', 'neural-tube-defects']
  },
  {
    id: 'q_comp_18',
    question: 'ABGC recertification requires:',
    options: {
      A: '25 CEUs every 5 years',
      B: '40 CEUs every 5 years',
      C: '50 CEUs every 5 years',
      D: 'Annual competency examination'
    },
    correctAnswer: 'C',
    explanation: 'ABGC requires 50 Continuing Education Units (CEUs) every 5 years for recertification. These must include specific categories of education relevant to genetic counseling practice.',
    domain: '5D',
    difficulty: 'Beginner',
    tags: ['ABGC', 'certification', 'continuing-education']
  },
  {
    id: 'q_comp_19',
    question: 'A marker chromosome derived from chromosome 22 is associated with:',
    options: {
      A: 'Prader-Willi syndrome',
      B: 'Cat-eye syndrome',
      C: 'DiGeorge syndrome',
      D: 'Wolf-Hirschhorn syndrome'
    },
    correctAnswer: 'B',
    explanation: 'Cat-eye syndrome is caused by a supernumerary marker chromosome derived from chromosome 22, typically containing the 22q11 region.',
    domain: '1C',
    difficulty: 'Advanced',
    tags: ['cat-eye-syndrome', 'marker-chromosome', 'chromosome-22']
  },
  {
    id: 'q_comp_20',
    question: 'Trio exome sequencing is superior to proband-only testing because it:',
    options: {
      A: 'Costs less per sample',
      B: 'Has faster turnaround time',
      C: 'Improves variant interpretation',
      D: 'Covers more genes'
    },
    correctAnswer: 'C',
    explanation: 'Trio sequencing allows for better variant interpretation by determining inheritance patterns and identifying de novo variants, which significantly improves diagnostic yield.',
    domain: '3A',
    difficulty: 'Intermediate',
    tags: ['trio-sequencing', 'variant-interpretation', 'exome-sequencing']
  },
  {
    id: 'q_comp_21',
    question: 'A woman who took isotretinoin during pregnancy is at increased risk for having a baby with:',
    options: {
      A: 'Neural tube defects',
      B: 'Limb reduction defects',
      C: 'Microtia and heart defects',
      D: 'Growth restriction only'
    },
    correctAnswer: 'C',
    explanation: 'Isotretinoin is a potent teratogen causing craniofacial malformations (microtia, cleft palate) and CNS defects (hydrocephalus, microcephaly). It also affects cardiac and thymic development.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['isotretinoin', 'teratogens', 'craniofacial-defects']
  },
  {
    id: 'q_comp_22',
    question: 'A patient focuses excessively on technical details to avoid discussing emotions. This represents:',
    options: {
      A: 'Good coping',
      B: 'High intelligence',
      C: 'Intellectualization',
      D: 'Information seeking'
    },
    correctAnswer: 'C',
    explanation: 'Intellectualization involves focusing on facts and technical details to avoid dealing with emotions. When this becomes excessive or prevents processing emotional aspects, it functions as a defense mechanism.',
    domain: '4A',
    difficulty: 'Intermediate',
    tags: ['defense-mechanisms', 'intellectualization', 'coping']
  },
  {
    id: 'q_comp_23',
    question: 'The CPT code 96040 is used for:',
    options: {
      A: 'Genetic laboratory testing',
      B: 'Genetic counseling services (30-minute increments)',
      C: 'Chromosomal analysis',
      D: 'Molecular testing interpretation'
    },
    correctAnswer: 'B',
    explanation: 'CPT code 96040 is specifically for medical genetics and genetic counseling services, billed in 30-minute increments of face-to-face time.',
    domain: '5A',
    difficulty: 'Beginner',
    tags: ['CPT-codes', 'billing', 'genetic-counseling-services']
  },
  {
    id: 'q_comp_24',
    question: 'Noonan syndrome with stunted growth requires which initial evaluation?',
    options: {
      A: 'Growth hormone testing',
      B: 'Echocardiogram',
      C: 'Thyroid function tests',
      D: 'Bone age assessment'
    },
    correctAnswer: 'B',
    explanation: 'Cardiac defects are common in Noonan syndrome and can be life-threatening. Echocardiogram should be performed initially to rule out structural heart disease.',
    domain: '1C',
    difficulty: 'Intermediate',
    tags: ['noonan-syndrome', 'cardiac-screening', 'medical-management']
  },
  {
    id: 'q_comp_25',
    question: 'When is Sanger sequencing preferred over NGS?',
    options: {
      A: 'Testing multiple genes',
      B: 'Analyzing repetitive sequences',
      C: 'Looking for copy number variants',
      D: 'Reducing costs'
    },
    correctAnswer: 'B',
    explanation: 'Sanger sequencing is superior to NGS for repetitive sequences, regions with high GC content, and areas where NGS has poor coverage. It\'s also used for confirmation of NGS findings.',
    domain: '3B',
    difficulty: 'Intermediate',
    tags: ['sanger-sequencing', 'NGS-limitations', 'testing-methods']
  },
  {
    id: 'q_comp_26',
    question: 'Echogenic bowel on second-trimester ultrasound is associated with all EXCEPT:',
    options: {
      A: 'Cystic fibrosis',
      B: 'Cytomegalovirus',
      C: 'Trisomy 21',
      D: 'Neural tube defects'
    },
    correctAnswer: 'D',
    explanation: 'Echogenic bowel is associated with cystic fibrosis (most concerning), CMV infection, and trisomy 21. Neural tube defects are not associated with echogenic bowel.',
    domain: '1A',
    difficulty: 'Intermediate',
    tags: ['echogenic-bowel', 'prenatal-findings', 'ultrasound']
  },
  {
    id: 'q_comp_27',
    question: 'The primary goal of genetic counseling is to:',
    options: {
      A: 'Prevent genetic diseases',
      B: 'Help patients make informed autonomous decisions',
      C: 'Reduce healthcare costs',
      D: 'Ensure optimal medical outcomes'
    },
    correctAnswer: 'B',
    explanation: 'The primary goal of genetic counseling is to help patients understand genetic information and make informed decisions that align with their values and circumstances. This respects autonomy while providing necessary support and information.',
    domain: '4A',
    difficulty: 'Beginner',
    tags: ['genetic-counseling-goals', 'autonomy', 'informed-decisions']
  },
  {
    id: 'q_comp_28',
    question: 'After one child with neural tube defects, the empiric recurrence risk is:',
    options: {
      A: 'Same as population risk',
      B: '3-5%',
      C: '10%',
      D: '25%'
    },
    correctAnswer: 'B',
    explanation: 'After one neural tube defect, the empiric recurrence risk increases to 3-5% (compared to population risk of 1-2 per 1,000). High-dose folic acid supplementation is recommended for the next pregnancy.',
    domain: '3C',
    difficulty: 'Intermediate',
    tags: ['neural-tube-defects', 'recurrence-risk', 'empiric-risks']
  },
  {
    id: 'q_comp_29',
    question: 'Which anomaly is characteristic of Pierre Robin sequence?',
    options: {
      A: 'Macroglossia',
      B: 'Micrognathia',
      C: 'Cleft lip',
      D: 'Craniosynostosis'
    },
    correctAnswer: 'B',
    explanation: 'Micrognathia (small jaw) is the primary defect in Pierre Robin sequence, which leads to posterior positioning of the tongue (glossoptosis) and cleft palate.',
    domain: '1C',
    difficulty: 'Beginner',
    tags: ['pierre-robin', 'micrognathia', 'sequence']
  },
  {
    id: 'q_comp_30',
    question: 'According to the NSGC Code of Ethics, genetic counselors should promote:',
    options: {
      A: 'Cost-effective healthcare',
      B: 'Client well-being and autonomy',
      C: 'Institutional policies',
      D: 'Physician preferences'
    },
    correctAnswer: 'B',
    explanation: 'The NSGC Code of Ethics has four core principles, with client well-being and autonomy being fundamental to genetic counseling practice.',
    domain: '5D',
    difficulty: 'Beginner',
    tags: ['NSGC-code-ethics', 'client-autonomy', 'professional-standards']
  }
]

export const practiceQuestionsByDomain = {
  '1A': comprehensivePracticeQuestions.filter(q => q.domain === '1A'),
  '1B': comprehensivePracticeQuestions.filter(q => q.domain === '1B'),
  '1C': comprehensivePracticeQuestions.filter(q => q.domain === '1C'),
  '2A': comprehensivePracticeQuestions.filter(q => q.domain === '2A'),
  '2B': comprehensivePracticeQuestions.filter(q => q.domain === '2B'),
  '3A': comprehensivePracticeQuestions.filter(q => q.domain === '3A'),
  '3B': comprehensivePracticeQuestions.filter(q => q.domain === '3B'),
  '3C': comprehensivePracticeQuestions.filter(q => q.domain === '3C'),
  '4A': comprehensivePracticeQuestions.filter(q => q.domain === '4A'),
  '4B': comprehensivePracticeQuestions.filter(q => q.domain === '4B'),
  '5A': comprehensivePracticeQuestions.filter(q => q.domain === '5A'),
  '5D': comprehensivePracticeQuestions.filter(q => q.domain === '5D'),
  'Mixed': comprehensivePracticeQuestions
}