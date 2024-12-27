# Managing Dependencies with Yarn

## Adding Dependencies
To add a new dependency to your project, use one of the following commands based on the type of dependency:

```bash
yarn add [package_name]          # Regular dependency
yarn add --dev [package_name]    # Development dependency
yarn add --peer [package_name]   # Peer dependency
yarn add --optional [package_name] # Optional dependency
```

To specify a version or a tag:
```bash
yarn add [package_name]@[version]  # Specific version
yarn add [package_name]@[tag]      # Specific tag
```

### Flags:
- `--dev`: Add to devDependencies
- `--peer`: Add to peerDependencies
- `--optional`: Add to optionalDependencies

## Upgrading Dependencies
To upgrade an existing dependency:
```bash
yarn upgrade [package]            # Upgrade to latest
yarn upgrade [package]@[version]  # Specific version
yarn upgrade [package]@[tag]      # Specific tag
```

## Removing Dependencies
To remove a dependency:
```bash
yarn remove [package]
```

## Versioning
Semantic versioning follows the pattern `[major].[minor].[patch]`:
- **major**: Incompatible or breaking changes
- **minor**: New functionality that is backwards-compatible
- **patch**: Backwards-compatible bug fixes

## Version Ranges
Specify which versions of a dependency are acceptable:
- **Comparators**: `<`, `<=`, `>`, `>=`, `=`
- **Intersections**: Combine comparators, e.g., `>=2.3.1 <4.3.1`
- **Union**: Use `||`, e.g., `<=2.0.0 || >3.1.4`

### Pre-release Tags
Specify pre-release versions by using tags.

### Advanced Version Ranges
- **Hyphen Ranges (-)**: `2.0.0 - 3.1.4` is expanded to `>=2.0.0 <=3.1.4`
- **X-Ranges**: Use `X`, `x`, or `*` to specify flexible versions, e.g., `3.1.x`
- **Tilde Ranges (~)**: allow Minor updates within the specified minor version
- **Caret Ranges (^)**: Updates that do not modify the left-most non-zero digit


# Advanced version ranges

1. Hyphen Ranges (-)

       Eg: 2.0.0 - 3.1.4	 expanded version is  >=2.0.0 <=3.1.4

2. X-Ranges
      Any of X, x, or * can be used to leave part or all of a version unspecified.

      Eg: 3.1.(X|x|*)

3. Tilde Ranges(~) updates only least version given
            <!-- only Patch updates  -->
4. Caret Ranges(^)   allows execpt for first non zero digit updates
     <!-- Allow changes that do not modify the first non-zero digit in the version, either the 3 in 3.1.4 or the 4 in 0.4.2 -->
     missing parts will replace with zeros for ^


     # Setting Up Yarn Workspaces

     ## Prerequisites
     - Ensure that you have Yarn installed. You can check by running `yarn --version`. If Yarn is not installed, you can install it by following the instructions on the [Yarn website](https://yarnpkg.com/getting-started/install).
     
     ## Step 1: Initialize the Project
     Start by creating a new directory for your project and initialize it with a `package.json` file:
     
     ```bash
     mkdir my-project
     cd my-project
     yarn init -y
     ```
     
     ## Step 2: Configure Workspaces
     Edit the `package.json` file to add a workspaces field. This field specifies which directories contain your workspaces:
     
     ```json
     {
       "private": true,
       "workspaces": [
         "packages/*"
       ]
     }
     ```
     
     Here, `packages/*` will include every directory under `packages/` as a separate workspace.
     
     ## Step 3: Create Sub-Packages
     Create sub-directories for each of your packages inside the `packages` directory. Initialize each with its own `package.json` file:
     
     ```bash
     mkdir -p packages/package-a
     cd packages/package-a
     yarn init -y
     
     # Repeat for other packages
     ```
     
     ## Step 4: Add Dependencies
     You can add dependencies to individual workspaces by navigating into their directory and using Yarn to add the package:
     
     ```bash
     cd packages/package-a
     yarn add < packageName >
     ```
     
     Dependencies used by multiple packages can be added to the root to save space and avoid duplication.
     
     ## Step 5: Run Scripts Across Workspaces
     You can run scripts across all workspaces using the `yarn workspaces run` command. For example, to build all packages:
     
     ```bash
     yarn workspaces run build
     ```
     
     Ensure each package has a `build` script in its `package.json` for this to work.
     
     ## Step 6: Linking Between Workspaces
     To use one workspace package inside another, simply add it as a dependency using its name:
     
     ```bash
     cd packages/package-b
     yarn add package-a
     ```
     
     This adds a symlink in `node_modules` that points to your local package, allowing for seamless development across packages.
     


