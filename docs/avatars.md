---
title: Avatars
layout: docs
group: components
---

Avatars are images that users can set as their profile picture. On GitHub, they're always going to be rounded squares. They can be custom photos, uploaded by users, or generated as Identicons as a placeholder.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example

Add `.avatar` to any `<img>` element to make it an avatar. This resets some key styles for alignment, address a Firefox image placeholder bug, and rounds the corners.

Be sure to set `width` and `height` attributes for maximum browser performance.

<code>
<img class="avatar" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=144" width="72" height="72">
</code>

## Small avatars

We occasionally use smaller avatars. Anything less than `48px` wide should include the `.avatar-small` modifier class to reset the `border-radius` to a more appropriate level.

<code>
<img class="avatar avatar-small" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=64" width="32" height="32">
</code>

## Parent-child avatars

When you need a larger parent avatar, and a smaller child one, overlaid slightly, use the parent-child classes.

<code>
<div class="avatar-parent-child left">
  <img class="avatar" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=96" width="48" height="48">
  <img class="avatar avatar-child" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=40" width="20" height="20">
</div>
</code>
