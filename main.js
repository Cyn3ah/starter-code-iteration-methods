const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

///***

const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
// const greenEyes2 = users.filter(function (user) {
//     return user.eyeColor === "green"
// })
printKata(0, greenEyes1)   
// If you don't have this function already, see the "Set up" section above.
const activeUsers = users.filter(user => (user.isActive === true))

printKata(1, activeUsers)

const eMailOnlyList = users.map(user => user.email)

printKata(2, eMailOnlyList)

const ovationCos = users.some(user => "ovation")

printKata(3, ovationCos)

const firstOver38 = users.find(user => (user.age > 38)) 

printKata(4, firstOver38)

const firstOver38Active = users.filter(user => (user.age > 38) && (user.isActive === true))

printKata(5, firstOver38Active)

const allFromZenco = users.filter(user => (user.company === "ZENCO"))

const allFromZencoBalances = allFromZenco.map(user => user.balance)

printKata(6, allFromZencoBalances)

const allFugiats = users.tags.includes("fugiat")

const ageOfFugiats = allFugiats.filter[("age")]

printKata(7, ageOfFugiats)


//user.data.array? Kata 7 - array within an rray???

// Append the katas to this element:
// const main = document.querySelector('main')