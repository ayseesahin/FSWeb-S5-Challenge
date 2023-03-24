// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//
const Header = (baslik, tarih, yazi) => {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const spanDate = document.createElement("span");
  spanDate.classList.add("date");
  spanDate.textContent = tarih;
  const baslikH1 = document.createElement("h1");
  baslikH1.textContent = baslik;
  const spanTemp = document.createElement("span");
  spanTemp.classList.add("temp");
  spanTemp.textContent = yazi;
  headerDiv.append(spanDate, baslikH1, spanTemp);

  return headerDiv;
};

// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

const headerEkleyici = (secici) => {
  const headerSelector = document.querySelector(secici);
  const header = Header("Hava Durumu", "24 Mart 2023", "Havalar nasıl?");
  headerSelector.appendChild(header);
};

export { Header, headerEkleyici };
