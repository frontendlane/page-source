# Source Playground
*View/Edit/Share Page Source*

Front-end code playground inspired by my recurring need to quickly test something out in a pristine environment i.e. new tab.

- Supports HTML, CSS, JavaScript
- Private by design
- Easy to share with others
- Opens in an instant
- No tracking
- No account to manage

## Notes
- javascript gets executed after html

## Todos
- confirm doctype declaration doesn't contain double white spaces ~53:17
- properly preserve new lines in css ~59:17
- extract clipboardCopy to a separate repo, paste minified version, and cite the source ~8:13
- one global variable!!
    - get rid of id attributes
- make bookmarklet out of copyPage, add it to the bookmarklet repo, replace #button with `<a>`, and cite the source ~50:13
    - CMD/Control + S should `.click()` the `<a>` ~77:59
- find better way to print objects ~73:43
- add four spaces on TAB
- semanticize
    - replace div with output?? samp??~72:64
    - replace #consol::after with button
- reverse ::before and ::after so ::after's longer content can push the main content below
- find a way to make URL saving hint accessible: aria-live?? ~155:26
- test cross browser compatibility: chrome, safari, windows
- add support for dark theme
- simplify and optimize css
- package as extension that opens it on click and/or on new tab

## Known Bugs
- URL copying doesn't work if any of the following are used
    - `”`
    - `“`
    - `&ldquo;`
    - `&rdquo;`