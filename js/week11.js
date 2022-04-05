const para = document.getElementById('dontClickButton')

para.addEventListener('click', updateFail);

function updateFail ()
{
   const name = document.getElementById('name');
   name.textContent = 'YOU';

   const name1 = document.getElementById('name1');
   name1.textContent = 'SHOULDNT';

   const name2 = document.getElementById('name2');
   name2.textContent = 'HAVE';

   const name3 = document.getElementById('name3');
   name3.textContent = 'DONE';

   const name4 = document.getElementById('name4');
   name4.textContent = 'THAT';
}
