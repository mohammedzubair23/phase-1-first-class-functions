const receivesAFunction = function (spy) {
    return spy(0, 2);
  };

  const  returnsANamedFunction = function (fn) {
    return fn = returnsANamedFunction;
  };

  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

  function returnsAnAnonymousFunction(num){
      return function (number){
         return number * num
      }
  }