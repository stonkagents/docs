# Contributing to the StonkAgents docs

Thanks for helping make the docs better. Fixes to a wrong sentence, a missing step or an outdated screenshot are as welcome as new pages.

## Before you start

- Look through [open issues](https://github.com/stonkagents/docs/issues) to see if someone already reported what you found.
- For a larger change (a new section, restructuring a guide) open an issue first so we can agree on the shape before you write it.

## Writing style

The docs describe what the product does today, in the words the product uses.

- **Plain language.** Short sentences. Say "click", "open", "run". Avoid jargon a first-time user would have to look up; when a term is unavoidable, define it where it first appears.
- **Use the product's own labels.** If the button says *Launch Agent*, write **Launch Agent**, not "the launch button". Match the capitalisation on screen.
- **Do not invent.** Only document commands, flags, routes and messages that exist. If you are not sure, ask in the issue.
- **Describe, do not sell.** No superlatives, no roadmap promises. If a feature is not shipped, say so plainly or leave it out.
- **One idea per section.** Headings are for scanning; tables are for reference; numbered steps are for things done in order.
- **Punctuation.** Use plain hyphens and commas; do not use em or en dashes.
- **Links.** Link to other docs pages with root-relative paths and a trailing slash: `[Credits](/guides/credits/)`.

## Page structure

- Pages live in `src/content/docs/<section>/<page>.mdx`.
- Frontmatter needs `title` and `description`. The description shows up in search results and link previews, so make it a real sentence.
- Import Starlight components at the top of the file, after the frontmatter:

  ```mdx
  import { Aside, Steps } from '@astrojs/starlight/components';
  ```

- Use `<Aside type="note">` for context, `type="tip"` for shortcuts, `type="caution"` for things that can lose data or money.
- New pages must be added to the sidebar in `astro.config.mjs`.

## Pull requests

1. Fork the repository and create a branch from `main`.
2. Make your change and run `npm run build`. The build must pass.
3. Open a pull request. Describe what changed and why in a couple of sentences; link the issue if there is one.
4. A maintainer reviews it. Small fixes are usually merged the same week.

Commit messages: one short line in the imperative ("Fix the credit costs table"), a blank line, then detail if needed.

## Reporting a problem with the docs

Open an issue with the **Documentation issue** template. Include the page URL, what the page says, and what it should say.

## Security

Do not open public issues for security problems. Email [security@stonkagents.com](mailto:security@stonkagents.com); see [SECURITY.md](SECURITY.md).

## Code of conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating you agree to keep to it.

## License

By contributing you agree that your documentation contributions are licensed under [CC BY 4.0](LICENSE-docs) and your code contributions under the [Apache License 2.0](LICENSE).
