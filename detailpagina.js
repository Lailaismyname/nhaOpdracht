let page = localStorage.getItem('pageTarget');
console.log(page);

switch (page)  {
    case 'btn-to-output1':
        $('#detailpagina-output').load('blogdatabase.html #blog1');
        break;
    case 'btn-to-output2':
        $('#detailpagina-output').load('blogdatabase.html #blog2');
        break;
    case 'btn-to-output3':
        $('#detailpagina-output').load('blogdatabase.html #blog3');
        break;
    case 'btn-to-output4':
        $('#detailpagina-output').load('blogdatabase.html #blog4');
        break;
    case 'btn-to-output5':
        $('#detailpagina-output').load('blogdatabase.html #blog5');
        break;
    default:
        alert('3');
        break;
    }

   let maat = 'groot';
    //jquery animatie
    $('#grote-letters-btn').click(function(e){
        if (maat == 'groot'){
            $('#detailpagina-output').animate({
                fontSize: '2rem'},'slow'),
            e.target.textContent = 'Klik hier voor Kleine Lettertype';
            maat = 'klein';
        }
        else {
            $('#detailpagina-output').animate({
                fontSize: '1rem'},'slow'),
            e.target.textContent = 'Klik hier voor Grote Lettertype';
            maat = 'groot';
        }
      }); 