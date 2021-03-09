steps to reproduce:

1. `$ emacs -Q`
2. load `tree-sitter`, `tree-sitter-langs`, and `typescript-mode`
3. open src/index.tsx
4. enable `typescript-mode`, `tree-sitter-mode`, and `tree-sitter-hl-mode`
5. place point on an opening or closing JSX tag

expected behavior:

`M-x describe-face` should report the same thing for both opening and closing JSX tags

actual behavior:

opening tags use `punctuation.bracket` and `type`; closing tags use `operator` and `string.special`
