function onClickOpenModal() {

    document.getElementById('my_image').style.display = 'none';
    var modalContainer = document.getElementById("modalContainer");

    var buttonModal = document.getElementById('buttonModal');
    var closeIcon = document.getElementsByClassName("closeIcon")[0];

    buttonModal.onclick = function () {
        modalContainer.style.display = "block";
        loadJSONFile();
    }

    closeIcon.onclick = function () {
        modalContainer.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }
}

function cleanInput() {

    document.getElementById("searchApi").value = "";
    document.getElementById("appendChild").innerHTML = "";
    document.getElementById('my_image').style.display = 'none';

    loadJSONFile();
}

function loadJSONFile() {

    const api = 'https://api.giphy.com/v1/gifs/trending?&api_key=SLuR3c3LN86umdxudz2vKPlu5qp27hqk&limit=5';

    fetch(api)
        .then(response => response.json())
        .then(data => {
            for (elements = 0; elements < data.data.length; elements++) {
                let image = document.createElement("img");
                let link = document.createElement("a");
                link.href = data.data[elements].images.original.url;
                image.src = data.data[elements].images.original.url;
                image.alt = data.data[elements].title;
                image.width = 300;
                link.appendChild(image);
                document.getElementById("appendChild").appendChild(link);
            }
        });
}

function SearchGighy() {

    document.getElementById('my_image').style.display = 'inline';
    let searchApiValue = document.getElementById("searchApi").value;

    let api = 'https://api.giphy.com/v1/gifs/search?&api_key=SLuR3c3LN86umdxudz2vKPlu5qp27hqk&q=';
    let limitElementApi = '&limit=5';

    fetch(api + searchApiValue + limitElementApi)
        .then(response => response.json())
        .then(data => {
            for (elements = 0; elements < data.data.length; elements++) {
                let images = document.createElement("img");
                let link = document.createElement("a");
                link.href = data.data[elements].images.original.url;
                images.src = data.data[elements].images.original.url;
                images.alt = data.data[elements].title;
                images.width = 300;
                link.appendChild(images);
                document.getElementById("appendChild").insertBefore(link, document.getElementById("appendChild").childNodes[0]);
            }
        });
}