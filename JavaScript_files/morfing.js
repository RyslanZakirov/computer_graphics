document.addEventListener("DOMContentLoaded", ()=>{
    
    let button = document.querySelector(".active_first_anim");
    let stop_button = document.querySelector(".stop_first_anim");

    let f_bl = document.querySelector(".f_bl");
    let s_bl = document.querySelector(".s_bl");
    let t_bl = document.querySelector(".t_bl");
    let fr_bl = document.querySelector(".fr_bl");

    button.addEventListener("click", ()=>{
        
        f_bl.classList.toggle("anim_for_f_bl");
        s_bl.classList.toggle("anim_for_s_bl");
        t_bl.classList.toggle("anim_for_t_bl");
        fr_bl.classList.toggle("anim_for_fr_bl");
        button.disabled = true;
        stop_button.disabled = false;

    });

    stop_button.addEventListener("click", ()=>{
        
        f_bl.classList.toggle("anim_for_f_bl");
        s_bl.classList.toggle("anim_for_s_bl");
        t_bl.classList.toggle("anim_for_t_bl");
        fr_bl.classList.toggle("anim_for_fr_bl");
        button.disabled = false;
        stop_button.disabled = true;

    });


    let s_button = document.querySelector(".active_second_anim");
    let s_stop_button = document.querySelector(".stop_second_anim");

    let span = document.querySelectorAll(".second_grid_container span");
    
    s_button.addEventListener("click", ()=>{
        
        for(let i = 0; i < span.length; i++){
            span[i].classList.toggle("blink_animation");
        }
        s_button.disabled = true;
        s_stop_button.disabled = false;

    });

    s_stop_button.addEventListener("click", ()=>{
        
        for(let i = 0; i < span.length; i++){
            span[i].classList.toggle("blink_animation");
        }
        s_button.disabled = false;
        s_stop_button.disabled = true;

    });
})