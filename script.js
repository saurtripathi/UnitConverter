const convertBtn = document.getElementById('convert')
const inputBox = document.getElementById('input-box')
let paraLen = document.getElementById('le-res')
let paraVol = document.getElementById('vo-res')
let paraMass = document.getElementById('ma-res')

convertBtn.addEventListener('click', function () {
    const input = Number(inputBox.value)

    paraLen.textContent = ""
    paraVol.textContent = ""
    paraMass.textContent = ""

    let lengthInFt = (input * 3.281).toFixed(3)
    let lengthInMeter = (input / 3.281).toFixed(3)

    let volumeInGallon = (input * 0.264).toFixed(3)
    let volumeInLiter = (input / 0.264).toFixed(3)

    let weightInPound = (input * 2.204).toFixed(3)
    let weightInKg = (input / 2.204).toFixed(3)
    if (input !== 0) {
        lengthStr = `${input} meters = ${lengthInFt} feet | ${input} feet = ${lengthInMeter} meters`
        volumeStr = `${input} liters = ${volumeInGallon} gallons | ${input} gallons = ${volumeInLiter} liters`
        massStr = `${input} kilos = ${weightInPound} pounds | ${input} pounds = ${weightInKg} kilos`
        paraLen.textContent = lengthStr
        paraVol.textContent = volumeStr
        paraMass.textContent = massStr
    }



})