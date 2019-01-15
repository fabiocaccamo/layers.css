# layers.css

## Features
- Each layers-container is independent, it has its own header, scrollable content, footer and overlay
- Scrolling layer's content doesn't affect layers below
- Layers are stacked by default, optionally displayed inline and paginated horizontally
- Nestable structure: each layer's content may contain another layers-container
- Possibility to lock scroll bounce on iOS devices

## Usage

#### HTML/CSS
```html
<link href="css/layers.css" rel="stylesheet">
```

#### SASS

###### Import
```scss
@import "layers";
```

###### Mixins

- **layer-resize**
Resize layer's header, content and footer using the given arguments.
Very useful, especially in media queries.

*Usage:*
```scss
.layer--custom {
    @include layer-resize($header-height, $header-transparent, $footer-height, $footer-transparent);
}
```

- **layers-resize**
Similar to `layer-resize`, with the difference that this works at `layers-container` level and affect all its direct sub-layers.
Resize layer header, content and footer using the given arguments.
Very useful, especially in media queries.

*Usage:*
```scss
.layers-container--custom {
    @include layers-resize($header-height, $header-transparent, $footer-height, $footer-transparent);
}
```

- **layers-resize-modifiers**
Generate a matrix of layer modifiers to resize layers using classes.

*Usage:*
```scss
$header-heights: 50 100;
$footer-heights: 50 100;

@include layers-resize-presets($header-heights, $footer-heights);
```

#### HTML

```html
<div class="layers-container">

    <div class="layers-wrapper">

        <div class="layer">

            <div class="layer-header">
                <!-- Header -->
            </div>

            <div class="layer-body">
                <div class="layer-content">
                    <!-- Content -->
                </div>
            </div>

            <div class="layer-footer">
                <!-- Footer -->
            </div>

            <div class="layer-overlay">
                <!-- Overlay -->
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
- `.layer--footer-height-{...}`: set footer height, content will automatically adapt to footer height *(modifiers must be generated using `layers-resize-modifiers` mixin)*.
- `.layer--footer-translucent`: content will be visible under the footer on scroll and will be automatically padded by footer height
- `.layer--header-height-{...}`: set header height, content will automatically adapt to footer height *(modifiers must be generated using `layers-resize-modifiers` mixin)*.
- `.layer--header-translucent`: content will be visible under the header on scroll and will be automatically padded by header height
- `.layer--hidden`: hide layer
- `.layer--loading`: show inner `.layer-overlay--loading`
- `.layer--noheader`: hide inner `.layer-header`
- `.layer--nofooter`: hide inner `.layer-footer`
- `.layer--noscroll`: prevent inner content scroll

**`.layer-content`**
- `.layer-content--hidden`: hide element

**`.layer-overlay`**
- `.layer-overlay--dark`: set dark overlay style
- `.layer-overlay--light`: set light overlay style
- `.layer-overlay--visible`: show current overlay
- `.layer-overlay--loading`: add loading cursor

---

## License
Released under [MIT License](LICENSE.txt).