const billAmount = document.querySelector('.billentery')
const generateBill = document.querySelector('.genrate-bill')
const numberpeople = document.querySelector('.peoplenumber')
const customTip = document.querySelector(".customtip")
const tipbtn = document.querySelectorAll('.btn')
// const disMain = document.querySelectorAll('.dis-main')// ye class shirf cursor disable ko nakal ne ke liye ye rakhe hai

// add class change btn color tip

const tipColorChange = document.querySelector('.tip')


function checkValidation() {
    billAmount.addEventListener('input', function (e) {
        if (e.target.value === '') {
            customTip.classList.add("noInput")
            numberpeople.classList.add("noInput")
            customTip.disabled = true
            numberpeople.disabled = true
            tipColorChange.classList.remove('tipcolor')
            tipbtn.forEach((btn) => { // ye niche bhi likha hai or upper bhi likha hai kyuki jab ek bar disable false ho jayega mtlb nikal jayega mai click kar paunga thik lekin jab input khali ho jaye tab vapes sare input disable or color change ho jane chiye isliya mene upper sabko disable or add remove class kar diya hai jarurat ke hissab se(also ye pehle se hi html mai disable hai idhar likhna pada kyuki remove or add or undisable hone ke badd fir se bhi disable karna tha)
                btn.disabled = true
            })
        } else {
            customTip.classList.remove("noInput")
            numberpeople.classList.remove("noInput")
            customTip.disabled = false
            numberpeople.disabled = false
            tipColorChange.classList.add('tipcolor')
            tipbtn.forEach((btn) => {
                btn.disabled = false
            })
            calculationCheck()
        }
    })
}

checkValidation()

const GenerateBillAll = document.querySelector('.GenerateBillAll')

const tip = document.querySelector('.tip-amount2')
const totalAmount = document.querySelector('.total')
const EachPersonAmount = document.querySelector('.eachAmount')

// add border to tip 6 box 
const tipbtnBorder = document.querySelector('.tip')


customTip.addEventListener('input', function () { // ye tab chalge jab mera custom tip ke under value daluga jisee mujhe live input ka vlaue mile
    calculationCheck()
})

// disable = true mtlb disable rakho mai usko click na kar pau 
// disable = false mtlb mai uspe click kar pau

function calculationCheck() {
    if (customTip.value !== '') {

        tipColorChange.classList.remove('tipcolor')
        tipbtn.forEach((btn) => {
            btn.disabled = true
        })

        numberpeople.addEventListener('input', function (e) {
            GenerateBillAll.disabled = true //agar number of people mai value dale or genrate mera disable tha wo false ho gaya or wapis maine number of people ke value nikal de to vapes mera jo genrate ka btn hai vo disable ho jana chahiye is liye mene idhar ye 2 disable or add rakhe hai idhar  
            GenerateBillAll.classList.add('noInput')
            if (e.target.value !== '') {
                GenerateBillAll.disabled = false
                GenerateBillAll.classList.remove('noInput')
                GenerateBillAll.addEventListener('click', function () {
                    Tipamount = billAmount.value / 100 * customTip.value
                    tip.innerText = Math.floor(Tipamount)

                    total = parseInt(billAmount.value) + Tipamount
                    totalAmount.innerText = total

                    EachPersonAmount.innerText = Math.floor(total / numberpeople.value)
                })
            }
        })

    } else {
        tipbtn.forEach((btn) => {
            tipColorChange.classList.add('tipcolor') // agar maine custom ke under likh ke kuch nikal diya pura to upper ek bar disable btn true kar diya tha jisee mai click nahi kar paunga lekin vo ek bar true hogaya to jab maine vapes custom tip mai se sab nikal diya to vapis bhi to tipbtn ko lana hoga isliye maine ye false or add kiya hai  
            btn.disabled = false

            btn.addEventListener('click', function (e) {
                // customTip.classList.add("noInput")
                // customTip.disabled = true
                numberpeople.addEventListener('input', function (eq) {
                    GenerateBillAll.disabled = true
                    GenerateBillAll.classList.add('noInput')

                    if (eq.target.value !== '') {
                        GenerateBillAll.disabled = false
                        GenerateBillAll.classList.remove('noInput')
                        GenerateBillAll.addEventListener('click', function () {
                            Tipamount = billAmount.value / 100 * e.target.id
                            tip.innerText = Math.floor(Tipamount)
                            let total = parseInt(billAmount.value) + Tipamount
                            totalAmount.innerText = total

                            EachPersonAmount.innerText = Math.round(total / numberpeople.value)
                        })
                    }
                })
            })
        })
    }

}

const reset = document.querySelector('.reset')

reset.addEventListener('click', function (e) {
    e.preventDefault()

    tip.innerText = ''
    totalAmount.innerText = ''
    EachPersonAmount.innerText = ''

    billAmount.value = ''
    customTip.value = ''
    numberpeople.value = ''
})