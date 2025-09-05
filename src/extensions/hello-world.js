
export default ({toastInfo, html, contributionRegistry, editorRegistry}) => {
    const showMessage = () => {
        alert("Hello World!")
    }
    contributionRegistry.registerContribution("app-tabs-left-end", {
        name: "system.helloworld",
        label: "Hello World!",
        icon: "flask",
        component: () => html`
        <wa-button @click="${showMessage}">Hello, world!</wa-button>`
    })

    toastInfo("The Hello World! extension enabled!")
}