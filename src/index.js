const init = () => {
    document.addEventListener('submit', function(evt){
        evt.preventDefault();
        const requestedId = evt.target.querySelector("#searchByID").value
        fetch(`http://localhost:3000/movies/${requestedId}`)
        .then(res => res.json())
        .then(data => updateSummary(data))
        evt.target.reset();
    })
  
}

function updateSummary(data){
    const titleNode = document.querySelector("#movieDetails h4");
    const summaryNode = document.querySelector("#movieDetails p");
    titleNode.textContent = data.title;
    summaryNode.textContent = data.summary;
}

document.addEventListener('DOMContentLoaded', init);