nevermore-one-page-generator
============================

Using Nevermore Generator you get puzzle blocks like headers, contents, projects, teams, prices, footers which you can easily combine to create unique websites.




<h2>20+ reusable UI components</h2>

Each component has the PSD source file and it's ready coded, they are built using LESS, however you will find also the CSS version.
All components are responsive.

<ul>
<li>3 HEADERS</li>
<li>7 CONTENTS </li>
<li>3 SHOWCASE/PORTFOLIOS</li>
<li>2 TEAMS</li>
<li>1 CONTACT</li>
<li>1 PRICE TABLE</li>
<li>3 FOOTERS</li>
</ul>

<h2>How to use</h2>

Inside the downloaded package you will find three folders:
<ul>
<li>
<strong>"CODE"</strong>
<ul>
<li>
<strong>common</strong> - contains all the necessary files for the framework, like IMAGES used by all components, FONTS, JAVASCRIPT files, CSS and LESS files.
Basically, these files are the core of the framework.
</li>
<li>
<strong>layouts</strong> - contains six ready made demos picked by us for the purpose of demonstrantion of what you can achieve using "Nevermore Generator"
</li>
<li><strong>ui-kit</strong> - contains all the ready coded components like headers, contents, projects, teams, prices, contacts, footers.</li>
</ul>
<li>
<strong>"PSD"</strong>
<ul>
<li>
<strong>ui-kit</strong> - contains all PSD files of the components like headers, contents, projects, teams, prices, contacts, footers.
</li>
<li>
<strong>layouts</strong> - contains six ready made PSD demos picked by us for the purpose of demonstrantion of what you can achieve using "Nevermore Generator"
</li>

</ul>
</li>
<li>
<strong>"Documentation"</strong> - Here you'll find some general info for each UI components and some video tutorials.
</li>
</ul>
<h3>Let's begin!</h3>

If you have no experience with "LESS" you can use "CSS", you will find these two inside the "ui-kit" folder. In order to start you need to put the following code into your HTML file:
```
<!-- this code between <head> ... </head> -->

  <link rel="stylesheet" href="(way to to the framework folder)/common/css/style.css">
  <link rel="stylesheet" href="(way to to the framework folder)/common/css/animations.css">
  <link rel="stylesheet" href="(way to to the framework folder)/common/css/owl-carousel/owl.carousel.css">
  <link rel="stylesheet" href="(way to to the framework folder)/common/css/venobox/venobox.css">
  <script src="(way to to the framework folder)/common/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

<!-- end -->

<!-- this code directly before </body> -->
   <script src="(way to to the framework folder)/js/vendor/jquery-1.11.0.min.js"></script>
   <script>window.jQuery || document.write('<script src="(way to to the framework folder)/js/vendor/jquery-1.11.0.min.js"><\/script>')</script>
   <script src="(way to to the framework folder)/js/vendor/bootstrap.min.js"></script>
   <script src="(way to to the framework folder)/js/plugins.js"></script> 
   <script src="(way to to the framework folder)/js/main.js"></script> 
   <script>$(window).fadeThis({reverse:false});</script>
```
You will also find these inside "skeleton" folder inside "layouts".

Next you have to insert the styles for the components you want to use:
```
<!-- headers - let's say you want to use header-01 -->

<link rel="stylesheet" href="(way to the framework folder)/ui-kit/headers/css/header-01.css">

<!-- contents - let's say you want to use content-02 -->

<link rel="stylesheet" href="(way to the framework folder)/ui-kit/contents/css/content-02.css">

<!-- projects - let's say you want to use projects-03 -->

<link rel="stylesheet" href="(way to the framework folder)/ui-kit/projects/css/projects-03.css">

<!-- teams - let's say you want to use team-01 -->

<link rel="stylesheet" href="(way to the framework folder)/ui-kit/teams/css/team-01.css">
```
<h5>"LESS" Version</h5>
Using LESS it's even simpler, the first step is the same as in the CSS version.

Second step. In your main '.less' file add the following code:
```
@import "(way to to the framework folder)/less/bootstrap/bootstrap.less";
@import "(way to to the framework folder)/less/font-awesome/font-awesome.less";
@import "(way to to the framework folder)/less/variables.less";
@import "(way to the framework folder/less/mixins.less";
@import "(way to to the framework folder)/less/global.less";

<!-- headers - let's say you want to use header-01 -->
@import "(way to the framework folder)/ui-kit/headers/less/header-01.less";

<!-- teams - let's say you want to use team-01 -->
@import "(way to the framework folder)/ui-kit/teams/less/team-01.less";


@import "../(way to to the framework folder)/less/navbar.less";
@import "../(way to to the framework folder)/less/header.less";
```
The last step is the same as in the CSS version

If you don't understand exactly how this works you can take a look inside the "layouts" folder. There you will find, for example "Layout-01" and inside that folder you have another folder called "LESS" and there you will find exactly how it's working.

<h2>Demos</h2>
You can see how the UI components look here: http://outboxvision.co/nevermore/landing/#components

There are also 6 live demos with some of the UI components combined:
<ul>
<li><a href="http://outboxvision.co/nevermore/layouts/layout-01/index.html">Demo 1</a></li>
<li><a href="http://outboxvision.co/nevermore/layouts/layout-02/index.html">Demo 2</a></li>
<li><a href="http://outboxvision.co/nevermore/layouts/layout-03/index.html">Demo 3</a></li>
<li><a href="http://outboxvision.co/nevermore/layouts/layout-04/index.html">Demo 4</a></li>
<li><a href="http://outboxvision.co/nevermore/layouts/layout-05/index.html">Demo 5</a></li>
<li><a href="http://outboxvision.co/nevermore/layouts/layout-06/index.html">Demo 6</a></li>
</ul>

<h2>License</h2>

Copyright 2014, Outboxvision
This content is released under the MIT license
http://outboxvision.co

