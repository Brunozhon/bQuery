# bQuery

Units:
- [Why bQuery](#why-bquery)
- [bQuery element varibles](#bquery-element-varibles)
## Why bQuery

bQuery is designed to have a "nested" design.

bQuery example:

```html
<script src="https://brunozhon.github.io/bQuery/bQuery.js"></script>
<script>
  bQuery.ready(document, function() {
    bQuery.on(bQuery.$('[example="bQuery"]'), "click", function() {
      alert("This is bQuery content")
    });
  });
</script>
```

jQuery example

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
  $(document).ready(function() {
    $('[example="jQuery"]').click(function() {
      alert('Why do I have to put $("") before any property? This is to hard...') // To hard to write starting point
    });
  });
</script>
```

## bQuery element varibles

bQuery:

```html
<script src="https://brunozhon.github.io/bQuery/bQuery.js"></script>
<script>
  bQuery.ready(document, function() {
    var elem = bQuery.$(".myElem")
    bQuery.on(elem, "load", function() {
      alert("This element will become hidden")
    });
    bQuery.css(elem, {name: "display", value: "none"})
  });
</script>
```

jQuery:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
  $(document).ready(function() {
    $(".myElem").on("load", function() {
      alert("This element wirjwerujur3uoiwruirehhugvehueri9p42ufrhgr") // To hard to write starting point
    });
    $(".myeeElem").css("none", "diswhatisthisboxfor") // Invalid value and property
  });
</script>
```

## bQuery short for `bQuery.ready(document, function() {})`

bQuery:

```html
<script src="https://brunozhon.github.io/bQuery/bQuery.js"></script>
<script>
  bQuery.load(function() {
    // Actions go here
  });
</script>
```

jQuery (this method is easier, but more harder to understand):

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
  $(function() {
    // Actions go here
  });
</script>
```
