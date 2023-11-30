

function calculateTime() {
    const input = document.getElementById('inputData').value.trim().toLowerCase();
    const countries = ['india', 'us', 'russia', 'china', 'japan', 'brazil', 'bangladesh', 'dubai', 'kuwait', 'saudi', 'canada', 'france', 'germany',
    'afghanistan', 'albania', 'algeria', 'andorra', 'angola', 'antigua and barbuda', 'argentina', 'armenia', 'australia', 'austria',
    'azerbaijan', 'bahamas', 'bahrain', 'bangladesh', 'barbados', 'belarus', 'belgium', 'belize', 'benin', 'bhutan', 'bolivia', 'bosnia and herzegovina',
    'botswana', 'brazil', 'brunei', 'bulgaria', 'burkina faso', 'burundi', 'cabo verde', 'cambodia', 'cameroon', 'canada', 'central african republic',
    'chad', 'chile', 'china', 'colombia', 'comoros', 'congo', 'costa rica', 'croatia', 'cuba', 'cyprus', 'czechia', 'denmark', 'djibouti', 'dominica',
    'dominican republic', 'east timor', 'ecuador', 'egypt', 'el salvador', 'equatorial guinea', 'eritrea', 'estonia', 'eswatini', 'ethiopia', 'fiji',
    'finland', 'france', 'gabon', 'gambia', 'georgia', 'germany', 'ghana', 'greece', 'grenada', 'guatemala', 'guinea', 'guinea-bissau', 'guyana',
    'haiti', 'honduras', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'ivory coast', 'jamaica', 'japan',
    'jordan', 'kazakhstan', 'kenya', 'kiribati', 'korea north', 'korea south', 'kosovo', 'kuwait', 'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho',
    'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall islands',
    'mauritania', 'mauritius', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'myanmar', 'namibia', 'nauru',
    'nepal', 'netherlands', 'new zealand', 'nicaragua', 'niger', 'nigeria', 'north macedonia', 'norway', 'oman', 'pakistan', 'palau', 'panama', 'papua new guinea',
    'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'qatar', 'romania', 'russia', 'rwanda', 'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines',
    'samoa', 'san marino', 'sao tome and principe', 'saudi arabia', 'senegal', 'serbia', 'seychelles', 'sierra leone', 'singapore', 'slovakia', 'slovenia', 'solomon islands',
    'somalia', 'south africa', 'south sudan', 'spain', 'sri lanka', 'sudan', 'suriname', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan', 'tanzania', 'thailand',
    'togo', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan', 'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'us', 'uruguay',
    'uzbekistan', 'vanuatu', 'vatican city', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'

];

    if (countries.includes(input)) {
        const countryTime = new Date().toLocaleString("en-US", { timeZone: getCountryTimeZone(input) });
        document.getElementById('result').innerText = `Time in ${input.charAt(0).toUpperCase() + input.slice(1)}: ${countryTime}`;
    } else {
        document.getElementById('result').innerText = 'Invalid country name. Please enter a valid country from the list.';
    }
}

