function getRandomImageURL() {
    const imageUrls = [
        'https://static.vecteezy.com/system/resources/thumbnails/035/174/732/small/heart-y2k-3d-rendering-cute-clear-glass-png.png',
        'https://img1.picmix.com/output/stamp/normal/8/6/4/6/2566468_d2bdd.png',
        'https://i.pinimg.com/originals/63/ec/51/63ec51b87db4ce5bcd96c2e5a575e253.png',
        'https://i.pinimg.com/originals/5c/2b/4a/5c2b4a12606cf44aeac08f3496af32b6.png',
        'https://stickerly.pstatic.net/sticker_pack/0Tq2FkcNYGxRdhIWux9Q/9OYPMP/38/aa0ad8bd-63f9-4924-bd87-ae4a35b1105e.png',
        'https://stickerly.pstatic.net/sticker_pack/0Tq2FkcNYGxRdhIWux9Q/9OYPMP/38/68d4b1af-ce1d-4c1d-bc4d-c66ed2a024b5.png',
        'https://pngfre.com/wp-content/uploads/barbie-poster.png',
        'https://static.vecteezy.com/system/resources/previews/028/172/295/original/y2k-rainbow-with-clouds-purple-sticker-element-with-chrome-effect-png.png',
        'https://static.vecteezy.com/system/resources/previews/028/142/435/original/y2k-star-purple-sticker-element-with-chrome-effect-png.png',
        'https://static.vecteezy.com/system/resources/previews/027/310/112/original/star-y2k-blue-element-sticker-with-chrome-effect-png.png',
        'https://static.vecteezy.com/system/resources/previews/036/473/169/original/y2k-holographic-globe-sticker-png.png',
        'https://static.vecteezy.com/system/resources/previews/036/902/588/original/y2k-holographic-eyes-sticker-png.png',
        'https://static.vecteezy.com/system/resources/thumbnails/035/174/735/small/cherries-y2k-3d-rendering-cute-clear-glass-png.png',
        'https://image.spreadshirtmedia.com/image-server/v1/designs/1038026015,width=178,height=178.png',
        'https://bangonthedoor.com/uploads/image/5a8eecae4aeaf.png',
        'https://bangonthedoor.com/uploads/image/5a8fedc122be8.png',
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }
  
  function handleImageInteraction(event) {
    const imageUrl = getRandomImageURL();

    const img = new Image();
    img.src = imageUrl;
    img.style.position = 'absolute';

    const imageSize = 150;

    img.style.width = `${imageSize}px`;
    img.style.height = 'auto';

    let posX, posY;

    if (event.type === 'click' || event.type === 'mousedown') {
        // For click events (mouse)
        posX = (event.pageX / window.innerWidth) * 100 + '%';
        posY = (event.pageY / window.innerHeight) * 100 + '%';
    } else if (event.type === 'touchstart' || event.type === 'touchmove') {
        // For touch events (mobile)
        posX = (event.touches[0].pageX / window.innerWidth) * 100 + '%';
        posY = (event.touches[0].pageY / window.innerHeight) * 100 + '%';
    }

    img.style.left = posX;
    img.style.top = posY;
    img.style.transform = 'translate(-50%, -50%)';

    document.body.appendChild(img);
}

document.body.addEventListener('click', handleImageInteraction);
document.body.addEventListener('touchstart', handleImageInteraction);
document.body.addEventListener('touchmove', handleImageInteraction);
