import type { StudySection } from '@/types/learning'

export const topic2Sections: StudySection[] = [
  {
    id: 'overview',
    title: 'Cancer Genetics Fundamentals',
    content: `
      <div class="space-y-6">
        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-card-overlay"></div>
          <div class="relative z-10">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              🧬 Key Concepts
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">Two-Hit Hypothesis (Knudson)</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>First hit:</strong> Germline mutation (inherited)</li>
                  <li>• <strong>Second hit:</strong> Somatic mutation (acquired)</li>
                  <li>• <strong>Result:</strong> Loss of both functional copies → cancer</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-2">Types of Cancer Genes</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Tumor Suppressors:</strong> "Brakes" (TP53, RB1, APC)</li>
                  <li>• <strong>Oncogenes:</strong> "Accelerator" (RET, MYC, EGFR)</li>
                  <li>• <strong>Inheritance:</strong> Most are Autosomal Dominant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [],
    estimatedReadTime: 3
  },
  {
    id: 'hereditary-breast-ovarian-cancer',
    title: 'Hereditary Breast & Ovarian Cancer',
    content: `
      <div class="space-y-8">
        <!-- BRCA1/BRCA2 Card with enhanced styling -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(300 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(300 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(300 100% 50% / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <div style="
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, hsl(300 100% 50% / 0.03) 0%, transparent 50%, hsl(var(--accent) / 0.03) 100%);
            pointer-events: none;
            opacity: 0.6;
          "></div>
          
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
            <span class="flex items-center gap-1">
              BRCA1/BRCA2 Syndromes
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          <p class="font-semibold mb-4 relative z-10" style="color: hsl(300 100% 30%);">Most Important Cancer Syndrome - Study This First!</p>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Breast cancer</strong> - female and male (triple-negative for BRCA1)</li>
                  <li><strong>Ovarian cancer</strong> - epithelial type</li>
                  <li><strong>Early age of onset</strong> - often <50 years</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 BRCA1 vs BRCA2</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>BRCA1:</strong> Chr 17q21, triple-negative tumors</li>
                  <li><strong>BRCA2:</strong> Chr 13q12-13, ER+ tumors</li>
                  <li><strong>BRCA2:</strong> Higher male breast cancer risk</li>
                  <li><strong>BRCA2:</strong> Pancreatic cancer association</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Cancer Risks</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div class="font-semibold mb-1">BRCA1</div>
                      <div>Breast: 55-72%</div>
                      <div>Ovarian: 39-44%</div>
                    </div>
                    <div>
                      <div class="font-semibold mb-1">BRCA2</div>
                      <div>Breast: 45-69%</div>
                      <div>Ovarian: 11-17%</div>
                      <div>Male breast: 6-8%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Founder Mutations</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Ashkenazi Jewish:</strong></li>
                  <li class="ml-4">• 185delAG (BRCA1)</li>
                  <li class="ml-4">• 5382insC (BRCA1)</li>
                  <li class="ml-4">• 6174delT (BRCA2)</li>
                  <li><strong>Prevalence:</strong> 1/40 AJ vs 1/400 general</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• BRCA1 tumors: Triple-negative, basal-like</li>
                  <li>• BRCA2 tumors: ER+, HER2-, luminal</li>
                  <li>• Consider testing if ≥10% mutation chance</li>
                  <li>• DNA repair via homologous recombination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Cowden Syndrome Card -->
        <div class="syndrome-card syndrome-card-medium" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(var(--primary) / 0.06) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--primary) / 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(var(--primary) / 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Cowden Syndrome (PTEN)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Macrocephaly</strong> - large head circumference</li>
                  <li><strong>Trichilemmomas</strong> - skin lesions on face</li>
                  <li><strong>Multiple cancer risks</strong> - breast, thyroid, endometrial</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Skin:</strong> Trichilemmomas, papules, keratoses</li>
                  <li><strong>GI:</strong> Hamartomatous polyps, lipomas</li>
                  <li><strong>Neuro:</strong> Macrocephaly, cerebellar tumors</li>
                  <li><strong>Other:</strong> Goiter, autism spectrum</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Cancer Risks</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Breast:</strong> 85% lifetime risk</li>
                  <li><strong>Thyroid:</strong> 35% (follicular type)</li>
                  <li><strong>Endometrial:</strong> 28%</li>
                  <li><strong>Renal:</strong> 34%</li>
                  <li><strong>Gene:</strong> PTEN (10q23), AD inheritance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Li-Fraumeni Syndrome Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(0 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(0 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(0 100% 50% / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Li-Fraumeni Syndrome (TP53)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Core Cancers - "ABBS"</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Adrenal cortical carcinoma</strong> - childhood hallmark</li>
                  <li><strong>Breast cancer</strong> - triple-positive, early onset</li>
                  <li><strong>Brain tumors</strong> - glioblastoma, choroid plexus</li>
                  <li><strong>Bone/soft tissue sarcomas</strong> - osteosarcoma</li>
                </ol>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(0 100% 95% / 0.8) 0%, hsl(0 100% 90% / 0.6) 100%);
                border: 1px solid hsl(0 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(0 100% 40%);">⚠️ Critical Management</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(0 100% 35%);">
                  <li>• <strong>AVOID RADIATION</strong> - extreme sensitivity</li>
                  <li>• Whole body MRI annual screening</li>
                  <li>• Focus on early detection, not prevention</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Statistics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Cancer risk:</strong> Up to 90% lifetime</li>
                  <li><strong>Gene:</strong> TP53 (17p13) - "Guardian of genome"</li>
                  <li><strong>Inheritance:</strong> AD, 7-20% de novo</li>
                  <li><strong>Prevalence:</strong> 1/4,000 general; 1/375 Brazil</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Classic criteria: Proband <45y + relatives <45y</li>
                  <li>• R337H mutation: Brazilian founder, lower penetrance</li>
                  <li>• Multiple primary cancers common</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "BRCA1 = 1st to get cancer (higher breast/ovarian risks)",
      "BRCA2 = 2nd hits more organs (pancreas, prostate, melanoma)",
      "Li-Fraumeni ABBS: Adrenal, Breast, Brain, Bone/Sarcoma"
    ],
    estimatedReadTime: 10
  },
  {
    id: 'hereditary-colorectal-cancer',
    title: 'Hereditary Colorectal Cancer',
    content: `
      <div class="space-y-8">
        <!-- Lynch Syndrome Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(200 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(200 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(200 100% 50% / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Lynch Syndrome (HNPCC)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Colorectal cancer</strong> - right-sided, early onset</li>
                  <li><strong>Endometrial cancer</strong> - most common extracolonic</li>
                  <li><strong>MSI-High tumors</strong> - microsatellite instability</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genes & Mechanism</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Genes:</strong> MLH1, MSH2, MSH6, PMS2</li>
                  <li><strong>Function:</strong> Mismatch repair</li>
                  <li><strong>Protein pairs:</strong> MLH1/PMS2, MSH2/MSH6</li>
                  <li><strong>Tumor markers:</strong> MSI-High, loss of IHC</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📋 Amsterdam Criteria</h4>
                <div class="text-sm" style="color: hsl(45 100% 30%);">
                  <div><strong>3-2-1 Rule:</strong></div>
                  <div>• 3 affected relatives</div>
                  <div>• 2 generations</div>
                  <div>• 1 diagnosis <50 years</div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Cancer Risks</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <div class="text-sm">
                    <div class="font-semibold mb-2">MLH1/MSH2 (Higher penetrance)</div>
                    <div>• Colorectal: 52-82% (♂), 35-51% (♀)</div>
                    <div>• Endometrial: 25-60%</div>
                    <div>• Ovarian: 4-24%</div>
                    <div class="font-semibold mt-3 mb-2">MSH6/PMS2 (Lower penetrance)</div>
                    <div>• Colorectal: 10-22% (MSH6), 15-20% (PMS2)</div>
                    <div>• Endometrial: 16-26% (MSH6), 15% (PMS2)</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🎭 Associated Syndromes</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Turcot syndrome:</strong> Lynch + glioblastoma</li>
                  <li><strong>Muir-Torre syndrome:</strong> Lynch + sebaceous tumors</li>
                  <li><strong>Prevalence:</strong> 1/440 (most common hereditary CRC)</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Bethesda criteria more sensitive than Amsterdam</li>
                  <li>• Universal tumor screening recommended</li>
                  <li>• Lynch = Links colon to uterus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- FAP Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(120 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(120 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(120 100% 50% / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Familial Adenomatous Polyposis (FAP)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>>100 colon polyps</strong> - typically hundreds to thousands</li>
                  <li><strong>100% cancer risk</strong> - if untreated by age 40-50</li>
                  <li><strong>Extracolonic features</strong> - CHRPE, desmoids, dental</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Extracolonic Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>CHRPE:</strong> Congenital hypertrophy retinal pigment</li>
                  <li><strong>Desmoid tumors:</strong> Aggressive fibromatosis</li>
                  <li><strong>Dental:</strong> Supernumerary teeth, odontomas</li>
                  <li><strong>Bone:</strong> Osteomas, jaw cysts</li>
                  <li><strong>Skin:</strong> Epidermoid cysts</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📈 FAP Variants</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <ul class="space-y-1 text-sm">
                    <li><strong>Classic FAP:</strong> >100 polyps, APC 5' mutations</li>
                    <li><strong>Attenuated FAP:</strong> 10-100 polyps, APC 3' mutations</li>
                    <li><strong>Gardner syndrome:</strong> FAP + extracolonic features</li>
                    <li><strong>Turcot syndrome:</strong> FAP + medulloblastoma</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics & Cancer Risks</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> APC (chromosome 5q21)</li>
                  <li><strong>Inheritance:</strong> AD, 25% de novo</li>
                  <li><strong>Prevalence:</strong> 1/7,000</li>
                  <li><strong>Duodenal cancer:</strong> 4-12% lifetime risk</li>
                  <li><strong>Thyroid:</strong> 2% (papillary type)</li>
                  <li><strong>Hepatoblastoma:</strong> Childhood risk</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• "Thousands of polyps, Certain cancer"</li>
                  <li>• CHRPE = Can't Hide Retinal Pigment Easily</li>
                  <li>• AJ founder mutation: I1307K (moderate risk)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "Lynch HEMP: Heart (endometrial), Endometrial, MMR genes, Polyps (fewer)",
      "Amsterdam 3-2-1: 3 affected, 2 generations, 1 under 50 years",
      "FAP: Thousands of polyps, Certain cancer"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'phakomatoses-neurocutaneous',
    title: 'Phakomatoses (Neurocutaneous Syndromes)',
    content: `
      <div class="space-y-8">
        <!-- NF1 Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(30 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(30 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(30 100% 50% / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Neurofibromatosis Type 1 (NF1)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Café au lait macules</strong> - ≥6 spots >5mm (prepubertal)</li>
                  <li><strong>Neurofibromas</strong> - benign nerve tumors</li>
                  <li><strong>Learning difficulties</strong> - 50% of patients</li>
                </ol>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📋 Diagnostic Criteria (Need 2 of 7)</h4>
                <ul class="space-y-1 text-xs" style="color: hsl(45 100% 30%);">
                  <li>1. ≥6 café au lait macules (>5mm pre-/15mm post-pubertal)</li>
                  <li>2. ≥2 neurofibromas OR 1 plexiform</li>
                  <li>3. Axillary or inguinal freckling</li>
                  <li>4. Optic glioma</li>
                  <li>5. ≥2 Lisch nodules (iris hamartomas)</li>
                  <li>6. Distinctive bony lesion (sphenoid dysplasia)</li>
                  <li>7. First-degree relative with NF1</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Cancer Risks</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>MPNST:</strong> Malignant peripheral nerve sheath tumors</li>
                  <li><strong>Breast cancer:</strong> Increased risk in women</li>
                  <li><strong>GIST:</strong> GI stromal tumors</li>
                  <li><strong>Pheochromocytoma:</strong> Rare but possible</li>
                  <li><strong>Optic gliomas:</strong> 15% of NF1 patients</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> NF1 (chromosome 17q11.2)</li>
                  <li><strong>Inheritance:</strong> AD, 50% de novo</li>
                  <li><strong>Prevalence:</strong> 1/3,000</li>
                  <li><strong>Function:</strong> Tumor suppressor, RAS regulation</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Café au lait spots are usually first sign</li>
                  <li>• Lisch nodules are pathognomonic</li>
                  <li>• Monitor for malignant transformation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- NF2 Card -->
        <div class="syndrome-card syndrome-card-medium" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(var(--accent) / 0.06) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--accent) / 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(var(--accent) / 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Neurofibromatosis Type 2 (NF2)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Bilateral vestibular schwannomas</strong> - pathognomonic</li>
                  <li><strong>Hearing loss</strong> - progressive, sensorineural</li>
                  <li><strong>Meningiomas</strong> - often multiple</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Neurologic:</strong> Schwannomas, meningiomas</li>
                  <li><strong>Ophthalmic:</strong> Cataracts, retinal hamartomas</li>
                  <li><strong>Skin:</strong> Plaques, café au lait (fewer than NF1)</li>
                  <li><strong>Other:</strong> Ependymomas, facial weakness</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">⚠️ Management</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Avoid radiation</strong> - increased tumor risk</li>
                  <li><strong>Hearing preservation</strong> - key quality of life</li>
                  <li><strong>Multidisciplinary approach</strong> - surgical planning</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> NF2 (chromosome 22q12)</li>
                  <li><strong>Inheritance:</strong> AD, 50% de novo</li>
                  <li><strong>Prevalence:</strong> 1/60,000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- TSC Card -->
        <div class="syndrome-card syndrome-card-medium" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(280 100% 50% / 0.06) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(280 100% 50% / 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(280 100% 50% / 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Tuberous Sclerosis Complex (TSC)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Facial angiofibromas</strong> - "adenoma sebaceum"</li>
                  <li><strong>Cortical tubers</strong> - brain lesions causing seizures</li>
                  <li><strong>Hamartomas</strong> - multiple organ systems</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Neurologic:</strong> Cortical tubers, SEGAs, seizures, autism</li>
                  <li><strong>Skin:</strong> Angiofibromas, ash leaf spots, shagreen patches</li>
                  <li><strong>Renal:</strong> Angiomyolipomas, renal cell carcinoma</li>
                  <li><strong>Cardiac:</strong> Rhabdomyomas (often regress)</li>
                  <li><strong>Pulmonary:</strong> LAM in women</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📈 TSC1 vs TSC2</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <ul class="space-y-1 text-sm">
                    <li><strong>TSC1 (hamartin):</strong> Milder phenotype</li>
                    <li><strong>TSC2 (tuberin):</strong> More severe, more common</li>
                    <li><strong>Inheritance:</strong> AD, 2/3 de novo</li>
                    <li><strong>Prevalence:</strong> 1/6,000</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm">
                  <li>• "Adenoma sebaceum" is actually angiofibromas</li>
                  <li>• Ash leaf spots visible with Wood's lamp</li>
                  <li>• mTOR pathway involvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "NF1: Need 2 of 7 criteria - Café au lait, Neurofibromas, Axillary freckling, Optic glioma, Lisch nodules, Bone lesions, Family history",
      "NF2: Bilateral vestibular schwannomas are pathognomonic",
      "TSC: Facial angiofibromas, Seizures, Hamartomas"
    ],
    estimatedReadTime: 7
  },
  {
    id: 'endocrine-neoplasia-syndromes',
    title: 'Endocrine Neoplasia Syndromes',
    content: `
      <div class="space-y-8">
        <!-- MEN1 Card -->
        <div class="syndrome-card syndrome-card-medium" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(var(--primary) / 0.06) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--primary) / 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(var(--primary) / 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Multiple Endocrine Neoplasia Type 1 (MEN1)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">🔑 Key Features - "PPP"</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li><strong>Pituitary adenomas</strong> - prolactinomas most common</li>
                  <li><strong>Primary hyperparathyroidism</strong> - earliest/most common</li>
                  <li><strong>Pancreatic NETs</strong> - gastrinomas, insulinomas</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Parathyroid:</strong> Hyperparathyroidism (>95% by age 50)</li>
                  <li><strong>Pituitary:</strong> Prolactin, growth hormone adenomas</li>
                  <li><strong>Pancreatic:</strong> Gastrinomas → Zollinger-Ellison</li>
                  <li><strong>Other:</strong> Adrenal adenomas, carcinoids, lipomas</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> MEN1 (chromosome 11q13)</li>
                  <li><strong>Inheritance:</strong> AD, 10% de novo</li>
                  <li><strong>Prevalence:</strong> 1/30,000</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Hyperparathyroidism usually first manifestation</li>
                  <li>• Foregut NETs have highest malignant potential</li>
                  <li>• Screen family members starting age 5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- MEN2 Card -->
        <div class="syndrome-card syndrome-card-medium" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(var(--accent) / 0.06) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--accent) / 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(var(--accent) / 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Multiple Endocrine Neoplasia Type 2 (MEN2)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Medullary thyroid carcinoma</strong> - C-cell derived</li>
                  <li><strong>Pheochromocytoma</strong> - bilateral, usually benign</li>
                  <li><strong>Early age of onset</strong> - can be childhood</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Subtypes</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <div class="text-sm">
                    <div class="font-semibold mb-1">MEN2A (95%)</div>
                    <div>• MTC + Pheochromocytoma + Hyperparathyroidism</div>
                    <div class="font-semibold mt-2 mb-1">MEN2B (5%)</div>
                    <div>• MTC (aggressive) + Pheochromocytoma</div>
                    <div>• Mucosal neuromas + Marfanoid habitus</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genotype-Phenotype</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>MEN2A:</strong> Cysteine mutations (codons 630, 634)</li>
                  <li><strong>MEN2B:</strong> M918T mutation (codon 918) in 95%</li>
                  <li><strong>Risk stratification:</strong> Guides thyroidectomy timing</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> RET proto-oncogene (10q11.2)</li>
                  <li><strong>Inheritance:</strong> AD</li>
                  <li>• MEN2A: 5% de novo</li>
                  <li>• MEN2B: 50% de novo</li>
                  <li><strong>Prevalence:</strong> 1/35,000</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Prophylactic thyroidectomy based on mutation</li>
                  <li>• MEN2B has more aggressive MTC</li>
                  <li>• Calcitonin is tumor marker for MTC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- VHL and Retinoblastoma in grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div style="
            position: relative;
            background: linear-gradient(135deg, hsl(var(--card) / 0.93) 0%, hsl(var(--muted) / 0.4) 100%);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid hsl(var(--border) / 0.3);
            border-radius: 0.75rem;
            padding: 1rem;
            box-shadow: 
              0 8px 20px -2px rgba(0, 0, 0, 0.08), 
              0 2px 4px -1px rgba(0, 0, 0, 0.04),
              0 0 0 1px hsl(var(--border) / 0.15);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          ">
            <h4 class="font-semibold mb-3 flex items-center gap-1">
              von Hippel-Lindau (VHL) ⭐⭐
            </h4>
            <div class="space-y-2 text-sm">
              <div><strong>Key Features:</strong> Renal cell carcinoma (clear cell), hemangioblastomas, retinal lesions</div>
              <div><strong>Subtypes:</strong> Type 1 (no pheo), Type 2A/B/C (with pheo)</div>
              <div><strong>Gene:</strong> VHL (3p25-26), AD, 20% de novo</div>
              <div><strong>Prevalence:</strong> 1/36,000</div>
            </div>
          </div>

          <div style="
            position: relative;
            background: linear-gradient(135deg, hsl(var(--card) / 0.93) 0%, hsl(var(--muted) / 0.4) 100%);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid hsl(var(--border) / 0.3);
            border-radius: 0.75rem;
            padding: 1rem;
            box-shadow: 
              0 8px 20px -2px rgba(0, 0, 0, 0.08), 
              0 2px 4px -1px rgba(0, 0, 0, 0.04),
              0 0 0 1px hsl(var(--border) / 0.15);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          ">
            <h4 class="font-semibold mb-3 flex items-center gap-1">
              Retinoblastoma (RB1) ⭐⭐
            </h4>
            <div class="space-y-2 text-sm">
              <div><strong>Key Features:</strong> Eye tumor before age 5, bilateral = germline</div>
              <div><strong>Secondary cancers:</strong> Osteosarcoma, soft tissue sarcomas</div>
              <div><strong>Pearl:</strong> First tumor suppressor gene discovered (Knudson)</div>
              <div><strong>Gene:</strong> RB1 (13q14), AD, 90% de novo</div>
              <div><strong>Prevalence:</strong> 1/15,000</div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "MEN1 PPP: Pituitary, Parathyroid, Pancreatic NETs",
      "MEN2 = MTC + Pheos (Medullary Thyroid Cancer + Pheochromocytoma)",
      "Retinoblastoma: Bilateral = germline until proven otherwise"
    ],
    estimatedReadTime: 6
  },
  {
    id: 'study-tips',
    title: 'Study Tips & Mnemonics',
    content: `
      <div class="space-y-6">
        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-card-overlay"></div>
          <div class="relative z-10">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              🧠 Cancer Gene Memory Aids
            </h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">BRCA Differences</h4>
                <ul class="space-y-2 text-sm">
                  <li><strong>"BRCA1 = 1st to get cancer"</strong> - Higher breast/ovarian risks</li>
                  <li><strong>"BRCA2 = 2nd hits more organs"</strong> - Pancreas, prostate, melanoma</li>
                  <li><strong>Triple-negative vs ER+:</strong> BRCA1 vs BRCA2</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">Syndrome Mnemonics</h4>
                <ul class="space-y-2 text-sm">
                  <li><strong>Lynch HEMP:</strong> Heart (endometrial), Endometrial, MMR genes, Polyps (fewer)</li>
                  <li><strong>Li-Fraumeni ABBS:</strong> Adrenal, Breast, Brain, Bone/Sarcoma</li>
                  <li><strong>FAP:</strong> "Thousands of polyps, Certain cancer"</li>
                  <li><strong>MEN1 PPP:</strong> Pituitary, Parathyroid, Pancreatic</li>
                  <li><strong>NF1:</strong> "Need 2 of 7 criteria"</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">Penetrance Memory</h4>
                <ul class="space-y-2 text-sm">
                  <li><strong>High penetrance:</strong> BRCA1/2, TP53, APC, MLH1/MSH2</li>
                  <li><strong>Lower penetrance:</strong> MSH6/PMS2, CHEK2, ATM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-card-overlay"></div>
          <div class="relative z-10">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              🎯 High-Yield Study Focus
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-accent mb-2">Must-Know Syndromes (⭐⭐⭐)</h4>
                <ul class="space-y-1 text-sm">
                  <li>• BRCA1/BRCA2 syndromes</li>
                  <li>• Lynch syndrome (HNPCC)</li>
                  <li>• Familial Adenomatous Polyposis</li>
                  <li>• Li-Fraumeni syndrome</li>
                  <li>• Neurofibromatosis Type 1</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-accent mb-2">Important to Know (⭐⭐)</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Cowden syndrome (PTEN)</li>
                  <li>• NF2, TSC</li>
                  <li>• MEN1, MEN2</li>
                  <li>• von Hippel-Lindau</li>
                  <li>• Retinoblastoma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "BRCA1 = 1st to get cancer (higher risks), BRCA2 = 2nd hits more organs",
      "Lynch HEMP: Heart (endometrial), Endometrial, MMR genes, Polyps (fewer)",
      "Li-Fraumeni ABBS: Adrenal, Breast, Brain, Bone/Sarcoma",
      "MEN1 PPP: Pituitary, Parathyroid, Pancreatic NETs"
    ],
    estimatedReadTime: 4
  }
]

// Quick lookup table for Topic 2
export const topic2QuickLookup = {
  id: 'cancer-genetics-lookup',
  title: 'Quick Cancer Syndrome Lookup',
  headers: ['Syndrome', 'Gene(s)', 'Primary Cancers', 'Key Features'],
  rows: [
    {
      id: 'brca1-brca2',
      cells: ['BRCA1/BRCA2', 'BRCA1, BRCA2', 'Breast, ovarian', 'Early onset, family history']
    },
    {
      id: 'lynch-syndrome',
      cells: ['Lynch', 'MLH1, MSH2, MSH6, PMS2', 'Colorectal, endometrial', 'MSI-High tumors']
    },
    {
      id: 'fap',
      cells: ['FAP', 'APC', 'Colorectal', '>100 adenomatous polyps']
    },
    {
      id: 'li-fraumeni',
      cells: ['Li-Fraumeni', 'TP53', 'Sarcoma, breast, brain, adrenal', 'Childhood cancers']
    },
    {
      id: 'cowden',
      cells: ['Cowden', 'PTEN', 'Breast, thyroid, endometrial', 'Macrocephaly, hamartomas']
    },
    {
      id: 'nf1',
      cells: ['NF1', 'NF1', 'Neurofibromas, MPNST', 'Café-au-lait spots']
    },
    {
      id: 'nf2',
      cells: ['NF2', 'NF2', 'Schwannomas, meningiomas', 'Bilateral acoustic neuromas']
    },
    {
      id: 'tsc',
      cells: ['TSC', 'TSC1, TSC2', 'Renal angiomyolipomas', 'Seizures, facial angiofibromas']
    },
    {
      id: 'men1',
      cells: ['MEN1', 'MEN1', 'Pituitary, parathyroid, pancreatic NETs', 'PPP syndrome']
    },
    {
      id: 'men2',
      cells: ['MEN2', 'RET', 'Medullary thyroid, pheochromocytoma', 'Early onset MTC']
    }
  ]
} 