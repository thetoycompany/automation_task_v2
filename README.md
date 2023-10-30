# Automation_task_v2

I have created an automation framework to test different log in scenarios on the hudl.com website. 
I have used Cypress as that is what I am most comfortable with, it enabled me to explore different scenarios further.
To note: I am using a MacBook pro currently running macOS Monterey, version 12.6.5

Future developments: to test in different environments such as windows or linux and on older versions of macOS.

# Installation
Using cypress to fulfil the requirements of the automation task set
Navigate to your chosen directory to pull repo into on your device
```bash
cd your/chosen/path
```
initialise repository
```
git init
```
Pull repository into your chose folder
```
git pull https://github.com/thetoycompany/automation_task_v2
```
### install node here for your device
https://nodejs.org/en/download 

## Install npm(node package manager) into repo
```bash
npm install npm
```
## Install Cypress
```
npm install cypress --save-dev
```

### To run scripts in cmd line

```
npx cypress run
```

###  to open the IDE for cypress 
```
npx cypress open
```
Select e2e tests and then chrome then start e2e in chrome


## Notes

### Test Cases
- Test cases are inside of "test_cases.txt"

### Data

- Data in cypress/fixtures/login.json

### Test Scripts
- Tests in cypress/e2e

## Test Scenarios 
  1. Front end inspection
  2. Missing information at log in
  3. Forgotten password flow
  4. Incorrect password
  5. Non-existent user
  6. Create a new user
  7. Successful log in

## Future Tests

1. Consider what happens when you enter an incorrect email in forgotten password Test
2. check social links work
3. load Testing
4. API testing for user profile data etc
5. Finish forgot password loop
6. Accessibility testing - plugins - https://www.npmjs.com/package/cypress-accessibility-checker
7. Usability tests for process flows etc
8. Follow best practice with cypress better for retireving front end elements


## Future Considerations from Assigment

1. Not released to production so URL's probably be different and would have to set up environment alongside these tests
2. Not best practice to include password and sensitive information in these files, for ease i have left them in but this is not how i would handle this data, i would probably place the files in git ignore and enable each user who pulls these tests scripts to creaste their own json file with their own senstive data...
3. Some tests could be more granular
4. Tests interacting with the back end of the project would also be beneficial 

## Author
Toyin Martins

## Contact Information
toyinm4rtins@gmail.com

