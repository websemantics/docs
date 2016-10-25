---
title: About
layout: default
---

```diagram
participant C
participant B
participant A
Note right of A: By listing the participants\n you can change their order
```

```chart
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...

st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
```


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

{% highlight java %}
public class ByteBuddyAgent {

    /**
     * An indicator variable to express that no instrumentation is available.
     */
    private static final Instrumentation UNAVAILABLE = null;

    /**
     * The agent provides only {@code static} utility methods and should not be instantiated.
     */
    private ByteBuddyAgent() {
        throw new UnsupportedOperationException();
    }

    /**
     * <p>
     * Looks up the {@link java.lang.instrument.Instrumentation} instance of an installed Byte Buddy agent. Note that
     * this method implies reflective lookup and reflective invocation such that the returned value should be cached
     * rather than calling this method several times.
     * </p>
     * <p>
     * <b>Note</b>: This method throws an {@link java.lang.IllegalStateException} If the Byte Buddy agent is not
     * properly installed.
     * </p>
     *
     * @return The {@link java.lang.instrument.Instrumentation} instance which is provided by an installed
     * Byte Buddy agent.
     */
    public static Instrumentation getInstrumentation() {
        Instrumentation instrumentation = doGetInstrumentation();
        if (instrumentation == null) {
            throw new IllegalStateException("The Byte Buddy agent is not initialized");
        }
        return instrumentation;
    }

    /**
     * Attaches the given agent Jar on the target process which must be a virtual machine process. The default attachment provider
     * is used for applying the attachment. This operation blocks until the attachment is complete. If the current VM does not supply
     * any known form of attachment to a remote VM, an {@link IllegalStateException} is thrown. The agent is not provided an argument.
     *
     * @param agentJar  The agent jar file.
     * @param processId The target process id.
     */
    public static void attach(File agentJar, String processId) {
        attach(agentJar, processId, WITHOUT_ARGUMENT);
    }

    /**
     * Attaches the given agent Jar on the target process which must be a virtual machine process. The default attachment provider
     * is used for applying the attachment. This operation blocks until the attachment is complete. If the current VM does not supply
     * any known form of attachment to a remote VM, an {@link IllegalStateException} is thrown.
     *
     * @param agentJar  The agent jar file.
     * @param processId The target process id.
     * @param argument  The argument to provide to the agent.
     */
    public static void attach(File agentJar, String processId, String argument) {
        attach(agentJar, processId, argument, AttachmentProvider.DEFAULT);
    }
}
{% endhighlight %}


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
