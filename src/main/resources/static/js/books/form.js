let genres = [];

function loadAuthors() {
    fetch('http://localhost:8080/api/authors')
        .then(async response => {
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return response.json();
        })
        .then(result => {
            renderSelect(result);
        })
        .catch(err => showAlert('Error!', `Error fetching authors: ${err.message}`, 'error'));
}

function renderSelect(result) {
    const select = document.getElementById('author');
    
    if(result.length === 0)
        select.innerHTML = `<option value="">No authors found...</option>`;
    else {
        select.innerHTML = `<option value="">Select a author</option>`;

        result.forEach(el => {
            const option = document.createElement('option');
            option.value = option.textContent = `${el.name} ${el.surname}`;
            select.appendChild(option);
        });
    }
}

function renderGenres() {
    const genresContainer = document.getElementById('genres-container');
    const genresList = [
        { value: 'sci-fi', text: 'Sci-fi' },
        { value: 'mystery', text: 'Mystery' },
        { value: 'fantasy', text: 'Fantsay' },
        { value: 'horror', text: 'Horror' },
        { value: 'other', text: 'Other' }
    ];

    genresList.forEach(el => {
        genresContainer.innerHTML += `
            <span class="checkbox-input">
                <p>${el.text}</p>
                <input 
                    type="checkbox" 
                    id="genre-checkbox-${el.value}" 
                    value="${el.value}" 
                    class="genre-checkbox" 
                    onchange="selectGenre(event)">
            </span>
        `;
    });
}

function selectGenre(genre) {
    const checkboxValue = genre.target.value;

    if(genre.target.checked)
        genres.push(checkboxValue);
    else {
        const index = genres.findIndex(el => el === checkboxValue);
        genres.splice(index, 1);
    }
}

function submitForm(e) {
    e.preventDefault();
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const price = document.getElementById('price').value;
    const form = { id, name, author, pages, price, genres };

    if(!name || !author || !pages || !price) {
        alert('⚠️ Please, fill all the fields');
        return;
    }

    if(pages < 1) {
        alert('⚠️ Pages must be at least 1');
        return;
    }
    
    if(price < 1) {
        alert('⚠️ Price must be at least $1');
        return;
    }
    
    if(genres.length === 0) {
        alert('⚠️ Select at least one genre');
        return;
    }

    if(!id)
        addBook(form);
    else
        editBook(form)
}

function addBook(form) {
    const formData = new FormData();
    formData.append('book', new Blob(
        [JSON.stringify(form)], 
        { type: 'application/json' }
    ));

    fetch('http://localhost:8080/api/books', {
        method: 'POST',
        body: formData
        
    })
        .then(async response => {
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return response.json()
        })
        .then(async () => {
            await showConfirmation(
                'Great!',
                'Book saved successfully.',
                'success',
                'OK',
                false
            );

            resetBooksForm()
            loadBooks();
        })
        .catch(err => showAlert('Error!', `Error saving book: ${err.message}`, 'error'));
}

function editBook(form) {
    const formData = new FormData();
    formData.append('book', new Blob(
        [JSON.stringify(form)], 
        { type: 'application/json' }
    ));

    fetch('http://localhost:8080/api/books', {
        method: 'PUT',
        body: formData
        
    })
        .then(async response => {
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            return response.json()
        })
        .then(async () => {
            await showConfirmation(
                'Great!',
                'Book info. updated successfully.',
                'success',
                'OK',
                false
            );

            resetBooksForm()
            loadBooks();
        })
        .catch(err => showAlert('Error!', `Error updating book: ${err.message}`, 'error'));
}

function resetBooksForm() {
    document.querySelector('form').reset();
    document.getElementById('id').value = '';
    genres = [];
}

// Render data
loadAuthors() // Authors
renderGenres() // Genres