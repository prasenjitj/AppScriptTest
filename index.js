const sampleData = [
  {
    id: 1,
    primary: 'John,Mary',
    secondary: 'Mike,Sophia',
    reviewer: 'Lucy,Jack',
    mentor: 'Steve',
    title: 'Sample Project',
    projectStatus: 'In Progress',
    otd: '2022-01-01',
    eta: '2022-02-01',
    vfOrg: 'VF Corp',
    project: 'VF Project',
    assignee: 'John',
    priority: 'High',
    severity: 'Critical',
    type: 'Bug',
    status: 'Open',
    note: 'This is a sample project',
  },
  {
    id: 2,
    primary: '',
    secondary: '',
    reviewer: '',
    mentor: '',
    title: 'Sample Project 2',
    projectStatus: 'Completed',
    otd: '2022-03-01',
    eta: '2022-04-01',
    vfOrg: 'VF Corp',
    project: 'VF Project',
    assignee: 'Mary',
    priority: 'Low',
    severity: 'Minor',
    type: 'Enhancement',
    status: 'Closed',
    note: 'This is another sample project',
  },
];

/**
 * Flattens an array of data objects
 * @param {Array} data - An array of data objects to be flattened
 * @return {Array} flattenedData - An array of flattened data objects
 */
function flattenData(data) {
  const flattenedData = data.map((item) => {
    const keys = ['primary', 'secondary', 'reviewer', 'mentor'];
    let flattenedObjects = [];
    keys.forEach((key) => {
      const namesArray = item[key]
        ? item[key].split(',').map((name) => name.trim())
        : [''];
      namesArray.forEach((name) => {
        let obj = {};
        keys.forEach((k) => {
          if (k === key) {
            obj[k] = name;
          } else {
            obj[k] = '';
          }
        });
        obj.id = item.id;
        obj.title = item.title;
        obj.projectStatus = item.projectStatus;
        obj.otd = item.otd;
        obj.eta = item.eta;
        obj.vfOrg = item.vfOrg;
        obj.project = item.project;
        obj.assignee = item.assignee;
        obj.priority = item.priority;
        obj.severity = item.severity;
        obj.type = item.type;
        obj.status = item.status;
        obj.note = item.note;
        flattenedObjects.push(obj);
      });
    });
    return flattenedObjects;
  });
  return [].concat.apply([], flattenedData);
}

console.log(flattenData(sampleData));
