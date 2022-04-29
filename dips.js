const dipSwitch1 = document.querySelector('[dip1]')
const dipSwitch2 = document.querySelector('[dip2]')
const dipSwitch3 = document.querySelector('[dip3]')
const dipSwitch4 = document.querySelector('[dip4]')
const dipSwitch5 = document.querySelector('[dip5]')
const dipSwitch6 = document.querySelector('[dip6]')
const dipSwitch7 = document.querySelector('[dip7]')
const dipSwitch8 = document.querySelector('[dip8]')

dipSwitch1.onclick = function () {trocarAlinhamento(dipSwitch1)}
dipSwitch2.onclick = function () {trocarAlinhamento(dipSwitch2)}
dipSwitch3.onclick = function () {trocarAlinhamento(dipSwitch3)}
dipSwitch4.onclick = function () {trocarAlinhamento(dipSwitch4)}
dipSwitch5.onclick = function () {trocarAlinhamento(dipSwitch5)}
dipSwitch6.onclick = function () {trocarAlinhamento(dipSwitch6)}
dipSwitch7.onclick = function () {trocarAlinhamento(dipSwitch7)}
dipSwitch8.onclick = function () {trocarAlinhamento(dipSwitch8)}

let adress = 0

function trocarAlinhamento(a) {
    if (a.style.alignSelf == 'flex-start') {
        a.style.alignSelf = 'flex-end'
    } else a.style.alignSelf = 'flex-start'

    function pontuacao() {
        adress = 0
        const aux = document.querySelector('[regua]')
        aux.querySelectorAll('div').forEach(elem => {
            if (elem.style.alignSelf == 'flex-start') {
                adress = adress + parseInt(elem.getAttribute('valor'))   
                    } 
                }
            )
        }
        pontuacao()
        const ponto = document.querySelector('[pontuacao]')
        ponto.querySelector(':nth-child(2)').innerHTML =  `${adress}`
    }

