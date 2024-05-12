const strandSort = (arr) => {
  const extract = (arr, x) => {
    const extracted = [];
    let i = 0;
    while (i < arr.length) {
      if (x.includes(arr[i])) {
        extracted.push(arr.splice(i, 1)[0]);
      } else {
        i++;
      }
    }
    return extracted;
  };
  const merge = (a, b) => {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
        merged.push(a[i]);
        i++;
      } else {
        merged.push(b[j]);
        j++;
      }
    }
    return merged.concat(i < a.length ? a.slice(i) : b.slice(j));
  };
  let sorted = [];
  while (arr.length > 0) {
    let sublist = [arr.shift()];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > sublist[sublist.length - 1]) {
        sublist.push(arr.splice(i, 1)[0]);
      }
    }
    sorted = merge(sorted, sublist);
  }
  return sorted;
};
