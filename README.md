This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Making new project from this boilerplate with your new project name and a new bundleIdentifier

>**Note**: I had create-project.sh in dev-scripts folder ,so you can create dev-scripts folder and can add create-project.sh in that folder.

## You need to create a script file (create-project.sh)
   ```bash
touch create-project.sh
```

##  You need to write below lines in that script file(create-project.sh)

```bash
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <NewProjectName> <BundleIdentifier>"
    exit 1
fi

PROJECT_NAME=$1
BUNDLE_IDENTIFIER=$2

REPO_URL="git@github.com:FaisalKhawaj/ReactNativeBoilerplate.git"

git clone $REPO_URL $PROJECT_NAME


cd $PROJECT_NAME


npm install


npx react-native-rename $PROJECT_NAME -b $BUNDLE_IDENTIFIER


if [ $? -ne 0 ]; then
  echo "Failed to rename project"
  exit 1
fi

rm -rf .git
git init
git add .
git commit -m "Initial commit for $PROJECT_NAME"

if [ $? -ne 0 ]; then
  echo "Failed to rename project"
  exit 1
fi


echo "Project $PROJECT_NAME created successfully"

```
____________________________________

## Run the following command to make the script executable:

```bash
chmod +x create-new-project.sh
```


## In order to clone this boilerplate with your ProjectName and bundle identifier, you need to run this command with name of your project instead of NewProjectName and bundleIdentifer instead of com.test.clone.identifier 

```bash
~/dev-scripts/create-new-project.sh TestClone com.test.clone.identifier
```

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: install packages 
```bash
npm install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


