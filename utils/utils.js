exports.pipe = (...fns) => x => fns.reduce((g,f) => f(g), x);

exports.randomValue = (max = 1, min = 0, cb) => {
    const randomValue = Math.random() * (max-min)+min;
    return cb instanceof Function ? cb(randomValue) : randomValue;
} 

exports.print = msg => val => {
     console.log(msg + " :");
     console.log(val);
     return val;
}

exports.shuffleArray = ([...arr]) => {
     for ( let i = arr.length - 1; i > 0; i-- ) {
         const j = Math.floor(Math.random() * (i + 1));
         [arr[i], arr[j]] = [arr[j], arr[i]];
     }
 
     return arr;
 }

exports.catch = fn => {
    return (req, res, next) => {
         fn(req, res, next).catch(err =>{
             console.log(err);
            res.json(err);
         });
    }
}

exports.pipeFilter = callBack => arr => arr.filter(callBack);

exports.pipeMap = callBack => arr => arr.map(callBack);

exports.pipeFlat = arr => arr.flat();

exports.roundUp = (num, multi) => num % multi === 0 ? num : num + (multi - (num % multi));