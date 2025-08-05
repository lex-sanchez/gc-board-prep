import type { StudySection } from '@/types/learning'

export const domain4Sections: StudySection[] = [
  {
    id: 'nsgc-code-of-ethics',
    title: 'NSGC Code of Ethics',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 Most Important Framework for Board Exams
          </h3>
          <p class="mb-4 text-sm">The NSGC Code of Ethics is based on four distinct relationships:</p>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Four Core Relationships</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Genetic Counselors Themselves</strong> - Professional competence and integrity</li>
                <li>• <strong>Genetic Counselors and Their Clients</strong> - Patient autonomy and care</li>
                <li>• <strong>Genetic Counselors and Colleagues</strong> - Professional collaboration</li>
                <li>• <strong>Genetic Counselors and Society</strong> - Public welfare and policy</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">Ethical Principles Foundation</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Autonomy</strong> - Respect for self-determination</li>
                <li>• <strong>Beneficence</strong> - Do good</li>
                <li>• <strong>Non-maleficence</strong> - Do no harm</li>
                <li>• <strong>Justice</strong> - Fair distribution of benefits/burdens</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📋 Section I: Genetic Counselors Themselves
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Key Responsibilities</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Seek balanced, accurate information</strong> for given situations</li>
                <li>• <strong>Continue education and training</strong> to stay current</li>
                <li>• <strong>Work within scope of practice</strong> and recognize limitations</li>
                <li>• <strong>Accurately represent credentials</strong> and experience</li>
                <li>• <strong>Manage conflicts of interest</strong> appropriately</li>
                <li>• <strong>Maintain physical and emotional health</strong> for professional performance</li>
              </ul>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💎 Board Pearls</h4>
              <ul class="space-y-1 text-sm text-blue-600">
                <li>• <strong>Can Do:</strong> Risk assessment, education, counseling, test coordination</li>
                <li>• <strong>Cannot Do:</strong> Medical management, prescribing, physical exams, definitive variant interpretation</li>
                <li>• Must disclose any circumstances affecting professional judgment</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            👥 Section II: Genetic Counselors and Their Clients
          </h3>
          <div class="space-y-3">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Key Responsibilities</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Provide services regardless of personal biases</strong> - refer if needed</li>
                <li>• <strong>Clarify professional roles</strong> and disclose conflicts of interest</li>
                <li>• <strong>Serve all clients equally</strong> regardless of personal characteristics</li>
                <li>• <strong>Enable informed decisions</strong> free of coercion</li>
                <li>• <strong>Respect client autonomy</strong> - support all decisions</li>
                <li>• <strong>Maintain confidentiality</strong> with limited exceptions</li>
              </ul>
            </div>
            <div class="rounded-lg bg-yellow-50 p-4">
              <h4 class="mb-2 font-semibold text-yellow-700">⚠️ Testing Minors Guidelines</h4>
              <ul class="space-y-1 text-sm text-yellow-600">
                <li>• <strong>Appropriate:</strong> Childhood onset conditions, medical management available</li>
                <li>• <strong>Inappropriate:</strong> Adult onset conditions without interventions</li>
                <li>• <strong>Consider:</strong> Family dynamics, psychological impact, child's preferences</li>
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
        id: 'ethics-confidentiality',
        question: 'A genetic counselor discovers that a patient has a pathogenic variant that significantly increases cancer risk in first-degree relatives. The patient refuses to share this information with family members. What is the counselor\'s best course of action?',
        options: {
          A: 'Contact the relatives directly to inform them of their risk',
          B: 'Encourage patient disclosure and provide a template letter, but maintain confidentiality',
          C: 'Refuse to continue providing services until patient agrees to inform relatives',
          D: 'Report the situation to the state health department'
        },
        correctAnswer: 'B',
        explanation: 'There is no legal duty to warn family members about genetic risks in most states. The genetic counselor should encourage disclosure, provide tools like template letters to facilitate communication, and document counseling efforts. However, patient confidentiality must be maintained unless there is clear, imminent harm to an identifiable person (which doesn\'t apply to genetic susceptibility).'
      },
      {
        id: 'ethics-minor-testing',
        question: 'A 16-year-old patient requests predictive testing for Huntington disease after learning their parent is positive. What is the most appropriate action?',
        options: {
          A: 'Proceed with testing since the patient is requesting it',
          B: 'Require parental consent before proceeding',
          C: 'Decline testing and recommend waiting until age 18',
          D: 'Consult with ethics committee and child psychiatrist'
        },
        correctAnswer: 'C',
        explanation: 'Professional guidelines recommend against predictive testing of minors for adult-onset conditions when there is no medical benefit in childhood. Huntington disease has no preventive measures or treatments available in childhood, so testing would not benefit the minor and could cause psychological harm or limit future autonomy.'
      }
    ],
    mnemonics: [
      "Ethics Principles: A-B-N-J (Autonomy, Beneficence, Non-maleficence, Justice)",
      "Testing Minors: If it helps them NOW, it's OK - if it's just for LATER, it's not"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'counseling-skills-communication',
    title: 'Counseling Skills & Communication',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🗣️ Core Counseling Skills
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Active Listening - SOLER Method</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>S</strong>quare shoulders - face the client</li>
                <li>• <strong>O</strong>pen posture - arms uncrossed</li>
                <li>• <strong>L</strong>ean in - show interest</li>
                <li>• <strong>E</strong>ye contact - maintain appropriately</li>
                <li>• <strong>R</strong>elax - appear calm and comfortable</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">Contracting Process</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Assess client needs</strong> and expectations</li>
                <li>• <strong>Create shared agenda</strong> for the session</li>
                <li>• <strong>Remain flexible</strong> based on client priorities</li>
                <li>• <strong>Reassess goals</strong> throughout session</li>
              </ul>
              <p class="mt-2 text-xs text-muted-foreground">Key Point: Client goals may differ from referral indication</p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📰 Breaking Bad News - SPIKES Framework
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <ul class="space-y-2 text-sm">
                <li><strong>S</strong>etting - Private, uninterrupted space</li>
                <li><strong>P</strong>erception - Assess what patient already knows</li>
                <li><strong>I</strong>nvitation - Ask permission to share results</li>
                <li><strong>K</strong>nowledge - Share information clearly and directly</li>
                <li><strong>E</strong>motions - Respond with empathy to patient reactions</li>
                <li><strong>S</strong>trategy - Plan next steps together</li>
              </ul>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💎 Board Pearl</h4>
              <p class="text-sm text-blue-600">Always assess patient's understanding before delivering news. Use phrases like "What is your understanding of...?" or "What have you been told about...?"</p>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 Nondirectiveness
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Definition</h4>
              <p class="mb-2 text-sm"><strong>Hodgson & Spriggs:</strong> "Purposeful dialogue to promote autonomous choice"</p>
              <p class="text-sm"><strong>Kessler:</strong> "Promoting autonomy of client over their lives and decisions"</p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Key Principles</h4>
              <ul class="space-y-1 text-sm">
                <li>• Present ALL options equally</li>
                <li>• Support ANY decision made by patient</li>
                <li>• Avoid personal opinions or directive language</li>
                <li>• Recognize time pressures in prenatal settings</li>
              </ul>
            </div>
            <div class="rounded-lg bg-yellow-50 p-4">
              <h4 class="mb-2 font-semibold text-yellow-700">💡 Important Distinction</h4>
              <p class="text-sm text-yellow-600">Can be <strong>directive</strong> about factual information, <strong>non-directive</strong> about decisions</p>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "SOLER: Sit Squarely, Open posture, Lean in, Eye contact, Relax",
      "SPIKES: Setting, Perception, Invitation, Knowledge, Emotions, Strategy",
      "Nondirective: Facts are directive, decisions are not"
    ],
    estimatedReadTime: 7
  },
  {
    id: 'risk-communication-decision-making',
    title: 'Risk Communication & Decision Making',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📈 Effective Risk Presentation
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Multiple Format Rule - Always use 2-3 formats</h4>
              <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Numerical:</strong> "1 in 4 chance" or "25%"</li>
                  <li>• <strong>Frequency:</strong> "25 out of 100 people"</li>
                  <li>• <strong>Visual:</strong> Pie charts, icon arrays, bar graphs</li>
                </ul>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Verbal:</strong> "Moderate increase" (define clearly)</li>
                  <li>• <strong>Comparison:</strong> "Same as general population risk for diabetes"</li>
                </ul>
              </div>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💎 Board Pearl</h4>
              <p class="text-sm text-blue-600">Visual aids increase comprehension for most patients. Always present both positive and negative frames.</p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🧠 Common Risk Perception Biases
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Availability Heuristic</h4>
              <p class="text-sm">Risk assessment based on personal experience</p>
              <p class="text-xs text-muted-foreground">Example: Family with affected child perceives 100% recurrence risk</p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Representativeness Heuristic</h4>
              <p class="text-sm">Judgment based on pattern matching</p>
              <p class="text-xs text-muted-foreground">Example: "This baby doesn't look like my affected child, so risk is lower"</p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Anchoring</h4>
              <p class="text-sm">Bias from first risk figure presented</p>
              <p class="text-xs text-muted-foreground">Prevention: Present context before specific numbers</p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Binarization</h4>
              <p class="text-sm">Tendency to view risk as all-or-nothing</p>
              <p class="text-xs text-muted-foreground">Common: Despite 25% risk, patients think "it will/won't happen"</p>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ⚖️ Decision-Making Models
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Three Principles of Risk Communication</h4>
              <ol class="list-inside list-decimal space-y-1 text-sm">
                <li><strong>ASSESS:</strong> Prior beliefs, knowledge, preferences, anxiety, coping style</li>
                <li><strong>PRIORITIZE:</strong> What information to give, use multiple strategies</li>
                <li><strong>FOLLOW-UP:</strong> Materials, letters, consider multiple sessions</li>
              </ol>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Weil's 3 Goals of Genetic Counseling</h4>
              <ol class="list-inside list-decimal space-y-1 text-sm">
                <li><strong>Decision should be made</strong> on adequate assessment of options and consequences</li>
                <li><strong>Counselee should feel</strong> they made the best decision possible at the time</li>
                <li><strong>Process should support</strong> implementation of the decision</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="bg-yellow/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 Framing Effects
          </h3>
          <div class="space-y-2">
            <p class="text-sm"><strong>Present both positive and negative frames:</strong></p>
            <ul class="space-y-1 text-sm">
              <li>• <strong>Positive:</strong> "75% chance the baby will be unaffected"</li>
              <li>• <strong>Negative:</strong> "25% chance the baby will be affected"</li>
            </ul>
            <p class="mt-2 text-xs text-muted-foreground"><strong>Best Practice:</strong> Always provide both perspectives to avoid bias</p>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [
      {
        id: 'risk-ppv-calculation',
        question: 'A genetic test has a sensitivity of 90% and specificity of 95%. In a population where the disease prevalence is 1%, what is the positive predictive value (PPV)?',
        options: {
          A: '15.3%',
          B: '90%',
          C: '95%',
          D: '99%'
        },
        correctAnswer: 'A',
        explanation: 'PPV = TP/(TP+FP). In 1000 people: 10 have disease, 990 don\'t. True positives: 10 × 0.90 = 9. False positives: 990 × 0.05 = 49.5. PPV = 9/(9+49.5) = 9/58.5 = 15.3%. This demonstrates why PPV is highly dependent on disease prevalence, even with good sensitivity and specificity.'
      },
      {
        id: 'risk-nondirective-response',
        question: 'During a counseling session, a patient asks "What would you do if you were in my situation?" What is the most appropriate response?',
        options: {
          A: 'I would personally choose to have the testing done.',
          B: 'I can\'t tell you what to do - that\'s your decision.',
          C: 'That\'s a question many people ask. Help me understand what concerns you most about making this decision.',
          D: 'Let me refer you to another counselor who can help with that question.'
        },
        correctAnswer: 'C',
        explanation: 'This response exemplifies non-directive counseling by normalizing the question, avoiding giving personal advice, and redirecting to explore the patient\'s underlying concerns. It maintains professional boundaries while providing emotional support and facilitating autonomous decision-making.'
      }
    ],
    mnemonics: [
      "Risk Communication: Always use Multiple formats + Both frames + Visual aids",
      "Three A's: ASSESS, PRIORITIZE (what to give), FOLLOW-UP",
      "Availability Heuristic: Personal experience trumps statistics"
    ],
    estimatedReadTime: 6
  },
  {
    id: 'cultural-competence-diversity',
    title: 'Cultural Competence & Diversity',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🌎 ETHNIC Guidelines for Cultural Assessment
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <ul class="space-y-2 text-sm">
                <li><strong>E</strong>xplanation - Patient's view of the condition</li>
                <li><strong>T</strong>reatment - What patient has tried previously</li>
                <li><strong>H</strong>ealers - Traditional/alternative providers involved</li>
                <li><strong>N</strong>egotiate - Mutually acceptable treatment plan</li>
                <li><strong>I</strong>ntervention - Agreed-upon treatment approach</li>
                <li><strong>C</strong>ollaborate - With patient's support system</li>
              </ul>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💡 Memory Aid</h4>
              <p class="text-sm text-blue-600"><strong>"Every True Healer Needs Intentional Collaboration"</strong></p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ⚖️ Major Cultural Value Comparisons
          </h3>
          <div class="space-y-4">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <h4 class="mb-2 font-semibold text-accent">Individualism vs. Collectivism</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Individualistic:</strong> Personal autonomy, individual decision-making</li>
                  <li>• <strong>Collectivistic:</strong> Family/community input, group decision-making</li>
                </ul>
              </div>
              <div>
                <h4 class="mb-2 font-semibold text-accent">Egalitarian vs. Hierarchical</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Egalitarian:</strong> Counselor as peer, informal interaction</li>
                  <li>• <strong>Hierarchical:</strong> Counselor as authority, formal respect expected</li>
                </ul>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <h4 class="mb-2 font-semibold text-accent">Time Orientation</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Task-oriented:</strong> Punctuality, rigid scheduling</li>
                  <li>• <strong>Event-oriented:</strong> Flexible timing, relationship focus</li>
                </ul>
              </div>
              <div>
                <h4 class="mb-2 font-semibold text-accent">Gender Roles</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Impact on:</strong> Who makes decisions, who can be present</li>
                  <li>• <strong>Note:</strong> Women tend to feel more guilt, men more shame</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🗣️ Working with Interpreters
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Best Practices</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Preferred:</strong> Professional medical interpreters</li>
                <li>• <strong>Preparation:</strong> Brief interpreter beforehand about session content</li>
                <li>• <strong>During Session:</strong></li>
                <li class="ml-4">- Speak TO the patient, not the interpreter</li>
                <li class="ml-4">- Use first person ("I understand you're worried")</li>
                <li class="ml-4">- Check understanding frequently</li>
                <li class="ml-4">- Pause for interpretation regularly</li>
                <li>• <strong>Avoid:</strong> Family member interpreters for sensitive topics</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-purple/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🧬 Genetics-Specific Cultural Issues
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">Consanguinity</h4>
              <ul class="space-y-1 text-sm">
                <li>• Culturally normative in many populations</li>
                <li>• Present neutral risk information (2-3% above baseline)</li>
                <li>• Avoid judgment, calculate specific risks</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">Decision-Making Styles</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Individual autonomy</strong> (Western)</li>
                <li>• <strong>Family-centered</strong> (many Asian, African cultures)</li>
                <li>• <strong>Elder deference</strong> (traditional cultures)</li>
                <li>• <strong>Religious authority</strong> involvement</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            💎 Board Pearls
          </h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Never assume:</strong> Ask about patient's preferred decision-making style</li>
            <li>• <strong>Individualism vs Collectivism</strong> most affects genetic counseling interactions</li>
            <li>• <strong>Cultural competence</strong> requires assessment of individual patient preferences</li>
            <li>• <strong>Language barriers:</strong> Use professional interpreters, not family members</li>
          </ul>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "ETHNIC: Every True Healer Needs Intentional Collaboration",
      "Cultural Values: Individual vs Collective affects decision-making most",
      "Consanguinity: 2-3% above baseline risk, present neutrally"
    ],
    estimatedReadTime: 5
  },
  {
    id: 'legal-ethical-issues',
    title: 'Legal & Ethical Issues',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🔒 Informed Consent - DISCUSS Elements
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <ul class="space-y-2 text-sm">
                <li><strong>D</strong>ecisions - What decisions might be made based on results</li>
                <li><strong>I</strong>nsurance - Genetic discrimination risks and protections</li>
                <li><strong>S</strong>ensitivity - How well the test detects the condition</li>
                <li><strong>C</strong>osts - Financial implications and insurance coverage</li>
                <li><strong>U</strong>ses/limitations - What the test can and cannot tell you</li>
                <li><strong>S</strong>iblings/relatives - Implications for family members</li>
              </ul>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💡 Memory Aid</h4>
              <p class="text-sm text-blue-600"><strong>"Doctors In Surgery Can Usually Save Souls"</strong></p>
              <p class="mt-2 text-xs text-blue-500">Documentation must show all elements were discussed AND patient understanding was verified</p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🔐 Confidentiality Rules
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-accent">General Rule</h4>
              <p class="text-sm">All patient information is confidential and cannot be shared without explicit patient consent</p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Limited Exceptions (Duty to Warn)</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Imminent harm to self</strong> (suicide risk)</li>
                <li>• <strong>Imminent harm to others</strong> (homicide threat)</li>
                <li>• <strong>Child abuse</strong> (mandated reporting)</li>
                <li>• <strong>Court orders</strong> (subpoenas)</li>
                <li>• <strong>Public health emergencies</strong> (infectious diseases)</li>
              </ul>
            </div>
            <div class="rounded-lg bg-yellow-50 p-4">
              <h4 class="mb-2 font-semibold text-yellow-700">⚠️ Important Note</h4>
              <p class="text-sm text-yellow-600">Risk to family members from genetic conditions is generally NOT grounds for breaking confidentiality, despite ethical tensions</p>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            👶 Testing Minors Guidelines
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">✅ Appropriate Testing</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Childhood onset conditions</strong></li>
                <li>• <strong>Medical management available</strong> in childhood</li>
                <li>• <strong>Preventive measures</strong> can be implemented</li>
                <li>• <strong>Family planning</strong> for adolescents</li>
                <li>• <strong>Carrier testing</strong> for reproductive decisions</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-red-700">❌ Generally Inappropriate</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Adult onset conditions</strong> without childhood interventions</li>
                <li>• <strong>Testing primarily for parental anxiety</strong></li>
                <li>• <strong>No medical benefit</strong> in childhood</li>
                <li>• <strong>May cause psychological harm</strong></li>
              </ul>
            </div>
          </div>
          <div class="mt-4 rounded-lg bg-blue-50 p-4">
            <h4 class="mb-2 font-semibold text-blue-700">💎 Board Pearl</h4>
            <p class="text-sm text-blue-600">Key question: "Will this information help the child NOW?" If yes, consider testing. If only helps LATER, generally wait until adulthood.</p>
          </div>
        </div>

        <div class="bg-purple/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ⚖️ Genetic Discrimination Protection
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">GINA (Genetic Information Nondiscrimination Act)</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Protects:</strong> Health insurance and employment discrimination</li>
                <li>• <strong>Does NOT protect:</strong> Life, disability, long-term care insurance</li>
                <li>• <strong>Applies to:</strong> Employers with 15+ employees, most health insurers</li>
              </ul>
            </div>
            <div class="rounded-lg bg-yellow-50 p-4">
              <h4 class="mb-2 font-semibold text-yellow-700">⚠️ GINA Limitations</h4>
              <ul class="space-y-1 text-sm text-yellow-600">
                <li>• No protection for life/disability insurance</li>
                <li>• Military, federal employees, small employers may be exempt</li>
                <li>• Already manifested conditions not covered</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "DISCUSS: Doctors In Surgery Can Usually Save Souls",
      "Testing Minors: If it helps NOW = OK, if only LATER = Not OK",
      "GINA protects: Health insurance + Employment. Does NOT protect: Life/Disability insurance"
    ],
    estimatedReadTime: 6
  },
  {
    id: 'documentation-professional-standards',
    title: 'Documentation & Professional Standards',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📝 SOAP Documentation Format
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <ul class="space-y-3 text-sm">
                <li>
                  <strong>S</strong>ubjective
                  <ul class="ml-4 mt-1 space-y-1 text-xs">
                    <li>• Patient's concerns and questions</li>
                    <li>• Family history details</li>
                    <li>• Previous test results mentioned</li>
                    <li>• Patient's understanding/beliefs</li>
                  </ul>
                </li>
                <li>
                  <strong>O</strong>bjective
                  <ul class="ml-4 mt-1 space-y-1 text-xs">
                    <li>• Physical examination findings (if applicable)</li>
                    <li>• Laboratory results reviewed</li>
                    <li>• Pedigree details</li>
                    <li>• Risk calculations performed</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <ul class="space-y-3 text-sm">
                <li>
                  <strong>A</strong>ssessment
                  <ul class="ml-4 mt-1 space-y-1 text-xs">
                    <li>• Clinical impression</li>
                    <li>• Risk assessment results</li>
                    <li>• Differential diagnosis considerations</li>
                    <li>• Patient's coping and understanding</li>
                  </ul>
                </li>
                <li>
                  <strong>P</strong>lan
                  <ul class="ml-4 mt-1 space-y-1 text-xs">
                    <li>• Testing recommendations</li>
                    <li>• Follow-up plans</li>
                    <li>• Referrals made</li>
                    <li>• Resources provided</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📋 Documentation Requirements
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Must Document</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Informed consent process</strong> - all DISCUSS elements covered</li>
                <li>• <strong>Patient understanding</strong> - verified comprehension</li>
                <li>• <strong>Risks and benefits</strong> discussed</li>
                <li>• <strong>Alternatives presented</strong> and patient choice supported</li>
                <li>• <strong>Resources provided</strong> - written materials, websites, contacts</li>
                <li>• <strong>Follow-up plans</strong> agreed upon</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Legal Considerations</h4>
              <ul class="space-y-1 text-sm">
                <li>• Documentation should support that appropriate care was provided</li>
                <li>• "If it's not documented, it didn't happen" in legal proceedings</li>
                <li>• Must be legible, timely, and objective</li>
                <li>• Corrections should be done properly (line through, initial, date)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            💼 Professional Standards
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Scope of Practice</h4>
              <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div>
                  <h5 class="mb-1 font-semibold text-green-600">✅ Within Scope</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Risk assessment and calculation</li>
                    <li>• Genetic education and counseling</li>
                    <li>• Test coordination and interpretation</li>
                    <li>• Psychosocial support</li>
                    <li>• Resource provision</li>
                    <li>• Advocacy</li>
                  </ul>
                </div>
                <div>
                  <h5 class="mb-1 font-semibold text-red-600">❌ Outside Scope</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• Medical diagnosis</li>
                    <li>• Prescribing medications</li>
                    <li>• Physical examinations</li>
                    <li>• Definitive variant interpretation</li>
                    <li>• Medical management decisions</li>
                    <li>• Long-term psychotherapy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-yellow/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            💰 Billing and Insurance
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-yellow-700">CPT Codes for Genetic Counseling</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>96040:</strong> Medical genetics counseling by physician or genetic counselor</li>
                <li>• Time-based billing (typically 30-60 minutes)</li>
                <li>• Documentation must support time spent and services provided</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-yellow-700">Insurance Coverage</h4>
              <ul class="space-y-1 text-sm">
                <li>• Many insurers now cover genetic counseling</li>
                <li>• Pre-authorization may be required</li>
                <li>• Documentation of medical necessity important</li>
                <li>• ACA requires coverage for BRCA counseling for high-risk women</li>
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
      "SOAP: Subjective (what patient says), Objective (what you observe), Assessment (your analysis), Plan (next steps)",
      "Documentation: If it's not written, it didn't happen",
      "Scope: Can counsel, coordinate, calculate - Cannot diagnose, prescribe, examine"
    ],
    estimatedReadTime: 5
  },
  {
    id: 'genetic-testing-principles',
    title: 'Genetic Testing Principles',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🧪 Test Validity Parameters
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Analytical Validity</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Accuracy:</strong> How well test measures what it claims to measure</li>
                <li>• <strong>Precision:</strong> Reproducibility of results</li>
                <li>• <strong>Quality:</strong> Laboratory standards and controls</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">Clinical Validity</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Sensitivity:</strong> % of affected individuals with positive test</li>
                <li>• <strong>Specificity:</strong> % of unaffected individuals with negative test</li>
                <li>• <strong>PPV/NPV:</strong> Depends on disease prevalence in population</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📊 Key Calculations
          </h3>
          <div class="space-y-4">
            <div class="rounded-lg bg-white p-4">
              <h4 class="mb-2 font-semibold text-accent">Positive Predictive Value (PPV)</h4>
              <p class="mb-2 text-sm"><strong>Formula:</strong> PPV = True Positives / (True Positives + False Positives)</p>
              <p class="text-xs text-muted-foreground">Answers: "If my test is positive, what's the chance I actually have the condition?"</p>
            </div>
            <div class="rounded-lg bg-white p-4">
              <h4 class="mb-2 font-semibold text-accent">Negative Predictive Value (NPV)</h4>
              <p class="mb-2 text-sm"><strong>Formula:</strong> NPV = True Negatives / (True Negatives + False Negatives)</p>
              <p class="text-xs text-muted-foreground">Answers: "If my test is negative, what's the chance I'm truly unaffected?"</p>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <h4 class="mb-2 font-semibold text-blue-700">💡 Memory Aid</h4>
              <p class="text-sm text-blue-600"><strong>PPV = True Positives over All Positives</strong></p>
              <p class="text-sm text-blue-600"><strong>NPV = True Negatives over All Negatives</strong></p>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 Clinical Utility
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Definition</h4>
              <p class="text-sm">The likelihood that genetic testing will improve health outcomes through medical management, lifestyle changes, family planning decisions, or psychological benefits</p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Components of Clinical Utility</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Medical management:</strong> Changes in treatment or surveillance</li>
                <li>• <strong>Lifestyle modifications:</strong> Diet, exercise, risk reduction</li>
                <li>• <strong>Reproductive decisions:</strong> Family planning implications</li>
                <li>• <strong>Psychological benefits:</strong> Reduced uncertainty, peace of mind</li>
                <li>• <strong>Family implications:</strong> Testing/counseling for relatives</li>
              </ul>
            </div>
            <div class="rounded-lg bg-yellow-50 p-4">
              <h4 class="mb-2 font-semibold text-yellow-700">💎 Board Pearl</h4>
              <p class="text-sm text-yellow-600">Clinical utility is distinct from clinical validity - a test can accurately identify a condition but have limited utility if no interventions are available</p>
            </div>
          </div>
        </div>

        <div class="bg-purple/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🏥 Laboratory Standards
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">CLIA (Clinical Laboratory Improvement Amendments)</h4>
              <ul class="space-y-1 text-sm">
                <li>• Federal standards for laboratory testing</li>
                <li>• Ensures accuracy, reliability, and timeliness of patient test results</li>
                <li>• Applies to all laboratories performing clinical testing</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">CAP (College of American Pathologists)</h4>
              <ul class="space-y-1 text-sm">
                <li>• Voluntary accreditation program</li>
                <li>• Higher standards than CLIA requirements</li>
                <li>• Proficiency testing and quality assurance</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-purple-700">Quality Measures</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Internal controls:</strong> Run with each batch</li>
                <li>• <strong>External proficiency testing:</strong> Blind samples from regulatory bodies</li>
                <li>• <strong>Turnaround time:</strong> Reporting deadlines</li>
                <li>• <strong>Error rates:</strong> Acceptable limits for false results</li>
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
      "PPV = True Positives over All Positives (answers 'If positive, chance I have it?')",
      "Clinical Utility: Will testing improve outcomes? (Medical, Lifestyle, Reproductive, Psychological)",
      "Test Validity: Analytical (measures accurately) + Clinical (identifies disease) + Utility (improves outcomes)"
    ],
    estimatedReadTime: 6
  },
  {
    id: 'psychosocial-counseling',
    title: 'Psychosocial Counseling',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            😢 Grief and Loss Models
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Kübler-Ross Stages of Grief</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Denial:</strong> "This can't be happening"</li>
                <li>• <strong>Anger:</strong> "Why me? This isn't fair!"</li>
                <li>• <strong>Bargaining:</strong> "If only..." or "What if..."</li>
                <li>• <strong>Depression:</strong> Sadness, despair, withdrawal</li>
                <li>• <strong>Acceptance:</strong> Coming to terms with reality</li>
              </ul>
              <p class="mt-2 text-xs text-muted-foreground">Note: Not linear; people can cycle through stages</p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">Types of Grief in Genetics</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>Anticipatory Grief:</strong> Before loss occurs (prenatal diagnosis)</li>
                <li><strong>Disenfranchised Grief:</strong> Socially unrecognized (pregnancy loss, genetic risk)</li>
                <li><strong>Complicated Grief:</strong> Prolonged, intense grief interfering with function</li>
                <li><strong>Ambiguous Loss:</strong> Unclear boundaries (living with genetic condition)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🧠 Psychological Reactions to Genetic Information
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Common Reactions</h4>
              <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Guilt:</strong> "I passed this on to my child"</li>
                  <li>• <strong>Shame:</strong> "There's something wrong with me"</li>
                  <li>• <strong>Anxiety:</strong> About future, family implications</li>
                  <li>• <strong>Relief:</strong> Finally having an explanation</li>
                </ul>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Survivor guilt:</strong> Being unaffected when others are</li>
                  <li>• <strong>Denial:</strong> Rejecting or minimizing information</li>
                  <li>• <strong>Empowerment:</strong> Knowledge allows planning</li>
                  <li>• <strong>Vulnerability:</strong> Feeling fragile or damaged</li>
                </ul>
              </div>
            </div>
            <div class="rounded-lg bg-yellow-50 p-4">
              <h4 class="mb-2 font-semibold text-yellow-700">💡 Gender Differences</h4>
              <ul class="space-y-1 text-sm text-yellow-600">
                <li>• <strong>Women:</strong> Tend to experience more guilt ("I caused this")</li>
                <li>• <strong>Men:</strong> Tend to experience more shame ("I am defective")</li>
                <li>• Both patterns can occur in either gender</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🛠️ Coping Mechanisms
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Problem-Focused Coping</h4>
              <ul class="space-y-1 text-sm">
                <li>• Taking action to address the situation</li>
                <li>• Seeking information and resources</li>
                <li>• Making plans and decisions</li>
                <li>• Connecting with healthcare providers</li>
                <li>• Joining support groups</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Emotion-Focused Coping</h4>
              <ul class="space-y-1 text-sm">
                <li>• Managing emotional responses</li>
                <li>• Seeking emotional support</li>
                <li>• Using relaxation techniques</li>
                <li>• Finding meaning in the experience</li>
                <li>• Acceptance and adaptation</li>
              </ul>
            </div>
          </div>
          <div class="mt-4 rounded-lg bg-blue-50 p-4">
            <h4 class="mb-2 font-semibold text-blue-700">💎 Board Pearl</h4>
            <p class="text-sm text-blue-600">Both coping styles are adaptive. Help patients identify their preferred style and support appropriate strategies.</p>
          </div>
        </div>

        <div class="bg-purple/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎭 Defense Mechanisms
          </h3>
          <div class="space-y-3">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <h4 class="mb-1 text-sm font-semibold text-purple-700">Adaptive Defenses</h4>
                <ul class="space-y-1 text-xs">
                  <li>• <strong>Intellectualization:</strong> Focus on facts vs. emotions</li>
                  <li>• <strong>Sublimation:</strong> Channel energy into positive activities</li>
                  <li>• <strong>Humor:</strong> Find lightness in difficult situations</li>
                </ul>
              </div>
              <div>
                <h4 class="mb-1 text-sm font-semibold text-purple-700">Potentially Maladaptive</h4>
                <ul class="space-y-1 text-xs">
                  <li>• <strong>Denial:</strong> Refusing to accept reality</li>
                  <li>• <strong>Projection:</strong> Blaming others</li>
                  <li>• <strong>Regression:</strong> Reverting to earlier behaviors</li>
                </ul>
              </div>
            </div>
            <p class="text-xs text-muted-foreground">Note: Same mechanism can be adaptive or maladaptive depending on context and duration</p>
          </div>
        </div>

        <div class="bg-orange/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🤝 Support Strategies
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-orange-700">Immediate Support</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Validate emotions:</strong> "Your feelings are normal and understandable"</li>
                <li>• <strong>Normalize reactions:</strong> "Many families experience similar feelings"</li>
                <li>• <strong>Assess coping:</strong> "How are you managing this information?"</li>
                <li>• <strong>Identify supports:</strong> "Who can you talk to about this?"</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-orange-700">Long-term Support</h4>
              <ul class="space-y-1 text-sm">
                <li>• Referral to mental health professionals when appropriate</li>
                <li>• Connection with support groups and organizations</li>
                <li>• Follow-up to assess ongoing needs</li>
                <li>• Resource provision (websites, books, contacts)</li>
              </ul>
            </div>
            <div class="rounded-lg bg-red-50 p-4">
              <h4 class="mb-2 font-semibold text-red-700">⚠️ When to Refer for Mental Health</h4>
              <ul class="space-y-1 text-sm text-red-600">
                <li>• Persistent depression or anxiety interfering with function</li>
                <li>• Suicidal thoughts or self-harm</li>
                <li>• Severe relationship or family problems</li>
                <li>• Substance abuse as coping mechanism</li>
                <li>• Patient requests additional support</li>
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
      "Grief Stages: Don't Ask Bob David About (Denial, Anger, Bargaining, Depression, Acceptance)",
      "Gender Differences: Women feel Guilt (external blame), Men feel Shame (internal blame)",
      "Coping: Problem-focused (DO something) vs Emotion-focused (FEEL better)"
    ],
    estimatedReadTime: 6
  },
  {
    id: 'study-tips',
    title: 'Study Tips & High-Yield Facts',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🧠 Key Memory Aids
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Essential Mnemonics</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>DISCUSS:</strong> Doctors In Surgery Can Usually Save Souls</li>
                <li><strong>SOLER:</strong> Sit Squarely, Open posture, Lean in, Eye contact, Relax</li>
                <li><strong>SPIKES:</strong> Setting, Perception, Invitation, Knowledge, Emotions, Strategy</li>
                <li><strong>ETHNIC:</strong> Every True Healer Needs Intentional Collaboration</li>
                <li><strong>SOAP:</strong> Subjective, Objective, Assessment, Plan</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">Quick Rules</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>Testing Minors:</strong> If it helps NOW = OK, if only LATER = Not OK</li>
                <li><strong>Ethics Priority:</strong> Autonomy > Beneficence > Non-maleficence > Justice</li>
                <li><strong>Cultural Values:</strong> Individual vs Collective affects decision-making most</li>
                <li><strong>Risk Communication:</strong> Multiple formats + Both frames + Visuals</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ⭐ High-Yield Board Facts
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Must-Know Concepts</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>NSGC Code of Ethics:</strong> 4 sections - Self, Clients, Colleagues, Society</li>
                <li>• <strong>Informed Consent:</strong> Must document DISCUSS elements + patient understanding</li>
                <li>• <strong>Confidentiality:</strong> Generally absolute except for imminent harm</li>
                <li>• <strong>Nondirective counseling:</strong> Support all patient decisions, present all options</li>
                <li>• <strong>Cultural competence:</strong> Always ask about preferences, don't assume</li>
                <li>• <strong>Testing validity:</strong> PPV depends on disease prevalence in population</li>
                <li>• <strong>Clinical utility:</strong> Whether testing improves health outcomes</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Common Board Scenarios</h4>
              <ul class="space-y-1 text-sm">
                <li>• Ethical dilemmas requiring principle-based reasoning</li>
                <li>• Risk communication with different cultural backgrounds</li>
                <li>• Informed consent documentation requirements</li>
                <li>• Testing minors appropriateness decisions</li>
                <li>• Breaking bad news scenarios</li>
                <li>• Confidentiality vs duty to warn situations</li>
                <li>• PPV calculations with different prevalence rates</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📚 Study Strategies
          </h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Active Learning Techniques</h4>
              <ul class="space-y-1 text-sm">
                <li>• Practice applying ethical principles to case studies</li>
                <li>• Role-play counseling scenarios with peers</li>
                <li>• Create concept maps linking related topics</li>
                <li>• Practice PPV calculations with different scenarios</li>
                <li>• Review real counseling session transcripts</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-green-700">Review Schedule</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Week 1-2:</strong> Focus on NSGC Code of Ethics</li>
                <li>• <strong>Week 3-4:</strong> Master counseling skills and communication</li>
                <li>• <strong>Week 5-6:</strong> Practice risk communication scenarios</li>
                <li>• <strong>Week 7-8:</strong> Review legal/ethical issues and documentation</li>
                <li>• <strong>Final week:</strong> Integration and practice questions</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 Board Exam Tips
          </h3>
          <div class="space-y-2">
            <ul class="space-y-2 text-sm">
              <li><strong>1. Principle-based approach:</strong> When facing ethical dilemmas, identify which principles are in conflict</li>
              <li><strong>2. Cultural sensitivity:</strong> Always ask about patient preferences rather than making assumptions</li>
              <li><strong>3. Documentation focus:</strong> Remember that legal protection comes from thorough documentation</li>
              <li><strong>4. Risk communication:</strong> Multiple formats and both positive/negative frames are key</li>
              <li><strong>5. Testing decisions:</strong> Consider immediate benefit vs. future-only information</li>
              <li><strong>6. Scope of practice:</strong> Know what genetic counselors can and cannot do</li>
              <li><strong>7. Confidentiality exceptions:</strong> Imminent harm to self or others, child abuse, court orders</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "All the key mnemonics from previous sections combined for review",
      "Board Strategy: Principles first, ask don't assume, document everything, multiple formats, immediate benefit"
    ],
    estimatedReadTime: 4
  }
]

