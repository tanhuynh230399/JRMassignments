
function ToggleEvent(event) {
    const target = event.target;

    if (target.nodeName === 'BUTTON') {
        event.preventDefault();

        if (target.textContent.startsWith('Add')) {
            event.target.textContent = 'Remove from fav';
            const fav = document.createElement('p');
            fav.textContent = 'This is fav';
            target.parentElement.appendChild(fav);
        } else {
            event.target.textContent = 'Add Fav';
            const favToRemove = target.nextElementSibling;
            if (favToRemove && favToRemove.nodeName === 'P') {
                favToRemove.remove();
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const button = document.createElement('button');
    button.textContent = 'Add Fav';

    const container = document.querySelector('#buttonPlaceholder');
    container.appendChild(button);
    container.addEventListener('click', ToggleEvent);
});