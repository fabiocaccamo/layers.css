# layers.css

## Features
- `layers` **are independent**, each one has its own header, body, footer and overlay
- `layers` **handles scroll perfectly**, when scrolling a layer, layers below are not scrolled
- `layers` **are stacked** by default, but **can be paginated horizontally or vertically**
- `layers` **can be nested**, each `.layer-content` may contain another `.layers-container`

## Installation
`npm install @fabiocaccamo/layers.css`

## Usage

#### HTML
```html
<div class="layers-container">
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
```

#### CSS import
If you aren't using `sass`, just include the `layers.css` in your html
```html
<link href="css/layers.css" rel="stylesheet" />
```

#### SASS import
```scss
@import "layers";
```

#### SASS/mixins
**`layer-resize`**

Resize layer header, content and footer automatically according to the given arguments.

Very useful, especially in media queries.

```scss
.layer--custom {
    @include layer-resize($header-height, $header-transparent, $footer-height, $footer-transparent);
}
```

**`layers-resize`**

Similar to `layer-resize`, with the difference that this must be included at `layers-container` level and affect all its direct child layers.

Resize layers header, content and footer automatically according to the given arguments.

Very useful, especially in media queries.

```scss
.layers-container--custom {
    @include layers-resize($header-height, $header-transparent, $footer-height, $footer-transparent);
}
```

#### Elements modifiers:

**`.layers-container`**
- `.layers-container--pages-horizontal`: layers will be displayed horizontally
- `.layers-container--pages-vertical`: layers will be displayed vertically
- `.layers-container--page-{1,10}`: set the page to display, pages will change with a transition
- `.layers-container--pages-notransition`: pages will change without transition

**`.layer`**
- `.layer--hidden`: hide element
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