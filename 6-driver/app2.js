const hasLicence = 'yes';
const age = 18;
const isDrunk = false;

let answ = hasLicence=='yes' && age>=18 && isDrunk==false;
console.log(answ ? 'может' : 'не может');