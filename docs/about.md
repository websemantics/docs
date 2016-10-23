---
title: About
layout: default
---

```diagram
Note left of A: Note to the\n left of A
Note right of A: Note to the\n right of A
Note over A: Note over A
Note over A,B: Note over both A and B
```


 <div><textarea id="code" style="width: 100%;" rows="11">
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
        </textarea></div>

        
```bash
#!/bin/bash
set -e # Exit on failure
# bash script here!
```

```php
namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
```

Learn more about this styleguide, particularly how it’s built and who maintains it.

## What and why

Brimer is a CSS Framework built after [Primer](http://primercss.io), GitHub’s internal CSS framework. The idea is to have a cake and eat it too by combining Github attractive clean style and Bootstrap extensive feature list.

## Browser support

Brimer currently supports all the stuff Bootstrap supports

## Future updates

There will be a roadmap that outlines what's comming for future versions of Brimer, promise.

## Dependencies

- Bootstrap, obviously.
- Styles are built with SCSS.
- NPM is used to link with Bootstrap SCSS.
- Bower is used to link GitHub assets, namely our Octicons icon font and Markdown styles.

## Who

Currently maintained by [@websemantics](https://github.com/websemantics), and Web Semantics, Inc, CSS team.
