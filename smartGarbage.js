const smartGarbage = function (trash, bins){
  bins[trash] += 1;
  console.log(bins);
  return bins;
};


const result = smartGarbage('recycling', { waste: 4, recycling: 10, compost: 5 });
