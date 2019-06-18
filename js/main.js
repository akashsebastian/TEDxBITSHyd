$(document).ready(function() {
    var PRELOADER_TRANS_DURATION = 2000
    var DELAY = 100;
    // make the continue button visible

    console.log('here');
    $('#continue_to_main').css({
        'display': 'block'
    });
    $('#continue_to_buy').css({
        'display': 'block'
    });
    $('#content').css('display','none');
    setTimeout(function() {
        $('#continue_to_main').css({
            'animation': 'fadein .4s 1',
            'animation-fill-mode': 'forwards'
        });
        $('#continue_to_buy').css({
            'animation': 'fadein .4s 1',
            'animation-fill-mode': 'forwards'
        });
    }, 300);
    // fade out the preloader and fade in the main wrapper
    function fadeoutPreloader(navtype) {
    	slideshow_init();
    	scrollfix();
        $('#preloader').css({
            'animation': 'fadeout .4s 1, zoomout .4s 1',
            'animation-fill-mode': 'forwards'
        });
        $('#main_wrapper').css({
            'animation': 'fadein .4s .4s,zoomin .4s .4s',
            'animation-fill-mode': 'forwards'
        });
        
        // make the appropriate navbar visible 
        $('#' + navtype).css({
            'animation': 'fadein .4s .4s, zoomin .4s .4s',
            'animation-fill-mode': 'forwards'
        });
        if (navtype == 'nav_head') {
            $('#blur_overlay').css({
                'backdrop-filter': 'blur(10px)'
            });
            $('#logo_holder_mob').css({'display':'none'});
            $('#footer').css({'display':'block'});
        } else {
            $('#blur_overlay').css({
                'opacity': '0'
            });
            $('#logo_holder_mob').css({
                'animation': 'fadein .4s .4s,zoomin .4s .4s',
                'animation-fill-mode': 'forwards'
            });
            $('#buy_mobile').css({'display':'block'});
            setTimeout(function(){
                $('#buy_mobile').css({'opacity':'1', 'z-index':'99999'});
            },500)
        }

        //remove the preloader display after fadeout
        setTimeout(function() {
            $('#preloader').css({
                'display': 'none'
            });
        }, PRELOADER_TRANS_DURATION);
    }

    // continue the main transition tweaks for non-handheld devices
    if ($(window).width() > 801) {
        $('#continue_to_main').hover(function() {
            $('#continue_to_main i').css({
                'opacity': '1',
                'font-size': '1em',
                'margin-right': '7px'
            })
            $(this).css({
                'background': '#8B0000',
                'color': 'black'
            });
        }, function() {
            $('#continue_to_main i').css({
                'opacity': '0',
                'font-size': '0',
                'margin-right': '0'
            });
            $(this).css({
                'background': '#000',
                'color': '#8B0000'
            });
        });
        $('#continue_to_buy').hover(function() {
            $('#continue_to_buy i').css({
                'opacity': '1',
                'font-size': '1em',
                'margin-right': '7px'
            })
            $(this).css({
                'background': '#8B0000',
                'color': 'black'
            });
        }, function() {
            $('#continue_to_buy i').css({
                'opacity': '0',
                'font-size': '0',
                'margin-right': '0'
            });
            $(this).css({
                'background': '#000',
                'color': '#8B0000'
            });
        });
    }

    // click handler for continue to main
    $('#continue_to_main').click(function() {
        attachModalListeners();

        $('#main_wrapper').css({
            'display': 'block'
        });
        window.navtype = det_navtype()
        $('#' + window.navtype).css({
            'display': 'block'
        });
        setTimeout(function() {
            fadeoutPreloader(window.navtype);
        }, DELAY);
    });
    // $('#continue_to_main').click();


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
    //scroll margin fix
    function scrollfix() {
        var b = $('body');
        var normalw = 0;
        var scrollw = 0;
        console.log(window.innerWidth, b.width(), $('#main_wrapper').width());
        if (b.prop('scrollHeight') > b.height()) {
            normalw = window.innerWidth;
            scrollw = normalw - b.width();
            $('#main_wrapper').css({
                marginRight: '-' + scrollw + 'px'
            });
        }
    }
    function transfertext(ele){
        var modal = document.getElementById('about_text');
        modal.style.display = "block";
        modal.style.opacity = '1';
        $('#text_holder').html(ele.closest('div').text());
        console.log(ele)
    }
    carousel_info_mob = [
        {
            'name':'',
            'topic':'',
            'imageurl':'img/speaker/Mob/Connecting-The-Dots-TEDx-Bits-Hyderabad.jpg'
        },
        {
            'name':'Sunil Shastri',
            'topic':'Lal Bahadur Shastri',
            'imageurl':'img/speaker/Mob/Sunil-Shastri-TEDx.jpg'
        },
        {
            'name':'Niharika Yadav',
            'topic':'Why I Ride',
            'imageurl':'img/speaker/Mob/Niharika-Yadav-TEDx.jpg'
        },
        {
            'name':'Hemannth Satyanarayana',
            'topic':'Exploring Virtual Reality',
            'imageurl':'img/speaker/Mob/Hemanth-Satyanarayana-TEDx.jpg'
        },
        {
            'name':'Anuradha Thakur',
            'topic':'<span style="font-size:.7em">Why I Use Black in My Paintings</span>',
            'imageurl':'img/speaker/Mob/Anuradha-Thakur-TEDx.jpg'
        },
        {
            'name':'Krishna Kodali',
            'topic':'Demonetization',
            'imageurl':'img/speaker/Mob/Krishna-Kodali-TEDx.jpg'
        }
    ];
    carousel_info_desk = [
        {
            'name':'',
            'topic':'',
            'imageurl':'img/speaker/Desktop/Sitelowfinal.jpg'
        },
        {
            'name':'speaker name 1',
            'topic':'talk topic 1',
            'imageurl':'img/speaker/Desktop/Krishna-Kodali-Tedx.jpg'
        },
        {
            'name':'speaker name 1',
            'topic':'talk topic 1',
            'imageurl':'img/speaker/Desktop/Niharika-Yadav-Tedx.jpg'
        },
        {
            'name':'speaker name 1',
            'topic':'talk topic 1',
            'imageurl':'img/speaker/Desktop/Tanmay-Shah-Tedx.jpg'
        },
        {
            'name':'speaker name 1',
            'topic':'talk topic 1',
            'imageurl':'img/speaker/Desktop/Anuradha-Thakur-Tedx.jpg'
        },
        {
            'name':'speaker name 1',
            'topic':'talk topic 1',
            'imageurl':'img/speaker/Desktop/Kapur-Mal-Jain-Tedx.jpg'
        }
    ] 
    // bind images to slideshow based on the screen size
    function responsiveTweaks() {
        var counter = 0
        if(($(window).width()) < $(window).height()){
            var offset = (16/9)*($(window).width())-$(window).height()-100;
            console.log(offset);
            $('.background').css({'width':'100vw', 'height':'auto', 'top':'-'+offset+'px'});
            $('.frame_holder img').each(function(){
                $(this).attr('src', carousel_info_mob[counter++]['imageurl']);
            });
        }else{
            $('.frame_holder img').each(function(){
                $(this).attr('src', carousel_info_desk[counter++]['imageurl']);
                // $(this).find()
            });
        }
        console.log($(window).width()/$(window).height())
        if(($(window).width() > 0.7*($(window).height())) && $(window).width()>700 && $(window).width() < $(window).height()){
            $('.speaker-flex-container').css({'padding-left':'10%', 'padding-right':'10%', 'width':'80%'});
            $('.speaker-flex-item').css({'width':'210px','height':'210px'});
            $('.oc-flex-container').css({'padding-left':'10%', 'padding-right':'10%', 'width':'80%'});
            $('.oc-flex-item').css({'width':'210px','height':'210px'})
        }
        if($(window).width() < 801){
            var counter = 0;
            var counter2 = 0;
            $('.frame_holder h2').each(function(){
                topic = carousel_info_mob[counter]['topic'];
                if(topic != '')
                {
                    $(this).parent().find('div').css({'background':'black'});
                }
                text = carousel_info_mob[counter++]['name'].split(' ');
                vh = 65;
                for(i in text){
                    $(this).parent().append('<h2 class="speaker_name" style="top:'+vh+'vh; ">'+text[i]+'</h2>');
                    vh+=.5;
                }
                $(this).remove();
            });
            $('.frame_holder div').each(function(){
                text = carousel_info_mob[counter2++]['topic'];
                $(this).html(text);
            });
            
            $('.toggle_text').hide();
            $('.left_about').click(function(){
                transfertext($(this));
                text = $(this).find('b').text();
                $('#modal_header_about').find('div').html(text);
            });
            $('.right_about').click(function(){
                transfertext($(this))
                text = $(this).find('b').text();
                $('#modal_header_about').find('div').html(text);
            });
        }
    }

    // Image Slideshow Carousel initializer
    function slideshow_init(){
    	$("#slideshow > div:gt(0)").hide();
    	var ele = $('#slideshow > div:first');
    	ele.find('h2').css({'animation':'slidein .5s 1.5s ease-out 1', 'animation-fill-mode':'forwards'});
    	ele.find('div').css({'animation':'slidein .5s 1.7s ease-out 1', 'animation-fill-mode':'forwards'});
    	startslideshow()
    }

    // Start image slideshow
    function startslideshow(){
    	window.slidechange = setInterval(function() {
    	    navigate('forwards');
    	}, 5500);
    }
    timer = null
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > $(window).height()){
            clearInterval(window.slidechange);
            $('#tick').css({'display':'inline-block'});
            setTimeout(function()
            {
                $('#tick').css({'animation':'fadein 0.4s forwards','background':'#d11','padding':'14px 6px','margin-top':'-14px'});
            },400);
        }else if(scroll < $(window).height()-200){
            if($('#tick').css('display') != 'none'){
                $('#tick').css({'animation':'fadeout .4s forwards'});
                setTimeout(function(){
                    $('#tick').css({'display':'none'});
                },500);
            }
        }else if(scroll == 0){
            startslideshow();
        }
        if(timer !== null) {
            $('#buy_mobile').css({'transform':'translateX(100px) rotateZ(360deg)', 'opacity':'0'})
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
              $('#buy_mobile').css({'transform':'translateX(0) rotateZ(0deg)', 'opacity':'1'})
        }, 200);
    });

    // slideshow navigation handler
    function navigate(direction){
        clearInterval(window.slidechange);
        var ele;
        if(direction == 'forwards'){
            ele = $('#slideshow > div:first')
                        .fadeOut(400)
                        .next()
        }else{
           ele = $('#slideshow > div:first')
            .fadeOut(400)
            .parent().children().last()
        }
        ele.find('h2').css({'animation':'slidein .5s 1.5s ease-out 1', 'animation-fill-mode':'forwards'});
        ele.find('div').css({'animation':'slidein .5s 1.7s ease-out 1', 'animation-fill-mode':'forwards'});
        setTimeout(function(){
            if(ele.find('img').attr('src') != carousel_info_desk[0]['imageurl']){
                ele.find('img').css({'animation':'scaleup 4s ease-out 1', 'animation-fill-mode':'forwards'});    
            }
            if(direction == 'forwards'){
                ele.fadeIn(600)
                    .end()
                    .appendTo('#slideshow');
            }else{
                ele.fadeIn(600)
                   .prependTo('#slideshow');
            }
        },400);
        startslideshow();
    }

    // Manual Slideshow controls - Slide forwards
    $('.icon-forward').click(function(){
        navigate('forwards');
    });

    // Manual Slideshow controls - Slide Backwards
    $('.icon-rewind').click(function(){
        navigate('backwards');
    })

    $("body").keydown(function(e) {
      if(e.keyCode == 39) { // left
        navigate('forwards');
      }
      else if(e.keyCode == 37) { // right
        navigate('backwards');
      }
    });
    // $('.tooltip').click(function(evt){
    //     evt.stopPropagation();
    //     $('#main_wrapper').css({'filter':'grayscale(100%) brightness(8%)'});
    //     $('#book_text').css({'display':'block', 'opacity':'1'});
    // });
    // $('.close').click(function(evt){
    //     evt.stopPropagation();
    //     $('#main_wrapper').css({'filter':''});
    // })
    /********************
     * MODAL SPEAKER JS
     */
    // Get the modal
    speaker = [
        {
            'name':'Subedar Yogendra Singh Yadav',
            'detail':'<div class="speaker_modal_bold">Valiant. Valourous. Vigorous.</div><br> The Youngest Paramvir Chakra awardee, Subedar Yogendra Singh Yadav is an epitome of grit and resolve. <br> He has fought Kargil war and been a part of the leading team that captured Tiger Hill. <br> He has inspired the character of the protagonist in the Bollywood movie, Lakshya as a headstrong battlefield hero.'
        },
        {
            'name':'Eshaan Hilal',
            'detail':'<div class="speaker_modal_bold">Elegant. Eccentric. Enchanting. </div><br>From being a belly dancer to a fashion designer, Eshan Hilal has blissfully shattered the conceived notions of gender roles. His stance towards individuals being judged and defined based on their clothing is what\'ll leave you amazed and spellbound. Redfining the perception of art, he\'s an emerging icon for the youth to admire. Fighting against all odds, defying social norms and religious shackles , he has found his way of expressing himself through dance. Witness him as he makes swimming across the tide look efforlessly cool!',
        },
        {
            'name':'Vrushali Prasade',
            'detail':'<div class="speaker_modal_bold">Intrepid. Innovative. Ingenious</div><br> Being the co-founder and CTO of Absentia, inventor of the VR headset Tesseract and a national level table tennis player, Vrushali Prasade is redefining the boundaries of what one person can achieve.<br> A BITS Goa dropout, she invented the VR headset Tesseract, under the banner of her company, Absentia, as a third year student. She has always trusted her instincts, taken risks and made bold choices, which not many have the courage to do.'
        },
        {
            'name':'Shikha Tandon',
            'detail':"<div class='speaker_modal_bold'>Pertinacious. Proficient. Personable. </div><br>Shikha Tandon is an Olympian, Arjuna awardee, India's fastest ever woman swimmer and the only Indian woman swimmer to win a medal at the Asian Open level. She has won 37 International and 146 National medals, and created 75 National Records. Holding a Bachelor of Science degree in Biotechnology, Genetics, and Biochemistry, and two Master of Science degrees in Biotechnology and Biology, she is a stellar academic too. She is involved in multiple capacities in sport and health technology, and is also on the Board of Advisors (Olympic Council) of an India-based organization, spirited about developing education and sport in India. <br>"
        },
        {
            'name':'Shashaa Tirupathi',
            'detail':"<div class='speaker_modal_bold'>Mellow. Melodious. Mellifluous. </div><br>Born in Srinagar and raised in Vancouver, Shashaa Tirupathi is a multilingual singer who has sung recent bollywood hits such as- ‘The Humma song’ and ‘Baarish’ as well as award-winning Tamil songs-'Naane Varugiren’ and ‘Aye Mr. Minor’, both composed by AR Rahman. After giving up the opportunity to pursue a pre-medical degree in Canada to follow the musical notes, she has toured extensively with AR Rahman and has been a part of his coke studio episode. She has sung Tamil, Hindi, Telugu, Punjabi, Malayalam, Kannada, Bengali, Konkani, Arabic and English songs with equal melody and ease."
        },
        {
            'name':'Takbir Fatima',
            'detail':"<div class='speaker_modal_bold'>Creative. Confident. Charismatic.</div><br>Takbir Fatima is an upcoming architect , and director of experimental design and architectural studio ,DesignAware. She is passionate about design research and  prototyping, finding out basically how everything works. She was awarded emerging architect award by Indian institute of architects  and was recognized as emerging architect of the year by NDTV design and architect awards in 2016."
        },
        {
            'name':'Manvendra Singh Gohil',
            'detail':"<div class='speaker_modal_bold'>Royal. Resolute. Revolutionary. </div><br> The handsome and regal, Prince Manvendra SIngh Gohil is son of Maharaja Shri Raghubir Singhji and the probable heir to the throne of of Rajpipla. He is also the first openly gay prince in the world. In a brave move, he came out the public in 2006 after being convinced by journalist Chairantana Bhatt, whose article on this made headlines in India and all over the world and acted as an example for other LGBTQ+ community members to come forward. The prince is also the founder and chairman of the Lakshya trust, a group dedicated to HIV AIDS education and prevention."
        },
        {
            'name':'Ramana Polavarapu',
            'detail':"<div class='speaker_modal_bold'>Purposeful. Persistent. Perceptive. </div><br>Blind by birth, he never let this 'disability' hinder his zeal. After securing a PhD from University of California, Davis in Economics, he was a faculty memver at University of Colarado. Having been software guy for the past 18 years, he is currently a data scientist at Goldman Sachs and takes great interest in music, mathematics and yoga."
        }
    ];
    oc = [
       {
           'name':'Sahil Sangwan',
           'detail':'<div class="team_mem_head">Licensee</div>',
           'twitter_link':'#',
           'fb_link':'https://www.facebook.com/sangwan.sahil',
           'linkedin_link':'https://www.linkedin.com/in/sahil-sangwan-013824146',
           'insta_link':'https://www.instagram.com/_sahilsangwan_/'
       },
       {
           'name':'Mayank Agrawal',
           'detail':'<div class="team_mem_head">Co-Licensee</div>',
           'twitter_link':'#',
           'fb_link':'https://www.facebook.com/CuriousMayank',
           'linkedin_link':'https://www.linkedin.com/in/mayank-agrawal-97694a130/',
           'insta_link':'#'
       },
       {
           'name':'Bharadwaja Vemparala',
           'detail':'<div class="team_mem_head">Sponsorship and Budgeting Lead</div>',
           'twitter_link':'#',
           'fb_link':'https://www.facebook.com/bharadwaja.vemparala.56',
           'linkedin_link':'https://www.linkedin.com/in/vemparala-bharadwaja-a8bb5b137/',
           'insta_link':'https://www.instagram.com/satyab1505/'
       },
       {
           'name':'Monarch Moolchandani',
           'detail':'<div class="team_mem_head">Speaker Research Lead</div>',
           'twitter_link':'https://twitter.com/noMoreADictator',
           'fb_link':'https://www.facebook.com/monarchmoolchandani.m',
           'linkedin_link':'https://www.linkedin.com/in/monarch-moolchandani-7929b4112/',
           'insta_link':'https://www.instagram.com/monaaarch/?hl=en'
       },
       {
           'name':'Praneet Mehta',
           'detail':'<div class="team_mem_head">Tech Lead</div>',
           'twitter_link':'#',
           'fb_link':'https://www.facebook.com/praneet.mehta.1',
           'linkedin_link':'https://www.linkedin.com/in/praneet-mehta-588453114/',
           'insta_link':'#'
       },
       {
           'name':'Prachi Mehta',
           'detail':'<div class="team_mem_head">Publicity Lead</div>',
           'twitter_link':'#',
           'fb_link':'https://www.facebook.com/16.prachi',
           'linkedin_link':'https://www.linkedin.com/in/prachi-mehta-457628115/',
           'insta_link':'https://www.instagram.com/p.for.pms/'
       },
       {
           'name':'Kapil Shah',
           'detail':'<div class="team_mem_head">Logistics Lead</div>',
           'twitter_link':'#',
           'fb_link':'https://www.facebook.com/kashcobar',
           'linkedin_link':'https://www.linkedin.com/in/kapil-s-222baa104/',
           'insta_link':'https://www.instagram.com/kapilshah2097/'
       },
       {
           'name':'Sneha Singh',
           'detail':'<div class="team_mem_head">Hospitality Lead</div>',
           'twitter_link':'#',
           'fb_link':'https://www.facebook.com/profile.php?id=100009136602754',
           'linkedin_link':'https://www.linkedin.com/in/sneha-singh-1659b2137/',
           'insta_link':'https://www.instagram.com/snehasingh_24/'
       },
       {
           'name':'Arnab Paul Choudhury',
           'detail':'<div class="team_mem_head">Design Lead</div>',
           'twitter_link':'#',
           'fb_link':'https://www.facebook.com/arnab95',
           'linkedin_link':'https://www.linkedin.com/in/arnab-paul-choudhury-a13434143/',
           'insta_link':'#'
       }
   ];
    function attachModalListeners(){
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = $('.myImg');
        var modalImg = $("#img01");
        var captionText = document.getElementById("caption");
        $('.myImg').click(function(){
                   modal.style.display = "block";
                   category = $(this).attr('data-type');
                   count = $(this).attr('data-count');
                   var newSrc = $(this).attr('src');
                   console.log(category + ' ' + count);
                   if(category == 'oc')
                   {
                       caption.innerHTML = oc[count]['detail'];
                       $('#modal_header').html(oc[count]['name']);
                       $('#modal_social').show();
                       console.log(oc[count]['fb_link']);
                       if(oc[count]['fb_link'] != '#'){
                            $('#fb_modal').css({'display':'inline-block'});
                            $('#fb_modal').attr("href",oc[count]['fb_link']);
                       }
                       else{
                            $('#fb_modal').css({'display':'none'});
                       }
                       if(oc[count]['twitter_link'] != '#'){
                            $('#twitter_modal').css({'display':'inline-block'});
                            $('#twitter_modal').attr("href",oc[count]['twitter_link']);
                       }
                       else{
                            $('#twitter_modal').css({'display':'none'});
                       }
                       if(oc[count]['insta_link'] != '#'){
                            $('#insta_modal').css({'display':'inline-block'});
                            $('#insta_modal').attr("href",oc[count]['insta_link']);
                       }
                       else{
                            $('#insta_modal').css({'display':'none'});
                       }
                       if(oc[count]['linkedin_link'] != '#'){
                            $('#linkedin_modal').css({'display':'inline-block'});
                            $('#linkedin_modal').attr("href",oc[count]['linkedin_link']);
                       }
                       else{
                            $('#linkedin_modal').css({'display':'none'});
                       }
                   }
                   else
                   {
                       caption.innerHTML = speaker[count]['detail'];
                       $('#modal_header').html(speaker[count]['name']);
                       $('#modal_social').hide();
                   }
                   
                   $(modal).css({'animation':'zoomin .4s ease-out, fadein .4s ease-out', 'animation-fill-mode':'forwards'});
                   console.log(newSrc);
                   modalImg.attr('src', newSrc);
                   $('#main_wrapper').css({'filter':'grayscale(100%) brightness(8%)'});
                   
               });
          

        // Get the <span> element that closes the modal
        var span = document.getElementById("close_speaker");

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
          modal.style.display = "none";
          $('#main_wrapper').css({'filter':''});
        }
    }(function($) {
      $.fn.visible = function(partial) {
        
          var $t            = $(this),
              $w            = $(window),
              viewTop       = $w.scrollTop(),
              viewBottom    = viewTop + $w.height(),
              _top          = $t.offset().top,
              _bottom       = _top + $t.height(),
              compareTop    = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;
        
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

      };
        
    })(jQuery);

    var win = $(window);

    var allMods = $(".module");

    allMods.each(function(i, el) {
      var el = $(el);
      // if (el.visible(true)) {
      //   el.addClass("already-visible"); 
      // } 
    });

    win.scroll(function(event) {
      
      allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in"); 
        } 
      });
      
    });

    

    responsiveTweaks();

})