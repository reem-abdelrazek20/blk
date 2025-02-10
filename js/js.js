   
    const menuButton = document.getElementById('menu-Button');
    const Menu = document.getElementById('Menu');
    const  Getstart= document.getElementById('Getstart');
    const startmenu= document.getElementById('startMenu');
    const  Features= document.getElementById('Features');
    const Featuresmenu= document.getElementById('FeaturesMenu');
    menuButton.addEventListener('click', () => {
      Menu.classList.toggle('hidden');
    });
    Getstart.addEventListener('click', () => {
        startmenu.classList.toggle('hidden');
        Featuresmenu.classList.add('hidden');
      });
      Features.addEventListener('click', () => {
        Featuresmenu.classList.toggle('hidden');
      });