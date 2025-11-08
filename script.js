const defaultTemplate = `<!-- ====== CARTE DES SOINS 2025 — RVB SPA (HTML template avec placeholders) ====== -->
<section id="rvb-spa-carte-2025" lang="fr"
  style="--c1:#0f766e;
         --c2:#0ea5a4;
         --ink:#0b1320;
         --muted:#6b7280;
         --bg:#ffffff;
         --panel:#f8fafc;
         --item:#ffffff;
         --ring:#e5e7eb;
         font-family:'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
         color:var(--ink);
         background:var(--bg);">

  <!-- Import de la police Montserrat -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    #rvb-spa-carte-2025 * {
      box-sizing: border-box;
      font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    }

    #rvb-spa-carte-2025 .wrap {
      max-width: 1000px;
      margin: 0 auto;
      padding: 24px;
    }

    #rvb-spa-carte-2025 h1 {
      font-size: clamp(1.6rem, 2vw, 2rem);
      margin: .2rem 0 .8rem;
      font-weight: 600;
    }

    #rvb-spa-carte-2025 h2 {
      font-size: clamp(1.25rem, 1.8vw, 1.5rem);
      margin: 1.4rem 0 .6rem;
      font-weight: 600;
    }

    #rvb-spa-carte-2025 h3 {
      font-size: 1.05rem;
      margin: 1rem 0 .4rem;
      font-weight: 500;
    }

    #rvb-spa-carte-2025 p.lead {
      color: var(--muted);
      margin: .1rem 0 .35rem;
      font-weight: 400;
    }

    #rvb-spa-carte-2025 .panel {
      background: var(--panel);
      border: 1px solid var(--ring);
      border-radius: 14px;
      padding: 16px;
    }

    #rvb-spa-carte-2025 .grid {
      display: grid;
      gap: 12px;
    }

    @media (min-width:780px) {
      #rvb-spa-carte-2025 .grid.cols-2 {
        grid-template-columns: 1fr 1fr;
      }
    }

    #rvb-spa-carte-2025 .item {
      background: var(--item, #fff);
      border: 1px solid var(--ring);
      border-radius: 12px;
      padding: 14px;
    }

    #rvb-spa-carte-2025 .row {
      display: flex;
      gap: 10px;
      justify-content: space-between;
      align-items: flex-start;
    }

    #rvb-spa-carte-2025 .title {
      font-weight: 600;
    }

    #rvb-spa-carte-2025 .subtitle {
      color: var(--muted);
      font-size: .95rem;
      font-weight: 400;
    }

    #rvb-spa-carte-2025 .meta {
      white-space: nowrap;
      text-align: right;
      font-variant-numeric: tabular-nums;
    }

    #rvb-spa-carte-2025 .meta .dur {
      color: var(--muted);
      display: block;
      font-weight: 400;
    }

    #rvb-spa-carte-2025 .badge {
      display: inline-block;
      padding: .2rem .5rem;
      border-radius: 8px;
      background: linear-gradient(90deg, var(--c1), var(--c2));
      color: #fff;
      font-size: .78rem;
      font-weight: 500;
      letter-spacing: 0.03em;
    }

    #rvb-spa-carte-2025 .toc a {
      display: inline-block;
      margin: .2rem .4rem .2rem 0;
      padding: .35rem .65rem;
      border: 1px solid var(--ring);
      border-radius: 999px;
      color: inherit;
      text-decoration: none;
      font-weight: 500;
      transition: border-color .2s, color .2s;
    }

    #rvb-spa-carte-2025 .toc a:hover {
      border-color: var(--c2);
      color: var(--c2);
    }

    #rvb-spa-carte-2025 small.mono {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      color: var(--muted);
    }

    #rvb-spa-carte-2025 .note {
      font-size: .9rem;
      color: var(--muted);
      font-weight: 400;
    }
  </style>


  <div class="wrap">
    <header class="panel" style="display:flex;gap:14px;align-items:center;justify-content:space-between;">
      <div style="display:flex;gap:12px;align-items:center;">
        <div>
          <h1>Carte des soins 2025</h1>
          <p class="lead">Bien-être &amp; rituels — version HTML</p>
        </div>
      </div>
      <div>
        <small class="mono">Devise : dh (MAD) • Durées en minutes</small>
      </div>
    </header>

    <!-- Table des matières -->
    <nav class="toc" aria-label="Sommaire" style="margin:14px 0 6px">
      <a href="#rituels">Formule « Rituel » / “Ritual” Formula</a>
      <a href="#grands-soins">Grands soins des bains</a>
      <a href="#massages">Massages Villa Blanche</a>
      <a href="#visage">Soins du visage</a>
      <a href="#abonnement">Abonnement</a>
      <a href="#esthetique">Soins esthétiques</a>
      <a href="#coiffure">Salon de coiffure</a>
    </nav>

    <!-- 1. FORMULE RITUEL -->
    <section id="rituels" class="panel" aria-labelledby="h-rituels">
      <h2 id="h-rituels">FORMULE « RITUEL » / “RITUAL” FORMULA</h2>
      <div class="grid cols-2">
        <div class="item">
          <div class="row">
            <div>
              <div class="title">Hammam eucalyptus</div>
              <div class="subtitle">Eucalyptus hammam</div>
            </div>
            <div class="meta">
              <span class="dur">(30 mins)</span>
              <strong>150 dh</strong>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Hammam, gommage, massage relaxant</div>
              <div class="subtitle">Hammam, scrub, relaxing massage</div>
            </div>
            <div class="meta">
              <span class="dur">(90 mins)</span>
              <strong>600 dh</strong>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Hammam, gommage, masque au Rassoul (*)</div>
              <div class="subtitle">Hammam, scrub, Rassoul mask (natural clay)*</div>
            </div>
            <div class="meta">
              <span class="dur">(30 mins)</span>
              <strong>300 dh</strong>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Hammam, gommage au savon noir (*)</div>
              <div class="subtitle">Hammam, scrub with black soap*</div>
            </div>
            <div class="meta">
              <span class="dur">(30 mins)</span>
              <strong>100 dh</strong>
            </div>
          </div>
        </div>
      </div>
      <p class="note">(*) Également présents dans les “Grands soins des bains”.</p>
    </section>

    <!-- 2. GRANDS SOINS DES BAINS -->
    <section id="grands-soins" class="panel" aria-labelledby="h-grands">
      <h2 id="h-grands">LES GRANDS SOINS DES BAINS / THE GREAT TREATMENTS OF THE BATHS</h2>
      <div class="grid">
        <div class="item">
          <div class="row">
            <div>
              <div class="title">Soin anti-stress</div>
              <div class="subtitle">Hammam, massage ayurvédique à l’huile de sésame chaude</div>
            </div>
            <div class="meta"><span class="dur">(120 mins)</span><strong>1100 dh</strong></div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Soin délice</div>
              <div class="subtitle">Hammam, gommage « délice de sucre », enveloppement au miel, massage parfum thym</div>
            </div>
            <div class="meta"><span class="dur">(120 mins)</span><strong>1100 dh</strong></div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Soin berbère</div>
              <div class="subtitle">Hammam, gommage savon noir, soin cheveux, masque rassoul &amp; rose, massage touareg</div>
            </div>
            <div class="meta"><span class="dur">(120 mins)</span><strong>1100 dh</strong></div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Soin Villa Blanche</div>
              <div class="subtitle">Hammam, gommage beldi, masque amandes, massage relaxant</div>
            </div>
            <div class="meta"><span class="dur">(120–130 mins)</span><strong>1200 dh</strong></div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Soin marin</div>
              <div class="subtitle">Hammam, gommage drainant, enveloppement d’algues, massage touareg</div>
            </div>
            <div class="meta"><span class="dur">(120 mins)</span><strong>1300 dh</strong></div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Soin romantique (SPA privatif, 2 personnes)</div>
              <div class="subtitle">Royal Hammam, enveloppement et masque aux herbes</div>
            </div>
            <div class="meta"><span class="dur">(60 mins)</span><strong>500 dh</strong></div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Cure minceur (6 jours)</div>
              <div class="subtitle">Enveloppements d’algues, massages drainants, gommage au sel de la Mer Morte</div>
            </div>
            <div class="meta"><span class="dur">(6 jours)</span><strong>6000 dh</strong></div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div>
              <div class="title">Le grand rituel oriental</div>
              <div class="subtitle">Hammam, gommage ghassoul, soin du visage, massage relaxant</div>
            </div>
            <div class="meta"><span class="dur">(180 mins)</span><strong>3000 dh</strong></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. MASSAGES -->
    <section id="massages" class="panel" aria-labelledby="h-massages">
      <h2 id="h-massages">LES MASSAGES VILLA BLANCHE / THE MASSAGES</h2>
      <div class="grid cols-2">
        <div class="item"><div class="row"><div><div class="title">Dos pierres chaudes</div><div class="subtitle">Hot stone back massage</div></div><div class="meta"><span class="dur">(20 mins)</span><strong>200 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Jambes</div><div class="subtitle">Legs massage</div></div><div class="meta"><span class="dur">(30 mins)</span><strong>300 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Énergie</div><div class="subtitle">Argan &amp; citron, tonique</div></div><div class="meta"><span class="dur">(40 mins)</span><strong>350 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Trek</div><div class="subtitle">Détente musculaire des jambes</div></div><div class="meta"><span class="dur">(30 mins)</span><strong>350 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Touareg (*)</div></div><div class="meta"><span class="dur">(50 mins)</span><strong>400 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Tonifiant</div></div><div class="meta"><span class="dur">(50 mins)</span><strong>500 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Pieds</div></div><div class="meta"><span class="dur">(50 mins)</span><strong>600 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Tête argan &amp; eau de rose</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>450 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Amincissant (*)</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>600 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">« Sieste au bord de l’oued »</div><div class="subtitle">Tisanes, bougies, musique douce</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>700 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Ayurvédique (*)</div><div class="subtitle">Huile de sésame chaude</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>800 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Royal 4 mains</div><div class="subtitle">2 praticiennes en simultané</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>1000 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Balinais</div><div class="subtitle">Pressions énergétiques, huile d’argan</div></div><div class="meta"><span class="dur">(75 mins)</span><strong>750 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Réflexologie plantaire</div></div><div class="meta"><span class="dur">(40 mins)</span><strong>500 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Tonifiant +</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>650 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Facial ou crânien</div></div><div class="meta"><span class="dur">(40 mins)</span><strong>450 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Tête &amp; visage euphorisant</div><div class="subtitle">Libère tensions crâniennes et faciales</div></div><div class="meta"><span class="dur">(25 mins)</span><strong>250 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Sahraoui</div><div class="subtitle">Pochons de sable chauds</div></div><div class="meta"><span class="dur">(50 mins)</span><strong>500 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Face postérieure (pochons sable)</div></div><div class="meta"><span class="dur">(50 mins)</span><strong>400 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Relaxant doux (huile d’argan) (*)</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>500 dh</strong></div></div></div>
      </div>
      <p class="note">(*) Voir aussi la section “Grands soins des bains”.</p>
    </section>

    <!-- 4. SOINS DU VISAGE -->
    <section id="visage" class="panel" aria-labelledby="h-visage">
      <h2 id="h-visage">SOINS DU VISAGE (*) / FACIAL TREATMENTS (*)</h2>
      <div class="grid cols-2">
        <div class="item"><div class="row"><div><div class="title">Hydratant « Éclat de rose »</div><div class="subtitle">Teint purifié, rafraîchi, drainé</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>600 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Berbère nourrissant</div><div class="subtitle">Eaux florales &amp; huiles de calendula</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>600 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Berbère lissant</div><div class="subtitle">Pépins de figue, masque lait &amp; miel</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>600 dh</strong></div></div></div>
        <div class="item"><div class="row"><div><div class="title">Méhari (messieurs)</div><div class="subtitle">Active la circulation, défatigue les traits</div></div><div class="meta"><span class="dur">(60 mins)</span><strong>700 dh</strong></div></div></div>
        <div class="item" style="grid-column:1/-1"><div class="row"><div><div class="title">Afoulki (“la beauté”)</div><div class="subtitle">Soin visage + manucure &amp; pédicure orientales</div></div><div class="meta"><span class="dur">(120 mins)</span><strong>1100 dh</strong></div></div></div>
      </div>
      <p class="note">(*) Compositions naturelles préparées sur place selon la tradition.</p>
    </section>

    <!-- 5. ABONNEMENT -->
    <section id="abonnement" class="panel" aria-labelledby="h-abonnement">
      <h2 id="h-abonnement">ABONNEMENT / SUBSCRIPTION</h2>
      <div class="item">
        <div class="row">
          <div>
            <div class="title">Accès illimité</div>
            <div class="subtitle">Salle de fitness (tapis, biking, elliptique) • Piscine chauffée avec jets • Jacuzzi • 1 hammam–gommage/sem.</div>
          </div>
          <div class="meta">
            <strong>1500 dh / mois</strong>
            <span class="dur">ou 14000 dh / an</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. ESTHÉTIQUE -->
    <section id="esthetique" class="panel" aria-labelledby="h-esthetique">
      <h2 id="h-esthetique">SOINS ESTHÉTIQUES / AESTHETIC TREATMENT</h2>
      <div class="grid cols-2">
        <div class="item"><div class="row"><div class="title">Épilation lèvres</div><div class="meta"><strong>60 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Sourcils</div><div class="meta"><strong>70 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Avant-bras</div><div class="meta"><strong>100 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Bras</div><div class="meta"><strong>150 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Demi-jambes</div><div class="meta"><strong>100 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Jambes</div><div class="meta"><strong>200 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Bord du maillot</div><div class="meta"><strong>100 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Maillot intégral</div><div class="meta"><strong>200 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Dos–torse</div><div class="meta"><strong>300 dh</strong></div></div></div>
        <div class="item" style="grid-column:1/-1"><div class="row"><div class="title">Épilation complète</div><div class="meta"><strong>700 dh</strong></div></div></div>

        <div class="item"><div class="row"><div class="title">Pose vernis</div><div class="meta"><strong>50 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">French manucure</div><div class="meta"><strong>90 dh</strong></div></div></div>

        <div class="item"><div class="row"><div class="title">Manucure avec soin</div><div class="meta"><strong>200 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Manucure orientale *</div><div class="meta"><strong>250 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Pédicure avec soin</div><div class="meta"><strong>250 dh</strong></div></div></div>
        <div class="item"><div class="row"><div class="title">Pédicure orientale *</div><div class="meta"><strong>300 dh</strong></div></div></div>
      </div>
      <p class="note">* Inspirées des rituels traditionnels orientaux.</p>
    </section>

    <!-- 7. COIFFURE -->
    <section id="coiffure" class="panel" aria-labelledby="h-coiffure">
      <h2 id="h-coiffure">SALON DE COIFFURE DE FRANCK / FRANCK’S HAIR SALON</h2>
      <div class="item">
        <div class="row">
          <div class="title">Épilation aisselles / Underarm hair removal</div>
          <div class="meta"><strong>50 dh</strong></div>
        </div>
      </div>
      <!-- Ajoute ici d’autres prestations coiffure le cas échéant -->
    </section>

    <footer class="panel" style="margin-top:14px">
      <p class="note">Tarifs TTC en dirhams marocains. Programmes et durées susceptibles d’évolution. Pour toute demande, merci d’utiliser le formulaire de contact.</p>
    </footer>

    <!-- Données pour le préremplissage CF7 -->
    <div id="carecard-data"
         data-nom="{{nom}}"
         data-prenom="{{prenom}}"
         data-email="{{email}}"
         data-country="{{country}}"
         style="display:none;"></div>

    <!-- Formulaire CF7 sous la carte -->
    <div id="carecard-form" style="margin-top:22px;">
      {{cf7}}
    </div>
  </div>
</section>
<!-- ====== /CARTE DES SOINS 2025 ====== -->`;

