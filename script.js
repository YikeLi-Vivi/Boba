
const filling = document.querySelector(".filling");
const buttons = document.querySelectorAll("button");
let current_element = null;
let tea_base = null;
let milk_base = null;
let sugar_level = null;
let ice = null;

window.onload = function () {
    $('input[type=radio][name=tea]').change(function() {
        if (tea_base){
        $('.filling').removeClass(tea_base);
        }
        tea_base = this.value;
        $('.filling').addClass(tea_base);
    })


    $('input[type=radio][name=milk]').change(function() {

        if (milk_base){
        $('.filling').removeClass(milk_base);
        }
        milk_base = this.value;
        $('.filling').addClass(milk_base);
    })

    $('input[type=radio][name=sugar]').change(function() {

        if (sugar_level){
        $('.filling').removeClass(sugar_level);
        }
        sugar_level = this.value;
        $('.filling').addClass(sugar_level);
    })

    $('input[type=radio][name=tem]').change(function() {

        // alert(this.value);
        if (ice){
        $('.filling').removeClass(ice);
        }
        ice = this.value;

        if (ice == 'warm') {
            $('.steamcontainer').addClass('show')
            $('.filling').addClass(ice);
        } else {
            $('.steamcontainer').removeClass('show')
            $('.filling').addClass(ice);
        }
       
    })

    
    $('input[type="checkbox"]').click(function() {
        if($(this).prop("checked") == true) {
            $('.filling').addClass(this.value);
        }
        else if($(this).prop("checked") == false) {
            $('.filling').removeClass(this.value);
        }
    });



}

const changeType = (selected) => {
    if (current_element) {
      current_element.classList.remove("selected");
      filling.classList.remove(current_element.id);
    }

    current_element = selected;

    // if(selected.id != 'diybutton' && selected.id != 'from_menu'){
    //     document.getElementById('diybutton').style.borderWidth = "2px";
    // }

    $('.filling').attr("class", "filling reset");


    setTimeout(() => {
    filling.classList.add(current_element.id); 
    }, 1000);
  };
  

// const setActiveType = (element) => {
//     element.toggleClass("selected");
// };


[...buttons].forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add('selected');
      changeType(button);
    });
});




function change_to_diy(){
    
    document.getElementById('cup').classList.remove('default');
    document.getElementById('cup').classList.add('diymode');
    document.getElementById('diybutton').classList.add('hidden');
    document.getElementById('from_menu').classList.remove('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('build').classList.remove('hidden');

}

function change_to_menu(){
    document.getElementById('cup').classList.remove('diymode');
    document.getElementById('cup').classList.add('default');
    document.getElementById('diybutton').classList.remove('hidden');
    document.getElementById('from_menu').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('build').classList.add('hidden');
}