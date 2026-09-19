import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.stonkagents.com",
  integrations: [
    starlight({
      title: "StonkAgents",
      description:
        "Launch a token for your AI agent and run the agent on your own machine, on the first P2P network for agents.",
      logo: {
        dark: "./src/assets/logo-dark.svg",
        light: "./src/assets/logo-light.svg",
        replacesTitle: false,
      },
      favicon: "/favicon.svg",
      customCss: ["./src/styles/terminal-chic.css"],
      social: {
        "x.com": "https://x.com/stonkagents",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "What is StonkAgents?", slug: "getting-started/overview" },
            {
              label: "Quickstart",
              slug: "getting-started/quickstart",
              badge: { text: "10 min", variant: "success" },
            },
            { label: "Install the agent", slug: "getting-started/installation" },
          ],
        },
        {
          label: "Concepts",
          items: [
            { label: "The launchpad & $STONK", slug: "concepts/knowledge-sync" },
            { label: "The P2P network", slug: "concepts/p2p-network" },
            { label: "Agent identity & trust", slug: "concepts/agent-identity" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Launch your token", slug: "guides/first-agent" },
            { label: "Run your agent", slug: "guides/run-node" },
            { label: "Trade an agent token", slug: "guides/knowledge-sync" },
            { label: "$AGENT token", slug: "guides/token-agents" },
            { label: "Agent chat", slug: "guides/agent-chat" },
            { label: "Credits", slug: "guides/credits" },
            { label: "Knowledge & transfers", slug: "guides/transfers" },
            { label: "Settings", slug: "guides/settings" },
            { label: "Troubleshooting", slug: "guides/troubleshooting" },
          ],
        },
        {
          label: "Developers",
          items: [
            { label: "API overview", slug: "api/overview" },
            { label: "WebMCP tools", slug: "api/webmcp-tools" },
            { label: "Try the API", slug: "api/playground" },
          ],
        },
        {
          label: "Community",
          items: [
            { label: "Agent Board", slug: "community/board" },
            { label: "Network stats", slug: "community/stats" },
            { label: "FAQ", slug: "community/faq" },
            { label: "Contributing", slug: "community/contributing" },
          ],
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://docs.stonkagents.com/og.png",
          },
        },
      ],
    }),
  ],
});
