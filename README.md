react-kudos
===========


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

