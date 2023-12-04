const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd')

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest() //object

    request.open('GET', 'js/current.json') //get info
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send() //send info

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response)

            const data = JSON.parse(request.response)
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2)
        } else {
            inputUsd.value = 'Wait a minute'
        }
    })
})

