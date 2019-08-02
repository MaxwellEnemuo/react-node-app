#!/bin/groovy
pipeline {
  agent any

  tools {
    nodejs 'default-nodejs'
  }

  stages {

    stage('Startup') {
      steps {

        withNPM(npmrcConfig: 'MyNpmrcConfig') {
            sh 'npm install'
            sh "npm config ls"
        }
      }
    }

    stage('Test') {
      steps {
        script {
          sh 'npm run test'
        }
      }
      post {
        always {
          junit 'coverage/junit/junit.xml'
        }
      }
    }

    stage('Build') {
      steps {
        script {
          sh 'npm start'
          sh 'npm pack'
        }
      }
    }
    // stage('Deploy') {
    //   when {
    //     expression {
    //       currentBuild.result == null || currentBuild.result == 'SUCCESS'
    //     }
    //   }
    //   steps {
    //     script {
    //       def server = Artifactory.server 'My_Artifactory'
    //       uploadArtifact(server)
    //     }
    //   }
    // }
  }
}
def uploadArtifact(server) {
  def uploadSpec = """{
            "files": [
              {
                "pattern": "continuous-test-code-coverage-guide*.tgz",
                "target": "npm-stable/"
              }
           ]
          }"""
  server.upload(uploadSpec)
  def buildInfo = Artifactory.newBuildInfo()
  server.upload spec: uploadSpec, buildInfo: buildInfo
  server.publishBuildInfo buildInfo
}
