




const formButton = document.getElementById('formSubmit')

formButton.addEventListener('click', (event) => {
event.preventDefault()
    let number = document.getElementById('number')
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let favoriteColor = document.getElementById('favoriteColor').value


    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
    numberNode.innerHTML = number
    newTableRow.append(numberNode)


    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let favoriteColorNode = document.createElement('td')
    favoriteColorNode.innerHTML = favoriteColor
    newTableRow.append(favoriteColorNode)

    document.getElementById('tBody').appendChild(newTableRow)

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('favoriteColor').value = ''

    number++
})








