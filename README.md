# KavaScript
KavaScript is superset of JavaScript.

### Multi-line Text
JavaScript
```javascript
var multiline = 'This\nis\nmulti-line\ntext.';
```
KavaScript
```kavascript
var multiline = 'This
is
multi-line
text.';
```

### Callback Hell
JavaScript
```javascript
get(function(data) {

	find({
		name : data.name
	}, function(result) {
		
		update({
			name : 'John'
		}, function(result) {
			...
		});
	});
    
    find({
		age : data.age
	}, function(result) {
		...
	});
});
```
KavaScript
```kavascript
var data = get(<-);

var result = find({
    name : data.name
}, <-);

update({
	name : 'John'
}, <-);
...
---
---

result = find({
    age : data.age
}, <-);
...
---
```

### OOP
JavaScript
```javascript
prototype based oop.
```
KavaScript
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
JavaScript
```javascript
var f = function(a, b, c) {
	...
};
```
KavaScript
```kavascript
var f = (a, b, c) {
	...
};
```