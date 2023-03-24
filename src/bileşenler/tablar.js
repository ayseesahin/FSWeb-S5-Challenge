import axios from "axios";

// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>
//

const Tablar = (konu) => {
  //let secilen = "";
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");
  konu.forEach((item) => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = item;
    topicsDiv.appendChild(tab);
    // tab.addEventListener("click", (e) => {
    //   console.log(secilen);
    //   return (secilen = e.target.textContent);
    // });
  });

  return topicsDiv;
};

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

const tabEkleyici = (secici) => {
  axios
    .get("http://localhost:5001/api/konular")
    .then((response) => {
      const parent = document.querySelector(secici);
      const tabs = Tablar(response.data.konular);
      parent.appendChild(tabs);
    })
    .catch((error) => {
      console.log("başarısız", error);
    });
};

export { Tablar, tabEkleyici };
