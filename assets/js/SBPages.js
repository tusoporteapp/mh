if(navigator.share) {
    let buttonShare = document.getElementById("button-share");

    buttonShare.addEventListener("click", (e) => {
      e.preventDefault();
      const URL = this.href;

      navigator.share({
        title: "Comparte esta pagina donde quieras",
        text: "Hola como estas, hey mira estos planes que ofrece Miguel Heredia de Landing Pages",
        url:
            window.location.href
      })
      .then(() => console.log("Se compartio con éxito"))
      .catch((err) => console.log(`Hubo un error: ${err}`));

      return false;
    });
}

else {
    alert("Tu navegador no es compatible");
}