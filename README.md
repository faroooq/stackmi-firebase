Access this website from the below url:
http://stackmi.web.app/

### Development

- `npm run start`
- in your browser [http://localhost:4200](http://localhost:4200)

### Compilation

- `npm run build` ( without SSR)
- `npm run build:ssr` ( with SSR)

### Production

- `npm run serve:ssr`
- in your browser [http://localhost:4000](http://localhost:4000)

# Firebase Deployment:

npm run build:ssr

firebase init

folder location: dist/browser
cd dist/browser

# Goto the above location and run below command to deploy:

firebase deploy

# ISSUES:

1. While running npm i if you face below issue: Unhandled rejection Error: EACCES: permission denied, mkdir
   SOLUTION:
   sudo chown -R $(whoami) ~/.npm

2. Error: Failed to get Firebase project stackmi. Please make sure the project exists and your account has permission to access it.
   SOLUTION: logout and login

3. More than one module matches. Use the skip-import option to skip importing the component into the closest module or use the module option to specify a module.
   SOLUTION: ng g c new-component --module app

# Simple Angular Upgrade:
npm install -g npm-check-updates
ncu -u
npm update
