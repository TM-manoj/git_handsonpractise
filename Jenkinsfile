pipeline {
    agent any

    stages {

        stage('System Information') {
            steps {
                sh 'whoami'
                sh 'hostname'
                sh 'pwd'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Building application"'
                sh 'ls -la'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Testing application webhook-testing done"'
            }
        }
    }
}
