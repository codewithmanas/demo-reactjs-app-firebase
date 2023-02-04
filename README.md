# The Best Way to Host & Deploy a React Application To Firebase

# Deploy from GitHub Actions: Continuous Deployment mode (**CD**)
## Steps
### 1 - Create a folder with your app name (for me "demo-app")

then run command :  `npx create-react-app  demo-app`  
it will create another folder named "demo-app" inside our initial "demo-app" folder
so instead run the command below to create the app directly inside our initial "demo-app" folder
`npx create-react-app ./`

### 2 - First, make a repo on GitHub Web 

### 3 - Then, remote add the app to GitHub Web
- git init => for initialize git
- git add . => for staging all the files to git
- git commit -m "first commit" => for commit to git with a commit message
- git branch -M main => to change the branch name to "main" which in initially "master" as GitHub officially changed name of branch from `master` to `main`.
- git remote add origin [git repo url] => for adding local repo to GitHub Web
- git push -u origin main => to push local repo to remote repo

### 4 - Hosting Process on Firebase
- First, go to [firebase](https://firebase.google.com/) and then, go to [console](https://console.firebase.google.com/)
- Then go to Hosting, 

### 5 - Install Firebase CLI
To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).
Run the following npm command to install the CLI or update to the latest CLI version. 
`npm install -g firebase-tools`

### 6 - Initialize your project
##### Sign in to Google
`firebase login`  **for normal login** (For automatic builds and deploys with GitHub) (CD)
`firebase login:ci` **for Continuous Integration** (CI)
ci stands for clean install, CD- stands for Continuous Deployment

##### Initiate your project
Run this command from your app’s root directory
`firebase init` **If doing manually** (**for Continuous Integration** (CI))
`firebase init hosting` **For deployment through Github Actions**
### 7 -  Deployment Process
Here no need to run `firebase deploy` because it will be deploying from github actions (automatically) in Continuous Deployment mode (**CD**).

