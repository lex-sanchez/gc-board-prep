import type { PracticeQuestion } from '@/types/board-practice'

export const domain5dPracticeQuestions: PracticeQuestion[] = [
  {
    id: 'q5d_1',
    question: 'According to the NSGC Code of Ethics, which of the following is a core principle?',
    options: {
      A: 'Promote the advancement of genetic research',
      B: 'Promote client well-being and autonomy',
      C: 'Advocate for healthcare cost reduction',
      D: 'Support physician decision-making'
    },
    correctAnswer: 'B',
    explanation: 'The NSGC Code of Ethics has four core principles: (1) Promote client well-being and autonomy, (2) Promote accuracy of information, (3) Promote social justice, and (4) Professional integrity. Client well-being and autonomy is fundamental to genetic counseling practice.',
    domain: '5D',
    difficulty: 'Beginner',
    tags: ['NSGC-code-ethics', 'core-principles', 'professional-standards']
  },
  {
    id: 'q5d_2',
    question: 'Under GINA (Genetic Information Nondiscrimination Act), which of the following is NOT protected?',
    options: {
      A: 'Health insurance coverage decisions',
      B: 'Employment hiring practices',
      C: 'Life insurance coverage decisions',
      D: 'Health insurance premium setting'
    },
    correctAnswer: 'C',
    explanation: 'GINA protects against genetic discrimination in health insurance and employment but does NOT cover life insurance, disability insurance, or long-term care insurance. These types of insurance can still legally use genetic information in coverage decisions.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['GINA', 'genetic-discrimination', 'insurance']
  },
  {
    id: 'q5d_3',
    question: 'A genetic counselor is licensed in State A but wants to provide telemedicine services to a patient in State B. What is the most important consideration?',
    options: {
      A: 'The patient\'s insurance coverage',
      B: 'The licensure requirements of State B',
      C: 'The technology platform being used',
      D: 'The type of genetic condition being discussed'
    },
    correctAnswer: 'B',
    explanation: 'Telemedicine practice is typically regulated by the state where the patient is located. The genetic counselor must be licensed in State B or have appropriate authorization to practice there, regardless of where they are physically located.',
    domain: '5D',
    difficulty: 'Advanced',
    tags: ['telemedicine', 'state-licensure', 'interstate-practice']
  },
  {
    id: 'q5d_4',
    question: 'Which organization is responsible for certifying genetic counselors in the United States?',
    options: {
      A: 'NSGC (National Society of Genetic Counselors)',
      B: 'ABGC (American Board of Genetic Counseling)',
      C: 'ACGC (Accreditation Council for Genetic Counseling)',
      D: 'ASHG (American Society of Human Genetics)'
    },
    correctAnswer: 'B',
    explanation: 'ABGC is responsible for certification of genetic counselors. NSGC is the professional organization, ACGC accredits training programs, and ASHG is a broader genetics organization. ABGC sets certification standards and administers the board exam.',
    domain: '5D',
    difficulty: 'Beginner',
    tags: ['ABGC', 'certification', 'professional-organizations']
  },
  {
    id: 'q5d_5',
    question: 'A patient\'s genetic test results are stored in an electronic health record. Under HIPAA, this information is considered:',
    options: {
      A: 'Public health information',
      B: 'Protected health information (PHI)',
      C: 'Research data',
      D: 'Family medical history'
    },
    correctAnswer: 'B',
    explanation: 'Under HIPAA, genetic test results are considered Protected Health Information (PHI) and must be safeguarded according to HIPAA privacy and security rules. This includes restrictions on access, use, and disclosure.',
    domain: '5D',
    difficulty: 'Beginner',
    tags: ['HIPAA', 'PHI', 'privacy-protection']
  },
  {
    id: 'q5d_6',
    question: 'What is the minimum continuing education requirement for ABGC recertification?',
    options: {
      A: '25 CEUs every 5 years',
      B: '40 CEUs every 5 years',
      C: '50 CEUs every 5 years',
      D: '60 CEUs every 5 years'
    },
    correctAnswer: 'C',
    explanation: 'ABGC requires 50 Continuing Education Units (CEUs) every 5 years for recertification. These must include specific categories of education relevant to genetic counseling practice.',
    domain: '5D',
    difficulty: 'Beginner',
    tags: ['ABGC', 'continuing-education', 'recertification']
  },
  {
    id: 'q5d_7',
    question: 'A genetic counselor discovers that a laboratory has been providing inaccurate test results. According to professional ethics, the counselor should:',
    options: {
      A: 'Continue using the laboratory but counsel patients about limitations',
      B: 'Stop using the laboratory immediately',
      C: 'Report the issue to appropriate authorities',
      D: 'Discuss the issue only with colleagues'
    },
    correctAnswer: 'C',
    explanation: 'Professional integrity and client well-being require reporting laboratory quality issues to appropriate regulatory authorities (such as CLIA, CAP, or state health departments) to protect current and future patients.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['professional-integrity', 'laboratory-quality', 'reporting']
  },
  {
    id: 'q5d_8',
    question: 'Which type of insurance is eligible for Medicare coverage?',
    options: {
      A: 'All individuals over age 60',
      B: 'Individuals over age 65, those with ESRD, or those with ALS',
      C: 'Only individuals with genetic conditions',
      D: 'Individuals with employer-sponsored insurance gaps'
    },
    correctAnswer: 'B',
    explanation: 'Medicare covers individuals age 65+, those with End-Stage Renal Disease (ESRD), and those with Amyotrophic Lateral Sclerosis (ALS). Some individuals with disabilities may also qualify after a waiting period.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['Medicare', 'eligibility', 'healthcare-coverage']
  },
  {
    id: 'q5d_9',
    question: 'A genetic counselor is asked to provide services outside their area of expertise. According to professional standards, they should:',
    options: {
      A: 'Provide the services after brief review of the literature',
      B: 'Decline and refer to an appropriate specialist',
      C: 'Provide services with appropriate disclaimers',
      D: 'Consult with a colleague during the session'
    },
    correctAnswer: 'B',
    explanation: 'Professional integrity requires practicing within one\'s scope of competence. When asked to provide services outside their expertise, genetic counselors should refer to appropriate specialists rather than risk providing inadequate care.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['scope-of-practice', 'professional-competence', 'referrals']
  },
  {
    id: 'q5d_10',
    question: 'Under GINA, genetic information includes all of the following EXCEPT:',
    options: {
      A: 'Genetic test results',
      B: 'Family medical history',
      C: 'Age of symptom onset',
      D: 'Requests for genetic testing'
    },
    correctAnswer: 'C',
    explanation: 'GINA defines genetic information to include genetic test results, family medical history, and requests for genetic testing. Age of symptom onset for an individual\'s own condition is not considered genetic information under GINA.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['GINA', 'genetic-information', 'legal-definitions']
  },
  {
    id: 'q5d_11',
    question: 'A laboratory must be CLIA-certified to:',
    options: {
      A: 'Perform research on genetic samples',
      B: 'Provide clinical genetic testing results',
      C: 'Store genetic samples long-term',
      D: 'Counsel patients about test results'
    },
    correctAnswer: 'B',
    explanation: 'CLIA (Clinical Laboratory Improvement Amendments) certification is required for laboratories that perform clinical testing on human specimens. This ensures quality standards for laboratory testing used in patient care.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['CLIA', 'laboratory-certification', 'quality-standards']
  },
  {
    id: 'q5d_12',
    question: 'Which of the following best describes the relationship between a genetic counselor and their profession according to the NSGC Code of Ethics?',
    options: {
      A: 'Genetic counselors should prioritize institutional policies over professional ethics',
      B: 'Genetic counselors should maintain professional competence and integrity',
      C: 'Genetic counselors should always defer to physician recommendations',
      D: 'Genetic counselors should focus primarily on reducing healthcare costs'
    },
    correctAnswer: 'B',
    explanation: 'The NSGC Code of Ethics emphasizes professional integrity, which includes maintaining competence, practicing within scope of expertise, engaging in continuing education, and upholding professional standards.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['professional-integrity', 'NSGC-code-ethics', 'competence']
  },
  {
    id: 'q5d_13',
    question: 'A genetic counselor working in a state without licensure laws is primarily governed by:',
    options: {
      A: 'Federal genetic counseling regulations',
      B: 'Hospital credentialing requirements',
      C: 'NSGC professional standards and ABGC certification',
      D: 'State medical practice acts'
    },
    correctAnswer: 'C',
    explanation: 'In states without specific genetic counselor licensure, practice is primarily governed by professional standards (NSGC Code of Ethics), certification requirements (ABGC), and institutional credentialing. There are no federal genetic counseling regulations.',
    domain: '5D',
    difficulty: 'Advanced',
    tags: ['professional-standards', 'state-licensure', 'governance']
  },
  {
    id: 'q5d_14',
    question: 'The primary purpose of prior authorization for genetic testing is to:',
    options: {
      A: 'Ensure patient safety',
      B: 'Determine medical necessity',
      C: 'Verify laboratory accreditation',
      D: 'Confirm genetic counselor credentials'
    },
    correctAnswer: 'B',
    explanation: 'Prior authorization is an insurance process to determine if genetic testing meets medical necessity criteria before approving coverage. It\'s a cost-control mechanism to ensure tests are clinically appropriate.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['prior-authorization', 'medical-necessity', 'insurance']
  },
  {
    id: 'q5d_15',
    question: 'A genetic counselor learns that a colleague is practicing while impaired by substance abuse. The most appropriate action is to:',
    options: {
      A: 'Confront the colleague directly',
      B: 'Report to the supervisor or appropriate authorities',
      C: 'Monitor the situation before taking action',
      D: 'Discuss with other colleagues first'
    },
    correctAnswer: 'B',
    explanation: 'Professional integrity requires reporting impaired colleagues to protect patients. This should be done through appropriate channels (supervisor, licensing board, or professional organization) rather than informal confrontation.',
    domain: '5D',
    difficulty: 'Advanced',
    tags: ['professional-integrity', 'colleague-impairment', 'reporting']
  },
  {
    id: 'q5d_16',
    question: 'Which elements are required for informed consent in genetic testing?',
    options: {
      A: 'Nature of test, risks, benefits, alternatives, right to refuse',
      B: 'Only risks and benefits of testing',
      C: 'Test accuracy and cost information',
      D: 'Laboratory certification and counselor credentials'
    },
    correctAnswer: 'A',
    explanation: 'Informed consent requires disclosure of: (1) nature of the test/procedure, (2) risks and benefits, (3) alternatives available, (4) right to refuse, and (5) opportunity to ask questions. This ensures truly informed decision-making.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['informed-consent', 'consent-elements', 'patient-rights']
  },
  {
    id: 'q5d_17',
    question: 'The CPT code 96040 is used for:',
    options: {
      A: 'Genetic laboratory testing',
      B: 'Medical genetics and genetic counseling services (per 30 minutes)',
      C: 'Chromosomal analysis',
      D: 'Molecular genetic testing'
    },
    correctAnswer: 'B',
    explanation: 'CPT code 96040 is specifically for medical genetics and genetic counseling services, billed in 30-minute increments of face-to-face time. This is the primary billing code for genetic counseling services.',
    domain: '5D',
    difficulty: 'Beginner',
    tags: ['CPT-codes', 'billing', 'genetic-counseling-services']
  },
  {
    id: 'q5d_18',
    question: 'A genetic counselor is asked to participate in research involving genetic testing. The most important ethical consideration is:',
    options: {
      A: 'Potential publication opportunities',
      B: 'Protection of research participants',
      C: 'Funding source for the research',
      D: 'Academic advancement potential'
    },
    correctAnswer: 'B',
    explanation: 'The primary ethical obligation in research is protection of participants, including informed consent, minimizing risks, protecting confidentiality, and ensuring fair selection of participants. This aligns with research ethics principles.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['research-ethics', 'participant-protection', 'ethics']
  },
  {
    id: 'q5d_19',
    question: 'State genetic counselor licensure laws typically include all of the following requirements EXCEPT:',
    options: {
      A: 'Master\'s degree from accredited program',
      B: 'ABGC certification',
      C: 'Malpractice insurance',
      D: 'Specific religious or cultural training'
    },
    correctAnswer: 'D',
    explanation: 'Typical licensure requirements include education (master\'s degree), certification (ABGC), and often malpractice insurance. While cultural competency is important, specific religious or cultural training is not typically a licensure requirement.',
    domain: '5D',
    difficulty: 'Intermediate',
    tags: ['state-licensure', 'licensure-requirements', 'professional-qualifications']
  },
  {
    id: 'q5d_20',
    question: 'The concept of "duty to warn" in genetics refers to:',
    options: {
      A: 'Warning patients about all possible genetic risks',
      B: 'The obligation to warn family members of genetic risks',
      C: 'Warning patients about laboratory limitations',
      D: 'The need to warn about insurance discrimination'
    },
    correctAnswer: 'B',
    explanation: '"Duty to warn" refers to the potential ethical and legal obligation to warn at-risk family members about genetic risks when the patient refuses to inform them. This creates tension between patient confidentiality and potential harm to relatives.',
    domain: '5D',
    difficulty: 'Advanced',
    tags: ['duty-to-warn', 'family-disclosure', 'ethics']
  }
]