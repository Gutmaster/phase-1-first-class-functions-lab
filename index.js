// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => (drivers.slice(0,2))

const returnLastTwoDrivers = (drivers) => (drivers.slice(-2))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => (function(fare){return fare*multiplier})

const fareDoubler = (fare) => (createFareMultiplier(2)(fare))

const fareTripler = (fare) => (createFareMultiplier(3)(fare))

const selectDifferentDrivers = (drivers, segment) => (segment(drivers))