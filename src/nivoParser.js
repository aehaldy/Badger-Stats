export const parseData = obj => {

  const dataArr = []

  // This formats data percentages
  // from decimals, for use in a pie chart
  for (let key in obj) {
    let value = (obj[key] * 100).toPrecision(2);
    if (value > 0) {
      //capialize and remove underscores
      let name = key
        .split('_')
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join('\n');
      dataArr.push({
        id: name,
        label: name,
        value: parseFloat(value),
      });
    }
  }
  return dataArr;
}
