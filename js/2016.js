$(document).ready(function() {
console.log('here');
   
    // fade out the preloader and fade in the main wrapper
    function nav(navtype) {
        // make the appropriate navbar visible 
        $('#' + navtype).css({
            'animation': 'fadein .4s .4s, zoomin .4s .4s',
            'animation-fill-mode': 'forwards'
        });
        if (navtype == 'nav_head') {
            $('#blur_overlay').css({
                'backdrop-filter': 'blur(8px)'
            });
            $('#logo_holder_mob').css({'display':'none'});
        } else {
            $('#blur_overlay').css({
                'opacity': '0'
            });
            $('#logo_holder_mob').css({
                'animation': 'fadein .4s .4s,zoomin .4s .4s',
                'animation-fill-mode': 'forwards',
            })
            $('#'+navtype).css({'opacity':'1'});
        }}	

 

  		window.navtype = det_navtype()
  		console.log(window.navtype)
        $('#' + window.navtype).css({
            'display': 'block'
        });
        nav(window.navtype);

    // determine which navtype to show as per the display size
    function det_navtype() {
        window.navtype = 'nav_head';
        if ($(window).width() > 801) {
            window.navtype = 'nav_head';
        } else {
            window.navtype = 'outerdiv_mobile';
        }
        return window.navtype;
    }
    //check the toggle on change action
    $('#toggle').change(function() {
        console.log($(this).prop("checked"));
    });

    //toggle button click listener(for the mob navbar)
    $("#toggle").click(function(e) {
        // $(this).prop('checked',$(this).prop('checked'));
        console.log($(this).prop('checked'))
        e.stopPropagation();
    });

    //close the mob navbar on clicking anywhere on the screen
    $('#main_wrapper').click(function() {
        if ($('#toggle').prop('checked')) {
            $('#toggle').prop('checked', false);
            console.log('click registered');
        };
    });
    $('.nav-item').click(function(){
        $('#toggle').prop('checked', false);
    });

    function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter--) {
        // Pick a random index
        index = (Math.random() * counter) | 0;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
$(".cont").fadeIn(1000);
setTimeout(function(){
    $(".cont").fadeOut(1000);
    setTimeout(function(){
        var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
        var i=0;
        var randoms = shuffle(arr);
        console.log(randoms);
        randoms.length = 12; // get 4 random elements   
        var set= function(){
        setInterval(function(){ 
            if(i<=11)
            {
            $("."+randoms[i]).fadeIn(600);
            i++;
            }}, 800);
        }
        $(".lightbox").css("display","block");
        set();
        });
    },1200);
},1200)


