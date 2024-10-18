
//HIKAYE ODEVI

let secenek = prompt("Yuruyus yapacagim, nereye gitsem? 1: Ormana 2: Deniz kenarina");

if (secenek === '1') {
  secenek = prompt("Ormana gitmeyi sectin. Hangi patikayi takip etmek istersin? 1: Genis patika 2: Dar patika");

    if (secenek === '1') {
      dogruCevap = "Dogayla ic ice huzurlu bir gun gecirdin.";
    } else if (secenek === '2') {
    dogruCevap = "Dogayla ic ice huzurlu bir gun gecirdin.";
  }
}


else if (secenek === '2') {
  secenek = prompt("Deniz kenarina gitmeyi sectin. Hangi aktiviteyi yapmayi planliyorsun? 1: Yuzmek 2: Guneslenmek");

    if (secenek === '1') {
      dogruCevap = "Deniz kenarinda eglenceli anilar biriktirdin.";
    } else if (secenek === '2') {
      dogruCevap = "Deniz kenarinda eglenceli anilar biriktirdin.";
    }
  }

console.log(dogruCevap);



