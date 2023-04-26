const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, attribute) {
    return array.filter(function (array) {
        return array.toLowerCase() === attribute.toLowerCase()
    })
}
console.log(findMatching(drivers, "bobby"))
function fuzzyMatch(array, attribute) {
    return array.filter(function (array) {
        return array.toLowerCase().charAt(0) === attribute.toLowerCase().charAt(0)
    })
}
console.log(fuzzyMatch(drivers, "Brianna"))
function matchName(array, arg) {
    return array.filter(function (array) {
        return array.name === arg
    })
}
 console.log(matchName(drivers, "Bobby"))