document.getElementById('btn-1').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
});

document.getElementById('btn-2').addEventListener('click', function() {
    window.location.href = 'd:\Resume.pdf'; // Replace with the path to your PDF file
});
