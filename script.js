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

    #rvb-spa-carte-2025 .subtitle .lang {
      display: block;
    }

    #rvb-spa-carte-2025 .subtitle .lang + .lang {
      margin-top: .35rem;
    }

    #rvb-spa-carte-2025 .subtitle ul,
    #rvb-spa-carte-2025 .subtitle ol {
      margin: .4rem 0 0;
      padding-left: 1.1rem;
    }

    #rvb-spa-carte-2025 .subtitle li {
      margin: .2rem 0;
      line-height: 1.45;
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

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

function createEmptyLangText() {
  return LANGUAGES.reduce((acc, { code }) => {
    acc[code] = '';
    return acc;
  }, {});
}

function normaliseLangValue(value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const result = createEmptyLangText();
    LANGUAGES.forEach(({ code }) => {
      const raw = value[code];
      result[code] = raw != null ? String(raw) : '';
    });
    return result;
  }
  const text = value != null ? String(value) : '';
  const trimmed = text.trim();
  const result = createEmptyLangText();
  LANGUAGES.forEach(({ code }) => {
    result[code] = trimmed;
  });
  return result;
}

function hasLangValue(value) {
  const normalised = normaliseLangValue(value);
  return LANGUAGES.some(({ code }) => (normalised[code] || '').trim().length > 0);
}

function splitBilingualText(text) {
  const result = createEmptyLangText();
  if (!text) {
    return result;
  }
  const trimmed = text.trim();
  const match = trimmed.match(/^(.*?)\s*\/\s*(.*)$/s);
  if (match) {
    result.fr = match[1].trim();
    result.en = match[2].trim();
  } else {
    LANGUAGES.forEach(({ code }) => {
      result[code] = trimmed;
    });
  }
  return result;
}

function parseLangNode(node) {
  const fallback = createEmptyLangText();
  if (!node) {
    return fallback;
  }
  let found = false;
  const result = createEmptyLangText();
  LANGUAGES.forEach(({ code }) => {
    const span = node.querySelector(`:scope > .lang.lang-${code}`);
    if (span) {
      result[code] = span.textContent.trim();
      found = true;
    }
  });
  if (found) {
    return result;
  }
  const textContent = node.textContent.trim();
  if (!textContent) {
    return fallback;
  }
  return normaliseLangValue(splitBilingualText(textContent));
}

function mergeLangNodes(accumulator, addition) {
  const acc = normaliseLangValue(accumulator);
  const add = normaliseLangValue(addition);
  const result = createEmptyLangText();
  LANGUAGES.forEach(({ code }) => {
    const accValue = acc[code] ? acc[code].trim() : '';
    const addValue = add[code] ? add[code].trim() : '';
    if (accValue && addValue) {
      result[code] = `${accValue}\n${addValue}`;
    } else {
      result[code] = accValue || addValue;
    }
  });
  return result;
}

const ALLOWED_RICH_TEXT_TAGS = new Set(['BR', 'UL', 'OL', 'LI', 'STRONG', 'EM', 'P']);

function sanitizeRichText(html) {
  if (!html) {
    return '';
  }
  const template = document.createElement('template');
  template.innerHTML = html;

  const convertTag = (element, newTag) => {
    const replacement = document.createElement(newTag);
    while (element.firstChild) {
      replacement.appendChild(element.firstChild);
    }
    element.replaceWith(replacement);
    return replacement;
  };

  const unwrapNode = (element) => {
    const parent = element.parentNode;
    if (!parent) return;
    while (element.firstChild) {
      parent.insertBefore(element.firstChild, element);
    }
    element.remove();
  };

  const walk = (node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        const tag = child.tagName;
        if (tag === 'B') {
          child = convertTag(child, 'strong');
        } else if (tag === 'I') {
          child = convertTag(child, 'em');
        } else if (tag === 'DIV') {
          child = convertTag(child, 'p');
        }

        if (child.tagName === 'SPAN') {
          unwrapNode(child);
          return;
        }

        if (!ALLOWED_RICH_TEXT_TAGS.has(child.tagName)) {
          unwrapNode(child);
          return;
        }

        Array.from(child.attributes).forEach((attr) => {
          child.removeAttribute(attr.name);
        });
        walk(child);
        if ((child.tagName === 'P' || child.tagName === 'LI') && child.textContent.replace(/\u00a0/g, ' ').trim() === '') {
          child.remove();
        }
      } else if (child.nodeType === Node.COMMENT_NODE) {
        child.remove();
      }
    });
  };

  walk(template.content);

  const cleaned = template.innerHTML
    .replace(/\u00a0/g, ' ')
    .replace(/\s+<\/([a-z]+)>/gi, '</$1>')
    .replace(/<(strong|em|li|p)>\s+/gi, '<$1>')
    .trim();

  return cleaned;
}

