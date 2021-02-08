const button = document.querySelector('#add-btn');
const bitcoins = document.querySelector('#item-value');
const selected = document.querySelector('.selector');
const totalSpan = document.querySelector('#total-cash');

let total = 0;
button.addEventListener('click', (event) =>{

    const value = selected.options[selected.selectedIndex].value;
    console.log(value);

    let BitcoinsValue = parseInt(bitcoins.value);
    console.log(typeof(BitcoinsValue));

    let url = `https://api.coindesk.com/v1/bpi/currentprice/EUR.json`;
    console.log(url);

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        if(value == "EUR")
        {
        console.log(data.bpi.EUR.description);
        let equation = parseFloat(data.bpi.EUR.rate_float) * BitcoinsValue;
        totalSpan.innerHTML = equation + ` ${data.bpi.EUR.description}`;
        document.querySelector('.calculation').innerHTML = `BitCoins: ${BitcoinsValue} <br> Currency: ${value} <br> Description: ${data.bpi.EUR.description} <br> ${value} Rate: ${data.bpi.EUR.rate_float} <br> Value in ${value}: ${equation}`;
        }
        if(value == "USD"){
            console.log(data.bpi.USD.description);
        let equation = parseFloat(data.bpi.USD.rate_float) * BitcoinsValue;
        totalSpan.innerHTML = equation + ` ${data.bpi.USD.description}`;
        document.querySelector('.calculation').innerHTML = `BitCoins: ${BitcoinsValue} <br> Currency: ${value} <br> Description: ${data.bpi.USD.description} <br> ${value} Rate: ${data.bpi.USD.rate_float} <br> Value in ${value}: ${equation}`;
        }
    })
    .catch(error => {
        console.log(error);
    });

    event.preventDefault();
});