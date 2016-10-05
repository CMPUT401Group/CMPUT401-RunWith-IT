# RunWith-IT Analytic Engine

This package is the **Analytic Engine** in the RunWith-IT stack.

## Requirements
1. r-statistics
2. node
3. npm (should be installed automatically when node is installed).
4. gulp (do via `npm install -g gulp`)

## Instructions (WIP - This is just to test r-statistics)
1. `gulp  # This builds the src to the dist directory`
2. `cd dist`
3. `node r-adapter.js  # This is a test file and for testing r-statistics with node.`

## Structure
* r-modules/ - Contains *.R files which is called by the javascript files in src/ directory.
* src/ - Javascript files. We use _ES6_ since it is awesome.
* dist/ - Doesn't exist at first until `gulp` is executed.
* test/ - Contains unit test directory.