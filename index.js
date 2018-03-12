function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes (nameArray){

  return nameArray.map(function(name) {
    const firstNm = name.split(' ')[0];
    const lastNm = name.split(' ')[1];

    return {firstName: firstNm, lastName: lastNm };
  });
}

function attributesToPhrase (personArray) {
  return personArray.map(function(person) {
    return `${person.name} is from ${person.hometown}`
  });
}
