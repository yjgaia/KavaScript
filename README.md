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
var Animal = class() {

	pub bark = (sound) {
		alert(sound);
	};
};

var Man = class(firstName, lastName, age) extend Animal() {
	
	// private
	var name = firstName + ' ' + lastName;
    
    // protected
    pro introduce = () {
    	console.log('My name is ${name}, I\'m ${age} years old.');
    };
    
    // public
    pub talk = (message) {
    	bark(message);
    }
};

var John = class() extend Man('John', 'Smith', 24) {

	// my name is John Smith, I'm 24 years old.
	introduce();
};

var john = new John();
john.talk('Hello, I\'m John!');
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