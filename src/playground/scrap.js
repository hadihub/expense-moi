export default () => {
  const foo = (a) => {
    return (b) => `${a} ${b}`;
  };

  const str = foo("j'aime manger le")("caca");
  return console.log(str);
};
