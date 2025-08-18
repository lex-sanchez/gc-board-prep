import type { PracticeQuestion } from '@/types/board-practice'

export const domain1bPracticeQuestions: PracticeQuestion[] = [
  {
    id: 'q1b_1',
    question: 'A fetus at 18 weeks gestation is found to have micrognathia, cleft palate, and glossoptosis on ultrasound. This combination of findings is most consistent with:',
    options: {
      A: 'CHARGE syndrome',
      B: '22q11.2 deletion syndrome',
      C: 'Pierre Robin sequence',
      D: 'Amniotic band syndrome'
    },
    correctAnswer: 'C',
    explanation: 'The triad of micrognathia (small jaw), cleft palate, and glossoptosis (posterior tongue displacement) is classic for Pierre Robin sequence. The primary defect is micrognathia, which leads to posterior positioning of the tongue, interfering with normal palate closure.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['pierre-robin', 'sequence', 'malformation-classification']
  },
  {
    id: 'q1b_2',
    question: 'A pregnancy complicated by severe oligohydramnios results in a fetus with growth restriction, pulmonary hypoplasia, and characteristic facial features including low-set ears. This constellation of findings is best described as:',
    options: {
      A: 'A malformation',
      B: 'A deformation',
      C: 'A disruption',
      D: 'A sequence'
    },
    correctAnswer: 'D',
    explanation: 'This describes Potter sequence, where oligohydramnios (the primary problem) leads to a cascade of secondary effects including growth restriction, pulmonary hypoplasia, and facial deformities due to compression in utero.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['potter-sequence', 'oligohydramnios', 'sequences']
  },
  {
    id: 'q1b_3',
    question: 'A 25-year-old woman with poorly controlled maternal diabetes is at increased risk for having a baby with all of the following EXCEPT:',
    options: {
      A: 'Neural tube defects',
      B: 'Congenital heart defects',
      C: 'Caudal regression syndrome',
      D: 'Achondroplasia'
    },
    correctAnswer: 'D',
    explanation: 'Maternal diabetes increases risk for neural tube defects, congenital heart defects, and caudal regression syndrome due to elevated glucose levels during organogenesis. Achondroplasia is a genetic condition caused by FGFR3 mutations, not related to maternal diabetes.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['maternal-diabetes', 'teratogens', 'achondroplasia']
  },
  {
    id: 'q1b_4',
    question: 'Echogenic bowel identified on second-trimester ultrasound is associated with all of the following EXCEPT:',
    options: {
      A: 'Cystic fibrosis',
      B: 'Cytomegalovirus infection',
      C: 'Trisomy 21',
      D: 'Maternal phenylketonuria'
    },
    correctAnswer: 'D',
    explanation: 'Echogenic bowel is associated with cystic fibrosis (most concerning), CMV infection, and trisomy 21. Maternal PKU typically causes microcephaly, intellectual disability, and growth restriction, but not echogenic bowel.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['echogenic-bowel', 'prenatal-findings', 'maternal-PKU']
  },
  {
    id: 'q1b_5',
    question: 'A woman took valproic acid during weeks 4-6 of pregnancy. Which screening test would be most appropriate?',
    options: {
      A: 'Fetal echocardiography',
      B: 'Maternal serum alpha-fetoprotein',
      C: 'Chromosomal microarray',
      D: 'Detailed ultrasound for limb defects'
    },
    correctAnswer: 'B',
    explanation: 'Valproic acid exposure during weeks 4-6 (neural tube closure period) increases risk for neural tube defects. Maternal serum AFP screening and detailed ultrasound would be most appropriate. While valproic acid can cause other defects, neural tube defects are the primary concern during this exposure window.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['valproic-acid', 'teratogens', 'neural-tube-defects']
  },
  {
    id: 'q1b_6',
    question: 'Which of the following best describes the difference between a malformation and a deformation?',
    options: {
      A: 'Malformations occur early in pregnancy; deformations occur late',
      B: 'Malformations are genetic; deformations are environmental',
      C: 'Malformations result from abnormal development; deformations result from external forces',
      D: 'Malformations are permanent; deformations are reversible'
    },
    correctAnswer: 'C',
    explanation: 'A malformation is a primary structural defect due to abnormal development during embryogenesis (intrinsic problem). A deformation is an abnormal form/position due to mechanical forces acting on normally formed structures (external forces).',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['malformation', 'deformation', 'birth-defect-classification']
  },
  {
    id: 'q1b_7',
    question: 'A couple had a previous pregnancy terminated due to anencephaly. They are now planning another pregnancy. What is the most appropriate counseling regarding recurrence risk?',
    options: {
      A: 'The risk is the same as the general population (1-2 per 1,000)',
      B: 'The recurrence risk is approximately 3-5%',
      C: 'The recurrence risk is 25% (autosomal recessive pattern)',
      D: 'Neural tube defects are typically sporadic and do not recur'
    },
    correctAnswer: 'B',
    explanation: 'After one neural tube defect, the empiric recurrence risk increases to 3-5% (compared to population risk of 1-2 per 1,000). High-dose folic acid supplementation (4-5 mg daily) is recommended for the next pregnancy.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['neural-tube-defects', 'recurrence-risk', 'empiric-risks']
  },
  {
    id: 'q1b_8',
    question: 'Fetal alcohol syndrome is characterized by all of the following features EXCEPT:',
    options: {
      A: 'Smooth philtrum',
      B: 'Thin upper lip',
      C: 'Microcephaly',
      D: 'Macrosomia'
    },
    correctAnswer: 'D',
    explanation: 'Fetal alcohol syndrome features include smooth philtrum, thin upper lip, small palpebral fissures, microcephaly, and growth restriction. Macrosomia (large birth weight) is not associated with fetal alcohol syndrome - affected infants typically have growth restriction.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['fetal-alcohol-syndrome', 'teratogens', 'growth-restriction']
  },
  {
    id: 'q1b_9',
    question: 'A 20-week fetal ultrasound shows increased nuchal translucency with normal chromosomal analysis. What additional study should be recommended?',
    options: {
      A: 'Amniocentesis for single gene testing',
      B: 'Fetal echocardiography',
      C: 'Maternal serum screening',
      D: 'Repeat ultrasound in 4 weeks'
    },
    correctAnswer: 'B',
    explanation: 'Increased nuchal translucency with normal chromosomes is associated with cardiac defects in approximately 5-10% of cases. Fetal echocardiography is recommended to evaluate for structural heart defects.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['nuchal-translucency', 'cardiac-defects', 'fetal-echocardiography']
  },
  {
    id: 'q1b_10',
    question: 'Which teratogen exposure is most strongly associated with Ebstein anomaly of the heart?',
    options: {
      A: 'Lithium',
      B: 'Warfarin',
      C: 'Isotretinoin',
      D: 'Phenytoin'
    },
    correctAnswer: 'A',
    explanation: 'Lithium exposure during pregnancy is associated with Ebstein anomaly, a specific cardiac defect involving the tricuspid valve. The risk is increased but the absolute risk remains relatively low (1-2% vs. 0.005% in general population).',
    domain: '1B',
    difficulty: 'Advanced',
    tags: ['lithium', 'ebstein-anomaly', 'teratogens']
  },
  {
    id: 'q1b_11',
    question: 'A woman with phenylketonuria (PKU) is planning pregnancy. What is the most important counseling point?',
    options: {
      A: 'The baby will definitely have PKU',
      B: 'Strict dietary control should begin before conception',
      C: 'Genetic testing of the partner is required',
      D: 'Prenatal diagnosis is recommended'
    },
    correctAnswer: 'B',
    explanation: 'Maternal PKU syndrome (elevated phenylalanine affecting the fetus) can cause microcephaly, intellectual disability, and cardiac defects. Strict dietary control with low phenylalanine diet must begin before conception to prevent these effects.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['maternal-PKU', 'teratogens', 'dietary-control']
  },
  {
    id: 'q1b_12',
    question: 'The critical period for limb development occurs during which gestational weeks?',
    options: {
      A: 'Weeks 1-2',
      B: 'Weeks 3-4',
      C: 'Weeks 4-8',
      D: 'Weeks 8-12'
    },
    correctAnswer: 'C',
    explanation: 'Limb development occurs primarily during weeks 4-8 of gestation. This is when limb buds form and digit separation occurs. Teratogen exposure during this period can cause limb reduction defects.',
    domain: '1B',
    difficulty: 'Beginner',
    tags: ['limb-development', 'critical-periods', 'embryology']
  },
  {
    id: 'q1b_13',
    question: 'Holoprosencephaly can be caused by all of the following EXCEPT:',
    options: {
      A: 'Trisomy 13',
      B: 'Maternal diabetes',
      C: 'SHH gene mutations',
      D: 'Maternal hyperthermia'
    },
    correctAnswer: 'D',
    explanation: 'Holoprosencephaly can be caused by trisomy 13 (most common chromosomal cause), maternal diabetes, and single gene mutations (SHH, ZIC2, SIX3). Maternal hyperthermia is associated with neural tube defects, not holoprosencephaly.',
    domain: '1B',
    difficulty: 'Advanced',
    tags: ['holoprosencephaly', 'SHH', 'brain-development']
  },
  {
    id: 'q1b_14',
    question: 'A newborn has a gastroschisis. This birth defect is best classified as a:',
    options: {
      A: 'Malformation',
      B: 'Deformation',
      C: 'Disruption',
      D: 'Sequence'
    },
    correctAnswer: 'C',
    explanation: 'Gastroschisis is a disruption - the abdominal wall forms normally but is subsequently disrupted, likely due to vascular compromise. The bowel herniates through the defect and is not covered by a membrane.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['gastroschisis', 'disruption', 'birth-defect-classification']
  },
  {
    id: 'q1b_15',
    question: 'Which maternal condition is most strongly associated with caudal regression syndrome in the fetus?',
    options: {
      A: 'Epilepsy treated with anticonvulsants',
      B: 'Type 1 diabetes mellitus',
      C: 'Systemic lupus erythematosus',
      D: 'Chronic hypertension'
    },
    correctAnswer: 'B',
    explanation: 'Maternal diabetes, particularly type 1 diabetes with poor glycemic control, is strongly associated with caudal regression syndrome (sacral agenesis). The risk is related to elevated glucose levels during early pregnancy.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['maternal-diabetes', 'caudal-regression', 'type-1-diabetes']
  },
  {
    id: 'q1b_16',
    question: 'A couple\'s first child was born with clubfoot. They ask about recurrence risk for their next pregnancy. The most appropriate counseling is:',
    options: {
      A: 'Risk is the same as general population',
      B: 'Risk is approximately 3-5%',
      C: 'Risk is 25% (autosomal recessive)',
      D: 'Risk is 50% (autosomal dominant)'
    },
    correctAnswer: 'B',
    explanation: 'Isolated clubfoot has a multifactorial inheritance pattern. After one affected child, the empiric recurrence risk is approximately 3-5%, much higher than the population risk but not following simple Mendelian patterns.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['clubfoot', 'multifactorial-inheritance', 'recurrence-risk']
  },
  {
    id: 'q1b_17',
    question: 'Isotretinoin (Accutane) exposure during pregnancy is associated with all of the following EXCEPT:',
    options: {
      A: 'Microtia',
      B: 'Conotruncal heart defects',
      C: 'Limb reduction defects',
      D: 'Intellectual disability'
    },
    correctAnswer: 'C',
    explanation: 'Isotretinoin embryopathy includes microtia (ear defects), conotruncal heart defects, CNS malformations, and intellectual disability. While isotretinoin affects multiple organ systems, limb reduction defects are more characteristic of thalidomide exposure.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['isotretinoin', 'teratogens', 'embryopathy']
  },
  {
    id: 'q1b_18',
    question: 'A fetus has arthrogryposis (joint contractures) in the setting of oligohydramnios. This finding is most likely due to:',
    options: {
      A: 'A primary muscle disorder',
      B: 'Decreased fetal movement due to compression',
      C: 'Chromosomal abnormality',
      D: 'Maternal infection'
    },
    correctAnswer: 'B',
    explanation: 'Arthrogryposis in the setting of oligohydramnios is typically due to decreased fetal movement caused by compression (deformation). Normal fetal movement is necessary for proper joint development.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['arthrogryposis', 'oligohydramnios', 'fetal-movement']
  },
  {
    id: 'q1b_19',
    question: 'Which of the following correctly describes the embryological basis of cleft lip and palate?',
    options: {
      A: 'Both result from failure of neural crest cell migration',
      B: 'Cleft lip and cleft palate always occur together',
      C: 'Cleft lip results from failure of facial prominence fusion; cleft palate from failure of palatal shelf fusion',
      D: 'Both occur during the same developmental time period'
    },
    correctAnswer: 'C',
    explanation: 'Cleft lip results from failure of the medial nasal and maxillary prominences to fuse (weeks 5-6). Cleft palate results from failure of the palatal shelves to fuse (weeks 8-12). They have different embryological origins and timing.',
    domain: '1B',
    difficulty: 'Advanced',
    tags: ['cleft-lip-palate', 'embryology', 'facial-development']
  },
  {
    id: 'q1b_20',
    question: 'The most common cause of ambiguous genitalia in a newborn with 46,XX karyotype is:',
    options: {
      A: 'Androgen insensitivity syndrome',
      B: 'Congenital adrenal hyperplasia',
      C: '5-alpha reductase deficiency',
      D: 'Maternal virilizing tumor'
    },
    correctAnswer: 'B',
    explanation: 'Congenital adrenal hyperplasia (particularly 21-hydroxylase deficiency) is the most common cause of virilization in 46,XX individuals, leading to ambiguous genitalia. It causes excess androgen production during fetal development.',
    domain: '1B',
    difficulty: 'Intermediate',
    tags: ['congenital-adrenal-hyperplasia', 'ambiguous-genitalia', '46XX']
  }
]