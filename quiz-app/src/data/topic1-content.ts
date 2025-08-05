import type { StudySection } from '@/types/learning'

export const topic1Sections: StudySection[] = [
  {
    id: 'overview',
    title: 'Overview of Chromosomal Abnormalities',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📊 Types of Chromosomal Abnormalities
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Numerical Abnormalities</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Aneuploidy:</strong> Abnormal number of chromosomes</li>
                <li>• <strong>Monosomy:</strong> Missing one chromosome</li>
                <li>• <strong>Trisomy:</strong> Extra chromosome</li>
                <li>• <strong>Nullisomy, disomy</strong> in triploidy</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-primary">Structural Abnormalities</h4>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Deletions:</strong> Loss of chromosomal material</li>
                <li>• <strong>Duplications:</strong> Extra chromosomal material</li>
                <li>• <strong>Translocations:</strong> Exchange between chromosomes</li>
                <li>• <strong>Inversions:</strong> Reversed chromosomal segment</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            ⚙️ Key Mechanisms
          </h3>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <span class="min-w-0 font-semibold text-accent">Nondisjunction:</span>
              <span class="text-sm">Failure of chromosomes to separate properly during meiosis</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="min-w-0 font-semibold text-accent">Maternal age effect:</span>
              <span class="text-sm">Increased risk with advanced maternal age (especially for trisomies)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="min-w-0 font-semibold text-accent">Mosaicism:</span>
              <span class="text-sm">Two or more cell lines with different karyotypes in same individual</span>
            </li>
          </ul>
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
    id: 'autosomal-trisomies',
    title: 'Autosomal Trisomies',
    content: `
      <div class="space-y-8">
        <!-- Trisomy 21 Card with enhanced styling -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(38 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(38 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(38 100% 50% / 0.1);
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
            background: linear-gradient(135deg, hsl(38 100% 50% / 0.03) 0%, transparent 50%, hsl(var(--accent) / 0.03) 100%);
            pointer-events: none;
            opacity: 0.6;
          "></div>
          
          <h3 class="relative z-10 mb-4 flex items-center gap-2 text-xl font-bold">
            <span class="flex items-center gap-1">
              Trisomy 21 (Down Syndrome)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          <p class="relative z-10 mb-4 font-semibold" style="color: hsl(38 100% 30%);">Most Important Autosomal Trisomy - Study This First!</p>
          
          <div class="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🔑 Top 3 Key Features</h4>
                <ol class="list-inside list-decimal space-y-1 text-sm">
                  <li><strong>Characteristic facial features</strong> - upslanting palpebral fissures, epicanthal folds</li>
                  <li><strong>Intellectual disability</strong> - mild to moderate</li>
                  <li><strong>Congenital heart disease</strong> - endocardial cushion defects (AV canal)</li>
                </ol>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Facial:</strong> Flat profile, small ears, protruding tongue, Brushfield spots</li>
                  <li><strong>Cardiac:</strong> CHD in 50% - endocardial cushion defects most common</li>
                  <li><strong>Musculoskeletal:</strong> Hypotonia, joint laxity, short stature</li>
                  <li><strong>Medical:</strong> ↑ risk leukemia, Alzheimer's, hypothyroidism</li>
                </ul>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">📺 Ultrasound Findings</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Echogenic bowel</li>
                  <li>• Short long bones (femur, humerus)</li>
                  <li>• Congenital heart disease</li>
                  <li>• Increased nuchal translucency</li>
                  <li>• Absent nasal bone (70%)</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🧪 Serum Screening Pattern</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <ul class="space-y-1 text-sm">
                    <li class="flex justify-between"><span><strong>hCG:</strong></span><span class="font-semibold text-green-600">↑ High</span></li>
                    <li class="flex justify-between"><span><strong>Inhibin A:</strong></span><span class="font-semibold text-green-600">↑ High</span></li>
                    <li class="flex justify-between"><span><strong>PAPP-A:</strong></span><span class="font-semibold text-red-600">↓ Low</span></li>
                    <li class="flex justify-between"><span><strong>AFP:</strong></span><span class="font-semibold text-red-600">↓ Low</span></li>
                    <li class="flex justify-between"><span><strong>uE3:</strong></span><span class="font-semibold text-red-600">↓ Low</span></li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">📈 Statistics & Risks</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Prevalence:</strong> 1/800 newborns</li>
                  <li><strong>Mechanism:</strong> 85-90% maternal meiosis I (75%), meiosis II (25%)</li>
                  <li><strong>Maternal Age Risk:</strong></li>
                  <li class="ml-4">• Age 35: 1/365</li>
                  <li class="ml-4">• Age 40: 1/85</li>
                  <li><strong>Recurrence:</strong> 1-1.5% above age-related risk</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="mb-2 font-semibold" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Most common live-born autosomal aneuploidy</li>
                  <li>• 80% of DS pregnancies result in miscarriage</li>
                  <li>• APP gene on chromosome 21 → early Alzheimer's risk</li>
                  <li>• Robertsonian translocation (4-5%): 14/21 most common</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Trisomy 18 Card with enhanced styling -->
        <div class="syndrome-card syndrome-card-medium" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(25 100% 50% / 0.06) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(25 100% 50% / 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(25 100% 50% / 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="mb-4 flex items-center gap-2 text-xl font-bold">
            <span class="flex items-center gap-1">
              Trisomy 18 (Edwards Syndrome)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🔑 Top 3 Key Features</h4>
                <ol class="list-inside list-decimal space-y-1 text-sm">
                  <li><strong>Choroid plexus cysts</strong></li>
                  <li><strong>Clenched fists</strong> with overlapping fingers</li>
                  <li><strong>IUGR</strong> (intrauterine growth restriction)</li>
                </ol>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Growth:</strong> Low birth weight, failure to thrive</li>
                  <li><strong>Craniofacial:</strong> Microcephaly, prominent occiput</li>
                  <li><strong>Limbs:</strong> Clenched fists, rocker bottom feet, short sternum</li>
                  <li><strong>Cardiac:</strong> VSD most common</li>
                  <li><strong>Neurologic:</strong> Profound intellectual disability</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🧪 Serum Screening Pattern</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <ul class="space-y-1 text-sm">
                    <li class="flex justify-between"><span><strong>hCG:</strong></span><span class="font-semibold text-red-600">↓ Low</span></li>
                    <li class="flex justify-between"><span><strong>PAPP-A:</strong></span><span class="font-semibold text-red-600">↓ Low</span></li>
                    <li class="flex justify-between"><span><strong>AFP:</strong></span><span class="font-semibold text-red-600">↓ Low</span></li>
                    <li class="flex justify-between"><span><strong>uE3:</strong></span><span class="font-semibold text-red-600">↓ Low</span></li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">📈 Statistics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Prevalence:</strong> 1/5,000 live births</li>
                  <li><strong>Prognosis:</strong> Average lifespan 5 days; 5-10% survive first year</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Trisomy 13 Card with enhanced styling -->
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
          <h3 class="mb-4 flex items-center gap-2 text-xl font-bold">
            <span class="flex items-center gap-1">
              Trisomy 13 (Patau Syndrome)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🔑 Top 3 Key Features</h4>
                <ol class="list-inside list-decimal space-y-1 text-sm">
                  <li><strong>Midline facial defects</strong> (cleft lip/palate)</li>
                  <li><strong>Holoprosencephaly</strong></li>
                  <li><strong>Occipital scalp defects</strong></li>
                </ol>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>CNS:</strong> Holoprosencephaly, profound ID, seizures</li>
                  <li><strong>Facial:</strong> Midline cleft lip/palate, microphthalmia</li>
                  <li><strong>Limbs:</strong> Polydactyly, clenched fists</li>
                  <li><strong>Other:</strong> CHD, omphalocele, genital anomalies</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">📈 Statistics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Prevalence:</strong> 1/16,000</li>
                  <li><strong>Prognosis:</strong> Only 5% survive first 6 months</li>
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
      "Down syndrome screening: 'HIGH' hCG and Inhibin A, 'LOW' everything else (PAPP-A, AFP, uE3)",
      "Edwards & Patau: Everything is LOW in serum screening"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'sex-chromosome-abnormalities',
    title: 'Sex Chromosome Abnormalities',
    content: `
      <div class="space-y-8">
        <!-- Turner Syndrome Card with enhanced styling -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(var(--primary) / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--primary) / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(var(--primary) / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="mb-4 flex items-center gap-2 text-xl font-bold">
            <span class="flex items-center gap-1">
              Turner Syndrome (45,X)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🔑 Top 3 Key Features</h4>
                <ol class="list-inside list-decimal space-y-1 text-sm">
                  <li><strong>Cystic hygroma</strong> (prenatal)</li>
                  <li><strong>Coarctation of aorta</strong> (CHD)</li>
                  <li><strong>Ovarian dysgenesis</strong> → infertility</li>
                </ol>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Growth:</strong> Short stature (SHOX gene deletion)</li>
                  <li><strong>Reproductive:</strong> Delayed/absent puberty, ovarian failure</li>
                  <li><strong>Cardiac:</strong> CHD (30-50%) - coarctation of aorta, bicuspid aortic valve</li>
                  <li><strong>Renal:</strong> Horseshoe kidney, renal malformations</li>
                  <li><strong>Physical:</strong> Webbed neck, lymphedema, wide-spaced nipples</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">📈 Statistics & Karyotypes</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Prevalence:</strong> 1/3,000 live female births</li>
                  <li><strong>Conception:</strong> 1-2% of all conceptions, 99% lost to miscarriage</li>
                  <li><strong>NO maternal age effect</strong></li>
                  <li><strong>Karyotypes:</strong></li>
                  <li class="ml-4">• 45,X (45-50%)</li>
                  <li class="ml-4">• Mosaicism (15-25%)</li>
                  <li class="ml-4">• Structural X abnormalities (20%)</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
                border: 1px solid hsl(220 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="mb-2 font-semibold" style="color: hsl(220 100% 40%);">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(220 100% 35%);">
                  <li>• Most common sex chromosome abnormality in conception</li>
                  <li>• Least common sex chromosome abnormality in live births</li>
                  <li>• 45,X/46,XY requires gonadectomy (cancer risk)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Klinefelter Syndrome Card with enhanced styling -->
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
          <h3 class="mb-4 flex items-center gap-2 text-xl font-bold">
            <span class="flex items-center gap-1">
              Klinefelter Syndrome (47,XXY)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <div>
                <h4 class="mb-2 font-semibold text-primary">🔑 Top 3 Key Features</h4>
                <ol class="list-inside list-decimal space-y-1 text-sm">
                  <li><strong>Tall stature</strong> with long arms</li>
                  <li><strong>Hypogonadism</strong> → infertility</li>
                  <li><strong>Learning difficulties</strong> (not ID)</li>
                </ol>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Physical:</strong> Tall, gynecomastia, sparse body hair</li>
                  <li><strong>Reproductive:</strong> Small testes, infertility, normal testosterone initially</li>
                  <li><strong>Cognitive:</strong> Mild learning difficulties, speech delays</li>
                  <li><strong>Behavioral:</strong> Increased risk ADHD, anxiety</li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h4 class="mb-2 font-semibold text-primary">📈 Statistics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Prevalence:</strong> 1/600 male births</li>
                  <li><strong>Associated with advanced maternal age</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Smaller syndrome cards in grid layout -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
            <h4 class="mb-3 flex items-center gap-1 font-semibold">
              47,XYY (Jacob's Syndrome) ⭐
            </h4>
            <div class="space-y-2 text-sm">
              <div><strong>Key Features:</strong> Tall stature, normal fertility/hormones, learning/behavioral issues</div>
              <div><strong>Prevalence:</strong> 1/1,000 males</div>
              <div><strong>Note:</strong> Historical "criminal gene" association debunked</div>
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
            <h4 class="mb-3 flex items-center gap-1 font-semibold">
              47,XXX (Triple X Syndrome) ⭐
            </h4>
            <div class="space-y-2 text-sm">
              <div><strong>Key Features:</strong> Tall stature with long legs, learning disabilities/language delays, joint laxity</div>
              <div><strong>Prevalence:</strong> 1/1,000 females</div>
              <div><strong>Rule:</strong> More X chromosomes → increased risk for ID</div>
            </div>
          </div>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "Turner syndrome: Think TINY - Turner girls are Tiny (short stature), have Tiny ovaries (dysgenesis), Tiny heart defects (coarctation)",
      "Klinefelter: XXY = eXtra X makes eXtra tall guys with eXtra problems (learning difficulties)"
    ],
    estimatedReadTime: 6
  },
  {
    id: 'deletion-duplication-syndromes',
    title: 'Deletion/Duplication Syndromes',
    content: `
      <div class="space-y-8">
        <!-- 22q11.2 Deletion Syndrome Card with enhanced styling -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(38 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(38 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(38 100% 50% / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="mb-4 flex items-center gap-2 text-xl font-bold">
            <span class="flex items-center gap-1">
              22q11.2 Deletion Syndrome (DiGeorge/VCFS)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🔑 Top 3 Key Features</h4>
                <ol class="list-inside list-decimal space-y-1 text-sm">
                  <li><strong>Congenital heart disease</strong> (64%) - conotruncal defects</li>
                  <li><strong>Immunodeficiency</strong> - T-cell defects</li>
                  <li><strong>Hypocalcemia</strong> - hypoparathyroidism</li>
                </ol>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="mb-2 font-semibold" style="color: hsl(45 100% 35%);">🎯 CATCH-22 Mnemonic</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li><strong>C</strong>ardiac defects</li>
                  <li><strong>A</strong>bnormal facies</li>
                  <li><strong>T</strong>hymic hypoplasia</li>
                  <li><strong>C</strong>left palate</li>
                  <li><strong>H</strong>ypocalcemia</li>
                  <li><strong>22</strong> (chromosome 22)</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Cardiac:</strong> TOF, VSD, interrupted aortic arch</li>
                  <li><strong>Facial:</strong> Hooded eyelids, bulbous nose, micrognathia</li>
                  <li><strong>Psychiatric:</strong> Schizophrenia risk (25-30%)</li>
                  <li><strong>Learning:</strong> Nonverbal learning difficulties</li>
                </ul>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">📈 Statistics & Testing</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Prevalence:</strong> 1/2,000-6,000</li>
                  <li><strong>Inheritance:</strong> 90% de novo, 10% inherited (AD)</li>
                  <li><strong>Testing:</strong> CMA preferred over FISH (detects nested deletions)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- PWS and Angelman Cards in grid layout -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div style="
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
            <h3 class="mb-4 flex items-center gap-2 text-lg font-bold">
              <span class="flex items-center gap-1">
                Prader-Willi Syndrome
                <span class="flex">⭐⭐</span>
              </span>
            </h3>
            <div class="mb-2 text-sm text-muted-foreground">15q11.2-q13 paternal</div>
            
            <div class="space-y-3">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🔑 Key Features</h4>
                <ol class="list-inside list-decimal space-y-1 text-sm">
                  <li><strong>Hypotonia</strong> and feeding difficulties (infancy)</li>
                  <li><strong>Hyperphagia</strong> and obesity (childhood)</li>
                  <li><strong>Short stature</strong> with small hands/feet</li>
                </ol>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">📈 Molecular Mechanisms</h4>
                <ul class="space-y-1 text-xs">
                  <li>• Paternal deletion 15q11.2-q13 (70%)</li>
                  <li>• Maternal UPD15 (20-30%)</li>
                  <li>• Imprinting defect (<1%)</li>
                </ul>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">🧪 Testing</h4>
                <div class="text-sm">Methylation analysis (gold standard)</div>
              </div>
            </div>
          </div>

          <div style="
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
            <h3 class="mb-4 flex items-center gap-2 text-lg font-bold">
              <span class="flex items-center gap-1">
                Angelman Syndrome
                <span class="flex">⭐⭐</span>
              </span>
            </h3>
            <div class="mb-2 text-sm text-muted-foreground">15q11.2-q13 maternal</div>
            
            <div class="space-y-3">
              <div>
                <h4 class="mb-2 font-semibold text-primary">🔑 Key Features</h4>
                <ol class="list-inside list-decimal space-y-1 text-sm">
                  <li><strong>"Happy puppet" demeanor</strong> - inappropriate laughter</li>
                  <li><strong>Severe ID</strong> with absent speech</li>
                  <li><strong>Seizures</strong> and ataxic gait</li>
                </ol>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">📈 Molecular Mechanisms</h4>
                <ul class="space-y-1 text-xs">
                  <li>• Maternal deletion 15q11.2-q13 (70%)</li>
                  <li>• Paternal UPD15 (7%)</li>
                  <li>• UBE3A mutations (10%)</li>
                  <li>• Imprinting center defect (3%)</li>
                  <li>• Unknown mechanism (10%)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Williams Syndrome Card with enhanced styling -->
        <div class="syndrome-card syndrome-card-medium" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(120 50% 50% / 0.06) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(120 50% 50% / 0.25);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(120 50% 50% / 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="mb-4 flex items-center gap-2 text-xl font-bold">
            <span class="flex items-center gap-1">
              Williams Syndrome (7q11.23 deletion)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <div>
                <h4 class="mb-2 font-semibold text-primary">🔑 Top 3 Key Features</h4>
                <ol class="list-inside list-decimal space-y-1 text-sm">
                  <li><strong>"Cocktail party" personality</strong> - overly friendly</li>
                  <li><strong>Supravalvular aortic stenosis</strong></li>
                  <li><strong>Hypercalcemia</strong></li>
                </ol>
              </div>

              <div>
                <h4 class="mb-2 font-semibold text-primary">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Behavioral:</strong> Overly social, musical aptitude, anxiety/phobias</li>
                  <li><strong>Cardiac:</strong> Supravalvular aortic stenosis, peripheral artery stenosis</li>
                  <li><strong>Facial:</strong> "Elfin" facies, lacy iris pattern, wide mouth</li>
                  <li><strong>Growth:</strong> Short stature, FTT</li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h4 class="mb-2 font-semibold text-primary">📈 Statistics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Prevalence:</strong> 1/7,500-10,000</li>
                  <li><strong>Mechanism:</strong> De novo deletion involving ELN gene</li>
                  <li><strong>Inheritance:</strong> AD (rare familial cases)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Board Pearl with enhanced styling -->
        <div style="
          background: linear-gradient(135deg, hsl(220 100% 95% / 0.8) 0%, hsl(220 100% 90% / 0.6) 100%);
          border: 1px solid hsl(220 100% 50% / 0.2);
          border-radius: 0.75rem;
          padding: 1rem;
          backdrop-filter: blur(4px);
        ">
          <h4 class="mb-2 font-semibold" style="color: hsl(220 100% 40%);">💎 Board Pearl</h4>
          <p class="text-sm" style="color: hsl(220 100% 35%);">
            <strong>Opposite of Prader-Willi:</strong> PWS and Angelman syndrome demonstrate parent-of-origin effects - same chromosomal region (15q11.2-q13) but different phenotypes depending on which parent contributes the deletion.
          </p>
        </div>
      </div>
    `,
    importance: 3,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "CATCH-22: Cardiac, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia, chromosome 22",
      "Prader-Willi vs Angelman: PWS = Paternal deletion causes 'Pudgy' babies who become 'Plump', Angelman = mAternal deletion causes 'hAppy' kids"
    ],
    estimatedReadTime: 7
  },
  {
    id: 'study-tips',
    title: 'Study Tips & Mnemonics',
    content: `
      <div class="space-y-6">
        <div class="rounded-lg bg-primary/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🧠 Memory Techniques
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="mb-2 font-semibold text-primary">Serum Screening Patterns</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>Down syndrome:</strong> "HIGH hCG and Inhibin A, LOW everything else"</li>
                <li><strong>Edwards & Patau:</strong> "Everything is LOW"</li>
                <li><strong>Neural tube defects:</strong> "HIGH AFP"</li>
              </ul>
            </div>

            <div>
              <h4 class="mb-2 font-semibold text-primary">Chromosomal Syndromes</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>CATCH-22:</strong> Cardiac, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia, chromosome 22</li>
                <li><strong>Turner syndrome - TINY:</strong> Turner girls are Tiny (short), have Tiny ovaries, Tiny heart defects</li>
                <li><strong>PWS vs AS:</strong> PWS = Paternal → Pudgy/Plump, AS = mAternal → hAppy</li>
              </ul>
            </div>

            <div>
              <h4 class="mb-2 font-semibold text-primary">Sex Chromosome Rules</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>More X chromosomes → More problems</strong> (especially intellectual disability)</li>
                <li><strong>Y chromosome → Tall stature</strong> (47,XYY are tall)</li>
                <li><strong>Missing X → Short stature</strong> (Turner syndrome)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-accent/10 p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            🎯 High-Yield Study Focus
          </h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-accent">Must-Know Syndromes (⭐⭐⭐)</h4>
              <ul class="space-y-1 text-sm">
                <li>• Down syndrome (Trisomy 21)</li>
                <li>• Turner syndrome (45,X)</li>
                <li>• 22q11.2 deletion syndrome</li>
              </ul>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-accent">Important to Know (⭐⭐)</h4>
              <ul class="space-y-1 text-sm">
                <li>• Edwards syndrome (Trisomy 18)</li>
                <li>• Patau syndrome (Trisomy 13)</li>
                <li>• Klinefelter syndrome (47,XXY)</li>
                <li>• Prader-Willi syndrome</li>
                <li>• Angelman syndrome</li>
                <li>• Williams syndrome</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-green/10 rounded-lg p-6">
          <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold">
            📈 Board Exam Tips
          </h3>
          <ul class="space-y-2 text-sm">
            <li><strong>1. Focus on patterns:</strong> Learn the serum screening patterns - they're frequently tested</li>
            <li><strong>2. Know prevalences:</strong> Down syndrome (1/800), Turner (1/3,000 ♀), Klinefelter (1/600 ♂)</li>
            <li><strong>3. Understand mechanisms:</strong> Nondisjunction, maternal age effects, imprinting</li>
            <li><strong>4. Clinical recognition:</strong> Be able to identify key features from case descriptions</li>
            <li><strong>5. Testing strategies:</strong> When to use karyotype vs CMA vs specific tests</li>
          </ul>
        </div>
      </div>
    `,
    importance: 2,
    subsections: [],
    practiceQuestions: [],
    mnemonics: [
      "Down syndrome screening: 'HIGH' hCG and Inhibin A, 'LOW' everything else",
      "CATCH-22: Cardiac, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia, chromosome 22",
      "Turner syndrome TINY: Turner girls are Tiny (short), have Tiny ovaries, Tiny heart defects",
      "PWS vs AS: PWS = Paternal → Pudgy/Plump, AS = mAternal → hAppy"
    ],
    estimatedReadTime: 4
  }
]

// Quick lookup table for Topic 1
export const topic1QuickLookup = {
  id: 'chromosomal-disorders-lookup',
  title: 'Quick Condition Lookup',
  headers: ['Condition', 'Key Features', 'Prevalence', 'Testing'],
  rows: [
    {
      id: 'down-syndrome',
      cells: ['Down Syndrome', 'Facial features, ID, CHD', '1/800', 'Karyotype/CMA']
    },
    {
      id: 'edwards-syndrome', 
      cells: ['Edwards Syndrome', 'Clenched fists, IUGR, poor prognosis', '1/5,000', 'Karyotype/CMA']
    },
    {
      id: 'patau-syndrome',
      cells: ['Patau Syndrome', 'Midline defects, holoprosencephaly', '1/16,000', 'Karyotype/CMA']
    },
    {
      id: 'turner-syndrome',
      cells: ['Turner Syndrome', 'Short stature, cystic hygroma, CHD', '1/3,000 ♀', 'Karyotype/CMA']
    },
    {
      id: 'klinefelter-syndrome',
      cells: ['Klinefelter', 'Tall, hypogonadism, learning issues', '1/600 ♂', 'Karyotype']
    },
    {
      id: '22q11-deletion',
      cells: ['22q11.2 Deletion', 'CHD, immunodeficiency, hypocalcemia', '1/2,000-6,000', 'CMA']
    },
    {
      id: 'prader-willi',
      cells: ['Prader-Willi', 'Hypotonia→hyperphagia, obesity', '1/15,000', 'Methylation']
    },
    {
      id: 'angelman',
      cells: ['Angelman', 'Happy demeanor, severe ID, seizures', '1/15,000', 'UBE3A/Methylation']
    },
    {
      id: 'williams',
      cells: ['Williams', 'Social personality, SVAS, hypercalcemia', '1/10,000', 'CMA']
    }
  ]
}