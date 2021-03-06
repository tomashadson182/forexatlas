$(document).ready(function(){
    $('.rf').each(function(){
        var form = $(this);
        var btn = form.find('.submit');

        form.find('.rfield').each(function(){
            $(this).addClass('empty-filed'); //пустое
        });

        function checkInput(){
            form.find('.rfield').each(function(){
                if ($(this).val() !== '') {
                    $(this).removeClass('empty-filed');
                }
                else{
                    $(this).addClass('empty-filed');
                }
            });

            form.find('#phone').each(function(){
            	var intg = $(this).val();
        		var phoneLngth = intg.length;
        		var re = /^[-\+\s\(\)0-9]*$/;  //для телефона (цифры, пробелы, скобки, плюсы. дефисы)
        		if( !re.test(intg)) {
           			 $(this).addClass('empty-filed');

        		}
        		else if (phoneLngth <= 5) {
        			$(this).addClass('empty-filed');
        		}
        		else{
        			$(this).removeClass('empty-filed');
        		}
            });
        }

        form.find('.rfield').bind('focusout',function(){
            if ($(this).hasClass('empty-filed')){
                $(this).css({'border':'1px solid #C04B75','background':'rgba(255, 0, 0, 0.1)'});
            }
            else{
                $(this).removeAttr('style');
            }
        });

        function lightEmpty(){
            form.find('.empty-filed').css({'border':'1px solid #C04B75','background':'rgba(255, 0, 0, 0.1)'});
            setTimeout(function(){
                form.find('.empty-filed').removeAttr('style');
            }, 2000);
        }

        setInterval(function(){
            checkInput();
            var sizeEmpty = form.find('.empty-filed').size();
            if (sizeEmpty > 0){
                if (btn.hasClass('disabled')){
                	return false;
                }
                else {
                    btn.addClass('disabled');
                }
            }
            else{
                btn.removeClass('disabled');
            }
        },500);

        btn.click(function(e){
            if ($(this).hasClass('disabled')) {
                lightEmpty();
                return false;
            }
            else{
            	e.preventDefault();
                form.submit(function(e){
                	e.preventDefault();
                	f=form.serialize();
                    $.post('/mail.php', $('.rf').serialize(), function(){
						$('.popup.success').show();
       			 	});
                });
                form.submit();
                $('.popup').hide();
                form.find('.rfield').val('').change();
            }
        });
    });

    $('.close').click(function(e){
        e.preventDefault();
        $('.popup').hide();
    });

    $('.show-modal').click(function(e){
        e.preventDefault();
        $('.popup.call').show();
    });

    $('.popup').click(function(event) {
        e = event || window.event
        if (e.target == this) {
            $(this).hide();
        }
    });

});








