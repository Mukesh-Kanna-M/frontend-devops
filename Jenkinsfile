pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {

        stage('Install') {
            steps {
                npm cache clean --force
                rm -rf node_modules package-lock.json'
                npm install --no-audit --no-fund
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
