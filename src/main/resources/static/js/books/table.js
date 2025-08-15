function loadBooks() {
    const tableContainer = document.getElementById('table-container');

    fetch('http://localhost:8080/api/books')
        .then(async response => {
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return response.json();
        })
        .then(result => {
            if(result.length === 0) 
                tableContainer.innerHTML = `<p>No books found...</p>`;
            else 
                renderTable(result);
        })
        .catch(err => showAlert('Error!', `Error fetching books: ${err.message}`, 'error'));
}

function renderTable(result) {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';

    result.forEach(el => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.author}</td>
            <td>${el.pages}</td>
            <td>$${el.price}</td>
            <td>${el.genres}</td>
            <td>
                <button class="edit-btn" onclick="getBookInfo(${el.id})">
                    <i class="fas fa-pencil"></i>
                </button>
            </td>
            <td>
                <button class="delete-btn" onclick="deleteBookConfirmation(${el.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `

        tableBody.appendChild(row);
    });
}

function getBookInfo(id) {
    fetch(`http://localhost:8080/api/books/${id}`)
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
            document.getElementById('author').value = result.author;
            document.getElementById('pages').value = result.pages;
            document.getElementById('price').value = result.price;
            getGenresSelected(result.genres);
        })
        .catch(err => showAlert('Error!', `Error fetching book info.: ${err.message}`, 'error'));
}

async function deleteBookConfirmation(id) {
    const res = await showConfirmation(
        'Are you sure?',
        'You will delete a book.',
        'warning',
        'Yes, delete it',
        true
    );

    if(res.isConfirmed)
        deleteBook(id)
}

function deleteBook(id) {
    fetch(`http://localhost:8080/api/books/${id}`, {
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
            showAlert('Great!', 'Book deleted successfully', 'success');
            loadBooks()
        })
        .catch(err => showAlert('Error!', `Error fetching book info.: ${err.message}`, 'error'));
}

function getGenresSelected(genresSelected) {
    document.querySelectorAll('.genre-checkbox').forEach(el => el.checked = false);
    genresSelected.forEach(el => document.getElementById(`genre-checkbox-${el}`).checked = true);
    genres = genresSelected;
}

// Load books
loadBooks();