function formatLangValue(value, options = {}) {
  const { multiline = false, richText = false } = options;
  const raw = value ?? '';
  if (richText) {
    return raw;
  }
  const safe = escapeHtml(raw);
  if (!multiline) {
    return safe;
  }
  return safe.replace(/\r?\n/g, '<br />');
}

function renderLangInline(value, options = {}) {
  const { strong = false, multiline = false, wrapperTag = 'span', className = '', richText = false } = options;
  const normalised = normaliseLangValue(value);
  return LANGUAGES.map(({ code }) => {
    const classes = ['lang', `lang-${code}`];
    if (className) {
      classes.push(className);
    }
    const content = formatLangValue(normalised[code], { multiline, richText });
    const inner = strong ? `<strong>${content}</strong>` : content;
    return `<${wrapperTag} class="${classes.join(' ')}">${inner}</${wrapperTag}>`;
  }).join('');
}

function parseLangNodeRich(node) {
  const fallback = createEmptyLangText();
  if (!node) {
    return fallback;
  }
  let found = false;
  const result = createEmptyLangText();
  LANGUAGES.forEach(({ code }) => {
    const span = node.querySelector(`:scope > .lang.lang-${code}`);
    if (span) {
      result[code] = sanitizeRichText(span.innerHTML.trim());
      found = true;
    }
  });
  if (found) {
    return result;
  }
  const htmlContent = sanitizeRichText(node.innerHTML.trim());
  if (!htmlContent) {
    return fallback;
  }
  if (!/[<>]/.test(htmlContent)) {
    return normaliseLangValue(splitBilingualText(node.textContent.trim()));
  }
  return normaliseLangValue(htmlContent);
}

function cloneLangValue(value) {
  const normalised = normaliseLangValue(value);
  const clone = createEmptyLangText();
  LANGUAGES.forEach(({ code }) => {
    clone[code] = normalised[code];
  });
  return clone;
}

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
const saveBtn = document.getElementById('save-btn');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const fileInput = document.getElementById('file-input');
const previewFrame = document.getElementById('preview-frame');
const sectionTemplate = document.getElementById('section-template');
const itemTemplate = document.getElementById('item-template');

const STORAGE_KEY = 'carecard-editor-state';
const storageAvailable = isStorageAvailable();

function isStorageAvailable() {
  if (typeof window === 'undefined' || !('localStorage' in window)) {
    return false;
  }
  try {
    const testKey = '__carecard_storage_test__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    console.warn('Le stockage local est indisponible :', error);
    return false;
  }
}

function getSavedSnapshot() {
  if (!storageAvailable) {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  } catch (error) {
    console.warn('Impossible de lire la sauvegarde locale :', error);
    clearSavedWork();
    return null;
  }
}

function clearSavedWork() {
  if (!storageAvailable) {
    return;
  }
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Impossible de supprimer la sauvegarde locale :', error);
  }
}

