Typescript offers powerful static typing but web browsers only understand javascript. If we know how the Typescript do the tsc processe code reveals how type safety converts into clean runable javascript code.

When we run tsc typescript processe files in five phases:

1. Scanner: it scan the ts file.
2. Parser: it converts source code into tokens thst called AST.
3. Binder: it maps symbols across the AST to find out scope and relationships.
4. Type Checker: it validates types that follow system rules of javascript and gives errors if type does not match.
5. Emitter: it removes type and transforms typescript syntax into the javascript version.

The tsconfig.json file works as the blueprint for how tsc should run. It configures paths and manage feature flags.

Here a tsconfig example:

{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/*"]
}

The tsc compilation turns typed syntax into standard javascript, while tsconfig.json provides total control over this tsc system.