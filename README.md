steps to reproduce:

1. `$ emacs -Q`
2. `(require 'tree-sitter)`
3. `(require 'tree-sitter-langs)`
4. `(require 'typescript-mode)`
5. open src/index.tsx
6. `M-x typescript-mode`
7. `M-x tree-sitter-mode`
8. `M-x tree-sitter-hl-mode`

expected behavior:

`M-x describe-face` should report the same thing for both opening and closing JSX tags

actual behavior:

opening tags use `punctuation.bracket` and `type`; closing tags use `operator` and `string.special`
