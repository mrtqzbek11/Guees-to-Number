/**
 * 
 * FROM MERT ÖZBEK :)
 * 
 */
 
let [hak,guessNumber] = [
    10,
    Math.floor(Math.random() * 100),
];


const guess = () => {

    if(hak > 0) {

        let tpp = document.getElementById('tpp').value;

        if(tpp > guessNumber) {
            
            swal({
                title: "Küçük Sayı Girin",
                text: (`Kalan Hakkınız: ${hak}`),
                icon: "warning"
            })
        }

        else if(tpp < guessNumber) {
            swal({
                title: "Büyük Sayı Giriniz",
                text: (`Kalan Hakkınız: ${hak}`),
                icon: "warning"
            })
        }
        else if(tpp == guessNumber) {
            swal({
                title:"Tebrikler Bildiniz",
                text: (`Tahmin Edilen Sayı: ${guessNumber}`),
                icon: "success"
            })
        }


    } else {
        swal({
            title: "Mağlesef Bilemediniz Hakkınız Bitti",
            text: `Tahmin Edilen Sayı: ${guessNumber}`,
            icon: "error"
        })
    }
       hak = hak-1;
}