const DEFAULT_THEME = {
  c1: '#0f766e',
  c2: '#0ea5a4',
  ink: '#0b1320',
  muted: '#6b7280',
  bg: '#ffffff',
  panel: '#f8fafc',
  ring: '#e5e7eb',
  item: '#ffffff',
};

const THEME_FIELDS = [
  {
    key: 'c1',
    label: 'Dégradé gauche (C1)',
    hint: 'Couleur principale du dégradé et des badges éventuels.',
  },
  {
    key: 'c2',
    label: 'Dégradé droit (C2)',
    hint: 'Couleur secondaire du dégradé et des survols du sommaire.',
  },
  {
    key: 'ink',
    label: 'Texte principal',
    hint: 'Couleur du texte global de la carte.',
  },
  {
    key: 'muted',
    label: 'Texte secondaire',
    hint: 'Sous-titres, légendes et notes.',
  },
  {
    key: 'bg',
    label: 'Fond général',
    hint: 'Arrière-plan global de la carte générée.',
  },
  {
    key: 'panel',
    label: 'Fond des panneaux',
    hint: 'Cartouches englobant le sommaire et chaque section.',
  },
  {
    key: 'item',
    label: 'Fond des lignes',
    hint: 'Cartes individuelles des prestations.',
  },
  {
    key: 'ring',
    label: 'Contours et séparateurs',
    hint: 'Bordures des panneaux, lignes et puces du sommaire.',
  },
];

