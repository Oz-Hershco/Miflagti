function getFAQs() {
    fetch('http://localhost:3001/faqs')
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log(JSON.parse(data));
        });
}

function createMerchant() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    fetch('http://localhost:3001/merchants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
        .then(response => {
            return response.text();
        })
        .then(data => {
            alert(data);
        });
}

function updateMerchant() {
    let id = prompt('Enter marchant id');
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    fetch('http://localhost:3001/merchants', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name, email }),
    })
        .then(response => {
            return response.text();
        })
        .then(data => {
            alert(data);
        });
}

function deleteMerchant() {
    let id = prompt('Enter merchant id');
    fetch(`http://localhost:3001/merchants/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            return response.text();
        })
        .then(data => {
            alert(data);
        });
}