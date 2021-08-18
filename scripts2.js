let currentPhoto = 0;

let imagesData = [
    {photo: 'https://destiny.wiki.gallery/images/e/eb/DirectorShadowkeep.jpg', title: 'Destiny 2: Planets, Moons & Other Dimensions', description: 'Examples of places to go in the Sol System'},
    {photo: 'https://i.redd.it/ovlhg4sk4u951.png', title: 'Mercury', description: 'Former Garden World, now home to the Infinite Forest'},
    {photo: 'https://cdn.vox-cdn.com/thumbor/r-VKfkN46T0ja_TUgsjLOKSeSPI=/0x0:3840x2160/1400x788/filters:focal(1613x773:2227x1387):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54845629/destiny_2_earth_forest_3840.1495133169.jpg', title: 'Earth', description: 'The cradle of humanity, and the residing place of the Traveler'},
    {photo: 'https://cdn.gamer-network.net/2018/usgamer/destiny_2_warmind_story_ice_and_shadow-6-1152x648.jpg', title: 'Mars', description: 'Housing one of the greatest technological achievements of humanity, and terrifying secrets locked in ice'},
    {photo: 'https://destiny.wiki.gallery/images/7/77/Io-Landscape.jpg', title: 'Io (Jupiter I)', description: 'One of the largest moons of Jupiter, and the last place the Traveler touched before departing for Earth'},

];

const numOfImages = imagesData.length;

const maxImgIndex = imagesData.length - 1

let loadPhoto = (photoNumber) => {
    const currImg = imagesData[photoNumber];
    $('#mainPic').attr('src', currImg.photo);
    $('#slide-title').text(currImg.title);
    $('#slide-description').text(currImg.description);
    
};

loadPhoto(currentPhoto);

$('#button2').click(() => {
    if (currentPhoto < maxImgIndex){
        currentPhoto++;
        loadPhoto(currentPhoto);
    }
    else {
      currentPhoto = 0;
      loadPhoto(currentPhoto);
    }
});

$('#button1').click(() => {
    if (currentPhoto > 0){
        currentPhoto--;
        loadPhoto(currentPhoto);
    }
    else {
        currentPhoto = maxImgIndex;
        loadPhoto(currentPhoto);
    }
});

imagesData.forEach((item, index) => {
    $('#holder').append(`
    <div class = "image" data-index = "${index}" 
    style="background-image: url(${item.photo}); background-size: cover;">
    <div class = "photo-title">${item.title}</div>
    </div>`)  
});

$('.image').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        let numberIndex = parseInt(indexClicked);
        currentPhoto = numberIndex;
        loadPhoto(currentPhoto);
    });