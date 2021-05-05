const VERSION = '1.0';
const URL = `https://static.revolt.chat/mutant/downloads/${VERSION}/mtnt_${VERSION}_data.json`;

const Axios = require('axios');
const { writeFile } = require('fs/promises');

(async () => {
    let res = await Axios(URL);

    let categories = {};
    for (let entry of res.data) {
        let cat = categories[entry.cat];
        if (cat) {
            cat.add(entry.src);
        } else {
            let set = new Set();
            set.add(entry.src);
            categories[entry.cat] = set;
        }
    }

    let out = {};
    for (let cat of Object.keys(categories)) {
        out[cat] = Array.from(categories[cat]);
    }

    await writeFile('public/data.json', JSON.stringify(out));
})();
