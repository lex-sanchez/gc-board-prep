import type { StudySection } from '@/types/learning'

export const topic6Sections: StudySection[] = [
  {
    id: 'overview',
    title: 'Specialized Organ Systems Overview',
    content: `
      <div class="space-y-6">
        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-card-overlay"></div>
          <div class="relative z-10">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              🏥 Major System Categories
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">Dermatologic & Skeletal</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Incontinentia Pigmenti:</strong> X-linked dominant, male lethal</li>
                  <li>• <strong>Osteogenesis Imperfecta:</strong> Brittle bones, blue sclerae</li>
                  <li>• <strong>Marfan Syndrome:</strong> Aortic dilation, lens dislocation</li>
                  <li>• <strong>Achondroplasia:</strong> FGFR3, rhizomelic shortening</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-2">Blood & Metabolism</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Sickle Cell Disease:</strong> Vaso-occlusive crises</li>
                  <li>• <strong>Hemophilia A/B:</strong> X-linked bleeding disorders</li>
                  <li>• <strong>CAH:</strong> Ambiguous genitalia, salt wasting</li>
                  <li>• <strong>Hereditary Hearing Loss:</strong> GJB2 most common</li>
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
    id: 'dermatologic-skeletal-disorders',
    title: 'Dermatologic & Skeletal Disorders',
    content: `
      <div class="space-y-8">
        <!-- Osteogenesis Imperfecta Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(30 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(30 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Osteogenesis Imperfecta (OI)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Multiple fractures</strong> with minimal trauma</li>
                  <li><strong>Blue sclerae</strong></li>
                  <li><strong>Short stature</strong></li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">📊 OI Types</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Type I:</strong> Mild, blue sclerae, hearing loss</li>
                  <li><strong>Type II:</strong> Perinatal lethal, multiple in utero fractures</li>
                  <li><strong>Type III:</strong> Progressive deforming, very short</li>
                  <li><strong>Type IV:</strong> Moderate, normal sclerae</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Genes:</strong> COL1A1, COL1A2 (90%, AD)</li>
                  <li><strong>Rare AR forms:</strong> CRTAP, P3H1, PPIB</li>
                  <li><strong>Most severe:</strong> Usually de novo</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Distinguish from non-accidental injury</li>
                  <li>• Dentinogenesis imperfecta in Types III, IV</li>
                  <li>• Variable expressivity within families</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Marfan Syndrome Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(220 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(220 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Marfan Syndrome
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Aortic root dilatation</strong> → dissection risk</li>
                  <li><strong>Ectopia lentis</strong> (upward)</li>
                  <li><strong>Marfanoid habitus</strong></li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Ghent Criteria (need):</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Aortic dilatation (Z ≥2) + Ectopia lentis</li>
                  <li>• Aortic dilatation (Z ≥2) + FBN1 mutation</li>
                  <li>• Aortic dilatation (Z ≥2) + Systemic score ≥7</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics & Management</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> FBN1 (95%), AD, 25% de novo</li>
                  <li><strong>Cardiac:</strong> Annual echo, beta-blockers</li>
                  <li><strong>Activity:</strong> No contact sports</li>
                  <li><strong>Pregnancy:</strong> High risk, cardiology co-management</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Lens up (vs homocystinuria: down)</li>
                  <li>• Aortic dissection main cause of death</li>
                  <li>• Pregnancy increases dissection risk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Achondroplasia Card -->
        <div class="syndrome-card syndrome-card-medium" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(var(--accent) / 0.06) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--accent) / 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Achondroplasia
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Rhizomelic shortening</strong> (proximal > distal)</li>
                  <li><strong>Macrocephaly</strong> with frontal bossing</li>
                  <li><strong>Trident hands</strong></li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">⚠️ Complications</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Foramen magnum stenosis (infant)</li>
                  <li>• Sleep apnea</li>
                  <li>• Spinal stenosis (adult)</li>
                  <li>• Otitis media → hearing loss</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> FGFR3 (99% c.1138G>A)</li>
                  <li><strong>Inheritance:</strong> AD, 80% de novo</li>
                  <li><strong>Paternal age effect:</strong> Increased risk</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">👶 Reproductive Counseling</h4>
                <div class="text-sm">
                  <div><strong>Two affected parents:</strong></div>
                  <div>• 25% average stature</div>
                  <div>• 50% achondroplasia</div>
                  <div>• 25% homozygous (lethal)</div>
                </div>
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
      "OI Types: I=mIld, II=lethal, III=progressive, IV=moderate",
      "Marfan: Lens UP (vs homocystinuria DOWN)",
      "Achondroplasia: Homozygous lethal (important for two affected parents)"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'hematological-disorders',
    title: 'Hematological Disorders',
    content: `
      <div class="space-y-8">
        <!-- Sickle Cell Disease Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(0 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(0 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Sickle Cell Disease
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📊 Genotypes & Severity</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Hb SS:</strong> Most severe (sickle cell anemia)</li>
                  <li><strong>Hb SC:</strong> Intermediate severity</li>
                  <li><strong>Hb S/β-thal:</strong> Variable (β+ or β0)</li>
                  <li><strong>Hb S/HPFH:</strong> Mild</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Major Complications</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Vaso-occlusive crises (pain episodes)</li>
                  <li>• Acute chest syndrome (life-threatening)</li>
                  <li>• Stroke (11% by age 20)</li>
                  <li>• Splenic sequestration (early childhood)</li>
                  <li>• Functional asplenia → infections</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧪 NBS Results</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                ">
                  <ul class="space-y-1 text-sm">
                    <li><strong>FA:</strong> Normal</li>
                    <li><strong>FAS:</strong> Sickle trait</li>
                    <li><strong>FS:</strong> Sickle cell disease</li>
                    <li><strong>FSC:</strong> Hb SC disease</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">💊 Management</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Prophylaxis: Penicillin, vaccines</li>
                  <li>• Hydroxyurea: ↑ Hb F</li>
                  <li>• Transfusions: Stroke prevention</li>
                  <li>• New therapies: Voxelotor, crizanlizumab</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Population Screening</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>African/AA:</strong> SCT 1/10, α-thal 1/30</li>
                  <li><strong>Mediterranean:</strong> β-thal 1/7-30</li>
                  <li><strong>SE Asian:</strong> α-thal 1/20, Hb E 1/5-10</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Hemophilia Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(280 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(280 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Hemophilia A & B
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📊 Severity Classification</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Severe:</strong> <1% activity, spontaneous bleeds</li>
                  <li><strong>Moderate:</strong> 1-5% activity, trauma bleeds</li>
                  <li><strong>Mild:</strong> 5-40% activity, surgery bleeds</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Hemophilia A:</strong> F8 gene, intron 22 inversion (45%)</li>
                  <li><strong>Hemophilia B:</strong> F9 gene, point mutations</li>
                  <li><strong>Inheritance:</strong> X-linked recessive</li>
                  <li><strong>De novo:</strong> 30% of cases</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">👩 Carrier Testing</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Usually 50% factor levels</li>
                  <li>• May have bleeding symptoms</li>
                  <li>• Lyonization → variable levels</li>
                  <li>• Genetic testing definitive</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">👶 Reproductive Options</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Prenatal diagnosis: CVS/amnio</li>
                  <li>• PGT available</li>
                  <li>• Delivery planning: avoid vacuum/forceps</li>
                  <li>• Cord blood factor levels</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Female homozygotes possible (carrier × affected)</li>
                  <li>• Inhibitor development major complication</li>
                  <li>• New therapies: Extended half-life factors</li>
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
      "SCD NBS: FA=normal, FAS=trait, FS=disease, FSC=SC disease",
      "Hemophilia severity: <1% severe, 1-5% moderate, 5-40% mild",
      "X-linked bleeding: 30% de novo, carrier mom 50/50 risk"
    ],
    estimatedReadTime: 6
  },
  {
    id: 'endocrine-sensory-disorders',
    title: 'Endocrine & Sensory Disorders',
    content: `
      <div class="space-y-8">
        <!-- CAH Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(60 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(60 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Congenital Adrenal Hyperplasia (CAH)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Ambiguous genitalia</strong> in females</li>
                  <li><strong>Salt-wasting crisis</strong> (if severe)</li>
                  <li><strong>Precocious puberty</strong> (if mild)</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">📊 Forms</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Classic Salt-Wasting (75%):</strong> Life-threatening</li>
                  <li><strong>Classic Simple Virilizing (25%):</strong> Virilization only</li>
                  <li><strong>Non-classic:</strong> Late-onset, hirsutism</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧪 Newborn Screening</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Marker:</strong> 17-OHP elevated</li>
                  <li><strong>False positives:</strong> Prematurity, stress</li>
                  <li><strong>Confirmatory:</strong> ACTH stimulation, genetics</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics & Carrier Screening</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> CYP21A2 (95% of CAH)</li>
                  <li><strong>Inheritance:</strong> Autosomal recessive</li>
                  <li><strong>Carrier frequency:</strong> 1/60 general, 1/27 AJ</li>
                  <li><strong>Challenge:</strong> Pseudogene complicates testing</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">👶 Prenatal Management</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Dexamethasone starting <9 weeks</li>
                  <li>• CVS/amnio for fetal sex + genotype</li>
                  <li>• Continue dex only for affected females</li>
                  <li>• <strong>Controversial:</strong> Prenatal dex risks/benefits</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Most common cause of ambiguous genitalia</li>
                  <li>• Salt crisis at 1-3 weeks if undiagnosed</li>
                  <li>• Non-classic form common in AJ population</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Hereditary Hearing Loss Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(180 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(180 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Hereditary Hearing Loss
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📊 Classification</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Non-syndromic (70%):</strong> DFNA (AD), DFNB (AR), DFNX</li>
                  <li><strong>Syndromic (30%):</strong> Part of syndrome</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 GJB2 (Connexin 26) - Most Common</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Inheritance:</strong> AR (DFNB1)</li>
                  <li><strong>Frequency:</strong> 50% of AR non-syndromic HL</li>
                  <li><strong>Common mutations:</strong></li>
                  <li class="ml-4">• 35delG (European)</li>
                  <li class="ml-4">• 167delT (Ashkenazi Jewish)</li>
                  <li class="ml-4">• 235delC (Asian)</li>
                  <li><strong>Carrier rate:</strong> 1:30 (European ancestry)</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🎭 Major Syndromic Causes</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Usher syndrome:</strong> HL + retinitis pigmentosa</li>
                  <li><strong>Pendred syndrome:</strong> HL + thyroid goiter + EVA</li>
                  <li><strong>Waardenburg:</strong> HL + pigmentary changes</li>
                  <li><strong>Jervell-Lange-Nielsen:</strong> HL + long QT</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">🏛️ Cultural Considerations</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li>• Deaf culture views deafness as difference, not disability</li>
                  <li>• ASL as primary language</li>
                  <li>• May prefer deaf children</li>
                  <li>• Respect cultural identity in counseling</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• CMV most common non-genetic cause</li>
                  <li>• Aminoglycosides + m.1555A>G = HL</li>
                  <li>• Early intervention improves outcomes</li>
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
      "CAH: Most common cause of ambiguous genitalia",
      "GJB2 carrier rate: 1/30 European ancestry",
      "Deaf culture: View as difference, not disability"
    ],
    estimatedReadTime: 7
  },
  {
    id: 'dna-repair-disorders',
    title: 'DNA Repair & Chromosomal Instability',
    content: `
      <div class="space-y-8">
        <!-- Fanconi Anemia Card -->
        <div class="syndrome-card syndrome-card-medium" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(var(--primary) / 0.06) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--primary) / 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Fanconi Anemia (FA)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Bone marrow failure</strong> (90% by age 40)</li>
                  <li><strong>Radial ray anomalies</strong></li>
                  <li><strong>Increased cancer risk</strong></li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Hematologic:</strong> Pancytopenia, MDS, AML</li>
                  <li><strong>Skeletal:</strong> Thumb/radius anomalies (50%)</li>
                  <li><strong>Growth:</strong> Short stature, microcephaly</li>
                  <li><strong>Skin:</strong> Café-au-lait, hyperpigmentation</li>
                  <li><strong>Note:</strong> 30% no physical anomalies</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics & Testing</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Genes:</strong> >22 genes (FANCA 60-70%)</li>
                  <li><strong>Testing:</strong> DEB/MMC chromosome breakage</li>
                  <li><strong>Special:</strong> FANCD1=BRCA2, FANCN=PALB2</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🛡️ Management</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Regular CBC, BMT consideration</li>
                  <li>• Cancer screening (head/neck, GYN)</li>
                  <li>• Avoid radiation, alkylating agents</li>
                  <li>• HSCT only cure for bone marrow failure</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• DEB test diagnostic gold standard</li>
                  <li>• Increased toxicity from chemo/radiation</li>
                  <li>• VACTERL association overlap</li>
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
      "Fanconi Anemia: DEB test = diagnostic gold standard",
      "FA: 30% no physical anomalies - don't rule out based on appearance",
      "FA complications: Bone marrow failure, cancer, increased chemo/radiation toxicity"
    ],
    estimatedReadTime: 4
  }
]

// Quick lookup table for Topic 6
export const topic6QuickLookup = {
  id: 'specialized-systems-lookup',
  title: 'Quick Specialized Systems Lookup',
  headers: ['Disorder', 'Key Features', 'Inheritance', 'Population Risk', 'Management'],
  rows: [
    {
      id: 'osteogenesis-imperfecta',
      cells: ['Osteogenesis Imperfecta', 'Multiple fractures, blue sclerae', 'AD (mostly)', '1:20,000', 'Fracture prevention']
    },
    {
      id: 'marfan-syndrome',
      cells: ['Marfan Syndrome', 'Aortic dilatation, lens dislocation', 'AD', '1:5,000', 'Cardiac monitoring']
    },
    {
      id: 'achondroplasia',
      cells: ['Achondroplasia', 'Rhizomelic dwarfism', 'AD, de novo', '1:25,000', 'Growth monitoring']
    },
    {
      id: 'sickle-cell-disease',
      cells: ['Sickle Cell Disease', 'Vaso-occlusive crises', 'AR', '1:365 (AA)', 'Hydroxyurea, prophylaxis']
    },
    {
      id: 'hemophilia-a',
      cells: ['Hemophilia A', 'Bleeding, joint hemorrhages', 'XLR', '1:5,000 males', 'Factor replacement']
    },
    {
      id: 'cah',
      cells: ['CAH', 'Ambiguous genitalia, salt wasting', 'AR', '1:15,000', 'Hormone replacement']
    },
    {
      id: 'gjb2-hearing-loss',
      cells: ['GJB2 Hearing Loss', 'Congenital deafness', 'AR', '1:1,000', 'Early intervention']
    },
    {
      id: 'fanconi-anemia',
      cells: ['Fanconi Anemia', 'Bone marrow failure, radial ray anomalies', 'AR', 'Variable', 'BMT, cancer surveillance']
    }
  ]
} 