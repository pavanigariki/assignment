# assignment
Installed Dependencies:

1. To work with export and import statements install  babel-preset-es2015 by using the below commands

npm install --save-dev @babel/preset-es2015
the corresponding dependencies will added to the node and in packson.json file

2. Install Tyscript by using below command

npm install -g typescript

3. Add the tsconfig.json file
 tsc – init

4. Install cypress xpath to work xpath function to locate the webelement and then below command in the index.js file under support folder

npm install-D cypress-xpath

require('cypress-xpath')

Project Structure:

1. Created json file under fixture folder to store locators of the webelements
2. Created spec.ts file to check the testcase under integration folder , imported the .ts file created the Page object to call methods which are defined in the .ts file.
3. Created Page folder and added .ts file to define the methods and exported 


# Instructions for using this project 
1. Click the `Clone or download` button above, and click `Download ZIP`.
2. In your terminal, `cd` into the project directory and run `npm install` then `npm run start`.