function createUid() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `section-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}

function hydrateRestoredState(raw) {
  if (!raw || typeof raw !== 'object') {
    return null;
  }

  const headerSource = raw.header || {};
  const sectionsSource = Array.isArray(raw.sections) ? raw.sections : [];
  const footerSource = raw.footerNote;
  const themeSource = raw.theme || {};

  const hydrated = {
    header: {
      cardTitle: cloneLangValue(headerSource.cardTitle ?? createEmptyLangText()),
      lead: cloneLangValue(headerSource.lead ?? createEmptyLangText()),
      currencyNote: cloneLangValue(headerSource.currencyNote ?? createEmptyLangText()),
    },
    sections: sectionsSource.map((section, index) => {
      const safeSection = section && typeof section === 'object' ? section : {};
      const items = Array.isArray(safeSection.items) ? safeSection.items : [];
      return {
        id: safeSection.id ?? `section-${index + 1}`,
        headingTag: safeSection.headingTag || 'h2',
        headingId: safeSection.headingId || '',
        title: cloneLangValue(safeSection.title ?? createEmptyLangText()),
        note: cloneLangValue(safeSection.note ?? createEmptyLangText()),
        layout: ['grid-2', 'grid-1', 'single'].includes(safeSection.layout) ? safeSection.layout : 'grid-2',
        navLabel: cloneLangValue(safeSection.navLabel ?? safeSection.title ?? createEmptyLangText()),
        items: items.map((item) => {
          const safeItem = item && typeof item === 'object' ? item : {};
          const description = cloneLangValue(safeItem.description ?? createEmptyLangText());
          LANGUAGES.forEach(({ code }) => {
            description[code] = sanitizeRichText(description[code]);
          });
          return {
            title: cloneLangValue(safeItem.title ?? createEmptyLangText()),
            description,
            duration: safeItem.duration ? String(safeItem.duration) : '',
            price: safeItem.price ? String(safeItem.price) : '',
            spanFull: Boolean(safeItem.spanFull),
            metaOrder: safeItem.metaOrder === 'price-first' ? 'price-first' : 'duration-first',
          };
        }),
        uid: safeSection.uid || createUid(),
      };
    }),
    footerNote: cloneLangValue(footerSource ?? createEmptyLangText()),
    theme: { ...DEFAULT_THEME },
  };

  Object.entries(themeSource).forEach(([key, value]) => {
    if (THEME_KEY_SET.has(key)) {
      hydrated.theme[key] = String(value);
    }
  });

  return hydrated;
}

function initialise() {
  try {
    let initialState = null;
    const snapshot = getSavedSnapshot();
    if (snapshot) {
      const shouldRestore = confirm('Une sauvegarde locale a été trouvée. Souhaitez-vous la restaurer ?');
      if (shouldRestore) {
        initialState = hydrateRestoredState(snapshot);
        if (!initialState) {
          console.warn('La sauvegarde locale est invalide et sera ignorée.');
          clearSavedWork();
        }
      } else {
        clearSavedWork();
      }
    }
    if (!initialState) {
      initialState = parseTemplate(defaultTemplate);
    }
    state = initialState;
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
    cardTitle: cloneLangValue(parseLangNode(h1)),
    lead: (() => {
      if (!leadNodes.length) {
        return createEmptyLangText();
      }
      return leadNodes.reduce((acc, node) => mergeLangNodes(acc, parseLangNode(node)), createEmptyLangText());
    })(),
    currencyNote: cloneLangValue(parseLangNode(currencyNote)),
  };

  const navMap = new Map();
  const navLinks = root.querySelectorAll('nav.toc a[href^="#"]');
  navLinks.forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    navMap.set(id, cloneLangValue(parseLangNode(link)));
  });

  const sections = [];
  root.querySelectorAll('section.panel').forEach((sectionEl) => {
    const sectionId = sectionEl.getAttribute('id') || '';
    const heading = sectionEl.querySelector('h1, h2, h3, h4');
    const headingTag = heading ? heading.tagName.toLowerCase() : 'h2';
    const headingId = heading?.id || '';
    const title = cloneLangValue(parseLangNode(heading));
    const noteEl = sectionEl.querySelector(':scope > p.note');
    const note = cloneLangValue(parseLangNode(noteEl));

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
        title: cloneLangValue(parseLangNode(titleEl)),
        description: cloneLangValue(parseLangNodeRich(subtitleEl)),
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
      navLabel: cloneLangValue(navMap.get(sectionId) || title),
      items,
      uid: createUid(),
    });
  });

  const footerNote = cloneLangValue(parseLangNode(root.querySelector('footer.panel p.note')));

  return {
    header: headerData,
    sections,
    footerNote,
    theme,
  };
}

function renderHeaderEditor() {
  const buildField = (label, field, type = 'input', rows = 2) => {
    const source = field === 'footerNote' ? state.footerNote : state.header[field];
    const controls = LANGUAGES.map(({ code, label: langLabel, flag }) => {
      const value = source?.[code] ?? '';
      if (type === 'textarea') {
        return `
      <label class="lang-field">
        <span class="lang-flag" aria-hidden="true">${flag}</span>
        <span>${langLabel}</span>
        <textarea rows="${rows}" data-header-field="${field}.${code}">${escapeHtml(value)}</textarea>
      </label>`;
      }
      return `
      <label class="lang-field">
        <span class="lang-flag" aria-hidden="true">${flag}</span>
        <span>${langLabel}</span>
        <input type="text" data-header-field="${field}.${code}" value="${escapeAttribute(value)}" />
      </label>`;
    }).join('');

    return `
    <div class="multilang-field">
      <span class="group-label">${label}</span>
