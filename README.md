# jeux-ui
[download 4.6.3](https://github.com/Gigorgu/jeux-ui/releases/tag/jeux)

## 4.6.4 update 
### Features
* Added container for notify's
* Added close-button for all elems
* Added re-log system

## Mini documentation
#### Mini documentation
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


