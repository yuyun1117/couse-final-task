pipeline {
    agent any

    environment {
        NameSpace='linwenjun'
    }

    stages {

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