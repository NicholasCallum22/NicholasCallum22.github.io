// Single source of site content. Every factual line traces to a claim ID in
// Nischal Prathipati's Master CV fact file (v6). Keep qualifiers exactly:
// reported, simulated, calculated, estimated, approximately.

export type Evidence = "test" | "work" | "sim" | "calc";
export type Scope = "Industry" | "Independent" | "Academic";

export const evidenceInfo: Record<
  Evidence,
  { label: string; short: string; explain: string }
> = {
  test: {
    label: "Test data",
    short: "Test",
    explain: "Taken from physical test results: hold tests or rig measurements.",
  },
  work: {
    label: "Workplace result",
    short: "Work",
    explain:
      "An outcome recorded or reported at the employer. The exact wording keeps the word reported where the source does.",
  },
  sim: {
    label: "Simulation",
    short: "Sim",
    explain:
      "A modelled result from FEA, CFD or multi-body simulation, not a measurement.",
  },
  calc: {
    label: "Calculation or estimate",
    short: "Calc",
    explain:
      "Worked out by hand, in a spreadsheet or from a cost estimate. Not a measured or quoted figure.",
  },
};

export const profile = {
  name: "Nischal Prathipati",
  role: "Mechanical design engineer",
  pitch:
    "I design hydraulic, drivetrain and EV-motor components, check the analysis against the test, and get the drawing right for the supplier.",
  location: "Hyderabad, India",
  availability: "Available now. Open to relocation in India and abroad.",
  email: "prathipati.nischal@proton.me",
  linkedin: "https://www.linkedin.com/in/nischalprathipati",
  cv: "cv/Nischal_Prathipati_CV.pdf",
  summary: [
    "Just under two years of industrial engineering at JCB, Caterpillar and Pitti Engineering, plus an MSc in Automotive Engineering from the University of Leeds.",
    "My work sits where CAD, analysis and the shop floor meet. At JCB I produced Siemens NX models and BS 8888 drawings for hydraulic and drivetrain subsystems. At Caterpillar I investigated fatigue failures in powertrain vibration mounts and matched a non-linear ANSYS model to rig data. At Pitti Engineering I worked on liquid-cooled EV traction motors: sealing, laminations, bearings and power density.",
    "Since February 2026 I have been running independent projects in tolerance stack-up, injection-moulding DFM, topology optimisation and reacting-flow CFD while I look for my next role.",
  ],
};

export const now = {
  heading: "Now, October 2026",
  items: [
    "Looking for product and mechanical design engineering roles in India or abroad, available immediately.",
    "Four independent projects, with the Creo, SolidWorks, ANSYS, Fusion 360 and OpenFOAM files ready to walk through in an interview.",
    "Open to PhD conversations in reacting flows, structural optimisation or vehicle dynamics.",
  ],
};

export type Result = {
  figure: string;
  what: string;
  where: string;
  scope: Scope;
  evidence: Evidence;
  claims: string;
  slug?: string;
};

