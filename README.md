# jeux-ui
[downloads](https://github.com/Gigorgu/jeux-ui/releases/tag/jeux)

### 4.6.4.2 pre-realese 
#### Features 
* Custom select
```html
<div role="select" id="" class="select">
    <input class="select__input" type="hidden" name="">
    <button id="customSelect1" aria-roledescription="button" type="button" role="button" class="select__head">Select</button>
    <ul class="select__list" style="display: none;">
        <li class="select__item">Select item 1</li>
    </ul>
</div>
```
* Spoilers
```html

 <div class="spoiler_group">
    <button class="spoiler">
        Lorem, ipsum.
    </button>
    <div class="spoiler_hidden">
        ...
    </div>
</div>
```
* Accordions update
```html
<ul id="my-accordion" class="accordionjs">
    <li>
        <div> Accordion Title</div>
        <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nobis?
        </div>
    </li>
</ul>
```
* Carousel update
```html
<div class="carousel owl-carousel">
    <div> ... </div>
</div>
```


### 4.6.4.1 fix 
### Features
* minimal fixes
* added container after mont
* added cfroms
## Some featurs

```html
<div class="container-bottom"> <!-- This is search form-->
    <label for="DefaultForm2">
        Form search
    </label>
    <input id="DefaultForm2" type="search" placeholder="Search form" class="cform br0 ">
    <button class="btn primary br0 cform">Search</button>
</div>
```

```html
<div container=""> <!-- main container -->
    <div aside=""> <!-- aside container -->


    </div>
    <div main=""> <!-- main container --> <!-- when aside == false , main gets 100% width-->


    </div>
</div>
```

## 4.6.4 update 
### Features
* Added container for notify's
* Added close-button for all elems
* Added re-log system

## Some featurs

```html
<div je-nc="rb"></div> <!-- for create container-->
```
```html
<div id="CLOSE" class="notify {warning or primary or danger or success}">
        <div class="header">
            <h1>TITLE</h1>
            <button close="#CLOSE" class="btn primary">CLOSE</button>
        </div>
    <p>TEXT</p>
</div>
```
How it works? The simple js code added , for include the button and add module remove

```javascript
const item = document.querySelectorAll(item);
    item.forEach((this) => {
        this.addEventListener('click', () => {
            let item2 = this.getAttribute('close');
            let item3 = document.querySelector(item2);
            item3.remove();
        });
    });
```
#### 4.6.3 g.update


#### forward features

* rename work
* removed jquery and all frameworks
* new styles in old ideas

#### How to connect

# jsdelivr
#### Stylesheet
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gigorgu/jeux-ui/jeui/jeui.min.css" >
```
#### Javascript
```html
<script src="https://cdn.jsdelivr.net/gh/gigorgu/jeux-ui/jeui/jeui.min.js"></script>
```

# Source Code
#### Stylesheet
```html
<link rel="stylesheet" href="$$/jeui/jeui.min.css" >
```
#### Javascript
```html
<script src="$$/jeui/jeui.min.js"></script>
```


