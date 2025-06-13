document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn-contact');
  const dropdown = document.querySelector('.dropdown-content');

  if (btn && dropdown) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
      dropdown.style.display = 'none';
    });
  }
});