// document.querySelector("plus").addEventListener('click', () => {
//     let schet = prompt("Nechta zakaz qilmoqchisiz?");


//     if (schet === null || schet.trim() === "" || isNaN(schet)) return;

//     schet = parseInt(schet);
//     let summa = 45000;
//     let obshiy = schet * summa;

  
//     let pod = `${schet} ta Oyiqjo’q jami narxi ${obshiy.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`;
//     let podd = confirm(pod);

//     if (podd) {
//       alert("Zakaz qabul qilindi");
//     }
//   });
document.querySelectorAll(".plus").forEach(button => {
  button.addEventListener('click', (event) => {
    const card = event.target.closest(".card"); 
    const imya = card.querySelector(".name").textContent.trim(); 

    let price = 0;

    switch (imya) {
      case "Флэйвер сет":
        price = 41000;
        break;
      case "Снэк сет":
        price = 19000;
        break;
      case "Классик сет":
        price = 29000;
        break;
      default:
        alert("Товар не найден");
        return;
    }

    let kolvo = prompt("Nechta zakaz qilmoqchisiz?");

    if (kolvo === null || kolvo.trim() === "" || isNaN(kolvo)) return;

    kolvo = parseInt(kolvo); // тут правильно
    let obsh = kolvo * price; // тут правильно

    let soo = `${kolvo} ta ${imya} jami narxi ${obsh.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`;
    let conf = confirm(soo);

    if (conf) {
      alert("Zakaz qabul qilindi");
    }
  });
});












document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";
document.body.style.background = "white";
document.body.style.color = "black";
document.body.style.listStyle = "none"


const header = document.querySelector("header");
header.style.background = "#ffffff";
header.style.padding = "20px 0";
header.style.borderBottom = "1px solid #ddd";

const headerInner = document.querySelector(".header");
headerInner.style.display = "flex";
headerInner.style.justifyContent = "space-between";
headerInner.style.alignItems = "center";

const logo = document.querySelector(".logo");
logo.style.fontSize = "28px";
logo.style.fontWeight = "bold";
logo.style.color = "#ff0033";

const menu = document.querySelector(".menu");
menu.style.display = "flex";
menu.style.gap = "30px";

document.querySelectorAll(".menu a").forEach(link => {
  link.style.textDecoration = "none";
  link.style.color = "#333";
  link.style.fontSize = "18px";
});

const div = document.querySelector(".imgg").parentElement;
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.height = "100%"


// const bsnner = document.querySelector(".banner");
// banner.style.display = "flex"
// banner.style.justifyContent = "center";




const cards = document.querySelector(".cards");
cards.style.display = "flex";
cards.style.flexWrap = "wrap";
cards.style.gap = "20px";
cards.style.justifyContent = "center";
cards.style.marginTop = "20px";


document.querySelectorAll(".card").forEach(card => {
  card.style.background = "#fff";
  card.style.padding = "20px";
  card.style.textAlign = "center";
  card.style.borderRadius = "10px";
  card.style.width = "220px";
  card.style.position = "relative";
});

document.querySelectorAll(".card img").forEach(img => {
  img.style.maxWidth = "100%";
  img.style.height = "auto";
});


document.querySelectorAll(".name").forEach(name => {
  name.style.fontWeight = "bold";
  name.style.fontSize = "18px";
  name.style.color = "#000";
  name.style.marginBottom = "5px";
});

document.querySelectorAll(".price").forEach(price => {
  price.style.color = "#ff0066"; 
  price.style.fontSize = "16px";
  price.style.marginBottom = "10px";
});


document.querySelectorAll(".plus").forEach(button => {
  button.style.background = "#ff0066";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.width = "40px";
  button.style.height = "40px";
  button.style.borderRadius = "50%";
  button.style.fontSize = "24px";
  button.style.cursor = "pointer";
  button.style.position = "absolute";
  button.style.bottom = "10px";
  button.style.right = "10px";
});


const footer = document.querySelector("footer");
footer.style.background = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "20px 0";
footer.style.borderTop = "1px solid #ddd";
footer.style.marginTop = "40px";

const footerr = document.querySelector(".footer");
footerr.style.display = "flex";
footerr.style.justifyContent = "space-between";
footerr.style.alignItems = "center";
footerr.style.padding = "0 20px";

const logoFooter = document.querySelector(".logo-footer");
logoFooter.style.marginTop = "10px";
logoFooter.style.fontSize = "24px";
logoFooter.style.color = "#ff0033";
