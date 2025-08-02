import type { StudySection } from '@/types/learning'

export const topic4Sections: StudySection[] = [
  {
    id: 'overview',
    title: 'Neurological & Developmental Disorders Overview',
    content: `
      <div class="space-y-6">
        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-card-overlay"></div>
          <div class="relative z-10">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              🧠 Major Categories
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">Trinucleotide Repeat Disorders</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Huntington Disease:</strong> CAG repeats, paternal anticipation</li>
                  <li>• <strong>Fragile X:</strong> CGG repeats, maternal anticipation</li>
                  <li>• <strong>Myotonic Dystrophy:</strong> CTG repeats, maternal anticipation</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-2">X-Linked Neuromuscular</h4>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Duchenne MD:</strong> Reading frame rule</li>
                  <li>• <strong>Spinal Muscular Atrophy:</strong> SMN2 modifier</li>
                  <li>• <strong>Rett Syndrome:</strong> Developmental regression</li>
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
    id: 'trinucleotide-repeat-disorders',
    title: 'Trinucleotide Repeat Disorders',
    content: `
      <div class="space-y-8">
        <!-- Huntington Disease Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(15 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(15 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(15 100% 50% / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Huntington Disease (HD)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Classic Triad:</strong> Chorea + motor disability + cognitive decline</li>
                  <li><strong>Paternal anticipation</strong> - juvenile onset with paternal transmission</li>
                  <li><strong>Pre-symptomatic testing</strong> - requires extensive counseling</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> HTT (chromosome 4p16.3)</li>
                  <li><strong>Repeat:</strong> CAG in exon 1</li>
                  <li><strong>Inheritance:</strong> Autosomal dominant</li>
                  <li><strong>Age of onset:</strong> 30-50 years typical</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📊 Repeat Thresholds</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li>• <strong>Normal:</strong> <26 CAG repeats</li>
                  <li>• <strong>Intermediate:</strong> 27-35 repeats</li>
                  <li>• <strong>Reduced penetrance:</strong> 36-39 repeats</li>
                  <li>• <strong>Full penetrance:</strong> ≥40 repeats</li>
                  <li>• <strong>Juvenile onset:</strong> >60 repeats</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Motor:</strong> Chorea, progressive disability, dysarthria</li>
                  <li><strong>Cognitive:</strong> Executive dysfunction, dementia</li>
                  <li><strong>Behavioral:</strong> Irritability, depression, aggression</li>
                  <li><strong>Juvenile:</strong> Rigidity, seizures (paternal transmission)</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧪 Testing Considerations</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Pre-symptomatic testing requires extensive counseling</li>
                  <li>• Psychological evaluation before testing</li>
                  <li>• Insurance discrimination concerns</li>
                  <li>• Testing minors generally not recommended</li>
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
                  <li>• Paternal transmission → expansion & juvenile onset</li>
                  <li>• Instability during spermatogenesis</li>
                  <li>• Pre-symptomatic testing ethical considerations</li>
                  <li>• GINA protection has limitations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Fragile X Syndrome Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(180 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(180 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(180 100% 50% / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Fragile X Syndrome
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Most common inherited cause of ID</strong> - especially males</li>
                  <li><strong>Maternal anticipation</strong> - expansion risk with repeat size</li>
                  <li><strong>Premutation carrier risks</strong> - POI in females, FXTAS in males</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Males:</strong> ID, autism behaviors, macro-orchidism</li>
                  <li><strong>Females:</strong> Variable (mild ID to normal intelligence)</li>
                  <li><strong>Facial:</strong> Long face, prominent ears, prominent jaw</li>
                  <li><strong>Other:</strong> Joint laxity, mitral valve prolapse</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📊 CGG Repeat Thresholds</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li>• <strong>Normal:</strong> 5-44 CGG repeats</li>
                  <li>• <strong>Intermediate:</strong> 45-54 repeats</li>
                  <li>• <strong>Premutation:</strong> 55-200 repeats</li>
                  <li>• <strong>Full mutation:</strong> >200 repeats</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">⚠️ Premutation Carrier Risks</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <ul class="space-y-1 text-sm">
                    <li><strong>Females:</strong> POI ~20%</li>
                    <li><strong>Males >50y:</strong> FXTAS ~40%</li>
                    <li><strong>Expansion Risk by Size:</strong></li>
                    <li class="ml-4">• 55-59 repeats: 3.7%</li>
                    <li class="ml-4">• 70-79 repeats: 31.1%</li>
                    <li class="ml-4">• 90-99 repeats: 80.1%</li>
                    <li class="ml-4">• >100 repeats: ~100%</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧪 Testing Strategy</h4>
                <ul class="space-y-1 text-sm">
                  <li>• PCR with Southern blot for methylation</li>
                  <li>• Prenatal: Amniocentesis preferred over CVS</li>
                  <li>• Carrier screening for family history/POI</li>
                  <li>• Late-onset ataxia/tremor evaluation</li>
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
                  <li>• X-linked dominant with reduced penetrance</li>
                  <li>• Maternal anticipation via ovarian selection</li>
                  <li>• FMR1 gene at Xq27.3</li>
                  <li>• Hypermethylation silences gene</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Myotonic Dystrophy Card -->
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
              Myotonic Dystrophy Type 1 (DM1)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Myotonia</strong> - delayed muscle relaxation</li>
                  <li><strong>Maternal anticipation</strong> - congenital form</li>
                  <li><strong>Multi-system involvement</strong> - cardiac, endocrine, eye</li>
                </ol>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📝 MATCH Mnemonic</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li><strong>M</strong>yotonia</li>
                  <li><strong>A</strong>rrhythmias</li>
                  <li><strong>T</strong>esticular atrophy/Cataracts</li>
                  <li><strong>C</strong>ognitive impairment</li>
                  <li><strong>H</strong>ypotonia (congenital)</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📊 CTG Repeat Classification</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Normal:</strong> 5-34 CTG repeats</li>
                  <li><strong>Premutation:</strong> 35-49 repeats</li>
                  <li><strong>Mild DM1:</strong> 50-150 repeats</li>
                  <li><strong>Classic DM1:</strong> 100-1000 repeats</li>
                  <li><strong>Congenital:</strong> >1000 repeats (maternal)</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🛡️ Management</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Annual cardiac evaluation (conduction defects)</li>
                  <li>• Cataract screening</li>
                  <li>• Glucose monitoring</li>
                  <li>• Anesthesia precautions</li>
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
      "CAGE for CAG Repeats: Chorea (Huntington), Ataxia (SCAs), Glutamine expansion, Earlier with paternal",
      "Fragile X expansion risk: 70-79 repeats = ~31% expansion to full mutation",
      "DM1 MATCH: Myotonia, Arrhythmias, Testicular/Cataracts, Cognitive, Hypotonia"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'xlinked-neuromuscular-disorders',
    title: 'X-Linked Neuromuscular Disorders',
    content: `
      <div class="space-y-8">
        <!-- DMD/BMD Card -->
        <div class="syndrome-card syndrome-card-high" style="
          position: relative;
          background: linear-gradient(135deg, hsl(var(--card) / 0.95) 0%, hsl(220 100% 50% / 0.08) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(220 100% 50% / 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 
            0 10px 25px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05),
            0 0 0 1px hsl(220 100% 50% / 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        ">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Duchenne/Becker Muscular Dystrophy
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 DMD Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Progressive proximal weakness</strong> - wheelchair by age 13</li>
                  <li><strong>Reading frame rule</strong> - out-of-frame = severe DMD</li>
                  <li><strong>High CK levels</strong> - >10,000 U/L diagnostic</li>
                </ol>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📏 Reading Frame Rule</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li>• <strong>Out-of-frame:</strong> DMD (no dystrophin)</li>
                  <li>• <strong>In-frame:</strong> BMD (partial dystrophin)</li>
                  <li>• <strong>Exception:</strong> Exons 3-7 deletions</li>
                  <li>• <strong>Gene:</strong> DMD (Xp21.2) - largest human gene</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>DMD:</strong> Wheelchair by 13, death by 20s</li>
                  <li><strong>BMD:</strong> Later onset, ambulatory >16y</li>
                  <li><strong>Signs:</strong> Gower sign, calf pseudohypertrophy</li>
                  <li><strong>Pattern:</strong> Proximal > distal weakness</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics & Testing</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <ul class="space-y-1 text-sm">
                    <li><strong>Mutations:</strong></li>
                    <li class="ml-4">• 60% deletions</li>
                    <li class="ml-4">• 20% duplications</li>
                    <li class="ml-4">• 20% point mutations</li>
                    <li><strong>De novo rate:</strong> ~1/3 cases</li>
                    <li><strong>Testing:</strong> CK → MLPA → sequencing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">👩 Carrier Testing</h4>
                <ul class="space-y-1 text-sm">
                  <li>• 2/3 of mothers are carriers</li>
                  <li>• CK levels unreliable for detection</li>
                  <li>• Molecular testing required</li>
                  <li>• Germline mosaicism risk: 7-10%</li>
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
                  <li>• DMD FROG: Frame shift, Reading frame, Out-of-frame, Gower</li>
                  <li>• Muscle biopsy rarely needed now</li>
                  <li>• New therapies: Exon skipping, gene therapy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- SMA Card -->
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
              Spinal Muscular Atrophy (SMA)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Top 3 Key Features</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Anterior horn cell degeneration</strong> - motor neuron disease</li>
                  <li><strong>SMN2 copy number modifier</strong> - determines severity</li>
                  <li><strong>Universal carrier screening</strong> - recommended for all</li>
                </ol>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Clinical Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Pattern:</strong> Symmetric proximal > distal weakness</li>
                  <li><strong>Preserved:</strong> Sensation and cognition</li>
                  <li><strong>Pathology:</strong> Anterior horn cell degeneration</li>
                  <li><strong>Reflexes:</strong> Absent or diminished</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📝 SPINE Mnemonic</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li><strong>S</strong>MN1 deletion</li>
                  <li><strong>P</strong>roximal weakness</li>
                  <li><strong>I</strong>ntelligence preserved</li>
                  <li><strong>N</strong>umber of SMN2 copies matters</li>
                  <li><strong>E</strong>arly treatment critical</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📊 SMA Types by SMN2 Copies</h4>
                <div style="
                  background: linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--secondary) / 0.2) 100%);
                  border: 1px solid hsl(var(--border) / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <ul class="space-y-1 text-sm">
                    <li><strong>Type I:</strong> 1-2 copies, onset <6mo, never sit</li>
                    <li><strong>Type II:</strong> 2-3 copies, 6-18mo, sit but never walk</li>
                    <li><strong>Type III:</strong> 3-4 copies, >18mo, walk initially</li>
                    <li><strong>Type IV:</strong> 4+ copies, adult onset, mild</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Carrier Frequencies</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Ashkenazi Jewish:</strong> 1/41 (90% detection)</li>
                  <li><strong>Caucasian:</strong> 1/35 (94.9% detection)</li>
                  <li><strong>Asian:</strong> 1/53 (92.6% detection)</li>
                  <li><strong>African American:</strong> 1/66 (71.1% detection)</li>
                  <li><strong>Hispanic:</strong> 1/117 (90.6% detection)</li>
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
                  <li>• 95% homozygous SMN1 deletion</li>
                  <li>• 5% compound heterozygous</li>
                  <li>• New therapies: Spinraza, Zolgensma, Evrysdi</li>
                  <li>• Early treatment changes prognosis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Rett Syndrome Card -->
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
              Rett Syndrome (MECP2)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Key Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Regression:</strong> Normal development → loss (6-18mo)</li>
                  <li><strong>Hallmark:</strong> Loss of hand use → stereotypies</li>
                  <li><strong>Additional:</strong> Microcephaly, seizures, scoliosis</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📝 HANDS Mnemonic</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li><strong>H</strong>and stereotypies</li>
                  <li><strong>A</strong>praxia/Ataxia</li>
                  <li><strong>N</strong>ormal early development</li>
                  <li><strong>D</strong>evelopmental regression</li>
                  <li><strong>S</strong>peech loss</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> MECP2 (Xq28)</li>
                  <li><strong>Inheritance:</strong> X-linked dominant, 99% de novo</li>
                  <li><strong>Male lethality:</strong> Most affected are female</li>
                  <li><strong>Exceptions:</strong> Klinefelter (XXY), mosaicism</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Classic presentation in females with regression</li>
                  <li>• MECP2 duplication causes different syndrome</li>
                  <li>• Consider in autism evaluation with regression</li>
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
      "DMD FROG: Frame shift mutations, Reading frame rule, Out-of-frame = severe, Gower sign",
      "SPINE for SMA: SMN1 deletion, Proximal weakness, Intelligence preserved, Number SMN2 matters, Early treatment",
      "HANDS for Rett: Hand stereotypies, Apraxia, Normal early, Developmental regression, Speech loss"
    ],
    estimatedReadTime: 8
  },
  {
    id: 'autism-neurodevelopmental-disorders',
    title: 'Autism Spectrum & Neurodevelopmental Disorders',
    content: `
      <div class="space-y-8">
        <!-- ASD Evaluation Card -->
        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-card-overlay"></div>
          <div class="relative z-10">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              Autism Spectrum Disorder (ASD) - Genetic Evaluation
            </h3>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-primary mb-2">📊 Genetic Testing Yield</h4>
                  <ul class="space-y-1 text-sm">
                    <li><strong>Chromosomal microarray:</strong> 10-15%</li>
                    <li><strong>Fragile X testing:</strong> 2-5% (higher in males with ID)</li>
                    <li><strong>Single gene testing:</strong> Variable by phenotype</li>
                    <li><strong>Prevalence:</strong> 1 in 68</li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-semibold text-primary mb-2">🧬 High-Yield Syndromic Causes</h4>
                  <ul class="space-y-1 text-sm">
                    <li><strong>Fragile X:</strong> Most common inherited cause (males)</li>
                    <li><strong>Rett Syndrome:</strong> Females with regression</li>
                    <li><strong>MECP2 Duplication:</strong> Males with ID, spasticity</li>
                    <li><strong>PTEN:</strong> Macrocephaly + ASD</li>
                    <li><strong>TSC:</strong> Skin findings + seizures</li>
                    <li><strong>Angelman:</strong> Happy demeanor, absent speech</li>
                  </ul>
                </div>
              </div>

              <div class="space-y-4">
                <div style="
                  background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                  border: 1px solid hsl(45 100% 50% / 0.2);
                  border-radius: 0.5rem;
                  padding: 0.75rem;
                  backdrop-filter: blur(4px);
                ">
                  <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">🔬 Testing Algorithm</h4>
                  <div class="text-sm" style="color: hsl(45 100% 30%);">
                    <div><strong>First Tier:</strong></div>
                    <div>• Chromosomal microarray (15-20% yield)</div>
                    <div>• Fragile X testing</div>
                    <div>• Consider metabolic if indicated</div>
                    <div class="mt-2"><strong>Second Tier:</strong></div>
                    <div>• Whole exome sequencing (25-30% additional)</div>
                    <div>• Specific gene panels by phenotype</div>
                  </div>
                </div>

                <div>
                  <h4 class="font-semibold text-primary mb-2">💎 Board Pearls</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• Macrocephaly + ASD → think PTEN</li>
                    <li>• Regression requires different evaluation</li>
                    <li>• Family history important for targeted testing</li>
                    <li>• Early intervention improves outcomes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ID Evaluation Card -->
        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-card-overlay"></div>
          <div class="relative z-10">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              Intellectual Disability Evaluation Algorithm
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
                  <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📝 MENTAL Mnemonic</h4>
                  <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                    <li><strong>M</strong>icroarray first</li>
                    <li><strong>E</strong>xome if negative</li>
                    <li><strong>N</strong>euroimaging if indicated</li>
                    <li><strong>T</strong>argeted testing (Fragile X)</li>
                    <li><strong>A</strong>ssess dysmorphology</li>
                    <li><strong>L</strong>ook for regression</li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-semibold text-primary mb-2">🔍 Approach by Pattern</h4>
                  <ul class="space-y-1 text-sm">
                    <li><strong>Static ID:</strong> CMA, Fragile X, exome</li>
                    <li><strong>Regression:</strong> Metabolic, mitochondrial, Rett</li>
                    <li><strong>Macrocephaly:</strong> PTEN, megalencephaly genes</li>
                    <li><strong>Dysmorphic:</strong> Syndrome-specific panels</li>
                  </ul>
                </div>
              </div>

              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-primary mb-2">📊 Testing Yields</h4>
                  <ul class="space-y-1 text-sm">
                    <li><strong>Chromosomal microarray:</strong> 15-20%</li>
                    <li><strong>Fragile X testing:</strong> 2-5%</li>
                    <li><strong>Whole exome sequencing:</strong> 25-30%</li>
                    <li><strong>Metabolic screening:</strong> 1-5%</li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-semibold text-primary mb-2">🚨 Red Flags for Regression</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• Loss of previously acquired skills</li>
                    <li>• Seizures + developmental loss</li>
                    <li>• Hand stereotypies in females</li>
                    <li>• Metabolic decompensation</li>
                  </ul>
                </div>
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
      "MENTAL for ID evaluation: Microarray, Exome, Neuroimaging, Targeted, Assess dysmorphology, Look for regression",
      "Macrocephaly + ASD = PTEN until proven otherwise",
      "Regression requires different approach than static disability"
    ],
    estimatedReadTime: 6
  },
  {
    id: 'neural-tube-defects-congenital-anomalies',
    title: 'Neural Tube Defects & Congenital Anomalies',
    content: `
      <div class="space-y-8">
        <!-- Neural Tube Defects Card -->
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
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="flex items-center gap-1">
              Neural Tube Defects (NTDs)
              <span class="flex">⭐⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">📊 Types & Timing</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Anencephaly:</strong> Rostral closure failure (day 24-26)</li>
                  <li><strong>Spina Bifida:</strong> Caudal closure failure (day 26-28)</li>
                  <li><strong>Encephalocele:</strong> Skull defect with brain herniation</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">⚠️ Risk Factors</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Previous NTD:</strong> 2-3% recurrence</li>
                  <li><strong>Maternal diabetes:</strong> 2-3x increased risk</li>
                  <li><strong>Valproic acid:</strong> 1-2% risk</li>
                  <li><strong>Folate deficiency</strong></li>
                  <li><strong>Obesity</strong> (BMI >30)</li>
                  <li><strong>Hyperthermia</strong> in early pregnancy</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(120 100% 95% / 0.8) 0%, hsl(120 100% 90% / 0.6) 100%);
                border: 1px solid hsl(120 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(120 100% 35%);">💊 Folate Prevention</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(120 100% 30%);">
                  <li><strong>General population:</strong> 400 μg daily</li>
                  <li><strong>Previous NTD:</strong> 4 mg daily</li>
                  <li><strong>High-risk meds:</strong> 4 mg daily</li>
                  <li><strong>Start:</strong> 3 months preconception</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔬 Screening</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>AFP:</strong> >2.5 MoM suggests open NTD</li>
                  <li><strong>Ultrasound:</strong> Banana sign, lemon sign (spina bifida)</li>
                  <li><strong>Amniocentesis:</strong> ↑ AFP + acetylcholinesterase</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">📈 Statistics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Overall prevalence:</strong> ~1/1,000 births</li>
                  <li><strong>Folate fortification:</strong> 25-50% reduction</li>
                  <li><strong>Ethnicity:</strong> Higher in Hispanic, lower in African American</li>
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
                  <li>• High-dose folate reduces recurrence by ~70%</li>
                  <li>• Closed NTDs don't elevate AFP</li>
                  <li>• Some cases have genetic causes (VANGL1, NTN1)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- CHARGE Syndrome Card -->
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
              CHARGE Syndrome
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
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📝 CHARGE Features</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li><strong>C</strong>oloboma (iris/retina)</li>
                  <li><strong>H</strong>eart defects (conotruncal)</li>
                  <li><strong>A</strong>tresia of choanae</li>
                  <li><strong>R</strong>etardation of growth/development</li>
                  <li><strong>G</strong>enital hypoplasia</li>
                  <li><strong>E</strong>ar anomalies/deafness</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">📋 Clinical Diagnosis</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Criteria:</strong> 4 major features OR</li>
                  <li>3 major + 3 minor features</li>
                  <li><strong>Testing yield:</strong> 65-70% with sequencing</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Gene:</strong> CHD7 (8q12.2)</li>
                  <li><strong>Inheritance:</strong> AD, mostly de novo</li>
                  <li><strong>Function:</strong> Chromatin remodeling</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">💎 Board Pearls</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Choanal atresia may be life-threatening</li>
                  <li>• Hearing loss common (conductive + sensorineural)</li>
                  <li>• Complex medical needs require coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Noonan Syndrome Card -->
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
              Noonan Syndrome (RASopathy)
              <span class="flex">⭐⭐</span>
            </span>
          </h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🔑 Key Features</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>Cardiac:</strong> Pulmonary valve stenosis (50%), HCM (20%)</li>
                  <li><strong>Face:</strong> Hypertelorism, down-slanting eyes</li>
                  <li><strong>Other:</strong> Webbed neck, pectus deformity, cryptorchidism</li>
                  <li><strong>Bleeding:</strong> Factor XI deficiency, platelet dysfunction</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">🧬 Genetics</h4>
                <ul class="space-y-1 text-sm">
                  <li><strong>PTPN11:</strong> 50% (also LEOPARD syndrome)</li>
                  <li><strong>SOS1:</strong> 10-20%</li>
                  <li><strong>RAF1:</strong> 3-17% (higher HCM risk)</li>
                  <li><strong>Other:</strong> KRAS, NRAS, BRAF, MAP2K1</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">🏥 Management</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Growth hormone often effective</li>
                  <li>• Cardiac surveillance essential</li>
                  <li>• Developmental support</li>
                  <li>• Bleeding precautions pre-surgery</li>
                </ul>
              </div>

              <div style="
                background: linear-gradient(135deg, hsl(45 100% 95% / 0.8) 0%, hsl(45 100% 90% / 0.6) 100%);
                border: 1px solid hsl(45 100% 50% / 0.2);
                border-radius: 0.5rem;
                padding: 0.75rem;
                backdrop-filter: blur(4px);
              ">
                <h4 class="font-semibold mb-2" style="color: hsl(45 100% 35%);">📝 FRONT Mnemonic</h4>
                <ul class="space-y-1 text-sm" style="color: hsl(45 100% 30%);">
                  <li><strong>F</strong>acial features overlap</li>
                  <li><strong>R</strong>ASopathy spectrum</li>
                  <li><strong>O</strong>ther: Turner (females)</li>
                  <li><strong>N</strong>eurodevelopmental delays</li>
                  <li><strong>T</strong>umor risk (in some)</li>
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
      "CHARGE: Coloboma, Heart defects, Atresia (choanae), Retardation, Genital hypoplasia, Ear anomalies",
      "NTD prevention: 4mg folate for previous NTD, 400μg for general population",
      "FRONT for Noonan differential: Facial overlap, RASopathy, Other (Turner), Neurodevelopmental, Tumor risk"
    ],
    estimatedReadTime: 7
  },
  {
    id: 'study-tips',
    title: 'Study Tips & Clinical Strategies',
    content: `
      <div class="space-y-6">
        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-card-overlay"></div>
          <div class="relative z-10">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              🧠 High-Yield Study Tips
            </h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary mb-2">Anticipation Patterns</h4>
                <ul class="space-y-2 text-sm">
                  <li><strong>Paternal:</strong> Huntington (CAG), SCAs</li>
                  <li><strong>Maternal:</strong> Myotonic dystrophy (CTG), Fragile X (CGG)</li>
                  <li><strong>Why:</strong> Instability during gametogenesis differs by sex</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">X-Linked Recurrence Risks</h4>
                <ul class="space-y-2 text-sm">
                  <li><strong>Carrier mother:</strong> 50% sons affected, 50% daughters carriers</li>
                  <li><strong>Affected father:</strong> 0% sons affected, 100% daughters carriers</li>
                  <li><strong>Remember:</strong> Males can't pass X to sons</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-primary mb-2">Testing Method Selection</h4>
                <ul class="space-y-2 text-sm">
                  <li><strong>Deletions/Duplications:</strong> MLPA, CMA</li>
                  <li><strong>Repeat expansions:</strong> PCR + Southern blot</li>
                  <li><strong>Point mutations:</strong> Sequencing</li>
                  <li><strong>Methylation:</strong> MS-MLPA, bisulfite sequencing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="syndrome-card syndrome-card-medium">
          <div class="syndrome-card-overlay"></div>
          <div class="relative z-10">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              🏥 Clinical Approaches
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-accent mb-2">Approach to Hypotonia</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li>Central vs Peripheral (reflexes, CK)</li>
                  <li>If Peripheral + ↑CK → DMD/BMD</li>
                  <li>If Peripheral + Normal CK → SMA</li>
                  <li>If Central → CMA, Prader-Willi</li>
                </ol>
              </div>
              <div>
                <h4 class="font-semibold text-accent mb-2">Approach to Regression</h4>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li>With seizures → metabolic/mitochondrial</li>
                  <li>Female + hand stereotypies → Rett</li>
                  <li>Male + spasticity → MECP2 duplication</li>
                  <li>With autism → comprehensive panel</li>
                </ol>
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
      "Anticipation: Paternal (HD, SCAs), Maternal (DM1, FX)",
      "Hypotonia workup: CK high = muscle, CK normal = nerve/central",
      "X-linked risks: Carrier mom = 50/50, Affected dad = 0% sons, 100% daughter carriers"
    ],
    estimatedReadTime: 4
  }
]

// Quick lookup table for Topic 4
export const topic4QuickLookup = {
  id: 'neurological-disorders-lookup',
  title: 'Quick Neurological Disorder Lookup',
  headers: ['Disorder', 'Gene(s)', 'Key Features', 'Inheritance', 'Anticipation'],
  rows: [
    {
      id: 'huntington-disease',
      cells: ['Huntington Disease', 'HTT', 'Chorea, cognitive decline', 'AD', 'Paternal']
    },
    {
      id: 'fragile-x',
      cells: ['Fragile X', 'FMR1', 'ID, autism, macro-orchidism', 'X-linked', 'Maternal']
    },
    {
      id: 'myotonic-dystrophy',
      cells: ['Myotonic Dystrophy', 'DMPK', 'Myotonia, cataracts, cardiac', 'AD', 'Maternal']
    },
    {
      id: 'duchenne-md',
      cells: ['Duchenne MD', 'DMD', 'Progressive weakness, CK >10K', 'X-linked', '-']
    },
    {
      id: 'sma',
      cells: ['SMA', 'SMN1', 'Proximal weakness, preserved cognition', 'AR', '-']
    },
    {
      id: 'rett-syndrome',
      cells: ['Rett Syndrome', 'MECP2', 'Regression, hand stereotypies', 'X-linked', '-']
    },
    {
      id: 'charge',
      cells: ['CHARGE', 'CHD7', 'Coloboma, heart defects, choanal atresia', 'AD', '-']
    },
    {
      id: 'noonan',
      cells: ['Noonan', 'PTPN11, SOS1', 'Short stature, cardiac, bleeding', 'AD', '-']
    }
  ]
} 