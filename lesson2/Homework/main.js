function completeAndRedirect(){
    let form = document.forms['form'];
    let text = document.getElementById("text")
    text.innerHTML="Введені вами данні: <br> І'мя : "+ form.elements.name.value + "<br> EMAIL : " + form.elements.email.value + "<br> Стать: " + form.elements.gender.value;
    console.log(form.elements)
}