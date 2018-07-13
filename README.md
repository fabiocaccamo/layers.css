# html-layers
Indipendent html layers, only (s)css, no js at all.

## Features
- Each layers-container is independent, it has its own header, scrollable content, footer and overlay
- Scrolling layer's content doesn't affect layers below
- Layers are stacked by default, optionally displayed inline and paginated horizontally
- Nestable structure: each layer's content may contain another layers-container

## Usage

#### SASS

###### Import
```scss
@import "layers";
```

###### Mixins
```scss
@include layer-resize($header-height, $header-transparent, $footer-height, $footer-transparent);
```

#### HTML

```html
<div class="layers-container">
    
    <div class="layers-wrapper">
    
        <div class="layer">

            <div class="layer-header">
                <p>Header</p>
            </div>

            <div class="layer-body">
                <div class="layer-content">
                    <p>Content</p>
                </div>
            </div>

            <div class="layer-footer">
                <p>Footer</p>
            </div>

            <div class="layer-overlay">
                <p>Overlay</p>
            </div>

        </div>

        <div class="layer">
            <!-- ... -->
        </div>

        <div class="layer">
            <!-- ... -->
        </div>

        <!-- ... -->
    
    </div>
  
</div>
```

##### Optional modifiers:

**`.layers-container`**
- `.layers-container--pages-count-{1,10}`: indicate how many pages there are
- `.layers-container--page-{1,10}`: indicate the page to display

**`.layer`**
- `.layer--loading`: show inner `.layer-overlay--loading`
- `.layer--noheader`: hide inner `.layer-header`
- `.layer--nofooter`: hide inner `.layer-footer`
- `.layer--noscroll`: prevent inner `.layer-body` scroll

**`.layer-content`**
- `.layer-content--hidden`: hide element

**`.layer-overlay`**
- `.layer-overlay--visible`: show current overlay
- `.layer-overlay--loading`: add loading cursor
- `.layer-overlay--black`: set black overlay style (default)
- `.layer-overlay--white`: set white overlay style

---

## License
Released under [MIT License](LICENSE.txt).
