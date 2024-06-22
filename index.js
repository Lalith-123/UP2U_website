$(document).ready(function(){
    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true, // Enable arrow navigation
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
  });

  const galleryImages = {
    Movies: [
      'assets/Movies/DEVd.jpg',
      'assets/Movies/CEfMkIV2Jfg-HD.jpg',
      'assets/Movies/GHOST H.jpg',
      'assets/Movies/HARSHA.jpg'
  ],
    wedding: [
        'assets/WEDDING/6EA17232-0DAD-4094-91E9-2E0177320F17.jpg',
        'assets/WEDDING/C2764 - frame at 0m1s.jpg',
        'assets/WEDDING/C2858 - frame at 0m3s.jpg',
        'assets/WEDDING/C2867 - frame at 0m2s.jpg',
        'assets/WEDDING/C3147 - frame at 0m0s.jpg',
        'assets/WEDDING/Cinematic seemantham yt - frame at 0m36s.jpg',
        'assets/WEDDING/Cinematic seemantham yt - frame at 1m21s.jpg',
        'assets/WEDDING/GV.png',
        'assets/WEDDING/KT1.jpg',
        'assets/WEDDING/KT2.jpg',
        'assets/WEDDING/KT3.jpg',
        'assets/WEDDING/KT4.jpg',
        'assets/WEDDING/KT5.jpg',
        'assets/WEDDING/KT6.jpg',
        'assets/WEDDING/STC04704.jpg'
    ],
    ads: [
        'assets/Ads/Kritunga anime.jpg',
        'assets/Ads/C0209.jpg',
        'assets/Ads/C0238.jpg',
        'assets/Ads/C0239.jpg',
        'assets/Ads/C0259.jpg',
        'assets/Ads/C0332.jpg',
        'assets/Ads/C0337.jpg',
        'assets/Ads/C0365.jpg',
        'assets/Ads/C0369.jpg',
        'assets/Ads/C0413.jpg'
    ],
    photoshoots: [
        'assets/port-1.jpg',
        'assets/port-2.jpg',
        'assets/port-3.jpg',
        'assets/port-4.jpg',
        'assets/port-5.jpg',
        'assets/port-6.jpg',
        'assets/port-7.jpg'
    ],
    gym: [
        'assets/Gym/RB28.jpg',
        'assets/Gym/RB4.jpg',
        'assets/Gym/RB5.jpg',
        'assets/Gym/RB21.jpg',
        'assets/Gym/RB22.jpg',
        'assets/Gym/RB23.jpg',
        'assets/Gym/RB24.jpg',
        'assets/Gym/RB28.jpg',
        'assets/Gym/RB30-transformed.jpeg',
        'assets/Gym/_DSC2213.jpg',
        'assets/Gym/_DSC2215.jpg',
        'assets/Gym/_DSC2217.jpg',
        'assets/Gym/_DSC2320.jpg',
        'assets/Gym/_DSC2329.jpg'
    ],
    Events: [
      'assets/Events/dfa.jpg',
      'assets/Events/dffd.jpg',
      'assets/Events/dffdb.jpg',
      'assets/Events/dfrasef.jpg',
      'assets/Events/dfvds.jpg',
      'assets/Events/HOLI UP2Ufd.jpg',
      'assets/Events/HOLI UP2U.jpg',
      'assets/Events/Screenshot_20240621_192405.png',
      'assets/Events/Screenshot_20240621_192432.png',
      'assets/Events/Screenshot_20240621_192616.png'
    ]
};
document.querySelectorAll('.Card').forEach(card => {
  card.addEventListener('click', () => {
      const galleryType = card.getAttribute('data-gallery');
      const images = galleryImages[galleryType] || [];
      const galleryContainer = document.getElementById('gallery');
      galleryContainer.innerHTML = '';

      images.forEach((src, index) => {
          const imgDiv = document.createElement('div');
          imgDiv.className = 'image-container' + (index % 3 === 2 ? ' tall' : '');
          const img = document.createElement('img');
          img.src = src;
          imgDiv.appendChild(img);
          galleryContainer.appendChild(imgDiv);
      });

      document.getElementById('messageBox').style.display = 'block';
  });
});

document.getElementById('closeButton').addEventListener('click', () => {
  document.getElementById('messageBox').style.display = 'none';
});