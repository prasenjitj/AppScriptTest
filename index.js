var data = [
  [
    '158056294',
    '[Parent Tracking Bug] [Motorcycles] [en-IN] Monthly Data Ingestion',
    'In-Progress',
    '1/18/2023',
    '11/18/2022',
    'NO',
    'djoao,abhinavrai',
    '',
    '',
    'Autos | Motorcycles en-IN Regular Ingestion',
    'arturosanchez@google.com',
    'P2',
    'S2',
    'epic',
    'ACCEPTED',
    "Summary: Feed for October has been completed. Feed for November hasn't arrived yet.\n\nLW: October ingestion is completed. Feed for November hasn't arrived yet.\n\nTW: No AIs until next feed arrives.\n\nOTD: 11/18/2022",
  ],
  [
    '158622139',
    '[Parent Tracking Bug] Create wikiart pipeline',
    'In-Progress',
    '1/29/2021',
    '1/31/2023',
    'NO',
    'gargabhishek, bhamidipatim',
    '',
    'bhamidipatim',
    'WikiArt Data Ingestion',
    'gargabhishek@google.com',
    'P2',
    'S1',
    'epic',
    'ACCEPTED',
    'Summary: Initiating the static mapping changes for recon, and also initiated experiments for changes verify.\n\nLW:\n\n- Worked on the ketl changes for [static-mapping](https://ketl.corp.google.com/flow/HEAD/wikiart_test_recon;draftName=original/editor) on sample data.\n  - Generated recon [evidence](https://data.corp.google.com/cnsviewer/file?query=%2Fcns%2Fin-d%2Fhome%2Fdaas-dev-team%2Fketl%2Fworkflows%2Fwikiart%Q%2Frefcon_test%2F2023-01-09-20-18-45%2F&user=) for sample-data.\n  - Initiated experiment: [wikiart_02_static_recon_02](https://flower.corp.google.com/detail/6159fc87e0a389c3/keexp?keExpId=wikiart_02_static_recon_02) with recon evidence for verify recon.\n   - Verify changes on experiment. \n \nTW:\n\n- Complete ketl changes for static mapping.\n- Initiate experiment for verification.',
    'bhamidipatim',
  ],
  [
    '158813219',
    '[Parent Tracking Bug] [Motorcycles] [id-ID] Monthly Data Ingestion',
    'In-Progress',
    '1/31/2023',
    '12/31/2022',
    'NO',
    'Shunguan, ludovicoc',
    'ludovicoc',
    '',
    'Autos | Motorcycles id-ID Regular Ingestion',
    'shunguan@google.com',
    'P2',
    'S2',
    'epic',
    'ACCEPTED',
    'Summary: Monthly ingestion\n\nLW:\n\nb/182882127(Fuel price ingestion):\n\n* Data Ingestion is completed\n\nb/171016946(Specs/Multi-city price ingestion) :\n\n* Data Ingestion is completed\n\nTW:\n\nb/182882127(Fuel price ingestion) :\n\n* No further action until Jan. Feed arrives\n\nb/171016946(Specs/Multi-city price ingestion) :\n\n* No further action until Jan. Feed arrives\n',
  ],
];

function foo(data) {
  data = data.map((item) => ({
    id: item[0],
    title: item[1],
    projectStatus: item[2],
    otd: item[3],
    eta: item[4],
    vfOrg: item[5],
    primary: item[6],
    secondary: item[7],
    reviewer: item[8],
    project: item[9],
    assignee: item[10],
    priority: item[11],
    severity: item[12],
    type: item[13],
    status: item[14],
    note: item[15],
    mentor: item[16],
  }));
  console.log(data);
  // data = data.filter((item) => item.status =="ACCEPTED");
  return data;
}

var data2 = foo(data);

const flattenedData = data2
  .map((item) => {
    const primary = item.primary.split(',').map((name) => {
      return {
        id: item.id,
        primary: name.trim(),
        secondary: item.secondary,
        reviewer: item.reviewer,
        mentor: item.mentor,
        title: item.title,
        projectStatus: item.projectStatus,
        otd: item.otd,
        eta: item.eta,
        vfOrg: item.vfOrg,
        project: item.project,
        assignee: item.assignee,
        priority: item.priority,
        severity: item.severity,
        type: item.type,
        status: item.status,
        note: item.note,
      };
    });
    const secondary = item.secondary.split(',').map((name) => {
      return {
        id: item.id,
        secondary: name.trim(),
        primary: item.primary,
        reviewer: item.reviewer,
        mentor: item.mentor,
        title: item.title,
        projectStatus: item.projectStatus,
        otd: item.otd,
        eta: item.eta,
        vfOrg: item.vfOrg,
        project: item.project,
        assignee: item.assignee,
        priority: item.priority,
        severity: item.severity,
        type: item.type,
        status: item.status,
        note: item.note,
      };
    });
    const reviewer = item.reviewer.split(',').map((name) => {
      return {
        id: item.id,
        reviewer: name.trim(),
        primary: item.primary,
        secondary: item.secondary,
        mentor: item.mentor,
        title: item.title,
        projectStatus: item.projectStatus,
        otd: item.otd,
        eta: item.eta,
        vfOrg: item.vfOrg,
        project: item.project,
        assignee: item.assignee,
        priority: item.priority,
        severity: item.severity,
        type: item.type,
        status: item.status,
        note: item.note,
      };
    });
    const mentor = item.mentor
      ? [
          {
            id: item.id,
            mentor: item.mentor,
            title: item.title,
projectStatus: item.projectStatus,
otd: item.otd,
eta: item.eta,
vfOrg: item.vfOrg,
project: item.project,
assignee: item.assignee,
priority: item.priority,
severity: item.severity,
type: item.type,
status: item.status,
note: item.note,
          },
        ]
      : [];
    return [...primary, ...secondary, ...reviewer, ...mentor];
  })
  .flat();

console.log(flattenedData);


title: item.title,
projectStatus: item.projectStatus,
otd: item.otd,
eta: item.eta,
vfOrg: item.vfOrg,
project: item.project,
assignee: item.assignee,
priority: item.priority,
severity: item.severity,
type: item.type,
status: item.status,
note: item.note,

id: item.id,
primary: item.primary,
secondary: item.secondary,
reviewer: item.reviewer,
mentor: item.mentor,