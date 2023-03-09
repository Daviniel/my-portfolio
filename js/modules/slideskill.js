export default function initSlideSkill() {
    let count = 1;
    document.getElementById("radio1").checked = true;

    setInterval( function(){
        nextImage
    }, 2000)
    function nextImage(){
        count++;
        if(count>3){
            count=1;
        }

        document.getElementById("radio1"+count).checked = true;
    }
} 