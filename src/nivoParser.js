export const parseData = obj => {
  const colors = [
    'hsl(130, 70%, 50%)',
    'hsl(115, 70%, 50%)',
    'hsl(290, 70%, 50%)',
    'hsl(89, 70%, 50%)',
    'hsl(140, 70%, 50%)',
    'hsl(269, 70%, 50%)',
    'hsl(354, 70%, 50%)',
    'hsl(79, 70%, 50%)',
    'hsl(84, 70%, 50%)',
    'hsl(165, 70%, 50%)',
    'hsl(55, 70%, 50%)',
    'hsl(279, 70%, 50%)',
    'hsl(60, 70%, 50%)',
    'hsl(181, 70%, 50%)',
    'hsl(162, 70%, 50%)',
    'hsl(185, 70%, 50%)',
    'hsl(125, 70%, 50%)',
    'hsl(262, 70%, 50%)',
  ];

  const dataArr = []
  //let nextCol = 0;

  // This formats data percentages
  // from decimals, for use in a pie chart
  for (let key in obj) {
    let value = (obj[key] * 100).toPrecision(2);
    if (value) {
      let name = key
        .split('_')
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join('\n');
      dataArr.push({
        //capialize and remove underscore
        id: name,
        label: name,
        value: parseFloat(value),
        // "color": colors[nextCol],
      });
    }
  }
  return dataArr;
}
