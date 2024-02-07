function toggleMode () {
    const html = document.documentElement

   // if(html.classList.contains('light')) {
   //     html.classList.remove('light')
   // } else {
   //     html.classList.add('light')
   // }
    html.classList.toggle('light')

    //pegar a tag img e substituir a imagem
    const img = document.querySelector('#profile img') 
        //no lightmode adiionar a imagem light
        if (html.classList.contains('light')) {
 
            img.setAttribute('src', './assets/avatar-light.png');
            img.setAttribute('alt', "Foto de perfil com óculos")
        } else {
            img.setAttribute ('src', './assets/avatar.png');
            img.setAttribute ("alt", 'Foto de perfil sem óculos')
        }

}







