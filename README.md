# html-layers

### HTML
```html
<div class="layers-container">
    
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
    
    <!-- ... -->
  
</div>
```

#### Optional modifiers:

**`.layer`**
- `.layer--loading`: show inner `.layer-overlay--loading`
- `.layer--noheader`: hide inner `.layer-header`
- `.layer--nofooter`: hide inner `.layer-footer`
- `.layer--noscroll`: prevent inner `.layer-body` scroll

**`.layer-overlay`**
- `.layer-overlay--visible`: show current overlay
- `.layer-overlay--loading`: add loading cursor
- `.layer-overlay--black`: set black overlay style (default)
- `.layer-overlay--white`: set white overlay style

### CSS
```css
.layers-container,
.layer,
.layer .layer-header,
.layer .layer-body,
.layer .layer-content,
.layer .layer-footer,
.layer .layer-overlay { box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; }

.layers-container { display: block; width: 100vw; height: 100vh; position: relative; overflow: hidden; }
.layers-container .layers-container { display: none !important; }

.layer { display: block; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; overflow: hidden; }
.layer .layer { display: none !important; }

.layer.layer--loading .layer-header,
.layer.layer--loading .layer-footer,
.layer.layer--loading .layer-body { pointer-events: none; }
.layer.layer--loading .layer-overlay.layer-overlay--loading { display: block; }

.layer.layer--noheader .layer-header,
.layer.layer--nofooter .layer-footer { display: none; }
.layer.layer--noscroll .layer-body { overflow-y: hidden; }

.layer .layer-header { display: block; width: 100%; height: auto; position: absolute; z-index: 1; top: 0; left: 0; right: 0; overflow: hidden; }
.layer .layer-footer { display: block; width: 100%; height: auto; position: absolute; z-index: 2; bottom: 0; left: 0; right: 0; overflow: hidden; }
.layer .layer-body { display: block; width: 100%; height: 100%; }
.layer .layer-body .layer-content { display: block; width: 100%; height: 100%; position: relative; overflow-x: hidden; overflow-y: auto; }
.layer .layer-overlay { display: none; width: 100%; height: 100%; position: absolute; z-index: 3; top: 0; left: 0; bottom: 0; right: 0; overflow: hidden; }
.layer .layer-overlay,
.layer .layer-overlay.layer-overlay--black { background-color: rgba(0, 0, 0, 0.6); color:#FFFFFF; }
.layer .layer-overlay.layer-overlay--white { background-color: rgba(255, 255, 255, 0.8); color:#000000; }
.layer .layer-overlay.layer-overlay--loading { cursor: wait; }
.layer .layer-overlay.layer-overlay--visible { display: block; }
```
