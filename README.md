# html-layers
Pure HTML/CSS indipendent layers stack implementation.

## Usage

#### CSS
```html
<link rel="stylesheet" href="layers.css">
```

#### HTML
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
    
    <div class="layer">
        <!-- ... -->
    </div>
    
    <!-- ... -->
  
</div>
```

##### Optional modifiers:

**`.layers-container`**
- `.layers-container--inline`: display inner `.layer` inline instead of stacked *(requires .layer width customization)*

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

---

## License
Released under [MIT License](LICENSE.txt).
