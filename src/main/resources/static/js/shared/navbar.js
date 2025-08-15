document.addEventListener('DOMContentLoaded', highlightNavbarOption());

function highlightNavbarOption() {
    const navbarOptions = document.querySelectorAll('.navbar-option');
    const optionIndex = window.location.href.includes('authors') ? 0 : 1 ;

    navbarOptions.forEach(op => op.classList.remove('highlight'));
    navbarOptions[optionIndex].classList.add('highlight');
}