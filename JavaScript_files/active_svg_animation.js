document.addEventListener("DOMContentLoaded",()=>{
    
    let move_circle = document.querySelector("#move_circle");
    move_circle.addEventListener("click", ()=>{  
        document.querySelector("#f_anim").beginElement();
    });

    let move_group_circle = document.querySelector("#move_group_circle");
    move_group_circle.addEventListener("click", ()=>{
        document.querySelector("#s_anim").beginElement();
    });

    let move_on_inv_track = document.querySelector("#move_on_invisible_track");
    move_on_inv_track.addEventListener("click", ()=>{
        document.querySelector("#main_anim").beginElement();
    });

});