# YouTube Shortcode for Wordpress Without plugin

### Requirement:
1. Without any plugin i had to embed youtube video.
2. Video box will have image fetched from youtube thumbnail image must have custom alt tag, custom title below the video and a play button.
3. The video must open in bootstrap 4 popup box dynamically.
4. Automatically fetch image from youtube.
5. Create a url automatically via video ID.


## How to Use in Code
1. Create a folder in your parent/child theme ( **youtube** ).
2. Copy and paste two files inside it ( **init.php + youtube_modal.js**   )
3. open your ( **functions.php** ) file and paste the below line

```
**include('youtube/init.php');**
```

4. Paste the style anywhere you feel comfortable
```
.video_card{text-align:center;}
.video_card .thumb{position:relative;padding: 30px 0;background-color: #000;height:275px;overflow:hidden}
.video_card.small_thumb .thumb{padding:0;}
.video_card .play_button{position:absolute;top:50%;transform:translateY(-50%)}
.video_card .play_button span{background-color: #f00;font-size: 11px;color: #fff;padding: 10px 20px;border-radius: 10px}
.video_card .play_button i{display: block;font-size: 25px;margin-bottom:5px}
.video_card h3{font-size: 18px;font-weight: 600;line-height: 1.3;padding: 10px 30px 0;letter-spacing: 0.5px;margin-bottom:0;}
.video_card .author{font-size:12px;color:#ccc;}
```


## How to use in frontend or posts

``` [youtube_video video="UQqq6Kb4rDI" alt="image alt tag" title="video title like best video" author="by creator"]
```

1. Add a shortcode block in gutenberg or elementor anywhere in any builder
2. Use the shortcode **youtube_video** see the parameters below

**Parameters:**
video .... your video id
alt....... alter tag
title..... your video title
author.... video creator name

Note: use every parameter like (video="uqasdfsdfw" etc)


-------------------------------------------------------------------
### Developer Information
1. My name is Altaf Hussain Patel based in Pakistan. Love to customize wordpress according to their requirement.
2. Basically repo is created for those who are searching for the solution to create custom templates.
3. Visit my website [propatel.com](https://propatel.com).

### Hire me for your custom wordpress requirement. Send me an email (propatel2 [at] gmail.com]

## Request
1. We appreciate other developers effort. Please provide your feedback to make it more useful for others.

Thanks for visiting.
