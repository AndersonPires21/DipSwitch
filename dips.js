const dipSwitch1 = document.querySelector('[dip1]')
const dipSwitch2 = document.querySelector('[dip2]')
const dipSwitch3 = document.querySelector('[dip3]')
const dipSwitch4 = document.querySelector('[dip4]')
const dipSwitch5 = document.querySelector('[dip5]')
const dipSwitch6 = document.querySelector('[dip6]')
const dipSwitch7 = document.querySelector('[dip7]')
const dipSwitch8 = document.querySelector('[dip8]')

dipSwitch1.onclick = function () { trocarAlinhamento(dipSwitch1) }
dipSwitch2.onclick = function () { trocarAlinhamento(dipSwitch2) }
dipSwitch3.onclick = function () { trocarAlinhamento(dipSwitch3) }
dipSwitch4.onclick = function () { trocarAlinhamento(dipSwitch4) }
dipSwitch5.onclick = function () { trocarAlinhamento(dipSwitch5) }
dipSwitch6.onclick = function () { trocarAlinhamento(dipSwitch6) }
dipSwitch7.onclick = function () { trocarAlinhamento(dipSwitch7) }
dipSwitch8.onclick = function () { trocarAlinhamento(dipSwitch8) }

let adress = 0
const valorDips = []
let auxValorAdress = 0
const ponto = document.querySelector('[pontuacao] > input')


function trocarAlinhamento(a) {
    if (a.style.alignSelf == 'flex-start') {
        a.style.alignSelf = 'flex-end'
    } else a.style.alignSelf = 'flex-start'
    pontuacao()
}

function pontuacao() {
    adress = 0
    const aux = document.querySelector('[regua]')
    aux.querySelectorAll('div').forEach(elem => {
        if (elem.style.alignSelf == 'flex-start') {
            adress = adress + parseInt(elem.getAttribute('valor'))
        }
    })
    return ponto.value = `${adress}`
}


function setDips(valorAdress) {
    const setAlignDips = []
    const aux = document.querySelector('[regua]')
    const auxDivs = aux.querySelectorAll('div')
    auxDivs.forEach((arr, index) => {
        valorDips[index] = (parseInt(arr.getAttribute('valor')))
    })


    auxValorAdress = valorAdress
    valorDips.reverse()
    valorDips.forEach((arr, index) => {
        if (auxValorAdress / arr >= 1) {
            setAlignDips[index] = true
            auxValorAdress = auxValorAdress - arr
        } else setAlignDips[index] = false
    })
    setAlignDips.reverse()
    setAlignDips.forEach((arr, index) => {
        if (arr) {
            auxDivs[index].style.alignSelf = 'flex-start'
        } else auxDivs[index].style.alignSelf = 'flex-end'
    })
    pontuacao()
}

ponto.value = 0
ponto.onchange = number =>  {
    const auxNumber = ponto.value.replace(",", ".")
    console.log(auxNumber)
    setDips(Math.floor(auxNumber))
    
}

