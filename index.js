const ACCESS_KEY = "0FNmuTadJOAlYF8_VRD7cqqtiMi7eKw1RZC8hi8fp4U";

const SECRET_KEY = "I2TwyOD5KqbM6r-AxjfEDl-Vbi2FK4x1_kSp9uZIiMk";

const exec = function () {
  const f = fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);

  f.then((resp) => {
    return resp.json();
  })
    .then((r) => {
      console.log(r);

      r.forEach((elem) => {
        const box = document.getElementById("box");
        console.log(elem.urls.regular);
        const img_loc = elem.links.download;
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = img_loc;
        div.appendChild(img);
        box.appendChild(div);
      });
    })
    .catch((e) => {
      console.log("Something error in fetvhing");
    });
};

exec();

// To load random other images on scrolling to the bottom.

const random_images = function () {
  var lower = 0;
  var upper = 100000000;

  for (i = 0; i < 10; i++) {
    const box = document.getElementById("box");
    const img_loc =
      "https://picsum.photos/500/300?random=" +
      (Math.floor(Math.random() * (upper - lower)) + lower);
    console.log(img_loc);
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = img_loc;
    div.appendChild(img);
    box.appendChild(div);
  }
};

const body = document.getElementsByTagName("body")[0];
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    random_images();
  }
};
