import { google, sheets_v4 } from 'googleapis';

// Configuration
const SPREADSHEET_ID = '1aTZZVJPgjvwQ_KlmsclFCpwj_6vuI2oi76MJ8yMPvsQ';
const CLIENT_EMAIL = 'yusnianggara@gmail.com';
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDHPKdxS663reoR\nF9yfBOgalMDW9mVfWvEJfiD9X91vBD5/tvu1TYb+vsU+3vik3nDy6SpdzhqrlyxV\nEnyeFyA+0yqo0jJikKmCijRbSRvpdHHRIWcIowN7SNW+dX6pN9Ltf5D0Tz/x2vq3\nxXgFAFNeRUOS9+k+iPJBF/OiVRyYLl2+YyMnGQk9Y6PIDm6qP8mPZbAMC6vr2r2W\ndA80PX0ZJk2GlFZHZtG6awAwzdAcuPMy4lgid6BWgwq04G/BnJ+R4Pz5bmO1rrN6\n+jiTrycnWix2IN5aG1+7QqaVyhSnJFGOPLyAKonqeJlIbYZlxz0hb8WFYYve6kzu\nqxI2qce1AgMBAAECggEAEBpMtYv2jD2VWESo81NGsnXzsLa2Z8K7uNbbB2TQSqY5\nqkHZoy7San7JsLSoZ6Qw1c6BkEEAXSj5OiD7Nch3CzeEUE5jfcg6Yw9qKYya9xSP\nFGYnjoZPruRVSNufMpcNSF5nPU+1woWT06GKpet/pslgq51iL8iKvTcYh7YVpbjz\nmjwXLFvgOOkHpS+F48f0Fsaciinub4W/7v1J6ZeUOkKY+zStdeTScWlYmsLtSFON\nCcUNt5X4cXEILIzWrBLt/RPd+uIKodJ41A8EPLyKGupgF6mqi7OQeMEw8SyLPGCu\neAG65cFh0SYz2F58/lrGxyLpt1eEPKtzWHXMekAfSwKBgQD52yZQTkxVcSvfpMr1\nhdN3EdEyTQy/jSDIe2kFetmVINyGop0PoiejVa3uot33fFYEGrkbcX7YsX6k8kSj\nqqWwnHSor0YnJ/0eM/wS6/DC/DqIVhrZOvKlEyshT/3AVyMpAo6qFyS9dfqxv4Zq\n+EDFPzwp/DztK8AmGNlZ0jpkcwKBgQDMItsQH+p8fEZNkFy0ztpgrj9bf5yEX1yi\nA3R7/e6HCMDWDTuTTX0Xv1ACaeWQ07Sm1yr6RSD1Gpts8P9ZDPSHrO0KEuHA4bQh\nGtNwzB+XlBU1lz415uOC1+QkvxvrGakbbksWSyQGqv3qsm1LzGTATawDwbokuFnk\nyZnFuq9BNwKBgQDUyKsfdx8RIPlxVEG4yQjnfZgAU5gIxeLmehtdnFsS4tKMIo7J\n0poZQw2GjtOkQhJrGmsMkSKq3rZxORX1oI3NE+FSCzsee7LX9wO1BZScKfybQWFK\nISamKOXxT9NV65+4/EGNX3pdk801dVu/W76lfQ3636LvhPP2PfFUynIKOwKBgBZK\n9CtloODpXXAZBNbGBDksrkSawgf+tgoHYJAt4f+jKBP4K/phKvkN7nnlAKn5RLA3\nrTzZkcjSmAikpO4fqRCsBNLlzvuWamp3GIIn+IdAJ7TLiIKwbUYbt5F/wVfCXKJf\nQBn2KMAFqmcYBzGQ56vMj611WZOrAj4m+gEK6xqvAoGBAM/BoX6gbhhNHgBlMtf1\nt0u/qbwsfOQ5CjMCGWc6rwBQfilWTnDOfTa3j8GymUPT6qz63B/eagpmcl6Kdw6T\nktX/olYudQ3cqTiSO8Tx44UY3yo+Yr0yMtUTtI33XlDHmi3HnMwlqonBb5eGmRbw\nABVTnhy8NzroE5gBZzrrHfmf\n-----END PRIVATE KEY-----\n";

// Authorize and create a client instance
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const getClient = async (): Promise<sheets_v4.Sheets> => {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });
  return sheets;
};

// Append form data to the Google Sheet
const submitForm = async (formData: { name: string; no: string; message: string }): Promise<void> => {
  try {
    const sheets = await getClient();

    const request: sheets_v4.Params$Resource$Spreadsheets$Values$Append = {
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A1:C1', // Specify the range where the data will be appended
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[formData.name, formData.no, formData.message]],
      },
    };

    const response = await sheets.spreadsheets.values.append(request);
    console.log('Form data appended successfully.');
  } catch (error) {
    console.error('Error appending form data:', error);
  }
};

export default submitForm;