function getCountryTimeZone(country) {
    // For simplicity, using fixed offsets for demonstration purposes
    const timeZones = {
        "india": "Asia/Kolkata",
        "us": "America/New_York",
        "russia": "Europe/Moscow",
        "china": "Asia/Shanghai",
        "japan": "Asia/Tokyo",
        "brazil": "America/Sao_Paulo",
        "bangladesh": "Asia/Dhaka",
        "dubai": "Asia/Dubai",
        "kuwait": "Asia/Kuwait",
        "saudi": "Asia/Riyadh",
        "canada": "America/Toronto",
        "france": "Europe/Paris",
        "germany": "Europe/Berlin",
        "afghanistan": "Asia/Kabul",
        "albania": "Europe/Tirane",
        "algeria": "Africa/Algiers",
        "andorra": "Europe/Andorra",
        "angola": "Africa/Luanda",
        "antigua and barbuda": "America/Antigua",
        "argentina": "America/Argentina/Buenos_Aires",
        "armenia": "Asia/Yerevan",
        "australia": "Australia/Sydney",
        "austria": "Europe/Vienna",
        "azerbaijan": "Asia/Baku",
        "bahamas": "America/Nassau",
        "bahrain": "Asia/Bahrain",
        "bangladesh": "Asia/Dhaka",
        "barbados": "America/Barbados",
        "belarus": "Europe/Minsk",
        "belgium": "Europe/Brussels",
        "belize": "America/Belize",
        "benin": "Africa/Porto-Novo",
        "bhutan": "Asia/Thimphu",
        "bolivia": "America/La_Paz",
        "bosnia and herzegovina": "Europe/Sarajevo",
        "botswana": "Africa/Gaborone",
        "brazil": "America/Sao_Paulo",
        "brunei": "Asia/Brunei",
        "bulgaria": "Europe/Sofia",
        "burkina faso": "Africa/Ouagadougou",
        "burundi": "Africa/Bujumbura",
        "cabo verde": "Atlantic/Cape_Verde",
        "cambodia": "Asia/Phnom_Penh",
        "cameroon": "Africa/Douala",
        "canada": "America/Toronto",
        "central african republic": "Africa/Bangui",
        "chad": "Africa/Ndjamena",
        "chile": "America/Santiago",
        "china": "Asia/Shanghai",
        "colombia": "America/Bogota",
        "comoros": "Indian/Comoro",
        "congo": "Africa/Kinshasa",
        "costa rica": "America/Costa_Rica",
        "croatia": "Europe/Zagreb",
        "cuba": "America/Havana",
        "cyprus": "Asia/Nicosia",
        "czechia": "Europe/Prague",
        "denmark": "Europe/Copenhagen",
        "djibouti": "Africa/Djibouti",
        "dominica": "America/Dominica",
        "dominican republic": "America/Santo_Domingo",
        "east timor": "Asia/Dili",
        "ecuador": "America/Guayaquil",
        "egypt": "Africa/Cairo",
        "el salvador": "America/El_Salvador",
        "equatorial guinea": "Africa/Malabo",
        "eritrea": "Africa/Asmara",
        "estonia": "Europe/Tallinn",
        "eswatini": "Africa/Mbabane",
        "ethiopia": "Africa/Addis_Ababa",
        "fiji": "Pacific/Fiji",
        "finland": "Europe/Helsinki",
        "france": "Europe/Paris",
        "gabon": "Africa/Libreville",
        "gambia": "Africa/Banjul",
        "georgia": "Asia/Tbilisi",
        "germany": "Europe/Berlin",
        "ghana": "Africa/Accra",
        "greece": "Europe/Athens",
        "grenada": "America/Grenada",
        "guatemala": "America/Guatemala",
        "guinea": "Africa/Conakry",
        "guinea-bissau": "Africa/Bissau",
        "guyana": "America/Guyana",
        "haiti": "America/Port-au-Prince",
        "honduras": "America/Tegucigalpa",
        "hungary": "Europe/Budapest",
        "iceland": "Atlantic/Reykjavik",
        "india": "Asia/Kolkata",
        "indonesia": "Asia/Jakarta",
        "iran": "Asia/Tehran",
        "iraq": "Asia/Baghdad",
        "ireland": "Europe/Dublin",
        "israel": "Asia/Jerusalem",
        "italy": "Europe/Rome",
        "ivory coast": "Africa/Abidjan",
        "jamaica": "America/Jamaica",
        "japan": "Asia/Tokyo",
        "jordan": "Asia/Amman",
        "kazakhstan": "Asia/Almaty",
        "kenya": "Africa/Nairobi",
        "kiribati": "Pacific/Tarawa",
        "korea north": "Asia/Pyongyang",
        "korea south": "Asia/Seoul",
        "kosovo": "Europe/Belgrade", // No specific time zone for Kosovo, using Belgrade's time zone as an example
        "kuwait": "Asia/Kuwait",
        "kyrgyzstan": "Asia/Bishkek",
        "laos": "Asia/Vientiane",
        "latvia": "Europe/Riga",
        "lebanon": "Asia/Beirut",
        "lesotho": "Africa/Maseru",
        "liberia": "Africa/Monrovia",
        "libya": "Africa/Tripoli",
        "liechtenstein": "Europe/Vaduz",
        "lithuania": "Europe/Vilnius",
        "luxembourg": "Europe/Luxembourg",
        "madagascar": "Indian/Antananarivo",
        "malawi": "Africa/Blantyre",
        "malaysia": "Asia/Kuala_Lumpur",
        "maldives": "Indian/Maldives",
        "mali": "Africa/Bamako",
        "malta": "Europe/Malta",
        "marshall islands": "Pacific/Majuro",
        "mauritania": "Africa/Nouakchott",
        "mauritius": "Indian/Mauritius",
        "mexico": "America/Mexico_City",
        "micronesia": "Pacific/Chuuk",
        "moldova": "Europe/Chisinau",
        "monaco": "Europe/Monaco",
        "mongolia": "Asia/Ulaanbaatar",
        "montenegro": "Europe/Belgrade", // No specific time zone for Montenegro, using Belgrade's time zone as an example
        "morocco": "Africa/Casablanca",
        "mozambique": "Africa/Maputo",
        "myanmar": "Asia/Yangon",
        "namibia": "Africa/Windhoek",
        "nauru": "Pacific/Nauru",
        // Add more countries and their time zones as needed
    };

    return timeZones[country] || "UTC"; // Default to UTC if country not found
}








