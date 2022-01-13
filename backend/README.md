# Tech Descomplica Backend

#

### Environments

- PORT = *Port from startup application*

- DATABASE_URL = *postgresql://<username>/<password>@<address>:<port>/<dabaseName>?schema=sample*

- ``` 
  PORT=3000
  DATABASE_URL="mysql://root:secret@mysql_db:3306/descomplica?schema=sample"
  ```

#### Backend Port Listen

- *npm run dev*  - localhost:3000
- *docker-compose up- it* - localhost:3333

### Steps from initialize project

1. *Install dependencies*
   
   ``` sh
   npm i
   ```
   
2.   Switched witch initialize project
    - *Initialize project in local machine*
   ``` sh
    npm run dev
   ```
   - *Initialize project using docker*
   ``` sh
   docker-compose up -d
   ```
   
3. Access terminal image docker
   ``` sh
    docker exec -it mysql_db /bin/bash
   ```
   
4.  *From not error create migrate in database sing commands down*

   ``` sh
   npm i @prisma/client
   ```
   ``` sh
   npx prisma generate
   ```

