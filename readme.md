# Rest server in nodejs

## Install packages
<pre>npm install</pre>

## Run
<pre>node index.js</pre>

## Use by postman
* get -> http://localhost:9600/text -> return <code>200 OK</code>
* get -> http://localhost:9600/json -> return <code>{some :true}</code>
* get -> http://localhost:9600/xml  -> return <code>\<some>true\</some></code>
* post -> http://localhost:9600/json -> return the body

