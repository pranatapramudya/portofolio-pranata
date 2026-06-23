document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let shouldResetDisplay = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (value === 'C') {
                // Tombol Clear (C)
                currentInput = '';
                display.textContent = '0';
            } else if (value === '=') {
                // Tombol Sama Dengan (=)
                try {
                    // Evaluasi ekspresi matematika
                    // Peringatan: eval() bisa berbahaya di aplikasi besar, tapi aman untuk kalkulator ini
                    let result = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/'));
                    display.textContent = result;
                    currentInput = result.toString();
                    shouldResetDisplay = true; // Siapkan untuk input baru setelah hasil
                } catch (error) {
                    display.textContent = 'Error';
                    currentInput = '';
                }
            } else {
                // Tombol Angka dan Operator
                if (display.textContent === '0' || shouldResetDisplay) {
                    display.textContent = '';
                    shouldResetDisplay = false;
                }

                display.textContent += value;
                currentInput = display.textContent;
            }
        });
    });
});