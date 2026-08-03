(() => {
  const shuffled = (items) => {
    const result = [...items];

    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }

    return result;
  };

  // Keep personally chosen/named buttons separate so the collection stays easy to edit.
  const featuredButtonFiles = [
    "123clipartbtn.gif",
    "24hc.gif",
    "2cows.gif",
    "2hu.gif",
    "3a2.gif",
    "69freeware.gif",
    "800x600.gif",
    "88_31_02.gif",
    "88x31-freegraphicscom-pastel.gif",
    "98plusani.gif",
    "a51_2800.gif",
    "acrobat.gif",
    "ada.gif",
    "ANIhuntBanner.gif",
    "apple.gif",
    "asd.gif",
    "browser_logo_webtv.gif",
    "buttonmania.gif",
    "c64ik.gif",
    "capybaraNOW.png",
    "classicgaming.gif",
    "clip8.gif",
    "cowbrow.gif",
    "diagnosedwithGAY.gif",
    "Ebay.gif",
    "ehbutton5.gif",
    "emulate.gif",
    "gameboy_advance_net.gif",
    "guestbook.gif",
    "hot_cafe_download.gif",
    "hotmail.gif",
    "icon6.gif",
    "ilikecomputer.png",
    "internet-explorer-evil.gif",
    "internet-roadkill.gif",
    "kriswheretfarewe.png",
    "leave.gif",
    "lem88x31.gif",
    "lonely-image.gif",
    "macos_mov.gif",
    "minecraft.gif",
    "mp3-com.gif",
    "nescenter.gif",
    "nokia64.gif",
    "notepad2.gif",
    "nvidia.gif",
    "psbutton.gif",
    "quikpurchase.gif",
    "sega.gif",
    "th_snd1.gif",
    "theblueberryhill_linkme001.gif",
    "toebeansNOW.gif",
    "wii.png",
    "winrar.gif",
    "wmp.gif",
  ];

  // Keep the remaining archive in natural numeric order in source for maintenance.
  const archiveButtonFiles = [
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
    "104.gif",
  ];

  // 9–13 and 15 are intentionally represented by their descriptive copies above.
  const buttonFiles = shuffled([...featuredButtonFiles, ...archiveButtonFiles]);

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

  const stampFiles = shuffled([
    "y2k-tumblr.gif",
    "neko-atsume.gif",
    "twin-dance.gif",
    "silly.jpg",
    "ceiling-cat.gif",
    "dancing-kitty-cat.gif",
    "y2k-inline-pe6lwn.gif",
    "y2k-pbbaqr.gif",
    "pastel-19.png",
    "y2k-inline-p1crmc.gif",
    "y2k-oto1nb.gif",
    "art-of-not-liking-you.gif",
    "rgd9okc.jpg",
    "lpytvn.png",
    "never-understood-the-hate.png",
    "db13uc6.png",
    "dbssspy.png",
    "weekender-girl-remix.gif",
    "28603857.gif",
    "seweraat-15.png",
    "y2k-pbbaqr-8.jpg",
    "y2k-omejxd.png",
    "y2k-p4od43.png",
  ]);

  document.querySelectorAll("[data-stamp-group]").forEach((group) => {
    const fragment = document.createDocumentFragment();

    stampFiles.forEach((file) => {
      const image = document.createElement("img");
      image.src = `assets/web-stamps/${file}`;
      image.alt = "";
      image.height = 55;
      image.decoding = "async";
      fragment.append(image);
    });

    group.append(fragment);
  });

  // Start after the populated tracks have received their first layout. This avoids
  // browsers deferring the initial animation paint until the pointer moves.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document
        .querySelectorAll(".web-button-marquee__track, .web-stamp-marquee__track")
        .forEach((track) => track.classList.add("is-scrolling"));
    });
  });
})();
