import type { StudySection } from '@/types/learning'

export const domain5Sections: StudySection[] = [
  {
    id: 'gina-genetic-information-nondiscrimination-act',
    title: 'GINA (Genetic Information Nondiscrimination Act)',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ⚖️ Most Important Federal Law for Genetic Counselors
          </h3>
          <p class="mb-4 text-sm">GINA has two main titles with different enforcement agencies:</p>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">GINA Structure</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Title I</strong> - Health insurance (enforced by Departments of Labor, HHS, Treasury)</li>
                <li>• <strong>Title II</strong> - Employment discrimination (enforced by EEOC)</li>
                <li>• <strong>Effective Date:</strong> November 21, 2009</li>
                <li>• <strong>Key Point:</strong> Title II is most relevant for genetic counselors</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">Title II Key Prohibitions</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Discrimination</strong> in any aspect of employment</li>
                <li>• <strong>Harassment</strong> based on genetic information</li>
                <li>• <strong>Retaliation</strong> for filing discrimination complaints</li>
                <li>• <strong>Requesting, requiring, or purchasing</strong> genetic information (with exceptions)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🧬 Definition of Genetic Information
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Genetic Information Includes</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Individual's genetic tests</strong></li>
                <li>• <strong>Family members' genetic tests</strong></li>
                <li>• <strong>Family medical history</strong> (manifestation of disease/disorder)</li>
                <li>• <strong>Requests for genetic services</strong> or participation in genetic research</li>
                <li>• <strong>Fetal genetic information</strong> carried by individual or family member</li>
                <li>• <strong>Embryo genetic information</strong> from assisted reproductive technology</li>
              </ul>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💎 Memory Aid: GIFT-FE</h4>
              <p class="text-sm text-blue-600">Genetic tests, Individual/family, Family history, Testing requests, Fetal info, Embryo info</p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-yellow-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 Six Exceptions for Acquiring Genetic Information - GIFTED Framework
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-yellow-700">Memory Aid: "GIFTED"</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>G</strong>eneral inadvertent acquisition (overhearing conversations)</li>
                <li>• <strong>I</strong>nvoluntary wellness programs (employer health services with specific requirements)</li>
                <li>• <strong>F</strong>MLA certification (family medical history for leave requests)</li>
                <li>• <strong>T</strong>hird-party public sources (newspapers, not intentionally seeking genetic info)</li>
                <li>• <strong>E</strong>nvironmental monitoring (workplace toxic substance monitoring)</li>
                <li>• <strong>D</strong>NA testing for forensic/quality control purposes (law enforcement labs)</li>
              </ul>
            </div>
            <div class="rounded-lg bg-red-50 p-4">
              <h4 class="mb-2 font-semibold text-red-700">⚠️ Board Pearl</h4>
              <p class="text-sm text-red-600">Each exception has specific requirements and limitations. Genetic information is NOT relevant to current ability to work.</p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-green-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🔒 Confidentiality Requirements
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Required Actions</h4>
              <ul class="space-y-1 text-sm">
                <li>• Keep genetic information <strong>confidential</strong></li>
                <li>• Store in <strong>separate medical file</strong> (can be with other medical info per ADA)</li>
                <li>• <strong>Limited exceptions</strong> for disclosure (government investigations, court orders)</li>
                <li>• Same confidentiality standards as Americans with Disabilities Act</li>
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
        id: 'gina-genetic-information-definition',
        question: 'Under GINA Title II, which of the following would be considered genetic information?',
        options: {
          A: 'Current diabetes diagnosis in an employee',
          B: 'Family history of heart disease reported during employee wellness program',
          C: 'Results of routine cholesterol screening',
          D: 'Documentation of a workplace injury'
        },
        correctAnswer: 'B',
        explanation: 'Family medical history is specifically included in GINA\'s definition of genetic information because it is often used to determine whether someone has an increased risk of getting a disease in the future. Current health conditions, routine health screenings, and workplace injuries are not considered genetic information under GINA.'
      },
      {
        id: 'gina-exceptions',
        question: 'Which of the following is NOT one of the six exceptions that allow employers to acquire genetic information under GINA?',
        options: {
          A: 'Inadvertent acquisition such as overhearing a conversation',
          B: 'Family medical history for FMLA certification',
          C: 'Mandatory genetic testing for all employees in high-risk positions',
          D: 'Genetic monitoring of workplace toxic substance exposure'
        },
        correctAnswer: 'C',
        explanation: 'Mandatory genetic testing for employees is explicitly prohibited under GINA Title II. The six exceptions are: inadvertent acquisition, voluntary wellness programs, FMLA certification, publicly available information, genetic monitoring programs, and DNA testing for forensic purposes. None of these exceptions allow for mandatory genetic testing of employees.'
      },
      {
        id: 'gina-enforcement',
        question: 'Which federal agency enforces GINA Title II employment provisions?',
        options: {
          A: 'Department of Health and Human Services (HHS)',
          B: 'Department of Labor',
          C: 'Equal Employment Opportunity Commission (EEOC)',
          D: 'Food and Drug Administration (FDA)'
        },
        correctAnswer: 'C',
        explanation: 'The EEOC enforces GINA Title II, which deals with genetic discrimination in employment. The Departments of Labor, HHS, and Treasury are responsible for Title I regulations addressing genetic information use in health insurance.'
      }
    ],
    mnemonics: [
      "GINA Titles: Health and Employment (Title I-Health, Title II-Employment)",
      "GIFTED Exceptions: Great Ideas For Tomorrow's Employment Decisions",
      "Genetic information is NOT relevant to current ability to work"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'belmont-report',
    title: 'The Belmont Report',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📜 Foundation of Research Ethics in the United States
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Historical Background</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Created:</strong> 1979 by National Commission for Protection of Human Subjects</li>
                <li>• <strong>Purpose:</strong> Identify basic ethical principles for biomedical and behavioral research</li>
                <li>• <strong>Foundation for:</strong> Common Rule and current human subjects regulations</li>
                <li>• <strong>Key Influence:</strong> Response to research abuses (Nazi experiments, Tuskegee study)</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">RBJ Principles</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>R</strong>espect for persons</li>
                <li>• <strong>B</strong>eneficence</li>
                <li>• <strong>J</strong>ustice</li>
              </ul>
              <p class="text-sm text-primary mt-2">Memory Aid: <strong>"Really Big Justice"</strong></p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            👤 1. Respect for Persons
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Two Ethical Convictions</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Individuals should be treated as autonomous agents</strong></li>
                <li>• <strong>Persons with diminished autonomy are entitled to protection</strong></li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Key Applications</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Informed consent</strong> for competent individuals</li>
                <li>• <strong>Additional protection</strong> for vulnerable populations</li>
                <li>• <strong>Voluntary participation</strong> without coercion</li>
              </ul>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">Memory Component</h4>
              <p class="text-sm text-blue-600"><strong>"R"</strong> in RBJ - <strong>"Respect recognizes rights"</strong></p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-green-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🤝 2. Beneficence
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Two General Rules</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Do not harm</strong> (non-maleficence)</li>
                <li>• <strong>Maximize possible benefits and minimize possible harms</strong></li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Key Applications</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Risk/benefit assessment</strong> for research protocols</li>
                <li>• <strong>Protection from harm</strong> while securing well-being</li>
                <li>• <strong>Systematic evaluation</strong> of research benefits vs. risks</li>
              </ul>
            </div>
            <div class="rounded-lg bg-yellow-50 p-4">
              <h4 class="mb-2 font-semibold text-yellow-700">Memory Component</h4>
              <p class="text-sm text-yellow-600"><strong>"B"</strong> in RBJ - <strong>"Beneficence brings better outcomes"</strong></p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-purple-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ⚖️ 3. Justice
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">Core Question</h4>
              <p class="text-sm">Who ought to receive the benefits of research and bear its burdens?</p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">Key Applications</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Fair procedures</strong> in subject selection</li>
                <li>• <strong>Equitable distribution</strong> of research burdens and benefits</li>
                <li>• <strong>Protection of vulnerable populations</strong> from exploitation</li>
                <li>• <strong>Consider social justice</strong> in research design</li>
              </ul>
            </div>
            <div class="rounded-lg bg-red-50 p-4">
              <h4 class="mb-2 font-semibold text-red-700">Memory Component</h4>
              <p class="text-sm text-red-600"><strong>"J"</strong> in RBJ - <strong>"Justice ensures fairness"</strong></p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-gray-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🔬 Three Key Applications to Research
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <h4 class="mb-2 font-semibold text-gray-700">1. Informed Consent</h4>
              <p class="text-sm">From Respect for Persons</p>
              <ul class="space-y-1 text-sm mt-2">
                <li>• Information, comprehension, voluntariness</li>
                <li>• Special provisions for vulnerable populations</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-gray-700">2. Risk/Benefit Assessment</h4>
              <p class="text-sm">From Beneficence</p>
              <ul class="space-y-1 text-sm mt-2">
                <li>• Systematic evaluation of potential harms and benefits</li>
                <li>• Minimize risks while maximizing benefits</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-gray-700">3. Selection of Subjects</h4>
              <p class="text-sm">From Justice</p>
              <ul class="space-y-1 text-sm mt-2">
                <li>• Fair selection procedures</li>
                <li>• Avoid exploitation of vulnerable populations</li>
                <li>• Equitable distribution of research participation</li>
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
        id: 'belmont-justice-principle',
        question: 'According to the Belmont Report, which principle is primarily concerned with fair distribution of research burdens and benefits?',
        options: {
          A: 'Respect for persons',
          B: 'Beneficence',
          C: 'Justice',
          D: 'Autonomy'
        },
        correctAnswer: 'C',
        explanation: 'Justice is the Belmont Report principle that addresses fair distribution of research burdens and benefits. It asks "Who ought to receive the benefits of research and bear its burdens?" This principle is concerned with preventing exploitation of vulnerable populations and ensuring equitable selection of research subjects.'
      },
      {
        id: 'belmont-practice-vs-research',
        question: 'What is the primary difference between "practice" and "research" according to the Belmont Report?',
        options: {
          A: 'Practice involves medication while research does not',
          B: 'Practice is designed to benefit individual patients while research develops generalizable knowledge',
          C: 'Practice requires consent while research does not',
          D: 'Practice is always safe while research involves risk'
        },
        correctAnswer: 'B',
        explanation: 'The Belmont Report distinguishes practice as interventions designed solely to enhance individual patient well-being with reasonable expectation of success, while research is designed to test hypotheses and develop generalizable knowledge. This distinction is important for determining what activities require IRB review.'
      }
    ],
    mnemonics: [
      "RBJ Principles: Really Big Justice (Respect, Beneficence, Justice)",
      "Three Applications: ICE (Informed consent, risk/benefit assessment, Equitable selection of subjects)",
      "Respect recognizes rights, Beneficence brings better outcomes, Justice ensures fairness"
    ],
    estimatedReadTime: 10
  },
  {
    id: 'common-rule-irb-procedures',
    title: 'Common Rule & IRB Procedures',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🏛️ Federal Policy for the Protection of Human Subjects
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Common Rule Overview</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Official Name:</strong> Federal Policy for the Protection of Human Subjects</li>
                <li>• <strong>Published:</strong> 1991, revised 2018</li>
                <li>• <strong>Applies to:</strong> 20 federal agencies (including HHS)</li>
                <li>• <strong>Key Components:</strong> IRB requirements, informed consent, assurances of compliance</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">Four Subparts</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Subpart A:</strong> Common Rule (basic protections)</li>
                <li>• <strong>Subpart B:</strong> Pregnant women, fetuses, neonates</li>
                <li>• <strong>Subpart C:</strong> Prisoners</li>
                <li>• <strong>Subpart D:</strong> Children</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            👥 IRB Composition and Requirements - CHIRP Framework
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Memory Aid: "CHIRP"</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>C</strong>hair (experienced IRB member)</li>
                <li>• <strong>H</strong>umanitarian member (not affiliated with institution)</li>
                <li>• <strong>I</strong>nstitutional members (familiar with institution)</li>
                <li>• <strong>R</strong>esearch expertise members (various scientific areas)</li>
                <li>• <strong>P</strong>rison representative (when reviewing prisoner research)</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Additional Requirements</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Minimum 5 members</strong></li>
                <li>• <strong>Both scientific and non-scientific members</strong></li>
                <li>• <strong>Both men and women</strong></li>
                <li>• <strong>Diverse backgrounds</strong> (race, cultural background, sensitivity to community)</li>
              </ul>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💎 Board Pearl</h4>
              <p class="text-sm text-blue-600">Minimum 5 members with diverse representation required for all IRBs</p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-green-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📋 Types of IRB Review
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">1. Full Board Review</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Convened meeting</strong> of IRB</li>
                <li>• <strong>Majority present</strong> including non-scientist</li>
                <li>• <strong>Simple majority</strong> approval required</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">2. Expedited Review</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Minimal risk</strong> research only</li>
                <li>• <strong>One or more experienced reviewers</strong></li>
                <li>• <strong>Cannot disapprove</strong> (only full board can disapprove)</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">3. Exempt Review</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Specific categories</strong> of minimal risk research</li>
                <li>• <strong>No continuing review</strong> required</li>
              </ul>
            </div>
          </div>
          <div class="rounded-lg bg-yellow-50 p-4 mt-4">
            <h4 class="mb-2 font-semibold text-yellow-700">⚠️ Critical Board Pearl</h4>
            <p class="text-sm text-yellow-600">Research can only be disapproved by full IRB meeting. Expedited reviewers cannot disapprove research.</p>
          </div>
        </div>

        <div class="rounded-lg bg-purple-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🏛️ Key Regulatory Framework
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">Key Requirements</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Institutional Review Board (IRB)</strong> review and approval</li>
                <li>• <strong>Informed consent</strong> from research subjects</li>
                <li>• <strong>Assurances of compliance</strong> from institutions</li>
                <li>• <strong>Additional protections</strong> for vulnerable populations</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">Enforcement and Coordination</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Enforcement:</strong> Each participating federal agency</li>
                <li>• <strong>Coordination:</strong> Office for Human Research Protections (OHRP)</li>
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
        id: 'irb-minimum-members',
        question: 'What is the minimum number of members required for an IRB under federal regulations?',
        options: {
          A: '3 members',
          B: '5 members',
          C: '7 members',
          D: '10 members'
        },
        correctAnswer: 'B',
        explanation: 'Federal regulations require a minimum of 5 IRB members. The IRB must include both scientific and non-scientific members, both men and women, and at least one member who is not affiliated with the institution. When reviewing research involving prisoners, an additional member with prisoner background or advocate is required.'
      },
      {
        id: 'expedited-review-purpose',
        question: 'What is the primary purpose of expedited IRB review?',
        options: {
          A: 'To review all research involving vulnerable populations',
          B: 'To review certain categories of minimal risk research without a full board meeting',
          C: 'To disapprove research that doesn\'t meet ethical standards',
          D: 'To provide emergency approval for urgent research'
        },
        correctAnswer: 'B',
        explanation: 'Expedited review allows certain categories of minimal risk research to be reviewed by one or more experienced IRB members without convening a full board meeting. However, expedited reviewers cannot disapprove research - only the full IRB can disapprove research protocols.'
      },
      {
        id: 'irb-more-than-minimal-risk',
        question: 'Which situation would require additional IRB review beyond expedited procedures?',
        options: {
          A: 'Survey research with minimal psychological risk',
          B: 'Research involving more than minimal risk',
          C: 'Collection of existing data with identifiers removed',
          D: 'Research using educational tests with anonymous data'
        },
        correctAnswer: 'B',
        explanation: 'Research involving more than minimal risk requires full IRB review at a convened meeting. Expedited review is only permitted for research involving no more than minimal risk and falling into specific categories. The other options describe research that might qualify for expedited review or exemption.'
      }
    ],
    mnemonics: [
      "CHIRP Composition: Chairs Help Institutional Research Proceed",
      "Common Rule Subparts: A-B-C-D (Common rule, Pregnant women, Prisoners, Children)",
      "Only full IRB can disapprove research - expedited reviewers cannot disapprove"
    ],
    estimatedReadTime: 9
  },
  {
    id: 'billing-reimbursement',
    title: 'Billing & Reimbursement',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            💰 Professional Requirements and Reimbursement Strategies
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Billing Varies By</h4>
              <ul class="space-y-1 text-sm">
                <li>• Employment status (private practice vs. academic institution)</li>
                <li>• Patient insurance (Medicare, Medicaid, private, self-pay)</li>
                <li>• State regulations and licensure requirements</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">Key Departments to Contact</h4>
              <ul class="space-y-1 text-sm">
                <li>• Compliance office</li>
                <li>• Credentialing office</li>
                <li>• Billing and collections</li>
                <li>• Contracts department</li>
                <li>• Coding specialist</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🆔 Essential Professional Setup
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-accent">1. National Provider Identification (NPI) Number</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Required for all billing</strong></li>
                <li>• <strong>Unique identifier</strong> for Medicare, Medicaid, private payers</li>
                <li>• <strong>Apply at:</strong> https://nppes.cms.hhs.gov</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">2. State Licensure</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Required in states</strong> that mandate genetic counselor licensure</li>
                <li>• <strong>Necessary for credentialing</strong> with many insurance companies</li>
                <li>• <strong>Check NSGC website</strong> for state-specific requirements</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">3. Institutional Credentialing</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Required by many institutions</strong> for patient care</li>
                <li>• <strong>May be required</strong> for documentation in medical records</li>
                <li>• <strong>Establishes criteria</strong> for practice within institution</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-yellow-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🏥 SIDE Framework for "Incident To" Requirements
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-yellow-700">Memory Aid: "SIDE"</h4>
              <p class="text-sm mb-3">Medicare Requirements for "Incident To" Billing:</p>
              <ul class="space-y-1 text-sm">
                <li>• <strong>S</strong>upervision - Physician must provide direct supervision</li>
                <li>• <strong>I</strong>nitial visit - Physician must have initially seen patient</li>
                <li>• <strong>D</strong>irect care - Service must be integral part of physician's care</li>
                <li>• <strong>E</strong>mployee - GC must be employee/contractor of billing entity</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-yellow-700">Key Limitations</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Cannot bill initial visits</strong> or consultations as "incident to"</li>
                <li>• <strong>Physician must be present</strong> in office suite (not just available by phone)</li>
                <li>• <strong>Ongoing involvement</strong> by physician required</li>
              </ul>
            </div>
            <div class="rounded-lg bg-red-50 p-4">
              <h4 class="mb-2 font-semibold text-red-700">⚠️ Board Pearl</h4>
              <p class="text-sm text-red-600">Direct supervision means physician present in office suite and immediately available - not just telephone availability</p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-green-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📊 CPT and ICD-10 Coding Essentials
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">CPT Codes (Current Procedural Terminology)</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Copyrighted by AMA</strong> - universal service descriptions</li>
                <li>• <strong>Any qualified provider</strong> may use any appropriate code</li>
                <li>• <strong>Recognized by all payers</strong> and tied to Relative Value Units (RVUs)</li>
                <li>• <strong>Genetic counseling specific codes</strong> available</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">ICD-10 Codes (International Classification of Diseases)</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Required on all claims</strong> to CMS and other insurers</li>
                <li>• <strong>Classify diagnoses</strong> and symptoms</li>
                <li>• <strong>Based on WHO standards</strong></li>
                <li>• <strong>Critical for compliance</strong> and accurate reimbursement</li>
              </ul>
            </div>
          </div>
          <div class="rounded-lg bg-blue-50 p-4 mt-4">
            <h4 class="mb-2 font-semibold text-blue-700">💎 Board Pearl</h4>
            <p class="text-sm text-blue-600">Use codes that most accurately describe services provided. NPI number required for all providers.</p>
          </div>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    practiceQuestions: [
      {
        id: 'incident-to-billing-requirement',
        question: 'For "incident to" billing under Medicare regulations, which requirement must be met?',
        options: {
          A: 'The genetic counselor must be board certified',
          B: 'The physician must be present in the same room during the service',
          C: 'The physician must have initially seen the patient and established a care plan',
          D: 'The service must be provided in a hospital setting'
        },
        correctAnswer: 'C',
        explanation: '"Incident to" billing requires that the physician initially see the patient and establish a care plan. The physician must provide direct supervision (present in office suite, not same room), and the service must be an integral part of the physician\'s professional service. Board certification is not required, and services can be provided in various settings.'
      },
      {
        id: 'incident-to-supervision',
        question: 'What is required when genetic counseling services are billed "incident to" a physician?',
        options: {
          A: 'The genetic counselor must have a medical degree',
          B: 'Services must be provided in a hospital setting',
          C: 'The supervising physician must be immediately available in the office suite',
          D: 'The genetic counselor must be licensed in all 50 states'
        },
        correctAnswer: 'C',
        explanation: 'For "incident to" billing, the physician must provide direct supervision, which means being present in the office suite and immediately available to provide assistance and direction. The physician does not need to be in the same room, but telephone availability or presence elsewhere in the institution does not constitute direct supervision.'
      },
      {
        id: 'genetic-counselor-credentialing',
        question: 'For genetic counselors working in states without licensure, what is most important for insurance credentialing?',
        options: {
          A: 'Board certification by ABGC',
          B: 'Master\'s degree in genetic counseling',
          C: 'Hospital privileges',
          D: 'Emphasis on appropriate training and healthcare provider status'
        },
        correctAnswer: 'D',
        explanation: 'In states without licensure, it\'s important to emphasize that genetic counselors are appropriately trained healthcare providers when negotiating with insurance companies. While board certification and master\'s degrees are important qualifications, the key is demonstrating professional competence and training when licensure is not available.'
      }
    ],
    mnemonics: [
      "SIDE Requirements: Success In Direct Employment (Supervision, Initial visit, Direct care, Employee)",
      "NPI number required for all providers - apply at nppes.cms.hhs.gov",
      "Direct supervision = present in office suite, not just telephone availability"
    ],
    estimatedReadTime: 7
  },
  {
    id: 'vulnerable-populations',
    title: 'Vulnerable Populations',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            👥 Additional Protections Required for Special Groups
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Vulnerable Populations Overview</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Definition:</strong> Groups that may have compromised ability to provide informed consent</li>
                <li>• <strong>Key Principle:</strong> Additional safeguards required, not exclusion from research</li>
                <li>• <strong>Federal Subparts:</strong> Each group has specific regulatory protections</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">CPP Memory Aid</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>C</strong>hildren</li>
                <li>• <strong>P</strong>regnant women</li>
                <li>• <strong>P</strong>risoners</li>
              </ul>
              <p class="text-sm text-primary mt-2">Memory Aid: <strong>"Children, Pregnant women, Prisoners"</strong></p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            👶 Children - 45 CFR 46 Subpart D Requirements
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Definition and Key Requirements</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Definition:</strong> Persons under 18 years of age (federal definition)</li>
                <li>• <strong>State Definition:</strong> May vary by jurisdiction for consent purposes</li>
                <li>• <strong>Parental permission</strong> required (one or both parents depending on risk)</li>
                <li>• <strong>Child assent</strong> required when developmentally appropriate</li>
                <li>• <strong>Additional IRB findings</strong> required for approval</li>
                <li>• <strong>Risk categories</strong> determine level of review required</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Special Protections</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Exemption 2 limited</strong> for children (public behavior observation only)</li>
                <li>• <strong>Greater than minimal risk</strong> requires special justification</li>
                <li>• <strong>Wards of state</strong> require additional advocate</li>
              </ul>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💎 Board Pearl</h4>
              <p class="text-sm text-blue-600">Child assent required when developmentally appropriate - IRB determines based on age, maturity, and psychological state</p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-green-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🤱 Pregnant Women and Fetuses - 45 CFR 46 Subpart B Requirements
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Additional Safeguards Required</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Risk assessment</strong> for pregnant woman, fetus, and neonate</li>
                <li>• <strong>Consent from pregnant woman</strong> for research</li>
                <li>• <strong>Father's consent</strong> may be required for fetal research</li>
                <li>• <strong>Independent physician</strong> assessment for some research</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Key Considerations</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Unknown risks</strong> to developing fetus</li>
                <li>• <strong>Lactating women</strong> have additional considerations</li>
                <li>• <strong>Task Force recommendations</strong> (PRGLAC) provide guidance</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-red-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🔒 Prisoners - 45 CFR 46 Subpart C Requirements
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-red-700">Definition and Key Concern</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Definition:</strong> Any individual involuntarily confined in a penal institution</li>
                <li>• <strong>Key Concern:</strong> Cannot make truly voluntary decisions due to incarceration</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-red-700">Special Requirements</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>OHRP approval</strong> required before research can begin</li>
                <li>• <strong>IRB composition</strong> must include prisoner or advocate</li>
                <li>• <strong>Additional findings</strong> required for IRB approval</li>
                <li>• <strong>Limited research categories</strong> permitted</li>
              </ul>
            </div>
            <div class="rounded-lg bg-yellow-50 p-4">
              <h4 class="mb-2 font-semibold text-yellow-700">⚠️ Critical Board Pearl</h4>
              <p class="text-sm text-yellow-600">Research cannot proceed until OHRP provides written approval. OHRP approval required before starting any prisoner research.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [
      {
        id: 'vulnerable-populations-ohrp-approval',
        question: 'Which vulnerable population requires OHRP approval before research can begin?',
        options: {
          A: 'Children',
          B: 'Pregnant women',
          C: 'Prisoners',
          D: 'Elderly individuals'
        },
        correctAnswer: 'C',
        explanation: 'Research involving prisoners requires certification to OHRP that the IRB has made all required findings, and OHRP must issue written approval before research can proceed. Children and pregnant women have additional protections but do not require OHRP approval. Elderly individuals are not automatically considered a vulnerable population requiring special federal protections.'
      },
      {
        id: 'children-research-assent',
        question: 'Under the Common Rule, research involving children may require which additional element beyond parental permission?',
        options: {
          A: 'Grandparent consent',
          B: 'Child assent',
          C: 'Court approval',
          D: 'Physician recommendation'
        },
        correctAnswer: 'B',
        explanation: 'Research involving children may require both parental permission and child assent when the child is developmentally capable of providing assent. The IRB determines whether assent is required based on the child\'s age, maturity, and psychological state. Assent is the child\'s agreement to participate, while permission comes from parents/guardians.'
      }
    ],
    mnemonics: [
      "CPP Groups: Children, Pregnant women, Prisoners",
      "Additional protections required, not exclusion from research",
      "Prisoners: OHRP approval required before research can begin"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'informed-consent-process',
    title: 'Informed Consent Process',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📋 Foundation of Ethical Research and Clinical Practice
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Informed Consent Overview</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Definition:</strong> Process of providing adequate information and ensuring voluntary agreement</li>
                <li>• <strong>Not Just Signature:</strong> Comprehensive process including information, comprehension, voluntariness</li>
                <li>• <strong>Legal Requirement:</strong> Required by federal regulations and state laws</li>
                <li>• <strong>Documentation:</strong> Written record of the consent process</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">DICE Framework</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>D</strong>ocumentation</li>
                <li>• <strong>I</strong>nformation</li>
                <li>• <strong>C</strong>omprehension</li>
                <li>• <strong>E</strong>thical voluntariness</li>
              </ul>
              <p class="text-sm text-primary mt-2">Memory Aid: <strong>"Doctors Inform Completely and Ethically"</strong></p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📋 DICE Framework for Required Elements
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Documentation Requirements</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>D</strong>ocumentation - Written consent document required</li>
                <li>• Must include all required elements per 21 CFR 50.25</li>
                <li>• Be in language understandable to the subject</li>
                <li>• Be IRB approved before use</li>
                <li>• Copy provided to person signing</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Information Elements</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>I</strong>nformation - All required elements must be included:</li>
                <li>• Research procedure and purposes</li>
                <li>• Risks and anticipated benefits</li>
                <li>• Alternative procedures (when applicable)</li>
                <li>• Confidentiality protections</li>
                <li>• Compensation for injury (if any)</li>
                <li>• Contact information for questions</li>
                <li>• Voluntary nature and right to withdraw</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Comprehension and Voluntariness</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>C</strong>omprehension - Subject must understand the information</li>
                <li>• <strong>E</strong>thical voluntariness - Free from coercion and undue influence</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-green-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📝 Documentation Standards
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Written Consent Document Must</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Include all required elements</strong> per 21 CFR 50.25</li>
                <li>• <strong>Be in language understandable</strong> to the subject</li>
                <li>• <strong>Be IRB approved</strong> before use</li>
                <li>• <strong>Be signed and dated</strong> by subject or legally authorized representative</li>
                <li>• <strong>Copy provided</strong> to person signing</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Special Circumstances</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Translated documents</strong> required for non-English speakers</li>
                <li>• <strong>Witness required</strong> for certain situations</li>
                <li>• <strong>Short form</strong> acceptable under specific conditions</li>
              </ul>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💎 Board Pearl</h4>
              <p class="text-sm text-blue-600">Copy of consent document must be given to person signing - this is a federal requirement</p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-yellow-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            👥 Special Consent Considerations
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <h4 class="mb-2 font-semibold text-yellow-700">Non-English Speaking Subjects</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Translated consent forms</strong> required</li>
                <li>• <strong>Qualified interpreter</strong> should be present</li>
                <li>• <strong>Cultural considerations</strong> must be addressed</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-yellow-700">Subjects with Diminished Capacity</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Legally authorized representative</strong> may provide consent</li>
                <li>• <strong>Subject assent</strong> when appropriate</li>
                <li>• <strong>Ongoing evaluation</strong> of capacity</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-yellow-700">Emergency Situations</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Exception possible</strong> under specific FDA regulations</li>
                <li>• <strong>IRB approval</strong> required for emergency use protocols</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-purple-50 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 Reasonable Volunteer Standard
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">Definition</h4>
              <p class="text-sm">The extent and nature of information provided should be such that persons, knowing the procedure is neither necessary for their care nor perhaps fully understood, can decide whether they wish to participate.</p>
            </div>
            <div class="rounded-lg bg-red-50 p-4">
              <h4 class="mb-2 font-semibold text-red-700">⚠️ Board Pearl</h4>
              <p class="text-sm text-red-600">This standard is more comprehensive than standards used in clinical practice - focuses on amount of information reasonable persons would want to know when volunteering for research</p>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [
      {
        id: 'informed-consent-documentation',
        question: 'Which of the following is required for informed consent documentation?',
        options: {
          A: 'Signature of two witnesses',
          B: 'Notarization of the consent form',
          C: 'A copy of the consent document given to the person signing',
          D: 'Video recording of the consent process'
        },
        correctAnswer: 'C',
        explanation: 'Federal regulations require that a copy of the consent document be given to the person signing the form. This allows the subject to review information with others and serves as a continuing reference. Witnesses are only required in specific circumstances, and notarization or video recording are not federal requirements.'
      },
      {
        id: 'reasonable-volunteer-standard',
        question: 'What does the "reasonable volunteer" standard refer to in informed consent?',
        options: {
          A: 'The minimum age for research participation',
          B: 'The amount of information that reasonable persons would want to know when volunteering for research',
          C: 'The number of hours volunteers should commit to research',
          D: 'The educational level required to understand consent forms'
        },
        correctAnswer: 'B',
        explanation: 'The "reasonable volunteer" standard suggests that the extent and nature of information provided should be such that persons, knowing the procedure is neither necessary for their care nor perhaps fully understood, can decide whether they wish to participate. This is more comprehensive than standards used in clinical practice.'
      }
    ],
    mnemonics: [
      "DICE Elements: Doctors Inform Completely and Ethically (Documentation, Information, Comprehension, Ethical voluntariness)",
      "Process, not just signature - information, comprehension, voluntariness",
      "Copy of consent document must be given to person signing - federal requirement"
    ],
    estimatedReadTime: 9
  }
]

