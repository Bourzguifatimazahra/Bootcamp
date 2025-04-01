const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
  ];
  
  const userRoles = users.reduce((obj, user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    obj[fullName] = user.role;
    return obj;
  }, {});
  
  console.log(userRoles);
  /*
  Output:
  {
    'Bradley Bouley': 'Full Stack Resident',
    'Chloe Alnaji': 'Full Stack Resident',
    'Jonathan Baughn': 'Enterprise Instructor',
    'Michael Herman': 'Lead Instructor',
    'Robert Hajek': 'Full Stack Resident',
    'Wes Reid': 'Instructor',
    'Zach Klabunde': 'Instructor'
  }
  */
  