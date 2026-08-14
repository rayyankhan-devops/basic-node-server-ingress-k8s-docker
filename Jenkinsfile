pipeline {
    agent { label: "dev" }

    stages {

        stage('Clone Code') {
            steps {
                echo 'Cloning Code'

                git(
                    url: 'https://github.com/rayyankhan-devops/basic-node-server-ingress-k8s-docker.git',
                    branch: 'main'
                )
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Image'

                sh 'docker build -t basic-node-server:latest .'
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                echo 'Starting Docker Compose'

                sh 'docker compose up --build -d'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo 'Pushing image to Docker Hub'

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerHubCreds',
                        usernameVariable: 'DOCKERHUB_USER',
                        passwordVariable: 'DOCKERHUB_PASS'
                    )
                ]) {

                    sh '''
                        echo "$DOCKERHUB_PASS" | docker login \
                            -u "$DOCKERHUB_USER" \
                            --password-stdin

                        docker tag \
                            basic-node-server:latest \
                            "$DOCKERHUB_USER/basic-node-server:latest"

                        docker push \
                            "$DOCKERHUB_USER/basic-node-server:latest"
                    '''
                }
            }
        }
    }
}
