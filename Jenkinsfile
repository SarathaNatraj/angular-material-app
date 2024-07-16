pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.build("my-angular-app")
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    docker.image("my-angular-app").inside {
                        sh "npm run test"
                    }
                }
            }
        }

        stage('Deploy') {
            environment {
                NODE_ENV = 'production'
            }
            steps {
                script {
                    docker-compose up -d
                }
            }
        }
    }
}