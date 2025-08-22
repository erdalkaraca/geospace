import gitService from "./gitservice.ts";
import { toastInfo } from "./toast.ts";
import { TOOLBAR_MAIN } from "./constants.ts";
import { registerAll, ExecutionContext } from "./commandregistry.ts";

export function registerGitCommands() {
  registerAll({
    command: {
      id: "git.clone",
      name: "Git: Clone Repository",
      description: "Clone a remote git repository into the browser workspace.",
      parameters: [
        { name: "url", description: "Remote repository URL", required: true }
      ]
    },
    handler: {
      execute: async (context: ExecutionContext) => {
        const url = context.params?.url;
        if (!url) return;
        await gitService.clone(url);
        toastInfo("Repository cloned.");
      }
    },
    contribution: {
      target: TOOLBAR_MAIN,
  icon: "code-branch",
      label: "Clone Repo"
    }
  });

  registerAll({
    command: {
      id: "git.pull",
      name: "Git: Pull",
      description: "Pull latest changes from the remote repository.",
      parameters: []
    },
    handler: {
      execute: async (_context: ExecutionContext) => {
        await gitService.pull();
        toastInfo("Repository updated (pull).");
      }
    },
    contribution: {
      target: TOOLBAR_MAIN,
  icon: "download",
      label: "Pull"
    }
  });

  registerAll({
    command: {
      id: "git.commitPush",
      name: "Git: Commit & Push",
      description: "Commit changes and push to the remote repository.",
      parameters: [
        { name: "message", description: "Commit message", required: true },
        { name: "name", description: "Author name", required: true },
        { name: "email", description: "Author email", required: true }
      ]
    },
    handler: {
      execute: async (context: ExecutionContext) => {
        const message = context.params?.message;
        const name = context.params?.name;
        const email = context.params?.email;
        if (!message || !name || !email) return;
        await gitService.commitAndPush(message, { name, email });
        toastInfo("Committed and pushed.");
      }
    },
    contribution: {
      target: TOOLBAR_MAIN,
  icon: "upload",
      label: "Commit & Push"
    }
  });
}
