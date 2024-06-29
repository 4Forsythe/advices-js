const adviceCollection = {}

const adviceNumber = document.getElementById('advice-number')
const adviceMap = document.getElementById('advice-paragraph')
const adviceInvoker = document.getElementById('advice-invoker')

adviceInvoker.addEventListener('click', () => {
    invokeAdvice()
})
window.onload = () => {
    invokeAdvice()
}

async function invokeAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const responseJson = await response.json()
    const data = await responseJson
    adviceCollection.id = data.slip.id
    adviceCollection.advice = data.slip.advice

    adviceNumber.innerHTML = `Advice #${adviceCollection.id}`
    adviceMap.innerHTML = `<q>${adviceCollection.advice}</q>`
    console.log(adviceCollection.advice)
}