window.addEventListener('load', function() {
    document.querySelector('.form_holder').style.transform = 'scale3d(1, 1, 1)';
    // document.querySelector('.form_holder').style.transition = '0.3s ease-in-out 0.4s';
});


function convert() {
    let fromCurrency = document.querySelector('.input:nth-child(1) input').value.toUpperCase().trim();
    let toCurrency = document.querySelector('.input:nth-child(2) input').value.toUpperCase().trim();
    let amount = parseFloat(document.querySelector('.input:nth-child(3) input').value.trim());
    let resultElement = document.querySelector('.answer_text');
    const currencies = {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75,
        RWF: 9.86,
        NRA: 1200,
        SHL: 2900,
    };
    if (!fromCurrency || !toCurrency || isNaN(amount)) {
        document.querySelector('.warning_form_holder').style.transition = '0.3s ease-in-out';
        document.querySelector('.warning_form_holder').style.visibility = 'visible';
        document.querySelector('.warning_form_holder').style.opacity = '1';
        document.querySelector('.warning').style.transform = 'scale3d(1, 1, 1)';
        document.querySelector('.warning').style.transition = '0.3s ease-in-out 0.4s';
        document.querySelector('.warning_text').textContent = 'Please fill in all fields';
        return;
    }
    if (!(currencies[fromCurrency] && currencies[toCurrency])) {
        document.querySelector('.warning_form_holder').style.transition = '0.3s ease-in-out';
        document.querySelector('.warning_form_holder').style.visibility = 'visible';
        document.querySelector('.warning_form_holder').style.opacity = '1';
        document.querySelector('.warning').style.transform = 'scale3d(1, 1, 1)';
        document.querySelector('.warning').style.transition = '0.3s ease-in-out 0.4s';
        document.querySelector('.warning_text').textContent = 'Currency not found';
        return;
    }
    const conv = ((amount * currencies[fromCurrency]) / currencies[toCurrency]).toFixed(2);
    resultElement.textContent = `${amount} ${fromCurrency} = ${conv} ${toCurrency}`;
    // Show result modal
    const resultForm = document.querySelector('.result_form_holder');
    const answerBox = document.querySelector('.answer');
    resultForm.style.transition = '0.3s ease-in-out';
    resultForm.style.visibility = 'visible';
    resultForm.style.opacity = '1';
    answerBox.style.transform = 'scale3d(1, 1, 1)';
    answerBox.style.transition = '0.3s ease-in-out 0.4s';
}
// Handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    convert();
});