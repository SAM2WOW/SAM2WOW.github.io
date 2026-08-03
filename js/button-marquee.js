(() => {
  // Put personally chosen/named buttons first so they are easy to find and reorder.
  const featuredButtonFiles = [
    "capybaraNOW.png",
    "guestbook.gif",
    "ilikecomputer.png",
    "internet-explorer-evil.gif",
    "lonely-image.gif",
    "minecraft.gif",
    "mp3-com.gif",
    "nokia64.gif",
    "sega.gif",
    "toebeansNOW.gif",
    "wii.png",
  ];

  // The remaining archive is kept in natural numeric order.
  const archiveButtonFiles = [
    "0.gif",
    "1.webp",
    "2.png",
    "3.png",
    "6.png",
    "7.gif",
    "8.gif",
    "16.gif",
    "17.gif",
    "19.gif",
    "20.gif",
    "21.gif",
    "22.gif",
    "23.gif",
    "25.gif",
    "27.gif",
    "29.gif",
    "30.gif",
    "34.gif",
    "35.gif",
    "36.gif",
    "37.gif",
    "38.png",
    "39.gif",
    "40.gif",
    "43.png",
    "44.gif",
    "45.gif",
    "47.gif",
    "48.gif",
    "49.gif",
    "50.jpg",
    "51.png",
    "52.gif",
    "53.gif",
    "54.gif",
    "56.jpg",
    "58.gif",
    "59.jpg",
    "60.gif",
    "62.gif",
    "63.gif",
    "64.gif",
    "65.gif",
    "66.png",
    "67.gif",
    "68.jpg",
    "69.gif",
    "70.gif",
    "71.gif",
    "72.gif",
    "73.gif",
    "74.gif",
    "75.gif",
    "76.gif",
    "77.gif",
    "78.gif",
    "79.gif",
    "81.gif",
    "82.gif",
    "83.gif",
    "84.gif",
    "85.gif",
    "86.gif",
    "89.gif",
    "90.gif",
  ];

  // 9–13 and 15 are intentionally represented by their descriptive copies above.
  const buttonFiles = [...featuredButtonFiles, ...archiveButtonFiles];

  document.querySelectorAll("[data-button-group]").forEach((group) => {
    const fragment = document.createDocumentFragment();

    buttonFiles.forEach((file) => {
      const image = document.createElement("img");
      image.src = `assets/web-buttons/${file}`;
      image.alt = "";
      image.width = 88;
      image.height = 31;
      image.decoding = "async";
      fragment.append(image);
    });

    group.append(fragment);
  });
})();