export const results: Result[] = [
  {
    figure: "22% → 4%",
    what: "Coolant-jacket hold-test failure rate on a liquid-cooled EV motor housing: an 18-percentage-point cut, 11 failures in 50 units down to 2 in 50, in pre-series testing.",
    where: "Pitti Engineering",
    scope: "Industry",
    evidence: "test",
    claims: "PIT-11",
    slug: "ev-traction-motor",
  },
  {
    figure: "Within 6%",
    what: "Simulated peak deflection of a powertrain vibration mount against hydraulic test-rig data, from an initial under-prediction of about 19%.",
    where: "Caterpillar",
    scope: "Industry",
    evidence: "test",
    claims: "CAT-07",
    slug: "vibration-mount",
  },
  {
    figure: "25%",
    what: "Reported life extension from a reinforced isolation design after investigating high-frequency fatigue failures in vibration mounts.",
    where: "Caterpillar",
    scope: "Industry",
    evidence: "work",
    claims: "CAT-02",
    slug: "vibration-mount",
  },
  {
    figure: "14%",
    what: "Reported reduction in supplier dimensional errors across 40+ manufacturing and assembly drawings to BS 8888 and ASME Y14.5.",
    where: "JCB",
    scope: "Industry",
    evidence: "work",
    claims: "JCB-06",
    slug: "hydraulic-packaging",
  },
  {
    figure: "9 dB",
    what: "Lower operational NVH after tightening journal-bearing clearances from 0.05 mm to 0.03 mm during endurance testing.",
    where: "Pitti Engineering",
    scope: "Industry",
    evidence: "work",
    claims: "PIT-07",
    slug: "ev-traction-motor",
  },
  {
    figure: "14%",
    what: "Lower post-production rejection rate for heavily loaded shafts, after applying PFMEA to the machining risks and holding runout within 15 µm.",
    where: "Pitti Engineering",
    scope: "Industry",
    evidence: "work",
    claims: "PIT-08",
  },
  {
    figure: "11%",
    what: "Lighter cast-iron mounting bracket, keeping a 2.5 factor of safety under a simulated 5 g shock load.",
    where: "JCB",
    scope: "Industry",
    evidence: "sim",
    claims: "JCB-08",
    slug: "hydraulic-packaging",
  },
  {
    figure: "9%",
    what: "Calculated gain in gravimetric power density for a motor subassembly about 8.3% lighter at unchanged rated torque and power.",
    where: "Pitti Engineering",
    scope: "Industry",
    evidence: "calc",
    claims: "PIT-12",
    slug: "ev-traction-motor",
  },
  {
    figure: "~US$15,000",
    what: "Approximate pilot-build rework avoided by design countermeasures from packaging and Digital Mock-Up reviews.",
    where: "JCB",
    scope: "Industry",
    evidence: "calc",
    claims: "JCB-07",
    slug: "hydraulic-packaging",
  },
  {
    figure: "~US$8,500",
    what: "Approximate prototype scrap prevented by tooling countermeasures for a concentricity mismatch.",
    where: "Pitti Engineering",
    scope: "Industry",
    evidence: "calc",
    claims: "PIT-10",
  },
  {
    figure: "29%",
    what: "Lighter structural steel bracket (1.45 kg per unit) from stress-constrained topology optimisation, at a 2.15 factor of safety.",
    where: "Independent project",
    scope: "Independent",
    evidence: "sim",
    claims: "TOPO-01",
    slug: "topology-bracket",
  },
  {
    figure: "Within 4.5%",
    what: "Simulated Chapman-Jouguet detonation velocity (2.85%) and pressure (4.43%) against NASA CEA and Caltech reference data.",
    where: "Independent project",
    scope: "Independent",
    evidence: "sim",
    claims: "CFD-01",
    slug: "detonation-cfd",
  },
  {
    figure: "15%",
    what: "Simulated improvement in vehicle stability from suspension geometry and active-control optimisation.",
    where: "MSc dissertation, Leeds",
    scope: "Academic",
    evidence: "sim",
    claims: "TH-06",
    slug: "msc-suspension",
  },
];

export const capabilities = [
  {
    title: "Drawings a supplier can build",
    body: "Siemens NX, SolidWorks and CATIA V5 models with BS 8888 and ASME Y14.5 GD&T. Engineering change orders and tolerance reviews with casting and machining suppliers. DFMEA and PFMEA before the parts are cut.",
    proof: "JCB-06, CAT-01, PIT-03, PIT-08",
  },
  {
    title: "Analysis checked against test",
    body: "Structural, thermal and non-linear FEA in ANSYS Mechanical. On the Caterpillar mount, refining the support-stiffness boundary condition took the model from about 19% under-prediction to within 6% of the rig.",
    proof: "CAT-07, JCB-05, PIT-09",
  },
  {
    title: "EV motor and powertrain hardware",
    body: "Stator and rotor laminations, coolant-jacket sealing, power density, bearing clearances and NVH on liquid-cooled traction motors, plus drivetrain and hydraulic packaging on off-highway machines.",
    proof: "PIT-01, PIT-11, PIT-12, PIT-07, JCB-02",
  },
];

