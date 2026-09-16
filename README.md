# Personal website

Hugo source for https://hayribakici.github.io.

## Requirements

Use **Hugo Extended 0.165.0**, matching the GitHub Actions workflow.
The main site uses a vendored copy of `Dream`; no theme download or
Node.js installation is needed. Its upstream revision and license are in
`themes/dream/UPSTREAM.md` and `themes/dream/LICENSE`.
Dream provides the homepage grid and image/description cards. Project Markdown
page bundles live in `content/projects/` with `type = "posts"` so Dream includes
them. `cover` names the image, and the Markdown body supplies the description.
The summary template override only adds a project CSS class and uses
`destination` for the card link. Small CSS rules square the images and hide
blog metadata for projects.
Add `preview.png` and set `draft = false` when the remaining screenshots are ready.
The digi4all destination also requires its deployment integration below.

## Main site

```sh
hugo server
```

Build production output into `public/`:

```sh
hugo --minify
```

GitHub Actions builds and deploys the main site on pushes to `main` or manual
workflow runs. In the repository's Pages settings, select **GitHub Actions**
as the source.

## digi4all module

`digi4all/` is a separate imported Hugo project with its own Git history.
Its existing local changes are preserved. Theme compatibility fixes live in
`digi4all/layouts/`, rather than in the nested Learn theme repository.

Preview it separately:

```sh
hugo server --source digi4all
```

Build for its intended GitHub Pages path:

```sh
hugo --source digi4all --minify
```

This writes to `digi4all/public/`, with production URLs under
`https://hayribakici.github.io/digi4all/`. Publishing the module alongside the
main site still requires importing its source into the deployment repository
and combining the two build outputs. The current workflow publishes only the
main site. The old `digi4all/deploy.sh` targets the former university host and
is not used by GitHub Actions.
