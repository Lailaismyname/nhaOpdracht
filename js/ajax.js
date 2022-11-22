//laad de 3 blogs in de pagina
$('#output1').load('blogdatabase.html #blog1');
$('#output2').load('blogdatabase.html #blog2');
$('#output3').load('blogdatabase.html #blog3');
$('#output4').load('blogdatabase.html #blog4');
$('#output5').load('blogdatabase.html #blog5');

//random jquery plugin, veranderd achtergrond kleur vd pagina
const kleur = document.querySelector('.kolorPicker');
const colorBtn = document.querySelector('.color-btn');
const achtergrond = document.querySelector('#blog');

colorBtn.addEventListener('click',(e)=>{
    achtergrond.style.background = kleur.value;
})

document.querySelectorAll('.output-btn').forEach(item => {
    item.addEventListener('click', (e)=>{
        localStorage.setItem('pageTarget', e.target.id);
        console.log(localStorage.getItem('pageTarget'));
    })
})