export type Bullet = { t: string; ids: string };
export type Role = {
  org: string;
  role: string;
  place: string;
  dates: string;
  context: string;
  tools: string[];
  bullets: Bullet[];
  slug?: string;
};

export const roles: Role[] = [
  {
    org: "JCB",
    role: "Junior Mechanical Design Engineer",
    place: "United Kingdom",
    dates: "Nov 2025 – Jan 2026",
    context: "Off-highway machinery: hydraulic and drivetrain subsystems.",
    tools: ["Siemens NX", "BS 8888", "ASME Y14.5", "DFMEA", "Digital Mock-Up", "FEA"],
    slug: "hydraulic-packaging",
    bullets: [
      { t: "Produced and reviewed 40+ 3D CAD models and manufacturing and assembly drawings for hydraulic components, drivetrain subsystems and global valve assemblies in Siemens NX to BS 8888 and ASME Y14.5 GD&T, contributing to a reported 14% reduction in supplier dimensional errors.", ids: "JCB-06, JCB-01" },
      { t: "Managed packaging studies and Digital Mock-Up reviews to resolve spatial and kinematic clashes between hydraulic and drivetrain components; the resulting design countermeasures avoided approximately US$15,000 of pilot-build rework.", ids: "JCB-02, JCB-07" },
      { t: "Cut the mass of a cast-iron mounting bracket by 11% by removing material from low-stress regions identified through structural FEA, while maintaining a 2.5 factor of safety under a simulated 5 g shock load.", ids: "JCB-08" },
      { t: "Coordinated CAD outputs, design changes and interface information with offshore design teams in India using top-down assembly practice and interface-control checkpoints, reducing design-iteration turnaround time by 15%.", ids: "JCB-04, JCB-09" },
      { t: "Performed DFMEA risk assessments to identify potential failure modes early and support the reliability of off-highway machinery.", ids: "JCB-03" },
      { t: "Reviewed physical machine-performance data against digital models with Test and Development engineers, informing design modifications reported to improve durability and efficiency.", ids: "JCB-05" },
    ],
  },
  {
    org: "Caterpillar",
    role: "Graduate Manufacturing Engineer",
    place: "United Kingdom",
    dates: "Oct 2024 – Sep 2025",
    context: "Powertrain components: the R&D-to-supplier interface with casting and machining suppliers.",
    tools: ["ANSYS Mechanical", "GD&T", "ECO", "DFMEA", "PFMEA", "PTC Windchill", "MATLAB", "Python"],
    slug: "vibration-mount",
    bullets: [
      { t: "Investigated high-frequency fatigue failures in powertrain vibration mounts by reviewing failure modes and operating loads, and supported a reinforced isolation design reported to extend component life by 25%.", ids: "CAT-02" },
      { t: "Validated a non-linear ANSYS Mechanical model of the mount (hyperelastic elastomer with frictional contact) against hydraulic test-rig displacement data, refining support-stiffness boundary conditions to bring simulated peak deflection within 6% of measurement.", ids: "CAT-07" },
      { t: "Coordinated engineering change orders and GD&T tolerance reviews between R&D and external casting and machining suppliers, clarifying drawing requirements and aligning design intent with manufacturable supplier outputs.", ids: "CAT-01" },
      { t: "Consolidated test-validation schedules and engineering information into a unified PDM workflow in PTC Windchill, reducing cross-departmental data-retrieval time by approximately 15 hours per week.", ids: "CAT-04" },
      { t: "Participated in cross-functional DFMEA workshops for powertrain couplings and contributed to PFMEA and statistical-process-control activities.", ids: "CAT-03" },
      { t: "Investigated manufacturing deviations through root-cause reviews and revised CAD models and engineering drawings where required, aligning the documented design definition with manufacturing needs.", ids: "CAT-06" },
      { t: "Processed drivetrain and hydraulic engineering data with MATLAB and Python (NumPy) workflows.", ids: "CAT-05" },
    ],
  },
  {
    org: "Pitti Engineering Limited",
    role: "Component Engineer",
    place: "Hyderabad, India",
    dates: "Oct 2023 – Jun 2024",
    context: "EV traction motors and powertrain components: stators, rotors, housings and shafts.",
    tools: ["SolidWorks", "CATIA V5", "ANSYS thermal FEA", "GD&T", "DFMEA", "PFMEA", "DFA"],
    slug: "ev-traction-motor",
    bullets: [
      { t: "Reduced the hydrostatic coolant-jacket test failure rate from 22% to 4% (an 18-percentage-point cut, 11 to 2 failures per 50 units) on a liquid-cooled EV traction-motor stator housing by redesigning the O-ring gland geometry (18–22% crush, Ra ≤ 1.6 µm) and tightening counterbore positional GD&T in SolidWorks.", ids: "PIT-11" },
      { t: "Raised calculated gravimetric power density by 9% (kW/kg) by cutting subassembly mass by about 8.3% at unchanged rated torque and power, simplifying the end-shield and winding-coil enclosure with DFA, and confirmed end-winding hot spots stayed below the Class H limit (180 °C) with steady-state and transient thermal FEA.", ids: "PIT-12, PIT-06, PIT-09" },
      { t: "Redesigned EV motor stator and rotor lamination stacks in SolidWorks and CATIA V5 with FEA support, modifying stack geometry to cut stamping material waste by a reported 15%.", ids: "PIT-01" },
      { t: "Tightened journal-bearing clearances from 0.05 mm to 0.03 mm after assessing rotating-assembly vibration in continuous endurance testing, increasing dynamic stiffness and reducing operational NVH by 9 dB.", ids: "PIT-07" },
      { t: "Applied PFMEA to precision machining of heavily loaded dynamic shafts, holding runout within 15 µm and reducing post-production rejection rates by 14%.", ids: "PIT-08" },
      { t: "Diagnosed a concentricity mismatch during shop-floor validation and delivered immediate tooling countermeasures, preventing approximately US$8,500 of prototype scrap.", ids: "PIT-10" },
      { t: "Interpreted 100+ engineering drawings using GD&T and worked with cross-functional teams to resolve drawing ambiguities, reduce build issues and support on-time component delivery.", ids: "PIT-03, PIT-05" },
      { t: "Performed structural and transient thermal FEA on high-speed rotating components to validate operating limits and support design sign-off, and applied DFMEA to proposed design changes.", ids: "PIT-02, PIT-09, PIT-04" },
    ],
  },
  {
    org: "Bharat Heavy Electricals Limited (BHEL)",
    role: "Project Engineer Intern",
    place: "Vizag, India",
    dates: "Apr 2019 – Jul 2019",
    context: "Production analysis and quality audits for welded assemblies.",
    tools: ["Production data analysis", "Quality audits", "Root-cause analysis"],
    bullets: [
      { t: "Analysed production data to identify machine-downtime causes and process inefficiencies, recommending changes associated with a reported 5% throughput improvement.", ids: "BHEL-01" },
      { t: "Documented non-conformances and supported root-cause investigations into welded-assembly failures during maintenance and quality audits, and prepared inspection-audit reports.", ids: "BHEL-02, BHEL-03" },
    ],
  },
];

