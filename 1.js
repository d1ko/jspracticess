function isBefore(target, base) {
    let a = 0;
    let b = 0;
    if (target[0] > 0) {
        a = target.split('.').join('');
    }else {
        a = target.substring(1).split('.').join('');
    }
    if (base[0] > 0) {
        b = base.split('.').join('');
    }else {
        b = base.substring(1).split('.').join('');
    }
    if (a > b) {
        return true;
    }else return false;
}
console.log( isBefore('01.01.2023', '01.02.2022')); // false


console.log( isBefore('01.02.2022', '01.01.2023')); // true


console.log( isBefore('01.02.2022', '01.02.2022')); // false