// Content sourced from rockandreef.in (existing site) — services, projects, fleet, leadership.

export const company = {
  name: 'Rock and Reef Dredging Pvt. Ltd.',
  short: 'Rock and Reef',
  tagline: 'Specialists in Dredging and Marine Works',
  intro:
    'Rock And Reef Dredging is a leading dredging and shipbuilding company that has been at the forefront of capital dredging in India.',
  phone: '+91 9833949560',
  phoneHref: 'tel:+919833949560',
  whatsapp: 'https://api.whatsapp.com/send?phone=919833949560&text=Hi%20Rock%20and%20Reef',
  email: 'hello@rockandreef.in',
  address:
    'Centurion Haware Mall, S-05 2nd Floor, Sector 19A Nerul Rd, East, Navi Mumbai, India, 400706',
  linkedin: 'https://www.linkedin.com/company/rock-and-reef-dredging-pvt-ltd/about/?viewAsMember=true',
  x: 'https://x.com/rockandreef33',
}

export const stats = [
  { value: '25+', label: 'Years of industry experience' },
  { value: '100+', label: 'Projects completed successfully' },
  { value: '25+', label: 'Million cubic metres dredged' },
  // Backhoe, cutter suction and grab: the classes we own and operate.
  { value: '11', label: 'Treasure and  the fleet' },
]

// --- Fleet -------------------------------------------------------------
export const fleet = {
  backhoe: {
    id: 'backhoe',
    name: 'Backhoe Dredgers',
    img: '/img/Backchoe-Dredgers.png',
    tier: 'dredger',
    role: 'Rock and hard strata',
    spec: 'Pontoon mounted excavators for hard, compacted and rocky seabed, the core of our capital dredging capability.',
  },
  csd: {
    id: 'csd',
    name: 'Cutter Suction Dredgers',
    img: '/img/cutter-suction-dredgers.png',
    tier: 'dredger',
    role: 'Reservoirs and channels',
    spec: 'Continuous cutting and pumping of sediment through floating pipeline, ideal for reservoirs, channels and reclamation.',
  },
  grab: {
    id: 'grab',
    name: 'Grab Dredgers',
    img: '/img/Grab-Dredgers-.png',
    tier: 'dredger',
    role: 'Berths and quay walls',
    spec: 'Precise deep reach digging alongside berths, quay walls and confined harbour pockets.',
  },
  barge: {
    id: 'barge',
    name: 'Hopper Barges',
    img: '/img/Barge.png',
    tier: 'support',
    role: 'Sediment haulage',
    spec: 'Self propelled and split hoppers carrying dredged material to the designated disposal ground.',
  },
  tug: {
    id: 'tug',
    name: 'Tugs',
    img: '/img/tug.png',
    tier: 'support',
    role: 'Towage and positioning',
    spec: 'Towage, positioning and station keeping for the dredging spread.',
  },
  workboat: {
    id: 'workboat',
    name: 'Workboats',
    img: '/img/Motor-Lauch.png',
    tier: 'support',
    role: 'Crew transfer',
    spec: 'Crew transfer and site supervision across active working areas.',
  },
  survey: {
    id: 'survey',
    name: 'Survey Boat',
    img: '/img/survey-boat.png',
    tier: 'support',
    role: 'Sounding and survey',
    spec: 'Single and multi beam hydrographic survey platform for pre, progress and post dredge sounding.',
  },
}

