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

## Input field
- Keyboard: A - Z
- Keyboard: 1 - 9
- Keyboard: CTRL, ALT, TAB, SHIFT, CMD, SPACE, ENTER, BACKSPACE
- Mouse: LEFT, RIGHT, BOTH, WHEEL

## Important
- You cannot define multiple hotkeys-functions with the same hotkeys (only the last one will be activated);
- We check for AB not for BA (sometimes trought the pressure it will be BA).

## Todo
- HotkeysHtml

## Credits
Copyright © 2016 Timothy Verhaeghe <<timothy@taglayer.com>>
