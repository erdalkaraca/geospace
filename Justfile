# Justfile for geospace tasks

# Enable npm trusted publishing for a package via GitHub OIDC
# Usage: just publish-trusted PACKAGE=@kispace-io/gs-lib-ml
publish-trusted PACKAGE:
    npm trust github {{PACKAGE}} --file build-and-deploy.yml --repo erdalkaraca/geospace --allow-publish -y

# Publish a workspace package to npm with public access
# Usage: just publish-package PACKAGE=@kispace-io/gs-lib-ol
publish-package PACKAGE:
    npm publish --workspace={{PACKAGE}} --access public
