function crypto (password){
    const simvol = password.split('');
    if (simvol[5]){
        const zeroSim = simvol[0];
        simvol[0] = simvol[5];
        simvol[5] = zeroSim;
    }
    if (simvol[2]){
        const zeroSim = simvol[0];
        simvol[0] = simvol[2];
        simvol[2] = zeroSim;
    }
    simvol.reverse();
    return simvol;
}

function check (code,password){
    const code1 = code.split('');
    code1.reverse();
    if (code1[2]){
        const zeroSim = code1[0];
        code1[0] = code1[2];
        code1[2] = zeroSim;
    }
    if (code1[5]){
        const zeroSim = code1[0];
        code1[0] = code1[5];
        code1[5] = zeroSim;
    }
    return password===code1.join('');
}
console.log(crypto('password'));
console.log(check('drpwsoas','password'));