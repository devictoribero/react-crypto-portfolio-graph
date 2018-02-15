let _provider;

_provider = {
  __invoke: () => {
    console.log('performing...');
    console.log('finished...');
    return [
      {name:'victor'},{name:'victor'},
    ];
  },
};

export default _provider;
