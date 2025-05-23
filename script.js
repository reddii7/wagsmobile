const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('myModal');

const openModalBtn2 = document.getElementById('openModalBtn2');
const closeModalBtn2 = document.getElementById('closeModalBtn2');
const modalOverlay2 = document.getElementById('myModal2');

function openModal() {
    const modalBody = modalOverlay.querySelector('.modal-body');
    if (modalBody) {
        modalBody.scrollTop = 0; // Reset scroll to top
    }
    modalOverlay.classList.add('is-open');
}

function closeModal() {
    modalOverlay.classList.remove('is-open');
}
function openModal2() {
    const modalBody = modalOverlay2.querySelector('.modal-body');
    if (modalBody) {
        modalBody.scrollTop = 0; // Reset scroll to top
    }
    modalOverlay2.classList.add('is-open');
}

function closeModal2() {
    modalOverlay2.classList.remove('is-open');
}




openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
openModalBtn2.addEventListener('click', openModal2);
closeModalBtn2.addEventListener('click', closeModal2);

// Optional: Close modal when clicking on the overlay (outside the content)
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});
modalOverlay2.addEventListener('click', function(event) {
    if (event.target === modalOverlay2) {
        closeModal2();
    }
});

// Optional: Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (modalOverlay.classList.contains('is-open')) {
            closeModal();
        }
        if (modalOverlay2.classList.contains('is-open')) {
            closeModal2();
        }
    }
});

// Function to format numbers in a specific table's body to one decimal place
function formatNumbersInTableBody(tableBodyElement) {
    if (!tableBodyElement) return;

    const rows = tableBodyElement.querySelectorAll('tr');
    rows.forEach(row => {
        const valueCell = row.cells[1]; // The second cell (index 1) contains the value
        if (valueCell) {
            const number = parseFloat(valueCell.textContent);
            if (!isNaN(number)) {
                valueCell.textContent = number.toFixed(1);
            }
        }
    });
}

// Call the formatting function once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const firstTableBody = document.querySelector('#myModal .modern-table tbody');
    formatNumbersInTableBody(firstTableBody);

    const secondTableBody = document.querySelector('#myModal2 .modern-table tbody');
    formatNumbersInTableBody(secondTableBody);
});