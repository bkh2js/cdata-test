const odbc = require('odbc');

spreadsheetId = "1nqQYL36XNdS77SHF4HhaO0pNPEXajKGTWzX2nbw5cxk";
apiKey = "AIzaSyB2zRIRjPq1_lpoE8-j1Sc5fy3L2Jf9Fm4";
rkt = "5231444B4D5A303832333234333057454254523141310000000000000000000000000000000000004D6574726578696600005747475433323138305847370000";

const connectionString = `DRIVER={CDataDriverxx}`;

async function connectAndQuery(connectionString) {
    await odbc.connect(connectionString, async (error, connection) => {
        await connection.query('SELECT Type FROM initdata_Sheet1', (error, result) => {
            if (error) { console.error(error) }
            console.log(result);
        });
    });
}

connectAndQuery(connectionString);
