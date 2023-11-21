let arr = Array(5);

console.log(arr.length)

console.log(arr[0], arr[2], arr[4])

console.log('---------------------------------------------------')

const mixedDataTypes = ["Kaan", 1, true, 2.6, [2,3],{'name':'kaan',age:23}]

console.log(mixedDataTypes.length)

console.log('---------------------------------------------------')

const itCompanies = ["Facebook", "Apple", "Microsoft", "Google", "IBM", "Oracle", "Amazon"]

console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[3], itCompanies[5])

console.log('---------------------------------------------------')

for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}

console.log('---------------------------------------------------')

for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase())
}

console.log('---------------------------------------------------')

const itCompSlice = itCompanies.slice(0, -1);

console.log(itCompSlice.join(', ') + ' And ' + itCompanies[6] + " are big IT companies.")

console.log('---------------------------------------------------')

let index = itCompanies.indexOf("IBM")
console.log(index)
index === -1 ? console.log("Company is not found"): console.log(itCompanies[index])

console.log('---------------------------------------------------')

for (let i = 0; i < itCompanies.length; i++){
    if (itCompanies[i].split("o").length - 1 > 1){
        console.log(itCompanies[i])

    }
}

console.log('---------------------------------------------------')

itCompanies.sort();
console.log(itCompanies)

console.log('---------------------------------------------------')

itCompanies.reverse();
console.log(itCompanies)

console.log('---------------------------------------------------')

const firstThreeComp = itCompanies.slice(0,3)
console.log(firstThreeComp)

console.log('---------------------------------------------------')

const lastThreeComp = itCompanies.slice(4,7)
console.log(lastThreeComp)

console.log('---------------------------------------------------')

const midComps = itCompanies.slice(1,-1)
console.log(midComps)

console.log('---------------------------------------------------')

itCompanies.shift()
console.log(itCompanies)
itCompanies.splice(1,3)
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)

console.log(itCompanies.splice())