function TimeCountry() {
    const hours = parseInt(document.getElementById('hours').value, 10);
    const minutes = parseInt(document.getElementById('minutes').value, 10);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        alert('Please enter valid hours and minutes.');
        return;
    }

    const matchingCountries = findMatchingCountries(hours, minutes);

    if (matchingCountries.length > 0) {
        document.getElementById('result').innerText = `Countries matching the entered time: ${matchingCountries.join(', ')}`;
    } else {
        document.getElementById('result').innerText = 'No countries found for the entered time.';
    }
}

function findMatchingCountries(enteredHours, enteredMinutes) {
    const allCountries = [
        'india', 'us', 'russia', 'china', 'japan', 'brazil', 'bangladesh', 'dubai', 'kuwait', 'saudi', 'canada', 'france', 'germany',
    'afghanistan', 'albania', 'algeria', 'andorra', 'angola', 'antigua and barbuda', 'argentina', 'armenia', 'australia', 'austria',
    'azerbaijan', 'bahamas', 'bahrain', 'bangladesh', 'barbados', 'belarus', 'belgium', 'belize', 'benin', 'bhutan', 'bolivia', 'bosnia and herzegovina',
    'botswana', 'brazil', 'brunei', 'bulgaria', 'burkina faso', 'burundi', 'cabo verde', 'cambodia', 'cameroon', 'canada', 'central african republic',
    'chad', 'chile', 'china', 'colombia', 'comoros', 'congo', 'costa rica', 'croatia', 'cuba', 'cyprus', 'czechia', 'denmark', 'djibouti', 'dominica',
    'dominican republic', 'east timor', 'ecuador', 'egypt', 'el salvador', 'equatorial guinea', 'eritrea', 'estonia', 'eswatini', 'ethiopia', 'fiji',
    'finland', 'france', 'gabon', 'gambia', 'georgia', 'germany', 'ghana', 'greece', 'grenada', 'guatemala', 'guinea', 'guinea-bissau', 'guyana',
    'haiti', 'honduras', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'ivory coast', 'jamaica', 'japan',
    'jordan', 'kazakhstan', 'kenya', 'kiribati', 'korea north', 'korea south', 'kosovo', 'kuwait', 'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho',
    'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall islands',
    'mauritania', 'mauritius', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'myanmar', 'namibia', 'nauru',
    'nepal', 'netherlands', 'new zealand', 'nicaragua', 'niger', 'nigeria', 'north macedonia', 'norway', 'oman', 'pakistan', 'palau', 'panama', 'papua new guinea',
    'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'qatar', 'romania', 'russia', 'rwanda', 'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines',
    'samoa', 'san marino', 'sao tome and principe', 'saudi arabia', 'senegal', 'serbia', 'seychelles', 'sierra leone', 'singapore', 'slovakia', 'slovenia', 'solomon islands',
    'somalia', 'south africa', 'south sudan', 'spain', 'sri lanka', 'sudan', 'suriname', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan', 'tanzania', 'thailand',
    'togo', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan', 'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'us', 'uruguay',
    'uzbekistan', 'vanuatu', 'vatican city', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'
        // Include all the countries from the previous list
        // ...

        // Add more countries and their time zones as needed
    ];

    const matchingCountries = [];

    allCountries.forEach(country => {
        const countryTime = new Date().toLocaleString("en-US", { timeZone: getCountryTimeZone(country) });
        const countryHours = new Date(countryTime).getHours();
        const countryMinutes = new Date(countryTime).getMinutes();

        if (countryHours === enteredHours && countryMinutes === enteredMinutes) {
            matchingCountries.push(country);
        }
    });

    return matchingCountries;
}



 

