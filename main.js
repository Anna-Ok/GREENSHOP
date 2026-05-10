const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');

burger.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    this.classList.toggle('active', isOpen);
    this.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
    }
});

const sidebarToggle = document.querySelector('.sidebar-toggle');
const categoriesList = document.querySelector('.categories-list');

if (sidebarToggle) {
    const selectedLabel = sidebarToggle.querySelector('.sidebar-selected');

    const updateSelected = () => {
        const active = categoriesList.querySelector('a.active');
        selectedLabel.textContent = active ? active.textContent.trim() : 'Categories';
    };

    updateSelected();

    sidebarToggle.addEventListener('click', function () {
        const isOpen = categoriesList.classList.toggle('open');
        this.setAttribute('aria-expanded', isOpen);
    });

    categoriesList.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (!link) return;
        categoriesList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        updateSelected();
        categoriesList.classList.remove('open');
        sidebarToggle.setAttribute('aria-expanded', 'false');
    });
}

const showMoreBtn = document.getElementById('show-more-btn');
const productsList = document.querySelector('.products-list');

if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
        productsList.classList.add('expanded');
        this.classList.add('hidden');
    });
}