const THEME_KEYS = THEME_FIELDS.map((field) => field.key);
const THEME_KEY_SET = new Set(THEME_KEYS);

let state = null;
const headerEditor = document.getElementById('header-editor');
const themeEditor = document.getElementById('theme-editor');
const sectionsEditor = document.getElementById('sections-editor');
const addSectionBtn = document.getElementById('add-section');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const fileInput = document.getElementById('file-input');
const previewFrame = document.getElementById('preview-frame');
const sectionTemplate = document.getElementById('section-template');
const itemTemplate = document.getElementById('item-template');

function createUid() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `section-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}

function initialise() {
  try {
    state = parseTemplate(defaultTemplate);
    renderHeaderEditor();
    renderThemeEditor();
    renderSections();
    updatePreview();
  } catch (error) {
    console.error(error);
    alert('Impossible de charger le modèle initial.');
  }
}

document.addEventListener('DOMContentLoaded', initialise);

function parseTemplate(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const root = doc.querySelector('#rvb-spa-carte-2025');
  if (!root) {
    throw new Error('Section principale introuvable.');
  }

  const theme = { ...DEFAULT_THEME };
  const styleAttr = root.getAttribute('style') || '';
  styleAttr.split(';').forEach((declaration) => {
    const separatorIndex = declaration.indexOf(':');
    if (separatorIndex === -1) return;
    const prop = declaration.slice(0, separatorIndex).trim();
    const rawValue = declaration.slice(separatorIndex + 1);
    if (rawValue == null) return;
    if (!prop.startsWith('--')) return;
    let key = prop.slice(2);
    if (key === 'accent') key = 'c1';
    if (key === 'accentSoft') key = 'c2';
    if (!THEME_KEY_SET.has(key)) return;
    const value = rawValue.trim();
    if (value) {
      theme[key] = value;
    }
  });

  const headerEl = root.querySelector('header.panel');
  const h1 = headerEl?.querySelector('h1');
  const leadNodes = headerEl ? Array.from(headerEl.querySelectorAll('p.lead')) : [];
  const currencyNote = headerEl?.querySelector('small.mono');

  const headerData = {
    cardTitle: (() => {
      if (!h1) return '';
      const badge = h1.querySelector('.badge');
      if (badge && h1.childNodes.length) {
        const firstNode = Array.from(h1.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
        return firstNode ? firstNode.textContent.trim() : h1.textContent.trim();
      }
      return h1.textContent.trim();
    })(),
    lead: leadNodes.length
      ? leadNodes
          .map((node) => node.textContent.trim())
          .filter(Boolean)
          .join('\n')
      : '',
    currencyNote: currencyNote ? currencyNote.textContent.trim() : '',
  };

  const navMap = new Map();
  const navLinks = root.querySelectorAll('nav.toc a[href^="#"]');
  navLinks.forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    navMap.set(id, link.textContent.trim());
  });

  const sections = [];
  root.querySelectorAll('section.panel').forEach((sectionEl) => {
    const sectionId = sectionEl.getAttribute('id') || '';
    const heading = sectionEl.querySelector('h1, h2, h3, h4');
    const headingTag = heading ? heading.tagName.toLowerCase() : 'h2';
    const headingId = heading?.id || '';
    const title = heading ? heading.textContent.trim() : '';
    const noteEl = sectionEl.querySelector(':scope > p.note');
    const note = noteEl ? noteEl.textContent.trim() : '';

    let layout = 'single';
    let itemContainer = null;
    const grid = sectionEl.querySelector(':scope > .grid');
    if (grid) {
      layout = grid.classList.contains('cols-2') ? 'grid-2' : 'grid-1';
      itemContainer = grid;
    } else {
      itemContainer = sectionEl;
    }

    const itemNodes = layout === 'single'
      ? itemContainer.querySelectorAll(':scope > .item')
      : itemContainer.querySelectorAll(':scope > .item');

    const items = Array.from(itemNodes).map((itemEl) => {
      const styleAttr = itemEl.getAttribute('style') || '';
      const spanFull = /1\s*\/\s*-1/.test(styleAttr);
      const titleEl = itemEl.querySelector('.title');
      const subtitleEl = itemEl.querySelector('.subtitle');
      const metaEl = itemEl.querySelector('.meta');
      const durationEl = metaEl?.querySelector('.dur');
      const priceEl = metaEl?.querySelector('strong');
      let metaOrder = 'duration-first';
      if (metaEl) {
        const firstChild = metaEl.querySelector('strong, .dur');
        if (firstChild && firstChild.tagName && firstChild.tagName.toLowerCase() === 'strong') {
          metaOrder = 'price-first';
        }
      }

      return {
        title: titleEl ? titleEl.textContent.trim() : '',
        subtitle: subtitleEl ? subtitleEl.textContent.trim() : '',
        duration: durationEl ? durationEl.textContent.trim() : '',
        price: priceEl ? priceEl.textContent.trim() : '',
        spanFull,
        metaOrder,
      };
    });

    sections.push({
      id: sectionId,
      headingTag,
      headingId,
      title,
      note,
      layout,
      navLabel: navMap.get(sectionId) || title,
      items,
      uid: createUid(),
    });
  });

  const footerNote = root.querySelector('footer.panel p.note')?.textContent.trim() || '';

  return {
    header: headerData,
    sections,
    footerNote,
    theme,
  };
}

function renderHeaderEditor() {
  headerEditor.innerHTML = `
    <h3>En-tête de la carte</h3>
    <label>
      Titre principal
      <input type="text" data-header-field="cardTitle" value="${escapeAttribute(state.header.cardTitle)}" />
    </label>
    <label>
      Sous-titre / accroche (saisir un retour à la ligne pour une seconde phrase)
      <textarea rows="2" data-header-field="lead">${escapeHtml(state.header.lead)}</textarea>
    </label>
    <label>
      Note sur la devise
      <input type="text" data-header-field="currencyNote" value="${escapeAttribute(state.header.currencyNote)}" />
    </label>
    <label>
      Texte du pied de page
      <textarea rows="2" data-footer-note></textarea>
    </label>
  `;
  const footerTextarea = headerEditor.querySelector('textarea[data-footer-note]');
  footerTextarea.value = state.footerNote;
}

function renderThemeEditor() {
  if (!themeEditor) return;
  if (!state.theme) {
    state.theme = { ...DEFAULT_THEME };
  }

  const colorFields = THEME_FIELDS.map((field) => {
    const hintBlock = field.hint ? `<small>${field.hint}</small>` : '';
    return `
      <label class="color-field">
        <span>${field.label}</span>
        <div class="color-inputs">
          <input type="color" data-theme-field="${field.key}" data-theme-input="color" />
          <input type="text" data-theme-field="${field.key}" data-theme-input="text" />
        </div>
        ${hintBlock}
      </label>
    `;
  }).join('\n');

  themeEditor.innerHTML = `
    <h3>Couleurs & apparence</h3>
    <p>Personnalisez les couleurs du dégradé, des textes et des fonds pour adapter la carte à votre charte.</p>
    <div class="theme-grid">
      ${colorFields}
    </div>
  `;

  const resolvedTheme = resolveTheme(state.theme);
  THEME_FIELDS.forEach(({ key }) => {
    const textInput = themeEditor.querySelector(`input[data-theme-field="${key}"][data-theme-input="text"]`);
    const colorInput = themeEditor.querySelector(`input[data-theme-field="${key}"][data-theme-input="color"]`);
    if (textInput) {
      textInput.value = state.theme[key] ?? resolvedTheme[key];
    }
    if (colorInput) {
      const normalised = normaliseColorForInput(resolvedTheme[key])
        ?? normaliseColorForInput(DEFAULT_THEME[key])
        ?? '#000000';
      colorInput.value = normalised;
    }
  });
}

function renderSections(options = {}) {
  const { forceOpenUid = null } = options;
  const previouslyOpen = new Set(
    Array.from(sectionsEditor.querySelectorAll('.section-editor'))
      .filter((section) => section.open)
      .map((section) => section.dataset.uid)
  );

  sectionsEditor.innerHTML = '';
  state.sections.forEach((section, index) => {
    if (!section.uid) {
      section.uid = createUid();
    }

    const sectionNode = sectionTemplate.content.firstElementChild.cloneNode(true);
    sectionNode.dataset.index = index;
    sectionNode.dataset.uid = section.uid;
    if (forceOpenUid && section.uid === forceOpenUid) {
      sectionNode.open = true;
    } else if (previouslyOpen.has(section.uid)) {
      sectionNode.open = true;
    }

    const label = section.title || `Section ${index + 1}`;
    sectionNode.querySelector('.section-label').textContent = label;

    const sectionForm = sectionNode.querySelector('.section-form');
    const idInput = sectionForm.querySelector('input[data-field="id"]');
    idInput.value = section.id || '';
    idInput.setAttribute('aria-label', `Identifiant de la section ${label}`);
    sectionForm.querySelector('input[data-field="title"]').value = section.title || '';
    sectionForm.querySelector('input[data-field="navLabel"]').value = section.navLabel || '';
    sectionForm.querySelector('textarea[data-field="note"]').value = section.note || '';
    const layoutSelect = sectionForm.querySelector('select[data-field="layout"]');
    const layoutValue = ['grid-2', 'grid-1', 'single'].includes(section.layout) ? section.layout : 'grid-2';
    layoutSelect.value = layoutValue;
    if (layoutValue !== section.layout) {
      state.sections[index].layout = layoutValue;
    }

    const itemsContainer = sectionForm.querySelector('[data-role="items"]');
    itemsContainer.innerHTML = '';
    section.items.forEach((item, itemIndex) => {
      const itemNode = itemTemplate.content.firstElementChild.cloneNode(true);
      itemNode.dataset.index = itemIndex;
      itemNode.querySelector('input[data-field="title"]').value = item.title || '';
      itemNode.querySelector('input[data-field="subtitle"]').value = item.subtitle || '';
      itemNode.querySelector('input[data-field="duration"]').value = item.duration || '';
      itemNode.querySelector('input[data-field="price"]').value = item.price || '';
      itemNode.querySelector('input[data-field="spanFull"]').checked = Boolean(item.spanFull);
      itemNode.querySelector('select[data-field="metaOrder"]').value = item.metaOrder || 'duration-first';
      itemsContainer.appendChild(itemNode);
    });

    sectionsEditor.appendChild(sectionNode);
  });
}

function addSection() {
  const index = state.sections.length + 1;
  const newSection = {
    id: `section-${index}`,
    headingTag: 'h2',
    headingId: `h-section-${index}`,
    title: 'Nouvelle section',
    navLabel: 'Nouvelle section',
    note: '',
    layout: 'grid-2',
    items: [
      {
        title: 'Nouvelle prestation',
        subtitle: '',
        duration: '',
        price: '',
        spanFull: false,
        metaOrder: 'duration-first',
      },
    ],
    uid: createUid(),
  };
  state.sections.push(newSection);
  renderSections({ forceOpenUid: newSection.uid });
  updatePreview();
}

function addItem(sectionIndex) {
  state.sections[sectionIndex].items.push({
    title: 'Nouvelle prestation',
    subtitle: '',
    duration: '',
    price: '',
    spanFull: false,
    metaOrder: 'duration-first',
  });
  renderSections();
  updatePreview();
}

function deleteSection(sectionIndex) {
  state.sections.splice(sectionIndex, 1);
  renderSections();
  updatePreview();
}

function deleteItem(sectionIndex, itemIndex) {
  state.sections[sectionIndex].items.splice(itemIndex, 1);
  renderSections();
  updatePreview();
}

function handleSectionInput(event) {
  const target = event.target;
  if (!target.dataset.field) return;
  const sectionNode = target.closest('.section-editor');
  const sectionIndex = Number(sectionNode?.dataset.index ?? -1);
  if (sectionIndex < 0) return;
  const field = target.dataset.field;

  if (target.closest('.item-editor')) {
    const itemNode = target.closest('.item-editor');
    const itemIndex = Number(itemNode.dataset.index);
    if (field === 'spanFull') {
      state.sections[sectionIndex].items[itemIndex][field] = target.checked;
    } else {
      state.sections[sectionIndex].items[itemIndex][field] = target.value;
    }
  } else {
    state.sections[sectionIndex][field] = target.value;
    if (field === 'id') {
      const normalized = target.value.trim();
      state.sections[sectionIndex].headingId = normalized
        ? `h-${normalized.replace(/[^a-z0-9\-]/gi, '-').toLowerCase()}`
        : '';
    }
    if (field === 'title') {
      const label = target.value || `Section ${sectionIndex + 1}`;
      sectionNode.querySelector('.section-label').textContent = label;
      const idInput = sectionNode.querySelector('input[data-field="id"]');
      if (idInput) {
        idInput.setAttribute('aria-label', `Identifiant de la section ${label}`);
      }
    }
  }

  updatePreview();
}

function handleSectionClick(event) {
  const target = event.target;
  if (target.classList.contains('add-item')) {
    const sectionIndex = Number(target.closest('.section-editor').dataset.index);
    addItem(sectionIndex);
  }
  if (target.classList.contains('delete-item')) {
    const sectionEditor = target.closest('.section-editor');
    const itemEditor = target.closest('.item-editor');
    const sectionIndex = Number(sectionEditor.dataset.index);
    const itemIndex = Number(itemEditor.dataset.index);
    deleteItem(sectionIndex, itemIndex);
  }
  if (target.classList.contains('delete-section')) {
    const sectionIndex = Number(target.closest('.section-editor').dataset.index);
    if (confirm('Supprimer cette section ?')) {
      deleteSection(sectionIndex);
    }
  }
}

function handleHeaderInput(event) {
  const target = event.target;
  const field = target.dataset.headerField;
  if (field) {
    state.header[field] = target.value;
    updatePreview();
    return;
  }
  if (target.dataset.footerNote !== undefined) {
    state.footerNote = target.value;
    updatePreview();
  }
}

function handleThemeInput(event) {
  const target = event.target;
  const key = target.dataset.themeField;
  if (!key) return;
  if (!state.theme) {
    state.theme = { ...DEFAULT_THEME };
  }

  if (target.dataset.themeInput === 'color') {
    const value = target.value.trim();
    state.theme[key] = value;
    const textInput = themeEditor?.querySelector(`input[data-theme-field="${key}"][data-theme-input="text"]`);
    if (textInput) {
      textInput.value = value;
    }
  } else {
    const value = target.value.trim();
    state.theme[key] = value;
    const colorInput = themeEditor?.querySelector(`input[data-theme-field="${key}"][data-theme-input="color"]`);
    if (colorInput) {
      const normalised = normaliseColorForInput(value);
      if (normalised) {
        colorInput.value = normalised;
      }
    }
  }

  updatePreview();
}

function escapeHtml(value) {
  if (value == null) return '';
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function normaliseColorForInput(value) {
  if (!value) return null;
  const trimmed = value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(trimmed)) {
    return trimmed.toLowerCase();
  }
  if (/^#[0-9a-fA-F]{3}$/.test(trimmed)) {
    return `#${trimmed
      .slice(1)
      .split('')
      .map((char) => char + char)
      .join('')
      .toLowerCase()}`;
  }
  return null;
}

function resolveTheme(theme = {}) {
  const resolved = {};
  THEME_FIELDS.forEach(({ key }) => {
    const raw = theme[key];
    if (typeof raw === 'string') {
      const trimmed = raw.trim();
      resolved[key] = trimmed || DEFAULT_THEME[key];
    } else if (raw != null && raw !== '') {
      resolved[key] = String(raw);
    } else {
      resolved[key] = DEFAULT_THEME[key];
    }
  });
  return resolved;
}

function generateHTML(state) {
  const themeValues = resolveTheme(state.theme);
  const cssVarLines = THEME_KEYS.map((key) => `         --${key}:${themeValues[key]};`);
  const rootStyle = `
