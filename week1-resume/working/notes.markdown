# zzn's study notes 4/7/2014
## 1. Find out all external libraries used in solution
### js

* jquery
* jquery.easing: some animation thing
* jquery.easypiechart: generate easy pie chart
* jquery.gridrotator: animate responsive image grid
* jquery.isotope: Magical Dynamic Layout Plugin For jQuery
* jquery.placehodler: HTML5 Placeholder jQuery Plugin http://mathiasbynens.be/demo/placeholder
* jquery.ui.rlightbox: rlightbox is a jQuery UI mediabox that can display many types of content such as images, YouTube and Vimeo videos. It has many unique features like Panorama and Live Re-size. Like other jQuery UI widgets, it is ThemeRoller ready.
* jquery.ui.widget: Create stateful jQuery plugins using the same abstraction as all jQuery UI widgets.
* modernizr.custom.26633: Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.

### css
* boostrap
* lightbox

## 2. Document the tricky things during implementation (also served as a todo list)
* if you want to have a full page, you will have to use javascript to set the height
* TODO change font-size based on screensize

## 3. Questions to ask
* Question: (css) in .title-box, it seems I will have to add left:0 and right:0 to make the auto margin take effect, why?
* Question: How margin auto is determined
* Question: On aliment, box-border etc, what is a good practice to achieve pixel perfect.

## 4. Known Issue (I don't plan to fix)
1. First page box "top" is different
2. First page Image fill background
[pendar]: suggesting using css's background-size: cover, or use jquery's  imagefill.js http://johnpolacek.github.io/imagefill.js/
3. When less than 767px wide the solution's education experience's red round bubble's text is not vertical aligned