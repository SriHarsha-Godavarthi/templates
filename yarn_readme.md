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