${cssVarLines.join('\n')}
         font-family:'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
         color:var(--ink);
         background:var(--bg);`;

  const navLinks = state.sections
    .map((section) => `      <a href="#${escapeHtml(section.id)}">${escapeHtml(section.navLabel || section.title)}</a>`)
    .join('\n');

  const sectionsHtml = state.sections
    .map((section) => generateSectionHtml(section))
    .join('\n\n');

  const leadLines = (state.header.lead || '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  const leadHtml = leadLines.length
    ? `        <p class="lead">${leadLines.map((line) => escapeHtml(line)).join('<br />')}</p>\n`
    : '';
  const currencyNoteHtml = state.header.currencyNote
    ? `      <div>\n        <small class="mono">${escapeHtml(state.header.currencyNote)}</small>\n      </div>\n`
    : '';

  return `<!-- ====== CARTE DES SOINS 2025 — RVB SPA (HTML template avec placeholders) ====== -->
<section id="rvb-spa-carte-2025" lang="fr" style="${escapeAttribute(rootStyle)}">

  <!-- Import de la police Montserrat -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    #rvb-spa-carte-2025 * {
      box-sizing: border-box;
      font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    }

    #rvb-spa-carte-2025 .wrap {
      max-width: 1000px;
      margin: 0 auto;
      padding: 24px;
    }

    #rvb-spa-carte-2025 h1 {
      font-size: clamp(1.6rem, 2vw, 2rem);
      margin: .2rem 0 .8rem;
      font-weight: 600;
    }

    #rvb-spa-carte-2025 h2 {
      font-size: clamp(1.25rem, 1.8vw, 1.5rem);
      margin: 1.4rem 0 .6rem;
      font-weight: 600;
    }

    #rvb-spa-carte-2025 h3 {
      font-size: 1.05rem;
      margin: 1rem 0 .4rem;
      font-weight: 500;
    }

    #rvb-spa-carte-2025 p.lead {
      color: var(--muted);
      margin: .1rem 0 .35rem;
      font-weight: 400;
    }

    #rvb-spa-carte-2025 .panel {
      background: var(--panel);
      border: 1px solid var(--ring);
      border-radius: 14px;
      padding: 16px;
    }

    #rvb-spa-carte-2025 .grid {
      display: grid;
      gap: 12px;
    }

    @media (min-width:780px) {
      #rvb-spa-carte-2025 .grid.cols-2 {
        grid-template-columns: 1fr 1fr;
      }
    }

    #rvb-spa-carte-2025 .item {
      background: var(--item, #fff);
      border: 1px solid var(--ring);
      border-radius: 12px;
      padding: 14px;
    }

    #rvb-spa-carte-2025 .row {
      display: flex;
      gap: 10px;
      justify-content: space-between;
      align-items: flex-start;
    }

    #rvb-spa-carte-2025 .title {
      font-weight: 600;
    }

    #rvb-spa-carte-2025 .subtitle {
      color: var(--muted);
      font-size: .95rem;
      font-weight: 400;
    }

    #rvb-spa-carte-2025 .meta {
      white-space: nowrap;
      text-align: right;
      font-variant-numeric: tabular-nums;
    }

    #rvb-spa-carte-2025 .meta .dur {
      color: var(--muted);
      display: block;
      font-weight: 400;
    }

    #rvb-spa-carte-2025 .badge {
      display: inline-block;
      padding: .2rem .5rem;
      border-radius: 8px;
      background: linear-gradient(90deg, var(--c1), var(--c2));
      color: #fff;
      font-size: .78rem;
      font-weight: 500;
      letter-spacing: 0.03em;
    }

    #rvb-spa-carte-2025 .toc a {
      display: inline-block;
      margin: .2rem .4rem .2rem 0;
      padding: .35rem .65rem;
      border: 1px solid var(--ring);
      border-radius: 999px;
      color: inherit;
      text-decoration: none;
      font-weight: 500;
      transition: border-color .2s, color .2s;
    }

    #rvb-spa-carte-2025 .toc a:hover {
      border-color: var(--c2);
      color: var(--c2);
    }

    #rvb-spa-carte-2025 small.mono {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      color: var(--muted);
    }

    #rvb-spa-carte-2025 .note {
      font-size: .9rem;
      color: var(--muted);
      font-weight: 400;
    }
  </style>


  <div class="wrap">
    <header class="panel" style="display:flex;gap:14px;align-items:center;justify-content:space-between;">
      <div style="display:flex;gap:12px;align-items:center;">
        <div>
          <h1>${escapeHtml(state.header.cardTitle)}</h1>
