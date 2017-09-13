function theBeatlesPlay(instruments, musicians){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return newArray;
}
