const root = document.querySelector('#root')
function clickButton(index, isClick) {
    let button = document.createElement('button')
    button.innerText = 'nút ' + index
    button.style = 'background-color: green; margin: 5px; font-size: 20px; border-radius: 10px;'

    button.addEventListener('click', () => {
        button.disabled = 'true'
        alert(index)
        return clickButton(index+1, true)
    })

    if (isClick) {
        root.appendChild(button)
    }
}
clickButton(1, true)
