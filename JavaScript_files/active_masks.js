document.addEventListener("DOMContentLoaded", ()=>{
    
    let active_mask_gradient = document.querySelector("#active_mask_gradient");
    let active_mask_form = document.querySelector("#active_mask_form");
    let active_mask_alpha = document.querySelector("#active_mask_alpha");

    active_mask_gradient.addEventListener("click", ()=>{
        document.querySelector(".f_image").classList.toggle("grad_mask");
    });

    active_mask_form.addEventListener("click",()=>{
        document.querySelector(".s_image").classList.toggle("form_mask");
    });

    active_mask_alpha.addEventListener("click", ()=>{
        console.log(document.querySelector(".layer"));
        document.querySelector(".layer").classList.toggle("alpha_mask");
    });

});