export const independent = {
  title: "Independent engineering projects",
  place: "Hyderabad, India",
  dates: "Feb 2026 – Present",
  intro:
    "Self-directed CAD, FEA, DFM and CFD projects built on my own geometry and catalogue parts after relocating to Hyderabad. These are independent projects, not employment, and every result is calculated, estimated or simulated.",
};

export const teams: Role[] = [
  // Per Nischal's correction (30 Oct 2026), all student-team work is recorded under Team Eco Titans.
  {
    org: "Team Eco Titans, VIT",
    role: "Design Engineer",
    place: "Vellore, India",
    dates: "Oct 2019 – Feb 2022",
    context: "Shell Eco-marathon student team.",
    tools: ["CATIA", "SolidWorks", "Fusion 360", "ANSYS CFD and FEA", "MATLAB", "Simulink"],
    slug: "student-teams",
    bullets: [
      { t: "Led the aerodynamic bodywork design in CATIA, SolidWorks and ANSYS CFD and FEA, delivering a reported 15% reduction in aerodynamic drag.", ids: "CEL-01" },
      { t: "Optimised the chassis with CAD and ANSYS FEA for a reported 10.5–12% weight reduction while maintaining structural integrity.", ids: "CEL-02" },
      { t: "Designed lightweight powertrain-mounting brackets in Fusion 360 and ANSYS, achieving a simulated 24% bracket mass reduction through multi-load-case FEA while holding a minimum 2.0 factor of safety under peak cornering and braking loads.", ids: "ECO-02" },
      { t: "Modelled the powertrain in MATLAB and Simulink to maximise driving range, and processed telemetry in MATLAB to correlate multi-body models against accelerometer data for suspension tuning and structural hardpoints.", ids: "CEL-05, CEL-07" },
      { t: "Contributed to SolidWorks subsystem packaging, ANSYS structural validation and safety-compliance documentation for the 2021 Shell Eco-marathon Virtual Technical Inspection, with first-pass approval reported for the chassis, steering and powertrain-mounting subsystems.", ids: "ECO-01" },
      { t: "Applied DFM, floor planning and process planning with the manufacturing team, shortening assembly times and achieving a reported 20% improvement over the team's previous production process.", ids: "CEL-03" },
    ],
  },
];

