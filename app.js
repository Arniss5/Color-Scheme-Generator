const colourPicker = document.getElementById('colour-picker')
const coloursSelect = document.getElementById('colours-select')
const colourForm = document.getElementById('colour-form')

let colour1
let colour2
let colour3
let colour4
let colour5



colourForm.addEventListener('submit', e => {
    e.preventDefault()
    getColours()
})

function getColours() {
    const colour = colourPicker.value.substring(1)
    const scheme = coloursSelect.value.toLowerCase()

    fetch(`https://www.thecolorapi.com/scheme?hex=${colour}&mode=${scheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('colours-container').innerHTML = getColoursHtml(data.colors)
        })
    
    
}

// `https://www.thecolorapi.com/scheme?hex=${finalColour}&format=html&mode=${coloursSelect.value}&count=5`

function getColoursHtml(colourArray) {
    let coloursHtml = ``

    colourArray.forEach((colourObj, i) => {
        const colour = colourObj.hex.value
        coloursHtml += `
            <div class="colour-container">
                <div id="colour${i}" class="colour" style="background-color:${colour}"></div>
                <div class="colour-hex" id="colour-hex">${colour}</div>
            </div>
        `
    });
    return coloursHtml
}



