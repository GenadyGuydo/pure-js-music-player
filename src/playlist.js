const container = document.querySelector(".play-list_container");
const tamplateNode = document.getElementById("list-template");

songs.forEach((song) => {
  const tamplate = document.importNode(tamplateNode.content, true);
  const nameSong = tamplate.querySelector(".playlist__song-name");
  nameSong.innerHTML = song.name;
  container.append(nameSong);
  console.log(container);
});

