import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('production-site');
const origin = 'https://featherbleu.co.za';
const profile = 'https://www.myinstaller.co.za/MyInstallerDetailsPage/6eea60ae-17c2-4a50-a77c-d3f6972e9e7b';
const terms = 'https://www.centsys.co.za/ctsi-terms-and-conditions/';
const pages = [
  {
    slug: 'certified-installers', label: 'Certified installers', title: 'Certified Installer Comparison | Featherbleu George',
    heading: 'Choose expertise you can verify.',
    description: 'Compare Featherbleu’s CENTURION MyInstaller listing with an unverified installer claim. Check certification, service scope and who will do your installation.',
    intro: 'A motor brand on a quote is a starting point. A traceable installer listing gives you something more concrete to check before choosing the people who fit it.',
    alternative: 'An unverified installer claim',
    rows: [
      ['Certification evidence', 'Listed on CENTURION’s MyInstaller platform for Certified Trained SMART Installers.', 'Ask for a current listing and the assigned installer’s certification details.'],
      ['Listed work', 'The Featherbleu profile lists garage doors, sliding gates and swing gates.', 'Confirm which systems the provider installs and supports.'],
      ['Who you speak to', 'Direct contact with owners Werner and Joe.', 'Establish who assesses the property and who performs the installation.'],
      ['Work you can inspect', 'Published installation examples and a customer review on the MyInstaller profile.', 'Request relevant completed projects and independently checkable references.'],
      ['Service area', 'George and the Garden Route, with visit arrangements confirmed directly.', 'Check coverage, travel charges and practical support arrangements.']
    ],
    sections: [
      ['Verify the person as well as the business', 'CENTURION certifies individuals, with annual renewal required. Ask which certified installer will carry out your job and confirm their current details before booking.'],
      ['Match experience to the actual job', 'A driveway gate, a garage door and a shared entrance have different requirements. Explain the system you have, its condition and how it is used. Ask for examples relevant to your project rather than relying only on a brand name.'],
      ['Why choose Featherbleu?', 'You can start with a public MyInstaller profile, view real project examples, and speak directly with the owners about your property. That gives you practical evidence to use when comparing quotes.']
    ],
    questions: ['Who is the certified installer assigned to my property?', 'Can I check the current listing and relevant project examples?', 'Which equipment, labour and support are included in the written quote?'], service: 'gate-automation'
  },
  {
    slug: 'gate-automation', label: 'Gate automation', title: 'Gate Automation Installer Comparison | Featherbleu',
    heading: 'Compare the whole gate installation.',
    description: 'Compare Featherbleu’s gate automation services with a motor-only offer. Review site assessment, sliding and swing gates, access options and quote scope.',
    intro: 'A gate motor is one part of a working entrance. Compare how each proposal addresses the gate itself, the controls and the way your property is used.',
    alternative: 'A motor-only offer',
    rows: [
      ['Starting point', 'Sliding and swing gate automation, installation and fault-finding services.', 'Check whether the offer covers the entrance as a system or only the motor.'],
      ['Product-specific expertise', 'A public CENTURION MyInstaller listing you can check before booking.', 'Ask for evidence of training relevant to the proposed motor.'],
      ['Existing gate condition', 'The owners can assess the property and discuss mechanical work before planning automation.', 'Ask whether track, hinges, movement and mounting work are included or excluded.'],
      ['Access choices', 'Remotes, intercoms and connected control are available to discuss.', 'Confirm which controls are included, and the cost of extras.'],
      ['Power options', 'Battery backup and suitable solar options can form part of the discussion.', 'Ask what happens during a power interruption and what equipment is specified.'],
      ['Future repairs', 'Gate motor repairs and servicing are part of Featherbleu’s service offering.', 'Confirm who will diagnose problems after installation and how visits are charged.']
    ],
    sections: [
      ['For an existing driveway gate', 'Share photos of the whole opening, track or hinges, and any existing motor. Describe how often the entrance is used. This helps the owners discuss whether repairs, changes to the gate or new automation should be considered.'],
      ['Compare the same scope', 'Place the motor model, controls, safety devices, power work, mechanical work and labour beside each other. A lower total may simply cover fewer items. Ask each provider to state exclusions before comparing the final prices.'],
      ['The Featherbleu fit', 'Featherbleu brings gate installation, automation and repairs into one owner-led service. It is a useful option when you want to discuss the entrance as a whole and have a direct contact for the work.']
    ],
    questions: ['What work does the gate need before automation?', 'Which controls, safety devices and power options are included?', 'What operating demonstration and support arrangements will I receive?'], service: 'gate-automation'
  },
  {
    slug: 'garage-doors', label: 'Garage doors', title: 'Garage Door Installer Comparison | Featherbleu',
    heading: 'Look beyond the door and motor.',
    description: 'Compare Featherbleu’s garage door installation and repair services with supply-only offers. Review door fit, automation, existing faults and installation scope.',
    intro: 'A garage door quote should explain how the door, opening and automation fit together. Compare the installed result you need, as well as the products on the page.',
    alternative: 'A supply-only door or motor offer',
    rows: [
      ['Door options', 'Sectional and roll-up garage door installation and repairs.', 'Confirm whether the offer includes fitting or only product supply.'],
      ['Automation credentials', 'Garage doors are listed on Featherbleu’s CENTURION MyInstaller profile.', 'Check relevant motor training and who will install the automation.'],
      ['Existing problems', 'Door, motor, remote and servicing enquiries can be discussed with the owners.', 'Ask who assesses an existing fault and whether diagnosis is included.'],
      ['Fit and preparation', 'A property assessment can establish the scope for the opening and installation.', 'Confirm measurements, preparation, removal and making good in writing.'],
      ['Controls and access', 'Motor and remote requirements can be discussed with the door installation.', 'Confirm compatibility, included remotes and manual operation arrangements.'],
      ['Ongoing contact', 'Speak directly with Werner or Joe about servicing and repairs.', 'Identify the installer, product supplier and contact responsible for follow-up.']
    ],
    sections: [
      ['Replacing a door', 'Start with the opening size, door style and photos taken from inside and outside. Ask whether the proposed price includes removal of the old door, fitting, automation and any work needed around the opening.'],
      ['Repairing an existing system', 'Describe whether the door is noisy, moves unevenly, stops partway or does not respond to the remote. A door problem and a motor problem can require different work. Featherbleu offers both installation and repairs, so you can discuss the symptoms before deciding on replacement.'],
      ['The Featherbleu fit', 'Choose Featherbleu when you want to discuss the door and its automation together with the owners. The project gallery gives you examples to help explain the finish and style you have in mind.']
    ],
    questions: ['Does this quote include the door, fitting and automation?', 'What existing components will be retained or replaced?', 'Who handles installation issues and product warranty enquiries?'], service: 'garage-doors'
  },
  {
    slug: 'owner-led-service', label: 'Owner-led service', title: 'Owner-Led Installer Comparison | Featherbleu',
    heading: 'Know the people behind the work.',
    description: 'Compare Featherbleu’s owner-led installation model with a service that dispatches a separate team. Review communication, project responsibility and local coverage.',
    intro: 'How a provider organises its work affects who you talk to and how decisions are made. Compare the service model alongside the equipment and price.',
    alternative: 'A separately dispatched installation team',
    rows: [
      ['First conversation', 'Speak directly with owners Werner and Joe.', 'Ask whether your contact is the installer, a coordinator or a sales representative.'],
      ['On-site team', 'Owner-led work with no subcontractors, as described on the Featherbleu website.', 'Confirm whether employees or subcontractors will attend your property.'],
      ['Installer credentials', 'A CENTURION MyInstaller profile provides a public point of verification.', 'Check the credentials of the person attending, as well as the company’s claims.'],
      ['Changes to the job', 'Discuss your requirements directly with the owners planning the work.', 'Establish who can agree changes and how revised costs will be documented.'],
      ['Local coverage', 'Based in George and serving six Garden Route areas.', 'Check where the team is based and whether return visits attract travel charges.'],
      ['Availability', 'Confirm booking dates and visit arrangements with the owners.', 'Ask about team availability; a larger provider may have more scheduling capacity.']
    ],
    sections: [
      ['When direct contact matters', 'If you are coordinating a gate, garage door and access changes, it helps to know who is making the installation decisions. With Featherbleu, you can describe the property and discuss the work directly with Werner or Joe.'],
      ['Different team models can work well', 'A provider with separate scheduling and installation teams may suit a project that needs several crews or a particular booking window. Ask how information passes between the people quoting and the people doing the work.'],
      ['The Featherbleu fit', 'Featherbleu suits customers who value owner involvement and a named contact. Confirm availability early and agree the work, access arrangements and any changes before the installation proceeds.']
    ],
    questions: ['Who will actually attend my property?', 'Who approves changes to the scope and price?', 'Who should I contact if I need help after the job?'], service: null
  },
  {
    slug: 'repairs-and-long-term-value', label: 'Repairs & long-term value', title: 'Repair & Replacement Comparison | Featherbleu',
    heading: 'Compare value beyond the first quote.',
    description: 'Compare Featherbleu’s repair and installation options with a replacement-only proposal. Consider diagnosis, quote detail, maintenance and future support.',
    intro: 'The best next step depends on the fault, the condition of the system and the work required. Compare a repair discussion with a replacement proposal before deciding.',
    alternative: 'A replacement-only proposal',
    rows: [
      ['Available routes', 'Both repairs and new installations are offered for gates and garage doors.', 'Ask whether repair was considered and why replacement is recommended.'],
      ['Fault-finding', 'Discuss motor, remote, power, sensor and mechanical symptoms with the owners.', 'Request the diagnosis behind the proposed equipment change.'],
      ['Relevant credentials', 'Check Featherbleu’s listing on CENTURION’s MyInstaller platform.', 'Verify training for the system being assessed or proposed.'],
      ['Quote detail', 'Discuss the equipment, labour and property work needed for your situation.', 'Compare itemised scope and exclusions, rather than the headline total alone.'],
      ['Maintenance', 'Servicing and preventative maintenance are part of the service offering.', 'Ask which components need attention and what future visits may cost.'],
      ['Warranty and support', 'Confirm the applicable product and workmanship terms for your quoted job.', 'Ask for written terms, exclusions and the contact for any claim.']
    ],
    sections: [
      ['Repair is a question worth asking', 'A failed remote or a power-related problem does not tell you, on its own, that the entire motor needs replacing. Describe the fault and request an assessment. The condition of the equipment and the findings should guide the recommendation.'],
      ['Replacement can be the sensible choice', 'A new installation may be appropriate when the existing system cannot meet your requirements or the work needed is extensive. Ask the provider to explain the reason and compare the scope of repair and replacement where both are viable.'],
      ['The Featherbleu fit', 'Because Featherbleu offers installation, fault-finding and servicing, you can discuss more than one route with the owners. Agree the assessment cost, proposed work and follow-up arrangements before proceeding.']
    ],
    questions: ['What fault was identified, and what alternatives were considered?', 'What is included in the total price and what could be extra?', 'What maintenance and written warranty terms apply?'], service: 'gate-automation'
  }
];
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const route = p => `/compare/${p.slug}/`;
const template = fs.readFileSync(path.join(root,'services/gate-automation/index.html'),'utf8');
const header = template.match(/<header[\s\S]*?<\/header>/)[0].replace('class="active" href="/services/"','href="/services/"');
const footer = template.slice(template.indexOf('<footer'));
const business = JSON.parse(template.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1])['@graph'].filter(g => ['LocalBusiness','WebSite'].includes(g['@type']));
const analytics = template.match(/<!-- Google tag[\s\S]*?<meta property="og:type"/)[0].replace('<meta property="og:type"','');
const nav = current => `<nav class="compare-nav" aria-label="Comparison guides">${pages.map((p,i)=>`<a href="${route(p)}"${p.slug===current?' aria-current="page"':''}><span>0${i+1}</span>${esc(p.label)}</a>`).join('')}</nav>`;
for (const [i,p] of pages.entries()) {
  const url = origin+route(p);
  const schema = {'@context':'https://schema.org','@graph':[...business,{'@type':'WebPage','@id':url+'#webpage',url,name:p.title,description:p.description,inLanguage:'en-ZA',dateModified:'2026-10-19',breadcrumb:{'@id':url+'#breadcrumb'}},{'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:origin+'/'},{'@type':'ListItem',position:2,name:p.label,item:url}]}]};
  const html = `<!doctype html><html lang="en-ZA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(p.title)}</title><meta name="description" content="${esc(p.description)}"><meta name="robots" content="index,follow"><link rel="canonical" href="${url}"><link rel="icon" href="/assets/favicon-20261017.png"><link rel="stylesheet" href="/assets/site-20261017.css"><link rel="stylesheet" href="/assets/comparisons-20261019.css"><meta property="og:type" content="website"><meta property="og:site_name" content="Featherbleu Industries"><meta property="og:locale" content="en_ZA"><meta property="og:title" content="${esc(p.title)}"><meta property="og:description" content="${esc(p.description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${origin}/assets/project-smart.webp"><meta property="og:image:alt" content="Featherbleu timber sliding gate installation"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(p.title)}"><meta name="twitter:description" content="${esc(p.description)}"><meta name="twitter:image" content="${origin}/assets/project-smart.webp"><meta name="twitter:image:alt" content="Featherbleu timber sliding gate installation"><script type="application/ld+json">${JSON.stringify(schema)}</script><script defer src="/assets/site-20261017.js"></script>${analytics}</head><body>${header}<main>
  <section class="comparison-hero"><div class="shell"><div class="breadcrumbs"><a href="/">Home</a><span aria-hidden="true">/</span><span>${esc(p.label)}</span></div><div class="comparison-intro"><div><p class="eyebrow">The Featherbleu difference · 0${i+1} / 05</p><h1>${p.heading}</h1><p class="lead">${esc(p.intro)}</p><a class="btn" href="#comparison">See the comparison ↓</a></div><aside class="certification-card"><span class="certification-kicker">CENTURION installer expertise</span><img src="/assets/myinstaller-logo-20261019.png" width="784" height="184" alt="MyInstaller" decoding="async"><h2>Listed. Checkable. Local.</h2><p>Featherbleu is listed on CENTURION’s MyInstaller platform for Certified Trained SMART Installers.</p><a href="${profile}" target="_blank" rel="noopener noreferrer">View our installer profile ↗<span class="sr-only"> (opens in a new tab)</span></a><small>Certification applies to individuals and relevant CENTURION SMART products and accessories. <a href="${terms}" target="_blank" rel="noopener noreferrer">Programme scope ↗</a></small></aside></div></div></section>
  <div class="shell">${nav(p.slug)}</div>
  <section class="section comparison-section" id="comparison"><div class="shell"><p class="eyebrow">${esc(p.label)}</p><h2 class="section-title">What are you really comparing?</h2><p class="comparison-note">A practical guide to generic service options, not a rating of named businesses. Other providers may offer similar services or hold the same certification; verify each proposal.</p><div class="comparison-table-wrap" role="region" aria-label="${esc(p.label)} comparison table" tabindex="0"><table class="comparison-table"><caption>Featherbleu compared with ${esc(p.alternative.toLowerCase())}</caption><thead><tr><th scope="col">What matters</th><th scope="col">Featherbleu Industries<span>Our offering</span></th><th scope="col">${esc(p.alternative)}<span>What to establish</span></th></tr></thead><tbody>${p.rows.map(r=>`<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody></table></div></div></section>
  <section class="section soft comparison-detail"><div class="shell"><div class="comparison-editorial">${p.sections.map((s,j)=>`<article><span class="eyebrow">0${j+1}</span><h2>${esc(s[0])}</h2><p>${esc(s[1])}</p></article>`).join('')}</div></div></section>
  <section class="section"><div class="shell comparison-checklist"><div><p class="eyebrow">Before you decide</p><h2 class="section-title">Three questions worth asking.</h2><p>Use the same questions with every provider so the answers are easier to compare.</p></div><ol>${p.questions.map(q=>`<li>${esc(q)}</li>`).join('')}</ol></div><div class="shell comparison-evidence"><p>Explore the evidence</p><a href="/projects/">View our installations →</a><a href="${p.service?'/services/'+p.service+'/':'/about/'}">${p.service?'Explore this service':'Meet the owners'} →</a><a href="${profile}" target="_blank" rel="noopener noreferrer">MyInstaller profile &amp; reviews ↗</a></div></section>
  <section class="cta"><div class="shell cta-grid"><div><p class="eyebrow">George &amp; the Garden Route</p><h2>Let’s talk about your property.</h2><p>Discuss the scope, availability and quote with Werner or Joe.</p></div><div class="cta-actions"><a class="btn" data-contact-placement="comparison-end" href="https://wa.me/27829217299">WhatsApp Werner</a><a class="btn btn-light" href="/contact/">Request a quote →</a></div></div></section></main>${footer}`;
  const dir=path.join(root,'compare',p.slug);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),html);
}
// Add discoverable entry points while preserving the existing homepage hero.
let home=fs.readFileSync(path.join(root,'index.html'),'utf8');
const homeSection=`<section class="section comparison-home" id="compare"><div class="shell"><p class="eyebrow">The Featherbleu difference</p><div class="split-head"><h2 class="section-title">Compare with confidence.</h2><p class="lead">Certified installer expertise. Direct owner contact. Explore five guides to choosing the right team for your property.</p></div>${nav('')}</div></section>`;
home=home.replace(/<section class="section comparison-home"[\s\S]*?<\/section>/,'');
home=home.replace('<section class="section service-guide">',homeSection+'<section class="section service-guide">');
if(!home.includes('href="/assets/comparisons-20261019.css"')) home=home.replace('</head>','<link rel="stylesheet" href="/assets/comparisons-20261019.css"></head>');
fs.writeFileSync(path.join(root,'index.html'),home);
function addFooterLinks(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true})){const target=path.join(dir,f.name);if(f.isDirectory())addFooterLinks(target);else if(f.name.endsWith('.html')){let h=fs.readFileSync(target,'utf8');const marker='<a href="/resources/industry-news/">Industry News</a>';if(h.includes(marker)&&!h.includes('>Compare installers</a>')){h=h.replace(marker,marker+'<a href="/compare/certified-installers/">Compare installers</a>');fs.writeFileSync(target,h);}}}}
addFooterLinks(root);
let sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const p of pages)if(!sitemap.includes(origin+route(p)))sitemap=sitemap.replace('</urlset>',`  <url><loc>${origin+route(p)}</loc><lastmod>2026-10-19</lastmod></url>\n</urlset>`);
fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap);
let llms=fs.readFileSync(path.join(root,'llms.txt'),'utf8');for(const p of pages)if(!llms.includes(origin+route(p)))llms+=`\n- ${p.label} comparison: ${origin+route(p)}`;fs.writeFileSync(path.join(root,'llms.txt'),llms+'\n');
console.log('Built five comparison pages and updated homepage, footer links and sitemap.');
