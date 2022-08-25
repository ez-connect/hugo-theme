---
title: Markdown syntax
description: Markdown is intended to be as easy-to-read and easy-to-write as is feasible.
weight: 1
createdBy: thanh.vinh@hotmail.com
createdAt: '2022-01-27T15:31:12.352Z'
updatedBy: trong@hotmail.com
updatedAt: '2022-01-27T15:47:35.338Z'
publishedAt: '2022-01-27T15:35:52.331Z'
---

## Basic Syntax

`# Heading ## Heading 2 ### Heading 3`

# Heading

## Heading 2

### Heading 3

### Text

**Bold text** _italicized text_

### Blockquote

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code-example`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Image

![alt text](/avatar.png)

## Extended Syntax

### Table

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

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
