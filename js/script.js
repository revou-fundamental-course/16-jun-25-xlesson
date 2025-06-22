document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('segitigaForm');
  const hasil = document.getElementById('hasil');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
      hasil.textContent = 'Masukkan angka yang valid!';
      return;
    }

    const luas = 0.5 * alas * tinggi;
    hasil.textContent = `Luas segitiga: ${luas}`;
  });
});