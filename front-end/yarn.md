# add, upgrade, or remove dependencies(each will automaticallly update package.json and yarn.lock file)

1. add a dependency
   syntax: 
   yarn add --dev|--peer|--optional|<empty> [package_name]
   
   # install by specifying either a dependency version or a tag
   
   yarn add --dev|--peer|--optional|<empty> [package_name]@[version]

   yarn add --dev|--peer|--optional|<empty> [package_name]@[tag]

   Flags: -
   a) --dev (to add devDependencies ) <!-- only required during the development process, not in the  production environment -->
   
   b) --peer (to add peerDependencies)  <!--required specific version but user must install manually unlike devDependencies and dependencies install automatically
    -->
    c) --optional (to add optionalDependencies)<!-- specify dependencies that are not critical for your project to function. If these dependencies fail to install for any reason (e.g., unsupported platform, missing libraries), the installation process will continue without throwing an error. -->
# Upgrading a dependency
yarn upgrade [package]

yarn upgrade [package]@[version]

yarn upgrade [package]@[tag]

# Removing a dependency
yarn remove [package]

# versioning 
[major].[minor].[patch] and looks like one of these: 3.14.1

major - incompitable/breaking
minor - new functionality & backwards-compatible
patch - minor bug fixes & backwards-compatible

# Version ranges
version range is to specify which versions of a dependency will work for your code

1. Comparators
    Eg: >=2.0.0 <3.1.4
   types of comparators 
    a) <
    b) <=
    c) >
    d) =>
    e) =

2. Intersections (<whitespace>)
       by combining with <whitespace>
       >=2.3.1 <4.3.1 (greater than or equal to 2.3.1 and less than 4.3.1)
3. Union (||)
           <=2.0.0 || >3.1.4
4. Pre-release tags

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
     


