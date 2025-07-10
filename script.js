const baslik = document.getElementById("baslik");
const mesaj = document.getElementById("mesaj");
const buton = document.getElementById("ileriBtn");

const adimlar = [
  "Bekleniyor...",
  "İzin veriliyor...",
  "Sonraki sayfa hazırlanıyor...",
  "Lütfen sabırlı ol.",
  "Yönlendiriliyorsunuz...",
  "Hâlâ buradasınız mı?",
  "Son bir adım kaldı...",
  "Gerçekten merak ettin ha?",
  "Şaka bir yana...",
  "Bu siteye harcadığın süre: yaklaşık 1 dakika.",
  "💡 Vaktini böyle şeylere harcama. Değerli zamanını koru."
];

let adim = 0;

buton.addEventListener("click", () => {
  if (adim < adimlar.length) {
    baslik.textContent = adim === adimlar.length - 1 ? "Dersini aldın mı?" : "Bekle...";
    mesaj.textContent = adimlar[adim];
    buton.textContent = adim === adimlar.length - 1 ? "Yine de tıkla 😂" : "Devam et";
    adim++;
  } else {
    mesaj.textContent = "Şaka bitti. Git güzel bir şey yap şimdi :)";
    buton.style.display = "none";
  }
});
