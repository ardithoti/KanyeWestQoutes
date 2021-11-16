const api = `https://api.kanye.rest`

axios.get(api)
    .then(response => {
        const data = response.data;

        const result = document.getElementById("qoutewrapper");

        let html = `<h4>${data.quote}</h4>`;

        result.innerHTML = html;
    })
    .catch(e => console.log(e));