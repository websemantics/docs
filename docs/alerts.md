---
title: Alerts
layout: docs
group: components
---


Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default

Flash messages start off looking decently neutral—they're just light blue rounded rectangles.

<code>
<div class="message">
  Flash message goes here.
</div>
</code>

You can put multiple paragraphs of text in a flash message—the last paragraph's bottom `margin` will be automatically override.

<code>
<div class="message">
  <p>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</p>
  <p>And this is another paragraph.</p>
</div>
</code>

## Variations

Add `.warning` or `.danger` to the flash message to make it yellow or red, respectively.

<code class="highlight">
<div class="message warning">
  Flash message goes here.
</div>
</code>

<code>
<div class="message danger">
  Flash message goes here.
</div>
</code>

## With icon

Add an icon to the left of the flash message to give it some funky fresh attention. Just add `.with-icon` and your Octicon.

<code>
<div class="message info">
  <span class="octicon octicon-alert"></span>
  Flash message with an icon goes here.
</div>
</code>