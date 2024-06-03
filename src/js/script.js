function filterItems() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchCriteria = document.getElementById('search-criteria').value;
    const items = document.querySelectorAll('#item-list li');

    items.forEach(item => {
        const attribute = item.getAttribute(`data-${searchCriteria}`).toLowerCase();
        if (attribute.includes(searchInput)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

