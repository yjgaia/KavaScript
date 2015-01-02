# KavaScript
KavaScript is superset of JavaScript.

### Multi-line Text
```javascript
var multiline = 'This\nis\nmulti-line\ntext.';
```
```kavascript
var multiline = 'This
is
multi-line
text.';
```

### Callback Hell
```javascript
var x = function() {

	get(function(data) {
    
		find({
			name : data.name
		}, function(result) {
			...
		});
        
        find({
			age : data.age
		}, function(result) {
			...
		});
	});
};
```
```kavascript
var x = function() {

	var data = get(<-);
    
    var result = find({
        name : data.name
    }, <-);
    ...
    ---
    
    result = find({
        age : data.age
    }, <-);
    ...
    ---
};
```

### OOP
```javascript
prototype based oop.
```
```kavascript
var Class = class {
	private var firstName = 'Bob';
	private var lastName = 'Doe';
    
    public var talk = (message) {
    	...
    }
};
```

### function
```javascript
var f = function(a, b, c) {
	...
};
```
```kavascript
var f = (a, b, c) {
	...
};
```