# Hotkeys
Lightweight hotkeys javascript

## The Idea
- HotkeysHtml (div, set: tags:"" src="")

## Get started
```js
<script src="hotkeys/hotkeys.js"></script>

<!-- use Javascript -->
<script type="text/javascript">
hotkeys("ctrl+u", function(){
  // the user clicked on ctrl + u (source code)
  console.log("You've used our shortkey!");
});
</script>
```

## Predefined functions
- sourceCode(callback) => if someone opens the sourcecode (in browser)

## Important
- You cannot define multiple hotkeys-functions with the same hotkeys (only the last one will be activated);

## Todo
- HotkeysHtml

## Credits
Copyright © 2016 Timothy Verhaeghe <<timothy@taglayer.com>>
