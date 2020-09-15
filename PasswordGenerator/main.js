(function(){
    let res = "";
    let charLength = document.getElementById("charLength");
    let createBtn = document.getElementById("createPassword");
    let charLengthCount = document.getElementById("charLengthCount");

    document.getElementById("result").onclick = () =>{
        const copied = document.getElementById("copiedText");



        const el = document.createElement('textarea');
        el.value = document.getElementById("result").textContent;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        copied.style.display = "block";
        let timer = setTimeout(() =>{
            copied.style.display = "none";
            clearTimeout(timer);
        } , 1000)
    }

    createBtn.onclick = () =>{
        res = "";
        let letters = "abcdefghijklmnopqrstuvwxyz1234567890";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(let i = 0; i <= charLength.value/2;i++){
           res+=letters[Math.floor(Math.random() * letters.length)] + upperCase[Math.floor(Math.random() * upperCase.length)];
        }
        document.getElementById("result").innerHTML = res;
    }

    document.onload = () =>{
        charLengthCount.innerHTML = 8;
        charLength.value = 8;
    }

    charLength.onchange = () =>{
        charLengthCount.innerHTML = charLength.value;
    }
})();