pipeline {
    agent any

    environment {
        // Define environment variables
        DOCKER_IMAGE = "my-material-app"
        DOCKER_TAG = "latest"
        REGISTRY = "my-docker-registry"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the Git repository
                      git url:'https://github.com/SarathaNatraj/angular-material-app.git', branch:'main'
          
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                bat 'npm install'
            }
        }

        stage('Build Angular Project') {
            steps {
                // Build the Angular project
                bat 'npm run build --prod'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }

        stage('Run Docker Container') {
            steps {
                // Run Docker container
               bat "docker run -d -p 80:80 --name ${DOCKER_IMAGE} ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }
    }

    post {
        always {
            // Clean up after the build
            cleanWs()
        }
    }
}

