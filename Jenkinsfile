pipeline {
    agent any

    tools {
        nodejs 'node20' // MUST match Jenkins Global Tool
    }

    environment {
        AWS_DEFAULT_REGION = 'ap-south-1'
        S3_BUCKET = 's3-frontend-frontend'
        CLOUDFRONT_ID = 'EIXJ6QKQ6VBK9'
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Clean Workspace') {
            steps {
                sh '''
                rm -rf node_modules package-lock.json
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to S3') {
            steps {
                sh '''
                aws s3 sync dist/ s3://$S3_BUCKET --delete
                '''
            }
        }

        stage('Invalidate CloudFront') {
            steps {
                sh '''
                aws cloudfront create-invalidation \
                --distribution-id $CLOUDFRONT_ID \
                --paths "/*"
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }
        failure {
            echo 'Pipeline Failed - Check Logs'
        }
    }
}