// Quick lookup table for Domain 5
export const domain5QuickLookup = {
  id: 'domain5-legal-professional-lookup',
  title: 'Quick Legal & Professional Issues Reference',
  headers: ['Concept', 'Key Framework', 'Memory Aid', 'Board Focus'],
  rows: [
    {
      id: 'gina-protections',
      cells: ['GINA Protections', 'Title II Employment', 'GIFTED (6 exceptions)', '⭐⭐⭐']
    },
    {
      id: 'belmont-principles',
      cells: ['Belmont Principles', 'Respect, Beneficence, Justice', 'RBJ - "Really Big Justice"', '⭐⭐⭐']
    },
    {
      id: 'irb-composition',
      cells: ['IRB Composition', 'Min 5 members + diversity', 'CHIRP (Chair, Humanitarian, Institutional, Research, Prison)', '⭐⭐⭐']
    },
    {
      id: 'incident-to-billing',
      cells: ['Incident To Billing', 'Medicare requirements', 'SIDE (Supervision, Initial visit, Direct care, Employee)', '⭐⭐']
    },
    {
      id: 'informed-consent',
      cells: ['Informed Consent', 'Written documentation', 'DICE (Documentation, Information, Comprehension, Voluntariness)', '⭐⭐⭐']
    },
    {
      id: 'vulnerable-populations',
      cells: ['Vulnerable Populations', 'Additional protections', 'CPP (Children, Pregnant, Prisoners)', '⭐⭐⭐']
    },
    {
      id: 'gina-enforcement',
      cells: ['GINA Title II Enforcement', 'EEOC Authority', 'Equal Employment Opportunity Commission', '⭐⭐⭐']
    },
    {
      id: 'expedited-review',
      cells: ['Expedited Review', 'Minimal risk only', 'Cannot disapprove - only full IRB can disapprove', '⭐⭐']
    },
    {
      id: 'prisoner-research',
      cells: ['Prisoner Research', 'OHRP approval required', 'Written approval before research begins', '⭐⭐⭐']
    },
    {
      id: 'professional-requirements',
      cells: ['Professional Requirements', 'NPI, Licensure, Credentialing', 'NPI required for all billing', '⭐⭐']
    }
  ]
}