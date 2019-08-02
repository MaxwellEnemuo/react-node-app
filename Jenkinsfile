#!/bin/groovy
pipeline {
  agent any

  tools {
    nodejs 'default-nodejs'
  }

  stages {

    stage('Startup') {
      steps {
        withNPM(npmrcConfig: '13b5fb7c-70c3-49e6-b952-b02e54a648f1') {
            bat 'npm install'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          bat 'npm test'
        }
      }
    }

    stage('Build') {
      steps {
        script {
          bat 'npm start'
          bat 'npm pack'
        }
      }
    }
    
    post {
        always {
          junit 'coverage/junit/junit.xml'
       }
    }
    
  }
}
