const GH_ACCESS_TOKEN = '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';

function loadNavigation() {
    fetch('./navbar.html')
        .then(res => res.text())
        .then(navbarHtml => {
            document.body.insertAdjacentHTML('afterbegin', navbarHtml);
        })
        .catch(err => {
            console.error(err);
            alert('Hiba a menürendszer betöltésekor.');
        });
}

loadNavigation();
