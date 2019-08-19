the thing that made it work is the wait-for-it script. even though we added
depends_on in the docker-compose.yml, it only cares about the container being
up (it doesn't wait until mongo itself is ready to receive connections),
consequently, even though mongo container comes online, our app comes online right after
and mongo itself isnt ready yet.

the wait-for-it script will sit and wait until there's a connection ready at
port 27017, thus ensuring that mongo is really really up before going on.


second change is that im using docker volumes instead of mounting local volume
into the container. they work very similarly except when you use docker
volumes, it's abstracted away for you by docker. i ran into permission issues
when i did it the mounting local volume way because when the mongodb container
added files into that directory, it had some weird permissions on it that
didn't translate well outside the container. consequently, i could not
docker-compose build again after the first time and ended up having to delete
that local ./db_data/ folder. i think this gets avoided when using docker
volumes so i'll stick w/ that.