${controls}
    </div>`;
  };

  headerEditor.innerHTML = `
    <h3>En-tête de la carte</h3>
    ${buildField('Titre principal', 'cardTitle')}
    ${buildField('Sous-titre / accroche (retours à la ligne possibles)', 'lead', 'textarea', 2)}
    ${buildField('Note sur la devise', 'currencyNote')}
    ${buildField('Texte du pied de page', 'footerNote', 'textarea', 2)}
  `;
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

    const titleValues = normaliseLangValue(section.title);
    const label = titleValues.fr || titleValues.en || `Section ${index + 1}`;
    sectionNode.querySelector('.section-label').textContent = label;

    const sectionForm = sectionNode.querySelector('.section-form');
    const idInput = sectionForm.querySelector('input[data-field="id"]');
    idInput.value = section.id || '';
    idInput.setAttribute('aria-label', `Identifiant de la section ${label}`);
    LANGUAGES.forEach(({ code }) => {
      const titleInput = sectionForm.querySelector(`input[data-field="title.${code}"]`);
      if (titleInput) {
        titleInput.value = section.title?.[code] ?? '';
      }
      const navInput = sectionForm.querySelector(`input[data-field="navLabel.${code}"]`);
      if (navInput) {
        navInput.value = section.navLabel?.[code] ?? '';
      }
      const noteArea = sectionForm.querySelector(`textarea[data-field="note.${code}"]`);
      if (noteArea) {
        noteArea.value = section.note?.[code] ?? '';
      }
    });
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
      LANGUAGES.forEach(({ code }) => {
        const titleInput = itemNode.querySelector(`input[data-field="title.${code}"]`);
        if (titleInput) {
          titleInput.value = item.title?.[code] ?? '';
        }
        const descEditor = itemNode.querySelector(`.rich-text-editor[data-field="description.${code}"]`);
        if (descEditor) {
          const value = item.description?.[code] ?? '';
          descEditor.innerHTML = value;
        }
      });
      itemNode.querySelector('input[data-field="duration"]').value = item.duration || '';
      itemNode.querySelector('input[data-field="price"]').value = item.price || '';
      itemNode.querySelector('input[data-field="spanFull"]').checked = Boolean(item.spanFull);
      itemNode.querySelector('select[data-field="metaOrder"]').value = item.metaOrder || 'duration-first';
      const moveUpBtn = itemNode.querySelector('.move-item-up');
      if (moveUpBtn) {
        moveUpBtn.disabled = itemIndex === 0;
      }
      const moveDownBtn = itemNode.querySelector('.move-item-down');
      if (moveDownBtn) {
        moveDownBtn.disabled = itemIndex === section.items.length - 1;
      }
      itemsContainer.appendChild(itemNode);
    });

    const moveUpBtn = sectionNode.querySelector('.move-section-up');
    if (moveUpBtn) {
      moveUpBtn.disabled = index === 0;
    }
    const moveDownBtn = sectionNode.querySelector('.move-section-down');
    if (moveDownBtn) {
      moveDownBtn.disabled = index === state.sections.length - 1;
    }

    sectionsEditor.appendChild(sectionNode);
  });
}

function addSection() {
  const index = state.sections.length + 1;
  const newSection = {
    id: `section-${index}`,
    headingTag: 'h2',
    headingId: `h-section-${index}`,
    title: (() => {
      const value = createEmptyLangText();
      value.fr = 'Nouvelle section';
      value.en = 'New section';
      return value;
    })(),
    navLabel: (() => {
      const value = createEmptyLangText();
      value.fr = 'Nouvelle section';
      value.en = 'New section';
      return value;
    })(),
    note: createEmptyLangText(),
    layout: 'grid-2',
    items: [
      {
        title: (() => {
          const value = createEmptyLangText();
          value.fr = 'Nouvelle prestation';
          value.en = 'New treatment';
          return value;
        })(),
        description: createEmptyLangText(),
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
    title: (() => {
      const value = createEmptyLangText();
      value.fr = 'Nouvelle prestation';
      value.en = 'New treatment';
      return value;
    })(),
    description: createEmptyLangText(),
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

function moveItem(sectionIndex, itemIndex, direction) {
  const section = state.sections[sectionIndex];
  if (!section) return;
  const targetIndex = itemIndex + direction;
  if (targetIndex < 0 || targetIndex >= section.items.length) {
    return;
  }
  const [item] = section.items.splice(itemIndex, 1);
  section.items.splice(targetIndex, 0, item);
  const forceOpenUid = section?.uid ?? null;
  renderSections({ forceOpenUid });
  updatePreview();
}

function moveSection(sectionIndex, direction) {
  const targetIndex = sectionIndex + direction;
  if (targetIndex < 0 || targetIndex >= state.sections.length) {
    return;
  }
  const [section] = state.sections.splice(sectionIndex, 1);
  state.sections.splice(targetIndex, 0, section);
  const forceOpenUid = section?.uid ?? null;
  renderSections({ forceOpenUid });
  updatePreview();
}

function handleSectionInput(event) {
  const target = event.target;
  if (!target.dataset.field) return;
  const sectionNode = target.closest('.section-editor');
  const sectionIndex = Number(sectionNode?.dataset.index ?? -1);
  if (sectionIndex < 0) return;
  const fieldPath = target.dataset.field;
  if (!fieldPath) return;
  const [field, lang] = fieldPath.split('.');
  const isRichText = target.dataset.richText === 'true';
  const rawValue = target.isContentEditable ? target.innerHTML : target.value;
  const nextValue = isRichText ? sanitizeRichText(rawValue) : rawValue;

  if (target.closest('.item-editor')) {
    const itemNode = target.closest('.item-editor');
    const itemIndex = Number(itemNode.dataset.index);
    const item = state.sections[sectionIndex].items[itemIndex];
    if (field === 'spanFull') {
      state.sections[sectionIndex].items[itemIndex][field] = target.checked;
    } else if (lang) {
      item[field] = cloneLangValue(item[field]);
      item[field][lang] = nextValue;
    } else {
      state.sections[sectionIndex].items[itemIndex][field] = nextValue;
    }
  } else {
    if (lang) {
      state.sections[sectionIndex][field] = cloneLangValue(state.sections[sectionIndex][field]);
      state.sections[sectionIndex][field][lang] = nextValue;
    } else {
      state.sections[sectionIndex][field] = nextValue;
    }
    if (field === 'id') {
      const normalized = nextValue.trim();
      state.sections[sectionIndex].headingId = normalized
        ? `h-${normalized.replace(/[^a-z0-9\-]/gi, '-').toLowerCase()}`
        : '';
    }
    if (field === 'title') {
      const titleValues = normaliseLangValue(state.sections[sectionIndex].title);
      const label = titleValues.fr || titleValues.en || `Section ${sectionIndex + 1}`;
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
  const button = event.target.closest('button');
  if (!button || !sectionsEditor.contains(button)) {
    return;
  }

  const command = button.dataset.richCommand;
  if (command) {
    event.preventDefault();
    const richField = button.closest('.rich-text-field');
    const editor = richField?.querySelector('.rich-text-editor');
    if (editor) {
      editor.focus();
      document.execCommand(command, false, null);
      editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
    return;
  }

  if (button.classList.contains('add-item')) {
    const sectionIndex = Number(button.closest('.section-editor')?.dataset.index ?? -1);
    if (sectionIndex >= 0) {
      addItem(sectionIndex);
    }
    return;
  }

  if (button.classList.contains('delete-item')) {
    const sectionEditor = button.closest('.section-editor');
    const itemEditor = button.closest('.item-editor');
    const sectionIndex = Number(sectionEditor?.dataset.index ?? -1);
    const itemIndex = Number(itemEditor?.dataset.index ?? -1);
    if (sectionIndex >= 0 && itemIndex >= 0) {
      deleteItem(sectionIndex, itemIndex);
    }
    return;
  }

  if (button.classList.contains('move-item-up') || button.classList.contains('move-item-down')) {
    event.preventDefault();
    event.stopPropagation();
    const sectionEditor = button.closest('.section-editor');
    const itemEditor = button.closest('.item-editor');
    const sectionIndex = Number(sectionEditor?.dataset.index ?? -1);
    const itemIndex = Number(itemEditor?.dataset.index ?? -1);
    if (sectionIndex >= 0 && itemIndex >= 0) {
      const direction = button.classList.contains('move-item-up') ? -1 : 1;
      moveItem(sectionIndex, itemIndex, direction);
    }
    return;
  }

  if (button.classList.contains('delete-section')) {
    event.preventDefault();
    event.stopPropagation();
    const sectionIndex = Number(button.closest('.section-editor')?.dataset.index ?? -1);
    if (sectionIndex >= 0 && confirm('Supprimer cette section ?')) {
      deleteSection(sectionIndex);
    }
    return;
  }

  if (button.classList.contains('move-section-up') || button.classList.contains('move-section-down')) {
    event.preventDefault();
    event.stopPropagation();
    const sectionIndex = Number(button.closest('.section-editor')?.dataset.index ?? -1);
    if (sectionIndex >= 0) {
      const direction = button.classList.contains('move-section-up') ? -1 : 1;
      moveSection(sectionIndex, direction);
    }
  }
}

function handleHeaderInput(event) {
  const target = event.target;
  const fieldPath = target.dataset.headerField;
  if (!fieldPath) return;
  const [field, lang] = fieldPath.split('.');
  if (field === 'footerNote' && lang) {
    state.footerNote = cloneLangValue(state.footerNote);
    state.footerNote[lang] = target.value;
  } else if (lang) {
    state.header[field] = cloneLangValue(state.header[field]);
    state.header[field][lang] = target.value;
  } else {
    state.header[field] = target.value;
  }
  updatePreview();
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
    .map((section) => {
      const navSource = hasLangValue(section.navLabel) ? section.navLabel : section.title;
      return `      <a href="#${escapeHtml(section.id)}">${renderLangInline(navSource)}</a>`;
    })
    .join('\n');

  const sectionsHtml = state.sections
    .map((section) => generateSectionHtml(section))
    .join('\n\n');

  const leadHtml = hasLangValue(state.header.lead)
    ? `          <p class="lead">${renderLangInline(state.header.lead, { multiline: true })}</p>\n`
    : '';
  const currencyNoteHtml = hasLangValue(state.header.currencyNote)
    ? `      <div>\n        <small class="mono">${renderLangInline(state.header.currencyNote)}</small>\n      </div>\n`
    : '';
  const footerNoteContent = hasLangValue(state.footerNote)
    ? `      <p class="note">${renderLangInline(state.footerNote, { multiline: true })}</p>\n`
    : '';

  return `<!-- ====== CARTE DES SOINS 2025 — RVB SPA (HTML template avec placeholders) ====== -->
