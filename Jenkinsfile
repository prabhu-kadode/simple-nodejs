pipeline {
    agent any

    stages {
        stage('Clone the repo ====>') {
            steps {
                git branch: 'main', url: 'https://github.com/prabhu-kadode/simple-nodejs.git'
            }
        }

        stage('Installing depedancies ====>') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run ====>') {
            steps {
                sh 'nohup node index.js &'
            }
        }
    }
}