// ------------------  THIS IS FOR ALL COUNTRIES-----------------

function showAllCountries() {
    const allCountriesTime = getAllCountriesTime();
    document.getElementById('allCountriesTime').innerText = allCountriesTime;
}

function getAllCountriesTime() {
    //const input = document.getElementById('inputData').value.trim().toLowerCase();
    const allCountries = ['india', 'us', 'russia', 'china', 'japan', 'brazil', 'bangladesh', 'dubai', 'kuwait', 'saudi', 'canada', 'france', 'germany',
    'afghanistan', 'albania', 'algeria', 'andorra', 'angola', 'antigua and barbuda', 'argentina', 'armenia', 'australia', 'austria',
    'azerbaijan', 'bahamas', 'bahrain', 'bangladesh', 'barbados', 'belarus', 'belgium', 'belize', 'benin', 'bhutan', 'bolivia', 'bosnia and herzegovina',
    'botswana', 'brazil', 'brunei', 'bulgaria', 'burkina faso', 'burundi', 'cabo verde', 'cambodia', 'cameroon', 'canada', 'central african republic',
    'chad', 'chile', 'china', 'colombia', 'comoros', 'congo', 'costa rica', 'croatia', 'cuba', 'cyprus', 'czechia', 'denmark', 'djibouti', 'dominica',
    'dominican republic', 'east timor', 'ecuador', 'egypt', 'el salvador', 'equatorial guinea', 'eritrea', 'estonia', 'eswatini', 'ethiopia', 'fiji',
    'finland', 'france', 'gabon', 'gambia', 'georgia', 'germany', 'ghana', 'greece', 'grenada', 'guatemala', 'guinea', 'guinea-bissau', 'guyana',
    'haiti', 'honduras', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'ivory coast', 'jamaica', 'japan',
    'jordan', 'kazakhstan', 'kenya', 'kiribati', 'korea north', 'korea south', 'kosovo', 'kuwait', 'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho',
    'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall islands',
    'mauritania', 'mauritius', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'myanmar', 'namibia', 'nauru',
    'nepal', 'netherlands', 'new zealand', 'nicaragua', 'niger', 'nigeria', 'north macedonia', 'norway', 'oman', 'pakistan', 'palau', 'panama', 'papua new guinea',
    'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'qatar', 'romania', 'russia', 'rwanda', 'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines',
    'samoa', 'san marino', 'sao tome and principe', 'saudi arabia', 'senegal', 'serbia', 'seychelles', 'sierra leone', 'singapore', 'slovakia', 'slovenia', 'solomon islands',
    'somalia', 'south africa', 'south sudan', 'spain', 'sri lanka', 'sudan', 'suriname', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan', 'tanzania', 'thailand',
    'togo', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan', 'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'us', 'uruguay',
    'uzbekistan', 'vanuatu', 'vatican city', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'

];

let result = '';

    allCountries.forEach(country => {
        const countryTime = new Date().toLocaleString("en-US", { timeZone: getCountryTimeZone(country) });
        result += `${country.charAt(0).toUpperCase() + country.slice(1)}: ${countryTime}\n`;
    });

    return result;
}

