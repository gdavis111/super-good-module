module.exports = string => {
  reversedString = string.split('').reverse().join('x')
  return `This is your string but backwards and with a bunch of x's: ${reversedString}... Wow!`
}

