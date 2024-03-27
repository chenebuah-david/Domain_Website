document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll('.buy-now');
    const modal = document.getElementById('modal');
    const modalDomain = document.getElementById('modal-domain');
    const modalPrice = document.getElementById('modal-price');
    const modalClose = document.querySelector('.close');

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const domain = this.parentNode.getAttribute('data-domain');
            const price = this.parentNode.getAttribute('data-price');
            modalDomain.textContent = domain;
            modalPrice.textContent = "$" + price;
            modal.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

