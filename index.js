const odbc = require('odbc');

spreadsheetId = "";
apiKey = "";
RKT = "";

verbosity=3
log="/tmp/driverlog.log"
const connectionString = `DRIVER={CDataDriverxx};RKT=${RKT};AuthScheme=Token;apiKey=${apiKey};LogFile=${log};Verbosity=${verbosity};spreadsheetId=${spreadsheetId}`;

async function connectAndQuery(connectionString) {
    try {
        // Use the async/await version of the odbc.connect
        const connection = await odbc.connect(connectionString);

        console.log("Connected");
        console.log(connection);

        // Run the query and await the result
        const result = await connection.query('SELECT Type FROM initdata_Sheet1');
        
        // Log the result
        console.log(result);

        // Close the connection after the query is done
        await connection.close();
        console.log("Connection closed");

    } catch (error) {
        // Handle any errors during the connection or query
        console.error(error);
    }
}

connectAndQuery(connectionString);

