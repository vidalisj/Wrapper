FROM semoss/docker:prod

ARG path=OrgSuite
ARG ipadd=http://192.168.99.100/

#Install installation into SEMOSS Apache Webapps Folder
#Replace Wrapper with the path for the wrapper. Example for 'www.mysite.com/MyPath' replace Wrapper with MyPath below.
COPY ./dist/Wrapper /opt/apache-tomcat-8.0.41/webapps/${path}

RUN sed -e "s|\"/\"|\"/${path}/\"|" < /opt/apache-tomcat-8.0.41/webapps/${path}/index.html > /opt/apache-tomcat-8.0.41/webapps/${path}/index.html
RUN sed -e "s|http://localhost:5355/|${ipadd}|" < /opt/apache-tomcat-8.0.41/webapps/${path}/assets/config.json > /opt/apache-tomcat-8.0.41/webapps/${path}/assets/config.json
RUN cp -ar /opt/apache-tomcat-8.0.41/webapps/${path}/assets/db /opt/semosshome/
