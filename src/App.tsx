import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Instagram,
  Linkedin,
  Menu,
  Maximize2,
  MoveUpRight,
  ShieldCheck,
  Stethoscope,
  X,
} from 'lucide-react';

const heroSlides = [
  {
    eyebrow: 'Digitalna infrastruktura',
    title: 'Digitalne platforme',
    description:
      'Dizajniramo i implementiramo moderna rješenja koja povezuju medicinsku opremu, podatke i ljude.',
    button: 'Elab',
    target: '#elab',
    accent: 'digital',
  },
  {
    eyebrow: 'Iskustvo i znanje',
    title: 'Naučno i tehničko',
    description:
      'Povezujemo proces inspekcije, digitalnu infrastrukturu i naprednu analitiku kako bismo unaprijedili sigurnost, performanse i upravljanje životnim ciklusom medicinskih uređaja.',
    button: 'Kontaktirajte nas',
    target: '#kontakt',
    accent: 'science',
  },
  {
    eyebrow: 'Prema zakonskim okvirima',
    title: 'Verifikacija i ispitivanje',
    description:
      'Međunarodne standarde i regulatorne okvire pretvaramo u praktična rješenja za zdravstvene ustanove i javne institucije.',
    button: 'Saznaj više',
    target: '#verifikacija',
    accent: 'verification',
  },
];

const certificates = [
  {
    title: 'Rješenje o imenovanju laboratorije',
    subtitle: 'Institut za mjeriteljstvo Bosne i Hercegovine',
    code: 'UP1 05.1-46-6-50-86/22',
    accent: 'blue',
    url: '/images/certifikat1.jpg',
  },
  {
    title: 'Akreditovano inspekcijsko tijelo',
    subtitle: 'BAS EN ISO/IEC 17020',
    code: 'BATA 01-02',
    accent: 'cyan',
    url: '/images/certifikat2.jpg',
  },
  {
    title: 'Certifikat sistema upravljanja',
    subtitle: 'BAS EN ISO 9001:2015',
    code: 'QMS / VERLAB',
    accent: 'red',
    url: '/images/certifikat3.jpg',
  },
];

