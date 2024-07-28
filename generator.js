console.log("How was your performance?")

messages = [
  "Absolutely Horrendous- 0/10",
  "Dreadful- 1/10",
  "Very Bad- 2/10",
  "Bad- 3/10",
  "Underwhelming- 4/10",
  "Average- 5/10",
  "Acceptable- 6/10",
  "Good- 7/10",
  "Very Good- 8/10",
  "Utterly Sensational- 9/10",
  "Absolute Perfection- 10/10"
]

const number = Math.floor(Math.random()*11)
console.log(messages[number])