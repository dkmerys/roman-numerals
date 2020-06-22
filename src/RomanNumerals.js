const numeralMaker = (number, convertedNumerals=[], arrCounter = 0) => {
  const numberSet = [[1000, 'M'], [900,'CM'], [500, 'D'],  [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1,'I']];
  if (number > 3999 || number < )
  {
    return "We're sorry, your number cannot be turned into a Roman Numeral. Ha. Ha. Silly Romans. Never learned to count big. Bigly. Smally? What did you try, exactly?"
  }
  else {
  if (number == 0)
  {
    return convertedNumerals.join()
  } else {
    if (number >= numberSet[arrCounter][0])
    {
      newConvNumArr = [...convertedNumerals, numberSet[arrCounter][1]]
      newNumber = number - numberSet[arrCounter][0]
      return numeralMaker(newNumber, newConvNumArr, arrCounter + 1)
    } else {
      newConvNumArr =[...convertedNumerals]
      return numeralMaker(number, newConvNumArr, arrCounter +1)
    }
    
    
  }
  }
  
}

const total = numeralMaker(23)
console.log(total)

