# tauri-plugin-fs-extra
![Test](https://github.com/tauri-apps/tauri-plugin-fs-extra/workflows/Test/badge.svg)

This plugin provides a "classical" Tauri Plugin Interface that adds file system methods that aren't included in the Tauri core API.

## Architecture
This repo shape might appear to be strange, but it is really just a hybrid Rust / Typescript project that recommends a specific type of consumption, namely using GIT as the secure distribution mechanism, and referencing specific unforgeable git hashes. Of course, it can also be consumed via Cargo and NPM.

### `/src`
Rust source code that contains the plugin definition.

### `/webview-src`
Typescript source for the /webview-dist folder that provides an API to interface with the rust code.

### `/webview-dist`
Tree-shakeable transpiled JS to be consumed in a Tauri application.

### `/bindings`
Forthcoming tauri bindings to other programming languages, like DENO.

## Installation
There are three general methods of installation that we can recommend.
1. Pull sources directly from Github using git tags / revision hashes (most secure, good for developement, shown below)
2. Git submodule install this repo in your tauri project and then use `file` protocol to ingest the source
3. Use crates.io and npm (easiest, and requires you to trust that our publishing pipeline worked)

For more details and usage see [the Todo app](examples/todos-app/). Please note, below in the dependencies you can also lock to a revision/tag in both the `Cargo.toml` and `package.json`

### RUST
`src-tauri/Cargo.toml`
```yaml
[dependencies.tauri-plugin-fs-extra]
git = "https://github.com/tauri-apps/tauri-plugin-fs-extra"
tag = "v0.1.0"
#branch = "main"
```

Use in `src-tauri/src/main.rs`:
```rust
use tauri_plugin_fs_extra::FsExtra;

fn main() {
    tauri::Builder::default()
        .plugin(FsExtra::default())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

### WEBVIEW
`Install from a tagged release`
```
npm install github:tauri-apps/tauri-plugin-fs-extra#v0.1.0
# or
yarn add github:tauri-apps/tauri-plugin-fs-extra#v0.1.0
```

`Install from a commit`
```
npm install github:tauri-apps/tauri-plugin-fs-extra#488558717b77d8a2bcb37acfd2eca9658aeadc8e
# or
yarn add github:tauri-apps/tauri-plugin-fs-extra#488558717b77d8a2bcb37acfd2eca9658aeadc8e
```

`package.json`
```json
  "dependencies": {
    "tauri-plugin-fs-extra-api": "github:tauri-apps/tauri-plugin-fs-extra#v0.1.0",
```

Use within your JS/TS:
```ts
import { metadata } from 'tauri-plugin-fs-extra-api'
await metadata('/path/to/file')
```

# License
MIT / Apache-2.0
