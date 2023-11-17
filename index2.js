var items = ['おみくじの結果:大吉', 'おみくじの結果:中吉', 'おみくじの結果:小吉', 'おみくじの結果:凶','おみくじの結果:大凶'];

//最大値は配列の「要素数」にする
var random = Math.floor( Math.random() * items.length );

console.log( items[random] );