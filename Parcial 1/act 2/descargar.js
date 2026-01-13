document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById('btnDescargarPDF');
    if (!boton) return;

    boton.addEventListener('click', function () {
        var elemento = document.body;

        var opciones = {
            margin: 0.5,
            filename: 'contrato.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opciones).from(elemento).save();
    });
});


