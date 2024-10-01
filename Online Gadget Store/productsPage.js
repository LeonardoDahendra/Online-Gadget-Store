const buttons = document.querySelectorAll('.button');
const products = document.querySelectorAll('.product');
const scrollTargets = document.querySelectorAll('.scrollTarget');
let len = buttons.length;
const scrollMarginTop = 120;

for (let i = 0; i < len; i++){
    buttons[i].addEventListener('click', ()=>{
        const targetElement = scrollTargets[i];
        targetElement.style.scrollMarginTop = `${scrollMarginTop}px`;
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetElement.style.scrollMarginTop = '';
    })
}

len = products.length;
const imageUrls = ["mouses/mouse2.png", "mouses/mouse3.png", "mouses/mouse4.png", "mouses/mouse5.png", "mouses/mouse6.png", "mouses/mouse7.png",
                  "keyboards/keyboard2.png", "keyboards/keyboard3.png", "keyboards/keyboard4.png",
                  "headsets/headset1.png", "headsets/headset2.png", "headsets/headset3.png", "headsets/headset4.png",
                  "webcams/webcam1.png", "webcams/webcam2.png"];
const titles = ["Redragon Mouse", "Free Wolf Mouse", "Gaming Mouse", "Office Mouse", "Mad Catz Mouse",
                "Mouse Mouse", "Gaming Keyboard", "Steelseries Keyboard", "Corsair Keyboard", "EASARS Headset",
                "VersionTECH Headset", "ZIHNIC Headset", "Komik Headset", "Jete Webcam", "Mixio Webcam"];
const types = ["Mouse", "Mouse", "Mouse", "Mouse", "Mouse",
              "Mouse", "Keyboard", "Keyboard", "Keyboard", "Headset",
              "Headset", "Headset", "Headset", "Webcam", "Webcam"];
const descs = ["Colorful RGB mouse that make you feel like a dragon when you're using it, hence the name",
              "Cool mouse with green light, might randomly howl like a wolf when left alone",
              "Cool gaming mouse that you can use to do all your clicking, very smooth and cool",
              "The very definition of normal, still pretty cool though, cheap and efficient without any unnecessary light distraction",
              "Second Coolest looking mouse you can find, created by a cat that went mad, might cause the user to go into the realm of madness",
              "The coolest looking mouse you can find, add a glasses and there won't be any other mouse that could compete with it, might randomly bite when being used",
              "Cool red gaming keyboard, cool looking and decently affordable, perfect for those who are low on cash but still want to be part of the cool gang",
              "A keyboard made out of steel, extremely heavy, but the colorful RGB light will make transporting this 10 kg keyboard worth it",
              "Made by a pirate who discover keyboard and instantly fell in love with it, might cause a pirate to knock on your front door",
              "A cool headset made for the manliest of man, or the girliest of girl, instantly make you the coolest person in the room",
              "A headset to wear for true gamer, wearing this will let people know that you are a true gamer anywhere you go, assuming you wear it everywhere you went",
              "This headset might look basic, but it actually contain a secret power that cause its user to increase their IQ by 10%, worth it unless you have less than 0 IQ, then the effect will be a burden",
              "A cool headset with a microphone so long we can't fit it in the picture, perfect for people who like to scream, so they won't blow our eardrums out",
              "A cool webcam that allows people to see you in 64k quality, it's so high quality that people can see the cells in your body through this webcam",
              "A webcam that looks like one of those flying drones in Kenshi, doubt you know what I mean though"];
const prices = ["699", "89", "129", "79", "1.599", "69", "869", "2.599", 
                "1.839", "1.769", "899", "1.199", "299", "359", "149"];

for (let i = 0; i < len; i++){
    products[i].addEventListener('click', ()=>{
      createPageWithImage(imageUrls[i], titles[i], types[i], descs[i], prices[i]);
    })
}

function createPageWithImage(imageUrl, title, type, desc, price) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var template = xhr.responseText;
        var pageContent = template
          .replace(/{title}/g, title)
          .replace(/{type}/g, type)
          .replace(/{imageUrl}/g, "asset/products/" + imageUrl)
          .replace(/{desc}/g, desc)
          .replace(/{price}/g, `Rp ${price}.000,00`);
        document.open();
        document.write(pageContent);
        document.close();

        window.scrollTo(0, 0);
      }
    };
    xhr.open('GET', 'viewProductPageTemplate.html', true);
    xhr.send();
}
  
  