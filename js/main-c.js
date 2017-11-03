

  // Tee funktio 'showImages', joka
  // lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

  // tee silmukka joka tekee jokaisesta kuvasta alla olevan HTML:n DOM-metodien avulla. Kun alla oleva rakenne on valmis, ne lisätään ul-elementin sisälle
  /*
  <li>
      <figure>
          <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
          <figcaption>
              <h3>Title</h3>
          </figcaption>
      </figure>
  </li>
  */
  // Tee HTML-elementit createElement-metodilla ja
  // lisää attribuutit setAttribute-metodilla tai elementti.attribuutti -syntaksilla.
  // Lisää elementit toistensa sisälle appendChild-metodilla.
  // Lisää ne lopuksi ul elementin sisälle, jolloinka ne tulostuvat HTML-sivulle.
  const showImages = () => {
    fetch('kuvat.json').then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      json.forEach((kuva => {
        const li = document.createElement('li');
        const figure = document.createElement('figure');
        const figcaption = document.createElement('figcaption');
        const h3 = document.createElement('h3');
        const a = document.createElement('a');
        const img = document.createElement('img')

        a.setAttribute('href', 'img/original/' + kuva.mediaUrl);
        h3.innerText = kuva.mediaTitle;
        img.setAttribute('src', 'img/thumbs/' + kuva.mediaThumb);
        li.appendChild(figure);
        figure.appendChild(a);
        figure.appendChild(figcaption);
        a.appendChild(img);
        figcaption.appendChild(h3);

        const ul = document.querySelector('ul');
        ul.appendChild(li);
      }
      ))
    })
  }

  showImages();

