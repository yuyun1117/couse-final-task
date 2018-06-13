pipeline {
    agent any

    environment {
        NameSpace='linwenjun'
    }

    stages {

        stage('Checkout') {
            steps {
                step([$class: 'WsCleanup'])
            git poll: true, url: 'https://github.com/linwenjun/express-demo.git', branch: 'master'
            }

        }

        stage('Sonar') {
            steps {
                bat 'dir'
            }
        }
    }
}