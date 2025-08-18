import type { StudySection } from '@/types/board-practice'

export const ethicsScenariosSections: StudySection[] = [
  {
    id: 'critical-ethics-cases',
    title: 'Critical Ethics Cases from Practice Exam',
    content: `
      <h3>🎯 Critical Ethics Cases from Your Practice Exam</h3>
      
      <p>Your exam included two challenging ethics scenarios where the best answer was to <strong>"contact hospital's ethics board to discuss the situation."</strong> Understanding when and why to involve ethics committees is crucial for board exam success.</p>
      
      <h4>🧬 Scenario 1: Unexpected Secondary Findings (Question 25)</h4>
      
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>Clinical Situation:</strong></p>
        <ul>
          <li>4-year-old patient with seizures and dysmorphic features</li>
          <li>Exome sequencing ordered with <strong>parents opted OUT of secondary findings</strong></li>
          <li>Results returned with <strong>pathogenic BRCA2 variant reported</strong></li>
          <li>Genetic counselor is surprised it was reported</li>
        </ul>
      </div>
      
      <h5>Why Contact Ethics Board</h5>
      <ul>
        <li><strong>Direct conflict</strong> between parental preference and laboratory reporting</li>
        <li><strong>Minor child</strong> cannot consent to secondary findings</li>
        <li><strong>Institutional policy</strong> violation may have occurred</li>
        <li><strong>Complex ethical principles</strong> at stake</li>
      </ul>
      
      <h5>Ethical Principles Involved</h5>
      <ul>
        <li><strong>Autonomy:</strong> Parents' right to decline secondary findings</li>
        <li><strong>Beneficence:</strong> Potential benefit of BRCA2 knowledge</li>
        <li><strong>Non-maleficence:</strong> Avoid psychological harm from unwanted information</li>
        <li><strong>Best interests:</strong> What serves the child best</li>
      </ul>
      
      <h4>🧬 Scenario 2: Non-Paternity Discovery (Question 25)</h4>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Clinical Situation:</strong></p>
        <ul>
          <li>25-year-old pregnant woman seeking genetic counseling</li>
          <li>Father had confirmed Becker muscular dystrophy (BMD)</li>
          <li>Amniocentesis shows neither woman nor male fetus carries BMD variant</li>
          <li><strong>Woman unaware father is not biological father</strong></li>
        </ul>
      </div>
      
      <h5>Why Contact Ethics Board</h5>
      <ul>
        <li><strong>Incidental finding</strong> of non-paternity</li>
        <li><strong>Complex family dynamics</strong> and potential harm</li>
        <li><strong>Multiple relationships</strong> affected (patient, partner, family)</li>
        <li><strong>Professional obligations</strong> vs. family privacy</li>
      </ul>
      
      <h5>Ethical Considerations</h5>
      <ul>
        <li><strong>Patient's right to know</strong> vs. <strong>right not to know</strong></li>
        <li><strong>Potential family disruption</strong></li>
        <li><strong>Genetic counselor's duty</strong> to patient vs. family</li>
        <li><strong>Accuracy of genetic information</strong> for future pregnancies</li>
      </ul>
      
      <h4>🏥 When to Contact Ethics Boards: Decision Tree</h4>
      
      <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
        <p>Ethical Dilemma Encountered</p>
        <p>├── Standard policies/guidelines provide clear direction</p>
        <p>│   └── Follow established protocols</p>
        <p>└── Complex situation with competing ethical principles</p>
        <p>    ├── Minor involved + conflicting interests</p>
        <p>    │   └── → Contact Ethics Board</p>
        <p>    ├── Incidental findings affecting family relationships</p>
        <p>    │   └── → Contact Ethics Board</p>
        <p>    ├── Institutional policy conflicts</p>
        <p>    │   └── → Contact Ethics Board</p>
        <p>    ├── Multiple stakeholders with competing interests</p>
        <p>    │   └── → Contact Ethics Board</p>
        <p>    └── Legal implications unclear</p>
        <p>        └── → Contact Ethics Board + Legal Counsel</p>
      </div>
    `,
    importance: 3,
    estimatedReadTime: 8
  },
  {
    id: 'ethical-principles',
    title: 'Fundamental Ethical Principles',
    content: `
      <h3>⚖️ Fundamental Ethical Principles in Genetic Counseling</h3>
      
      <h4>1. Autonomy</h4>
      <p><strong>Definition:</strong> Respect for individual's right to make informed decisions</p>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Applications:</strong></p>
        <ul>
          <li>Right to accept or decline testing</li>
          <li>Right to know or not know results</li>
          <li>Informed consent requirements</li>
          <li>Decision-making capacity</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p><strong>Challenges:</strong></p>
        <ul>
          <li>Minors and decision-making</li>
          <li>Family members affected by decisions</li>
          <li>Cultural differences in autonomy concepts</li>
        </ul>
      </div>
      
      <h4>2. Beneficence</h4>
      <p><strong>Definition:</strong> Acting in the patient's best interest</p>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Applications:</strong></p>
        <ul>
          <li>Providing accurate information</li>
          <li>Recommending appropriate testing</li>
          <li>Preventive measures when indicated</li>
          <li>Emotional support</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p><strong>Challenges:</strong></p>
        <ul>
          <li>Defining "best interest"</li>
          <li>Conflicting benefits (individual vs. family)</li>
          <li>Short-term vs. long-term benefits</li>
        </ul>
      </div>
      
      <h4>3. Non-maleficence</h4>
      <p><strong>Definition:</strong> "Do no harm" - avoiding harm to patients</p>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Applications:</strong></p>
        <ul>
          <li>Avoiding psychological distress</li>
          <li>Preventing discrimination</li>
          <li>Protecting confidentiality</li>
          <li>Careful communication of results</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p><strong>Challenges:</strong></p>
        <ul>
          <li>Balancing potential benefits vs. harms</li>
          <li>Unintended consequences of information</li>
          <li>Family relationships and dynamics</li>
        </ul>
      </div>
      
      <h4>4. Justice</h4>
      <p><strong>Definition:</strong> Fair distribution of benefits and burdens</p>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Applications:</strong></p>
        <ul>
          <li>Equal access to services</li>
          <li>Fair allocation of resources</li>
          <li>Avoiding discrimination</li>
          <li>Cultural competency</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p><strong>Challenges:</strong></p>
        <ul>
          <li>Insurance coverage disparities</li>
          <li>Geographic access limitations</li>
          <li>Cultural and language barriers</li>
        </ul>
      </div>
      
      <h4>Memory Aid: "AB-JN"</h4>
      <div class="bg-blue-50 p-4 rounded-lg">
        <ul>
          <li><strong>A</strong>utonomy</li>
          <li><strong>B</strong>eneficence</li>
          <li><strong>J</strong>ustice</li>
          <li><strong>N</strong>on-maleficence</li>
        </ul>
      </div>
    `,
    importance: 3,
    estimatedReadTime: 6
  },
  {
    id: 'secondary-findings',
    title: 'Secondary Findings Management',
    content: `
      <h3>🔬 Secondary Findings Management</h3>
      
      <h4>ACMG Recommended Secondary Findings List</h4>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>Current approach:</strong></p>
        <ul>
          <li>Laboratory may report actionable variants</li>
          <li>Patients can opt out of receiving results</li>
          <li>Child's future autonomy considerations</li>
        </ul>
      </div>
      
      <h4>Decision Framework for Secondary Findings</h4>
      
      <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm mb-4">
        <p>Secondary Finding Identified</p>
        <p>├── Patient previously elected to receive</p>
        <p>│   ├── Actionable condition</p>
        <p>│   │   └── Report with genetic counseling</p>
        <p>│   └── Non-actionable condition</p>
        <p>│       └── Discuss utility before reporting</p>
        <p>├── Patient previously opted out</p>
        <p>│   ├── Life-threatening, immediate action needed</p>
        <p>│   │   └── Contact ethics board for guidance</p>
        <p>│   └── Non-urgent actionable finding</p>
        <p>│       └── Do not report, document decision</p>
        <p>└── No prior preference stated</p>
        <p>    ├── Actionable finding</p>
        <p>    │   └── Contact patient to discuss preferences</p>
        <p>    └── Non-actionable finding</p>
        <p>        └── Generally do not report</p>
      </div>
      
      <h4>Special Considerations for Minors</h4>
      <ul>
        <li><strong>Parents decide</strong> for young children</li>
        <li><strong>Emerging autonomy</strong> in adolescents</li>
        <li><strong>Future autonomy</strong> preservation</li>
        <li><strong>Best interests</strong> standard application</li>
      </ul>
      
      <h4>Key Scenarios</h4>
      
      <h5>Scenario 1: Unexpected BRCA Finding in Child</h5>
      <div class="bg-red-50 p-4 rounded-lg mb-4">
        <p><strong>Situation:</strong> Parents opted out of secondary findings, but BRCA2 pathogenic variant reported</p>
        <p><strong>Action:</strong> Contact ethics board - direct conflict with parental autonomy</p>
        <p><strong>Considerations:</strong> Child's future autonomy, medical benefit timing, family dynamics</p>
      </div>
      
      <h5>Scenario 2: Actionable Finding in Adult</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Situation:</strong> Adult patient finds Lynch syndrome variant, no prior preference stated</p>
        <p><strong>Action:</strong> Contact patient to discuss preferences before reporting</p>
        <p><strong>Considerations:</strong> Medical actionability, patient autonomy, family implications</p>
      </div>
      
      <h4>Documentation Requirements</h4>
      <ul>
        <li>Patient preference discussions</li>
        <li>Decision rationale</li>
        <li>Ethics consultation when obtained</li>
        <li>Follow-up plans</li>
      </ul>
      
      <h4>Ethical Analysis Framework</h4>
      <div class="bg-yellow-50 p-4 rounded-lg">
        <ol>
          <li><strong>Identify stakeholders</strong> and their interests</li>
          <li><strong>Clarify ethical principles</strong> at stake</li>
          <li><strong>Consider possible actions</strong> and consequences</li>
          <li><strong>Evaluate options</strong> against ethical principles</li>
          <li><strong>Seek consultation</strong> when needed</li>
          <li><strong>Document decision</strong> and rationale</li>
          <li><strong>Monitor outcomes</strong> and adjust if needed</li>
        </ol>
      </div>
    `,
    importance: 3,
    estimatedReadTime: 7
  },
  {
    id: 'non-paternity-management',
    title: 'Non-Paternity and Misattributed Parentage',
    content: `
      <h3>👥 Non-Paternity and Misattributed Parentage</h3>
      
      <h4>Types of Misattributed Parentage</h4>
      <ol>
        <li><strong>Non-paternity:</strong> Different biological father</li>
        <li><strong>Non-maternity:</strong> Different biological mother (rare)</li>
        <li><strong>Sample mix-up:</strong> Laboratory error</li>
        <li><strong>Adoption:</strong> Known or unknown to family</li>
      </ol>
      
      <h4>Management Approach</h4>
      
      <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm mb-4">
        <p>Suspected Misattributed Parentage</p>
        <p>├── Confirm finding accuracy</p>
        <p>│   ├── Review laboratory results</p>
        <p>│   ├── Check for sample mix-up</p>
        <p>│   └── Consider additional testing if needed</p>
        <p>├── Assess disclosure implications</p>
        <p>│   ├── Direct impact on patient care</p>
        <p>│   │   ├── High impact → Disclosure generally indicated</p>
        <p>│   │   └── Low impact → Consider not disclosing</p>
        <p>│   ├── Family relationship impact</p>
        <p>│   │   ├── High risk of harm → Proceed cautiously</p>
        <p>│   │   └── Low risk → More straightforward disclosure</p>
        <p>│   └── Patient's stated preferences</p>
        <p>│       ├── Wants all information → Disclose appropriately</p>
        <p>│       └── Prefers limited information → Respect preference</p>
        <p>└── Complex cases → Ethics consultation</p>
      </div>
      
      <h4>Disclosure Strategies</h4>
      
      <h5>Direct Approach</h5>
      <p><em>"The genetic results show..."</em></p>
      
      <h5>Indirect Approach</h5>
      <p><em>"These results are not consistent with the stated family history..."</em></p>
      
      <h5>Focus on Medical Implications</h5>
      <p><em>"For future pregnancies, the risk would be..."</em></p>
      
      <h4>Case Examples</h4>
      
      <h5>High Impact on Care</h5>
      <div class="bg-red-50 p-4 rounded-lg mb-4">
        <p><strong>Scenario:</strong> Woman pregnant with male fetus, father reported to have X-linked condition, but genetic testing shows non-paternity</p>
        <p><strong>Impact:</strong> Significantly changes recurrence risk and pregnancy management</p>
        <p><strong>Approach:</strong> Disclosure generally warranted with careful counseling</p>
      </div>
      
      <h5>Low Impact on Care</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Scenario:</strong> Family history screening reveals non-paternity for autosomal recessive condition where mother is not a carrier</p>
        <p><strong>Impact:</strong> Risk remains low regardless of biological father</p>
        <p><strong>Approach:</strong> Consider not disclosing specific finding</p>
      </div>
      
      <h4>Ethical Considerations</h4>
      
      <h5>Patient's Right to Know vs. Right Not to Know</h5>
      <ul>
        <li>Autonomy principle supports both rights</li>
        <li>Pre-test counseling should address possibilities</li>
        <li>Patient preferences should guide decisions</li>
      </ul>
      
      <h5>Family Relationship Protection</h5>
      <ul>
        <li>Non-maleficence principle</li>
        <li>Potential for significant family harm</li>
        <li>Balance with medical benefits</li>
      </ul>
      
      <h5>Professional Obligations</h5>
      <ul>
        <li>Duty to provide accurate information</li>
        <li>Respect for patient confidentiality</li>
        <li>Professional boundary maintenance</li>
      </ul>
      
      <h4>"CAR" Analysis Framework</h4>
      <div class="bg-blue-50 p-4 rounded-lg">
        <ul>
          <li><strong>C</strong>onfirm the finding accuracy</li>
          <li><strong>A</strong>ssess impact on care and family</li>
          <li><strong>R</strong>espond appropriately to situation</li>
        </ul>
      </div>
      
      <h4>Documentation Requirements</h4>
      <ul>
        <li>Finding confirmation steps</li>
        <li>Impact assessment rationale</li>
        <li>Patient preference discussions</li>
        <li>Disclosure approach and timing</li>
        <li>Follow-up plans</li>
      </ul>
    `,
    importance: 3,
    estimatedReadTime: 8
  },
  {
    id: 'ethics-consultation',
    title: 'Ethics Consultation and Professional Resources',
    content: `
      <h3>🏥 Institutional Ethics Boards and IRBs</h3>
      
      <h4>Hospital Ethics Committee Functions</h4>
      <ul>
        <li><strong>Case consultation</strong> for complex situations</li>
        <li><strong>Policy development</strong> and review</li>
        <li><strong>Education</strong> for staff and clinicians</li>
        <li><strong>Quality assurance</strong> for ethical practices</li>
      </ul>
      
      <h4>When to Consult Ethics Committee</h4>
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <ol>
          <li><strong>Value conflicts</strong> between stakeholders</li>
          <li><strong>Unclear obligations</strong> or competing duties</li>
          <li><strong>Novel situations</strong> without precedent</li>
          <li><strong>Legal/ethical interface</strong> issues</li>
          <li><strong>Resource allocation</strong> questions</li>
          <li><strong>End-of-life</strong> decisions</li>
          <li><strong>Capacity/competency</strong> questions</li>
        </ol>
      </div>
      
      <h4>Ethics Consultation Indicators</h4>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>"When Complex, Call Committee":</strong></p>
        <ul>
          <li><strong>C</strong>ompeting ethical principles</li>
          <li><strong>C</strong>hildren's best interests unclear</li>
          <li><strong>C</strong>onflicting policies or guidelines</li>
          <li><strong>C</strong>onfidentiality vs. duty to warn</li>
        </ul>
      </div>
      
      <h4>IRB (Institutional Review Board) Functions</h4>
      <ul>
        <li><strong>Research protocol</strong> review and approval</li>
        <li><strong>Risk-benefit analysis</strong> for research participants</li>
        <li><strong>Informed consent</strong> document review</li>
        <li><strong>Ongoing monitoring</strong> of approved research</li>
        <li><strong>Adverse event</strong> evaluation</li>
      </ul>
      
      <h4>Research Ethics Considerations</h4>
      
      <h5>Research vs. Clinical Testing Ethics</h5>
      <table class="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Aspect</th>
            <th class="border border-gray-300 p-2">Research</th>
            <th class="border border-gray-300 p-2">Clinical</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Primary purpose</td>
            <td class="border border-gray-300 p-2">Knowledge generation</td>
            <td class="border border-gray-300 p-2">Patient care</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Result return</td>
            <td class="border border-gray-300 p-2">Generally not required</td>
            <td class="border border-gray-300 p-2">Expected</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Consent scope</td>
            <td class="border border-gray-300 p-2">Broad research activities</td>
            <td class="border border-gray-300 p-2">Specific testing</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Ethics oversight</td>
            <td class="border border-gray-300 p-2">IRB review required</td>
            <td class="border border-gray-300 p-2">Clinical standards</td>
          </tr>
        </tbody>
      </table>
      
      <h5>Key Research Ethics Issues</h5>
      <ul>
        <li><strong>Informed consent</strong> scope and comprehension</li>
        <li><strong>Return of results</strong> policies and procedures</li>
        <li><strong>Incidental findings</strong> management</li>
        <li><strong>Data sharing</strong> and privacy protection</li>
        <li><strong>Vulnerable populations</strong> protection</li>
      </ul>
      
      <h4>Clinical Scenarios for Practice</h4>
      
      <h5>Scenario 1: Adolescent Testing Refusal</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Situation:</strong> 16-year-old at risk for Huntington disease refuses predictive testing despite parental pressure.</p>
        <p><strong>Ethical considerations:</strong> Adolescent autonomy vs. parental authority, best interests determination, future reproductive implications</p>
        <p><strong>Approach:</strong> Assess adolescent's understanding and capacity, explore reasons for refusal, consider ethics consultation if impasse</p>
      </div>
      
      <h5>Scenario 2: Insurance Discrimination Concerns</h5>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>Situation:</strong> Patient wants genetic testing but fears insurance discrimination despite GINA protections.</p>
        <p><strong>Ethical considerations:</strong> Patient autonomy and informed decision-making, beneficence vs. respect for patient concerns</p>
        <p><strong>Approach:</strong> Provide accurate information about GINA, discuss limitations of current protections, respect patient's decision</p>
      </div>
      
      <h5>Scenario 3: Family Disclosure Obligations</h5>
      <div class="bg-purple-50 p-4 rounded-lg mb-4">
        <p><strong>Situation:</strong> Patient tests positive for Lynch syndrome but refuses to inform at-risk relatives.</p>
        <p><strong>Ethical considerations:</strong> Patient confidentiality vs. duty to warn, autonomous decision-making, potential benefit to family members</p>
        <p><strong>Approach:</strong> Explore reasons for non-disclosure, discuss potential benefits to family, consider alternative disclosure strategies</p>
      </div>
      
      <h4>Professional Resources for Ethics</h4>
      
      <h5>National Organizations</h5>
      <ul>
        <li><strong>American Society for Bioethics and Humanities (ASBH)</strong></li>
        <li><strong>National Association of Social Workers (NASW)</strong></li>
        <li><strong>American Medical Association (AMA) Ethics Guidelines</strong></li>
      </ul>
      
      <h5>Key Guidelines and Policies</h5>
      <ul>
        <li><strong>NSGC Code of Ethics</strong></li>
        <li><strong>ACMG Practice Guidelines</strong></li>
        <li><strong>Institutional policies</strong> and procedures</li>
        <li><strong>State and federal laws</strong> (HIPAA, GINA, etc.)</li>
      </ul>
      
      <h5>Ethics Consultation Resources</h5>
      <ul>
        <li><strong>Hospital ethics committees</strong></li>
        <li><strong>Professional organization ethics committees</strong></li>
        <li><strong>Academic bioethics centers</strong></li>
        <li><strong>Legal counsel</strong> when indicated</li>
      </ul>
    `,
    importance: 2,
    estimatedReadTime: 8
  },
  {
    id: 'practice-applications',
    title: 'Practice Applications and Key Points',
    content: `
      <h3>🎯 Practice Application Framework</h3>
      
      <h4>Ethical Analysis Steps</h4>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <ol>
          <li><strong>Identify stakeholders</strong> and their interests</li>
          <li><strong>Clarify ethical principles</strong> at stake</li>
          <li><strong>Consider possible actions</strong> and consequences</li>
          <li><strong>Evaluate options</strong> against ethical principles</li>
          <li><strong>Seek consultation</strong> when needed</li>
          <li><strong>Document decision</strong> and rationale</li>
          <li><strong>Monitor outcomes</strong> and adjust if needed</li>
        </ol>
      </div>
      
      <h4>Common Board Exam Ethics Themes</h4>
      <ul>
        <li><strong>Adolescent autonomy</strong> vs. parental authority</li>
        <li><strong>Secondary findings</strong> management</li>
        <li><strong>Non-paternity</strong> disclosure decisions</li>
        <li><strong>Research participant</strong> protection</li>
        <li><strong>Family conflict</strong> resolution</li>
        <li><strong>Resource allocation</strong> fairness</li>
        <li><strong>Cultural competency</strong> requirements</li>
      </ul>
      
      <h4>Key Points for Board Exam</h4>
      
      <h5>Ethics Board Consultation Triggers</h5>
      <div class="bg-red-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>Complex cases</strong> with competing ethical principles</li>
          <li><strong>Institutional policy</strong> conflicts or gaps</li>
          <li><strong>Minor patient</strong> best interests questions</li>
          <li><strong>Incidental findings</strong> with family implications</li>
          <li><strong>Novel situations</strong> without clear precedent</li>
        </ul>
      </div>
      
      <h5>Non-Paternity Management</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>Confirm accuracy</strong> of finding</li>
          <li><strong>Assess impact</strong> on patient care and family</li>
          <li><strong>Consider disclosure strategies</strong> based on context</li>
          <li><strong>Document decisions</strong> and rationale</li>
        </ul>
      </div>
      
      <h5>Secondary Findings</h5>
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>Respect patient preferences</strong> when clearly stated</li>
          <li><strong>Consider best interests</strong> for pediatric patients</li>
          <li><strong>Involve ethics consultation</strong> for conflicts</li>
          <li><strong>Follow institutional policies</strong></li>
        </ul>
      </div>
      
      <h5>Research Ethics</h5>
      <div class="bg-purple-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>Informed consent</strong> must be comprehensive</li>
          <li><strong>Result return</strong> policies vary by study</li>
          <li><strong>IRB oversight</strong> required for human subjects research</li>
          <li><strong>Separate from clinical care</strong> in consent and execution</li>
        </ul>
      </div>
      
      <h4>Documentation Requirements</h4>
      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>Ethical considerations</strong> discussed</li>
          <li><strong>Stakeholder perspectives</strong> considered</li>
          <li><strong>Consultation sought</strong> when appropriate</li>
          <li><strong>Decision rationale</strong> clearly stated</li>
          <li><strong>Follow-up plans</strong> established</li>
        </ul>
      </div>
      
      <h4>Memory Aids for Ethics</h4>
      
      <h5>Four Principles Mnemonic: "AB-JN"</h5>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>A</strong>utonomy</li>
          <li><strong>B</strong>eneficence</li>
          <li><strong>J</strong>ustice</li>
          <li><strong>N</strong>on-maleficence</li>
        </ul>
      </div>
      
      <h5>Ethics Consultation Indicators: "When Complex, Call Committee"</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>C</strong>ompeting ethical principles</li>
          <li><strong>C</strong>hildren's best interests unclear</li>
          <li><strong>C</strong>onflicting policies or guidelines</li>
          <li><strong>C</strong>onfidentiality vs. duty to warn</li>
        </ul>
      </div>
      
      <h5>Non-Paternity Decision Points: "CAR" Analysis</h5>
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>C</strong>onfirm the finding accuracy</li>
          <li><strong>A</strong>ssess impact on care and family</li>
          <li><strong>R</strong>espond appropriately to situation</li>
        </ul>
      </div>
      
      <h4>Professional Practice Guidelines</h4>
      
      <h5>Ethical Dilemmas</h5>
      <ul>
        <li>Apply NSGC Code principles to complex situations</li>
        <li>Balance competing ethical obligations</li>
        <li>Consider cultural and religious factors</li>
        <li>Document ethical decision-making process</li>
      </ul>
      
      <h5>Legal Compliance</h5>
      <ul>
        <li>Understand state-specific requirements</li>
        <li>Maintain appropriate documentation</li>
        <li>Protect patient confidentiality</li>
        <li>Follow informed consent procedures</li>
      </ul>
      
      <h5>Quality Assurance</h5>
      <ul>
        <li>Participate in ethics committees when possible</li>
        <li>Seek consultation for complex cases</li>
        <li>Stay current with ethical guidelines</li>
        <li>Document compliance with standards</li>
      </ul>
      
      <h4>Board Exam Strategy</h4>
      
      <h5>Key Recognition Points</h5>
      <ul>
        <li>Look for <strong>competing ethical principles</strong> in scenarios</li>
        <li>Identify when <strong>standard approaches</strong> are insufficient</li>
        <li>Recognize <strong>minor/pediatric</strong> special considerations</li>
        <li>Note <strong>family dynamics</strong> and relationship impacts</li>
      </ul>
      
      <h5>Answer Selection Strategy</h5>
      <ul>
        <li>When in doubt about complex ethics, choose <strong>"ethics consultation"</strong></li>
        <li>Respect <strong>patient autonomy</strong> when clearly stated</li>
        <li>Consider <strong>best interests</strong> for pediatric patients</li>
        <li>Balance <strong>benefits and harms</strong> systematically</li>
      </ul>
    `,
    importance: 2,
    estimatedReadTime: 8
  }
]