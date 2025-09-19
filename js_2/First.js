document.addEventListener('DOMContentLoaded', function () {
  // who section
  const whoSectione = document.querySelector('#who');
  const contentBox = document.querySelector('.content-box-3');

  if (whoSectione && contentBox) {
    whoSectione.addEventListener('mouseover', function () {
      contentBox.style.backgroundColor = 'rgba(255,182,7,0.6)';
    });
    whoSectione.addEventListener('mouseout', function () {
      contentBox.style.backgroundColor = '';
    });
  }

 const contract = document.querySelector('.contact');
  const cont = document.querySelector('.pr');

  if (contract && cont) {
    contract.addEventListener('mouseover', function () {
      cont.style.backgroundColor = 'rgba(255,182,7,0.6)';
    });
    contract.addEventListener('mouseout', function () {
      cont.style.backgroundColor = '';
    });
  }
});