<section id="rvb-spa-carte-2025" lang="fr" data-lang="fr"
  style="${rootStyle}">

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

    #rvb-spa-carte-2025[data-lang="fr"] .lang-en {
      display: none;
    }

    #rvb-spa-carte-2025[data-lang="en"] .lang-fr {
      display: none;
    }

    #rvb-spa-carte-2025 .lang-switch {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      margin: 16px 0 10px;
    }

    #rvb-spa-carte-2025 .lang-switch button {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.75rem;
      border-radius: 999px;
      border: 1px solid var(--ring);
      background: var(--item, #fff);
      color: inherit;
      cursor: pointer;
      font-size: 0.92rem;
      font-weight: 600;
      transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    }

    #rvb-spa-carte-2025 .lang-switch button[aria-pressed="true"] {
      background: linear-gradient(120deg, var(--c1), var(--c2));
      border-color: transparent;
      color: #fff;
    }

    #rvb-spa-carte-2025 .lang-switch button .flag {
      font-size: 1.1rem;
      line-height: 1;
    }
  </style>


  <div class="wrap">
    <header class="panel" style="display:flex;gap:14px;align-items:center;justify-content:space-between;">
      <div style="display:flex;gap:12px;align-items:center;">
        <div>
          <h1>${renderLangInline(state.header.cardTitle)}</h1>
