var hak ,can;
var tahmin,sayac=0;
var sayi =Math.floor((Math.random()*10)+1)
console.log(sayi)

             can = Number(prompt('Kaç kerede biliceksiniz?'))
       hak=can;
while(hak >0 ){
       
        hak--;
        sayac++;
      tahmin = Number(prompt('bir sayı giriniz'));

      if(sayi==tahmin){
          console.log(`Tebrikler ${sayac} defa bildiniz`);

            console.log(`puan ${100-(100/can)*(sayac-1)}`)

          break;
      }else if(sayi>tahmin){
          console.log('yukarı')
      }else{
          console.log('aşağı')
      }
        if(hak == 0){
            console.log('hakkınız bitti sayı : '+sayi);
        }

}

//:)
