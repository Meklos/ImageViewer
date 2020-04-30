let data1 = {
    photo: 'images/01.jpg',
    title: 'Sivatag',
    description: 'A képen egy sivatagot bemutató tájkép szerepel.'
};

let data2 = {
    photo: 'images/02.jpg',
    title: 'Hörcsög',
    description: 'Egy cuki hörcsög magot eszik.'
};

let data3 = {
    photo: 'images/03.jpg',
    title: 'Metro alagút',
    description: 'No komment'
};

let data4 = {
    photo: 'images/04.jpg',
    title: 'Fekete tengerimalac',
    description: 'What happened here, why is this a very nice image'
};

let data5 = {
    photo: 'images/05.jpg',
    title: 'Virágszedő',
    description: 'What happened here, why is this a very nice image'
};

let data6 = {
    photo: 'images/06.jpg',
    title: 'Macska',
    description: 'What happened here, why is this a very nice image'
};

let data7 = {
    photo: 'images/07.jpg',
    title: 'Bébi hörcsögök',
    description: 'What happened here, why is this a very nice image'
};

let data8 = {
    photo: 'images/08.jpg',
    title: 'Fehér tengerimalac',
    description: 'What happened here, why is this a very nice image'
};

//Ahány elemű ez a tömb annyi miniatűr lesz a képen
let imagesData = new Array(data1, data2, data3, data4, data5, data6, data7, data8);

//Alapértelmetetten az első kép lesz kiválasztva
let currentPhoto = 0;

ShowSelectedPhoto(currentPhoto);

//Jobbra lapozás gomb
$('#bt_viewer_right').click(() => {    
    if(currentPhoto < imagesData.length-1)
    {
        currentPhoto++;   
    }
    else
    {
        currentPhoto = 0;
    }
    ShowSelectedPhoto(currentPhoto);

    SelectPhoto(currentPhoto);
});

//Balra lapozás gomb
$('#bt_viewer_left').click(() => {
    if(currentPhoto > 0)
    {
        currentPhoto--;   
    }
    else
    {
        currentPhoto = imagesData.length-1;
    }
    ShowSelectedPhoto(currentPhoto);

    SelectPhoto(currentPhoto);
});

//Feltölti a nagy kép alatti miniatűr tárolót a miniatűrökkel, az összes stílusával együtt
imagesData.forEach((item,index) => {
    //A miniatűr tárolóhoz hozzá ad minden ciklusban egy új divet aminek a kép a háttere lesz
    $('.thumbnails').append('<div id="thumbnail'+index+'"></div>');
    //Az előbbi divhez mindn ciklusban hozzá ad egy új divet ami a kép felett jelenik majd meg
    $('#thumbnail'+index).append('<div id="toolTip'+index+'"></div>');

    //Kis kép formázásai
    $('#thumbnail'+index).css('background-image', 'url("'+item.photo+'")');
    $('#thumbnail'+index).css('background-color', 'rgba(130, 330, 10, .5)');
    $('#thumbnail'+index).css('height','100%');
    $('#thumbnail'+index).css('background-position','center');
    $('#thumbnail'+index).css('background-repeat','no-repeat');
    $('#thumbnail'+index).css('background-size','cover');
    $('#thumbnail'+index).css('width','80px');
    $('#thumbnail'+index).css('height','80px');
    $('#thumbnail'+index).css('margin-top','22px');
    $('#thumbnail'+index).css('margin-right','8px');
    $('#thumbnail'+index).css('border','white solid 5px');
    $('#thumbnail'+index).css('cursor','pointer');
    $('#thumbnail'+index).css('box-shadow','0px 20px 35px 0 rgba(0, 0, 0, .5)' );   
    
    //Kis kép felett megjelenő cím formázásai
    $('#toolTip'+index).text(item.title);
    $('#toolTip'+index).css('display', 'none');
    $('#toolTip'+index).css('position', 'relative');
    $('#toolTip'+index).css('background', 'black');
    $('#toolTip'+index).css('color', 'white');
    $('#toolTip'+index).css('border-radius', '5px');
    $('#toolTip'+index).css('padding', '5px');
    $('#toolTip'+index).css('width', '150');
    $('#toolTip'+index).css('top', '-50px');
    $('#toolTip'+index).css('left', '-42px');
    $('#toolTip'+index).css('opacity', '0.7');
    $('#toolTip'+index).css('white-space', 'nowrap');
    $('#toolTip'+index).css('text-align', 'center'); 

    //Kiskép Hover
    $('#thumbnail'+index).hover(
        function(){
            //Ha rávisszük a kurzort egy miniatűrre megváltozik
            $(this).css('box-shadow','0px 20px 35px 0 rgba(130, 330, 10, .5)' );
            $(this).css('margin-top','15px');
            
            //Kiírja fölé a kép címét
            $('#toolTip'+index).css('display','block');
        },
        function(){ 
            //Ha elvisszük a kurzort egy miniatűrről akkor vissza áll az alaphelyzetbe   
            //Az összes miniatűrön végig megy, és alaphelyzetbe állítja
            for(let i=0; i< imagesData.length; i++)
            {
                //kivéve a kiválasztottat
                if(i!=currentPhoto)
                {
                    $('#thumbnail'+i).css('box-shadow','0px 20px 35px 0 rgba(0, 0, 0, .5)' );  
                    $('#thumbnail'+i).css('margin-top','22px');         
                } 
                $('#toolTip'+i).css('display','none');    
            }          
        });

    //Kiskép Click
    $('#thumbnail'+index).click((event) => {
        currentPhoto = index;
        ShowSelectedPhoto(currentPhoto);
        SelectPhoto(currentPhoto);
    });
});

//A nagy kép megjelenítése függvény, a kiválasztott kép index paraméterével
function ShowSelectedPhoto(selectedIndex) {
    $('#photo').attr('src', imagesData[selectedIndex].photo);
    $('#photo-title').text(imagesData[selectedIndex].title);
    $('#photo-description').text(imagesData[selectedIndex].description);
    console.log(selectedIndex);
}

//Miniatűr kép kiválasztás effekt
function SelectPhoto(inputIndex)
{    
    for(let i=0 ; i< imagesData.length; i++)
    {
        //Id alapján kiválaszt egy HTML elemet azt is amit korábban le generált a js
        let selectedThumbnail = document.querySelectorAll("#thumbnail"+i);
        
        //Végig megy az összes miniatűrön, és amelyik kép ki lett választva, azon hajtja végre a változtatásokat
        if(inputIndex == i)
        {
            $(selectedThumbnail).css('box-shadow','0px 20px 35px 0 rgba(130, 330, 10, .5)' );
            $(selectedThumbnail).css('margin-top','15px');  
            
            //A megnyomás pillanatában egyből tűnjön el a korábbi kijelölés
            for(let i=0; i< imagesData.length; i++)
            {
                if(i!=currentPhoto)
                {
                    $('#thumbnail'+i).css('box-shadow','0px 20px 35px 0 rgba(0, 0, 0, .5)' );  
                    $('#thumbnail'+i).css('margin-top','22px');            
                }        
            }
        }
       
    }
};

//Alapértelmezetten kiválaszt egy képet induláskor mindíg az elsőt
SelectImage(currentPhoto);