${leadHtml}        </div>
      </div>
${currencyNoteHtml}    </header>

    <div class="lang-switch" role="group" aria-label="Choisir la langue">
      <button type="button" data-lang-select="fr" aria-pressed="true"><span class="flag" aria-hidden="true">🇫🇷</span><span>Français</span></button>
      <button type="button" data-lang-select="en" aria-pressed="false"><span class="flag" aria-hidden="true">🇬🇧</span><span>English</span></button>
    </div>

    <!-- Table des matières -->
    <nav class="toc" aria-label="Sommaire" style="margin:14px 0 6px">
${navLinks}
    </nav>

${sectionsHtml}

    <footer class="panel" style="margin-top:14px">
${footerNoteContent}    </footer>

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
  <script>
    (function () {
      const root = document.getElementById('rvb-spa-carte-2025');
      if (!root) return;
      const buttons = root.querySelectorAll('[data-lang-select]');
      const setLang = (lang) => {
        root.setAttribute('data-lang', lang);
        buttons.forEach((button) => {
          button.setAttribute('aria-pressed', button.dataset.langSelect === lang ? 'true' : 'false');
        });
      };
      buttons.forEach((button) => {
        button.addEventListener('click', () => setLang(button.dataset.langSelect));
      });
      const initial = root.getAttribute('data-lang') || 'fr';
      setLang(initial);
    })();
  </script>
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
    `      <${headingTag}${headingIdAttr}>${renderLangInline(section.title)}</${headingTag}>`,
    contentBlock,
  ];

  if (hasLangValue(section.note)) {
    lines.push(`      <p class="note">${renderLangInline(section.note, { multiline: true })}</p>`);
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
    `              <div class="title">${renderLangInline(item.title, { strong: true })}</div>`,
  ];

  if (hasLangValue(item.description)) {
    lines.push(`              <div class="subtitle">${renderLangInline(item.description, { multiline: true, richText: true, wrapperTag: 'div' })}</div>`);
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

function saveWork() {
  if (!storageAvailable) {
    alert("La sauvegarde locale n'est pas disponible dans ce navigateur.");
    return;
  }
  try {
    const payload = JSON.stringify(state);
    window.localStorage.setItem(STORAGE_KEY, payload);
    alert('Travail sauvegardé localement.');
  } catch (error) {
    console.error('Impossible de sauvegarder le travail :', error);
    alert('Impossible de sauvegarder le travail. Vérifiez l\'espace disponible.');
  }
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
  clearSavedWork();
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
      clearSavedWork();
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
if (saveBtn) {
  saveBtn.addEventListener('click', saveWork);
}
downloadBtn.addEventListener('click', downloadHtml);
resetBtn.addEventListener('click', resetTemplate);
fileInput.addEventListener('change', handleFileUpload);