const timelineItems = [
  { year: '2014', text: 'Verlab je osnovan kao kompanija usmjerena na tehničko ispitivanje i analizu medicinskih uređaja s funkcijom mjerenja.', image: 'https://images.pexels.com/photos/8442033/pexels-photo-8442033.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { year: '2015', text: 'Uspostavljen je Laboratorij za verifikaciju medicinskih uređaja sa mjernom funkcijom, imenovan od strane nadležnih institucija u skladu sa važećim zakonodavstvom.', image: '/images/2015Picture.png' },
  { year: '2016', text: 'Prva akreditacija prema međunarodnom standardu ISO/IEC 17020 u oblasti medicinskih uređaja s funkcijom mjerenja nakon čega je obim akreditacije kontinuirano proširivan.', image: '/images/2016Picture.png' },
  { year: '2020', text: 'Period od 2016. obilježen je sistematskim razvojem metodologija, proširenjem akreditovanog obima i aktivnim doprinosom naučnoj i stručnoj zajednici. Kontinuirani istraživački rad rezultirao je nizom publikacija, uključujući međunarodno priznate smjernice u oblasti upravljanja medicinskom tehnologijom.', image: 'https://images.pexels.com/photos/4032274/pexels-photo-4032274.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { year: '2022', text: 'Svjesni značaja nauke i tehnološkog razvoja, 2020. godine pokrenut je istraživački centar s ciljem razvoja metodologija i unapređenja pristupa u oblasti inspekcije i nadzora medicinskih uređaja. U martu 2022. godine aktivnosti su rezultirale osnivanjem nezavisnog naučno-istraživačkog instituta u oblasti biomedicinskog inženjerstva.', image: 'https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { year: '2025', text: 'Naučno-istraživački i razvojni rad kulminirao je saradnjom sa Svjetskom zdravstvenom organizacijom, koja je objavila vodič za upravljanje medicinskim tehnologijama.', image: 'https://images.pexels.com/photos/9574558/pexels-photo-9574558.jpeg?auto=compress&cs=tinysrgb&w=900', link: 'https://iris.who.int/items/e09dbfa7-1823-4341-841e-abcff3fdbe19' },
  { year: '2026', text: 'Učešće u European Digital Innovation Hub (eDIH) konzorcijumu i aktivan doprinos digitalnoj transformaciji zdravstvenog sektora.', image: '/images/2026Picture.png' },
];

const developmentTabs = [
  {
    title: 'Okvir sistemskog razvoja i implementacije',
    description:
      'Strukturirani metod za transformaciju upravljanja medicinskom tehnologijom u operativan i mjerljiv sistem. Objedinjujemo regulatorne zahtjeve, tehničke standarde i organizacione procese u jedinstven okvir koji se može implementirati i skalirati.',
    cards: [
      ['01', 'Analiza sistema', 'Procjena postojećeg stanja, regulatornog okvira i operativnih kapaciteta.'],
      ['02', 'Dizajn modela', 'Razvoj prilagođenog modela upravljanja, digitalne arhitekture i procesa kontrole.'],
      ['03', 'Implementacija i obuka', 'Uspostava sistema, obuka kadra i integracija podataka u operativno okruženje.'],
    ],
  },
  {
    title: 'Digitalni sistemi za upravljanje medicinskom opremom',
    description:
      'Razvijamo i implementiramo informacione sisteme za evidenciju, praćenje i upravljanje životnim ciklusom medicinskih uređaja. Digitalizacija donosi transparentnost, kontrolu i efikasnost.',
    cards: [],
  },
  {
    title: 'Analitika i napredna rješenja',
    description:
      'Primjenjujemo analitičke modele za procjenu rizika, planiranje održavanja i optimizaciju resursa. Podaci postaju alat za strateško odlučivanje.',
    cards: [],
  },
];

function App() {
  const [activePage, setActivePage] = useState<'home' | 'about' | 'verification' | 'management' | 'contact' | 'elab' | 'institute'>('home');
  const [activeCertificate, setActiveCertificate] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(6);
  const [activePurpose, setActivePurpose] = useState<'mission' | 'vision'>('mission');
  const [menuOpen, setMenuOpen] = useState(false);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const openVerification = () => {
    setActivePage('verification');
    setMenuOpen(false);

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  };
  const openManagement = () => {
    setActivePage('management');
    setMenuOpen(false);

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  };
  const openContact = () => {
    setActivePage('contact');
    setMenuOpen(false);

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  };

  return (
    <div className={`site-shell show-${activePage}`}>
      <header className="site-header">  
      <a
        className="brand"
        href="#pocetna"
        aria-label="Verlab početna"
        onClick={(e) => {
          e.preventDefault();
          setActivePage('home');
          setMenuOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <img src="/images/verlab-logo.png" alt="Verlab Institut" />
      </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Otvori meni">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#o-nama" onClick={(e) => { e.preventDefault(); setActivePage('about'); setMenuOpen(false); }}>O nama</a>
          <a
            href="#verifikacija"
            onClick={(e) => {
              e.preventDefault();
              setActivePage('verification');
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Verifikacija
          </a>
          <a href="#upravljanje" title="Upravljanje medicinskom tehnologijom" onClick={(e) => { e.preventDefault(); openManagement(); setMenuOpen(false); }}>Upravljanje tehnologijom</a>
          <a
            href="https://elab.verlab.ba/authentication/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Elab
          </a>
          <a
            href="https://verlabinstitute.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Institut
          </a>
          <a className="nav-cta nav-contact" href="#kontakt" onClick={(e) => { e.preventDefault(); openContact(); setMenuOpen(false); }}>Kontakt <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className={`hero hero-${slide.accent}`} id="pocetna">
          <div className="hero-grid" aria-hidden="true"><div className="orb orb-one" /><div className="orb orb-two" /><div className="scan-line" /></div>
          <div className="hero-content">
            <div className="hero-copy" key={activeSlide}>
              <div className="eyebrow"><span className="eyebrow-line" /> {slide.eyebrow}</div>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              {slide.accent === 'digital' ? (
              <a
                className="button button-primary"
                href="https://elab.verlab.ba/authentication/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                {slide.button} <MoveUpRight size={17} />
              </a>
            ) : (
              <a
                className="button button-primary"
                href={slide.target}
                onClick={(e) => {
                  e.preventDefault();

                  if (slide.accent === 'verification') {
                    openVerification();
                  } else if (slide.accent === 'science') {
                    openContact();
                  } else {
                    setActivePage('home');
                  }
                }}
              >
                {slide.button} <MoveUpRight size={17} />
              </a>
            )}
            </div>
            <div className="hero-monitor" aria-hidden="true"><div className="monitor-glow" /><div className="monitor-panel"><div className="monitor-header"><span>MEDICAL TECHNOLOGY</span><b>LIVE</b></div><div className="monitor-display"><div className="ecg-grid" /><svg className="ecg-wave" viewBox="0 0 520 150" preserveAspectRatio="none"><path d="M0 82 H82 L103 82 L119 79 L132 84 L148 82 H186 L201 82 L218 30 L236 126 L254 82 H299 L317 82 L332 72 L344 90 L357 82 H410 L428 82 L445 82 L463 49 L478 110 L490 82 H520" /></svg><span className="ecg-value">98<span>BPM</span></span></div><div className="monitor-footer"><div><small>SYSTEM STATUS</small><strong>OPTIMAL</strong></div><div><small>ACCURACY</small><strong>99.8%</strong></div><div><small>ISO</small><strong>17020</strong></div></div></div><div className="monitor-satellite satellite-one" /><div className="monitor-satellite satellite-two" /></div>
          </div>
          <div className="hero-footer">
            <div className="slide-count"><strong>0{activeSlide + 1}</strong><span>/ 03</span></div>
            <div className="slide-dots">{heroSlides.map((item, index) => <button key={item.title} className={index === activeSlide ? 'active' : ''} onClick={() => setActiveSlide(index)} aria-label={`Slajd ${index + 1}`} />)}</div>
            <div className="slide-controls"><button onClick={() => changeSlide(-1)} aria-label="Prethodni slajd"><ChevronLeft size={18} /></button><button onClick={() => changeSlide(1)} aria-label="Sljedeći slajd"><ChevronRight size={18} /></button></div>
          </div>
        </section>

        <section className="about-section" id="o-nama">
          <div className="about-hero"><div className="about-hero-copy"><div className="section-label">01 / O NAMA</div><div className="mission-switch"><button className={activePurpose === 'mission' ? 'active' : ''} onClick={() => setActivePurpose('mission')}>Naša misija</button><button className={activePurpose === 'vision' ? 'active' : ''} onClick={() => setActivePurpose('vision')}>Naša vizija</button></div><h2>{activePurpose === 'vision' ? 'Vizija' : 'Misija'}</h2><p>{activePurpose === 'vision' ? 'Biti vodeći pružalac strukturiranih modela nadzora i upravljanja medicinskom tehnologijom u Evropi.' : 'Unapređenje zdravstvenih sistema kroz povezivanje pouzdanosti, sigurnosti i sistemskih modela upravljanja medicinskim uređajima.'}</p></div><div className="about-hero-image" /></div>
          <div className="timeline-section section-pad"><div className="section-label">02 / NAŠ PUT</div><div className="timeline-tabs">{timelineItems.map((item, index) => <button key={item.year} className={activeTimeline === index ? 'active' : ''} onClick={() => setActiveTimeline(index)}>{item.year}</button>)}</div><div className="timeline-content"><div className="timeline-image-wrap"><img src={timelineItems[activeTimeline].image} alt={`Verlab razvoj ${timelineItems[activeTimeline].year}`} /></div><div className="timeline-copy"><span className="timeline-year">{timelineItems[activeTimeline].year}</span><p>{timelineItems[activeTimeline].text}</p>{timelineItems[activeTimeline].link && <a className="button button-primary" href={timelineItems[activeTimeline].link}>Saznaj više <ArrowRight size={16} /></a>}</div></div></div>
          <div className="values-section section-pad"><div className="values-copy"><div className="section-label">03 / NAŠE VRIJEDNOSTI</div><h2>Rastemo zajedno<br /><em>sa klijentima.</em></h2><div className="values-grid"><div><span>01</span><h3>Integritet</h3><p>Radimo otvoreno, odgovorno i nezavisno.</p></div><div><span>02</span><h3>Izvrsnost</h3><p>Znanje pretvaramo u kvalitet i pouzdanost.</p></div><div><span>03</span><h3>Inovacije</h3><p>Tražimo pametnija rješenja za stvarne izazove.</p></div></div></div><div className="values-image" /></div>
          <div className="collaboration-section section-pad"><div className="section-label">04 / KAKO MOŽETE SARAĐIVATI S NAMA</div><h2>Partnerstvo koje<br /><em>pokreće napredak.</em></h2><div className="collaboration-list"><div><span>Kroz verifikaciju medicinskih uređaja u skladu sa zakonom</span><a href="#verifikacija" onClick={(e) => { e.preventDefault(); openVerification(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Saznaj više <ArrowRight size={15} /></a></div><div><span>Kroz razvoj i implementaciju modela upravljanja medicinskom tehnologijom</span><a href="#institut" onClick={(e) => {e.preventDefault(); openManagement(); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Saznaj više <ArrowRight size={15} /></a></div><div><span>Kroz saradnju u istraživačkim i međunarodnim projektima</span><a href="https://verlabinstitute.com/" target="_blank" rel="noopener noreferrer" >Saznaj više <ArrowRight size={15} /></a></div></div>
          </div>
        </section>

        <section className="service-section section-pad" id="usluge">
          <div className="section-heading"><div><div className="section-label">02 / NAŠE USLUGE</div><h2>Od mjerenja do<br /><em>napretka.</em></h2></div><p>Stručnost, metodologija i savremena tehnologija objedinjeni u rješenja koja imaju stvarni uticaj.</p></div>
          <div className="service-grid"><a className="service-card featured" href="#verifikacija" onClick={openVerification}><div className="service-icon"><ClipboardCheck size={23} /></div><span className="card-index">01</span><h3>Inspekcija / verifikacija<br />medicinskih uređaja</h3><p>Nezavisna provjera sigurnosti, performansi i usklađenosti opreme sa standardima.</p><span className="card-link">Saznaj više <ArrowRight size={16} /></span></a>
          <a
            className="service-card"
            href="#upravljanje"
            onClick={(e) => {
              e.preventDefault();
              openManagement();
            }}
          ><div className="service-icon"><Stethoscope size={23} /></div><span className="card-index">02</span><h3>Upravljanje medicinskom tehnologijom</h3><p>Strukturiran sistem za transparentno upravljanje opremom kroz cijeli njen životni ciklus.</p><span className="card-link">Istraži <ArrowRight size={16} /></span></a>
          <a
            className="service-card"
            href="https://elab.verlab.ba/authentication/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="service-icon"><BarChart3 size={23} /></div>
            <span className="card-index">03</span>
            <h3>Digitalna rješenja<br />i napredna analitika</h3>
            <p>Podaci, analitika i alati koji pretvaraju kompleksnost u jasne odluke.</p>
            <span className="card-link">Otvori Elab <ArrowRight size={16} /></span>
          </a>
          </div>
        </section>

        <section className="development-section section-pad" id="upravljanje-home">
          <div className="section-heading"><div><div className="section-label light">03 / SISTEMSKI RAZVOJ</div><h2>Jedan sistem.<br /><em>Tri perspektive.</em></h2></div><p>Izaberite oblast i otkrijte kako Verlab pretvara zahtjevne procese u mjerljiva, održiva rješenja.</p></div>
          <div className="tabs">{developmentTabs.map((tab, index) => <button key={tab.title} className={index === activeTab ? 'active' : ''} onClick={() => setActiveTab(index)}><span>0{index + 1}</span>{tab.title}</button>)}</div>
          <div className="tab-panel"><div className="tab-copy"><div className="panel-kicker">{String(activeTab + 1).padStart(2, '0')} / 03</div><h3>{developmentTabs[activeTab].title}</h3><p>{developmentTabs[activeTab].description}</p>{activeTab === 1 && (
          <a
            className="button button-primary"
            href="https://elab.verlab.ba/authentication/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Otvori Elab <ExternalLink size={16} />
          </a>
        )}
        </div>{developmentTabs[activeTab].cards.length > 0 && <div className="process-cards">{developmentTabs[activeTab].cards.map(([number, title, text]) => <div className="process-card" key={number}><span>{number}</span><h4>{title}</h4><p>{text}</p></div>)}</div>}{activeTab === 2 && <div className="analytics-visual"><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-line" /><span>ANALYTICS / 2026</span></div>}</div>
        </section>

        <section className="verification-section section-pad" id="verifikacija-home">
          <div className="verification-image">
            <img src="/images/img1.png" alt="Verifikacija medicinske opreme" />
            <div className="image-overlay" />
            <div className="image-caption">
              <ShieldCheck size={20} />
              <span>NEZAVISNA<br /><strong>VERIFIKACIJA</strong></span>
            </div>
          </div>          
        <div className="verification-copy"><div className="section-label">04 / VERIFIKACIJA</div><h2>Pouzdanost nije<br /><em>pretpostavka.</em></h2><p>Provjeravamo ono što je najvažnije: da medicinski uređaji rade sigurno, precizno i u skladu sa zahtjevima koji štite pacijente i zdravstvene radnike.</p><div className="verification-points"><div><Check size={17} /><span>ISO 17020 usklađenost</span></div><div><Check size={17} /><span>Stručan i nezavisan tim</span></div><div><Check size={17} /><span>Jasni i mjerljivi izvještaji</span></div></div></div></section>
        <section className="institute-section section-pad" id="institut">
        <div className="institute-mark">
          <img
            src="/images/Verlab-Institute.png"
            alt="Verlab Institute logo"
            className="institute-logo"
          />
        </div>
          <div>
            <div className="section-label">05 / VERLAB INSTITUTE</div>
            <h2>
              Znanje koje
              <br />
              <em>pokreće promjenu.</em>
            </h2>
            <p>
              Mjesto susreta nauke, prakse i ljudi koji grade sigurniju budućnost
              zdravstvenog sistema.
            </p>
            <a
              className="text-link"
              href="https://verlabinstitute.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Posjetite Verlab Institut <ArrowRight size={17} />
            </a>
          </div>
        </section>
        <section className="contact-section" id="kontakt-cta"><div className="contact-inner"><div><div className="section-label light">06 / KONTAKT</div><h2>Spremni za<br /><em>sljedeći korak?</em></h2></div><div><p>Razgovarajmo o tome kako tehnologija može raditi bolje za vaš tim, ustanovu i pacijente.</p>
        <a className="button button-orange" href="mailto:info@verlab.ba">Kontaktirajte naš tim <ArrowRight size={17} /></a>
        </div></div></section>
          <section className="contact-page" id="kontakt">
            <div className="contact-page-hero"><div><div className="section-label">06 / KONTAKT</div><h2>Razgovarajmo</h2><p>Naš tim stoji na raspolaganju za pitanja vezana za inspekciju, verifikaciju i razvoj sistema upravljanja medicinskom tehnologijom.</p></div><div className="contact-page-image" /></div>
            <div className="contact-details section-pad">
            <div className="map-card">
              <iframe
                className="contact-map-iframe"
                title="Verlab lokacija — Ferhadija 27, Sarajevo"
                src="https://maps.google.com/maps?q=Ferhadija%2027%2C%20Sarajevo%2C%20Bosna%20i%20Hercegovina&z=16&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="map-card-overlay">
                <span className="map-address">Ferhadija 27</span>
              </div>
            </div>
            <div className="contact-info"><div><strong>Adresa</strong><p>Ferhadija 27<br />Sarajevo, 71000<br />Bosna i Hercegovina</p></div><div><strong>Kontaktirajte Nas</strong><p>Tel: +387 (33) 56 95 40<br />+387 (33) 56 95 41<br />Fax: +387 (33) 56 95 49<br />E-mail: info@verlab.ba</p></div><div><strong>Radno Vrijeme</strong><p>Pon – Pet: 08:00 – 16:30<br />Vikendom i praznicima: Zatvoreno</p></div></div></div>
          </section>
          <section className="elab-page" id="elab">
            <div className="elab-hero"><div><div className="section-label">07 / DIGITALNO RJEŠENJE</div><h2>Elab</h2><p>Digitalni sistem za preglednu evidenciju, upravljanje i analitiku medicinske tehnologije.</p></div><div className="elab-orbit"><div className="orbit-core">ELAB</div><span>DATA</span><span>RISK</span><span>ASSET</span></div></div>
            <div className="elab-content section-pad"><div className="section-heading"><div><div className="section-label">JEDAN PREGLED</div><h2>Oprema pod<br /><em>kontrolom.</em></h2></div><p>Elab povezuje podatke o opremi, servisima, rizicima i regulatornim obavezama u jedan jasan sistem.</p></div><div className="elab-metrics"><div><span>01</span><strong>1,248</strong><small>Uređaja u evidenciji</small></div><div><span>02</span><strong>96%</strong><small>Dokumentacije ažurno</small></div><div><span>03</span><strong>24</strong><small>Otvorenih zadataka</small></div><div><span>04</span><strong>0.8</strong><small>Prosječan rizik</small></div></div><div className="elab-board"><div><div className="board-top"><span>STATUS OPREME</span><span>2026 / LIVE</span></div><div className="board-bars"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="elab-checklist"><div><Check size={16} /> Regulatorna dokumentacija</div><div><Check size={16} /> Planirano održavanje</div><div><Check size={16} /> Procjena rizika</div><div><Check size={16} /> Istorija intervencija</div></div></div></div>
          </section>
          <section className="institute-page" id="institut">
            <div className="institute-page-hero"><div><div className="section-label">05 / VERLAB INSTITUTE</div><h2>Nauka koja<br /><em>pokreće promjenu.</em></h2><p>Mjesto susreta istraživanja, prakse i ljudi koji grade sigurniju budućnost zdravstvenog sistema.</p></div><div className="institute-visual"><span>V</span><i>RESEARCH<br />&amp; IMPACT</i></div></div>
            <div className="institute-content section-pad"><div className="section-heading"><div><div className="section-label">NAŠ FOKUS</div><h2>Od znanja do<br /><em>stvarnog uticaja.</em></h2></div><p>Verlab Institute razvija nove modele upravljanja medicinskom tehnologijom kroz istraživanje, edukaciju i međunarodnu saradnju.</p></div><div className="institute-pillars"><div><span>01</span><h3>Istraživanje</h3><p>Primijenjena istraživanja za sigurnije, efikasnije i održivije zdravstvene sisteme.</p></div><div><span>02</span><h3>Edukacija</h3><p>Programi koji stručnjacima daju znanje za odgovorno upravljanje tehnologijom.</p></div><div><span>03</span><h3>Saradnja</h3><p>Povezujemo institucije, industriju i istraživače oko zajedničkih izazova.</p></div></div></div>
          </section>
          <section className="management-page" id="upravljanje">
            <div className="management-hero"><div className="management-hero-copy"><div className="section-label">03 / SISTEMSKI RAZVOJ</div><h2>Upravljanje<br />medicinskom<br />tehnologijom</h2></div><div className="management-hero-image" /></div>
            <section className="problem-section section-pad"><div className="section-label">01 / IZAZOV</div><h2>Problem <span>→</span> Rješenje</h2><p>Da li upravljate opremom ili reagujete na probleme?</p><div className="problem-grid"><div><span>01</span><h3>Nepotpune evidencije</h3><p>Inventari nisu ažurni ili su fragmentirani.</p></div><div><span>02</span><h3>Reaktivno održavanje</h3><p>Intervencije se planiraju tek nakon kvara.</p></div><div><span>03</span><h3>Nejasna odgovornost</h3><p>Procesi nisu definisani, a nadležnosti se preklapaju.</p></div><div><span>04</span><h3>Regulatorni rizik</h3><p>Nedostatak dokumentacije povećava izloženost sankcijama.</p></div></div><p className="problem-note">Problem nije u uređajima. Problem je u sistemu upravljanja.</p></section>
            <section className="operating-section section-pad"><div className="section-label">02 / OPERATIVNI MODEL</div><h2>Operativni model</h2><p>Pored akreditirane laboratorije, Verlab razvija i implementira modele upravljanja medicinskom tehnologijom za zdravstvene ustanove i javne organizacije.</p><div className="model-grid"><div><span>01</span><h3>Okvir sistemskog razvoja i implementacije</h3><p>Najpristupnije rješenje za operativno transformisanje sistemskog upravljanja.</p><ul><li>regulatorne obaveze</li><li>tehničke standarde</li><li>digitalne platforme</li><li>organizacione procese</li></ul></div><div><span>02</span><h3>Digitalni sistemi za upravljanje medicinskom opremom</h3><p>Razvijamo i implementiramo informacione sisteme za evidenciju, praćenje i upravljanje životnim ciklusom uređaja.</p></div><div><span>03</span><h3>Analitika i napredna rješenja</h3><p>Primjenjujemo analitičke modele za procjenu rizika, planiranje održavanja i optimizaciju resursa.</p></div></div></section>
            <section className="method-section section-pad"><div className="section-label">03 / METODOLOGIJA</div><h2>Metodologija digitalne i operativne transformacije upravljanja medicinskom opremom</h2><p>Naša metodologija se zasniva na transformaciji postojećeg, često fragmentiranog sistema u strukturirani, digitalno podržan i mjerljiv model.</p><div className="method-points"><span>upravljanje inventarom</span><span>procesno modeliranje</span><span>upravljanje rizikom</span><span>digitalna transformacija</span><span>regulatorna usklađenost</span></div></section>
            <section className="results-section section-pad"><div className="section-label">04 / REZULTATI</div><h2>Rezultati</h2><p>Rezultat je stabilan i mjerljiv sistem.</p><div className="results-grid"><div><Check size={23} /><span>Jasni i potpuni opisi medicinske opreme</span></div><div><Check size={23} /><span>Transparentno planiranje održavanja</span></div><div><Check size={23} /><span>Smanjen operativni rizik</span></div><div><Check size={23} /><span>Podrška regulatornoj usklađenosti</span></div><div><Check size={23} /><span>Stratešku osnovu za budžetiranje i nabavku</span></div></div></section>
            <section className="management-cta"><h2>Vrijeme je da uspostavite sistem,<br /><em>a ne samo evidenciju.</em></h2><a className="button button-primary" href="#kontakt" onClick={openContact}>Zatražite inicijalnu procjenu sistema <ArrowRight size={16} /></a></section>
          </section>

          <section className="verification-page" id="verifikacija">
            <div className="verification-page-hero"><div className="verification-page-copy"><div className="section-label">02 / VERIFIKACIJA</div><h2>Verifikacija</h2><p>Nezavisno, stručno i nepristrasno provjeravamo sigurnost i performanse medicinskih uređaja u skladu sa zakonskim i međunarodnim zahtjevima.</p></div><div className="verification-page-image" /></div>
            <div className="inspection-section section-pad"><div className="section-label">INSPECTION (ISO 17020)</div><h2>Akreditovano inspekcijsko tijelo</h2><p>Verlab u Bosni i Hercegovini provodi zakonom propisane periodične inspekcije medicinskih uređaja sa mjernom funkcijom, u skladu sa Zakonom o mjeriteljstvu i podzakonskim aktima. Verifikacija potvrđuje ispravnost i sigurnost uređaja.</p><h3>Obim akreditacije</h3><div className="scope-grid">{['EKG aparati','Defibrilatori','Pacijent monitori','Inkubatori','Anesteziološki aparati','Mehanički ventilatori','Infuzomati','Perliferne pumpe','Terapeutski ultrazvučni uređaji','Digitalni aparati','Aparati za mjerenje krvnog pritiska'].map((item) => <span key={item}>{item}</span>)}</div><div className="inspection-notes"><div><strong>01</strong><span>Više od decenije iskustva u regulatornoj verifikaciji medicinskih uređaja.</span></div><div><strong>02</strong><span>Metodologija razvijana kroz kontinuirano istraživanje i praksu.</span></div><div><strong>03</strong><span>Stručni rad dokumentovan kroz međunarodne publikacije.</span></div></div></div>
            <section className="certificates-section section-pad"><div className="section-label light">SISTEM UPRAVLJANJA KVALITETOM</div><h2>Certifikati</h2><p>Kliknite na certifikat za pregled preko cijelog ekrana.</p>
            <div className="certificates-grid">{certificates.map((certificate, index) => (
              <button
                className={`certificate-card ${certificate.accent}`}
                key={certificate.title}
                onClick={() => setActiveCertificate(index)}
              >
                {certificate.url ? (
              <img
                src={certificate.url}
                alt={certificate.title}
                className="certificate-card-image"
              />
            ) : (
              <div className="certificate-paper">
                <div className="certificate-logo">VERLAB</div>
                <div className="certificate-line" />
                <FileText size={25} />
                <strong>{certificate.title}</strong>
                <small>{certificate.subtitle}</small>
                <em>{certificate.code}</em>
                <div className="certificate-stamp">ISO</div>
              </div>
            )}<p className="certificate-description">
              {index === 0 &&
                'Mjeriteljska laboratorija, imenovana od strane instituta za mjeriteljstvo Bosne i Hercegovine, za pružanje usluga verifikacije medicinskih uređaja sa funkcijom mjerenja.'}

              {index === 1 &&
                'Akreditovano inspekcijsko/kontrolno tijelo prema zahtjevima standarda BAS EN 17020 od strane Instituta za akreditiranje Bosne i Hercegovine.'}

              {index === 2 &&
                'Sistem upravljanja kvalitetom sertifikovan prema zahtjevima standarda BAS EN ISO 9001 od strane Bureau Veritas (UKAS Management Systems).'}
            </p>
              </button>
            ))}</div></section>
            <div className="independence-section section-pad"><div className="section-label">NEZAVISNOST I NEPRISTRASNOST</div><h2>Naš rad počiva na<br /><em>povjerenju.</em></h2><p>Verlab osigurava potpunu nezavisnost i nepristrasnost inspekcijskih aktivnosti.</p><div className="legal-note">OPŠTA PRAVILA POSLOVANJA SU DOSTUPNA OVDJE.</div></div>
            <div className="competence-section section-pad"><div className="section-label">TEHNIČKA KOMPETENTNOST</div><h2>Znanje koje potvrđuje<br /><em>svaki rezultat.</em></h2><p>Inspekcijski rad provode stručne osobe sa odgovarajućim obrazovanjem, iskustvom i kontinuiranim stručnim edukacijama. Tehnička oprema se koristi i održava u skladu sa zahtjevima sljedivosti mjerenja.</p></div>
            <div className="complaints-section section-pad"><div className="section-label">PRIGOVORI I ŽALBE</div><h2>Otvoren razgovor<br /><em>gradi povjerenje.</em></h2><p>U radu se primjenjuju važeći Opšti uslovi poslovanja. Sve zainteresovane strane mogu podnijeti prigovor ili žalbu na rad inspekcijskog tijela.</p>
            <div className="pdf-actions"><a className="button button-primary" href="/documents/GENERAL-TERMS-OF-BUSINESS.pdf" target="_blank" rel="noreferrer">Opšti uslovi poslovanja - ENG <ExternalLink size={14} /></a><a className="button button-primary" href="/documents/GENERAL-TERMS-OF-BUSINESS-bos.pdf" target="_blank" rel="noreferrer">Opšti uslovi poslovanja - BOS <ExternalLink size={14} /></a></div></div>
          </section>
      </main>

      {activeCertificate !== null && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Pregled certifikata"
          onClick={() => setActiveCertificate(null)}
        >
          <button
            className="modal-close"
            onClick={() => setActiveCertificate(null)}
            aria-label="Zatvori pregled"
          >
            <X size={28} />
          </button>

          {certificates[activeCertificate].url ? (
            <img
              src={certificates[activeCertificate].url}
              alt={certificates[activeCertificate].title}
              className="certificate-original-image"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <div
              className={`certificate-paper modal-paper ${certificates[activeCertificate].accent}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="certificate-logo">VERLAB INSTITUT</div>
              <div className="certificate-seal">
                CERTIFICATE
                <br />
                <strong>OF QUALITY</strong>
              </div>
              <div className="certificate-line" />
              <FileText size={54} />
              <strong>{certificates[activeCertificate].title}</strong>
              <small>{certificates[activeCertificate].subtitle}</small>
              <p>
                Ovim certifikatom potvrđuje se usklađenost sa važećim
                standardima i zahtjevima sistema upravljanja kvalitetom.
              </p>
              <em>{certificates[activeCertificate].code}</em>
              <div className="certificate-signature">
                Ovlašteno lice
                <br />
                <span>VERLAB</span>
              </div>
            </div>
          )}
        </div>
      )}
      <footer className="site-footer">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/images/verlab-logo.png"
            alt="Verlab"
          />
          <p>
            Institut za verifikaciju,<br />
            tehničko ispitivanje i analitiku.
          </p>
        </div>

        <div className="footer-column">
          <span>Office</span>
          <p>
            +387 (33) 56 95 40<br />
            +387 (33) 56 95 41<br />
            +387 (33) 56 95 49
          </p>
          <a href="mailto:info@verlab.ba">info@verlab.ba</a>
          <a href="https://www.verlab.ba" target="_blank" rel="noreferrer">
            www.verlab.ba
          </a>
          <p>ID: 4201943670005</p>
          <p>PDV: 201943670005</p>
        </div>

        <div className="footer-column footer-location">
          <span>Where to find us?</span>
          <p>
            Ferhadija 27,<br />
            71000 Sarajevo<br />
            Bosna i Hercegovina
          </p>
          <p>
            <strong>Radno vrijeme:</strong><br />
            Pon – Pet, 08:00 – 16:30
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ferhadija+27+Sarajevo"
            target="_blank"
            rel="noreferrer"
          >
            Otvori lokaciju na mapi
          </a>
        </div>

        <div className="footer-column social footer-complaints">
          <span>Follow our work</span>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/verlablaboratory/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/verlab.laboratory/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://www.linkedin.com/company/verlab-d-o-o-/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>

          <p>
            Sve zainteresovane strane imaju pravo da putem e-maila{" "}
            <a href="mailto:info@verlab.ba">info@verlab.ba</a>, dostave
            prijedloge i sugestije za unapređenje, prigovore ili žalbe na bilo
            koji segment našeg rada, a način postupanja po prigovorima i žalbama
            provodi se u skladu sa procedurom VL-PR-12. Opšti uslovi poslovanja
            dostupni su na ovom{" "}
            <a href="/documents/Vl-PRZ-07-03.pdf" target="_blank" rel="noreferrer">
              linku
            </a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
