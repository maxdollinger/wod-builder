exports.name = data => {
     return data.name;
}

exports.createTagsArr = exercises => {
     return exercises.flat().map(el => el.tags).flat();
}

//possible improvement with caching of tags
exports.filterDuplicateTags = tagsArr => {
     return tagsArr.filter((el, idx, arr) => arr.indexOf(el) === idx);
}

//keeps only the item with the highest order (lowest index in group) which is included in the arr, and filters the rest
exports.filterItemsByOrder = group => items => {

     const itemsToDelete = ((arr) => {
          return (arr.length === 0 || items.includes(arr[0])) ?
               arr.slice(1) : filter(arr.slice(1));
     })(group)

     return items.filter(el => !itemsToDelete.includes(el))
}