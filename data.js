var y = window.location.href.split("?");
y.shift();
y = y[0].split(",");
console.log(`Width = ${y[0]}, Height = ${y[1]}.`);