${leadHtml}        </div>
      </div>
${currencyNoteHtml}    </header>

    <!-- Table des matières -->
    <nav class="toc" aria-label="Sommaire" style="margin:14px 0 6px">
${navLinks}
    </nav>

${sectionsHtml}

    <footer class="panel" style="margin-top:14px">
      <p class="note">${escapeHtml(state.footerNote)}</p>
    </footer>

    <!-- Données pour le préremplissage CF7 -->
    <div id="carecard-data"
         data-nom="{{nom}}"
         data-prenom="{{prenom}}"
         data-email="{{email}}"
         data-country="{{country}}"
         style="display:none;"></div>

    <!-- Formulaire CF7 sous la carte -->
    <div id="carecard-form" style="margin-top:22px;">
      {{cf7}}
    </div>
  </div>
</section>
<!-- ====== /CARTE DES SOINS 2025 ====== -->`;
}

function generateSectionHtml(section) {
  const headingIdAttr = section.headingId ? ` id="${escapeHtml(section.headingId)}"` : '';
  const ariaLabelledBy = section.headingId ? ` aria-labelledby="${escapeHtml(section.headingId)}"` : '';
  const headingTag = section.headingTag || 'h2';

  const itemsHtml = section.items
    .map((item) => generateItemHtml(item, section.layout))
    .join('\n');

  let contentBlock = itemsHtml;
  if (section.layout === 'grid-2' || section.layout === 'grid-1') {
    const classes = section.layout === 'grid-2' ? 'grid cols-2' : 'grid';
    contentBlock = [`      <div class="${classes}">`, itemsHtml, '      </div>']
      .filter(Boolean)
      .join('\n');
  }

  const lines = [
    `    <section id="${escapeHtml(section.id)}" class="panel"${ariaLabelledBy}>`,
    `      <${headingTag}${headingIdAttr}>${escapeHtml(section.title)}</${headingTag}>`,
    contentBlock,
  ];

  if (section.note) {
    lines.push(`      <p class="note">${escapeHtml(section.note)}</p>`);
  }

  lines.push('    </section>');

  return lines.filter(Boolean).join('\n');
}

function generateItemHtml(item, layout) {
  const styleAttr = item.spanFull && layout !== 'single' ? ' style="grid-column:1/-1"' : '';
  const metaParts = [];
  const order = item.metaOrder === 'price-first' ? 'price-first' : 'duration-first';
  if (order === 'price-first') {
    if (item.price) metaParts.push(`<strong>${escapeHtml(item.price)}</strong>`);
    if (item.duration) metaParts.push(`<span class="dur">${escapeHtml(item.duration)}</span>`);
  } else {
    if (item.duration) metaParts.push(`<span class="dur">${escapeHtml(item.duration)}</span>`);
    if (item.price) metaParts.push(`<strong>${escapeHtml(item.price)}</strong>`);
  }
  const lines = [
    `        <div class="item"${styleAttr}>`,
    '          <div class="row">',
    '            <div>',
    `              <div class="title">${escapeHtml(item.title)}</div>`,
  ];

  if (item.subtitle) {
    lines.push(`              <div class="subtitle">${escapeHtml(item.subtitle)}</div>`);
  }

  lines.push('            </div>');

  if (metaParts.length) {
    lines.push('            <div class="meta">');
    metaParts.forEach((part) => {
      lines.push(`              ${part}`);
    });
    lines.push('            </div>');
  }

  lines.push('          </div>');
  lines.push('        </div>');

  return lines.join('\n');
}

function updatePreview() {
  const html = generateHTML(state);
  previewFrame.srcdoc = html;
}

function downloadHtml() {
  const html = generateHTML(state);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'carte-soins-rvb-spa.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function resetTemplate() {
  if (!confirm('Réinitialiser la carte au modèle original ?')) return;
  state = parseTemplate(defaultTemplate);
  renderHeaderEditor();
  renderThemeEditor();
  renderSections();
  updatePreview();
}

function handleFileUpload(event) {
  const [file] = event.target.files;
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = parseTemplate(String(reader.result));
      renderHeaderEditor();
      renderThemeEditor();
      renderSections();
      updatePreview();
    } catch (error) {
      console.error(error);
      alert('Le fichier sélectionné ne correspond pas au gabarit attendu.');
    }
  };
  reader.readAsText(file);
}

headerEditor.addEventListener('input', handleHeaderInput);
if (themeEditor) {
  themeEditor.addEventListener('input', handleThemeInput);
}
sectionsEditor.addEventListener('input', handleSectionInput);
sectionsEditor.addEventListener('click', handleSectionClick);
addSectionBtn.addEventListener('click', addSection);
downloadBtn.addEventListener('click', downloadHtml);
resetBtn.addEventListener('click', resetTemplate);
fileInput.addEventListener('change', handleFileUpload);
