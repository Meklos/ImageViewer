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
    description: 'What happened here, why is this a very nice image'
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

let imagesData = new Array(data1, data2, data3, data4, data5, data6, data7, data8);

function ShowSelectedPhoto(selectedIndex) {
    $('#photo').attr('src', imagesData[selectedIndex].photo);
    $('#photo-title').text(imagesData[selectedIndex].title);
    $('#photo-description').text(imagesData[selectedIndex].description);
    console.log(selectedIndex);
}

let currentPhoto = 0;
ShowSelectedPhoto(currentPhoto);

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
});

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
});


imagesData.forEach((item,index) => {
    $('.thumbnails').append('<div id="thumbnail'+index+'"></div>');
    
    $('#thumbnail'+index).css('background-image', 'url("'+item.photo+'")');
    $('#thumbnail'+index).css('height','100%');
    $('#thumbnail'+index).css('background-position','center');
    $('#thumbnail'+index).css('background-repeat','no-repeat');
    $('#thumbnail'+index).css('background-size','cover');
    $('#thumbnail'+index).css('width','80px');
    $('#thumbnail'+index).css('height','80px');
    $('#thumbnail'+index).css('margin-top','22px');
    $('#thumbnail'+index).css('border','white solid 5px');
    $('#thumbnail'+index).css('cursor','pointer');
    $('#thumbnail'+index).css('box-shadow','0px 20px 35px 0 rgba(0, 0, 0, .5)' );
    $('#thumbnail'+index).hover(
        function(){
            $(this).css('box-shadow','0px 20px 35px 0 rgba(130, 330, 10, .5)' );
            $(this).css('margin-top','15px');
        },
        function(){
            $(this).css('box-shadow','0px 20px 35px 0 rgba(0, 0, 0, .5)' );   
            $(this).css('margin-top','22px');
        }
        );
    
    $('#thumbnail'+index).click((event) => {
        currentPhoto = index;
        ShowSelectedPhoto(currentPhoto);

        //Az összeset beállítja alaphelyzetbe, hogy csak a megnyomott maradjon úgy
        for(let i=0; i< imagesData.length; i++)
        {
            $('#thumbnail'+i).css('margin-top','22px');            
        }

        //Ha rákattintunk úgy mradna, de a mosue leave miatt vissza áll alap helyzetbe
        $(event.target).css('margin-top','15px');
        console.log("nyasgem");
        
    });
});