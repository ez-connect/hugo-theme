---
title: Markdown syntax
weight: 1
createdBy: thanh.vinh@hotmail.com
createdAt: '2022-01-27T15:31:12.352Z'
updatedBy: trong@hotmail.com
updatedAt: '2022-01-27T15:47:35.338Z'
---

## Basic Syntax

```md
# Heading
## Heading 2
### Heading 3
```

# Heading

## Heading 2

### Heading 3

### Text

```md
**Bold text** _italicized text_
```

**Bold text** _italicized text_

### Blockquote

```md
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

```md
> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.
```

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

### Ordered List

```md
1. First item
2. Second item
3. Third item
```

1. First item
2. Second item
3. Third item

### Unordered List

```md
- First item
- Second item
- Third item
```

- First item
- Second item
- Third item

### Code

```md
`code-example`
```

`code-example`

### Horizontal Rule

```md
---
```

---

### Link

```md
[Home page](https://hugo-theme.ez-connect.net)
[GitHub](https://github.com/ez-connect/hugo-theme)
```

[Home page](https://hugo-theme.ez-connect.net)
[GitHub](https://github.com/ez-connect/hugo-theme)

### Image

```md
![](/uploads/logo.svg)
![alt text](/uploads/logo.svg)
```

![alt text](/uploads/logo.svg)

## Extended Syntax

### Table

```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |
```

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

### Fenced Code Block

~~~
```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```
~~~

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

~~~
```python
s = "Python syntax highlighting"
print s
```

~~~

```python
s = "Python syntax highlighting"
print s
```

~~~
```
No language indicated, so no syntax highlighting.
```
~~~


```
No language indicated, so no syntax highlighting.
```

### Footnote

```md
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Definition List

```md
term
: definition
```

term
: definition

### Strikethrough

~~~
~~The world is flat.~~
~~~

~~The world is flat.~~

### Task List

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
