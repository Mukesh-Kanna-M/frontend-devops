pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {

        stage('Install') {
            steps {
                sh 'npm install --no-audit --no-fund'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
