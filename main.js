var moment = require('moment')
moment().format()
var now = moment().format('LLLL')
var dayOfYear = moment().dayOfYear()
var startOfDay = moment().startOf('day')
var seconds = moment([]).fromNow()
var DLS = moment().isDST()
var LY = moment().isLeapYear()
var beginTime = moment().startOf('day')
console.log(now)
console.log(dayOfYear)
console.log(seconds)

function SecondsToday() {
  moment().diff(moment().hour(23).minute(0).second(0), 'seconds')
}
SecondsToday()

function DLSTrue() {
  if (DLS === true) {
    console.log('It is during Daylight Savings Time')
  } else {
    console.log('It is not during Daylight Savings Time')
  }
}
DLSTrue()
function LYTrue() {
  if (LY === true) {
    console.log('It is a Leap Year')
  } else {
    console.log('It is not a Leap Year')
  }
}
LYTrue()
// console.log(dayOfYear)
// console.log(seconds)
// console.log(DLS)
// console.log(LY)
// console.log(moment().format(now, dayOfYear, seconds, isDST(), isLeapYear()))
