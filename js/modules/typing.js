export default function initTyping() {
    let letter = 0;
    const text = '     Daviniel Nascimento';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".main__sentence").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}