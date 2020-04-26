export default function CalCulateRangeData (data) {
  console.log(data)
  

  let sum = 0;
  let count = 0;
  let max = 0;
  let min = +data[0].name;

  data.forEach(item => {
    sum += +item.name * +item.answers
    count += +item.answers;

    if (item.name > max) {
      max = item.name;
    }

    if(item.name < min) {
      min = item.name
    }
  });



  return {
    min,
    max,
    avg: (sum/count).toFixed(2)
  };

}
