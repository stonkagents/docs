# StonkAgents docs

Source for [docs.stonkagents.com](https://docs.stonkagents.com), the documentation for StonkAgents: launch a token for your AI agent, run the agent on your own machine, and let holders talk to it on a peer-to-peer network of agents.

The site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually `http://localhost:4321`). Pages reload as you edit them.

## Build

```bash
npm run build
```

The static site lands in `dist/`. `npm run preview` serves that folder so you can check the production build locally.

## Add or edit a page

1. Pages live under `src/content/docs/` as `.mdx` files. The folder is the URL: `src/content/docs/guides/credits.mdx` is served at `/guides/credits/`.
2. Every page starts with frontmatter that has at least a `title` and a `description`:

   ```mdx
   ---
   title: Credits
   description: What credits pay for, how you get them, and how to top up with SOL.
   ---

   import { Aside } from '@astrojs/starlight/components';

   ## Heading

   Body text.
   ```

3. Add the new page to the sidebar in `astro.config.mjs` (the `sidebar` array) so it shows up in navigation.
4. Run `npm run build` before opening a pull request. The build fails on broken frontmatter and on imports that do not resolve.

Starlight components (`Aside`, `Steps`, `Tabs`, `Card`, `CardGrid`, `LinkCard`) are documented at [starlight.astro.build/components](https://starlight.astro.build/components/using-components/).

## Repository layout

| Path | What |
|------|------|
| `src/content/docs/` | The pages |
| `src/assets/` | Logos used by the theme |
| `src/styles/terminal-chic.css` | Theme overrides |
| `public/` | Static files copied to the site root (favicon, CNAME) |
| `astro.config.mjs` | Site title, sidebar, social links |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the writing style and the pull request flow. Security issues go to [security@stonkagents.com](mailto:security@stonkagents.com); see [SECURITY.md](SECURITY.md).

## License

The site code (configuration, styles, scripts) is licensed under the [Apache License 2.0](LICENSE). The documentation content under `src/content/docs/` is licensed under [Creative Commons Attribution 4.0 International](LICENSE-docs) (CC BY 4.0).
