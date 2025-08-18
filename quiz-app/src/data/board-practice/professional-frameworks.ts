import type { StudySection } from '@/types/board-practice'

export const professionalFrameworksSections: StudySection[] = [
  {
    id: 'nsgc-code-ethics',
    title: 'NSGC Code of Ethics',
    content: `
      <h3>📜 NSGC Code of Ethics</h3>
      
      <h4>Core Principles</h4>
      
      <h5>1. Promote Client Well-being and Autonomy</h5>
      <ul>
        <li><strong>Respect</strong> for individual autonomy and decision-making capacity</li>
        <li><strong>Non-directive counseling</strong> approach</li>
        <li><strong>Cultural competency</strong> and sensitivity</li>
        <li><strong>Confidentiality</strong> protection</li>
      </ul>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Key Applications:</strong></p>
        <ul>
          <li>Informed consent processes</li>
          <li>Respect for cultural and religious beliefs</li>
          <li>Protection of genetic information</li>
          <li>Support for autonomous decision-making</li>
        </ul>
      </div>
      
      <h5>2. Promote Accuracy of Information</h5>
      <ul>
        <li><strong>Evidence-based</strong> practice</li>
        <li><strong>Current knowledge</strong> maintenance through continuing education</li>
        <li><strong>Accurate representation</strong> of risks, benefits, and limitations</li>
        <li><strong>Referral</strong> when expertise is lacking</li>
      </ul>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Key Applications:</strong></p>
        <ul>
          <li>Staying current with genetic knowledge</li>
          <li>Accurate risk assessment and communication</li>
          <li>Recognition of scope of practice limitations</li>
          <li>Appropriate referrals to specialists</li>
        </ul>
      </div>
      
      <h5>3. Promote Social Justice</h5>
      <ul>
        <li><strong>Equal access</strong> to genetic services</li>
        <li><strong>Advocacy</strong> for underserved populations</li>
        <li><strong>Elimination of discrimination</strong> based on genetic information</li>
        <li><strong>Fair allocation</strong> of resources</li>
      </ul>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Key Applications:</strong></p>
        <ul>
          <li>Addressing health disparities</li>
          <li>Advocating for insurance coverage</li>
          <li>Promoting genetic literacy</li>
          <li>Supporting legislative protections</li>
        </ul>
      </div>
      
      <h5>4. Professional Integrity</h5>
      <ul>
        <li><strong>Competent practice</strong> within scope of expertise</li>
        <li><strong>Professional boundaries</strong> maintenance</li>
        <li><strong>Continuing education</strong> and skill development</li>
        <li><strong>Honest representation</strong> of qualifications</li>
      </ul>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Key Applications:</strong></p>
        <ul>
          <li>Maintaining professional competence</li>
          <li>Avoiding conflicts of interest</li>
          <li>Truthful advertising and credentials</li>
          <li>Peer consultation and collaboration</li>
        </ul>
      </div>
      
      <h4>Memory Aid: "WASP"</h4>
      <div class="bg-blue-50 p-4 rounded-lg">
        <ul>
          <li><strong>W</strong>ell-being and autonomy</li>
          <li><strong>A</strong>ccuracy of information</li>
          <li><strong>S</strong>ocial justice</li>
          <li><strong>P</strong>rofessional integrity</li>
        </ul>
      </div>
    `,
    importance: 3,
    estimatedReadTime: 6
  },
  {
    id: 'gina-protections',
    title: 'GINA and Legal Protections',
    content: `
      <h3>🛡️ Genetic Information Protections</h3>
      
      <h4>GINA (Genetic Information Nondiscrimination Act)</h4>
      
      <h5>Title I: Health Insurance</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Prohibits:</strong></p>
        <ul>
          <li>Using genetic information for coverage decisions</li>
          <li>Requesting genetic testing for insurance</li>
          <li>Considering genetic information as pre-existing condition</li>
        </ul>
      </div>
      
      <div class="bg-red-50 p-4 rounded-lg mb-4">
        <p><strong>Limitations:</strong></p>
        <ul>
          <li>Doesn't apply to life, disability, or long-term care insurance</li>
          <li>Small group policies (<50 employees) have limited protections</li>
          <li>Military health care has different rules</li>
        </ul>
      </div>
      
      <h5>Title II: Employment</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Prohibits:</strong></p>
        <ul>
          <li>Discrimination in hiring, firing, or promotion</li>
          <li>Requesting genetic information from employees</li>
          <li>Requiring genetic testing for employment</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>Inadvertent acquisition of genetic information</li>
          <li>Wellness programs (with restrictions)</li>
          <li>Requests under FMLA</li>
          <li>Law enforcement purposes</li>
        </ul>
      </div>
      
      <h4>State Genetic Privacy Laws</h4>
      <p>Many states have additional protections:</p>
      <ul>
        <li><strong>Broader insurance</strong> protections (life, disability)</li>
        <li><strong>Stronger employment</strong> protections</li>
        <li><strong>Research participation</strong> protections</li>
        <li><strong>Minors' genetic information</strong> protections</li>
      </ul>
      
      <h4>HIPAA Considerations</h4>
      
      <h5>Privacy Rule Requirements</h5>
      <ul>
        <li>Protected health information (PHI) safeguards</li>
        <li>Minimum necessary standard</li>
        <li>Patient rights to access records</li>
        <li>Breach notification requirements</li>
      </ul>
      
      <h5>Genetic Information Considerations</h5>
      <ul>
        <li>Family history as PHI</li>
        <li>Test results confidentiality</li>
        <li>Electronic health record protections</li>
        <li>Research data protections</li>
      </ul>
      
      <h4>Memory Aid: "HE" (Health insurance and Employment)</h4>
      <div class="bg-blue-50 p-4 rounded-lg">
        <ul>
          <li><strong>H</strong>ealth insurance discrimination prohibited</li>
          <li><strong>E</strong>mployment discrimination prohibited</li>
          <li><strong>Exceptions:</strong> Life, disability, long-term care not covered</li>
        </ul>
      </div>
    `,
    importance: 3,
    estimatedReadTime: 7
  },
  {
    id: 'professional-standards',
    title: 'Professional Standards and Certification',
    content: `
      <h3>🏥 Professional Standards and Regulations</h3>
      
      <h4>State Licensure Variations</h4>
      
      <h5>States with Genetic Counselor Licensure</h5>
      <p>Over 25 states now have specific genetic counselor licensure laws.</p>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Common Requirements:</strong></p>
        <ul>
          <li>ABGC certification</li>
          <li>Master's degree from accredited program</li>
          <li>Continuing education requirements</li>
          <li>Background checks</li>
          <li>Professional liability insurance</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p><strong>Scope of Practice Variations:</strong></p>
        <ul>
          <li>Some states allow independent practice</li>
          <li>Others require physician supervision or collaboration</li>
          <li>Ordering laboratory tests varies by state</li>
          <li>Billing and reimbursement regulations differ</li>
        </ul>
      </div>
      
      <h5>Interstate Practice Considerations</h5>
      <ul>
        <li><strong>Telemedicine</strong> regulations vary by state</li>
        <li><strong>Reciprocity</strong> agreements between some states</li>
        <li><strong>Temporary practice</strong> permits for out-of-state counselors</li>
        <li><strong>Military spouse</strong> licensing accommodations</li>
      </ul>
      
      <h4>Professional Organizations and Certification</h4>
      
      <h5>NSGC (National Society of Genetic Counselors)</h5>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>Functions:</strong></p>
        <ul>
          <li>Professional standards development</li>
          <li>Advocacy for genetic counseling profession</li>
          <li>Continuing education provision</li>
          <li>Career development support</li>
        </ul>
      </div>
      
      <h5>ABGC (American Board of Genetic Counseling)</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Certification process:</strong></p>
        <ul>
          <li>Examination eligibility requirements</li>
          <li>Continuing education for recertification</li>
          <li>Professional practice standards</li>
          <li>Disciplinary procedures</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p><strong>Recertification requirements:</strong></p>
        <ul>
          <li>50 CEUs every 5 years</li>
          <li>Professional practice verification</li>
          <li>Adherence to Code of Ethics</li>
          <li>Fee payment</li>
        </ul>
      </div>
      
      <h5>ACGC (Accreditation Council for Genetic Counseling)</h5>
      <div class="bg-purple-50 p-4 rounded-lg mb-4">
        <p><strong>Program accreditation:</strong></p>
        <ul>
          <li>Graduate program standards</li>
          <li>Faculty qualification requirements</li>
          <li>Curriculum standards</li>
          <li>Clinical training requirements</li>
        </ul>
      </div>
      
      <h4>Continuing Education</h4>
      
      <h5>ABGC Requirements</h5>
      <ul>
        <li><strong>50 CEUs</strong> every 5 years for recertification</li>
        <li><strong>Category 1:</strong> Direct relevance to genetic counseling</li>
        <li><strong>Category 2:</strong> Indirect relevance (limited amount allowed)</li>
        <li><strong>Self-assessment</strong> requirements</li>
      </ul>
      
      <h5>State Licensure Requirements</h5>
      <p><strong>Vary by state:</strong></p>
      <ul>
        <li>Annual continuing education requirements</li>
        <li>Specific topic requirements (ethics, law, etc.)</li>
        <li>Approved provider restrictions</li>
        <li>Documentation requirements</li>
      </ul>
      
      <h4>Core Competencies (ACGC)</h4>
      <ol>
        <li><strong>Genetics expertise</strong> and analysis</li>
        <li><strong>Interpersonal, psychosocial</strong> and counseling skills</li>
        <li><strong>Education</strong> skills</li>
        <li><strong>Professional development</strong> and practice</li>
      </ol>
    `,
    importance: 2,
    estimatedReadTime: 6
  },
  {
    id: 'billing-laboratory-standards',
    title: 'Billing and Laboratory Standards',
    content: `
      <h3>💰 Insurance and Billing Frameworks</h3>
      
      <h4>Health Insurance Coverage</h4>
      
      <h5>Medicare Coverage</h5>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>Eligible populations:</strong></p>
        <ul>
          <li>Age 65+</li>
          <li>End-stage renal disease (ESRD)</li>
          <li>Amyotrophic lateral sclerosis (ALS)</li>
          <li>Certain disabilities</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p><strong>Genetic counseling coverage:</strong></p>
        <ul>
          <li>Limited coverage for genetic counseling</li>
          <li>Must meet specific criteria</li>
          <li>Requires physician referral</li>
          <li>Pre-authorization often required</li>
        </ul>
      </div>
      
      <h5>Medicaid Coverage</h5>
      <p><strong>Variable by state:</strong></p>
      <ul>
        <li>Some states cover genetic counseling</li>
        <li>EPSDT (Early and Periodic Screening, Diagnostic and Treatment) for children</li>
        <li>Managed care restrictions may apply</li>
      </ul>
      
      <h5>Private Insurance</h5>
      <p><strong>Coverage varies by plan:</strong></p>
      <ul>
        <li><strong>Prior authorization</strong> requirements</li>
        <li><strong>Medical necessity</strong> determinations</li>
        <li><strong>Network provider</strong> restrictions</li>
        <li><strong>Deductibles and co-pays</strong> apply</li>
      </ul>
      
      <h4>Billing and Reimbursement</h4>
      
      <h5>CPT Codes for Genetic Counseling</h5>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <ul>
          <li><strong>96040:</strong> Medical genetics and genetic counseling services, each 30 minutes face-to-face</li>
          <li><strong>99401-99404:</strong> Preventive counseling (individual)</li>
          <li><strong>99411-99412:</strong> Preventive counseling (group)</li>
        </ul>
      </div>
      
      <h5>ICD-10 Codes</h5>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>Common codes for genetic counseling:</strong></p>
        <ul>
          <li><strong>Z31.5:</strong> Encounter for genetic counseling</li>
          <li><strong>Z31.430:</strong> Encounter for fertility preservation counseling</li>
          <li><strong>Z80.x:</strong> Family history of malignant neoplasm</li>
          <li><strong>Z87.x:</strong> Personal history of malignant neoplasm</li>
        </ul>
      </div>
      
      <h5>Prior Authorization Requirements</h5>
      <ul>
        <li>Documentation of medical necessity</li>
        <li>Family history documentation</li>
        <li>Provider credentials verification</li>
        <li>Treatment plan submission</li>
      </ul>
      
      <h4>Laboratory Standards and Regulations</h4>
      
      <h5>CLIA Requirements</h5>
      
      <div class="bg-purple-50 p-4 rounded-lg mb-4">
        <p><strong>Laboratory Categories:</strong></p>
        <ul>
          <li><strong>Waived tests:</strong> Simple tests with low error risk</li>
          <li><strong>Moderate complexity:</strong> Most genetic tests</li>
          <li><strong>High complexity:</strong> Research-grade testing</li>
        </ul>
      </div>
      
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p><strong>Quality Standards:</strong></p>
        <ul>
          <li><strong>Personnel qualifications</strong></li>
          <li><strong>Quality control</strong> procedures</li>
          <li><strong>Proficiency testing</strong></li>
          <li><strong>Quality assurance</strong> programs</li>
        </ul>
      </div>
      
      <h5>CAP (College of American Pathologists)</h5>
      <p><strong>Additional accreditation:</strong></p>
      <ul>
        <li>Higher standards than CLIA alone</li>
        <li>Peer review process</li>
        <li>Continuing education requirements</li>
        <li>Quality improvement programs</li>
      </ul>
      
      <h5>FDA Oversight</h5>
      <p><strong>Laboratory Developed Tests (LDTs):</strong></p>
      <ul>
        <li>Currently under FDA consideration for regulation</li>
        <li>Most genetic tests are LDTs</li>
        <li>Quality varies between laboratories</li>
        <li>Clinical validation requirements evolving</li>
      </ul>
      
      <h4>Informed Consent Requirements</h4>
      
      <h5>Elements of Informed Consent</h5>
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <ol>
          <li><strong>Nature</strong> of the procedure/test</li>
          <li><strong>Risks and benefits</strong></li>
          <li><strong>Alternatives</strong> available</li>
          <li><strong>Right to refuse</strong></li>
          <li><strong>Questions</strong> encouraged</li>
        </ol>
      </div>
      
      <h5>Special Considerations</h5>
      <ul>
        <li><strong>Minors:</strong> Parent/guardian consent required</li>
        <li><strong>Emancipated minors:</strong> Can consent for themselves</li>
        <li><strong>Mental capacity:</strong> Assessment required</li>
        <li><strong>Cultural factors:</strong> Language and cultural considerations</li>
      </ul>
      
      <h4>Memory Aid: "NARR-Q"</h4>
      <div class="bg-blue-50 p-4 rounded-lg">
        <p><strong>Informed Consent Elements:</strong></p>
        <ul>
          <li><strong>N</strong>ature of procedure</li>
          <li><strong>A</strong>lternatives available</li>
          <li><strong>R</strong>isks and benefits</li>
          <li><strong>R</strong>ight to refuse</li>
          <li><strong>Q</strong>uestions encouraged</li>
        </ul>
      </div>
    `,
    importance: 2,
    estimatedReadTime: 8
  }
]