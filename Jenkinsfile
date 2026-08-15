pipeline {
    agent any

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

    post {
        success {
            emailext(
                to: 'your-email@gmail.com',

                subject: "SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",

                body: """
                    <h2>✅ Jenkins Build Successful</h2>

                    <p><b>Job:</b> ${env.JOB_NAME}</p>
                    <p><b>Build Number:</b> #${env.BUILD_NUMBER}</p>
                    <p><b>Status:</b> SUCCESS</p>
                    <p><b>Docker Image:</b> ${env.JOB_NAME}</p>

                    <p>
                        <b>Build URL:</b>
                        <a href="${env.BUILD_URL}">
                            ${env.BUILD_URL}
                        </a>
                    </p>

                    <hr>

                    <p>
                        Docker image was successfully built,
                        deployed and pushed to Docker Hub.
                    </p>
                """,

                mimeType: 'text/html'
            )
        }


        failure {
            emailext(
                to: 'your-email@gmail.com',

                subject: "❌ FAILURE: ${env.JOB_NAME} #${env.BUILD_NUMBER}",

                body: """
                    <h2>❌ Jenkins Build Failed</h2>

                    <p><b>Job:</b> ${env.JOB_NAME}</p>
                    <p><b>Build Number:</b> #${env.BUILD_NUMBER}</p>
                    <p><b>Status:</b> FAILURE</p>

                    <p>
                        <b>Build URL:</b>
                        <a href="${env.BUILD_URL}">
                            ${env.BUILD_URL}
                        </a>
                    </p>

                    <hr>

                    <p>
                        The Jenkins pipeline failed.
                        Please check the attached console log
                        to identify the problem.
                    </p>
                """,

                mimeType: 'text/html',

                attachLog: true
            )
        }

        fixed {
            emailext(
                to: 'your-email@gmail.com',

                subject: "✅ FIXED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",

                body: """
                    <h2>✅ Jenkins Build Fixed</h2>

                    <p><b>Job:</b> ${env.JOB_NAME}</p>
                    <p><b>Build Number:</b> #${env.BUILD_NUMBER}</p>
                    <p><b>Status:</b> FIXED</p>

                    <p>
                        The previous Jenkins build was failing,
                        but this build is now successful.
                    </p>

                    <p>
                        <b>Build URL:</b>
                        <a href="${env.BUILD_URL}">
                            ${env.BUILD_URL}
                        </a>
                    </p>
                """,

                mimeType: 'text/html'
            )
        }
    }
}