function getCountryTimeZone(country) {
    // For simplicity, using fixed offsets for demonstration purposes
    const timeZones = {
        "india": "Asia/Kolkata",
        "us": "America/New_York",
        "russia": "Europe/Moscow",
        "china": "Asia/Shanghai",
        "japan": "Asia/Tokyo",
        "brazil": "America/Sao_Paulo",
        "bangladesh": "Asia/Dhaka",
        "dubai": "Asia/Dubai",
        "kuwait": "Asia/Kuwait",
        "saudi": "Asia/Riyadh",
        "canada": "America/Toronto",
        "france": "Europe/Paris",
        "germany": "Europe/Berlin",
        "afghanistan": "Asia/Kabul",
        "albania": "Europe/Tirane",
        "algeria": "Africa/Algiers",
        "andorra": "Europe/Andorra",
        "angola": "Africa/Luanda",
        "antigua and barbuda": "America/Antigua",
        "argentina": "America/Argentina/Buenos_Aires",
        "armenia": "Asia/Yerevan",
        "australia": "Australia/Sydney",
        "austria": "Europe/Vienna",
        "azerbaijan": "Asia/Baku",
        "bahamas": "America/Nassau",
        "bahrain": "Asia/Bahrain",
        "bangladesh": "Asia/Dhaka",
        "barbados": "America/Barbados",
        "belarus": "Europe/Minsk",
        "belgium": "Europe/Brussels",
        "belize": "America/Belize",
        "benin": "Africa/Porto-Novo",
        "bhutan": "Asia/Thimphu",
        "bolivia": "America/La_Paz",
        "bosnia and herzegovina": "Europe/Sarajevo",
        "botswana": "Africa/Gaborone",
        "brazil": "America/Sao_Paulo",
        "brunei": "Asia/Brunei",
        "bulgaria": "Europe/Sofia",
        "burkina faso": "Africa/Ouagadougou",
        "burundi": "Africa/Bujumbura",
        "cabo verde": "Atlantic/Cape_Verde",
        "cambodia": "Asia/Phnom_Penh",
        "cameroon": "Africa/Douala",
        "canada": "America/Toronto",
        "central african republic": "Africa/Bangui",
        "chad": "Africa/Ndjamena",
        "chile": "America/Santiago",
        "china": "Asia/Shanghai",
        "colombia": "America/Bogota",
        "comoros": "Indian/Comoro",
        "congo": "Africa/Kinshasa",
        "costa rica": "America/Costa_Rica",
        "croatia": "Europe/Zagreb",
        "cuba": "America/Havana",
        "cyprus": "Asia/Nicosia",
        "czechia": "Europe/Prague",
        "denmark": "Europe/Copenhagen",
        "djibouti": "Africa/Djibouti",
        "dominica": "America/Dominica",
        "dominican republic": "America/Santo_Domingo",
        "east timor": "Asia/Dili",
        "ecuador": "America/Guayaquil",
        "egypt": "Africa/Cairo",
        "el salvador": "America/El_Salvador",
        "equatorial guinea": "Africa/Malabo",
        "eritrea": "Africa/Asmara",
        "estonia": "Europe/Tallinn",
        "eswatini": "Africa/Mbabane",
        "ethiopia": "Africa/Addis_Ababa",
        "fiji": "Pacific/Fiji",
        "finland": "Europe/Helsinki",
        "france": "Europe/Paris",
        "gabon": "Africa/Libreville",
        "gambia": "Africa/Banjul",
        "georgia": "Asia/Tbilisi",
        "germany": "Europe/Berlin",
        "ghana": "Africa/Accra",
        "greece": "Europe/Athens",
        "grenada": "America/Grenada",
        "guatemala": "America/Guatemala",
        "guinea": "Africa/Conakry",
        "guinea-bissau": "Africa/Bissau",
        "guyana": "America/Guyana",
        "haiti": "America/Port-au-Prince",
        "honduras": "America/Tegucigalpa",
        "hungary": "Europe/Budapest",
        "iceland": "Atlantic/Reykjavik",
        "india": "Asia/Kolkata",
        "indonesia": "Asia/Jakarta",
        "iran": "Asia/Tehran",
        "iraq": "Asia/Baghdad",
        "ireland": "Europe/Dublin",
        "israel": "Asia/Jerusalem",
        "italy": "Europe/Rome",
        "ivory coast": "Africa/Abidjan",
        "jamaica": "America/Jamaica",
        "japan": "Asia/Tokyo",
        "jordan": "Asia/Amman",
        "kazakhstan": "Asia/Almaty",
        "kenya": "Africa/Nairobi",
        "kiribati": "Pacific/Tarawa",
        "korea north": "Asia/Pyongyang",
        "korea south": "Asia/Seoul",
        "kosovo": "Europe/Belgrade", // No specific time zone for Kosovo, using Belgrade's time zone as an example
        "kuwait": "Asia/Kuwait",
        "kyrgyzstan": "Asia/Bishkek",
        "laos": "Asia/Vientiane",
        "latvia": "Europe/Riga",
        "lebanon": "Asia/Beirut",
        "lesotho": "Africa/Maseru",
        "liberia": "Africa/Monrovia",
        "libya": "Africa/Tripoli",
        "liechtenstein": "Europe/Vaduz",
        "lithuania": "Europe/Vilnius",
        "luxembourg": "Europe/Luxembourg",
        "madagascar": "Indian/Antananarivo",
        "malawi": "Africa/Blantyre",
        "malaysia": "Asia/Kuala_Lumpur",
        "maldives": "Indian/Maldives",
        "mali": "Africa/Bamako",
        "malta": "Europe/Malta",
        "marshall islands": "Pacific/Majuro",
        "mauritania": "Africa/Nouakchott",
        "mauritius": "Indian/Mauritius",
        "mexico": "America/Mexico_City",
        "micronesia": "Pacific/Chuuk",
        "moldova": "Europe/Chisinau",
        "monaco": "Europe/Monaco",
        "mongolia": "Asia/Ulaanbaatar",
        "montenegro": "Europe/Belgrade", // No specific time zone for Montenegro, using Belgrade's time zone as an example
        "morocco": "Africa/Casablanca",
        "mozambique": "Africa/Maputo",
        "myanmar": "Asia/Yangon",
        "namibia": "Africa/Windhoek",
        "nauru": "Pacific/Nauru",
        // Add more countries and their time zones as needed
    };

    return timeZones[country] || "UTC"; // Default to UTC if country not found
}













/*


function calculateTime() {
    const input = document.getElementById('inputData').value;

    if (!isNaN(Date.parse(input))) {
        // If input is a valid date
        const enteredTime = new Date(input);
        const indianTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});

        const timeDifference = Math.abs(enteredTime - new Date(indianTime));
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));

        if (minutesDifference <= 3 || minutesDifference >= -3) {
            document.getElementById('result').innerText = `Matching countries for the entered time: India`;
        } else {
            document.getElementById('result').innerText = `No matching countries for the entered time.`;
        }
    } else {
        // If input is a country name
        // For simplicity, just displaying the time in the entered country using fixed offset
        const enteredCountry = input;
        const countryTime = new Date().toLocaleString("en-US", {timeZone: getCountryTimeZone(enteredCountry)});

        document.getElementById('result').innerText = `Time in ${enteredCountry}: ${countryTime}`;
    }
}

function getCountryTimeZone(country) {
    // For simplicity, using fixed offsets for demonstration purposes
    const timeZones = {
        "India": "Asia/Kolkata",
        // Add more countries and their time zones as needed
    };

    return timeZones[country] || "UTC"; // Default to UTC if country not found
}

*/