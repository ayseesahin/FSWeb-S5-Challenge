// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//
import axios from "axios";

const Card = (makale) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.addEventListener("click", function () {
    console.log(makale.anabaslik);
  });

  const headDiv = document.createElement("div");
  headDiv.classList.add("headline");
  headDiv.textContent = makale.anabaslik;
  cardDiv.appendChild(headDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");
  authorDiv.appendChild(imgDiv);

  const authorImg = document.createElement("img");
  authorImg.src = makale.yazarFoto;
  imgDiv.appendChild(authorImg);

  const spanAuthor = document.createElement("span");
  spanAuthor.textContent = makale.yazarAdi;
  authorDiv.appendChild(spanAuthor);

  return cardDiv;
};

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

const cardEkleyici = (secici) => {
  // axios
  //   .get("http://localhost:5001/api/makaleler")
  //   .then((response) => {
  //     const parent = document.querySelector(secici);
  //     const cards = Card(response.data.makaleler);
  //     parent.appendChild(cards);
  //   })
  //   .catch((error) => {
  //     console.log("başarısız", error);
  //   });

  // axios.get(`http://localhost:5001/api/makaleler`).then((response) => {
  //   const makaleler = response.data.makaleler;
  //   const elem = document.querySelector(secici);
  //   makaleler.boostrap.forEach((item) => {
  //     const card = Card(item);
  //     elem.appendChild(card);

  // //    for (let i = 0; i < makaleler.length; i++) {
  // //     makaleler[i].forEach((item) => {
  // //       const card = Card(item);
  // //       elem.appendChild(card);
  // //     })
  // //   }
  //   });
  // });

  axios
    .get("http://localhost:5001/api/makaleler")
    .then(function (response) {
      console.log(response.data.makaleler);
      for (let i in response.data.makaleler) {
        response.data.makaleler[i].map((article) => {
          document.querySelector(secici).appendChild(Card(article));
        });
      }
    })
    .catch((error) => {
      console.log("başarısız", error);
    });
};

export { Card, cardEkleyici };
