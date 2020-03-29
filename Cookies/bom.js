(function () {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=86b1f1bb943112d43e8a1399bf5804f2"
    fetch(url)
    .then((res) => res.json())
    .then(temp);

    function temp(data) {
        const temperatureC = data.main.temp - 273.15;
        const formC = document.querySelector("[temperature-C]");
        formC.innerHTML = temperatureC.toFixed(1) + "&deg;C";
        formC.style.display = "none";

    

        const temperatureF = data.main.temp - 273.15 * 9/5 + 32 ; 
        const formF = document.querySelector("[temperature-F]");
        formF.innerHTML = temperatureF.toFixed(1) + "&#8457;";
        formF.style.display = "none";
        
        document.addEventListener('click', handleTempChange);

        function handleTempChange(e) {
            if(e.target.name !== 'temp') {
                return;
            }

            if(e.target.className === 'js-C') {
                formC.style.display= "inline";
                formF.style.display = "none";
                setStorage(temperatureC);
            } else if(e.target.className === 'js-F') {
                formC.style.display = "none";
                formF.style.display = "inline";
                setStorage(temperatureF);
            } 
        }

        function setStorage(temp) {
            if(localStorage) {
                localStorage.setItem('temp', temp);
            } else {
                setCookie("Great","weather"); 
            }
        }    
    } 

})();
