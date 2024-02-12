const btnSearch = document.getElementById('btnBuscar')
const inputCity = document.getElementById('searchCity')

btnSearch.addEventListener('click', () =>{
    if (inputCity.value.trim().length > 0){
        console.log('@@ input value =>', inputCity.value)
        buscarCiudad(inputCity.value)
    }
})

const buscarCiudad = async (ciudad) => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${ciudad}&language=es`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af34f15ac8msh84e7665353d3b1ap14bc8ajsn5c4ff41dc6d6',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}