pipeline {
    agent any

    environment {
        NameSpace='linwenjun'
    }

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('checkout') {
            steps {
                git poll: true, url: 'https://github.com/linwenjun/express-demo.git', branch: 'master'
            }
        }

        stage('npm test') {
            steps {
                bat 'echo 开始了'
            }
        }

        stage('npm install') {
            steps {
                bat 'npm install'
            }
        }

        stage('npm start') {
            steps {
                bat 'npm start'
            }
        }
    }
}