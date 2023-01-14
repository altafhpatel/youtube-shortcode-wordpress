<?php
define('YT_SHORTCODE_VERSION','1.0.0');
function youtube_video_shortcode( $atts ) {
	wp_enqueue_script('yt_modal_js',get_stylesheet_directory_uri().'/youtube/youtube_modal.js',array('jquery'),YT_SHORTCODE_VERSION);
	$params = shortcode_atts( array(
		'video' => '',
		'alt' =>'',
		'title'=>'',
		'author'=>'',
		'thumbnail' => 'large'
	), $atts );
    
	$button  = "<div class='text-center w-100 play_button'><span class='btn' data-toggle='modal' data-target='yt_video_modal' href='https://www.youtube.com/watch?v=".$params['video']."'><i class='fa fa-play'></i> play</span></div>";
	$thumbnail_size = (($params['thumbnail'] == 'large') ? 'maxresdefault.jpg' : 'hqdefault.jpg' );
	$padding = (($params['thumbnail'] != 'large') ? ' small_thumb' : '' );
    $content = "";
    $content .="<div class='video_card".$padding."'>";
    $content .="<a href='https://www.youtube.com/watch?v=".$params['video']."'>";
    $content .="<div class='thumb'><img src='https://i.ytimg.com/vi/".$params['video']."/".$thumbnail_size."' class='img-fluid' alt='".$params['alt']."'>".$button."</div>";
    $content .="<div class='info'><h3>".$params['title']."</h3><p class='author'> by ".$params['author']."</p></div></a>";
    $content .= "</div>";
    return $content;
}

add_shortcode( 'youtube_video', 'youtube_video_shortcode' );

/*======= start html output in footer ========= */
function yt_modal_html(){
	ob_start();
	?>
<style>#yt_video_modal .modal-dialog{max-width:auto}#yt_video_modal .modal-body, #yt_video_modal .modal-header{padding:0}#yt_video_modal .close{font-size:25px;</style>
<div class="modal fade" id="yt_video_modal" tabindex="-1" role="dialog" aria-labelledby="yt_video_modalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>
<?php
	$content = ob_get_contents();
	return $content;
}
add_action('wp_footer','yt_modal_html');