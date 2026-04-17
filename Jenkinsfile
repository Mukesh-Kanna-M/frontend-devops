pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {

        stage('Install') {
            steps {
                sh 'rm -rf node_modules package-lock.json'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
