window.onload = () => {
  const data = [
    {
      name: 'Mark Zuckerberg',
      jobTitle: 'Canadian venture capitalist and entrepreneur for 20 yeas in Tech',
      infor: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital..',
      imgsrc: 'image/image-1.png',
      imageAlt: 'profile-photo',
    },
    {
      name: 'Jeff Bezos',
      jobTitle: 'Canadian venture capitalist and entrepreneur for 20 yeas in Tech',
      infor: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital..',
      imgsrc: './image/image-2.png',
      imageAlt: 'profile-photo',
    },
    {
      name: 'Elia Musk',
      jobTitle: 'Canadian venture capitalist and entrepreneur for 20 yeas in Tech',
      infor: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital..',
      imgsrc: './image/image-3.png',
      imageAlt: 'profile-photo',
    },
    {
      name: 'Aml Gaballah',
      jobTitle: 'Canadian venture capitalist and entrepreneur for 20 yeas in Tech',
      infor: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital..',
      imgsrc: './image/image-4.png',
      imageAlt: 'profile-photo',
    },
    {
      name: 'Ahd osama',
      jobTitle: 'Canadian venture capitalist and entrepreneur for 20 yeas in Tech',
      infor: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital..',
      imgsrc: './image/image-5.png',
      imageAlt: 'profile-photo',
    },
    {
      name: ' Bell gates',
      jobTitle: 'Canadian venture capitalist and entrepreneur for 20 yeas in Tech',
      infor: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital..',
      imgsrc: './image/image-6.png',
      imageAlt: 'profile-photo',
    },
  ];
  const personCard = document.querySelector('#person-card');
  for (let i = 0; i < data.length; i += 1) {
    const per = data[i];

    personCard.innerHTML += `
  <article  class="person">
      <div class="pres-img">
        <img src="${per.imgsrc}" alt="${per.imageAlt}"" height="100">
      </div>
      <div class="content">
        <h3 class="pres-name">${per.name}</h3>
        <h5 class="job-title">${per.jobTitle}</h5>
        <p class="info">${per.infor}</p>
      </div>
    </article>
`;
  }
};
