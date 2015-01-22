var partner_stf = getParameterByName('p'),
    partner_itfx = getParameterByName('i'),
    subid_stf = getParameterByName('ps'),
    subid_itfx = getParameterByName('is'),
    landing = getParameterByName('lp');

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

if (partner_stf) {
  $('a').each(function(){
    var link = $(this).attr('href');
    if(subid_stf){
      link = link.replace('\/p959','\/p'+partner_stf+'\/'+subid_stf);
      link = link.replace('\/p4812','\/p'+partner_stf+'\/'+subid_stf);
    }
    else{
      link = link.replace('\/p959','\/p'+partner_stf);
      link = link.replace('\/p4812','\/p'+partner_stf);
    }
    $(this).attr('href',link);
  });
}
if (partner_itfx) {
  $('a').each(function(){
    var href = $(this).attr('href');
    if (subid_itfx){
      href = href.replace('\/partner/93608','\/partner\/'+partner_itfx+'\/'+subid_itfx);
      href = href.replace('\/partner/105257','\/partner\/'+partner_itfx+'\/'+subid_itfx);
    }
    else{
      href = href.replace('\/partner/93608','\/partner\/'+partner_itfx);
      href = href.replace('\/partner/105257','\/partner\/'+partner_itfx);
    }
    $(this).attr('href',href);
  });
}
if (landing) {
  $('a').each(function(){
    var land = $(this).attr('href');
    land = land.replace('\/stp\/','\/'+landing+'\/');
    $(this).attr('href',land);
  });
}
