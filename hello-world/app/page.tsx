const faqs = [
  {
    question: "What is Claude Code?",
    answer:
      "Claude Code is an agentic coding tool made by Anthropic that lives in your terminal. It understands your codebase and helps you code faster through natural language commands — editing files, fixing bugs, writing tests, and more.",
  },
  {
    question: "How do I install Claude Code?",
    answer:
      'Install Claude Code via npm: run "npm install -g @anthropic-ai/claude-code" in your terminal. You\'ll need Node.js 18+ and an Anthropic API key set as the ANTHROPIC_API_KEY environment variable.',
  },
  {
    question: "How do I use Claude Code in GitHub Actions?",
    answer:
      "Add the claude-code-action to your workflow YAML. It can respond to issue and PR comments that mention @claude, allowing Claude to review code, fix bugs, and open pull requests automatically.",
  },
  {
    question: "What can Claude Code do in GitHub?",
    answer:
      "Claude Code can read and edit files, run terminal commands, create commits and branches, open pull requests, and respond to review feedback — all triggered from issue or PR comments.",
  },
  {
    question: "What permissions does the GitHub Action need?",
    answer:
      "The action needs read access to repository contents and write access to pull requests and issues. You also need to provide an ANTHROPIC_API_KEY secret in your repository settings.",
  },
  {
    question: "What models does Claude Code use?",
    answer:
      "By default Claude Code uses Claude Sonnet, balancing capability and speed. You can configure it to use other Anthropic models such as Claude Opus for more complex tasks.",
  },
  {
    question: "How much does Claude Code cost?",
    answer:
      "Claude Code is billed based on the Anthropic API tokens consumed. Costs depend on the model used and the size of your codebase context. Check the Anthropic pricing page for current rates.",
  },
  {
    question: "Where can I get more help?",
    answer:
      "Visit the Claude Code documentation at claude.ai/code, or open an issue in the anthropics/claude-code-action GitHub repository for action-specific questions.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-black dark:text-white">
            Hello, World!
          </h1>
          <p className="mt-4 text-lg text-zinc-500">
            Welcome to my Next.js app
          </p>
        </div>

        <section>
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Claude Code — FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map(({ question, answer }) => (
              <div
                key={question}
                className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {question}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
