function validate() {
    var number = document.getElementById('number').value;
    if (typeof(number) === number){
        if (number < 1 or number > 10){
            alert('Number of Family : validation error.')
        }
        else {
            alert('Received your information.')
        }    
    }
    else {
        alert('Number of Family : validation error.')
    }
}
    