export const education = [
  {
    degree: "MSc Automotive Engineering",
    school: "University of Leeds, United Kingdom",
    dates: "2022 – 2023",
    detail: "Upper Second-Class Honours (2:1), 63% overall. Dissertation: Enhancing EV Performance through Suspension System Optimisation.",
  },
  {
    degree: "BTech Mechanical Engineering",
    school: "Vellore Institute of Technology (VIT), Vellore, India",
    dates: "2018 – 2022",
    detail: "First Class, CGPA 7.93 out of 10.",
  },
];

export const certifications = [
  "Gold certification, Electric Vehicles and Renewable Energy, NPTEL (IIT Madras)",
  "Battery Pack Design for Electric Vehicles, Udemy (instructor Mohan Reddy, PhD, IISc)",
  "Two-Wheeler Design and Manufacturing, TVS Limited",
  "Product Lifecycle Management, Great Learning Academy",
  "CAD/CAM, Vellore Institute of Technology",
];

export const languages = [
  { name: "English", level: "C1 to C2. IELTS Academic, 2022. MSc taught in English in the UK." },
  { name: "Telugu", level: "Native" },
  { name: "Hindi", level: "C1, professional working proficiency" },
  { name: "German", level: "A1, elementary" },
];

export const additional =
  "Indian driving licence (car and motorcycle) and International Driving Permit. Open to travel for test-track, supplier-audit and tooling-site visits.";

export type SkillRow = { area: string; items: { name: string; where: string }[] };