// --- Projects ----------------------------------------------------------
export const projects = [
  {
    id: 'porbandar',
    title: 'Coast Guard Jetty, Porbandar Port',
    mapLabel: 'Porbandar Port',
    place: 'Porbandar Port, Gujarat',
    region: 'Gujarat',
    client: 'Gujarat Maritime Board',
    year: '2025',
    img: '/img/Banner-Image.jpg',
    metrics: [
      { k: '1,09,970 m³', v: 'Dredge quantity' },
      { k: '6.3 m BCD', v: 'Design level' },
      { k: '6 months', v: 'Contract period' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Capital dredging of the Indian Coast Guard berth pocket, inside a live all-weather port.',
    summary:
      'Capital dredging in front of the existing and proposed Coast Guard Jetty at Porbandar Port to 6.3 m BCD, for the Gujarat Maritime Board. Executed in a live channel shared with ICG, naval and commercial traffic, with a dredge spread planned for relocation at short notice, mixed strata from fine sand to hard rock, and all spoil barged to an offshore ground in over 20 m of water to protect the shoreline and fisheries harbour.',
    services: ['capital-dredging', 'survey'],
    vessels: ['backhoe', 'barge', 'tug', 'survey'],
    coords: { lat: 21.63, lng: 69.62 },
    // long-form case study, rendered on the project page when present
    detail: {
      facts: [
        { k: 'Scope', v: 'Capital dredging to 6.3 m BCD' },
        { k: 'Dredge quantity', v: '1,09,970 m³ (estimated)' },
        { k: 'Duration', v: '6 months, excluding monsoon' },
        { k: 'Start date', v: '25 November 2025' },
        { k: 'Awarding authority', v: 'Gujarat Maritime Board, Office of the Executive Engineer (Mech.), PIU Porbandar' },
      ],
      overview: [
        'Porbandar Port, situated on the Arabian Sea coast of Gujarat, is an all-weather, direct-berthing commercial port serving merchant vessels, naval ships and Indian Coast Guard (ICG) ships, alongside an active fisheries harbour. The Indian Coast Guard operates a round-the-clock station at the port, and the Gujarat Maritime Board engaged our team to carry out capital dredging in front of the existing and proposed extension of the Coast Guard Jetty to ensure smooth, unhindered movement of ICG vessels.',
        'The project required dredging the berth pocket to a design level of 6.3 m BCD, executed within a live operational environment shared with cargo vessels, naval ships and coast guard traffic, demanding a dredge spread capable of being relocated at short notice whenever shipping movements required it.',
      ],
      location: {
        text: 'Porbandar Port lies on the open Arabian Sea coast. The dredging footprint covered the berth face of the existing and proposed Coast Guard Jetty, with all dredged material transported and disposed of at a designated offshore dumping ground in waters deeper than 20 m below MSL, positioned well clear of the shoreline to prevent sediment drift back into the port or fisheries area.',
        facts: [
          { k: 'Port coordinates', v: "21°38' N, 69°37' E" },
          { k: 'Disposal ground (offshore)', v: '21°36\'5.00" N, 69°29\'11.74" E' },
          { k: 'Water body', v: 'Arabian Sea, open sea, all-weather direct-berthing port' },
          { k: 'Tidal range (MHHW to MLLW)', v: '+2.50 m to +0.80 m (Admiralty Chart No. 2054)' },
        ],
      },
      scope: {
        intro: 'The work covered the full dredging cycle for the Coast Guard berth pocket.',
        table: [
          { k: 'Dredging location', v: 'In front of existing and proposed extension of the Coast Guard Jetty, Porbandar Port' },
          { k: 'Level to be achieved', v: '6.3 m BCD (+300 mm vertical / +500 mm horizontal tolerance permitted)' },
          { k: 'Estimated quantity', v: '1,09,970 m³' },
        ],
        items: [
          'Mobilisation of a suitable dredge spread with ancillaries, capable of handling fine sand, clay and silt, pebbles, stray boulders and hard strata encountered in the Porbandar seabed.',
          'Dredging of the berth pocket to 6.3 m BCD, within permitted vertical (+300 mm) and horizontal (+500 mm) tolerances.',
          'Transport and disposal of dredged spoil at the identified offshore ground, beyond 20 m MSL depth.',
          'Continuous hydrographic surveying: setting out, water-level registration, and pre-, interim and post-dredge surveys to certify quantities and levels achieved.',
          'A traffic-compatible work methodology allowing the dredge spread to be relocated at short notice to keep the channel clear for ICG, naval and commercial shipping movements.',
        ],
      },
      method: [
        {
          title: 'Equipment and production planning',
          text: 'The method statement detailed the dredging equipment deployed, its capacity and per-hour output, and the expected production rates for each unit of plant mobilised, enabling a realistic execution schedule to be built around the six-month completion window, excluding monsoon.',
        },
        {
          title: 'Dredging methodology',
          text: 'A detailed bar chart sequenced the deployment of equipment and the order of work across the jetty frontage, with allowances built in for weather downtime and site constraints. Because the dredge area sits directly in an active shipping channel, the spread was planned for rapid shifting at short notice, ensuring Coast Guard and other vessel movements were never obstructed during execution.',
        },
        {
          title: 'Disposal plan',
          text: 'All dredged material was barged to the designated offshore disposal ground in water depths exceeding 20 m below MSL, in line with the environmental safeguard of keeping disposed sediment from migrating back toward the shoreline.',
        },
        {
          title: 'Survey methodology',
          text: 'Pre-dredge, interim and post-dredge hydrographic surveys were carried out to verify achieved levels and compute dredged quantities using Simpson\'s Rule, supported by continuous water-level registration and full setting-out of the work area with markers and beacons.',
        },
      ],
      challenges: [
        {
          title: 'Live shipping channel',
          problem: 'Dredging had to proceed without disrupting Coast Guard, naval and commercial vessel movements.',
          answer: 'Addressed through a mobile, quickly relocatable dredge spread.',
        },
        {
          title: 'Variable seabed strata',
          problem: 'The scope anticipated everything from fine sand to hard strata and rock mass.',
          answer: 'A dredge spread specification flexible enough to handle mixed ground conditions.',
        },
        {
          title: 'Environmentally sensitive disposal',
          problem: 'Spoil had to be placed far enough offshore and deep enough to prevent any impact on the shoreline or fisheries area.',
          answer: 'Precise navigation to the designated offshore ground, beyond 20 m below MSL.',
        },
      ],
    },
  },
  {
    id: 'mult',
    title: 'MULT Project, Capital Dredging',
    mapLabel: 'Kochi Port',
    place: 'Kochi Port, Kerala',
    region: 'Kerala',
    client: 'IOCL, via Kochi Port',
    year: '2022',
    img: '/img/project-1.png',
    metrics: [
      { k: '1,450,000 m³', v: 'Dredged' },
      { k: '2022', v: 'Completed' },
      { k: 'Capital', v: 'Dredging class' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Capital dredging for the Multi Utility LNG Terminal, delivered straight through monsoon siltation.',
    summary:
      'Capital dredging for the Multi Utility LNG Terminal at Kochi Port. Heavy monsoon siltation and opposition from local fishermen were managed through cutting edge dredging equipment, strategic scheduling and sustained community engagement.',
    services: ['capital-dredging'],
    vessels: ['backhoe', 'barge', 'tug', 'survey'],
    // real coordinates; projected to the map in indiaPath.js
    coords: { lat: 9.93, lng: 76.27 },
  },
  {
    id: 'gogha',
    title: 'Ferry Terminal, Gogha',
    mapLabel: 'Gogha',
    place: 'Gogha, Gulf of Khambhat, Gujarat',
    region: 'Gujarat',
    client: 'Ferry terminal developer',
    year: '2023',
    img: '/img/project-2.png',
    metrics: [
      { k: '650,000 m³', v: 'Dredged' },
      { k: '4 km × 1 km', v: 'Navigable channel' },
      { k: '2023', v: 'Completed' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'A terminal turning circle and a 4 km navigable channel, cut against current and hard sandstone.',
    summary:
      'Dredging of the terminal turning circle and a 4 km long, 1 km wide navigable channel leading to the terminal, executed against fast moving currents, live ferry traffic and hard sandstone formations.',
    services: ['capital-dredging', 'maintenance-dredging'],
    vessels: ['backhoe', 'barge', 'tug'],
    coords: { lat: 21.68, lng: 72.28 },
  },
  {
    id: 'jd5',
    title: 'Fifth Oil Berth (JD-5), MbPT',
    mapLabel: 'Fifth Oil Berth',
    place: 'Mumbai Harbour, Maharashtra',
    region: 'Maharashtra',
    client: 'Sapura (main contractor), Mumbai Port Trust',
    year: '2019',
    img: '/img/fifth-oil-berth.jpg',
    metrics: [
      { k: '4,068 m', v: 'Trench length' },
      { k: '5 to 50 m', v: 'Trench width' },
      { k: '6 m below CD', v: 'Max depth' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Over 4 km of pipeline trenching and backfill, executed inside a live Mumbai harbour.',
    summary:
      'Trenching and backfilling across 4,068 metres for offshore pipeline installation, with trench widths from 5 to 50 metres and depths of up to 6 metres below Chart Datum, as subcontractor to Sapura.',
    services: ['trenching'],
    vessels: ['backhoe', 'barge', 'survey'],
    coords: { lat: 18.93, lng: 72.87 },
  },
  {
    id: 'dakpathar',
    title: 'Dakpathar Barrage, Reservoir Dredging',
    mapLabel: 'Dakpathar Barrage',
    place: 'Dakpathar, Uttarakhand',
    region: 'Uttarakhand',
    client: 'Executed with international technology partners',
    year: '2021',
    img: '/img/dakpathar-barrage-rock-and-reef-project.jpg',
    metrics: [
      { k: 'Geotextile tubes', v: 'Sediment placement' },
      { k: 'Pilot', v: 'First of its kind in India' },
      { k: '2021', v: 'Executed' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Reservoir desilting with sediment pumped into geotextile tubes, a first of its kind in India.',
    summary:
      'Reservoir dredging and sustainable sediment management: accumulated silt was extracted and pumped into geotextile tubes for embankment strengthening and controlled desilting, a pioneering pilot for inland dredging in India.',
    services: ['deep-dredging'],
    vessels: ['csd', 'survey'],
    coords: { lat: 30.5, lng: 77.85 },
  },
  {
    id: 'offshore',
    title: 'Offshore Works, Pipe Laying & Trenching',
    mapLabel: 'Offshore Works',
    place: 'Offshore Mumbai, Maharashtra',
    region: 'Maharashtra',
    client: 'Sapura',
    year: '2019',
    img: '/img/project-4.png',
    metrics: [
      { k: '4 km', v: 'Corridor' },
      { k: 'Rock breaking', v: 'Method' },
      { k: '2019', v: 'Completed' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Offshore pipe laying and trenching through rock along a 4 km subsea corridor.',
    summary:
      'Offshore pipe laying and trenching where rock formations along the route were addressed with specialised rock breaking techniques and continuous survey control.',
    services: ['trenching'],
    vessels: ['backhoe', 'barge', 'tug', 'survey'],
    coords: { lat: 19.0, lng: 72.3 },
  },
  {
    id: 'salvage',
    title: 'Bollard Salvage, APM Terminals',
    mapLabel: 'Bollard Salvage',
    place: 'Navi Mumbai, Maharashtra',
    region: 'Maharashtra',
    client: 'APM Terminals',
    year: '',
    img: '/img/salvage_operation.png',
    metrics: [
      { k: '4 hours', v: 'Recovery time' },
      { k: 'Zero visibility', v: 'Conditions' },
      { k: 'Liebherr crane', v: 'Primary plant' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'A fallen bollard recovered from zero visibility silt in a record four hours.',
    summary:
      'Recovery of a fallen bollard from beneath heavy siltation in zero visibility conditions, completed in a record four hours using grid based dredging, four point mooring and load variation monitoring.',
    services: ['capital-dredging'],
    vessels: ['grab', 'tug'],
    coords: { lat: 18.99, lng: 73.02 },
  },
]

// --- Services ----------------------------------------------------------
export const services = [
  {
    id: 'capital-dredging',
    name: 'Capital Dredging',
    img: '/img/Dredging-Services.jpg',
    blurb:
      'New capital dredging for ports, harbours, approach channels and navigation basins.',
    detail:
      'A comprehensive range of dredging services, including river desilting, coastal restoration and harbour maintenance. Capital dredging is the core of Rock and Reef, and the fleet is built around it.',
  },
  {
    id: 'maintenance-dredging',
    name: 'Maintenance Dredging',
    img: '/img/dreging.jpg',
    blurb:
      'Keeping channels, berths and waterways at required depths for safe operations.',
    detail:
      'Planned, survey driven removal of siltation so terminals hold their declared depth year round, scheduled around live traffic and monsoon cycles.',
  },
  {
    id: 'deep-dredging',
    name: 'Deep Dredging',
    img: '/img/deep-dredging-service.png',
    blurb: 'Restoring storage capacity and structural safety in dams and reservoirs.',
    detail:
      'Silt, sediment and debris build up on the beds of dams and reservoirs, cutting storage capacity and straining structures. We remove it with equipment and techniques suited to deep-water, high-pressure conditions.',
  },
  {
    id: 'inland-dredging',
    name: 'Inland Dredging',
    img: '/img/dakpathar-barrage-rock-and-reef-project.jpg',
    blurb: 'Dredging for rivers, lakes and industrial water bodies, delivered with our own fleet.',
    detail:
      'Rivers lose depth, lakes and ponds lose volume, and industrial cooling ponds lose capacity. We dredge rivers, lakes, dams and industrial water bodies with our own cutter suction dredgers and survey boats.',
  },
  {
    id: 'trenching',
    name: 'Trenching Works',
    img: '/img/Trenching-Works.jpg',
    blurb:
      'Dredging and trenching for subsea cables, pipelines and utility installations.',
    detail:
      'Dive into the world of underwater trenching. We excavate precise trenches for subsea cables, pipelines and more using cutting edge engineering techniques, including backfill and reinstatement to specification.',
  },
  {
    id: 'survey',
    name: 'Hydrographic & Bathymetric Survey',
    img: '/img/Hydrographic-and-Bathymetric-Survey.jpg',
    blurb: 'Comprehensive hydrographic surveys and seabed mapping for accurate data and planning.',
    detail:
      'Our comprehensive survey services provide detailed underwater maps for safe navigation and environmental assessment. We measure depth, analyse seabed conditions and identify potential hazards.',
  },
  {
    id: 'breakwater',
    name: 'Breakwater Construction',
    img: '/img/Breakwater-Construction-Services-iPAC-Automation-1-1.jpg',
    blurb: 'Marine construction solutions including breakwaters, revetments and coastal protection works.',
    detail:
      'Our Breakwater Construction and Maintenance Services are designed to protect shorelines, harbours and coastal infrastructure from the impact of waves and erosion.',
  },
  {
    id: 'intake-outfall',
    name: 'Intake & Outfall Channel Dredging',
    img: '/img/intake-outfall-channel-dredging-services-india.webp',
    blurb: 'Dredging for intake and outfall channels for power plants, industrial facilities and other marine infrastructure.',
    detail:
      'Specialised intake and outfall channel dredging for power plants, desalination facilities and industrial plants, planned around plant availability windows.',
  },
  {
    id: 'shipbuilding',
    name: 'Shipbuilding & Repair',
    img: '/img/Shipbuilding.jpg',
    blurb: 'Building, repairing and refurbishing hopper barges, tugs and support vessels.',
    detail:
      'We build, repair and refurbish vessels of all types. Our experienced team specialises in creating customised solutions that meet your exact requirements, including the specialised backhoe dredgers in our own fleet.',
  },
]

export const differentiators = [
  {
    title: 'Unparalleled Execution',
    short: 'On programme, in live ports',
    img: '/img/industrial-port-de-barcelona-1.jpg',
    text: 'Projects delivered on programme in live ports, against monsoon siltation, currents and rock.',
  },
  {
    title: 'Extensive Experience',
    short: '25+ years, 100+ works',
    img: '/img/extensive-experirnrce.jpg',
    text: 'Over 25 years and 100+ dredging works across India, from harbours to Himalayan reservoirs.',
  },
  {
    title: 'Technology & Innovation',
    short: 'Dredgers built in house',
    img: '/img/Technological-Advancements-1.jpg',
    text: 'Dredgers tailored and customised in house, including our own advanced backhoe, Rock King.',
  },
  {
    title: 'Client Centric Approach',
    short: 'Built around your brief',
    img: '/img/Dredging-Services.jpg',
    text: 'Tailored solutions built around each client\u2019s requirements, with open communication and transparency from mobilisation to handover.',
  },
  {
    title: 'Environmental Stewardship',
    short: 'Sustainable by method',
    img: '/img/about-us-2-min.jpg',
    text: 'Sustainable sediment management, geotextile placement and community engagement built into method statements.',
  },
]

export const leadership = [
  {
    name: 'Harsharan Singh Dharni',
    role: 'Managing Director',
    img: '/img/Harsharan-Singh-Dharni.jpg',
    bio: '25+ years of dredging expertise; developed the specialised backhoe dredger equipment at the core of the fleet.',
  },
  {
    name: 'Parminder Singh Dharni',
    role: 'Director',
    img: '/img/Mr.-Parmindar-Singh-Dharni.png',
    bio: 'Has executed some of the most challenging projects in the country, including capital dredging at Mundra Port.',
  },
  {
    name: 'Manish Shah',
    role: 'Director',
    img: '/img/Manish-Shaha.png',
    bio: 'Brings a strong vendor network and deep industry supply chain expertise to project mobilisation.',
  },
  {
    name: 'Gurudayal Singh Dhanotra',
    role: 'Director',
    img: '/img/Mr.-Gurudayal-Singh-Dhanotra.jpg',
    bio: '30 years of shipbuilding experience across hopper barges, tugs and dredgers.',
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'contact', label: 'Contact' },
]

// --- Clients -----------------------------------------------------------
// Logo files live in /public/img/clients. A missing file renders as an empty
// plate, never a broken img.
export const clients = [
  { name: 'Larsen & Toubro', img: '/img/clients/landt.png' },
  { name: 'Tata Projects', img: '/img/clients/tata-projects.png' },
  { name: 'Adani Ports', img: '/img/clients/adani-ports.png' },
  { name: 'Navyuga Engineering', img: '/img/clients/navyuga.png' },
  { name: 'IGPL', img: '/img/clients/igpl.png' },
  { name: 'Cemindia', img: '/img/clients/cemindia.png' },
  { name: 'Flowline Systems', img: '/img/clients/flowline-systems.png' },
  { name: 'Comacoe', img: '/img/clients/comacoe.png' },
  { name: 'BSA Tugs', img: '/img/clients/bsa-tugs.png' },
  { name: 'Twilight Shipping', img: '/img/clients/twilight-shipping.png' },
  { name: 'C-Track Geosciences and Geoinformatics', img: '/img/clients/c-track-geosciences-and-geoinformatics.png' },
  { name: 'Creative Construction', img: '/img/clients/creative-construction.png' },
  { name: 'Paresh Constructions and Foundations', img: '/img/clients/paresh-constructions-and-foundations.png' },
  { name: 'Vishwakarma Mechanical Works', img: '/img/clients/vishwakarma-mechanical-works.png' },
  { name: 'MERC', img: '/img/clients/merc.png' },
  { name: 'Bhadrakali', img: '/img/clients/bhadrakali.png' },
  { name: 'Kink Revealers', img: '/img/clients/kink-revealers.png' },
]

// --- Fleet detail pages ---------------------------------------------------
// Each class has a page at /fleet/<class> listing its vessels, and each vessel
// has its own page at /fleet/<class>/<vessel>. `specs` holds the particulars
// from the fleet register; `keys` names the figures a class leads with, in
// order (cards show the first three present, vessel pages the first four).
export const fleetDetail = {
  backhoe: {
    headline: 'Pontoon-mounted excavators for rock and hard strata',
    intro: [
      'A backhoe dredger is a heavy hydraulic excavator mounted on a spud-anchored pontoon. The bucket digs with a direct, controlled force that suction plant cannot match, which makes it the tool of choice for rock, boulder clay, compacted gravel and debris, and for precise work close to existing structures.',
      'Both of our backhoe dredgers sit on 40 m pontoons and were built around equipment developed in-house. They load straight into hopper barges moored alongside, so the dredger keeps digging while the barges cycle to the disposal ground.',
    ],
    keys: ['Maximum dredging depth', 'Bucket capacity', 'Excavator power', 'Overall length'],
    vessels: [
      {
        id: 'rock-king',
        name: 'Rock King',
        type: 'Backhoe dredger',
        summary: [
          'Rock King carries a Caterpillar 395 excavator rated at 542 HP (404 kW) on a 40 m by 12.5 m pontoon, digging to 16 m below the waterline.',
          'It works with two buckets, 3.8 m³ and 1.8 m³, so the crew can trade volume for breakout force: the larger bucket for loose and medium material, the smaller one where the ground turns to rock. A 2 m loaded draft keeps it working in shallow approaches.',
        ],
        specs: [
          ['Overall length', '40 m'],
          ['Overall width', '12.5 m'],
          ['Moulded depth', '2.5 m'],
          ['Loaded draft', '2 m'],
          ['Excavator', 'CAT 395'],
          ['Excavator power', '542 HP / 404 kW'],
          ['Maximum dredging depth', '16 m'],
          ['Bucket capacity', '3.8 m³ / 1.8 m³'],
          ['Gross tonnage', '365 MT'],
          ['Net tonnage', '110 MT'],
        ],
      },
      {
        id: 'octopus',
        name: 'Octopus',
        type: 'Backhoe dredger',
        summary: [
          'Octopus is the heavier of our two backhoe dredgers: a Liebherr R 984 C excavator rated at 685 HP (504 kW), working buckets of 5 m³ and 2.5 m³ to a depth of 15.5 m.',
          'Its deeper 3 m hull gives a stiffer platform for the larger bucket, which suits high-volume capital dredging and rock removal where output per cycle matters.',
        ],
        specs: [
          ['Overall length', '40 m'],
          ['Overall width', '12.5 m'],
          ['Moulded depth', '3 m'],
          ['Loaded draft', '2.5 m'],
          ['Excavator', 'Liebherr R 984 C'],
          ['Excavator power', '685 HP / 504 kW'],
          ['Maximum dredging depth', '15.5 m'],
          ['Bucket capacity', '5 m³ / 2.5 m³'],
          ['Gross tonnage', '407 MT'],
          ['Net tonnage', '123 MT'],
        ],
      },
    ],
  },

  grab: {
    headline: 'Crane-mounted grabs for berths and confined pockets',
    intro: [
      'A grab dredger lowers a clamshell bucket from a crane on a stationary pontoon and lifts the material straight up. Because the grab works vertically, it reaches tight against quay walls, jetty piles and berth pockets where a cutter or backhoe cannot manoeuvre.',
      'We run five grab dredgers. Four carry 4.5 m³ grabs on American and Liebherr cranes; Kartar is the smallest and lightest of the group. Loaded drafts between 0.6 m and 1.6 m let them work in shallow harbours, creeks and rivers.',
    ],
    keys: ['Bucket capacity', 'Crane', 'Loaded draft', 'Overall length'],
    vessels: [
      {
        id: 'rock-3',
        name: 'Rock 3',
        type: 'Grab dredger',
        summary: [
          'Rock 3 works a 4.5 m³ grab from an American 9270 crane. At 14 m it is one of the two widest pontoons in the group, giving a steady platform for heavy lifts alongside berths.',
        ],
        specs: [
          ['Overall length', '35 m'],
          ['Overall width', '14 m'],
          ['Moulded depth', '2.5 m'],
          ['Loaded draft', '1 m'],
          ['Crane', 'American 9270'],
          ['Bucket capacity', '4.5 m³'],
          ['Gross tonnage', '299 MT'],
          ['Net tonnage', '90 MT'],
        ],
      },
      {
        id: 'rock-6',
        name: 'Rock 6',
        type: 'Grab dredger',
        summary: [
          'Rock 6 pairs an American 9270 crane with a 4.5 m³ grab on a 36 m pontoon. Its 0.6 m loaded draft is the shallowest in the grab fleet, so it can reach berths and channels before they have been deepened.',
        ],
        specs: [
          ['Overall length', '36 m'],
          ['Overall width', '12 m'],
          ['Moulded depth', '2.5 m'],
          ['Loaded draft', '0.6 m'],
          ['Crane', 'American 9270'],
          ['Bucket capacity', '4.5 m³'],
          ['Gross tonnage', '299.21 MT'],
          ['Net tonnage', '89.76 MT'],
        ],
      },
      {
        id: 'rock-15',
        name: 'Rock 15',
        type: 'Grab dredger',
        summary: [
          'Rock 15 is the largest grab dredger by tonnage, a Liebherr 882 crane working a 4.5 m³ grab from a 35 m by 14 m pontoon.',
        ],
        specs: [
          ['Overall length', '35 m'],
          ['Overall width', '14 m'],
          ['Moulded depth', '2.5 m'],
          ['Loaded draft', '1 m'],
          ['Crane', 'Liebherr 882'],
          ['Bucket capacity', '4.5 m³'],
          ['Gross tonnage', '343 MT'],
          ['Net tonnage', '103 MT'],
        ],
      },
      {
        id: 'rock-18',
        name: 'Rock 18',
        type: 'Grab dredger',
        summary: [
          'Rock 18 carries a Liebherr 855 crane and a 4.5 m³ grab on a 36 m by 12 m pontoon, a compact unit for berth pockets and maintenance dredging.',
        ],
        specs: [
          ['Overall length', '36 m'],
          ['Overall width', '12 m'],
          ['Moulded depth', '2.5 m'],
          ['Loaded draft', '1.6 m'],
          ['Crane', 'Liebherr 855'],
          ['Bucket capacity', '4.5 m³'],
          ['Gross tonnage', '274 MT'],
          ['Net tonnage', '82 MT'],
        ],
      },
      {
        id: 'kartar',
        name: 'Kartar',
        type: 'Grab dredger',
        summary: [
          'Kartar is the smallest grab dredger in the fleet: a Tata 955 crane on a 26 m by 10 m pontoon drawing 0.6 m loaded. It goes where larger plant cannot, into narrow creeks, small harbours and inland waters.',
        ],
        specs: [
          ['Overall length', '26 m'],
          ['Overall width', '10 m'],
          ['Moulded depth', '2.5 m'],
          ['Loaded draft', '0.6 m'],
          ['Crane', 'Tata 955'],
          ['Bucket capacity', '2.5 m³'],
          ['Gross tonnage', '200.34 MT'],
          ['Net tonnage', '60.1 MT'],
        ],
      },
    ],
  },

  csd: {
    // Photo behind the class page hero; falls back to the silhouette plate if missing.
    hero: '/img/fleet/csd-hero.jpg',
    headline: 'Continuous cutting and pumping through floating pipeline',
    intro: [
      'Cutter suction dredgers cut the seabed with a rotating cutter head and pump the loosened material ashore or to a reclamation area through a floating pipeline, without a hopper cycle. That makes them the most productive plant for reservoirs, channels, inland waterways and reclamation, where the discharge point is a fixed distance away.',
      'Brahmaputra, an IHC Beaver 45, is dismountable and travels by road, rail or sea to reservoirs and rivers well beyond the reach of a sea-going spread. Rock 21 is a smaller, lighter unit for shallower and more confined work.',
    ],
    keys: ['Maximum dredging depth', 'Cutter diameter', 'Overall length', 'Overall width'],
    vessels: [
      {
        id: 'brahmaputra',
        name: 'Brahmaputra',
        type: 'IHC Beaver 45 cutter suction dredger',
        img: '/img/csd-brahmaputra.jpg',
        pdf: '/docs/csd-brahmaputra-specifications.pdf',
        summary: [
          'A robust and highly productive dredger built for low cost per cubic metre: an exceptional rate of pumping power, a Cutter Special pump with a large ball passage for high availability, a single low maintenance diesel engine, and first class ergonomics and diagnostics on board.',
        ],
        specs: [
          ['Overall length', '30.91 m'],
          ['Overall width', '6.99 m'],
          ['Moulded depth', '2.01 m'],
          ['Cutter diameter', '450 mm'],
          ['Maximum dredging depth', '10 m'],
          ['Gross tonnage', '53.33 MT'],
          ['Net tonnage', '16 MT'],
        ],
        features: [
          'Spare parts available from stock',
          'Durable heavy-duty marine engine compliant with IMO Tier II',
          'Fresh-water engine cooling system (radiator cooling optional)',
          'Dredge pump driven through integrated bearing block, clutch and reduction gearbox',
          'White iron wear parts for the dredge pump',
          'Cutter drive accepts temporary overload, giving high maximum cutter power',
          'Reliable hydraulic system',
          'Dismountable and transportable by road, rail or sea',
          'One-man operation',
          'Comfort (AC etc.) and safety (kickplate) package',
          'Quick-closing suction line inspection hatch',
          'Grease lines on A-frame',
          'Cutter ladder retrieval cable',
          'Double filter in flushing water system',
          'Extended cutter ladder safety wires',
          'Environmentally friendly solutions, such as LED lighting',
        ],
        // Pump output, read off the data sheet's curves: peak output at short
        // discharge and the approximate length at which each curve tails off.
        output: {
          basis: 'Discharge pipe 450 mm · dredging depth 14.0 m · maximum volumetric concentration of in situ solids 25% · final elevation at end of discharge pipe 4.0 m',
          soils: [
            { key: 'A', peak: '≈900 m³/h', type: 'Fine sand', grain: '100 µm', density: '1,900 kg/m³', reach: '10,000 m' },
            { key: 'B', peak: '≈850 m³/h', type: 'Medium sand', grain: '235 µm', density: '1,950 kg/m³', reach: '6,200 m' },
            { key: 'C', peak: '≈800 m³/h', type: 'Coarse sand', grain: '440 µm', density: '2,000 kg/m³', reach: '4,700 m' },
            { key: 'D', peak: '≈730 m³/h', type: 'Coarse sand and gravel', grain: '1.3 mm', density: '2,100 kg/m³', reach: '3,400 m' },
            { key: 'E', peak: '≈560 m³/h', type: 'Gravel', grain: '7 mm', density: '2,200 kg/m³', reach: '2,200 m' },
          ],
          note: 'Calculated output curves only indicate pumping capacity, based on the maximum available power on the pump shaft and free-flowing material. In practice, properties vary from free-flowing, easily excavated to compacted, hard-to-excavate material; the nature of the material and local job conditions must be considered when estimating actual outputs.',
        },
      },
      {
        id: 'rock-21',
        name: 'Rock 21',
        type: 'Cutter suction dredger',
        summary: [
          'Rock 21 is our compact cutter suction dredger: 20.1 m overall with a 350 mm cutter, dredging to 9 m. Its small hull and 1.51 m moulded depth suit shallow reservoirs, canals and intake channels where a larger dredger cannot be launched or turned.',
        ],
        specs: [
          ['Overall length', '20.1 m'],
          ['Overall width', '5.72 m'],
          ['Moulded depth', '1.51 m'],
          ['Cutter diameter', '350 mm'],
          ['Maximum dredging depth', '9 m'],
          ['Gross tonnage', '38.33 MT'],
          ['Net tonnage', '12 MT'],
        ],
      },
    ],
  },

  barge: {
    headline: 'Hopper barges that keep the dredgers digging',
    intro: [
      'Hopper barges carry dredged material from the dredger to the designated disposal ground. A dredger is only as productive as the barges cycling behind it, so we size the barge fleet to the dredger and the sailing distance to keep the digging continuous.',
      'Five of our six barges are self-propelled hoppers between 46 m and 58 m long that sail to the dump site under their own power. Rock 5 is a split hopper barge: the hull opens along its length to drop the load in one go.',
    ],
    keys: ['Gross tonnage', 'Overall length', 'Loaded draft', 'Overall width'],
    vessels: [
      {
        id: 'reef-1',
        name: 'Reef 1',
        type: 'Self-propelled hopper barge',
        summary: [
          'Reef 1 is the largest barge in the fleet at 58 m overall and 633 MT gross, the workhorse for long hauls to offshore disposal grounds.',
        ],
        specs: [
          ['Type', 'Self-propelled hopper barge'],
          ['Overall length', '58 m'],
          ['Overall width', '13 m'],
          ['Moulded depth', '3.6 m'],
          ['Loaded draft', '2.8 m'],
          ['Gross tonnage', '633 MT'],
          ['Net tonnage', '349 MT'],
        ],
      },
      {
        id: 'rock-1',
        name: 'Rock 1',
        type: 'Self-propelled hopper barge',
        summary: [
          'Rock 1 is a 51 m self-propelled hopper of 622 MT gross, working alongside the backhoe and grab dredgers on capital and maintenance dredging.',
        ],
        specs: [
          ['Type', 'Self-propelled hopper barge'],
          ['Overall length', '51 m'],
          ['Overall width', '12 m'],
          ['Moulded depth', '3.6 m'],
          ['Loaded draft', '3 m'],
          ['Gross tonnage', '622 MT'],
          ['Net tonnage', '201 MT'],
        ],
      },
      {
        id: 'rock-5',
        name: 'Rock 5',
        type: 'Split hopper barge',
        summary: [
          'Rock 5 is a split hopper barge: the hull opens along its length to release the whole load at once. A 0.5 m loaded draft lets it work in shallow water close to the dredger.',
        ],
        specs: [
          ['Type', 'Split hopper barge'],
          ['Overall length', '44.22 m'],
          ['Overall width', '7.5 m'],
          ['Moulded depth', '2.7 m'],
          ['Loaded draft', '0.5 m'],
          ['Gross tonnage', '262.1 MT'],
          ['Net tonnage', '78.6 MT'],
        ],
      },
      {
        id: 'rock-9',
        name: 'Rock 9',
        type: 'Self-propelled hopper barge',
        summary: [
          'Rock 9 is a 46 m self-propelled hopper of 533 MT gross, a compact barge for tighter harbours and shorter disposal runs.',
        ],
        specs: [
          ['Type', 'Self-propelled hopper barge'],
          ['Overall length', '46 m'],
          ['Overall width', '12 m'],
          ['Moulded depth', '3.4 m'],
          ['Loaded draft', '3 m'],
          ['Gross tonnage', '533 MT'],
          ['Net tonnage', '163 MT'],
        ],
      },
      {
        id: 'rock-12',
        name: 'Rock 12',
        type: 'Self-propelled hopper barge',
        summary: [
          'Rock 12 is a 52 m self-propelled hopper on a slim 10.2 m beam, 521.56 MT gross.',
        ],
        specs: [
          ['Type', 'Self-propelled hopper barge'],
          ['Overall length', '52 m'],
          ['Overall width', '10.2 m'],
          ['Moulded depth', '3.5 m'],
          ['Loaded draft', '3 m'],
          ['Gross tonnage', '521.56 MT'],
          ['Net tonnage', '156.47 MT'],
        ],
      },
      {
        id: 'phoenix-1',
        name: 'Phoenix 1',
        type: 'Self-propelled hopper barge',
        summary: [
          'Phoenix 1 shares Rock 1’s dimensions, 51 m overall and 622 MT gross, so the two can run as a matched pair behind a single dredger.',
        ],
        specs: [
          ['Type', 'Self-propelled hopper barge'],
          ['Overall length', '51 m'],
          ['Overall width', '12 m'],
          ['Moulded depth', '3.6 m'],
          ['Loaded draft', '3 m'],
          ['Gross tonnage', '622 MT'],
          ['Net tonnage', '201 MT'],
        ],
      },
    ],
  },

  tug: {
    headline: 'Towage, positioning and station keeping',
    intro: [
      'Most dredging plant has no propulsion of its own. Our tugs tow the dredgers between sites, place them on station, run anchors and hold barges alongside while they load, so the spread can be moved and repositioned without waiting on outside towage.',
      'Rockstar handles the heavier towage and open-water passages; Porunai and Premrath are smaller harbour tugs for positioning and assisting inside the work area.',
    ],
    keys: ['Bollard pull', 'Speed', 'Overall length', 'Draft', 'Gross tonnage'],
    vessels: [
      {
        id: 'rockstar',
        name: 'Rockstar',
        type: 'Tug',
        summary: [
          'Rockstar is the largest tug in the fleet: 24 m overall with 13 t of bollard pull and a 10 knot service speed, used to tow dredgers and barges between sites and along the coast.',
        ],
        specs: [
          ['Overall length', '24 m'],
          ['Overall width', '8 m'],
          ['Moulded depth', '3.8 m'],
          ['Draft', '2.8 m'],
          ['Speed', '10 knots'],
          ['Bollard pull', '13 t'],
          ['Gross tonnage', '172 MT'],
          ['Net tonnage', '52 MT'],
        ],
      },
      {
        id: 'porunai',
        name: 'Porunai',
        type: 'Tug',
        summary: [
          'Porunai is a 19.35 m harbour tug that positions dredgers and barges within the work area and assists with anchor handling.',
        ],
        specs: [
          ['Overall length', '19.35 m'],
          ['Overall width', '5.62 m'],
          ['Moulded depth', '3.02 m'],
          ['Draft', '2.5 m'],
          ['Speed', '6 knots'],
          ['Gross tonnage', '89 MT'],
          ['Net tonnage', '40.05 MT'],
        ],
      },
      {
        id: 'premrath',
        name: 'Premrath',
        type: 'Tug',
        summary: [
          'Premrath is a 19.9 m harbour tug drawing 2 m, the shallowest of our tugs, for positioning and assist work in confined and shallow areas.',
        ],
        specs: [
          ['Overall length', '19.9 m'],
          ['Overall width', '6 m'],
          ['Moulded depth', '2.9 m'],
          ['Draft', '2 m'],
          ['Speed', '6 knots'],
          ['Gross tonnage', '80 MT'],
          ['Net tonnage', '24 MT'],
        ],
      },
    ],
  },

  survey: {
    headline: 'Hydrographic survey before, during and after dredging',
    intro: [
      'Every dredging job is measured from the water. Our survey boat runs the pre-dredge survey that sets the quantities, the progress surveys that guide the dredgers, and the post-dredge survey that confirms the design depth has been reached.',
      'Having our own survey platform on site means soundings are taken when the work needs them, not when an outside vessel is available.',
    ],
    keys: ['Speed', 'Overall length', 'Loaded draft', 'Gross tonnage'],
    vessels: [
      {
        id: 'reef-3',
        name: 'Reef 3',
        type: 'Survey boat',
        summary: [
          'Reef 3 is a 16.5 m survey boat that carries single and multi beam echo sounding for pre, progress and post dredge surveys. A 1.3 m loaded draft and 10 knot speed let it cover shallow areas and move quickly between survey lines.',
        ],
        specs: [
          ['Overall length', '16.5 m'],
          ['Overall width', '5 m'],
          ['Moulded depth', '2.5 m'],
          ['Loaded draft', '1.3 m'],
          ['Speed', '10 knots'],
          ['Gross tonnage', '43.87 MT'],
          ['Net tonnage', '13.16 MT'],
        ],
      },
    ],
  },

  workboat: {
    headline: 'Crew transfer and site support',
    intro: [
      'Workboats keep a dredging site running: they ferry crews between shore and the dredgers, carry supervisors around the working area, and bring out stores and small equipment.',
      'Our three workboats are between 14 m and 20 m long with drafts of 1.5 m or less, so they can come alongside any vessel in the spread and reach shallow landing points.',
    ],
    keys: ['Speed', 'Overall length', 'Loaded draft', 'Gross tonnage'],
    vessels: [
      {
        id: 'rock-7',
        name: 'Rock 7',
        type: 'Workboat',
        summary: [
          'Rock 7 is a 14 m workboat for crew transfer and short runs within the work area.',
        ],
        specs: [
          ['Overall length', '14 m'],
          ['Overall width', '4 m'],
          ['Moulded depth', '2 m'],
          ['Loaded draft', '1.5 m'],
          ['Speed', '4 knots'],
          ['Gross tonnage', '19.79 MT'],
          ['Net tonnage', '5.93 MT'],
        ],
      },
      {
        id: 'reef-7',
        name: 'Reef 7',
        type: 'Workboat',
        summary: [
          'Reef 7 is a 14 m workboat with an 8 knot speed, used for crew changes and supervision across larger sites.',
        ],
        specs: [
          ['Overall length', '14 m'],
          ['Overall width', '4 m'],
          ['Moulded depth', '2 m'],
          ['Loaded draft', '1.5 m'],
          ['Speed', '8 knots'],
          ['Gross tonnage', '24.34 MT'],
          ['Net tonnage', '7.3 MT'],
        ],
      },
      {
        id: 'mahalaxmi',
        name: 'Mahalaxmi',
        type: 'Workboat',
        summary: [
          'Mahalaxmi is the longest of our workboats and the shallowest, drawing 1.2 m loaded, for crew transfer and landing at shallow shore points.',
        ],
        specs: [
          ['Overall length', '19.79 m'],
          ['Overall width', '4 m'],
          ['Moulded depth', '2 m'],
          ['Loaded draft', '1.2 m'],
          ['Speed', '8 knots'],
          ['Gross tonnage', '19.79 MT'],
          ['Net tonnage', '5.93 MT'],
        ],
      },
    ],
  },
}

/** A class's leading figures for one vessel, in the class's `keys` order. */
export function keyFigures(classId, vessel, n) {
  const keys = fleetDetail[classId]?.keys || []
  const map = Object.fromEntries(vessel.specs)
  return keys.filter((k) => map[k]).slice(0, n).map((k) => ({ k, v: map[k] }))
}


/**
 * Long-form content for the individual service pages. Only services listed here
 * get their own page; the rest fall back to the services index for now.
 */
export const serviceDetail = {
  'capital-dredging': {
    heroImg: '/img/Dredging-Services.jpg',
    headline: 'Depth where there was none',
    intro:
      'Capital dredging is the excavation of large volumes of material to deepen harbours and waterways or create new land. It is where Rock and Reef started, and the fleet, the crews and the method statements are all built around it.',
    overview: [
      'Ports, berths, approach channels and turning circles: we cut new depth through soft sediment, compacted strata and hard rock, in live ports and against the monsoon calendar.',
      'Our directors have spent two decades building and customising the backhoe, grab and cutter suction dredgers we deploy, so plant is matched to the geology rather than the other way round.',
    ],
    facts: [
      { k: '1.45M m³', v: 'Dredged at Kochi Port for the MULT terminal' },
      { k: '25+', v: 'Years of capital dredging in India' },
      { k: 'Rock', v: 'Breaking and removal with our own backhoe fleet' },
      { k: 'Live port', v: 'Working around traffic without closures' },
    ],
    challenges: [
      {
        title: 'Environmental impact',
        problem:
          'Dredging can disturb marine ecosystems, spread sediment plumes that affect water quality and release contaminants held in the seabed.',
        answer: [
          'Comprehensive environmental impact assessments before mobilisation, with mitigation written into the method statement.',
          'Closed loop and low turbidity techniques to keep sediment dispersion to a minimum.',
          'Beneficial reuse of dredged material for beach nourishment, reclamation or habitat restoration wherever the material allows.',
        ],
      },
      {
        title: 'Weather and currents',
        problem:
          'Storms, swell and strong tidal currents disrupt operations, shift programmes and put crews and plant at risk.',
        answer: [
          'Real time weather and tide monitoring, with the programme adjusted around windows rather than against them.',
          'Vessels selected and moored for rough weather working, so the spread stays productive in marginal conditions.',
          'Experienced crews trained for open water and monsoon operations.',
        ],
      },
      {
        title: 'Seabed conditions',
        problem:
          'Rock, boulders, compacted clay and buried obstructions slow progress and can exceed the reach of standard plant.',
        answer: [
          'Thorough geotechnical and bathymetric survey before work begins, so nothing in the ground is a surprise.',
          'Adaptive methods, switching between backhoe, grab and cutter suction spreads as the strata change.',
          'Rock breaking and removal with heavy backhoe dredgers such as Rock King.',
        ],
      },
      {
        title: 'Regulatory compliance',
        problem:
          'Capital projects sit under layered environmental, safety and port regulations that change by state and by authority.',
        answer: [
          'Close working relationships with port trusts, maritime boards and environmental regulators.',
          'Documented survey control and volume reconciliation, so every cubic metre is evidenced.',
          'A standing commitment to sustainability that goes beyond the minimum permit conditions.',
        ],
      },
    ],
    closing:
      'Successful capital dredging needs expertise, planning and the flexibility to change method mid job. That is what we bring, along with a fleet that was built for it.',
  },

  // The pages below share one shape: overview, when the service is needed,
  // how we deliver it (five steps), the equipment table and related experience.
  // Equipment `units` that match a vessel name on the fleet register link to
  // that vessel's page; anything else is shown as plain text.
  'maintenance-dredging': {
    heroImg: '/img/dreging.jpg',
    headline: 'Keep channels, berths and basins at their design depth',
    intro:
      'Silt, sand and sediment settle in every navigable channel, berth pocket and harbour basin. Left alone, they reduce available draft, restrict the size of vessels that can call, and slow down cargo operations. Maintenance dredging removes this accumulated material on a recurring basis so that the waterway keeps the depth it was designed for.',
    overview: [
      'Rock and Reef Dredging has delivered dredging work along the Indian coastline since 2006. Maintenance dredging is one of our core services, carried out with our grab dredgers, supported by tugs, self-propelled hopper barges and in-house survey boats, with minimal disruption to port and terminal operations.',
    ],
    facts: [
      { k: 'Since 2006', v: 'Dredging along the Indian coastline' },
      { k: '5', v: 'Grab dredgers for berths and confined pockets' },
      { k: 'Live port', v: 'Sequenced around active berths and moving vessels' },
      { k: 'Verified', v: 'Achieved depths confirmed by post-dredge survey' },
    ],
    neededTitle: 'When maintenance dredging is needed',
    needed: [
      'Ports and terminals where siltation is reducing berth depth or navigable draft.',
      'Approach channels and turning circles that need to be restored to their design levels.',
      'Jetties, intake and outfall structures for refineries, power plants and industrial facilities.',
      'Inland waterways, rivers, lakes and reservoirs where sediment is building up.',
      'Areas affected by heavy monsoon siltation, where repeat campaigns are needed.',
    ],
    steps: [
      { t: 'Survey before we start', d: 'Our survey team maps the current seabed with bathymetric surveys, so scope and quantities are agreed on measured data, not estimates.' },
      { t: 'Plan the method and equipment', d: 'We match the dredger to the material and the site: grab dredgers with the right bucket attachment, and a cutter suction dredger where reclamation is required.' },
      { t: 'Dredge around live operations', d: 'Maintenance work often happens beside active berths and moving vessels. We schedule and sequence work to keep the waterway working.' },
      { t: 'Handle and dispose of material', d: 'Dredged material is moved by barge to the agreed disposal or reclamation area, in line with the project’s approvals.' },
      { t: 'Survey after, and hand over', d: 'A post-dredge survey confirms the achieved depths, giving the client a verified record of the work.' },
    ],
    equipmentNote: 'Maintenance campaigns draw on the following units from our fleet, depending on site conditions.',
    equipment: [
      { type: 'Cutter suction dredgers', cls: 'csd', units: ['Brahmaputra', 'Rock 21'], use: 'High-output removal of accumulated sediment from channels and basins, especially where reclamation is required' },
      { type: 'Grab dredgers', cls: 'grab', units: ['Rock 6', 'Rock 3', 'Rock 15', 'Rock 18', 'Kartar'], use: 'Confined areas, deep pockets and berth pockets' },
      { type: 'Barges', cls: 'barge', units: ['Rock 5', 'Rock 9', 'Rock 1', 'Rock 10', 'Rock 12', 'Reef 1'], use: 'Hauling dredged material to disposal areas' },
      { type: 'Tugs', cls: 'tug', units: ['Rockstar', 'Porunai', 'Premrath'], use: 'Positioning and support (if required)' },
      { type: 'Survey boats', cls: 'survey', units: ['Sabir', 'Rock 7', 'Mahalaxmi'], use: 'Pre- and post-dredge bathymetric surveys to verify depths' },
    ],
    experience: [],
  },

  'deep-dredging': {
    heroImg: '/img/deep-dredging-service.png',
    headline: 'Restore storage capacity and structural safety in dams and reservoirs',
    intro:
      'Over time, silt, sediment and debris accumulate on the beds of dams and reservoirs. This reduces storage capacity, puts strain on structures, and affects flood control, irrigation and hydropower output.',
    overview: [
      'Rock and Reef Dredging specialises in deep dredging tailored to the demands of dam infrastructure. Our team removes accumulated material from dam beds and reservoirs using advanced equipment, capable of dredging up to 200 metres, and techniques suited to deep-water and high-pressure environments.',
    ],
    facts: [
      { k: '200 m', v: 'Depth our deep dredging equipment can reach' },
      { k: '20 m+', v: 'Pockets handled by submersible pump dredgers, in production' },
      { k: 'Measured', v: 'Production meters log the quantity dredged' },
      { k: 'Dams', v: 'Desilting at Baglihar and Salal Dam' },
    ],
    neededTitle: 'When deep dredging is needed',
    needed: [
      'Dams and reservoirs that have lost storage capacity to silt.',
      'Hydropower projects where sediment is affecting intake and turbine efficiency.',
      'Irrigation and flood-control reservoirs that need their capacity restored.',
      'Structures near the dam face or gates where accumulated sediment is a risk.',
      'Deep basins and channels where standard dredging depths are not enough.',
    ],
    steps: [
      { t: 'Survey before we start', d: 'Bathymetric surveys map the reservoir or basin bed, so the volume of silt and the work plan are based on measured data. Where siltation is high, production meters also measure the quantity dredged.' },
      { t: 'Plan the method and equipment', d: 'We select dredgers and pumping arrangements to suit the depth, material and distance to the disposal area.' },
      { t: 'Dredge at depth', d: 'Work is carried out with equipment designed for deep-water, high-pressure conditions, scheduled around the dam’s operations.' },
      { t: 'Handle and dispose of material', d: 'Dredged silt is moved to the agreed disposal area, in line with project approvals.' },
      { t: 'Survey after, and hand over', d: 'A post-dredge survey confirms the capacity restored, giving the client a verified record of the work.' },
    ],
    equipmentNote: 'Campaigns draw on the following units from our fleet, depending on site conditions.',
    equipment: [
      { type: 'Cutter suction dredgers', cls: 'csd', units: ['Brahmaputra', 'Rock 21'], use: 'Removal of large volumes of silt and sediment from reservoir beds' },
      { type: 'Grab dredgers', cls: 'grab', units: ['Rock 6', 'Rock 3', 'Rock 15', 'Rock 18', 'Kartar'], use: 'Deep pockets with submerged debris and areas close to structures' },
      { type: 'Submersible pump dredgers', units: 'In production', use: 'Deep pockets where dredging depths exceed 20 metres' },
      { type: 'Survey boats', cls: 'survey', units: ['Sabir', 'Rock 7', 'Mahalaxmi'], use: 'Pre- and post-dredge bathymetric surveys to verify depths' },
    ],
    experience: [
      { text: 'Dam desilting projects at Baglihar and Salal Dam (June 2026).' },
      { text: 'Desilting and erosion protection project at Dakpathar (August 2020).', project: 'dakpathar' },
    ],
  },

  'inland-dredging': {
    heroImg: '/img/dakpathar-barrage-rock-and-reef-project.jpg',
    headline: 'Dredging for rivers, lakes and industrial water bodies',
    intro:
      'Inland waterways and water bodies silt up just as ports do. Rivers lose depth, lakes and ponds lose volume, and industrial cooling ponds lose capacity.',
    overview: [
      'Beyond coastal work, Rock and Reef Dredging carries out inland dredging for rivers, lakes, dams and industrial water bodies, delivered with our own dredgers and survey boats.',
    ],
    facts: [
      { k: '2', v: 'Cutter suction dredgers for rivers, lakes and ponds' },
      { k: 'Bokaro', v: 'Cooling pond dredging for Bokaro Steel' },
      { k: 'Pipeline', v: 'Material pumped to disposal or reclamation' },
      { k: 'Own fleet', v: 'Our own dredgers and survey boats' },
    ],
    neededTitle: 'When inland dredging is needed',
    needed: [
      'Rivers and canals where siltation is restricting depth or flow.',
      'Lakes and ponds that have lost volume to sediment.',
      'Industrial cooling ponds and intake basins at steel plants, power plants and refineries.',
      'Erosion protection works along riverbanks.',
    ],
    steps: [
      { t: 'Survey before we start', d: 'Bathymetric surveys map the current bed levels, so scope and quantities are agreed on measured data.' },
      { t: 'Plan the method and equipment', d: 'We choose the dredger to suit the water body, the material and how the dredged material will be handled.' },
      { t: 'Mobilise and dredge', d: 'Our equipment is brought to site and dredging is carried out in line with the client’s operating requirements.' },
      { t: 'Handle and dispose of material', d: 'Dredged material is moved by pipeline to the agreed disposal or reclamation area.' },
      { t: 'Survey after, and hand over', d: 'A post-dredge survey confirms the achieved depths and volumes.' },
    ],
    equipmentNote: 'Campaigns draw on the following units from our fleet, depending on site conditions.',
    equipment: [
      { type: 'Cutter suction dredgers', cls: 'csd', units: ['Brahmaputra', 'Rock 21'], use: 'High-output dredging of rivers, lakes and ponds, and where reclamation is required' },
      { type: 'Survey boats', cls: 'survey', units: ['Sabir', 'Rock 7', 'Mahalaxmi'], use: 'Pre- and post-dredge bathymetric surveys to verify depths' },
    ],
    experience: [
      { text: 'Cooling pond dredging for Bokaro Steel (order secured January 2026), our first major inland project.' },
    ],
  },

  trenching: {
    heroImg: '/img/Trenching-Works.jpg',
    headline: 'Precise seabed excavation and backfilling for pipelines and subsea cables',
    intro:
      'Pipelines and subsea cables need to be laid in a trench of the right width and depth, then protected by backfill. Getting the trench right is critical to the safety and life of the asset.',
    overview: [
      'Rock and Reef Dredging has completed trenching and backfilling projects in Indian waters, including work as a subcontractor for global EPC leaders. Our equipment is designed for precise seabed excavation, and we are eager to expand further in this area.',
    ],
    facts: [
      { k: '4,068 RM', v: 'Trenched and backfilled for JD-5, Mumbai Harbour' },
      { k: '50 m', v: 'Widest trench cut on the JD-5 project' },
      { k: '6 m', v: 'Below Chart Datum, deepest trench on JD-5' },
      { k: 'Rock', v: 'Hard strata cut or blasted where needed' },
    ],
    neededTitle: 'When trenching is needed',
    needed: [
      'Offshore and nearshore pipeline projects.',
      'Subsea cable-laying for power and communications.',
      'Intake and outfall pipelines for industrial, desalination and power facilities.',
      'Pipeline crossings through harbours and navigable channels.',
      'Projects where the seabed includes rock or hard strata that need to be cut or blasted.',
    ],
    steps: [
      { t: 'Survey before we start', d: 'Bathymetric and geophysical surveys define the route, the seabed conditions and the trench profile.' },
      { t: 'Plan the method and equipment', d: 'We match the excavator or dredger to trench width, depth and seabed material, and plan rock blasting where needed.' },
      { t: 'Excavate to the design profile', d: 'The trench is cut to the specified width and depth, with position checked against the design alignment.' },
      { t: 'Support laying and backfill', d: 'Once the pipeline or cable is placed, the trench is backfilled and protected as specified.' },
      { t: 'Survey after, and hand over', d: 'A post-trenching survey records the as-built trench for the client.' },
    ],
    equipmentNote: 'Campaigns draw on the following units from our fleet, depending on site conditions.',
    equipment: [
      { type: 'Backhoe dredgers', cls: 'backhoe', units: ['Octopus', 'Bheem', 'Rock King'], use: 'Precise trench excavation, including in hard material' },
      { type: 'Grab dredgers', cls: 'grab', units: ['Rock 6', 'Rock 3', 'Rock 15', 'Rock 18', 'Kartar'], use: 'Trenching in deeper or confined sections' },
      { type: 'Barges', cls: 'barge', units: ['Rock 5', 'Rock 9', 'Rock 1', 'Rock 10', 'Rock 12', 'Reef 1'], use: 'Carrying excavated material and backfill' },
      { type: 'Tugs', cls: 'tug', units: ['Rockstar', 'Porunai', 'Premrath'], use: 'Positioning and support (if required)' },
      { type: 'Survey boats', cls: 'survey', units: ['Sabir', 'Rock 7', 'Mahalaxmi'], use: 'Route surveys and as-built verification' },
    ],
    experience: [
      { text: 'Fifth Oil Berth (JD-5) Project, Mumbai Harbour (2019): 4,068 RM of trenching and backfilling, trench widths of 5 to 50 m, depths up to 6 m below Chart Datum, subcontracted by Sapura.', project: 'jd5' },
    ],
  },

  survey: {
    heroImg: '/img/Hydrographic-and-Bathymetric-Survey.jpg',
    headline: 'Accurate seabed and water body surveys, before, during and after every project',
    intro:
      'Every dredging, trenching or marine construction project starts and ends with a survey, with regular periodic surveys in between to track progress. Accurate depth and seabed data decide how much material has to be moved, and prove that the work has been done to specification.',
    overview: [
      'Rock and Reef Dredging offers comprehensive marine survey services, including bathymetric, geophysical, environmental and hydrographic surveys, carried out with our own survey boats.',
    ],
    facts: [
      { k: 'In-house', v: 'Survey boats and crews from our own fleet' },
      { k: 'Before', v: 'Existing depths measured to set quantities' },
      { k: 'After', v: 'Achieved depths verified at handover' },
      { k: 'Your datum', v: 'Data delivered in the client’s datum and format' },
    ],
    neededTitle: 'When a survey is needed',
    needed: [
      'Before dredging, to measure existing depths and calculate quantities.',
      'After dredging, to verify the depths achieved.',
      'Before pipeline, cable or trenching works, to select and define the route.',
      'For ports and terminals that need regular depth checks.',
      'For environmental baseline and compliance studies.',
    ],
    steps: [
      { t: 'Plan the survey', d: 'We define the survey area, line spacing and accuracy required with the client.' },
      { t: 'Mobilise the survey boat', d: 'Our survey boats are deployed to site with the required equipment and crew.' },
      { t: 'Collect the data', d: 'Bathymetric, geophysical or environmental data is gathered across the survey area.' },
      { t: 'Process and check', d: 'Data is processed, checked and converted to the client’s datum and format.' },
      { t: 'Deliver the results', d: 'The client receives survey plans, depth charts and a report of findings.' },
    ],
    equipmentNote: 'Survey campaigns draw on the following units from our fleet.',
    equipment: [
      { type: 'Survey boats', cls: 'survey', units: ['Sabir', 'Rock 7', 'Mahalaxmi'], use: 'Bathymetric, geophysical, environmental and hydrographic surveys' },
      { type: 'Motor launches', cls: 'workboat', units: ['Reef 3', 'Reef 7'], use: 'Crew transfer and survey support (if required)' },
    ],
    experience: [
      { text: 'Pre, periodic and post-dredge surveys across our capital dredging, maintenance dredging and desilting projects.' },
    ],
  },

  breakwater: {
    heroImg: '/img/Breakwater-Construction-Services-iPAC-Automation-1-1.jpg',
    headline: 'Durable coastal protection built with our own marine fleet',
    intro:
      'Breakwaters protect harbours, terminals, shorelines and coastal infrastructure from waves and erosion. Building them means placing large quantities of rock and armour units accurately, often in exposed water.',
    overview: [
      'Breakwater construction is an area we are actively expanding into. While we have not yet executed a breakwater project, we have the equipment and the marine experience to do so. Rock and Reef Dredging operates grab and backhoe dredgers, barges and flat pontoons, which are well suited to breakwater work, along with the dredging, rock blasting and reclamation experience that breakwaters depend on.',
      'We are confident in delivering durable and effective coastal protection on time, to high standards of quality and safety.',
    ],
    facts: [
      { k: 'Rock', v: 'Blasting experience from New Mangalore Port' },
      { k: 'Own fleet', v: 'Grab and backhoe dredgers, barges and flat pontoons' },
      { k: 'Profile', v: 'Checked against the design as we build' },
      { k: 'Verified', v: 'Final survey records the completed breakwater' },
    ],
    neededTitle: 'When breakwater construction is needed',
    needed: [
      'New ports, harbours and fishing harbours that need sheltered water.',
      'Terminals and jetties exposed to wave action.',
      'Shorelines affected by erosion.',
      'Intake and outfall structures for coastal industrial plants.',
      'Reclamation areas that need protection.',
    ],
    steps: [
      { t: 'Survey before we start', d: 'Bathymetric surveys of the alignment confirm seabed levels and conditions.' },
      { t: 'Prepare the seabed', d: 'Dredging and rock blasting, where needed, prepare the foundation for the breakwater.' },
      { t: 'Place the core and armour', d: 'Rock and armour material is transported by barge and placed to the design profile using our dredgers.' },
      { t: 'Check as we build', d: 'Profiles are checked against the design during construction.' },
      { t: 'Survey after, and hand over', d: 'A final survey records the completed breakwater for the client.' },
    ],
    equipmentNote: 'Campaigns draw on the following units from our fleet, depending on site conditions.',
    equipment: [
      { type: 'Backhoe dredgers', cls: 'backhoe', units: ['Octopus', 'Bheem', 'Rock King'], use: 'Placement of rock and armour material' },
      { type: 'Grab dredgers', cls: 'grab', units: ['Rock 6', 'Rock 3', 'Rock 15', 'Rock 18', 'Kartar'], use: 'Seabed preparation and material handling' },
      { type: 'Barges and flat pontoons', cls: 'barge', units: ['Rock 5', 'Rock 9', 'Rock 1', 'Rock 10', 'Rock 12', 'Reef 1'], use: 'Transporting and placing rock and armour material' },
      { type: 'Tugs', cls: 'tug', units: ['Rockstar', 'Porunai', 'Premrath'], use: 'Positioning and support (if required)' },
      { type: 'Survey boats', cls: 'survey', units: ['Sabir', 'Rock 7', 'Mahalaxmi'], use: 'Alignment, profile and as-built surveys' },
    ],
    experienceNote: 'Our experience in the marine works that breakwater construction depends on:',
    experience: [
      { text: 'Rock blasting for the capital dredging project at New Mangalore Port (November 2016).' },
      { text: 'Capital dredging and reclamation projects, including our first reclamation contract using cutter suction dredgers (November 2022).' },
      { text: 'Trenching and backfilling at Mumbai Harbour (2019), working from barges in active port waters.', project: 'jd5' },
    ],
  },

  'intake-outfall': {
    heroImg: '/img/intake-outfall-channel-dredging-services-india.webp',
    headline: 'Keep seawater intakes and discharge channels clear',
    intro:
      'Coastal industries depend on a steady supply of water and a clear channel to discharge it. Power plants, refineries and steel plants use seawater for cooling. Desalination plants draw in large volumes of seawater and return concentrated brine through an outfall. When these intake and outfall channels silt up, flow drops, plant performance can suffer, and the dispersal of discharge water can be affected.',
    overview: [
      'Rock and Reef Dredging dredges intake and outfall channels, basins and pump-house approaches for industrial clients, including desalination plants. We work around live plant operations so that water supply and discharge are not interrupted, keeping power plants, refineries, steel plants and desalination plants running.',
    ],
    facts: [
      { k: 'Live plant', v: 'Water supply and discharge kept running' },
      { k: '5', v: 'Grab dredgers for work close to intake structures' },
      { k: 'Monsoon', v: 'Repeat campaigns where siltation returns' },
      { k: 'Verified', v: 'Achieved depths confirmed by post-dredge survey' },
    ],
    neededTitle: 'When intake and outfall dredging is needed',
    needed: [
      'Seawater intake channels and pump-house approaches at desalination plants that have silted up.',
      'Brine outfall channels at desalination plants that need to be restored to design depth.',
      'Cooling water intake channels and pump-house approaches at power plants, refineries and steel plants.',
      'Outfall channels and discharge basins that need to be restored to design depth.',
      'New intake and outfall channels being constructed for plant expansions.',
      'Areas affected by heavy monsoon siltation, where repeat campaigns are needed.',
    ],
    steps: [
      { t: 'Survey before we start', d: 'Bathymetric surveys map the channel and basin, so scope and quantities are agreed on measured data.' },
      { t: 'Plan the method and equipment', d: 'We select the dredger to suit the channel width, depth and how close the work is to intake structures.' },
      { t: 'Dredge around live operations', d: 'Work is scheduled and sequenced to keep the plant’s water supply and discharge running.' },
      { t: 'Handle and dispose of material', d: 'Dredged material is moved by barge to the agreed disposal or reclamation area.' },
      { t: 'Survey after, and hand over', d: 'A post-dredge survey confirms the achieved depths, giving the client a verified record of the work.' },
    ],
    equipmentNote: 'Campaigns draw on the following units from our fleet, depending on site conditions.',
    equipment: [
      { type: 'Grab dredgers', cls: 'grab', units: ['Rock 6', 'Rock 3', 'Rock 15', 'Rock 18', 'Kartar'], use: 'Confined areas close to intake and pump-house structures' },
      { type: 'Backhoe dredgers', cls: 'backhoe', units: ['Octopus', 'Bheem', 'Rock King'], use: 'Precise removal of silt and hard-packed material' },
      { type: 'Cutter suction dredgers', cls: 'csd', units: ['Brahmaputra', 'Rock 21'], use: 'High-output dredging of larger channels and basins, when reclamation is required' },
      { type: 'Barges', cls: 'barge', units: ['Rock 5', 'Rock 9', 'Rock 1', 'Rock 10', 'Rock 12', 'Reef 1'], use: 'Hauling dredged material to disposal areas' },
      { type: 'Survey boats', cls: 'survey', units: ['Sabir', 'Rock 7', 'Mahalaxmi'], use: 'Pre- and post-dredge bathymetric surveys to verify depths' },
    ],
    experience: [],
  },

  shipbuilding: {
    heroImg: '/img/Shipbuilding.jpg',
    headline: 'Specialised marine vessels built and repaired at our own shipyard',
    intro:
      'Dredging and marine projects depend on purpose-built vessels. Rock and Reef Dredging runs its own shipyard, which can build specialised vessels up to 100 metres in length, led by a director with 30 years of experience managing the construction of marine vessels and dredging equipment.',
    overview: [
      'We began using our shipyard for external orders in 2014, and built our first tug in 2017. Today we design and build a diverse range of specialised vessels, tailored to the unique requirements of maritime projects.',
    ],
    facts: [
      { k: '100 m', v: 'Length of vessel our shipyard can build' },
      { k: '30', v: 'Years of vessel and dredger construction experience' },
      { k: 'Since 2014', v: 'Shipyard open to external orders' },
      { k: 'First tug', v: 'Built at our shipyard in January 2017' },
    ],
    neededTitle: 'When our shipyard is the right choice',
    needed: [
      'Dredgers, barges and pontoons built for your project requirements.',
      'Tugboats and support vessels for ports and marine contractors.',
      'Survey vessels and jack-ups.',
      'Repair, refit and upgrade of existing vessels and dredging equipment.',
      'Projects where a vessel needs to be designed around a specific site or task.',
    ],
    steps: [
      { t: 'Understand the requirement', d: 'We work with the client on the vessel’s purpose, size, capacity and operating conditions.' },
      { t: 'Design and plan', d: 'Our engineering team prepares the design and build plan.' },
      { t: 'Build in our shipyard', d: 'Hull fabrication, fitting out and systems installation are carried out at our yard.' },
      { t: 'Launch and test', d: 'The vessel is launched and put through trials and checks before handover.' },
      { t: 'Deliver and support', d: 'The vessel is delivered to the client with documentation and ongoing support.' },
    ],
    equipmentTitle: 'What we build',
    equipmentNote: 'We build the following types of vessels at our shipyard.',
    equipmentCols: ['Vessel type', 'Includes', 'Used for'],
    equipment: [
      { type: 'Dredgers', cls: 'backhoe', units: 'Backhoe, grab and cutter suction dredgers', use: 'Built to suit dredging projects' },
      { type: 'Barges and pontoons', cls: 'barge', units: 'Flat pontoons, barges and self-propelled hopper barges', use: 'Material transport and work platforms' },
      { type: 'Tugs and support vessels', cls: 'tug', units: 'Tugs and support vessels', use: 'Positioning and support for marine works' },
      { type: 'Survey vessels and jack-ups', cls: 'survey', units: 'Survey boats and jack-ups', use: 'Hydrographic survey and stable work platforms' },
    ],
    experience: [
      { text: 'First tug built at our shipyard (January 2017).' },
      { text: 'Shipyard opened to external orders (May 2014).' },
    ],
  },
}
