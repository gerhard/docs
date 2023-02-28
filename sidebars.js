/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "doc",
      label: "Overview",
      id: "overview",
    },
    {
      type: "doc",
      label: "Demo",
      id: "demo",
    },
    {
      type: "category",
      label: "Parca",
      items: [
        "parca",
        "ingestion",
        "storage",
        "symbolization",
        "debuginfod",
        {
          type: "link",
          label: "gRPC APIs",
          href: "https://buf.build/parca-dev/parca",
        },
        "observability",
        "configuration",
        {
          type: "category",
          label: "Profile Visualization",
          items: [
            {
              type: "category",
              label: "Flamegraph",
              items: ["flamegraph-binary-based-colour-stack"],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Parca Agent",
      items: [
        "parca-agent",
        "parca-agent-design",
        "parca-agent-labelling",
        "parca-agent-language-support",
        "parca-agent-security",
      ],
    },
    {
      type: "doc",
      label: "Debuginfo CLI",
      id: "debuginfo-cli",
    },
    {
      type: "doc",
      label: "Concepts",
      id: "concepts",
    },
    {
      type: "category",
      label: "Grafana Plugin",
      items: ["grafana-flamegraph-plugin", "grafana-datasource-plugin"],
    },
    {
      type: "doc",
      label: "FAQ",
      id: "faq",
    },
    {
      type: "doc",
      label: "Governance",
      id: "governance",
    },
    {
      type: "doc",
      label: "Community",
      id: "community",
    },
    {
      type: "category",
      label: "Tutorial",
      items: [
        {
          type: "category",
          label: "Running Parca",
          items: ["binary", "snap", "agent-binary", "systemd"],
        },
        {
          type: "category",
          label: "Deploying Parca",
          items: ["kubernetes", "openshift"],
        },
        "querying-parca",
        "filter-by-function",
        "troubleshooting-parca-agent",
        {
          type: "category",
          label: "Profiling 101",
          items: ["profiling-101", "instrumenting-go"],
        },
      ],
    },
  ],
};
