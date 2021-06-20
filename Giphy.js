const onClickOpenModal = () => {

    document.getElementById('myImage').style.display = 'none';

    const modalContainer = document.getElementById("modalContainer");
    const buttonModal = document.getElementById('buttonModal');
    const closeIcon = document.getElementsByClassName("closeIcon")[0];

    buttonModal.onclick = () => {
        console.log(buttonModal.style.display);
        if (modalContainer.style.display !== "none") {
            modalContainer.style.display = "none";
        } else {
            modalContainer.style.display = "block";
            loadJSONFile();
        }
    }

    closeIcon.onclick = () => {
        modalContainer.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }
}

const cleanInput = () => {

    document.getElementById("searchApi").value = "";
    document.getElementById("appendChild").innerHTML = "";
    document.getElementById('myImage').style.display = 'none';

    loadJSONFile();
}

const loadJSONFile = () => {

    document.getElementById("searchApi").value = "";
    document.getElementById("appendChild").innerHTML = "";
    document.getElementById('myImage').style.display = 'none';
    
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

const SearchGighy = () => {

    document.getElementById('myImage').style.display = 'inline';
    const searchApiValue = document.getElementById("searchApi").value;

    const api = 'https://api.giphy.com/v1/gifs/search?&api_key=SLuR3c3LN86umdxudz2vKPlu5qp27hqk&q=';
    const limitQueryParam = '&limit=5';

    fetch(api + searchApiValue + limitQueryParam)
        .then(response => response.json())
        .then(data => {
            for (elements = 0; elements < data.data.length; elements++) {
                const images = document.createElement("img");
                const link = document.createElement("a");
                link.href = data.data[elements].images.original.url;
                images.src = data.data[elements].images.original.url;
                images.alt = data.data[elements].title;
                images.width = 300;
                link.appendChild(images);
                document.getElementById("appendChild").insertBefore(link, document.getElementById("appendChild").childNodes[0]);
            }
        });
}