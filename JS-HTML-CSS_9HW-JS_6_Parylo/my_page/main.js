let getSel = sell => document.querySelector(sell);

document.backgBodyColor.addEventListener('change', function () {
    document.body.style.background = this.select.value;
})

document.fontfamily.addEventListener('change', function () {
    document.body.style.fontFamily = this.select.value;
})
document.h_position.addEventListener('click', function () {
    for (let i = 0; i < document.h_position.elements.length; i++) {

        if (document.h_position.elements[i].checked) {
            getSel('h1').style.textAlign = this.elements[i].value;

        }
    }
})
document.bgcolorP.addEventListener('change', function () {
    getSel('p').style.background = this.select.value;
})
document.colorP.addEventListener('change', function () {
    getSel('p').style.color = this.select.value;
})

document.colorLink.addEventListener('change', function () {
    for (let i = 0; i < document.querySelectorAll('a').length; i++) {

        document.querySelectorAll('a')[i].style.color = this.select.value;
    }
})
document.colorDiv.addEventListener('change', function () {
    getSel('div').style.color = this.select.value;
})
document.fontWeight.addEventListener('change', function () {
    getSel('div').style.fontWeight = this.select.value;
})
document.font_size.addEventListener('click', function () {
    for (let i = 0; i < document.font_size.elements.length; i++) {

        if (document.font_size.elements[i].checked) {
            getSel('div').style.fontSize = this.elements[i].value;

        }
    }
})

document.select_style_of_li.addEventListener('change', function () {

    getSel('ul').setAttribute('type', `${this.type_of_marks.value}`)
})



let arrLink = [];

for (let i = 0; i < 3; i++) {

    let link = prompt('Enter 3 links ', '')
    arrLink.push(link);
    document.querySelectorAll('a')[i].setAttribute('href', `${arrLink[i]}`)
    document.querySelectorAll('a')[i].innerText = `${arrLink[i].substring(arrLink[i].indexOf('//') + 2, arrLink[i].indexOf('/', arrLink[i].indexOf('//') + 2))}`
}