// Quick lookup table for Domain 4
export const domain4QuickLookup = {
  id: 'domain4-ethics-counseling-lookup',
  title: 'Quick Ethics & Counseling Reference',
  headers: ['Concept', 'Key Framework', 'Memory Aid', 'Board Focus'],
  rows: [
    {
      id: 'ethics-principles',
      cells: ['Ethics Principles', 'Autonomy > Beneficence > Non-maleficence > Justice', 'A-B-N-J', '⭐⭐⭐']
    },
    {
      id: 'informed-consent',
      cells: ['Informed Consent', 'DISCUSS (5 elements)', 'Doctors In Surgery Can Usually Save Souls', '⭐⭐⭐']
    },
    {
      id: 'breaking-bad-news',
      cells: ['Breaking Bad News', 'SPIKES Framework', 'Setting, Perception, Invitation, Knowledge, Emotions, Strategy', '⭐⭐']
    },
    {
      id: 'active-listening',
      cells: ['Active Listening', 'SOLER Method', 'Square, Open, Lean, Eye contact, Relax', '⭐⭐']
    },
    {
      id: 'documentation',
      cells: ['Documentation', 'SOAP Format', 'Subjective, Objective, Assessment, Plan', '⭐⭐']
    },
    {
      id: 'risk-communication',
      cells: ['Risk Communication', 'Multiple Formats', 'Numbers + Visuals + Comparisons', '⭐⭐⭐']
    },
    {
      id: 'cultural-assessment',
      cells: ['Cultural Assessment', 'ETHNIC Framework', 'Every True Healer Needs Intentional Collaboration', '⭐⭐']
    },
    {
      id: 'test-validity',
      cells: ['Test Validity', 'PPV = TP/(TP+FP)', 'True Positives over All Positives', '⭐⭐']
    },
    {
      id: 'testing-minors',
      cells: ['Testing Minors', 'Benefit NOW vs LATER', 'If helps NOW = OK, if only LATER = Not OK', '⭐⭐⭐']
    },
    {
      id: 'confidentiality',
      cells: ['Confidentiality', 'Imminent harm exceptions', 'Self-harm, harm others, child abuse', '⭐⭐⭐']
    }
  ]
} 