export const skills: SkillRow[] = [
  {
    area: "CAD",
    items: [
      { name: "Siemens NX", where: "JCB" },
      { name: "SolidWorks", where: "Pitti, independent, student teams" },
      { name: "SolidWorks Plastics", where: "Independent" },
      { name: "CATIA V5", where: "Pitti, BTech, Eco Titans" },
      { name: "Creo Parametric", where: "Independent" },
      { name: "Fusion 360", where: "Independent, Eco Titans" },
    ],
  },
  {
    area: "Analysis",
    items: [
      { name: "ANSYS Mechanical: structural, thermal, non-linear, modal, topology", where: "Caterpillar, Pitti, independent, MSc" },
      { name: "ANSYS Explicit Dynamics", where: "MSc group project" },
      { name: "ANSYS Fluent", where: "BTech, Eco Titans" },
      { name: "OpenFOAM", where: "Independent, BTech" },
      { name: "MATLAB, Simulink, Simscape", where: "MSc, Eco Titans" },
      { name: "Python with NumPy, MATLAB", where: "Caterpillar" },
    ],
  },
  {
    area: "Methods and standards",
    items: [
      { name: "BS 8888 and ASME Y14.5 GD&T", where: "JCB, Caterpillar, Pitti" },
      { name: "DFMEA and PFMEA", where: "JCB, Caterpillar, Pitti, MSc" },
      { name: "DFM and DFA", where: "Pitti, MSc, Eco Titans" },
      { name: "Digital Mock-Up and packaging studies", where: "JCB" },
      { name: "Engineering change orders", where: "Caterpillar" },
      { name: "Root-cause investigation", where: "Caterpillar, BHEL" },
      { name: "1D worst-case and RSS tolerance stack-up", where: "Independent" },
      { name: "Injection-moulding DFM", where: "Independent" },
    ],
  },
  {
    area: "Data and PLM",
    items: [{ name: "PTC Windchill (PDM)", where: "Caterpillar" }],
  },
];

export const research = {
  intro:
    "I am interested in a PhD or research post where industrial design judgement meets simulation. Three themes run through my work so far.",
  themes: [
    {
      title: "Reacting and compressible flows",
      body: "An independent OpenFOAM validation of hydrogen-air detonation against Chapman-Jouguet reference data, and external-aerodynamics CFD from the BTech F1 project and the Team Eco Titans car.",
      evidence: "CFD-01, F1-03, CEL-01",
      scope: "Independent and academic",
    },
    {
      title: "Structural optimisation and lightweighting",
      body: "Stress-constrained topology optimisation rebuilt as machinable B-Rep CAD, industrial bracket FEA at JCB, and chassis optimisation in Team Eco Titans.",
      evidence: "TOPO-01, TOPO-02, JCB-08, CEL-02",
      scope: "Independent, industrial and academic",
    },
    {
      title: "Vehicle dynamics and suspension",
      body: "My MSc dissertation: multi-body models in MATLAB, Simulink and Simscape, virtual vehicle-dynamics tests and active-suspension optimisation.",
      evidence: "TH-01 to TH-07, CEL-07",
      scope: "Academic",
    },
  ],
  proposed:
    "Extend the validated 2D hydrogen-air detonation model to a 3D annular rotating detonation engine combustor. This is a proposal: the 3D work has not been started.",
  other: [
    { name: "Spur-gear pair design for an EV", detail: "Gear geometry, ratio selection and tolerances, with tooth bending and contact stress checks in ANSYS Mechanical. University of Leeds, Mar 2023.", ids: "SGT-01, SGT-02" },
    { name: "Waste plastic to 3D-printer filament machine", detail: "A seven-stage machine concept modelled in SolidWorks, with a 10 HP motor and 1:30 reducer sized for a 150 kg batch, and a cost analysis. BTech project, VIT.", ids: "WRM-01 to WRM-05" },
    { name: "Regenerative braking system", detail: "A conceptual 450 W DC motor-generator layout with a 200 mm brake drum and linkage. BTech project, VIT.", ids: "RBS-01, RBS-02" },
    { name: "Vehicle testing centre business plan", detail: "Inspection and certification centres with projected costs, revenue and break-even. BTech project, VIT.", ids: "ABL-01 to ABL-03" },
  ],
};
