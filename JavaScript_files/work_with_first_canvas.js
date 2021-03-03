document.addEventListener("DOMContentLoaded", ()=>{

    let f_canvas = document.querySelector("#first");
    let f_ctx = f_canvas.getContext("2d");


    let img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = "Resources/sample.jpg";

    img.onload = ()=>{
        f_ctx.drawImage(img, 0, 0, getComputedStyle(f_canvas).width.substr(0,5), getComputedStyle(f_canvas).height.substr(0,5));
        let data_of_image = f_ctx.getImageData(0, 0, f_canvas.width, f_canvas.height);
        
        let convert_image = document.querySelector("#convert_image");
    
        convert_image.addEventListener("click", ()=>{

            for(let i = 0; i < data_of_image.data.length; i+=4){
                data_of_image.data[i] = 255 - data_of_image.data[i];
                data_of_image.data[i+1] = 255 - data_of_image.data[i+1];
                data_of_image.data[i+2] = 255 - data_of_image.data[i+2];
                data_of_image.data[i+3] = 255;
            }
    
            f_ctx.putImageData(data_of_image, 0, 0);
        });

    }

    let s_canvas = document.querySelector("#second");
    let s_ctx = s_canvas.getContext("2d");

    let s_img = new Image();
    s_img.crossOrigin = "Anonimus";
    s_img.src = "Resources/img_for_canvas.jpg";

    s_img.onload = ()=>{
        s_ctx.drawImage(s_img, 0, 0, getComputedStyle(s_canvas).width.substr(0,5), getComputedStyle(s_canvas).height.substr(0,5));
        let s_data_of_image = s_ctx.getImageData(0, 0, s_canvas.width, s_canvas.height);
        
        let make_grey_color = document.querySelector("#make_grey_color");
        let red, green, blue, grey = 0;

        make_grey_color.addEventListener("click", ()=>{

            for(let i = 0; i < s_data_of_image.data.length; i+=4){
                red = s_data_of_image.data[i];
                green = s_data_of_image.data[i+1];
                blue = s_data_of_image.data[i+2];
                grey = 0.3 * red + 0.59 * green + 0.11 * blue;

                s_data_of_image.data[i] = grey;
                s_data_of_image.data[i+1] = grey;
                s_data_of_image.data[i+2] = grey;
            }

            s_ctx.putImageData(s_data_of_image, 0, 0);

        });
    }

});