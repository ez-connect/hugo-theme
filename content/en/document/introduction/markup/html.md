---
title: Html
weight: 2
createdBy: thanh.vinh@hotmail.com
createdAt: 2022-07-08T15:20:45.000Z
updatedBy: thanh.vinh@hotmail.com
updatedAt: 2022-07-08T15:20:45.000Z
---

Wrap HTML content within `safehtml` code block.

~~~
```safehtml
HTML content
```
~~~

## Collapse

```md
<details>
  <summary>Simple collapsible</summary>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</details>
```

```safehtml
<details>
  <summary>Simple collapsible</summary>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</details>
```

## Tabs

```md
<div class="tab" data-index="0">
  <button class="active" data-id="tab1" data-target="tabTab1">Tab #1</button>
  <button data-id="tab2" data-target="tabTab2">Tab #2</button>
</div>

<div id="tabTab1">
  <p>Tab #1 content</p>
</div>

<div id="tabTab2" class="hide">
  <p>Tab #2 content</p>
</div>
```

```safehtml
<div class="tab" data-index="0">
  <button class="active" data-id="tab1" data-target="tabTab1">Tab #1</button>
  <button data-id="tab2" data-target="tabTab2">Tab #2</button>
</div>

<div id="tabTab1">
  <p>Tab #1 content</p>
</div>

<div id="tabTab2" class="hide">
  <p>Tab #2 content</p>
</div>
```


## Form & JS

```md
<form id="exampleForm">
  First name: <input type="text" name="first_name" placeholder="First name" />
  <p></p>
  Last name: <input type="text" name="last_name" placeholder="Last name" />
  <p></p>
  <textarea style="width: 100%;" name="description" placeholder="Description"></textarea>
  <p></p>
  <button type="submit">Submit</button>
</form>

<script>
  function submit () {
    const form = document.getElementById('exampleForm');
    console.assert(form != null);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Submiting...');
      return false;
    });
  };

  submit();
</script>
```

```safehtml
<form id="exampleForm">
  First name: <input type="text" name="first_name" placeholder="First name" />
  <p></p>
  Last name: <input type="text" name="last_name" placeholder="Last name" />
  <p></p>
  <textarea style="width: 100%;" name="description" placeholder="Description"></textarea>
  <p></p>
  <button type="submit">Submit</button>
</form>

<script>
  function submit () {
    const form = document.getElementById('exampleForm');
    console.assert(form != null);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Submiting...');
      return false;
    });
  };

  submit();
</script>
```
