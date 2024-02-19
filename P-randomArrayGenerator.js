/////////   Random Array Generator  ///////////

const randomArrayGenerator = () => {
  const array = [];
  array.length = Math.floor(Math.random() * 12) + 3; // 3 <= array.length <= 15
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    let num = (Math.floor(Math.random() * 99) + 1); // -99 <= possible values <= 99
    num = Math.random() < 0.5 ? num * -1 : num;
    array.fill(num, i, i + 1);
  }
  
  console.log(array);
}

randomArrayGenerator();