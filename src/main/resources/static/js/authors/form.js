function submitForm(e) {
    e.preventDefault();
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const form = { id, name, surname, age };

    if(!name || !surname || !age) {
        alert('⚠️ Please, fill all the fields');
        return;
    }

    if(age < 18 || age > 100) {
        alert('⚠️ Age not valid. Must be between 18 and 100 years');
        return;
    }

    if(!id)
        addAuthor(form);
    else
        editAuthor(form)
}

function addAuthor(form) {
    const formData = new FormData();
    formData.append('author', new Blob(
        [JSON.stringify(form)], 
        { type: 'application/json' }
    ));

    fetch('http://localhost:8080/api/authors', {
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
                'User saved successfully.',
                'success',
                'OK',
                false
            );

            resetAuthorsForm()
            loadAuthors();
        })
        .catch(err => showAlert('Error!', `Error saving author: ${err.message}`, 'error'));
}

function editAuthor(form) {
    const formData = new FormData();
    formData.append('author', new Blob(
        [JSON.stringify(form)], 
        { type: 'application/json' }
    ));

    fetch('http://localhost:8080/api/authors', {
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
                'User info. updated successfully.',
                'success',
                'OK',
                false
            );

            resetAuthorsForm()
            loadAuthors();
        })
        .catch(err => showAlert('Error!', `Error updating author: ${err.message}`, 'error'));
}

function resetAuthorsForm() {
    document.querySelector('form').reset();
    document.getElementById('id').value = '';
}