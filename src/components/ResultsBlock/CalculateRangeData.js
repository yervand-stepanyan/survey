export default function CalculateRangeData(data) {
  const medianArray = [];
  let count = 0;
  let max = 0;
  let min = +data[0].name;
  let sum = 0;

  data.forEach(item => {
    sum += +item.name * +item.answers;
    count += +item.answers;

    for (let i = 0; i < +item.answers; i += 1) {
      medianArray.push(+item.name);
    }

    if (item.name > max) {
      max = item.name;
    }

    if (item.name < min) {
      min = item.name;
    }
  });

  const median = arr => {
    const med = Math.floor(arr.length / 2);
    const nums = [...arr].sort((a, b) => a - b);

    return arr.length % 2 !== 0 ? nums[med] : (nums[med - 1] + nums[med]) / 2;
  };

  return {
    avg: (sum / count).toFixed(2),
    max,
    median: median(medianArray),
    min
  };
}
