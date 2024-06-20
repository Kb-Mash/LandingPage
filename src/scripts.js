document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('services-modal');
    const btn = document.querySelector('.services');
    const span = document.getElementsByClassName('close')[0];

    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
