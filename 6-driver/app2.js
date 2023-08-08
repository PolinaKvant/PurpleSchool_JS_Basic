const hasLicence = 'yes';
const age = 18;
const isDrunk = false;

const answ = hasLicence==='yes' && age>=18 && isDrunk===false;
console.log(answ ? 'может' : 'не может');