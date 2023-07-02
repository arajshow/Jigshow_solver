document.querySelector('#dark-mode-toggle').addEventListener('click', () => {  
    document.body.classList.toggle('dark'); 
    // toggle {hia to remove} && {nhi hai to add}

    const isDarkMode = document.body.classList.contains('dark');  
    localStorage.setItem('darkmode', isDarkMode);

    // change mobile status bar color {if(isDarkMode==true) set theme-color ==dark mode wala color else #fff}
    document.querySelector('meta[name="theme-color"').setAttribute('content', isDarkMode ? '#1a1a2e' : '#fff');
    // here '#1a1a2e' is the var(--bg-body) at dark mode
});

// localStorage.setItem('game', false);
const getGameInfo = () => JSON.parse(localStorage.getItem('game'));

const name_input = document.querySelector('#input-name');
const start_screen = document.querySelector('#start-screen');

// start -game button is pressed
document.querySelector('#btn-play').addEventListener("click", () => {

    if(name_input.value.trim().length>0){
        alert("virus attack , call anand!");
    }else{
        name_input.classList.add('input-error');
    
        setTimeout(() =>{
            name_input.classList.remove('input-error');
        }, 500)
    }
})

const init = () => {
    // json phaser ke hai aur ye init kaise kaam ker rha
    const darkmode = JSON.parse(localStorage.getItem('darkmode'));
    document.body.classList.add(darkmode ? 'dark' : 'light');
    document.querySelector('meta[name="theme-color"').setAttribute('content', darkmode ? '#1a1a2e' : '#fff');
    // here '#1a1a2e' is the var(--bg-body) at dark mode

    const game = getGameInfo();

    document.querySelector("#btn-continue").style.display = game ? 'grid' : 'none';

    // const gameLevel = document.getElementById("btn-level").textContent;
    // localStorage.setItem('game' , gameLevel);


}

init();