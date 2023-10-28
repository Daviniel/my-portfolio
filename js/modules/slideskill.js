export default function initSlideSkill() {
    let count = 1;
    document.getElementById("radio1").setAttribute.checked = true;
    setInterval(function () {
        nextImage()
    }, 4000)
    function nextImage(){
        count++;
        if(count > 6 ) {
            count = 1;
        }

        document.getElementById("radio"+count).checked = true;
    } 
}