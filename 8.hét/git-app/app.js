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
