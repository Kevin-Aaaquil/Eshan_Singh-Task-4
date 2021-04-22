# Guvi's API

This is a project intended as submission for the Guvi club in SRM Chennai. The task was to create a Guvi document schema and model and to create a basic CRUD (Create, Read, Update, Delete). It listens at **`/guvis`** and **`/guvis/:guviId`** for requests. Bonus Task required writing documentation for this project.



## How to use this code

Simply download the code by clicking on the `Download Code` button and selecting `Download ZIP` option or you could copy the https link and then in the command prompt enter the following command
```
git clone https://github.com/Kevin-Aaaquil/Eshan_Singh-Task-4.git
```

## Prerequisites

You need to have node.js already downloaded and setup in your computing system. You must also have a MongoDB account and a Mongo Atlas Database setup. 

## After downloading code

Well after you have downloaded your this code from github you need to perform a few tasks to set the code up and running

### Step 1: Open terminal in VS Code and write the following code
```
npm install 
```
### Step 2: Create a new file and name it **`.env`** and you shall store your MongoDB connection URI, it shall look like this
```
MONGO_URI = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority"
```
### Step 3: Enter your collection name in the `guvimodel.js` within the code line that looks like this
```
collection: '<COLLECTION-NAME>'
```

## You are all set up!!
### Just type the following command in the terminal and the code shall compile and run
```
node index.js
```
