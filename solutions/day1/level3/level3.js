const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

const median = arr => {
    const middle = Math.floor(arr.length / 2);

    const nums = [...arr].sort((a, b) => a - b);

    return arr.length % 2 !== 0 ? nums[middle] : (nums[middle - 1] + nums[middle]) / 2
}


const minAge = Math.min(...ages)
const maxAge = Math.max(...ages)
const medianAge = median(ages)
const averageAge = ages.reduce((item, age) => item + age, 0) / ages.length
const rangeAge = maxAge - minAge;
const minAVG = minAge - averageAge
const maxAVG = maxAge - averageAge

console.log(ages)
console.log(minAge)
console.log(maxAge)
console.log(medianAge)
console.log(averageAge)
console.log(rangeAge)
console.log(Math.abs(minAVG))
console.log(Math.abs(maxAVG))

console.log('-----------------------------------------------------------------')

const middleCountry = countries => {
    const middle = Math.floor(countries.length / 2);

    return countries.length % 2 !== 0 ? countries[middle] : [countries[middle - 1], countries[middle]]
}

const firstTenCountry = countries.slice(0, 10)
console.log(firstTenCountry)

console.log(middleCountry(countries))