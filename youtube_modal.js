(function($){var pl=/\+/g,searchStrict=/([^&=]+)=+([^&]*)/g,searchTolerant=/([^&=]+)=?([^&]*)/g,decode=function(s){return decodeURIComponent(s.replace(pl," "));};$.parseQuery=function(query,options){var match,o={},opts=options||{},search=opts.tolerant?searchTolerant:searchStrict;if('?'===query.substring(0,1)){query=query.substring(1);}while(match=search.exec(query)){o[decode(match[1])]=decode(match[2]);}return o;};$.getQuery=function(options){return $.parseQuery(window.location.search,options);};$.fn.parseQuery=function(options){return $.parseQuery($(this).serialize(),options);};}(jQuery));
// YOUTUBE VIDEO CODE
jQuery(document).ready(function(){
  
// BOOTSTRAP 3.0 - Open YouTube Video Dynamicaly in Modal Window
// Modal Window for dynamically opening videos
jQuery('a[href^="https://www.youtube.com"]').on('click', function(e){
  // Store the query string variables and values
  // Uses "jQuery Query Parser" plugin, to allow for various URL formats (could have extra parameters)
  var queryString = jQuery(this).attr('href').slice( jQuery(this).attr('href').indexOf('?') + 1);
  var queryVars = jQuery.parseQuery( queryString );
 
  // if GET variable "v" exists. This is the Youtube Video ID
  if ( 'v' in queryVars )
  {
    // Prevent opening of external page
    e.preventDefault();
 
    // Variables for iFrame code. Width and height from data attributes, else use default.
    var vidWidth = 500; // default
    var vidHeight = 315; // default
    if ( jQuery(this).attr('data-width') ) { vidWidth = parseInt(jQuery(this).attr('data-width')); }
    if ( jQuery(this).attr('data-height') ) { vidHeight =  parseInt(jQuery(this).attr('data-height')); }
    var iFrameCode = '<iframe width="' + vidWidth + '" height="'+ vidHeight +'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="https://www.youtube.com/embed/'+  queryVars['v'] +'?rel=0&wmode=transparent&showinfo=0" frameborder="0"></iframe>';
 
    // Replace Modal HTML with iFrame Embed
    jQuery('#yt_video_modal .modal-body').html(iFrameCode);
    // Set new width of modal window, based on dynamic video content
    jQuery('#yt_video_modal').on('show.bs.modal', function () {
      // Add video width to left and right padding, to get new width of modal window
      var modalBody = jQuery(this).find('.modal-body');
      var modalDialog = jQuery(this).find('.modal-dialog');
      var newModalWidth = vidWidth + parseInt(modalBody.css("padding-left")) + parseInt(modalBody.css("padding-right"));
      newModalWidth += parseInt(modalDialog.css("padding-left")) + parseInt(modalDialog.css("padding-right"));
      newModalWidth += 'px';
      // Set width of modal (Bootstrap 3.0)
        jQuery(this).find('.modal-dialog').css('width', newModalWidth);
		 jQuery(this).find('.modal-dialog').css('max-width', newModalWidth);
    });
 
    // Open Modal
    jQuery('#yt_video_modal').modal();
  }
});
 
// Clear modal contents on close. 
// There was mention of videos that kept playing in the background.
jQuery('#yt_video_modal').on('hidden.bs.modal', function () {
  jQuery('#yt_video_modal .modal-body').html('');
});
 
}); 