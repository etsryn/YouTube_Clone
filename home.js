function showMenu(){
    document.querySelector('#createBox').style.opacity='1';
    document.querySelector('#createBox').style.transition='0.3s';
}

function hideMenu(){
    document.querySelector('#createBox').style.opacity='0';
    document.querySelector('#createBox').style.transition='0.3s';
}
function onHover1(){
    document.querySelector('.a1').style.backgroundColor='#dbdbdb';
}
function offHover1(){
    document.querySelector('.a1').style.backgroundColor='#fff';
}
function onHover2(){
    document.querySelector('.a2').style.backgroundColor='#dbdbdb';
}
function offHover2(){
    document.querySelector('.a2').style.backgroundColor='#fff';
}
function showMenuP2(){
    document.querySelector('#ShowMoreP2').style.opacity='1';
    document.querySelector('#smNme').style.opacity='0';
    document.querySelector('#u1').style.zIndex='0';
    document.querySelector('#u2').style.zIndex='0';
    document.querySelector('#u3').style.zIndex='0';
    document.querySelector('#u4').style.zIndex='0';
    document.querySelector('#ShowMoreP2').style.transition='0.3s';
}

function hideMenuP2(){
    document.querySelector('#ShowMoreP2').style.opacity='0';
    document.querySelector('#smNme').style.opacity='1';
    document.querySelector('#u1').style.zIndex='1';
    document.querySelector('#u2').style.zIndex='1';
    document.querySelector('#u3').style.zIndex='1';
    document.querySelector('#u4').style.zIndex='1';
    document.querySelector('#ShowMoreP2').style.transition='0.3s';
}
function showHelp(){
    document.querySelector('#help').style.visibility='visible';
    document.querySelector('#help').style.transition='0.3s';
}

function hideHelp(){
    document.querySelector('#help').style.visibility='hidden';
    document.querySelector('#help').style.transition='0.3s';
}