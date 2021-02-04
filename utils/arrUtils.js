exports.filterDuplicates = arr => arr.filter((el, i, arr) => arr.indexOf(el) === i);

exports.eliminateFalsyItems = arr => arr.filter(el => el);

exports.eliminateItemsWithLowerRank = rankedArr => itemsArr => {

     const itemsToDelete = (function filter(arr) {
          return (arr.length === 0 || itemsArr.includes(arr[0])) ?
               arr.slice(1) : filter(arr.slice(1));
     })(rankedArr)

     return itemsArr.filter(el => !itemsToDelete.includes(el))
}

exports.eliminateItemIfValuesIncluded = (item, valuesArr) => arr => arr.some(el => valuesArr.includes(el)) ?
     arr.filter(el => el !== item) : arr;

exports.sumArr = (...arrs) => arrs.flat().reduce( (acc, el) => acc + el, 0);

exports.shuffleArr = ([...arr]) => {
     for ( let i = arr.length - 1; i > 0; i-- ) {
         const j = Math.floor(Math.random() * (i + 1));
         [arr[i], arr[j]] = [arr[j], arr[i]];
     }
 
     return arr;
 }