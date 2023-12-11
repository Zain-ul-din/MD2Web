# MarkDown to HTML

A simple compiler that converts markdown files to html.

<img
    src="./static/markdown-to-html-demo.jpg"
    alt="demo img"
    style="border-radius: 0.5rem;"
/>

## Usage

- create folder `markdowns` in root directory.
- create file `index.md` inside `markdowns`
- add following content for testing

```md
# Heading
## Heading 1
### Heading 3

**bold**
> quote
`code`
```

- install dependencies `npx yarn`
- run application `npx yarn dev`
- install `live server` extension in VS code and open html file (inside public folder) with live server.

# Intermediate Usage

### Add Meta tags

- To add title and description to page add following code on the top of markdown file

```.md
---
title: Operating System Notes
description: My Operating System Notes
---
```

# Advance Usage

## Add custom theme

By default, the `config.ts` file contains two themes. To add a new theme, follow these steps:

- Open `Config.d.ts` and include the theme name in the `Theme` type. For example, add `neon: CSSVariables`.

- Open `config.ts` and insert the CSS variables for the new theme using key-value pairs. Update the theme object as follows:

```typescript
    const theme: Theme = {
        ...
        neon: {
            ...
        }
    }
```

**Applying Theme**

- By default, theme is set to system preferences. to apply the new theme, include it in the markdown head section like this:

```md
---
...
theme: neon
---
```

-----------------
