db.createUser(
  {
      user: "admin",
      pwd: "public",
      roles: [
          {
              role: "readWrite",
              db: "iot_data"
          }
      ]
  }
);
db.createCollection("")

db.createCollection(
    "raspimonitor",
    {
       timeseries: {
          timeField: "timestamp",
          metaField: "metadata",
          granularity: "seconds"
       },
       expireAfterSeconds: 2678400
    }
 )

 db.createCollection(
    "sensor",
    {
       timeseries: {
          timeField: "timestamp",
          metaField: "metadata",
          granularity: "seconds"
       }
    }
 )