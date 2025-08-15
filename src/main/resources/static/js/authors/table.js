function loadAuthors() {
    const tableContainer = document.getElementById('table-container');

    fetch('http://localhost:8080/api/authors')
        .then(async response => {
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return response.json();
        })
        .then(result => {
            if(result.length === 0) 
                tableContainer.innerHTML = `<p>No authors found...</p>`;
            else 
                renderTable(result);
        })
        .catch(err => showAlert('Error!', `Error fetching authors: ${err.message}`, 'error'));
}

function renderTable(result) {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';

    result.forEach(el => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.surname}</td>
            <td>${el.age}</td>
            <td>
                <button class="edit-btn" onclick="getAuthorInfo(${el.id})">
                    <i class="fas fa-pencil"></i>
                </button>
            </td>
            <td>
                <button class="delete-btn" onclick="deleteAuthorConfirmation(${el.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `

        tableBody.appendChild(row);
    });
}

function getAuthorInfo(id) {
    fetch(`http://localhost:8080/api/authors/${id}`)
        .then(async response => {
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return response.json();
        })
        .then(result => {
            document.getElementById('id').value = result.id;
            document.getElementById('name').value = result.name;
            document.getElementById('surname').value = result.surname;
            document.getElementById('age').value = result.age;
        })
        .catch(err => showAlert('Error!', `Error fetching author info.: ${err.message}`, 'error'));
}

async function deleteAuthorConfirmation(id) {
    const res = await showConfirmation(
        'Are you sure?',
        'You will delete a author.',
        'warning',
        'Yes, delete it',
        true
    );

    if(res.isConfirmed)
        deleteAuthor(id)
}

function deleteAuthor(id) {
    fetch(`http://localhost:8080/api/authors/${id}`, {
        method: 'DELETE'
    })
        .then(async response => {
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return response.json();
        })
        .then(() => {
            showAlert('Great!', 'Author deleted successfully', 'success');
            loadAuthors()
        })
        .catch(err => showAlert('Error!', `Error fetching author info.: ${err.message}`, 'error'));
}

// Load authors
loadAuthors();