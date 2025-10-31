import gitService from "./gitservice";
import {toastInfo} from "../../core/toast";
import {registerAll} from "../../core/commandregistry";
import {TOOLBAR_MAIN} from "../../core/constants";

export function registerGitCommands() {
    registerAll({
        command: {
            id: "git.clone",
            name: "Git: Clone Repository",
            description: "Clone a remote git repository into the browser workspace.",
            parameters: [
                {name: "url", description: "Remote repository URL", required: true},
                {name: "repoPath", description: "the local workspace path to clone into", required: true}
            ]
        },
        handler: {
            execute: async ({params: {url, repoPath}}: any) => {
                url = "https://github.com/erdalkaraca/geospace-demo-app.git"
                if (!url) return;
                const git = gitService.withPath(repoPath)
                await git.clone(url);
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
            parameters: [
                {name: "repoPath", description: "the local workspace path to clone into", required: true}
            ]
        },
        handler: {
            execute: async ({params: {repoPath}}: any) => {
                const git = gitService.withPath(repoPath)
                await git.pull();
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
                {name: "message", description: "Commit message", required: true},
                {name: "repoPath", description: "the local workspace path to clone into", required: true}
            ]
        },
        handler: {
            execute: async ({params: {message, repoPath}}: any) => {
                const name = "TODO"
                const email = "TODO"
                if (!message || !name || !email) return;
                const git = gitService.withPath(repoPath)
                await git.commitAndPush(message, {name, email});
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
