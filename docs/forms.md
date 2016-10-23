---
title: Forms
layout: docs
group: components
---

Style individual form controls and utilize common layouts.

<div class="flash">
  <strong>Heads up!</strong> Forms need some reworking to clean up the specificity and required markup. We'll get to that soon!
</div>

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Overview

- We reset several elements' default styles for cross browser consistency and easier manipulation later. This includes `<fieldset>`s, WebKit validation bubbles, and most textual `<input>`s.
- Specific types of textual `<input>`s are styled automatically, but `.form-control` is available should you need it.
- Always declare a `type` on your `<button>`s.
- Form layouts rely on form groups.

## Example form

Form controls in Primer currently have no basic layout specified (this is by design). You'll need to use `<fieldset>`s, `<div>`s, or other elements and styles to rearrange them.

<code>
<form>
  <label for="name">Name</label>
  <input class="form-control" type="text" id="name">

  <label for="email">Email address</label>
  <input class="form-control" type="email" id="email">

  <label>
    <input type="checkbox"> Remember me
  </label>

  <label>
    <input type="radio" id="herp" name="herpderp" checked> Herp
  </label>
  <label>
    <input type="radio" id="derp" name="herpderp"> Derp
  </label>

  <button class="btn" type="submit">Submit</button>
</form>
</code>

## Form contrast

Textual form controls have a white background by default. You can change this to a light gray with `.input-contrast`.

<code>
<form>
  <input class="form-control" type="text" placeholder="Default input">
  <input class="form-control input-contrast" type="text" placeholder="Input with contrast">
</form>
</code>

## Sizing

Make inputs smaller, larger, or full-width with an additional class.

### Small

<code>
<form>
  <input class="form-control input-sm" type="text" placeholder="Small input">
</form>
</code>

### Large

<code>
<form>
  <input class="form-control input-lg" type="text" placeholder="Large input">
</form>
</code>

### Block

<code>
<form>
  <input class="form-control input-block" type="text" placeholder="Full-width input">
</form>
</code>

## Selects

Primer adds light `height` and `vertical-align` styles to `<select>`s for all browsers to render them consistently with textual inputs.

<code>
<form>
  <select class="form-select">
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
    <option>Social Coding</option>
    <option>Beets</option>
    <option>Bears</option>
    <option>Battlestar Galactica</option>
  </select>
</form>
</code>

### Small

Use the `.select-sm` class to resize both default and custom `<select>`s to match the size of [our small buttons](/buttons/#default-buttons).

<code>
<select class="form-select select-sm">
  <option>Choose an option</option>
  <option>Git</option>
  <option>Subversion</option>
  <option>Social Coding</option>
  <option>Beets</option>
  <option>Bears</option>
  <option>Battlestar Galactica</option>
</select>

<select class="form-select select-sm">
  <option>Choose an option</option>
  <option>Git</option>
  <option>Subversion</option>
  <option>Social Coding</option>
  <option>Beets</option>
  <option>Bears</option>
  <option>Battlestar Galactica</option>
</select>
</code>

## Form groups

<code>
<form>
  <dl class="form-group">
    <dt><label>Example Text</label></dt>
    <dd><input class="form-control" type="text" value="Example Value"></dd>
  </dl>

  <dl class="form-group">
    <dt><label>Example Select</label></dt>
    <dd>
      <select class="form-select">
        <option>Choose an option</option>
        <option>Git</option>
        <option>Subversion</option>
        <option>Social Coding</option>
        <option>Beets</option>
        <option>Bears</option>
        <option>Battlestar Galactica</option>
      </select>
    </dd>
  </dl>

  <dl class="form-group">
    <dt><label>Example Textarea</label></dt>
    <dd>
      <textarea class="form-control"></textarea>
    </dd>
  </dl>
</form>
</code>

## Form group validation

Convey errors and warnings for form groups. Add the appropriate class—either `.errored` or `.warn`—to the `<dl class="form-group">` to start. Then, house your error messaging in an additional `<dd>` with either `.error` or `.warning`.

<code>
<form>
  <dl class="form-group errored">
    <dt><label>Example Text</label></dt>
    <dd><input class="form-control" type="text" value="Example Value"></dd>
    <dd class="error">This example input has an error.</dd>
  </dl>
  <br>
  <dl class="form-group warn">
    <dt><label>Example Text</label></dt>
    <dd><input class="form-control" type="text" value="Example Value"></dd>
    <dd class="warning">This example input has a warning.</dd>
  </dl>
</form>
</code>

## Checkboxes and radios

Utilities to spice up the alignment and styling of checkbox and radio controls.

<code>
<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked">
      Available for hire
    </label>
    <p class="note">
      This will do insanely <strong>awesome</strong> and <strong>amazing</strong> things!
    </p>
  </div>
</form>
</code>

You may also add emphasis to the label:

<code>
<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked">
      <em class="highlight">Available for hire</em>
    </label>
  </div>
</form>
</code>

## Input group

Attached an input and button to one another.

<code>
<form>
  <div class="input-group">
    <input class="form-control" type="text" placeholder="Username">
    <span class="input-group-button">
      <button class="btn">
        <span class="octicon octicon-clippy"></span>
      </button>
    </span>
  </div>
</form>
</code>

## Form actions

Align buttons to the right—via `float: right` on the buttons—in forms with `.form-actions`. The floats are automatically cleared for you.

<code>
<div class="form-actions">
  <button type="button" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn">Cancel</button>
</div>
</code>
