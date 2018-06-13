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

        stage('eslint') {
            steps {
                bat 'echo test'
            }
        }

        stage('test') {
            steps {
                bat 'npm stop'
            }
        }

        stage('install dependencies') {
            steps {
                bat 'echo install'
            }
        }

        stage('deploy') {
            steps {
                bat 'echo deploy'
            }
        }
    }
}