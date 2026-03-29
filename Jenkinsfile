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
    post {
        always {
            echo 'Cleaning up the workspace...'
        }
        success {
            echo 'Build was successful! 🚀'
        }
        failure {
            echo 'Build failed. Time to check the logs. 🛠️'
        }
    }
}