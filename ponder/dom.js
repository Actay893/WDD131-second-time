let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    
    // Add this code:
    let output = document.getElementById('output');
    
    if(codeValue === 'html') {
        output.textContent = 'HTML is the structure of web pages';
    } else if(codeValue === 'css') {
        output.textContent = 'CSS is the styling of web pages';
    } else if(codeValue === 'js') {
        output.textContent = 'JavaScript adds interactivity';
    }
});