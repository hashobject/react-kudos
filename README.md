react-kudos
===========


## Installation

If you use webpack just install react-kudos module

```
  npm install react-kudos
```

and require it anywhere in your react app:

```
  var Kudos = require('react-kudos');
```

## Firebase security rules

Add following firebase security rules if you want to prevent users from arbitrary changing vote results.
We allow incremental vote submissions:


```
{
    "rules": {
        ".read": true,
        "$counter": {
          ".write": "!root.child($counter).exists() || ((newData.val() - data.val()) === 1)"
        }
    }
}
```

